import { useState, useEffect } from 'react'
import { useScroll, useMotionValueEvent } from 'motion/react'
import { navLinks } from '../nav-links'

/** Scroll position threshold for showing compact nav style */
const SCROLL_THRESHOLD = 50
/** Intersection Observer threshold for active section detection */
const INTERSECTION_THRESHOLD = 0.3

interface UseNavigationScrollReturn {
  /** Whether user has scrolled past the threshold */
  isScrolled: boolean
  /** Currently active section ID */
  activeSection: string
}

/**
 * Hook for managing navigation scroll state and active section tracking.
 * Uses Intersection Observer for efficient section detection instead of scroll polling.
 */
export function useNavigationScroll(): UseNavigationScrollReturn {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > SCROLL_THRESHOLD)
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
    activeSection,
  }
}
