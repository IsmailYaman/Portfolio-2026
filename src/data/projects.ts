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
  buttonLabel?: string
  githubUrl?: string
  year: string
  role: string
  duration: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: 'pure-fuel-solution',
    title: 'Pure Fuel Solution',
    description:
      'A website for a 24/7 diesel fuel polishing service protecting critical infrastructure across South Florida.',
    fullDescription: `Pure Fuel Solution is a professional fuel polishing and tank maintenance service operating 24/7 across South Florida. They specialise in keeping backup generators running for hospitals, data centres, and other critical infrastructure.
    
    The website was built to clearly communicate their services and four-step process, build trust with key statistics, and make it easy for potential clients to get in touch at any hour.`,
    image: '/projects/purefuelsolution.png',
    tags: ['Framer'],
    color: '#d00003',
    liveUrl: 'https://www.purefuelsolution.com/',
    buttonLabel: 'Visit website',
    year: '2025',
    role: 'Web Designer & Developer',
    duration: '3 weeks',
    highlights: [
      'Designed a trust-focused layout highlighting a 500+ client track record',
      'Clearly structured a four-step service process for a technical audience',
      'Built a fully responsive site optimised for 24/7 emergency lead generation',
    ],
  },
  {
    slug: 'yamotion',
    title: 'YAMOTION',
    description:
      'My freelance web development business, specializing in Framer websites and Shopify webshops with a focus on design, performance, and user experience.',
    fullDescription: `YAMOTION is my freelance web development business, specializing in Framer websites and Shopify webshops with a focus on design, performance, and user experience. I create modern, interactive, and high-quality web solutions tailored to clients' needs.`,
    image: '/projects/yamotion.png',
    tags: ['Framer', 'React'],
    color: '#111111',
    liveUrl: 'https://yamotion.com/',
    buttonLabel: 'Visit website',
    year: '2024',
    role: 'Founder & Developer',
    duration: 'Ongoing',
    highlights: [
      'Founded and built the full brand identity and website',
      'Specialises in Framer websites and Shopify webshops',
      'Focused on design quality, performance, and user experience',
    ],
  },
  {
    slug: 'global-power-services',
    title: 'Global Power Services',
    description:
      'A website for a generator specialist showcasing their products, maintenance services, and commitment to reliable power solutions.',
    fullDescription: `This client specialises in providing generators and expertise in maintenance and repair services. Their goal is to ensure reliable power solutions for every customer.

This website was created to showcase their wide range of products and services, as well as their commitment to delivering in the generator industry. With a user-friendly design and detailed content, the platform ensures customers can easily find the right solutions for their power needs.`,
    image: '/projects/global-pow.png',
    tags: ['Framer', 'React'],
    color: '#06beff',
    liveUrl: 'https://global-pow.com/',
    buttonLabel: 'Visit website',
    year: '2024',
    role: 'Web Designer & Developer',
    duration: '3 weeks',
    highlights: [
      'Designed a clear product and services showcase for a technical audience',
      'Built with a user-friendly layout to help customers find power solutions quickly',
      "Delivered a fully responsive site reflecting the client's industry expertise",
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
    color: '#00a5f4',
    liveUrl: 'https://ajeethmuthu.vercel.app/',
    buttonLabel: 'Visit website',
    year: '2025',
    role: 'Web Designer & Developer',
    duration: '3 weeks',
    highlights: [
      'Designed and built a fully responsive portfolio with animated transitions',
      'Structured content to showcase both technical skills and personality',
      'Deployed on Vercel with Next.js for fast, reliable performance',
    ],
  },
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
    buttonLabel: 'Visit website (mobile recommended)',
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
    buttonLabel: 'Play game',
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
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
