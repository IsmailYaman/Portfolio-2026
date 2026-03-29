export interface Project {
  slug: string
  title: string
  description: string
  fullDescription: string
  image: string
  gallery?: string[]
  tags: string[]
  color: string
  liveUrl?: string
  githubUrl?: string
  year: string
  role: string
  duration: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: 'cp-ar',
    title: 'CP-AR',
    description:
      'A web-AR experience to teach the basics of first aid actions for a heart attack emergency, built as a thesis project.',
    fullDescription: `CP-AR is a web-AR experience to make sure you know the basics of first aid actions for a heart attack emergency.

CP-AR was my thesis project that I had the opportunity to develop for my studies in Creative Media & Game Technologies. Extensive research was done on the areas where improvements could be made within heart attack emergencies in the Netherlands.`,
    image: '/projects/cp-ar.png',
    tags: ['A-Frame', '8th Wall', 'Blender'],
    color: '#c0392b',
    liveUrl: 'https://cp-ar.vercel.app/',
    year: '2024',
    role: 'XR Developer',
    duration: '5 months',
    highlights: [
      'Researched improvements in heart attack emergency response in the Netherlands',
      'Built a web-AR experience accessible on mobile without an app install',
      'Modelled and animated 3D assets in Blender for the AR scene',
      'Completed as thesis project for Creative Media & Game Technologies',
    ],
  },
  {
    slug: 'achromira',
    title: 'Achromira',
    description:
      'A story-rich platformer where Mira searches for crystal shards to restore colour to three unique worlds.',
    fullDescription: `Achromira is a story rich platformer where Mira, the character you play as, has to search for all the crystal shards in order to restore colour to her own world and that of others. Follow her on her journey to rescue three unique worlds, Achrome City, Rutate and Gryd.

This was the second project with the game development minor. As an artist within the team, I worked mainly on the first level of the game. Almost all the assets in this level are done by me. Next to that I also worked on various assets in other levels.`,
    image: '/projects/achromira.png',
    tags: ['Unity', 'Blender', 'Illustrator'],
    color: '#4d4d4d',
    liveUrl: 'https://store.steampowered.com/app/1809760/Achromira/',
    year: '2022',
    role: '3D Artist',
    duration: '4 months',
    highlights: [
      'Created nearly all 3D and 2D assets for the first game level',
      'Contributed additional assets across the remaining two levels',
      'Published on Steam as part of the game development minor',
      'Collaborated in a multidisciplinary team using Scrum',
    ],
  },
  {
    slug: 'waar-bekken-ik',
    title: 'Waar Bekken Ik?',
    description:
      'An interactive 3D pelvis visualisation for Erasmus University medical students, making complex anatomy accessible.',
    fullDescription: `This was a school project where my team had to solve a problem that medical students at Erasmus University were facing. The pelvis is one of the few parts of the human body that is very difficult for students to understand only from books. We made a 3D visualisation that makes the pelvis clear to students by showing it from different perspectives.

This was a long project that lasted six months. During that time, we worked with Scrum and Agile principles. The special thing about this project is that it is a long-term project — next year's CMGT students were intended to continue building on it.`,
    image: '/projects/waarbekkenik.png',
    tags: ['Unity', 'React'],
    color: '#1a5276',
    liveUrl: 'https://cmgt.hr.nl/projecten/waar-bekken-ik',
    year: '2022',
    role: 'Full Stack Developer',
    duration: '6 months',
    highlights: [
      'Built a multi-perspective 3D pelvis viewer for medical education',
      'Worked Agile with Scrum over a six-month development cycle',
      'Designed as a long-term handoff project for future student cohorts',
      'Collaborated directly with Erasmus University stakeholders',
    ],
  },
  {
    slug: 'ajeethmuthu-portfolio',
    title: 'Ajeeth Muthu — Portfolio',
    description:
      'A personal portfolio for a data professional based in Den Haag, showcasing expertise in data engineering, machine learning, and AI.',
    fullDescription: `A modern portfolio website built for Ajeeth Muthu, a Data Steward based in Den Haag, Netherlands. The site presents his background in data engineering, machine learning, and AI in a clean, animated interface.

The portfolio highlights his hard skills — Python, SQL, Power BI, Tableau — alongside his professional experience across data-focused roles. Personal touches throughout the site give it a human feel that goes beyond a standard CV.`,
    image: '/projects/ajeeth.png',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    color: '#2563eb',
    liveUrl: 'https://ajeethmuthu.vercel.app/',
    year: '2025',
    role: 'Web Designer & Developer',
    duration: '3 weeks',
    highlights: [
      'Designed and built a fully responsive portfolio with animated transitions',
      'Structured content to showcase both technical skills and personality',
      'Deployed on Vercel with Next.js for fast, reliable performance',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
