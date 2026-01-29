'use client'

import { motion } from 'motion/react'
import { useState, useRef, useCallback } from 'react'
import { useLocation } from '@tanstack/react-router'

import { useNavigationScroll, useClickOutside } from './hooks'
import { NavLogo } from './NavLogo'
import { DesktopNav } from './DesktopNav'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileMenu } from './MobileMenu'

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const isHomePage = location.pathname === '/'
  const isProjectPage = location.pathname.startsWith('/projects/')

  const { isScrolled, isVisible, activeSection } = useNavigationScroll({
    onHide: () => setIsProjectsDropdownOpen(false),
  })

  useClickOutside(dropdownRef, () => setIsProjectsDropdownOpen(false))

  const handleNavClick = useCallback(
    (href: string) => {
      if (isHomePage) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.location.href = '/' + href
      }
      setIsMobileMenuOpen(false)
      setIsProjectsDropdownOpen(false)
    },
    [isHomePage]
  )

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{
          y: isVisible ? 0 : -100,
          backgroundColor: isScrolled
            ? 'rgba(255, 255, 255, 0.8)'
            : 'rgba(255, 255, 255, 0)',
          boxShadow: isScrolled
            ? '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
            : '0 0 0 0 rgba(0, 0, 0, 0)',
        }}
        transition={{
          y: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
          backgroundColor: { duration: 0.3, ease: 'easeInOut' },
          boxShadow: { duration: 0.3, ease: 'easeInOut' },
        }}
        style={{
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <nav className="flex items-center justify-between h-20">
            <NavLogo isHomePage={isHomePage} />

            <DesktopNav
              activeSection={activeSection}
              isProjectPage={isProjectPage}
              isProjectsDropdownOpen={isProjectsDropdownOpen}
              onProjectsDropdownToggle={() =>
                setIsProjectsDropdownOpen(!isProjectsDropdownOpen)
              }
              onProjectsDropdownClose={() => setIsProjectsDropdownOpen(false)}
              onNavClick={handleNavClick}
              dropdownRef={dropdownRef}
            />

            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
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

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onNavClick={handleNavClick}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
