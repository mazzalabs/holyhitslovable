import { Play } from 'lucide-react'
import { brand } from '@/config/brand'
import { heroContent } from '@/config/site-content'
import { heroCTAs } from '@/config/navigation'

/**
 * Hero section – full-viewport height with:
 * - Background photo with two overlay layers (semi-transparent + gradient)
 * - Gold-gradient logo (CSS mask technique)
 * - Tagline in spaced uppercase
 * - Two CTA buttons (primary gold + secondary outline)
 *
 * The "animate-rise" class drives the entrance animation defined in globals.css.
 */
export function HeroSection() {
  return (
    <section
      className="relative flex h-[100svh] min-h-[560px] items-center justify-center"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <img
        src={heroContent.backgroundImage}
        alt={heroContent.backgroundAlt}
        className="absolute inset-0 h-full w-full object-cover object-[30%_center]"
        // Not loading="lazy" – it's the LCP image
        fetchPriority="high"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[var(--color-background)]/60" aria-hidden="true" />

      {/* Gradient fade top & bottom */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-[var(--color-background)]/40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="animate-rise relative z-10 flex w-full flex-col items-center px-6 text-center">
        {/* Accessible heading (visually hidden – logo image acts as visual h1) */}
        <h1 id="hero-heading" className="sr-only">
          {brand.name}
        </h1>

        {/* Logo with gold gradient via CSS mask */}
        <div className="drop-shadow-[0_0_18px_var(--color-gold)]">
          <div
            role="img"
            aria-label={heroContent.logoAlt}
            className="logo-gold"
            style={{
              aspectRatio: heroContent.logoAspectRatio,
              width: 'min(88vw, 760px)',
              maskImage: `url(${heroContent.logoImage})`,
              WebkitMaskImage: `url(${heroContent.logoImage})`,
            }}
          />
        </div>

        {/* Tagline */}
        <p className="mt-6 text-sm font-extralight uppercase tracking-[0.6em] text-[var(--color-gold-soft)] md:text-lg">
          {brand.tagline}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href={heroCTAs.primary.href} className="btn-gold">
            {heroCTAs.primary.label}
          </a>
          <a href={heroCTAs.secondary.href} className="btn-outline-gold">
            <Play className="h-4 w-4" aria-hidden="true" />
            {heroCTAs.secondary.label}
          </a>
        </div>
      </div>
    </section>
  )
}
