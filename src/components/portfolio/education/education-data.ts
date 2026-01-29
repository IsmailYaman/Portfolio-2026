import { GraduationCap, Award, BookOpen, type LucideIcon } from 'lucide-react'

export interface EducationItem {
  type: 'degree' | 'certification'
  title: string
  institution: string
  date: string
  description: string
  icon: LucideIcon
}

export const education: EducationItem[] = [
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
