export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Vue.js', level: 80 },
      { name: 'Node.js', level: 85 },
    ],
  },
  {
    title: 'Styling & Animation',
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'CSS/SCSS', level: 90 },
      { name: 'Framer Motion', level: 88 },
      { name: 'Three.js', level: 70 },
      { name: 'GSAP', level: 75 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Figma', level: 88 },
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'Vercel', level: 90 },
    ],
  },
]

export const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vue.js',
  'Svelte',
  'Node.js',
  'GraphQL',
  'REST APIs',
  'Tailwind CSS',
  'SCSS',
  'Framer Motion',
  'Three.js',
  'D3.js',
  'Jest',
  'Cypress',
  'Git',
  'Docker',
  'AWS',
  'Vercel',
  'Figma',
  'Storybook',
  'Webpack',
  'Vite',
  'PostgreSQL',
  'MongoDB',
]
