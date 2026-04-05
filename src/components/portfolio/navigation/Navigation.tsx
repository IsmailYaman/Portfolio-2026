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
  const { isScrolled } = useNavigationScroll()

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
      {/* Desktop pill nav */}
      <motion.header
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
          opacity: { duration: 0.3 },
        }}
      >
        <motion.nav
          className="pointer-events-auto mt-5 mx-4 flex items-center gap-6 rounded-full pl-4 pr-2 py-2"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            backgroundColor: isScrolled
              ? 'rgba(255, 255, 255, 0.85)'
              : 'rgba(255, 255, 255, 0.6)',
            boxShadow: isScrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(0, 0, 0, 0.06)'
              : '0 4px 16px rgba(0, 0, 0, 0.03), inset 0 0 0 1px rgba(0, 0, 0, 0.03)',
          }}
          transition={{
            scale: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            opacity: { duration: 0.5 },
            backgroundColor: { duration: 0.4, ease: 'easeInOut' },
            boxShadow: { duration: 0.4, ease: 'easeInOut' },
          }}
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <NavLogo isHomePage={isHomePage} isScrolled={isScrolled} />

          <DesktopNav
            isProjectsDropdownOpen={isProjectsDropdownOpen}
            onProjectsDropdownToggle={() =>
              setIsProjectsDropdownOpen(!isProjectsDropdownOpen)
            }
            onProjectsDropdownClose={() => setIsProjectsDropdownOpen(false)}
            onNavClick={handleNavClick}
            dropdownRef={dropdownRef}
          />
        </motion.nav>
      </motion.header>

      {/* Mobile bottom pill */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
      >
        <motion.nav
          className="pointer-events-auto flex items-center rounded-full"
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: isMobileMenuOpen ? 20 : 0,
            opacity: isMobileMenuOpen ? 0 : 1,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), inset 0 0 0 1px rgba(0, 0, 0, 0.04)',
          }}
          transition={{
            y: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
            opacity: { duration: 0.2 },
            backgroundColor: { duration: 0.4 },
            boxShadow: { duration: 0.4 },
            default: { delay: isMobileMenuOpen ? 0 : 0.2 },
          }}
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <div className="pl-4 pr-1 py-1 whitespace-nowrap">
            <NavLogo isHomePage={isHomePage} isScrolled={false} />
          </div>
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </motion.nav>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onNavClick={handleNavClick}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
