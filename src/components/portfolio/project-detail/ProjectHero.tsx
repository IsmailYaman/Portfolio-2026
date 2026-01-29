'use client'

import { motion, type MotionValue } from 'motion/react'
import { Link } from '@tanstack/react-router'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { ProjectMeta } from './ProjectMeta'
import type { Project } from '@/data/projects'

interface ProjectHeroProps {
  project: Project
  headerY: MotionValue<number>
  headerOpacity: MotionValue<number>
}

export function ProjectHero({ project, headerY, headerOpacity }: ProjectHeroProps) {
  return (
    <motion.section
      className="relative pt-32 pb-20 md:pt-40 md:pb-32"
      style={{ y: headerY, opacity: headerOpacity }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-[#5a5a5a] hover:text-[#c45d3a] transition-colors duration-300 mb-12 group"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Title and meta */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="w-12 h-[2px] rounded-full "
                style={{ backgroundColor: project.color }}
              />
              <span
                className="text-[#c45d3a] font-medium tracking-[0.2em] uppercase text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Case Study
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="text-[#5a5a5a] text-lg md:text-xl leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {project.description}
            </motion.p>

            {/* Action buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c45d3a] text-white rounded-full hover:bg-[#a34d30] transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-full hover:bg-[#2a2a2a] transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
            </motion.div>
          </div>

          <ProjectMeta
            year={project.year}
            duration={project.duration}
            role={project.role}
          />
        </div>
      </div>
    </motion.section>
  )
}
