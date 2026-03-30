'use client'

import { motion } from 'motion/react'
import type { FeaturedSkill } from '@/data/skills'
import { TechLogo } from './TechLogo'

interface SkillCardProps {
  skill: FeaturedSkill
  index: number
  isInView: boolean
}

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export function SkillCard({ skill, index, isInView }: SkillCardProps) {
  return (
    <motion.div
      className="bg-white hover:bg-portfolio-bg rounded-2xl p-8 border border-portfolio-border hover:border-portfolio-accent/30 h-full flex flex-col transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
      transition={{ duration: 0.6, delay: 0.1 * index, ease }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
        <TechLogo icon={skill.logo} className="w-8 h-8 shrink-0 text-portfolio-accent" />
        <h3 className="font-playfair text-3xl font-medium text-portfolio-text leading-tight">
          {skill.title}
        </h3>
      </div>
      <p className="font-sans text-portfolio-text-muted text-base leading-relaxed">
        {skill.description}
      </p>
    </motion.div>
  )
}
