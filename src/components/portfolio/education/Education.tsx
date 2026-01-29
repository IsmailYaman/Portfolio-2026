'use client'

import { useInView } from 'motion/react'
import { useRef } from 'react'
import { SectionHeader } from '../shared'
import { Timeline } from './Timeline'

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-32 md:py-40 bg-[#f5f3f0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="mb-20">
          <SectionHeader
            eyebrow="Background"
            title="Education &"
            titleHighlight="Certifications"
            description="A foundation built on formal education and continuous learning. I believe in staying current with industry best practices."
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
