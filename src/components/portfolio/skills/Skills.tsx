'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Container } from '../shared'
import { skillCategories } from '@/data/skills'
import { SkillCategory } from './SkillCategory'
import { TechBadges } from './TechBadges'

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 md:py-40 bg-white" ref={ref}>
      <Container>
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <div>
            <motion.span
              className="font-sans text-portfolio-accent font-medium tracking-[0.2em] uppercase text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Expertise
            </motion.span>
            <motion.h2
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-portfolio-text mt-4 leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Skills & <span className="italic">Technologies</span>
            </motion.h2>
          </div>
          <motion.p
            className="font-sans text-portfolio-text-muted text-lg leading-relaxed self-end"
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
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              categoryIndex={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Technology badges */}
        <TechBadges isInView={isInView} />
      </Container>
    </section>
  )
}
