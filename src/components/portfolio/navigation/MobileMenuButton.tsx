'use client'

import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'

interface MobileMenuButtonProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <motion.button
      className="w-11 h-11 flex items-center justify-center rounded-full shrink-0"
      onClick={onToggle}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-portfolio-text" />
        ) : (
          <Menu className="w-5 h-5 text-portfolio-text" />
        )}
      </motion.div>
    </motion.button>
  )
}
