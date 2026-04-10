import { createFileRoute } from '@tanstack/react-router'

const siteUrl = import.meta.env.VITE_SITE_URL ?? 'https://ismailkayadelen.com'
const title = 'Ismail Kayadelen — Web Developer & Designer'
const description =
  'Web developer & designer based in the Netherlands with 4+ years of experience. Specialising in React, TypeScript, Next.js and Laravel — from database design to the last CSS tweak.'
import { Hero } from '@/components/portfolio/Hero'
import { About } from '@/components/portfolio/About'
import { Projects } from '@/components/portfolio/projects'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Footer } from '@/components/portfolio/footer'
import { Navigation } from '@/components/portfolio/navigation'

export const Route = createFileRoute('/_public/')({
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: siteUrl },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: `${siteUrl}/Shadowizzy.png` },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${siteUrl}/Shadowizzy.png` },
    ],
    links: [{ rel: 'canonical', href: siteUrl }],
  }),
  component: Index,
})

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  )
}
