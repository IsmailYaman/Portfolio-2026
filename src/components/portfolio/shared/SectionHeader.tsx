'use client'

import { motion } from 'motion/react'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  titleHighlight?: string
  description?: string
  isInView: boolean
  centered?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  isInView,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <motion.span
        className="text-[#c45d3a] font-medium tracking-[0.2em] uppercase text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] mt-4 leading-[1.1]"
        style={{ fontFamily: "'Playfair Display', serif" }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title} {titleHighlight && <span className="italic">{titleHighlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          className={`text-[#5a5a5a] text-lg mt-6 ${centered ? 'max-w-2xl mx-auto' : ''}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
