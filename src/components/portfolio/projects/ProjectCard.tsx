'use client'

import { motion } from 'motion/react'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }}>
      <motion.article
        className="group bg-white rounded-2xl overflow-hidden border border-portfolio-border hover:border-portfolio-accent/30 cursor-pointer transition-colors duration-300 hover:bg-portfolio-bg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      >
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

          {/* View project indicator */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white rounded-full opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
            <span className="font-sans text-sm font-medium text-portfolio-text">
              View Project
            </span>
            <ArrowRight className="w-4 h-4 text-portfolio-accent" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-playfair text-xl font-medium text-portfolio-text mb-2 group-hover:text-portfolio-accent transition-colors duration-300 ease-out">
            {project.title}
          </h3>
          <p className="font-sans text-portfolio-text-muted text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans px-3 py-1 bg-portfolio-accent/10 text-portfolio-text-muted text-xs rounded-full"
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
