'use client'

import { motion } from 'motion/react'

interface FooterBottomProps {
  isInView: boolean
}

export function FooterBottom({ isInView }: FooterBottomProps) {
  return (
    <div className="border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-[#6a6a6a] text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </motion.p>
          <motion.p
            className="text-[#6a6a6a] text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Designed & built with passion
          </motion.p>
        </div>
      </div>
    </div>
  )
}
