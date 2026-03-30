'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useMouseParallax, Container } from './shared'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { x: imageX, y: imageY } = useMouseParallax({ intensity: 10 })

  return (
    <section id="about" className="py-32 md:py-40 bg-white" ref={ref}>
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Main image container with parallax */}
            <motion.div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              style={{ x: imageX, y: imageY }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/Shadowizzy.png"
                alt="Ismail Kayadelen - Full Stack Engineer & Designer"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-text/20 to-transparent" />
            </motion.div>

            {/* Decorative floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 bg-portfolio-accent/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-portfolio-accent/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />

            {/* Stats card overlay */}
            {/* <motion.div
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-portfolio-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <div className="text-center">
                <div className="font-playfair text-3xl font-medium text-portfolio-accent">
                  6+
                </div>
                <div className="font-sans text-sm text-portfolio-text-muted mt-1">
                  Years Experience
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right column - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="font-sans text-portfolio-accent font-medium tracking-[0.2em] uppercase text-sm">
                About Me
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-portfolio-text mt-4 leading-[1.1]">
              The 
                <br />
                <span className="italic">Developer</span>
              </h2>
            </motion.div>

            <motion.p
              className="font-sans text-[#3a3a3a] text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a full stack engineer based in the Netherlands with 4+ years
              of experience building web apps and e-commerce solutions. I work
              mostly with React, TypeScript, Next.js and Laravel and I'm
              comfortable everywhere in the stack, from database design to the
              last CSS tweak.
            </motion.p>

            <motion.p
              className="font-sans text-portfolio-text-muted text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Outside of work I spend time in the gym and tinkering with my car.
              Both teach you the same thing:{' '}
              <span className="italic font-playfair text-portfolio-accent">
                details matter
              </span>
              , and shortcuts always show up later.
            </motion.p>

            {/* Design Philosophy */}
            <motion.div
              className="pt-8 border-t border-portfolio-border"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-playfair text-xl md:text-2xl text-portfolio-text mb-4 italic">
                My Approach
              </h3>
              <p className="font-sans text-portfolio-text-muted text-base md:text-lg leading-relaxed">
                Good software is rarely about the big decisions. It's about a
                thousand small ones made consistently. That's what I try to
                focus on.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
