'use client'

import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { projects } from '@/data/projects'

interface ProjectsDropdownProps {
  isOpen: boolean
  isActive: boolean
  index: number
  onToggle: () => void
  onNavClick: (href: string) => void
  onClose: () => void
  dropdownRef: React.RefObject<HTMLDivElement | null>
}

export function ProjectsDropdown({
  isOpen,
  isActive,
  index,
  onToggle,
  onNavClick,
  onClose,
  dropdownRef,
}: ProjectsDropdownProps) {
  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={onToggle}
        className={`font-sans relative px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 cursor-pointer ${
          isActive ? 'text-portfolio-accent' : 'text-portfolio-text-muted hover:text-portfolio-accent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
        whileHover={{ y: -2 }}
      >
        Projects
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-3 h-3" />
        </motion.span>
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-portfolio-border overflow-hidden z-10"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* All Projects link */}
            <button
              onClick={() => onNavClick('#projects')}
              className="font-sans w-full px-4 py-3 cursor-pointer text-left text-sm font-medium text-portfolio-text hover:bg-portfolio-bg hover:text-portfolio-accent transition-colors duration-200 border-b border-portfolio-border"
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
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-portfolio-bg transition-colors duration-200 group"
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: project.color }}
                  />
                  <span className="font-sans text-sm text-portfolio-text-muted group-hover:text-portfolio-accent transition-colors duration-200 truncate">
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
