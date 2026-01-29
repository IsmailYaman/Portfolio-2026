'use client'

import { useInView } from 'motion/react'
import { useRef } from 'react'
import { projects } from '@/data/projects'
import { SectionHeader } from '../shared'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="projects" className="py-32 md:py-40 bg-[#f5f3f0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="mb-20">
          <SectionHeader
            eyebrow="Selected Work"
            title="Featured"
            titleHighlight="Projects"
            description="A curated selection of projects that showcase my approach to solving complex problems through thoughtful design and clean code."
            isInView={isInView}
            centered={true}
          />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
