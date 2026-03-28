import { useState, useEffect, useRef } from 'react'
import { useScroll, useMotionValueEvent } from 'motion/react'
import { navLinks } from '@/data/nav-links'

/** Scroll position threshold for showing compact nav style */
const SCROLL_THRESHOLD = 50
/** Intersection Observer threshold for active section detection */
const INTERSECTION_THRESHOLD = 0.15

interface UseNavigationScrollReturn {
  /** Whether user has scrolled past the threshold */
  isScrolled: boolean
  /** Currently active section ID */
  activeSection: string
}

/**
 * Hook for managing navigation scroll state and active section tracking.
 * Uses a single Intersection Observer to track all sections simultaneously.
 * Clears the active section when no sections are in view (e.g. hero or footer).
 */
export function useNavigationScroll(): UseNavigationScrollReturn {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const visibleSections = useRef(new Set<string>())
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > SCROLL_THRESHOLD)
  })

  // Track active section using a single Intersection Observer
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.substring(1))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (entry.isIntersecting) {
            visibleSections.current.add(id)
          } else {
            visibleSections.current.delete(id)
          }
        })

        // Pick the last visible section in DOM order, or clear if none
        const active =
          sectionIds.filter((id) => visibleSections.current.has(id)).pop() ||
          ''
        setActiveSection(active)
      },
      { threshold: INTERSECTION_THRESHOLD }
    )

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return {
    isScrolled,
    activeSection,
  }
}
