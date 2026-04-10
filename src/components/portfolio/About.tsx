'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useMouseParallax, Container, SectionHeader, Paragraph } from './shared'

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
                alt="Ismail Kayadelen - Web Developer & Designer"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-text/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right column - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <SectionHeader
              eyebrow="About Me"
              title="The"
              titleHighlight="Developer"
              isInView={isInView}
              centered={false}
            />

            <Paragraph isInView={isInView} delay={0.2} size="lg" muted={false}>
              I'm a web developer based in the Netherlands with 4+ years
              of experience building web apps and e-com solutions.
            </Paragraph>

            <Paragraph isInView={isInView} delay={0.3}>
              Outside of work I spend time in the gym and tinkering with my car.
              Both teach you the same thing:{' '}
              <span className="italic font-playfair text-portfolio-accent">
                details matter
              </span>
              , and shortcuts always show up later.
            </Paragraph>


          </div>
        </div>
      </Container>
    </section>
  )
}
