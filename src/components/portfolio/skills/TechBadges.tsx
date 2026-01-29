'use client'

import { motion } from 'motion/react'
import { technologies } from './skills-data'

interface TechBadgesProps {
  isInView: boolean
}

export function TechBadges({ isInView }: TechBadgesProps) {
  return (
    <motion.div
      className="pt-12 border-t border-[#e8e4df]"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h3
        className="font-serif text-xl font-medium text-[#1a1a1a] mb-8 text-center italic"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Full Technology Stack
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            className="px-4 py-2 bg-[#f5f3f0] text-[#3a3a3a] text-sm rounded-full hover:bg-[#c45d3a] hover:text-white transition-colors duration-300 cursor-default"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.6 + index * 0.02,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
