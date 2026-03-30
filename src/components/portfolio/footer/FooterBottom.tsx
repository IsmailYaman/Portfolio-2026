'use client'

import { motion } from 'motion/react'
import { useMemo } from 'react'
import { Container } from '../shared'
import { contactInfo } from '@/data/footer'

const QUOTES = [
  "Designed in Chrome, broken in Safari, fixed in Firefox, broken again in Safari.",
  "Built with love, coffee, and 47 Stack Overflow tabs. Just kidding, it was AI.",
  "No pixels were harmed in the making of this website. Several AI agents were.",
  "Works on my machine ¯\\_(ツ)_/¯",
  "Responsive on all devices. Tested on 1 device.",
  "In loving memory of the div that wouldn't center.",
  "If you're reading this, the page loaded. Miracles do happen.",
  "Made with TypeScript so the bugs are type-safe.",
  "Optimized for performance. Results may vary.",
  "This website uses 0 cookies. I also have no idea what I'm doing.",
  "Last updated: a while ago. Don't ask.",
]

interface FooterBottomProps {
  isInView: boolean
}

export function FooterBottom({ isInView }: FooterBottomProps) {
  const quote = useMemo(() => QUOTES[Math.floor(Math.random() * QUOTES.length)], [])

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
            {quote}
          </motion.p>
        </div>
      </Container>
    </div>
  )
}
