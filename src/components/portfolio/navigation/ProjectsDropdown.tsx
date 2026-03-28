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
        className="font-sans relative px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer rounded-full text-portfolio-text-muted hover:text-portfolio-accent"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 flex items-center gap-1">
          Projects
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-3 h-3" />
          </motion.span>
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 mt-3 w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-portfolio-border/50 overflow-hidden z-10"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => onNavClick('#projects')}
              className="font-sans w-full px-4 py-3 cursor-pointer text-left text-sm font-medium text-portfolio-text hover:bg-portfolio-accent/5 hover:text-portfolio-accent transition-colors duration-200 border-b border-portfolio-border/50"
            >
              All Projects
            </button>
            <div className="py-1.5">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-portfolio-accent/5 transition-colors duration-200 group"
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
