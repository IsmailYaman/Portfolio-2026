'use client'

import { motion } from 'motion/react'
import { useEffect } from 'react'
import { navLinks } from '@/data/nav-links'

interface MobileMenuProps {
  isOpen: boolean
  onNavClick: (href: string) => void
  onClose: () => void
}

export function MobileMenu({ isOpen, onNavClick, onClose }: MobileMenuProps) {
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    onNavClick(href)
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/50 md:hidden"
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        onClick={onClose}
      />

      {/* Bottom sheet */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 bg-portfolio-text rounded-t-3xl md:hidden"
        initial={{ y: '100%' }}
        animate={{ y: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        style={{
          pointerEvents: isOpen ? 'auto' : 'none',
          paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom))',
        }}
        drag="y"
        dragConstraints={{ top: 0 }}
        dragElastic={{ top: 0, bottom: 0.4 }}
        dragMomentum={false}
        onDragEnd={(_, info) => {
          if (info.offset.y > 80 || info.velocity.y > 400) {
            onClose()
          }
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing">
          <div className="w-10 h-1 bg-white/20 rounded-full" />
        </div>

        {/* Nav links */}
        <div className="flex flex-col items-center gap-6 pt-8 pb-4 px-8">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="font-playfair text-3xl font-medium text-white/90 hover:text-portfolio-accent transition-colors duration-300"
              initial={{ opacity: 0, y: 16 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.35, delay: isOpen ? 0.1 + index * 0.07 : 0 }}
              whileTap={{ scale: 0.97 }}
            >
              {link.name}
            </motion.button>
          ))}

          <motion.button
            onClick={() => handleNavClick('#contact')}
            className="font-sans mt-4 px-10 py-4 bg-white text-portfolio-text text-lg font-medium rounded-full w-full"
            initial={{ opacity: 0, y: 16 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.35, delay: isOpen ? 0.1 + navLinks.length * 0.07 : 0 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Talk
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}
