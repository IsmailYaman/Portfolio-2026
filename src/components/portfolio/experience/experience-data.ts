import { Briefcase, GraduationCap, type LucideIcon } from 'lucide-react'

export interface ExperienceItem {
  title: string
  institution: string
  date: string
  description: string
  icon: LucideIcon
  logo: string
}

export const experience: ExperienceItem[] = [
  {
    title: 'Frontend Developer',
    institution: 'Notive',
    date: 'May 2024 - Present',
    description:
      'Returned to Notive as a full frontend developer, building modern web applications and contributing to the technical direction of projects.',
    icon: Briefcase,
    logo: '/logos/notive.png',
  },
  {
    title: 'Frontend Developer',
    institution: 'Ventaro',
    date: 'May 2024 - Present',
    description:
      'Ventaro, a Notive company where the focus lies on smalle scale projects.Working on Framer and Shopify project, and supporting existing clients with questions.',
    icon: Briefcase,
    logo: '/logos/ventaro.png',
  },
  {
    title: 'Founder',
    institution: 'YAMOTION',
    date: 'Nov 2024 - Present',
    description:
      'Founded YAMOTION, where I focus on creating websites and webshops for my clients.',
    icon: Briefcase,
    logo: '/logos/yamotion.png',
  },
  {
    title: 'XR Developer Intern (Thesis)',
    institution: '360fabriek',
    date: 'Sep 2023 - Feb 2024',
    description:
      'Completed my thesis internship focusing on XR development, exploring immersive technologies and their applications in the healthcare industry.',
    icon: Briefcase,
    logo: '/logos/360fabriek.png',
  },
  {
    title: 'Frontend Developer',
    institution: 'WeAreReasonablePeople',
    date: 'Aug 2022 - Sep 2023',
    description:
      'Developed user interfaces and dashboards, collaborating with design and backend teams to deliver high-quality digital products.',
    icon: Briefcase,
    logo: '/logos/warp.png',
  },
  {
    title: 'Frontend Developer Intern',
    institution: 'Notive',
    date: 'Aug 2020 - Jan 2021',
    description:
      'Started my professional journey as a frontend development intern, learning industry practices and contributing to real-world projects.',
    icon: Briefcase,
    logo: '/logos/notive.png',
  },
  {
    title: 'Bachelor of Creative Media & Game Technologies',
    institution: 'University of Applied Sciences, Rotterdam',
    date: 'Sep 2018 - Feb 2023',
    description:
      'Pursued a degree in Creative Media & Game Technologies with emphasis on frontend development and design.',
    icon: GraduationCap,
    logo: '/logos/hr.png',
  },
  {
    title: 'MBO 4 - Software Engineer',
    institution: 'ROC Mondriaan, The Hague',
    date: 'Sep 2015 - June 2018',
    description:
      'Gained valuable experience in both frontend and backend development, with a strong preference for frontend work due to the immediate visual feedback and creative possibilities.',
    icon: GraduationCap,
    logo: '/logos/rocmondriaan.png',
  },
]
