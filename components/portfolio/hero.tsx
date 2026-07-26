'use client'

import { ArrowUpRight, Download, MapPin, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_78%)]" />
        <motion.div
          className="absolute left-1/2 top-[-8%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
          animate={{ x: [0, 20, -10, 0], y: [0, -20, 10, 0], scale: [1, 1.04, 0.98, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[6%] top-[28%] h-[320px] w-[320px] rounded-full bg-accent/10 blur-[110px]"
          animate={{ x: [0, -16, 14, 0], y: [0, 18, -10, 0], scale: [1, 1.02, 0.96, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:max-w-5xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3.5 py-1.75 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              Available for Software Engineering Internships in Germany
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-gradient">I build software that</span>
              <span className="block text-gradient">solves real problems.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              I&apos;m {profile.name}, a software engineer with roots in application engineering, industrial IoT, and networking. I now ship full-stack products and AI-enabled systems with an emphasis on reliability, clarity, and impact.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(0,0,0,0.16)] active:scale-[0.98]"
              >
                Explore selected work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-card/60 px-6 py-3 text-sm font-medium backdrop-blur transition-all duration-300 hover:border-accent/50 hover:text-accent"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Full Stack · AI · IoT · Networking
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
