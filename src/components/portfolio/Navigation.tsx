'use client'

import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)

    // Hide/show nav based on scroll direction
    if (latest > lastScrollY && latest > 100) {
      // Scrolling down & past 100px
      setIsVisible(false)
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
          type: 'spring',
          stiffness: 200,
          damping: 25
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <nav className="flex items-center justify-between h-20">
            {/* Logo with animated underline */}
            <motion.a
              href="#"
              className={`relative font-serif text-xl font-medium transition-colors duration-300 group ${
                isScrolled ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]'
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.02 }}
            >
              Alex<span className="text-[#c45d3a]">.</span>Chen
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-[#c45d3a]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop navigation with active indicators */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-[#c45d3a]'
                        : isScrolled
                          ? 'text-[#5a5a5a] hover:text-[#c45d3a]'
                          : 'text-[#5a5a5a] hover:text-[#c45d3a]'
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#c45d3a] rounded-full"
                        layoutId="activeIndicator"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                )
              })}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="ml-4 px-6 py-2.5 bg-[#1a1a1a] text-white text-sm font-medium rounded-full hover:bg-[#c45d3a] transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-[#c45d3a]/20"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
            </div>

            {/* Mobile menu button with animated icon */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#1a1a1a]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#1a1a1a]" />
                )}
              </motion.div>
            </motion.button>
          </nav>
        </div>

        {/* Animated border bottom */}
        {isScrolled && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c45d3a]/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </motion.header>

      {/* Mobile menu with staggered animations */}
      <motion.div
        className={`fixed inset-0 z-40 bg-white md:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 relative">
          {/* Decorative background element */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c45d3a]/5 rounded-full blur-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isMobileMenuOpen
                ? { scale: 1, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 0.6 }}
          />

          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="relative text-3xl font-medium text-[#1a1a1a] hover:text-[#c45d3a] transition-colors duration-300 z-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.button>
          ))}
          <motion.button
            onClick={() => scrollToSection('#contact')}
            className="mt-4 px-10 py-4 bg-[#1a1a1a] text-white text-lg font-medium rounded-full hover:bg-[#c45d3a] transition-colors duration-300 shadow-xl z-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}
