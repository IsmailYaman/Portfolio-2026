'use client'

import { motion, useTransform } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { useMouseParallax, Container } from './shared'

export function Hero() {
  const { mouseX, mouseY } = useMouseParallax()

  const blob1X = useTransform(mouseX, [-1, 1], [-20, 20])
  const blob1Y = useTransform(mouseY, [-1, 1], [-20, 20])
  const blob2X = useTransform(mouseX, [-1, 1], [15, -15])
  const blob2Y = useTransform(mouseY, [-1, 1], [15, -15])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-svh flex flex-col justify-center bg-portfolio-bg overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative elements with parallax */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-portfolio-accent/10 blur-3xl pointer-events-none"
        style={{ x: blob1X, y: blob1Y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-48 h-48 rounded-full bg-portfolio-accent/5 blur-2xl pointer-events-none"
        style={{ x: blob2X, y: blob2Y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
      />

      <Container className="relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            className="font-sans text-portfolio-accent font-medium tracking-[0.2em] uppercase text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full Stack Engineer & Designer
          </motion.p>

          {/* Main headline */}
          <motion.h1
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-medium text-portfolio-text leading-[0.95] tracking-[-0.02em] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From Development to Design. I handle the{' '}
            <span className="italic text-portfolio-accent"> whole stack.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="font-sans text-portfolio-text-muted text-lg md:text-xl max-w-xl leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            React, TypeScript, Laravel — I build across the full stack and
            think about the smalldetails most people skip.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToProjects}
            className="font-sans group hover:cursor-pointer inline-flex items-center gap-3 bg-portfolio-text text-white px-8 py-4 rounded-full font-medium text-base hover:bg-portfolio-accent transition-all duration-300 ease-out"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            See what I've built
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-portfolio-text/20 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
