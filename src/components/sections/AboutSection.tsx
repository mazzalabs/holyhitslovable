import { Fragment } from 'react'
import { aboutContent } from '@/config/site-content'
import { GoldFrame } from '@/components/ui/GoldFrame'
import { parseHighlight } from '@/lib/utils'

/**
 * About / Release section – two-column layout.
 *
 * Layout:
 * - Mobile: single column, image on top
 * - Desktop (md+): 2:3 grid, image left / text right
 *
 * Paragraphs support a single <highlight>…</highlight> pseudo-tag which
 * renders as a brighter foreground span (see src/lib/utils.ts).
 */
export function AboutSection() {
  return (
    <section id="sobre" className="px-6 py-20 md:py-28" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[2fr_3fr]">
        {/* Portrait image */}
        <GoldFrame className="overflow-hidden rounded-2xl">
          <img
            src={aboutContent.image}
            alt={aboutContent.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </GoldFrame>

        {/* Text content */}
        <div>
          <p className="mb-3 text-xs font-light uppercase tracking-[0.5em] text-[var(--color-muted-foreground)]">
            {aboutContent.sectionLabel}
          </p>

          <h2
            id="about-heading"
            className="text-gold-gradient font-display text-3xl font-black uppercase tracking-wider md:text-5xl"
          >
            {aboutContent.name}
          </h2>

          <p className="mt-2 font-display text-sm uppercase tracking-[0.3em] text-[var(--color-gold-soft)]">
            {aboutContent.subtitle}
          </p>

          <div className="mt-8 space-y-5 font-light leading-relaxed text-[var(--color-muted-foreground)]">
            {aboutContent.paragraphs.map((para, i) => {
              const parts = parseHighlight(para)
              return (
                <p key={i}>
                  {parts.map((part, j) => {
                    if (typeof part === 'string') {
                      return <Fragment key={j}>{part}</Fragment>
                    }
                    return (
                      <span key={j} className="text-[var(--color-foreground)]">
                        {part.highlight}
                      </span>
                    )
                  })}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
