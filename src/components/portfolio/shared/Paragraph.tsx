'use client'

import { motion } from 'motion/react'

interface ParagraphProps {
  children: React.ReactNode
  isInView: boolean
  delay?: number
  size?: 'base' | 'lg'
  muted?: boolean
  className?: string
}

export function Paragraph({
  children,
  isInView,
  delay = 0,
  size = 'base',
  muted = true,
  className,
}: ParagraphProps) {
  const sizeClass = size === 'lg' ? 'text-lg md:text-xl' : 'text-base md:text-lg'
  const colorClass = muted ? 'text-portfolio-text-muted' : 'text-[#3a3a3a]'

  return (
    <motion.p
      className={`font-sans ${colorClass} ${sizeClass} leading-relaxed${className ? ` ${className}` : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.p>
  )
}
