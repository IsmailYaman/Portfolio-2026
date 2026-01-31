'use client'

import { motion } from 'motion/react'
import { experience } from './experience-data'
import { TimelineItem } from './TimelineItem'

interface TimelineProps {
  isInView: boolean
}

export function Timeline({ isInView }: TimelineProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <motion.div
        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c45d3a] via-[#c45d3a]/50 to-[#c45d3a]/20 -translate-x-1/2"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{ transformOrigin: 'top' }}
      />

      <div className="space-y-12">
        {experience.map((item, index) => (
          <TimelineItem
            key={item.title}
            item={item}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  )
}
