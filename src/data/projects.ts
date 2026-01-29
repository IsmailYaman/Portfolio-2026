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
    slug: 'lumina-dashboard',
    title: 'Lumina Dashboard',
    description:
      'A comprehensive analytics platform with real-time data visualization, custom reporting, and team collaboration features.',
    fullDescription: `Lumina Dashboard is a comprehensive analytics platform designed to transform raw data into actionable insights. Built with performance and scalability in mind, it handles millions of data points while maintaining sub-second response times.

The platform features real-time data visualization with customizable charts and graphs, allowing teams to monitor KPIs as they update. Custom reporting tools enable users to create tailored reports that can be scheduled and shared automatically.

Team collaboration is at the heart of Lumina, with shared dashboards, commenting systems, and role-based access control ensuring the right people see the right data at the right time.`,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop',
    ],
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    color: '#c45d3a',
    liveUrl: 'https://example.com/lumina',
    githubUrl: 'https://github.com/example/lumina',
    year: '2024',
    role: 'Lead Frontend Developer',
    duration: '6 months',
    highlights: [
      'Reduced dashboard load time by 60% through code splitting and lazy loading',
      'Implemented real-time WebSocket updates for live data streaming',
      'Built custom D3.js visualization components used across 15+ dashboard widgets',
      'Achieved 98% test coverage with comprehensive unit and integration tests',
    ],
  },
  {
    slug: 'verdant-ecommerce',
    title: 'Verdant E-Commerce',
    description:
      'A sustainable fashion marketplace featuring AR try-on, personalized recommendations, and carbon-neutral shipping integration.',
    fullDescription: `Verdant is a revolutionary e-commerce platform dedicated to sustainable fashion. The marketplace connects eco-conscious consumers with brands committed to ethical manufacturing and environmental responsibility.

The standout feature is the AR try-on experience, allowing customers to virtually try clothing items before purchase, significantly reducing return rates and the associated carbon footprint. Machine learning powers personalized recommendations based on style preferences, size history, and sustainability priorities.

Every order includes transparent carbon footprint tracking, and customers can choose carbon-neutral shipping options. The platform has partnered with certified offset programs to make sustainable shopping accessible to everyone.`,
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
    ],
    tags: ['Next.js', 'Stripe', 'Prisma', 'Framer Motion'],
    color: '#2d5a4a',
    liveUrl: 'https://example.com/verdant',
    githubUrl: 'https://github.com/example/verdant',
    year: '2024',
    role: 'Full Stack Developer',
    duration: '8 months',
    highlights: [
      'Integrated AR try-on reducing return rates by 40%',
      'Built recommendation engine processing 1M+ user interactions daily',
      'Implemented Stripe Connect for multi-vendor payment processing',
      'Designed mobile-first UI achieving 4.8/5 user satisfaction rating',
    ],
  },
  {
    slug: 'wavelength-music',
    title: 'Wavelength Music',
    description:
      'A social music discovery app with collaborative playlists, live listening sessions, and AI-powered mood-based recommendations.',
    fullDescription: `Wavelength reimagines music discovery as a social experience. The app brings people together through shared musical moments, whether discovering new artists or enjoying favorites with friends.

Collaborative playlists allow multiple users to contribute and vote on tracks in real-time. Live listening sessions sync playback across users worldwide, creating virtual concert experiences complete with chat and reactions.

The AI-powered mood engine analyzes listening patterns, time of day, and user input to suggest the perfect soundtrack for any moment. Whether you need focus music for work or energy for a workout, Wavelength adapts to your needs.`,
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=800&fit=crop',
    ],
    tags: ['React Native', 'Node.js', 'WebSocket', 'Spotify API'],
    color: '#5a3d7a',
    liveUrl: 'https://example.com/wavelength',
    githubUrl: 'https://github.com/example/wavelength',
    year: '2023',
    role: 'Mobile Developer',
    duration: '5 months',
    highlights: [
      'Built real-time sync engine with <50ms latency across continents',
      'Integrated Spotify, Apple Music, and YouTube Music APIs',
      'Grew to 50K+ monthly active users in first 3 months',
      'Featured in App Store "Apps We Love" collection',
    ],
  },
  {
    slug: 'architect-studio',
    title: 'Architect Studio',
    description:
      'Portfolio and project management tool for architecture firms with 3D model previews and client collaboration portals.',
    fullDescription: `Architect Studio is a specialized platform built for modern architecture firms to showcase their work and collaborate with clients seamlessly. It bridges the gap between technical architectural workflows and client-facing presentations.

The 3D model preview system allows architects to upload their CAD and BIM files, which are automatically converted to web-friendly formats for client viewing. Clients can explore designs in an intuitive 3D viewer without specialized software.

The client collaboration portal provides a central hub for project communication, document sharing, and approval workflows. Version control for designs ensures everyone is always looking at the latest iteration while maintaining a complete history.`,
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    ],
    tags: ['Vue.js', 'Three.js', 'GraphQL', 'AWS'],
    color: '#3a5a7a',
    liveUrl: 'https://example.com/architect-studio',
    githubUrl: 'https://github.com/example/architect-studio',
    year: '2023',
    role: 'Frontend Architect',
    duration: '7 months',
    highlights: [
      'Built custom Three.js viewer supporting 50+ 3D file formats',
      'Reduced client approval time by 65% with streamlined workflows',
      'Implemented real-time collaboration with conflict resolution',
      'Deployed serverless architecture handling 10K+ daily visitors',
    ],
  },
  {
    slug: 'mindful-moments',
    title: 'Mindful Moments',
    description:
      'A meditation and wellness app with guided sessions, progress tracking, and community challenges for mental health.',
    fullDescription: `Mindful Moments makes meditation accessible to everyone, from complete beginners to experienced practitioners. The app combines evidence-based techniques with modern technology to support mental wellness.

Guided sessions cover a wide range of practices including mindfulness meditation, breathing exercises, body scans, and sleep stories. Each session is crafted by certified meditation teachers and backed by mental health research.

Progress tracking helps users build consistent habits with streaks, session history, and mood tracking. Community challenges add a social element, allowing users to meditate together and support each other's wellness journeys.`,
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200&h=800&fit=crop',
    ],
    tags: ['React', 'Firebase', 'Howler.js', 'PWA'],
    color: '#7a6a5a',
    liveUrl: 'https://example.com/mindful-moments',
    year: '2023',
    role: 'Solo Developer',
    duration: '4 months',
    highlights: [
      'Built offline-first PWA with 100% Lighthouse accessibility score',
      'Implemented gapless audio playback for seamless meditation sessions',
      'Created custom analytics dashboard for user engagement insights',
      'Achieved 4.9/5 average rating with 10K+ reviews',
    ],
  },
  {
    slug: 'codeflow-ide',
    title: 'CodeFlow IDE',
    description:
      'A browser-based collaborative code editor with real-time pair programming, integrated terminal, and AI code assistance.',
    fullDescription: `CodeFlow IDE brings the power of a full development environment to the browser. It's designed for teams who want to code together without the friction of local setup or environment inconsistencies.

Real-time pair programming allows multiple developers to work on the same file simultaneously with live cursors, selections, and edits. The integrated terminal provides full shell access to the development environment, supporting all common workflows.

AI code assistance powered by large language models helps with code completion, refactoring suggestions, and documentation generation. The assistant understands the entire codebase context, providing relevant and accurate suggestions.`,
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=800&fit=crop',
    ],
    tags: ['TypeScript', 'Monaco Editor', 'WebRTC', 'Docker'],
    color: '#1a1a1a',
    liveUrl: 'https://example.com/codeflow',
    githubUrl: 'https://github.com/example/codeflow',
    year: '2024',
    role: 'Technical Lead',
    duration: '9 months',
    highlights: [
      'Achieved <100ms latency for real-time collaboration using CRDTs',
      'Built custom language server protocol implementation for 20+ languages',
      'Implemented secure sandboxed execution environment with Docker',
      'Scaled to support 1000+ concurrent collaborative sessions',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
