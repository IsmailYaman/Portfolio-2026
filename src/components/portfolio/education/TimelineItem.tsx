'use client'

import { motion } from 'motion/react'
import type { EducationItem } from './education-data'

interface TimelineItemProps {
  item: EducationItem
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.4 + index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Icon circle */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
        <motion.div
          className="w-16 h-16 bg-white rounded-full border-2 border-[#e8e4df] flex items-center justify-center shadow-lg"
          initial={{ scale: 0}}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            duration: 0.6,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          whileHover={{
            scale: 1.15,
            borderColor: '#c45d3a',
            boxShadow: '0 10px 30px rgba(196, 93, 58, 0.2)',
            transition: { duration: 0.4 },
          }}
        >
          <Icon className="w-6 h-6 text-[#c45d3a]" />
        </motion.div>
      </div>

      {/* Content card */}
      <div
        className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
          isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
        }`}
      >
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 border border-[#e8e4df]/50 hover:border-[#c45d3a]/30"
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <motion.span
            className="text-[#c45d3a] text-sm font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.6 + index * 0.15,
            }}
          >
            {item.date}
          </motion.span>
          <h3
            className="font-serif text-lg font-medium text-[#1a1a1a] mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {item.title}
          </h3>
          <p
            className="text-[#5a5a5a] text-sm mt-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {item.institution}
          </p>
          <p
            className="text-[#6a6a6a] text-sm mt-3 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block md:w-[calc(50%-4rem)]" />
    </motion.div>
  )
}
