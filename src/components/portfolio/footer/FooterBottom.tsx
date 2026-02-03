'use client'

import { motion } from 'motion/react'
import { Container } from '../shared'
import { contactInfo } from './footer-data'

interface FooterBottomProps {
  isInView: boolean
}

export function FooterBottom({ isInView }: FooterBottomProps) {
  return (
    <div className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="font-sans text-[#6a6a6a] text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            © {new Date().getFullYear()} {contactInfo.name}. All rights reserved.
          </motion.p>
          <motion.p
            className="font-sans text-[#6a6a6a] text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Designed & built with passion
          </motion.p>
        </div>
      </Container>
    </div>
  )
}
