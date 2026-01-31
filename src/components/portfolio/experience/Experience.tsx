'use client'

import { useInView } from 'motion/react'
import { useRef } from 'react'
import { SectionHeader } from '../shared'
import { Timeline } from './Timeline'

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-32 md:py-40 bg-[#f5f3f0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
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
      </div>
    </section>
  )
}
