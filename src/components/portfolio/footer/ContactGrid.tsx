'use client'

import { motion } from 'motion/react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { socialLinks, quickLinks, contactInfo } from '@/data/footer'

interface ContactGridProps {
  isInView: boolean
}

export function ContactGrid({ isInView }: ContactGridProps) {
  return (
    <motion.div
      className="grid md:grid-cols-3 gap-12 md:gap-8 pt-12 border-t border-white/10"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* Contact info */}
      <div className="space-y-6">
        <h3 className="font-playfair text-xl font-medium italic">Contact</h3>
        <div className="space-y-4">
          <a
            href={`mailto:${contactInfo.email}`}
            className="font-sans flex items-center gap-3 text-[#a0a0a0] hover:text-white transition-colors duration-300"
          >
            <Mail className="w-5 h-5 text-portfolio-accent" />
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
            className="font-sans flex items-center gap-3 text-[#a0a0a0] hover:text-white transition-colors duration-300"
          >
            <Phone className="w-5 h-5 text-portfolio-accent" />
            {contactInfo.phone}
          </a>
          <div className="font-sans flex items-center gap-3 text-[#a0a0a0]">
            <MapPin className="w-5 h-5 text-portfolio-accent" />
            {contactInfo.location}
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="space-y-6">
        <h3 className="font-playfair text-xl font-medium italic">Social</h3>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.href}
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-portfolio-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            )
          })}
        </div>
      </div>

      {/* Quick links */}
      <div className="space-y-6">
        <h3 className="font-playfair text-xl font-medium italic">Quick Links</h3>
        <nav className="space-y-3">
          {quickLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-sans block text-[#a0a0a0] hover:text-white hover:translate-x-2 transition-all duration-300"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}
