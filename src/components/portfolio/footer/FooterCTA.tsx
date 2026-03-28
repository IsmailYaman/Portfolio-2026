'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { contactInfo } from '@/data/footer'

interface FooterCTAProps {
  isInView: boolean
}

export function FooterCTA({ isInView }: FooterCTAProps) {
  return (
    <div className="text-center mb-20">
      <motion.span
        className="font-sans text-portfolio-accent font-medium tracking-[0.2em] uppercase text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.span>
      <motion.h2
        className="font-playfair text-4xl md:text-6xl lg:text-7xl font-medium mt-4 leading-[1.1]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Have a project in mind?
        <br />
        <span className="italic text-portfolio-accent">Let's talk.</span>
      </motion.h2>
      <motion.p
        className="font-sans text-[#a0a0a0] text-lg max-w-xl mx-auto mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </motion.p>

      {/* Email CTA */}
      <motion.a
        href={`mailto:${contactInfo.email}`}
        className="font-playfair group inline-flex items-center gap-3 mt-10 text-2xl md:text-3xl font-medium hover:text-portfolio-accent transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {contactInfo.email}
        <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </motion.a>
    </div>
  )
}
