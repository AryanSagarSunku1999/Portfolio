import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type SectionShellProps = {
  id?: string
  children: ReactNode
  className?: string
  innerClassName?: string
}

export function SectionShell({
  id,
  children,
  className,
  innerClassName,
}: SectionShellProps) {
  return (
    <section id={id} className={cn('relative border-t border-border/60 py-24 sm:py-32', className)}>
      <div className={cn('mx-auto max-w-6xl px-5 sm:px-6 lg:px-8', innerClassName)}>{children}</div>
    </section>
  )
}
