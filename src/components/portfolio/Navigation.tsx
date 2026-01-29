'use client'

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, useLocation } from '@tanstack/react-router'
import { projects } from '@/data/projects'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects', hasDropdown: true },
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
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)

    // Hide/show nav based on scroll direction
    if (latest > lastScrollY && latest > 100) {
      // Scrolling down & past 100px
      setIsVisible(false)
      // Close dropdown when header hides
      setIsProjectsDropdownOpen(false)
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (href: string) => {
    if (isHomePage) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to home with hash
      window.location.href = '/' + href
    }
    setIsMobileMenuOpen(false)
    setIsProjectsDropdownOpen(false)
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{
          y: isVisible ? 0 : -100,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)',
          boxShadow: isScrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.05)' : '0 0 0 0 rgba(0, 0, 0, 0)'
        }}
        transition={{
          y: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1]
          },
          backgroundColor: {
            duration: 0.3,
            ease: 'easeInOut'
          },
          boxShadow: {
            duration: 0.3,
            ease: 'easeInOut'
          }
        }}
        style={{
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <nav className="flex items-center justify-between h-20">
            {/* Logo with animated underline */}
            <Link
              to="/"
              onClick={() => {
                if (isHomePage) {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              <motion.span
                className={`relative font-serif text-xl font-medium transition-colors duration-300 group ${
                  isScrolled ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]'
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02 }}
              >
                Alex<span className="text-[#c45d3a]">.</span>Chen
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#c45d3a]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </Link>

            {/* Desktop navigation with active indicators */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1)
                const isProjectPage = location.pathname.startsWith('/projects/')

                // Projects dropdown
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="relative" ref={dropdownRef}>
                      <motion.button
                        onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${
                          isActive || isProjectPage
                            ? 'text-[#c45d3a]'
                            : 'text-[#5a5a5a] hover:text-[#c45d3a]'
                        }`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                        whileHover={{ y: -2 }}
                      >
                        {link.name}
                        <motion.span
                          animate={{ rotate: isProjectsDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-3 h-3" />
                        </motion.span>
                        {(isActive || isProjectPage) && (
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

                      {/* Dropdown menu */}
                      <AnimatePresence>
                        {isProjectsDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#e8e4df] overflow-hidden"
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            {/* All Projects link */}
                            <button
                              onClick={() => handleNavClick('#projects')}
                              className="w-full px-4 py-3 text-left text-sm font-medium text-[#1a1a1a] hover:bg-[#f5f3f0] hover:text-[#c45d3a] transition-colors duration-200 border-b border-[#e8e4df]"
                              style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                              All Projects
                            </button>

                            {/* Individual projects */}
                            <div className="py-2">
                              {projects.map((project) => (
                                <Link
                                  key={project.slug}
                                  to="/projects/$slug"
                                  params={{ slug: project.slug }}
                                  onClick={() => setIsProjectsDropdownOpen(false)}
                                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#f5f3f0] transition-colors duration-200 group"
                                >
                                  <span
                                    className="w-2 h-2 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: project.color }}
                                  />
                                  <span
                                    className="text-sm text-[#5a5a5a] group-hover:text-[#c45d3a] transition-colors duration-200 truncate"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                  >
                                    {project.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-[#c45d3a]'
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
                onClick={() => handleNavClick('#contact')}
                className="ml-4 px-6 py-2.5 bg-[#1a1a1a] text-white text-sm font-medium rounded-full shadow-lg shadow-black/10"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  backgroundColor: '#c45d3a',
                  boxShadow: '0 20px 25px -5px rgba(196, 93, 58, 0.2), 0 10px 10px -5px rgba(196, 93, 58, 0.1)'
                }}
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

          {navLinks.map((link, index) => {
            // Projects with expandable submenu
            if (link.hasDropdown) {
              return (
                <div key={link.name} className="flex flex-col items-center z-10">
                  <motion.button
                    onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                    className="relative text-3xl font-medium text-[#1a1a1a] hover:text-[#c45d3a] transition-colors duration-300 flex items-center gap-2"
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
                    <motion.span
                      animate={{ rotate: isMobileProjectsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {isMobileProjectsOpen && (
                      <motion.div
                        className="flex flex-col items-center gap-3 mt-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <button
                          onClick={() => handleNavClick('#projects')}
                          className="text-lg text-[#5a5a5a] hover:text-[#c45d3a] transition-colors duration-200"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          All Projects
                        </button>
                        {projects.map((project) => (
                          <Link
                            key={project.slug}
                            to="/projects/$slug"
                            params={{ slug: project.slug }}
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setIsMobileProjectsOpen(false)
                            }}
                            className="flex items-center gap-2 text-lg text-[#5a5a5a] hover:text-[#c45d3a] transition-colors duration-200"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: project.color }}
                            />
                            {project.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
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
            )
          })}
          <motion.button
            onClick={() => handleNavClick('#contact')}
            className="mt-4 px-10 py-4 bg-[#1a1a1a] text-white text-lg font-medium rounded-full shadow-xl z-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#c45d3a'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}
