'use client'

import { motion } from 'motion/react'
import { workedWith } from '@/data/skills'
import { TechLogo } from './TechLogo'

interface TechBadgesProps {
  isInView: boolean
}

export function TechBadges({ isInView }: TechBadgesProps) {
  return (
    <motion.div
      className="pt-12 border-t border-portfolio-border"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h3 className="font-playfair text-2xl font-normal italic text-portfolio-text mb-8">
        I've also worked with:
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-3">
        {workedWith.map((item, index) => (
          <motion.div
            key={item.label}
            className="flex flex-col items-center gap-2 p-3 rounded-xl border border-portfolio-border hover:border-portfolio-accent/30 bg-white hover:bg-portfolio-bg transition-colors duration-300 cursor-default"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.6 + index * 0.03,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileTap={{ scale: 0.95 }}
          >
            <TechLogo icon={item.logo} className="w-5 h-5 text-portfolio-accent" />
            <span className="font-sans text-[10px] font-medium tracking-wider uppercase text-portfolio-text-muted text-center leading-tight">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
