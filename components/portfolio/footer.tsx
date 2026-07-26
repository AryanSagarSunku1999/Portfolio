import { Heart, Mail } from 'lucide-react'
import { navLinks, profile } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from './brand-icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-foreground">
                {profile.initials}
              </span>
              <span className="text-sm font-medium">{profile.name}</span>
            </a>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Building reliable, thoughtful software from industrial systems through modern web products.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={profile.github} aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent">
              <GithubIcon className="h-4 w-4" />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent">
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 fill-accent text-accent" /> by Aryan
          </p>
        </div>
      </div>
    </footer>
  )
}
