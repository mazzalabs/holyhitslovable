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
    title: 'Holy Hits — Shows Pop Rock 80 e 90 | Contrate seu Show',
    description:
      'Shows da banda Holy Hits com os maiores clássicos do Pop Rock 80 e 90: formatos acústico, banda completa e grandes eventos. Conheça os planos e contrate pelo WhatsApp.',
    ogTitle: 'Holy Hits — Shows Pop Rock 80 e 90 | Formatos e Contratação',
    ogDescription:
      'Shows da banda Holy Hits com os maiores clássicos do Pop Rock 80 e 90: formatos acústico, banda completa e grandes eventos. Conheça os planos e contrate pelo WhatsApp.',
    // Replace with an absolute URL to your own OG image (1200×630 px recommended)
    ogImage: 'https://holy-hits-band.lovable.app/favicon.png',
    author: 'Holy Hits',
    locale: 'pt_BR',
  },

  /** Footer copyright year – set to 'auto' to use the current year */
  copyrightYear: 'auto' as const,
} as const

export type Brand = typeof brand
