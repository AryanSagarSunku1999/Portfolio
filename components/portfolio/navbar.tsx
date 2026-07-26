'use client'

import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, profile } from '@/lib/portfolio-data'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        aria-label="Primary"
        className={cn(
          'flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-300 sm:px-4',
          scrolled
            ? 'border-border/70 bg-background/70 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <a href="#home" className="group flex items-center gap-2.5 pl-1">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-foreground">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden />
            Resume
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-foreground/80 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="fixed inset-x-4 top-20 z-50 rounded-3xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
