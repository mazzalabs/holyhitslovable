import { Instagram, Youtube, Music2 } from 'lucide-react'
import { brand } from '@/config/brand'
import { footerContent } from '@/config/site-content'
import { copyrightYear } from '@/lib/utils'

/**
 * Page footer with social media icon buttons and copyright.
 *
 * Social icons: Instagram, YouTube, Spotify (represented by Music2 icon).
 * To change social links edit src/config/brand.ts.
 */
export function Footer() {
  const year = copyrightYear()

  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-16 text-center">
      <p className="font-display text-xl font-bold uppercase tracking-widest text-gold-gradient">
        {footerContent.socialHeading}
      </p>

      <nav
        className="mt-8 flex justify-center gap-6"
        aria-label="Redes sociais de Julia Coronetti"
      >
        <a
          href={brand.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de Julia Coronetti"
          className="btn-gold h-16 w-16 !p-0"
        >
          <Instagram className="h-7 w-7" aria-hidden="true" />
        </a>

        <a
          href={brand.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube de Julia Coronetti"
          className="btn-gold h-16 w-16 !p-0"
        >
          <Youtube className="h-7 w-7" aria-hidden="true" />
        </a>

        <a
          href={brand.social.spotify}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spotify de Julia Coronetti"
          className="btn-gold h-16 w-16 !p-0"
        >
          {/* Lucide does not have a Spotify icon; Music2 is used as a stand-in.
              INFERRED: the original used Music2 as well. */}
          <Music2 className="h-7 w-7" aria-hidden="true" />
        </a>
      </nav>

      <p className="mt-10 text-xs font-light text-[var(--color-muted-foreground)]">
        © {year} {brand.name}
      </p>
    </footer>
  )
}
