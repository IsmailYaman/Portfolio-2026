'use client'

import { motion } from 'motion/react'
import { navLinks } from './nav-links'
import { ProjectsDropdown } from './ProjectsDropdown'

interface DesktopNavProps {
  activeSection: string
  isProjectPage: boolean
  isProjectsDropdownOpen: boolean
  onProjectsDropdownToggle: () => void
  onProjectsDropdownClose: () => void
  onNavClick: (href: string) => void
  dropdownRef: React.RefObject<HTMLDivElement | null>
}

export function DesktopNav({
  activeSection,
  isProjectPage,
  isProjectsDropdownOpen,
  onProjectsDropdownToggle,
  onProjectsDropdownClose,
  onNavClick,
  dropdownRef,
}: DesktopNavProps) {
  return (
    <div className="hidden md:flex items-center gap-1">
      {navLinks.map((link, index) => {
        const isActive = activeSection === link.href.substring(1)

        // Projects dropdown
        if (link.hasDropdown) {
          return (
            <ProjectsDropdown
              key={link.name}
              isOpen={isProjectsDropdownOpen}
              isActive={isActive || isProjectPage}
              index={index}
              onToggle={onProjectsDropdownToggle}
              onNavClick={onNavClick}
              onClose={onProjectsDropdownClose}
              dropdownRef={dropdownRef}
            />
          )
        }

        return (
          <motion.button
            key={link.name}
            onClick={() => onNavClick(link.href)}
            className={`font-sans relative px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer ${
              isActive
                ? 'text-portfolio-accent'
                : 'text-portfolio-text-muted hover:text-portfolio-accent'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
            whileHover={{ y: -2 }}
          >
            {link.name}
            {isActive && (
              <motion.span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-portfolio-accent rounded-full"
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

      {/* Hire Me button */}
      <motion.button
        onClick={() => onNavClick('#contact')}
        className="font-sans ml-4 px-6 py-2.5 bg-portfolio-text text-white text-sm font-medium rounded-full shadow-lg shadow-black/10 cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        whileHover={{
          scale: 1.05,
          y: -2,
          backgroundColor: '#c45d3a',
          boxShadow:
            '0 20px 25px -5px rgba(196, 93, 58, 0.2), 0 10px 10px -5px rgba(196, 93, 58, 0.1)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        Hire Me
      </motion.button>
    </div>
  )
}
