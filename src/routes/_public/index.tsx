import { createFileRoute } from '@tanstack/react-router'
import {
  Hero,
  About,
  Projects,
  Skills,
  Experience,
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
      <Experience />
      <Footer />
    </main>
  )
}
