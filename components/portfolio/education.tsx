import { GraduationCap, MapPin, Award } from 'lucide-react'
import { certifications, education } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { SectionShell } from './section-shell'

export function Education() {
  return (
    <SectionShell id="education">
      <SectionHeading eyebrow="Education" title="Strong fundamentals, continuous growth." className="mb-16" />

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/70 via-border to-transparent sm:left-5" aria-hidden />
          <ol className="flex flex-col gap-8">
            {education.map((edu) => (
              <li key={edu.degree} className="relative pl-12 sm:pl-16">
                <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent/50 bg-card sm:h-10 sm:w-10" aria-hidden>
                  <GraduationCap className="h-4 w-4 text-accent" />
                </span>
                <Reveal className="rounded-[2rem] border border-border/70 bg-card/70 p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    {edu.current ? (
                      <span className="rounded-full border border-accent/40 bg-accent/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-accent">{edu.school}</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{edu.period}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="mt-4 text-pretty text-sm leading-7 text-muted-foreground">{edu.detail}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="h-fit rounded-[2rem] border border-border/70 bg-card/70 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-secondary/50 text-accent">
              <Award className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="text-sm font-semibold">Certifications & Training</h3>
          </div>
          <ul className="mt-6 flex flex-col divide-y divide-border">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-3 py-3 text-sm leading-7">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span className="text-muted-foreground">{cert}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionShell>
  )
}
