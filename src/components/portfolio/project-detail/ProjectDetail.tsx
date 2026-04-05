'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue } from 'motion/react'
import type { Project } from '@/data/projects'
import { ProjectHero } from './ProjectHero'
import { ImageGallery } from './ImageGallery'
import { ProjectContent } from './ProjectContent'
import { ProjectNav } from './ProjectNav'

/** Scroll progress threshold at which gallery reaches full width (28% of scroll) */
const GALLERY_EXPAND_THRESHOLD = 0.28
/** Initial gallery width in pixels (matches container max-width) */
const GALLERY_MIN_WIDTH = 1152
/** Maximum gallery width in pixels (full bleed width) */
const GALLERY_MAX_WIDTH = 1600

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Gallery width expands from container width to full bleed as user scrolls
  const galleryMaxWidth = useTransform(scrollYProgress, (latest) => {
    const t = Math.min(latest / GALLERY_EXPAND_THRESHOLD, 1)
    const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic
    return GALLERY_MIN_WIDTH + eased * (GALLERY_MAX_WIDTH - GALLERY_MIN_WIDTH)
  })

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [project.slug])

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const headerYScroll = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const headerOpacityScroll = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const staticY = useMotionValue(0)
  const staticOpacity = useMotionValue(1)

  const headerY = isMobile ? staticY : headerYScroll
  const headerOpacity = isMobile ? staticOpacity : headerOpacityScroll

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
