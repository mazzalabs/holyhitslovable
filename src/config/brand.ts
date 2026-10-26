/**
 * Brand configuration
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit this file to change the artist name, tagline, contact information,
 * social media links, and SEO metadata.
 */

export const brand = {
  /** Short display name used in the logo / heading */
  name: 'Holy Hits',

  /** Sub-headline shown below the logo in the hero */
  tagline: 'The Soundtrack of Your Youth',

  /** Full WhatsApp number including country + area code, digits only */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  whatsapp: (import.meta as any).env?.VITE_WHATSAPP_NUMBER ?? '5519996123792',

  /** Social media profiles */
  social: {
    instagram: 'https://www.instagram.com/holyhitsband',
    youtube: 'https://youtube.com/@holyhitsband',
    spotify: 'https://open.spotify.com/artist/4yeCYCxs1ZRYZP3krGncw2',
  },

  /** SEO / <head> metadata */
  seo: {
    title: 'Holy Hits — Cantora e Acordeonista | Contrate seu show',
    description:
      'Shows de Holy Hits, Pop Rock 80 90: acústico, com banda ou grandes eventos. Veja os planos e contrate pelo WhatsApp.',
    ogTitle: 'Holy Hits — Pop Rock 80 90',
    ogDescription: 'Pop, Rock, Anos 80 90. Conheça os planos de show e contrate.',
    // Replace with an absolute URL to your own OG image (1200×630 px recommended)
    ogImage: 'https://holy-hits-band.lovable.app/favicon.png',
    author: 'Holy Hits',
    locale: 'pt_BR',
  },

  /** Footer copyright year – set to 'auto' to use the current year */
  copyrightYear: 'auto' as const,
} as const

export type Brand = typeof brand
