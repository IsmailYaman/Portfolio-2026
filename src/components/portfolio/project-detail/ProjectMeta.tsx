'use client'

import { motion } from 'motion/react'
import { Calendar, Clock, User } from 'lucide-react'

interface ProjectMetaProps {
  year: string
  duration: string
  role: string
}

export function ProjectMeta({ year, duration, role }: ProjectMetaProps) {
  return (
    <motion.div
      className="grid grid-cols-2 gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 text-[#5a5a5a] mb-2">
          <Calendar className="w-4 h-4" />
          <span
            className="text-xs uppercase tracking-wider"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Year
          </span>
        </div>
        <p
          className="text-[#1a1a1a] font-medium text-lg"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {year}
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 text-[#5a5a5a] mb-2">
          <Clock className="w-4 h-4" />
          <span
            className="text-xs uppercase tracking-wider"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Duration
          </span>
        </div>
        <p
          className="text-[#1a1a1a] font-medium text-lg"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {duration}
        </p>
      </div>

      <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 text-[#5a5a5a] mb-2">
          <User className="w-4 h-4" />
          <span
            className="text-xs uppercase tracking-wider"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Role
          </span>
        </div>
        <p
          className="text-[#1a1a1a] font-medium text-lg"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {role}
        </p>
      </div>
    </motion.div>
  )
}
