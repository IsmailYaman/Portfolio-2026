'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useMouseParallax } from './shared'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { x: imageX, y: imageY } = useMouseParallax({ intensity: 10 })

  return (
    <section id="about" className="py-32 md:py-40 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
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
                src="/serious-izzy.jpeg"
                alt="Ismail Kayadelen - Frontend Developer"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/20 to-transparent" />
            </motion.div>

            {/* Decorative floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 bg-[#c45d3a]/10 rounded-full blur-2xl"
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
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#c45d3a]/5 rounded-full blur-3xl"
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
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-[#e8e4df]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <div className="text-center">
                <div
                  className="text-3xl font-medium text-[#c45d3a]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  6+
                </div>
                <div
                  className="text-sm text-[#5a5a5a] mt-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Years Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#c45d3a] font-medium tracking-[0.2em] uppercase text-sm">
                About Me
              </span>
              <h2
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] mt-4 leading-[1.1]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Driven by
                <br />
                <span className="italic">curiosity</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-[#3a3a3a] text-lg md:text-xl leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a frontend developer with over 6 years of experience building
              web applications that people genuinely enjoy using. My journey
              started with a fascination for how design and code intersect—and
              that curiosity still drives everything I create today.
            </motion.p>

            <motion.p
              className="text-[#5a5a5a] text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Based in San Francisco, I've collaborated with startups and
              established companies alike, helping them translate complex ideas
              into intuitive, accessible interfaces. When I'm not coding, you'll
              find me exploring typography, experimenting with generative art,
              or hiking the coastal trails.
            </motion.p>

            {/* Design Philosophy */}
            <motion.div
              className="pt-8 border-t border-[#e8e4df]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3
                className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-4 italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Design Philosophy
              </h3>
              <p
                className="text-[#5a5a5a] text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                I believe great interfaces are invisible—they get out of the way
                and let users accomplish their goals effortlessly. Every pixel,
                every interaction, every line of code should serve a purpose. I
                strive for that sweet spot where aesthetics and usability become
                indistinguishable.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { number: '40+', label: 'Projects Delivered' },
                { number: '15+', label: 'Happy Clients' },
                { number: '98%', label: 'Satisfaction Rate' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center lg:text-left"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="text-3xl md:text-4xl font-medium text-[#c45d3a]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-sm text-[#5a5a5a] mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
