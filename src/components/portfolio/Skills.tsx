'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Vue.js', level: 80 },
      { name: 'Node.js', level: 85 },
    ],
  },
  {
    title: 'Styling & Animation',
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'CSS/SCSS', level: 90 },
      { name: 'Framer Motion', level: 88 },
      { name: 'Three.js', level: 70 },
      { name: 'GSAP', level: 75 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Figma', level: 88 },
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'Vercel', level: 90 },
    ],
  },
]

const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vue.js',
  'Svelte',
  'Node.js',
  'GraphQL',
  'REST APIs',
  'Tailwind CSS',
  'SCSS',
  'Framer Motion',
  'Three.js',
  'D3.js',
  'Jest',
  'Cypress',
  'Git',
  'Docker',
  'AWS',
  'Vercel',
  'Figma',
  'Storybook',
  'Webpack',
  'Vite',
  'PostgreSQL',
  'MongoDB',
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 md:py-40 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <div>
            <motion.span
              className="text-[#c45d3a] font-medium tracking-[0.2em] uppercase text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Expertise
            </motion.span>
            <motion.h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] mt-4 leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Skills & <span className="italic">Technologies</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-[#5a5a5a] text-lg leading-relaxed self-end"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm constantly expanding my toolkit, but here are the technologies I
            reach for most often. I believe in choosing the right tool for each
            project rather than forcing a one-size-fits-all approach.
          </motion.p>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * categoryIndex,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h3
                className="font-serif text-xl font-medium text-[#1a1a1a] mb-6 italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span
                        className="text-[#3a3a3a] text-sm font-medium"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-[#5a5a5a] text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1,
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-1.5 bg-[#e8e4df] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#c45d3a] to-[#d97a5a] rounded-full relative"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={isInView ? { x: '200%' } : {}}
                          transition={{
                            duration: 1.5,
                            delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: 'easeInOut',
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology badges */}
        <motion.div
          className="pt-12 border-t border-[#e8e4df]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3
            className="font-serif text-xl font-medium text-[#1a1a1a] mb-8 text-center italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Full Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-[#f5f3f0] text-[#3a3a3a] text-sm rounded-full hover:bg-[#c45d3a] hover:text-white transition-colors duration-300 cursor-default"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.02,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
