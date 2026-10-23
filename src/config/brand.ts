/**
 * Brand configuration
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit this file to change the artist name, tagline, contact information,
 * social media links, and SEO metadata.
 */

export const brand = {
  /** Short display name used in the logo / heading */
  name: 'Julia Coronetti',

  /** Sub-headline shown below the logo in the hero */
  tagline: 'Cantora e Acordeonista',

  /** Full WhatsApp number including country + area code, digits only */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  whatsapp: (import.meta as any).env?.VITE_WHATSAPP_NUMBER ?? '5549999041770',

  /** Social media profiles */
  social: {
    instagram: 'https://www.instagram.com/juliacoronettioficial',
    youtube: 'https://youtube.com/@juliacoronettiofc',
    spotify: 'https://open.spotify.com/artist/4yeCYCxs1ZRYZP3krGncw2',
  },

  /** SEO / <head> metadata */
  seo: {
    title: 'Julia Coronetti — Cantora e Acordeonista | Contrate seu show',
    description:
      'Shows de Julia Coronetti, cantora e acordeonista: acústico, com banda ou grandes eventos. Veja os planos e contrate pelo WhatsApp.',
    ogTitle: 'Julia Coronetti — Cantora e Acordeonista',
    ogDescription: 'Voz, sanfona e carisma. Conheça os planos de show e contrate.',
    // Replace with an absolute URL to your own OG image (1200×630 px recommended)
    ogImage:
      'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/lovp_3rvb6g71e287f9yemebzvhfs72/ad7142aab7fb68b22ed72ec4141f1cf9_1792609342091.png',
    author: 'Julia Coronetti',
    locale: 'pt_BR',
  },

  /** Footer copyright year – set to 'auto' to use the current year */
  copyrightYear: 'auto' as const,
} as const

export type Brand = typeof brand
