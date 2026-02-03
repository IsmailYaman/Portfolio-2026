'use client'

import { motion } from 'motion/react'
import { SkillBar } from './SkillBar'
import type { SkillCategory as SkillCategoryType } from './skills-data'

interface SkillCategoryProps {
  category: SkillCategoryType
  categoryIndex: number
  isInView: boolean
}

export function SkillCategory({
  category,
  categoryIndex,
  isInView,
}: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1 * categoryIndex,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <h3 className="font-playfair text-xl font-medium text-portfolio-text mb-6 italic">
        {category.title}
      </h3>
      <div className="space-y-5">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            isInView={isInView}
            delay={0.2 + categoryIndex * 0.1 + skillIndex * 0.05}
          />
        ))}
      </div>
    </motion.div>
  )
}
