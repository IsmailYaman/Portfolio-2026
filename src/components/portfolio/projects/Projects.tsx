'use client'

import { useInView } from 'motion/react'
import { useRef } from 'react'
import { projects } from '@/data/projects'
import { SectionHeader, Container } from '../shared'
import { ProjectCard } from './ProjectCard'
import { GitHubCard } from './GitHubCard'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="projects" className="py-32 md:py-40 bg-portfolio-bg" ref={ref}>
      <Container>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
          <GitHubCard index={projects.length} />
        </div>
      </Container>
    </section>
  )
}
