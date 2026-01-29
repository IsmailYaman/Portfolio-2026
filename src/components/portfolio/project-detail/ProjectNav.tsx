'use client'

import { motion } from 'motion/react'
import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export function ProjectNav() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.p
          className="text-[#5a5a5a] text-sm uppercase tracking-[0.2em] mb-4"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Explore More
        </motion.p>
        <motion.h2
          className="font-serif text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          View All <span className="italic">Projects</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white rounded-full hover:bg-[#2a2a2a] transition-colors duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
