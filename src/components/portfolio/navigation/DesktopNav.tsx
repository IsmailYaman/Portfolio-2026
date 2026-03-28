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
    <div className="hidden md:flex items-center gap-0.5">
      {navLinks.map((link, index) => {
        const isActive = activeSection === link.href.substring(1)

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
            className="font-sans relative px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer rounded-full text-portfolio-text-muted hover:text-portfolio-accent"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{link.name}</span>
          </motion.button>
        )
      })}

      {/* Hire Me button */}
      <motion.button
        onClick={() => onNavClick('#contact')}
        className="font-sans ml-2 px-5 py-2 bg-portfolio-text text-white text-sm font-medium rounded-full cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        whileHover={{
          scale: 1.05,
          backgroundColor: '#c45d3a',
          boxShadow: '0 8px 24px rgba(196, 93, 58, 0.3)',
          transition: { duration: 0.2, ease: 'easeOut' },
        }}
        whileTap={{ scale: 0.95 }}
      >
        Let's Talk
      </motion.button>
    </div>
  )
}
