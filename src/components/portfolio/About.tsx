'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useMouseParallax, Container } from './shared'

const STATS = [
  { id: 'projects', number: '4+', label: 'Years of Experience' },
  { id: 'clients', number: '15+', label: 'Happy Clients' },
  { id: 'goal', number: '∞', label: 'Curiosity & Continuous Learning' },
]

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
                alt="Ismail Kayadelen - Frontend Developer"
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
                Driven by
                <br />
                <span className="italic">curiosity</span>
              </h2>
            </motion.div>

            <motion.p
              className="font-sans text-[#3a3a3a] text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I am passionate about building digital products that combine
              strong functionality with refined visual design. I work across the
              full frontend spectrum, from engineering scalable interfaces to
              shaping user focused designs. I enjoy translating complex
              requirements into intuitive, high quality experiences that perform
              reliably in production environments.
            </motion.p>

            <motion.p
              className="font-sans text-portfolio-text-muted text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Outside of development, I focus on discipline and continuous
              improvement. I spend a lot of time in the gym, where bodybuilding
              helps me maintain focus and consistency. I also enjoy working on
              my car, which gives me space to think, solve problems hands on,
              and recharge creatively.
            </motion.p>

            {/* Design Philosophy */}
            <motion.div
              className="pt-8 border-t border-portfolio-border"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-playfair text-xl md:text-2xl text-portfolio-text mb-4 italic">
                What I Care About
              </h3>
              <p className="font-sans text-portfolio-text-muted text-base md:text-lg leading-relaxed">
                I care about building software that lasts. That means writing
                maintainable code, designing consistent systems, and creating
                experiences users trust. I believe the best digital products
                come from strong collaboration between design, engineering, and
                product, supported by thoughtful technical decisions.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {STATS.map((stat) => (
                <motion.div
                  key={stat.id}
                  className="text-center lg:text-left"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-playfair text-3xl md:text-4xl font-medium text-portfolio-accent">
                    {stat.number}
                  </div>
                  <div className="font-sans text-sm text-portfolio-text-muted mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
