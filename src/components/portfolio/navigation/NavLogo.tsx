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
      className="cursor-pointer"
      onClick={() => {
        if (isHomePage) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
    >
      <motion.span
        className="font-playfair relative text-xl italic font-medium transition-colors duration-300 group text-portfolio-text"
        whileHover={{ scale: 1.02 }}
      >
        Ismail<span className="text-portfolio-accent"> • </span>Kayadelen
        <motion.span
          className="absolute -bottom-1 left-0 h-0.5 bg-portfolio-accent"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      </motion.span>
    </Link>
  )
}
