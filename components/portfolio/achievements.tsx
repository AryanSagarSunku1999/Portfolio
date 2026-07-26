import { Trophy } from 'lucide-react'
import { achievements } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { SectionShell } from './section-shell'

export function Achievements() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Achievements"
        title="Evidence of how I work, not just what I’ve done."
        description="The strongest signals are often the ones that reflect judgment, initiative, and growth over time."
        className="mb-16"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 70} className="group relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <Trophy className="h-5 w-5 text-accent" aria-hidden />
            <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-7 text-muted-foreground">{item.detail}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
