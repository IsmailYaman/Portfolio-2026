import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/portfolio/Hero'
import { About } from '@/components/portfolio/About'
import { Projects } from '@/components/portfolio/projects'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Footer } from '@/components/portfolio/footer'
import { Navigation } from '@/components/portfolio/navigation'

export const Route = createFileRoute('/_public/')({
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
