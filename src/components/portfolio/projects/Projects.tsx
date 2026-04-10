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
    <section id="projects" className="py-32 md:py-40 bg-white" ref={ref}>
      <Container>
        {/* Section header */}
        <div className="mb-20">
          <SectionHeader
            eyebrow="Selected Work"
            title="Featured"
            titleHighlight="Projects"
            description="Here's a selection of things I've built. These are the projects I keep coming back to when someone asks what I do. A mix of, web apps and everything in between."
            isInView={isInView}
            centered={true}
          />
        </div>

        {/* Projects masonry grid */}
        <div className="hidden lg:flex gap-6">
          {[0, 1, 2].map((colIndex) => {
            const allItems = [...projects.map((p, i) => ({ type: 'project' as const, project: p, index: i })), { type: 'github' as const, index: projects.length }]
            const colItems = allItems.filter((_, i) => i % 3 === colIndex)
            return (
              <div key={colIndex} className="flex-1 flex flex-col gap-6">
                {colItems.map((item) =>
                  item.type === 'project' ? (
                    <ProjectCard key={item.project.slug} project={item.project} index={item.index} />
                  ) : (
                    <GitHubCard key="github" index={item.index} />
                  )
                )}
              </div>
            )
          })}
        </div>

        {/* 2-column masonry for medium screens */}
        <div className="hidden md:flex lg:hidden gap-6">
          {[0, 1].map((colIndex) => {
            const allItems = [...projects.map((p, i) => ({ type: 'project' as const, project: p, index: i })), { type: 'github' as const, index: projects.length }]
            const colItems = allItems.filter((_, i) => i % 2 === colIndex)
            return (
              <div key={colIndex} className="flex-1 flex flex-col gap-6">
                {colItems.map((item) =>
                  item.type === 'project' ? (
                    <ProjectCard key={item.project.slug} project={item.project} index={item.index} />
                  ) : (
                    <GitHubCard key="github" index={item.index} />
                  )
                )}
              </div>
            )
          })}
        </div>

        {/* Single column for mobile */}
        <div className="flex md:hidden flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
          <GitHubCard index={projects.length} />
        </div>
      </Container>
    </section>
  )
}
