'use client'

import { motion } from 'motion/react'
import { Link } from '@tanstack/react-router'

interface NavLogoProps {
  isHomePage: boolean
  isScrolled: boolean
}

export function NavLogo({ isHomePage, isScrolled }: NavLogoProps) {
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
        className="font-playfair relative text-xl italic font-medium transition-colors duration-300 group text-portfolio-text whitespace-nowrap"
      >
        I
        <motion.span
          className="inline-block overflow-hidden align-bottom"
          animate={{
            width: isScrolled ? 0 : 'auto',
            opacity: isScrolled ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
        >
          smail
        </motion.span>
        <span className="text-portfolio-accent"> • </span>
        K
        <motion.span
          className="inline-block overflow-hidden align-bottom"
          animate={{
            width: isScrolled ? 0 : 'auto',
            opacity: isScrolled ? 0 : 1,
          }}
          transition={{
            duration: 0.2,
            delay: isScrolled ? 0.05 : 0,
            ease: [0.32, 0.72, 0, 1],
          }}
        >
          ayadelen
        </motion.span>
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
