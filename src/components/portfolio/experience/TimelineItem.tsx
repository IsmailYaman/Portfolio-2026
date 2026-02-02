'use client'

import { motion } from 'motion/react'
import type { ExperienceItem } from './experience-data'

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
        <motion.div
          className="w-16 h-16 bg-white rounded-full border-2 border-[#e8e4df] flex items-center justify-center shadow-lg transition-all duration-150 hover:scale-110 hover:border-[#c45d3a] hover:shadow-xl"
        >
          <Icon className="w-6 h-6 text-[#c45d3a]" />
        </motion.div>
      </div>

      {/* Content card */}
      <div
        className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
          isEven ? 'md:pr-8' : 'md:pl-8'
        }`}
      >
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#e8e4df]/50 transition-all duration-150 hover:shadow-xl hover:-translate-y-1 hover:border-[#c45d3a]/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#f5f3f0] p-2 flex-shrink-0">
              <img
                src={item.logo}
                alt={`${item.institution} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p
                className="text-[#5a5a5a] text-sm font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.institution}
              </p>
              <span
                className="text-[#c45d3a] text-xs"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.date}
              </span>
            </div>
          </div>
          <h3
            className="font-serif text-lg font-medium text-[#1a1a1a]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {item.title}
          </h3>
          <p
            className="text-[#6a6a6a] text-sm mt-2 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block md:w-[calc(50%-4rem)]" />
    </motion.div>
  )
}
