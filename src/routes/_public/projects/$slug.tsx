import { createFileRoute, notFound } from '@tanstack/react-router'

const siteUrl = import.meta.env.VITE_SITE_URL ?? 'https://ismailkayadelen.com'
import { getProjectBySlug } from '@/data/projects'
import { ProjectDetail } from '@/components/portfolio/project-detail'
import { Navigation } from '@/components/portfolio/navigation'
import { Footer } from '@/components/portfolio/footer'

export const Route = createFileRoute('/_public/projects/$slug')({
  loader: async ({ params }) => {
    const project = getProjectBySlug(params.slug)

    if (!project) {
      throw notFound()
    }

    return { project }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const { project } = loaderData
    const title = `${project.title} — Ismail Kayadelen`
    const image = `${siteUrl}${project.image}`
    const url = `${siteUrl}/projects/${project.slug}`
    return {
      meta: [
        { title },
        { name: 'description', content: project.description },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: url },
        { property: 'og:title', content: title },
        { property: 'og:description', content: project.description },
        { property: 'og:image', content: image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: project.description },
        { name: 'twitter:image', content: image },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <main className="min-h-screen bg-[#f5f3f0] flex items-center justify-center">
      <div className="text-center">
        <h1
          className="font-serif text-4xl md:text-5xl font-medium text-[#1a1a1a] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Project Not Found
        </h1>
        <p
          className="text-[#5a5a5a] text-lg mb-8"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          The project you're looking for doesn't exist.
        </p>
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#753d9f] text-white rounded-full hover:bg-[#5e2f82] transition-colors duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Back to Projects
        </a>
      </div>
    </main>
  ),
})

function ProjectPage() {
  const { project } = Route.useLoaderData()

  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  )
}
