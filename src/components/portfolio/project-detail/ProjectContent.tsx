'use client'

import { motion } from 'motion/react'
import type { Project } from '@/data/projects'

interface ProjectContentProps {
  project: Project
}

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <section className="pb-20 md:pb-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Main content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-2xl md:text-3xl font-medium text-portfolio-text mb-6">
              About the <span className="italic">Project</span>
            </h2>
            <div className="font-sans text-portfolio-text-muted text-base md:text-lg leading-relaxed space-y-4">
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
            <div className="bg-white rounded-2xl p-6 border border-portfolio-border hover:border-portfolio-accent/30 hover:bg-portfolio-bg transition-colors duration-300">
              <h3 className="font-playfair text-lg font-medium text-portfolio-text mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans px-3 py-1.5 bg-portfolio-bg text-portfolio-text-muted text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-white rounded-2xl p-6 border border-portfolio-border hover:border-portfolio-accent/30 hover:bg-portfolio-bg transition-colors duration-300">
              <h3 className="font-playfair text-lg font-medium text-portfolio-text mb-4">
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="font-sans flex items-start gap-3 text-portfolio-text-muted text-sm"
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
