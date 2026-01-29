'use client'

import { motion } from 'motion/react'
import type { Project } from '@/data/projects'

interface ProjectContentProps {
  project: Project
}

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <section className="pb-20 md:pb-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Main content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-serif text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About the <span className="italic">Project</span>
            </h2>
            <div
              className="text-[#5a5a5a] text-base md:text-lg leading-relaxed space-y-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {project.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Technologies */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3
                className="font-serif text-lg font-medium text-[#1a1a1a] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-[#f5f3f0] text-[#5a5a5a] text-sm rounded-full"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3
                className="font-serif text-lg font-medium text-[#1a1a1a] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#5a5a5a] text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
