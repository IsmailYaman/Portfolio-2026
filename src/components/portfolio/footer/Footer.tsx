'use client'

import { useInView } from 'motion/react'
import { useRef } from 'react'
import { FooterCTA } from './FooterCTA'
import { ContactGrid } from './ContactGrid'
import { FooterBottom } from './FooterBottom'

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer
      id="contact"
      className="min-h-screen bg-[#1a1a1a] text-white flex flex-col"
      ref={ref}
    >
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <FooterCTA isInView={isInView} />
          <ContactGrid isInView={isInView} />
        </div>
      </div>

      <FooterBottom isInView={isInView} />
    </footer>
  )
}
