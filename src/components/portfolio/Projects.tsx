'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Lumina Dashboard',
    description:
      'A comprehensive analytics platform with real-time data visualization, custom reporting, and team collaboration features.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    color: '#c45d3a',
  },
  {
    title: 'Verdant E-Commerce',
    description:
      'A sustainable fashion marketplace featuring AR try-on, personalized recommendations, and carbon-neutral shipping integration.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Stripe', 'Prisma', 'Framer Motion'],
    color: '#2d5a4a',
  },
  {
    title: 'Wavelength Music',
    description:
      'A social music discovery app with collaborative playlists, live listening sessions, and AI-powered mood-based recommendations.',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    tags: ['React Native', 'Node.js', 'WebSocket', 'Spotify API'],
    color: '#5a3d7a',
  },
  {
    title: 'Architect Studio',
    description:
      'Portfolio and project management tool for architecture firms with 3D model previews and client collaboration portals.',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Three.js', 'GraphQL', 'AWS'],
    color: '#3a5a7a',
  },
  {
    title: 'Mindful Moments',
    description:
      'A meditation and wellness app with guided sessions, progress tracking, and community challenges for mental health.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
    tags: ['React', 'Firebase', 'Howler.js', 'PWA'],
    color: '#7a6a5a',
  },
  {
    title: 'CodeFlow IDE',
    description:
      'A browser-based collaborative code editor with real-time pair programming, integrated terminal, and AI code assistance.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    tags: ['TypeScript', 'Monaco Editor', 'WebRTC', 'Docker'],
    color: '#1a1a1a',
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <motion.article
      ref={cardRef}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1 * index,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Action buttons */}
        <motion.div
          className="absolute bottom-4 right-4 flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.button
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#c45d3a] hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-4 h-4" />
          </motion.button>
          <motion.button
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#c45d3a] hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Color accent bar */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1"
          style={{ backgroundColor: project.color, transformOrigin: 'left' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="font-serif text-xl font-medium text-[#1a1a1a] mb-2 group-hover:text-[#c45d3a] transition-colors duration-300"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {project.title}
        </h3>
        <p
          className="text-[#5a5a5a] text-sm leading-relaxed mb-4"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="px-3 py-1 bg-[#f5f3f0] text-[#5a5a5a] text-xs rounded-full hover:bg-[#c45d3a] hover:text-white transition-colors duration-300 cursor-default"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.2 + tagIndex * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="projects" className="py-32 md:py-40 bg-[#f5f3f0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            className="text-[#c45d3a] font-medium tracking-[0.2em] uppercase text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Selected Work
          </motion.span>
          <motion.h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured <span className="italic">Projects</span>
          </motion.h2>
          <motion.p
            className="text-[#5a5a5a] text-lg max-w-2xl mx-auto mt-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A curated selection of projects that showcase my approach to solving
            complex problems through thoughtful design and clean code.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
