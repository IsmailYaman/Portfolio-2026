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
      'Building performant, scalable web applications with the React ecosystem. From server components to client-side animations, I craft interfaces that feel fast and intentional.',
    colSpan: 3,
  },
  {
    id: 'typescript',
    logo: siTypescript,
    title: 'TypeScript',
    description:
      'Writing type-safe code that scales. TypeScript is my default — it catches errors early and makes large codebases a pleasure to navigate.',
    colSpan: 2,
  },
  {
    id: 'laravel',
    logo: siLaravel,
    title: 'Laravel',
    description:
      'Building robust backend systems and APIs with Laravel. From authentication to queues and scheduled tasks, I leverage the full ecosystem to ship reliable server-side applications.',
    colSpan: 2,
  },
  {
    id: 'claude-code',
    logo: siClaude,
    title: 'Claude Code',
    description:
      "Using AI-assisted development as a core part of my workflow. Claude Code helps me move faster, think through architecture, and tackle problems I'd otherwise spend hours on.",
    colSpan: 3,
  },
]

export const workedWith: WorkedWithItem[] = [
  { logo: siTanstack, label: 'Tanstack' },
  { logo: siTailwindcss, label: 'Tailwind' },
  { logo: siGit, label: 'Git' },
  { logo: siGithub, label: 'Github' },
  { logo: siDocker, label: 'Docker' },
  { logo: siJira, label: 'Jira' },
  { logo: siBlender, label: 'Blender' },
  { logo: siFigma, label: 'Figma' },
  { logo: siVite, label: 'Vite' },
  { logo: siStorybook, label: 'Storybook' },
  { logo: siFramer, label: 'Framer' },
  { logo: siShopify, label: 'Shopify' },
  { logo: siVercel, label: 'Vercel' },
]
