'use client'

import { motion } from 'motion/react'
import { Paragraph } from './Paragraph'

interface SubsectionBlockProps {
  title: string
  children: React.ReactNode
  isInView: boolean
  delay?: number
}

export function SubsectionBlock({
  title,
  children,
  isInView,
  delay = 0.4,
}: SubsectionBlockProps) {
  return (
    <motion.div
      className="pt-12 border-t border-portfolio-border"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="font-playfair text-xl md:text-2xl text-portfolio-text mb-4 italic">
        {title}
      </h3>
      <Paragraph isInView={isInView} delay={delay + 0.1}>
        {children}
      </Paragraph>
    </motion.div>
  )
}
