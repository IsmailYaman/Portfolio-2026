'use client'

import { motion } from 'motion/react'
import { navLinks } from '@/data/nav-links'

interface MobileMenuProps {
  isOpen: boolean
  onNavClick: (href: string) => void
  onClose: () => void
}

export function MobileMenu({ isOpen, onNavClick, onClose }: MobileMenuProps) {
  const handleNavClick = (href: string) => {
    onNavClick(href)
    onClose()
  }

  return (
    <motion.div
      className={`fixed inset-0 z-40 bg-portfolio-bg md:hidden ${
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

        {navLinks.map((link, index) => (
          <motion.button
            key={link.name}
            onClick={() => handleNavClick(link.href)}
            className="font-playfair relative text-3xl font-medium text-portfolio-text hover:text-portfolio-accent transition-colors duration-300 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.name}
          </motion.button>
        ))}

        {/* Let's Talk button */}
        <motion.button
          onClick={() => handleNavClick('#contact')}
          className="font-sans mt-4 px-10 py-4 bg-portfolio-text text-white text-lg font-medium rounded-full z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.button>
      </div>
    </motion.div>
  )
}
