import { Briefcase, MapPin } from 'lucide-react'
import { experiences } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { SectionShell } from './section-shell'

export function Experience() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="High-stakes engineering experience, translated into product thinking."
        description="My work has always sat at the intersection of reliability, implementation, and customer impact."
        className="mb-16"
      />

      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/70 via-border to-transparent sm:left-5" aria-hidden />

        <ol className="flex flex-col gap-10">
          {experiences.map((exp) => (
            <li key={`${exp.role}-${exp.company}`} className="relative pl-12 sm:pl-16">
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent/50 bg-card sm:h-10 sm:w-10" aria-hidden>
                <Briefcase className="h-4 w-4 text-accent" />
              </span>

              <Reveal className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.05)] sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold sm:text-xl">{exp.role}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">{exp.company}</p>
                  </div>
                  <div className="mt-1 flex flex-col gap-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:mt-0 sm:items-end">
                    <span>{exp.period}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-pretty leading-8 text-muted-foreground">{exp.summary}</p>

                <ul className="mt-5 flex flex-col gap-3">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-7">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span className="text-muted-foreground">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  )
}
