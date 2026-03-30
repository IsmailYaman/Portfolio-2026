'use client'

import { motion } from 'motion/react'
import type { ExperienceItem } from '@/data/experience'

interface TimelineItemProps {
  item: ExperienceItem
  index: number
  isInView: boolean
}

export function TimelineItem({ item, index, isInView }: TimelineItemProps) {
  const Icon = item.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`relative flex items-start gap-8 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Icon circle */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
        <motion.div className="w-16 h-16 bg-white rounded-full border-1 border-portfolio-border flex items-center justify-center transition-all duration-150 hover:border-portfolio-accent/30">
          <Icon className="w-6 h-6 text-portfolio-accent" />
        </motion.div>
      </div>

      {/* Content card */}
      <div
        className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
          isEven ? 'md:pr-8' : 'md:pl-8'
        }`}
      >
        <div className="bg-white p-8 rounded-2xl border border-portfolio-border hover:border-portfolio-accent/30 transition-colors duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-portfolio-bg p-2 flex-shrink-0">
              <img
                src={item.logo}
                alt={`${item.institution} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="font-sans text-portfolio-text-muted text-sm font-medium">
                {item.institution}
              </p>
              <span className="font-sans text-portfolio-accent text-xs">
                {item.date}
              </span>
            </div>
          </div>
          <h3 className="font-playfair text-lg font-medium text-portfolio-text">
            {item.title}
          </h3>
          <p className="font-sans text-[#6a6a6a] text-sm mt-2 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block md:w-[calc(50%-4rem)]" />
    </motion.div>
  )
}
