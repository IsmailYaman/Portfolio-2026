'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }}>
      <motion.article
        ref={cardRef}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: 0.1 * index,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
      >
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* View project indicator */}
          <motion.div
            className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span
              className="text-sm font-medium text-[#1a1a1a]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              View Project
            </span>
            <ArrowRight className="w-4 h-4 text-[#c45d3a]" />
          </motion.div>

          {/* Color accent bar */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1"
            style={{ backgroundColor: project.color, transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className="font-serif text-xl font-medium text-[#1a1a1a] mb-2 group-hover:text-[#c45d3a] transition-colors duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {project.title}
          </h3>
          <p
            className="text-[#5a5a5a] text-sm leading-relaxed mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-[#f5f3f0] text-[#5a5a5a] text-xs rounded-full"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + tagIndex * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
