'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
console.log(index)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }}>
      <motion.article
        ref={cardRef}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer transition-all duration-150 hover:shadow-xl hover:-translate-y-1"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

          {/* View project indicator */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150">
            <span
              className="text-sm font-medium text-[#1a1a1a]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              View Project
            </span>
            <ArrowRight className="w-4 h-4 text-[#c45d3a]" />
          </div>

          {/* Color accent bar */}
          <div
            className="absolute top-0 left-0 w-full h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-150"
            style={{ backgroundColor: project.color }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className="font-serif text-xl font-medium text-[#1a1a1a] mb-2 group-hover:text-[#c45d3a] transition-colors duration-150"
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
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#f5f3f0] text-[#5a5a5a] text-xs rounded-full"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
