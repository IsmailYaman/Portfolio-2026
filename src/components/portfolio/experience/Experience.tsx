'use client'

import { useInView } from 'motion/react'
import { useRef } from 'react'
import { SectionHeader, Container } from '../shared'
import { Timeline } from './Timeline'

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-32 md:py-40 bg-portfolio-bg" ref={ref}>
      <Container>
        {/* Section header */}
        <div className="mb-20">
          <SectionHeader
            eyebrow="Background"
            title=""
            titleHighlight="Experience"
            description="From intern to founder, continuously growing and learning through hands-on work and formal education."
            isInView={isInView}
            centered={true}
          />
        </div>

        {/* Timeline */}
        <Timeline isInView={isInView} />
      </Container>
    </section>
  )
}
