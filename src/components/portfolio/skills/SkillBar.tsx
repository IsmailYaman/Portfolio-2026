'use client'

import { motion } from 'motion/react'
import type { Skill } from './skills-data'

interface SkillBarProps {
  skill: Skill
  isInView: boolean
  delay: number
}

export function SkillBar({ skill, isInView, delay }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between mb-2">
        <span
          className="text-[#3a3a3a] text-sm font-medium"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {skill.name}
        </span>
        <motion.span
          className="text-[#5a5a5a] text-sm"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-1.5 bg-[#e8e4df] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#c45d3a] to-[#d97a5a] rounded-full relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{
            duration: 1.2,
            delay: delay + 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: '-100%' }}
            animate={isInView ? { x: '200%' } : {}}
            transition={{
              duration: 1.5,
              delay: delay + 0.6,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
