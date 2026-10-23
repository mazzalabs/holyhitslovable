
interface SectionHeadingProps {
  /** Small label shown above the main heading in spaced uppercase */
  eyebrow?: string
  /** Main heading text – rendered with animated gold gradient */
  heading: string
  /** Optional additional className */
  className?: string
}

/**
 * Reusable section heading pattern:
 * eyebrow (muted, tracked) → h2 (gold gradient) → thin gold divider line.
 */
export function SectionHeading({ eyebrow, heading, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-10 text-center md:mb-14 ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-light uppercase tracking-[0.5em] text-[var(--color-muted-foreground)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-bold uppercase tracking-widest text-gold-gradient md:text-4xl">
        {heading}
      </h2>
      <div className="section-divider" aria-hidden="true" />
    </div>
  )
}
