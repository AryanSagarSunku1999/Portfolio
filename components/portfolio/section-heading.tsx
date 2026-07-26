import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent/60" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
