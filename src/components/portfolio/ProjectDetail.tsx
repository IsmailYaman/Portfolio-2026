'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  User,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import type { Project } from '@/data/projects'

interface ProjectDetailProps {
  project: Project
}

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative group">
      <motion.div
        className="aspect-[16/10] overflow-hidden rounded-2xl bg-[#1a1a1a]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {images.length > 1 && (
        <>
          {/* Navigation arrows */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-[#1a1a1a]" />
          </motion.button>
          <motion.button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-[#1a1a1a]" />
          </motion.button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
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
      {/* Hero Section */}
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
                  className="w-12 h-1 rounded-full"
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

            {/* Project meta cards */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 text-[#5a5a5a] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Year
                  </span>
                </div>
                <p
                  className="text-[#1a1a1a] font-medium text-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.year}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 text-[#5a5a5a] mb-2">
                  <Clock className="w-4 h-4" />
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Duration
                  </span>
                </div>
                <p
                  className="text-[#1a1a1a] font-medium text-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.duration}
                </p>
              </div>

              <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 text-[#5a5a5a] mb-2">
                  <User className="w-4 h-4" />
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Role
                  </span>
                </div>
                <p
                  className="text-[#1a1a1a] font-medium text-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.role}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <ImageGallery
            images={project.gallery || [project.image]}
            title={project.title}
          />
        </div>
      </section>

      {/* Content Section */}
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

      {/* Navigation to other projects */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <motion.p
            className="text-[#5a5a5a] text-sm uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore More
          </motion.p>
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            View All <span className="italic">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/"
              hash="projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white rounded-full hover:bg-[#2a2a2a] transition-colors duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
