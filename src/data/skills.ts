import type { SimpleIcon } from 'simple-icons'
import {
  siReact,
  siTypescript,
  siLaravel,
  siClaude,
  siGit,
  siDocker,
  siGithub,
  siFigma,
  siVercel,
  siVite,
  siStorybook,
  siTailwindcss,
  siJira,
  siBlender,
  siTanstack,
  siFramer,
  siShopify,
  siAngular,
} from 'simple-icons'

export interface FeaturedSkill {
  id: string
  logo: SimpleIcon
  title: string
  description: string
  colSpan: 2 | 3
}

export interface WorkedWithItem {
  logo: SimpleIcon
  label: string
}

export const featuredSkills: FeaturedSkill[] = [
  {
    id: 'react-next',
    logo: siReact,
    title: 'React & Next.js',
    description:
      'For years now, I have been using React and Next.js to build web applications. I have a good understanding of the React ecosystem and how to use it to build performant, scalable web applications in combination with Next.js.',
    colSpan: 3,
  },
  {
    id: 'typescript',
    logo: siTypescript,
    title: 'TypeScript',
    description:
      'After years of using JavaScript, I have switched to TypeScript as it is a type-safe language that helps me catch errors early and makes large codebases a pleasure to navigate.',
    colSpan: 2,
  },
  {
    id: 'laravel',
    logo: siLaravel,
    title: 'Laravel',
    description:
      'Laravel gave me a new perspective on how to approach backend development. As a mainly frontend developer, I have a good understanding of the Laravel ecosystem and how to use it to build robust backend systems and APIs.',
    colSpan: 2,
  },
  {
    id: 'claude-code',
    logo: siClaude,
    title: 'Claude Code',
    description:
      'Since the introduction of Claude Code, I have been using it to help me with my development. It has helped me move faster, think through architecture, and tackle problems I\'d otherwise spend hours on. It gave me a new perspective on how to approach development. I believe that with the help of AI, we can build better software faster and more efficiently.',
    colSpan: 3,
  },
]

export const workedWith: WorkedWithItem[] = [
    { logo: siAngular, label: 'Angular' },
    { logo: siBlender, label: 'Blender' },
    { logo: siDocker, label: 'Docker' },
    { logo: siFramer, label: 'Framer' },
    { logo: siFigma, label: 'Figma' },
    { logo: siGit, label: 'Git' },
    { logo: siGithub, label: 'Github' },
    { logo: siJira, label: 'Jira' },
    { logo: siShopify, label: 'Shopify' },
    { logo: siStorybook, label: 'Storybook' },
    { logo: siTailwindcss, label: 'Tailwind' },
    { logo: siTanstack, label: 'Tanstack' },
    { logo: siVercel, label: 'Vercel' },
    { logo: siVite, label: 'Vite' },
]

