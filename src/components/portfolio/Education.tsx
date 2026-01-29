'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const education = [
  {
    type: 'degree',
    title: 'Bachelor of Science in Computer Science',
    institution: 'University of California, Berkeley',
    date: '2014 - 2018',
    description:
      'Focused on Human-Computer Interaction and Software Engineering. Graduated with honors.',
    icon: GraduationCap,
  },
  {
    type: 'certification',
    title: 'AWS Certified Developer – Associate',
    institution: 'Amazon Web Services',
    date: '2022',
    description:
      'Demonstrated proficiency in developing and maintaining AWS-based applications.',
    icon: Award,
  },
  {
    type: 'certification',
    title: 'Google UX Design Professional Certificate',
    institution: 'Google / Coursera',
    date: '2021',
    description:
      'Comprehensive training in user experience design, research, and prototyping.',
    icon: BookOpen,
  },
  {
    type: 'certification',
    title: 'Meta Front-End Developer Certificate',
    institution: 'Meta / Coursera',
    date: '2023',
    description:
      'Advanced React patterns, testing strategies, and modern frontend architecture.',
    icon: Award,
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-32 md:py-40 bg-[#f5f3f0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            className="text-[#c45d3a] font-medium tracking-[0.2em] uppercase text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Background
          </motion.span>
          <motion.h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Education & <span className="italic">Certifications</span>
          </motion.h2>
          <motion.p
            className="text-[#5a5a5a] text-lg max-w-2xl mx-auto mt-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A foundation built on formal education and continuous learning. I
            believe in staying current with industry best practices.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c45d3a] via-[#c45d3a]/50 to-[#c45d3a]/20 -translate-x-1/2"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-12">
            {education.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={item.title}
                  className={`relative flex items-start gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {/* Icon circle */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className="w-16 h-16 bg-white rounded-full border-2 border-[#e8e4df] flex items-center justify-center shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + index * 0.15,
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{
                        scale: 1.15,
                        borderColor: '#c45d3a',
                        boxShadow: '0 10px 30px rgba(196, 93, 58, 0.2)',
                        rotate: 360,
                        transition: { duration: 0.4 },
                      }}
                    >
                      <Icon className="w-6 h-6 text-[#c45d3a]" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
                      isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                    }`}
                  >
                    <motion.div
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 border border-[#e8e4df]/50 hover:border-[#c45d3a]/30"
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <motion.span
                        className="text-[#c45d3a] text-sm font-medium"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.6 + index * 0.15,
                        }}
                      >
                        {item.date}
                      </motion.span>
                      <h3
                        className="font-serif text-lg font-medium text-[#1a1a1a] mt-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[#5a5a5a] text-sm mt-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.institution}
                      </p>
                      <p
                        className="text-[#6a6a6a] text-sm mt-3 leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-4rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
