'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  ArrowUpRight,
} from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Dribbble', icon: Dribbble, href: '#' },
]

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
          {/* CTA Section */}
          <div className="text-center mb-20">
            <motion.span
              className="text-[#c45d3a] font-medium tracking-[0.2em] uppercase text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Let's Connect
            </motion.span>
            <motion.h2
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium mt-4 leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Have a project in mind?
              <br />
              <span className="italic text-[#c45d3a]">Let's talk.</span>
            </motion.h2>
            <motion.p
              className="text-[#a0a0a0] text-lg max-w-xl mx-auto mt-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </motion.p>

            {/* Email CTA */}
            <motion.a
              href="mailto:hello@alexchen.dev"
              className="group inline-flex items-center gap-3 mt-10 text-2xl md:text-3xl font-medium hover:text-[#c45d3a] transition-colors duration-300"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              hello@alexchen.dev
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Contact grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-12 md:gap-8 pt-12 border-t border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Contact info */}
            <div className="space-y-6">
              <h3
                className="font-serif text-xl font-medium italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@alexchen.dev"
                  className="flex items-center gap-3 text-[#a0a0a0] hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Mail className="w-5 h-5 text-[#c45d3a]" />
                  hello@alexchen.dev
                </a>
                <a
                  href="tel:+14155551234"
                  className="flex items-center gap-3 text-[#a0a0a0] hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Phone className="w-5 h-5 text-[#c45d3a]" />
                  +1 (415) 555-1234
                </a>
                <div
                  className="flex items-center gap-3 text-[#a0a0a0]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <MapPin className="w-5 h-5 text-[#c45d3a]" />
                  San Francisco, CA
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-6">
              <h3
                className="font-serif text-xl font-medium italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Social
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#c45d3a] transition-colors duration-300"
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
              <h3
                className="font-serif text-xl font-medium italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Quick Links
              </h3>
              <nav className="space-y-3">
                {['About', 'Projects', 'Skills', 'Education'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-[#a0a0a0] hover:text-white hover:translate-x-2 transition-all duration-300"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
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
    </footer>
  )
}
