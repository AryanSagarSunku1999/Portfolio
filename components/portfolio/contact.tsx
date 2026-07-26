import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { SectionShell } from './section-shell'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.linkedin,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'See my code',
    href: profile.github,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: undefined,
  },
]

export function Contact() {
  return (
    <SectionShell id="contact">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-12 lg:p-16">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
          <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-[100px]" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something worthwhile."
            description="I’m actively looking for internship and full-time software engineering opportunities in Germany. If you’re building ambitious products, I’d love to talk."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {channels.map((c) => {
              const content = (
                <>
                  <c.icon className="h-5 w-5 text-accent" aria-hidden />
                  <div className="mt-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{c.label}</p>
                    <p className="mt-0.5 text-sm font-medium">{c.value}</p>
                  </div>
                  {c.href ? (
                    <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  ) : null}
                </>
              )

              return c.href ? (
                <a key={c.label} href={c.href} className="group relative rounded-2xl border border-border bg-background/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40">
                  {content}
                </a>
              ) : (
                <div key={c.label} className="relative rounded-2xl border border-border bg-background/40 p-5">
                  {content}
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">Prefer email? Reach me directly.</p>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03] active:scale-95">
            <Mail className="h-4 w-4" />
            Say hello
          </a>
        </div>
      </Reveal>
    </SectionShell>
  )
}
