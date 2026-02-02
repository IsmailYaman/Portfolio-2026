'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
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
  const galleryMaxWidth = useTransform(scrollYProgress, (latest) => {
    const t = Math.min(latest / 0.28, 1)
    const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic: dampens as it approaches full width
    return 1152 + eased * (1600 - 1152)
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

      {/* Gallery Section - width expands as you scroll */}
      <section className="pb-20 md:pb-32">
        <motion.div
          className="mx-auto px-6 md:px-12 lg:px-20"
          style={{ maxWidth: galleryMaxWidth }}
        >
          <ImageGallery
            images={project.gallery || [project.image]}
            title={project.title}
          />
        </motion.div>
      </section>

      <ProjectContent project={project} />
      <ProjectNav />
    </div>
  )
}
