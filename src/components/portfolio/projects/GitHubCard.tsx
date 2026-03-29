'use client'

import { motion } from 'motion/react'
import { Github, ArrowUpRight } from 'lucide-react'

interface GitHubCardProps {
  index: number
}

export function GitHubCard({ index }: GitHubCardProps) {
  return (
    <a
      href="https://github.com/IsmailYaman"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.article
        className="group bg-white rounded-2xl shadow-sm cursor-pointer transition-shadow duration-500 ease-out hover:shadow-xl flex items-center justify-center p-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          ease: 'easeOut',
          y: { duration: 0.4, ease: 'easeOut' },
        }}
      >
        <div className="flex flex-row items-center gap-4 text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-portfolio-bg border border-portfolio-border group-hover:bg-portfolio-accent/10 transition-colors duration-500">
            <Github className="w-8 h-8 text-portfolio-text" strokeWidth={1.5} />
          </div>
          <div className="flex flex-row items-center justify-center">
            <p className="font-sans text-sm font-medium text-portfolio-text group-hover:text-portfolio-accent transition-colors duration-300">
              More on GitHub
            </p>
            <ArrowUpRight className="w-4 h-4 text-portfolio-text-muted group-hover:text-portfolio-accent transition-colors duration-300 mx-auto ml-2" />
          </div>
        </div>
      </motion.article>
    </a>
  )
}
