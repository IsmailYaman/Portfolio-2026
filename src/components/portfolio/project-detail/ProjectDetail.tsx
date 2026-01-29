'use client'

import { useRef, useEffect } from 'react'
import { useScroll, useTransform } from 'motion/react'
import type { Project } from '@/data/projects'
import { ProjectHero } from './ProjectHero'
import { ImageGallery } from './ImageGallery'
import { ProjectContent } from './ProjectContent'
import { ProjectNav } from './ProjectNav'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [project.slug])

  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f5f3f0]">
      <ProjectHero
        project={project}
        headerY={headerY}
        headerOpacity={headerOpacity}
      />

      {/* Gallery Section */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <ImageGallery
            images={project.gallery || [project.image]}
            title={project.title}
          />
        </div>
      </section>

      <ProjectContent project={project} />
      <ProjectNav />
    </div>
  )
}
