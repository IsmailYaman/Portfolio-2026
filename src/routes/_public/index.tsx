import { createFileRoute } from '@tanstack/react-router'
import {
  Hero,
  About,
  Projects,
  Skills,
  Education,
  Footer,
  Navigation,
} from '@/components/portfolio'

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
      <Education />
      <Footer />
    </main>
  )
}
