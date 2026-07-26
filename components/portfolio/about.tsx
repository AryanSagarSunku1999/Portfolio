import { ArrowRight, Cpu, Globe, Layers, Sprout } from 'lucide-react'
import { aboutJourney } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { SectionShell } from './section-shell'

const pillars = [
  {
    icon: Cpu,
    title: 'Systems thinking',
    body: 'I think in failure modes, constraints, and reliability — not just features.',
  },
  {
    icon: Layers,
    title: 'Product-minded engineering',
    body: 'I care about the experience, the architecture, and the long-term maintainability.',
  },
  {
    icon: Sprout,
    title: 'Practical AI',
    body: 'I use AI where it reduces friction and improves outcomes, without overengineering.',
  },
  {
    icon: Globe,
    title: 'International perspective',
    body: 'Studying and building in Germany has strengthened my adaptability and professional maturity.',
  },
]

export function About() {
  return (
    <SectionShell id="about">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <SectionHeading
          eyebrow="About"
          title="From applied engineering to product-focused software."
          description="My path started in the field, where reliability mattered more than abstraction. That perspective now shapes how I design software for real users."
        />

        <div className="flex flex-col gap-6">
          <Reveal className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)] sm:p-8">
            <p className="text-pretty text-base leading-8 text-muted-foreground">
              I began as an <span className="font-medium text-foreground">Application Engineer</span>, working across industrial networking and IoT deployments where mistakes had immediate consequences. That experience taught me to value clarity, resilience, and calm execution.
            </p>
            <p className="mt-4 text-pretty text-base leading-8 text-muted-foreground">
              From there, I naturally moved into software — first building the interfaces and tools around those systems, then expanding into full-stack product development and AI-enabled experiences. Today, I look for problems that deserve thoughtful engineering rather than superficial solutions.
            </p>
          </Reveal>

          <div className="rounded-[2rem] border border-border/70 bg-background/40 p-4 sm:p-5">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <span className="text-accent">Growth story</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {aboutJourney.map((item, index) => (
                <Reveal key={item.title} delay={index * 70} className="rounded-2xl border border-border/60 bg-card/60 p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-[11px] text-accent">
                      0{index + 1}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 70} className="group rounded-2xl border border-border/60 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30">
                <pillar.icon className="h-5 w-5 text-accent" aria-hidden />
                <h3 className="mt-3 text-sm font-semibold">{pillar.title}</h3>
                <p className="mt-1.5 text-sm leading-7 text-muted-foreground">{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
