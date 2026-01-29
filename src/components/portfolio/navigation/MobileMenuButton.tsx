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
      className="md:hidden w-10 h-10 flex items-center justify-center relative"
      onClick={onToggle}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#1a1a1a]" />
        ) : (
          <Menu className="w-6 h-6 text-[#1a1a1a]" />
        )}
      </motion.div>
    </motion.button>
  )
}
