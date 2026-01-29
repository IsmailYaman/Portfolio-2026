'use client'

import { motion } from 'motion/react'
import { Link } from '@tanstack/react-router'

interface NavLogoProps {
  isHomePage: boolean
}

export function NavLogo({ isHomePage }: NavLogoProps) {
  return (
    <Link
      to="/"
      onClick={() => {
        if (isHomePage) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
    >
      <motion.span
        className="relative font-serif text-xl font-medium transition-colors duration-300 group text-[#1a1a1a]"
        style={{ fontFamily: "'Playfair Display', serif" }}
        whileHover={{ scale: 1.02 }}
      >
        Alex<span className="text-[#c45d3a]">.</span>Chen
        <motion.span
          className="absolute -bottom-1 left-0 h-0.5 bg-[#c45d3a]"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      </motion.span>
    </Link>
  )
}
