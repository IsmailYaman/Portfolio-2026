import { useState, useEffect } from 'react'
import { useScroll, useMotionValueEvent } from 'motion/react'
import { navLinks } from '../nav-links'

interface UseNavigationScrollOptions {
  onHide?: () => void
}

interface UseNavigationScrollReturn {
  isScrolled: boolean
  isVisible: boolean
  activeSection: string
}

export function useNavigationScroll(
  options: UseNavigationScrollOptions = {}
): UseNavigationScrollReturn {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [activeSection, setActiveSection] = useState('')
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)

    // Hide/show nav based on scroll direction
    if (latest > lastScrollY && latest > 100) {
      // Scrolling down & past 100px
      setIsVisible(false)
      options.onHide?.()
    } else if (latest < lastScrollY) {
      // Scrolling up
      setIsVisible(true)
    }

    setLastScrollY(latest)
  })

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return {
    isScrolled,
    isVisible,
    activeSection,
  }
}
