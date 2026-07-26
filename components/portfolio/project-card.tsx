import Image from 'next/image'
import { ArrowUpRight, Lock, Sparkles } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { GithubIcon } from './brand-icons'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isPlanned = project.status === 'planned'

  return (
    <Reveal
      as="article"
      delay={(index % 2) * 80}
      className="group flex flex-col overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70">
        {project.image ? (
          <Image
            src={project.image || '/placeholder.svg'}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary/40 bg-grid">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Sparkles className="h-6 w-6 text-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.24em]">In the pipeline</span>
            </div>
          </div>
        )}
        <div className="absolute left-4 top-4">
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.24em] backdrop-blur ${isPlanned ? 'border-border bg-background/70 text-muted-foreground' : 'border-accent/40 bg-accent/15 text-accent'}`}>
            {isPlanned ? <Lock className="h-3 w-3" /> : <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
            {isPlanned ? 'Planned' : 'Shipped'}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <dl className="mt-5 flex flex-col gap-3 text-sm">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/80">Problem</dt>
            <dd className="mt-1 leading-7 text-muted-foreground">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/80">Solution</dt>
            <dd className="mt-1 leading-7 text-muted-foreground">{project.solution}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/80">My role</dt>
            <dd className="mt-1 leading-7 text-muted-foreground">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/80">Architecture</dt>
            <dd className="mt-1 leading-7 text-muted-foreground">{project.architecture}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/80">Challenges</dt>
            <dd className="mt-1 leading-7 text-muted-foreground">{project.challenges}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/80">Results</dt>
            <dd className="mt-1 leading-7 text-muted-foreground">{project.results}</dd>
          </div>
        </dl>

        <ul className="mt-4 flex flex-col gap-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm leading-7 text-muted-foreground">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              {f}
            </li>
          ))}
        </ul>

        {project.futureImprovements ? (
          <div className="mt-5 rounded-2xl border border-border/60 bg-secondary/40 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/80">Future improvements</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.futureImprovements.map((item) => (
                <li key={item} className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <a href={project.github ?? '#'} aria-disabled={isPlanned} className={`inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium transition-colors ${isPlanned ? 'pointer-events-none opacity-40' : 'hover:border-accent/50 hover:text-accent'}`}>
            <GithubIcon className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a href={project.demo ?? '#'} aria-disabled={isPlanned} className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-transform ${isPlanned ? 'pointer-events-none bg-secondary/60 text-muted-foreground opacity-40' : 'bg-primary text-primary-foreground hover:scale-[1.04] active:scale-95'}`}>
            Live Demo
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </Reveal>
  )
}
