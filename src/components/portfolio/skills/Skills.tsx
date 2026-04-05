'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Container } from '../shared'
import { featuredSkills } from '@/data/skills'
import { SkillCard } from './SkillCard'
import { TechBadges } from './TechBadges'

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 md:py-40 bg-portfolio-bg" ref={ref}>
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
            I'm constantly learning new stuff, but here is my go-to stack that I use most often. I believe in choosing the right tool for each project rather than forcing a one-size-fits-all approach.
          </motion.p>
        </div>

        {/* Bento grid - Row 1 */}
        <motion.h4 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium text-portfolio-text my-4 leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My current <span className="italic">stack:</span>
            </motion.h4>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          {featuredSkills.slice(0, 2).map((skill, index) => (
            <div
              key={skill.id}
              className={
                skill.colSpan === 3
                  ? 'col-span-1 md:col-span-3'
                  : 'col-span-1 md:col-span-2'
              }
            >
              <SkillCard skill={skill} index={index} isInView={isInView} />
            </div>
          ))}
        </div>

        {/* Bento grid - Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-20">
          {featuredSkills.slice(2).map((skill, index) => (
            <div
              key={skill.id}
              className={
                skill.colSpan === 2
                  ? 'col-span-1 md:col-span-2'
                  : 'col-span-1 md:col-span-3'
              }
            >
              <SkillCard skill={skill} index={index + 2} isInView={isInView} />
            </div>
          ))}
        </div>

        {/* Technology badges */}
        <TechBadges isInView={isInView} />
      </Container>
    </section>
  )
}
