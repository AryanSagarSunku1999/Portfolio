import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { ProjectCard } from './project-card'
import { SectionShell } from './section-shell'

export function Projects() {
  const shipped = projects.filter((p) => p.status === 'shipped')
  const planned = projects.filter((p) => p.status === 'planned')

  return (
    <SectionShell id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Engineering work that shows how I think."
        description="Each project below reflects a different layer of the craft: product clarity, resilient architecture, and thoughtful delivery."
        className="mb-16"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {shipped.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">On the roadmap</span>
          <span className="h-px flex-1 bg-border" aria-hidden />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {planned.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
