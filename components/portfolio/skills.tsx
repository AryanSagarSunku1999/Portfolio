import { Boxes, Cloud, Code2, Database, GitBranch, Layout, Network, Server, Wrench } from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { SectionShell } from './section-shell'

const iconMap: Record<string, typeof Code2> = {
  Frontend: Layout,
  Backend: Server,
  Languages: Code2,
  Databases: Database,
  Cloud: Cloud,
  DevOps: GitBranch,
  Networking: Network,
  'IoT & Embedded': Boxes,
  Tools: Wrench,
}

export function Skills() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit shaped by both systems and product delivery."
        description="These are the disciplines I bring together to build thoughtful software, from the infrastructure layer to the product surface."
        className="mb-16"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.title] ?? Code2
          return (
            <Reveal key={group.title} delay={(i % 3) * 70} className="group rounded-[1.5rem] border border-border/70 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-secondary/60 text-accent transition-colors group-hover:border-accent/40">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold">{group.title}</h3>
                </div>
                {'placeholder' in group && group.placeholder ? (
                  <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Growing
                  </span>
                ) : null}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          )
        })}
      </div>
    </SectionShell>
  )
}
