'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { navLinks } from './nav-links'
import { projects } from '@/data/projects'

interface MobileMenuProps {
  isOpen: boolean
  onNavClick: (href: string) => void
  onClose: () => void
}

export function MobileMenu({ isOpen, onNavClick, onClose }: MobileMenuProps) {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  const handleNavClick = (href: string) => {
    onNavClick(href)
    onClose()
  }

  const handleProjectClick = () => {
    onClose()
    setIsProjectsOpen(false)
  }

  return (
    <motion.div
      className={`fixed inset-0 z-40 bg-white md:hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      initial={false}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center justify-center h-full gap-8 relative">
        {/* Decorative background element */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isOpen ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.6 }}
        />

        {navLinks.map((link, index) => {
          // Projects with expandable submenu
          if (link.hasDropdown) {
            return (
              <div key={link.name} className="flex flex-col items-center z-10">
                <motion.button
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                  className="font-playfair relative text-3xl font-medium text-portfolio-text hover:text-portfolio-accent transition-colors duration-300 flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  <motion.span
                    animate={{ rotate: isProjectsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {isProjectsOpen && (
                    <motion.div
                      className="flex flex-col items-center gap-3 mt-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button
                        onClick={() => handleNavClick('#projects')}
                        className="font-sans text-lg text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200"
                      >
                        All Projects
                      </button>
                      {projects.map((project) => (
                        <Link
                          key={project.slug}
                          to="/projects/$slug"
                          params={{ slug: project.slug }}
                          onClick={handleProjectClick}
                          className="font-sans flex items-center gap-2 text-lg text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200"
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
              className="font-playfair relative text-3xl font-medium text-portfolio-text hover:text-portfolio-accent transition-colors duration-300 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.button>
          )
        })}

        {/* Hire Me button */}
        <motion.button
          onClick={() => handleNavClick('#contact')}
          className="font-sans mt-4 px-10 py-4 bg-portfolio-text text-white text-lg font-medium rounded-full shadow-xl z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#c45d3a',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.button>
      </div>
    </motion.div>
  )
}
