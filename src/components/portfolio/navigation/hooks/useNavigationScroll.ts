import { useState, useEffect, useRef } from 'react'
import { useScroll, useMotionValueEvent } from 'motion/react'
import { navLinks } from '../nav-links'

/** Scroll position threshold for showing compact nav style */
const SCROLL_THRESHOLD = 50
/** Scroll position threshold for hiding nav on scroll down */
const HIDE_THRESHOLD = 100
/** Intersection Observer threshold for active section detection */
const INTERSECTION_THRESHOLD = 0.3

interface UseNavigationScrollOptions {
  /** Callback fired when navigation is hidden */
  onHide?: () => void
}

interface UseNavigationScrollReturn {
  /** Whether user has scrolled past the threshold */
  isScrolled: boolean
  /** Whether navigation should be visible */
  isVisible: boolean
  /** Currently active section ID */
  activeSection: string
}

/**
 * Hook for managing navigation scroll behavior and active section tracking.
 * Uses Intersection Observer for efficient section detection instead of scroll polling.
 *
 * @param options - Configuration options
 * @returns Navigation scroll state
 */
export function useNavigationScroll(
  options: UseNavigationScrollOptions = {}
): UseNavigationScrollReturn {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [activeSection, setActiveSection] = useState('')
  const lastScrollY = useRef(0)
  const { scrollY } = useScroll()

  // Handle nav visibility based on scroll direction
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > SCROLL_THRESHOLD)

    if (latest > lastScrollY.current && latest > HIDE_THRESHOLD) {
      // Scrolling down & past threshold - hide nav
      setIsVisible(false)
      options.onHide?.()
    } else if (latest < lastScrollY.current) {
      // Scrolling up - show nav
      setIsVisible(true)
    }

    lastScrollY.current = latest
  })

  // Track active section using Intersection Observer
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.substring(1))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId)
          }
        },
        { threshold: INTERSECTION_THRESHOLD }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return {
    isScrolled,
    isVisible,
    activeSection,
  }
}
