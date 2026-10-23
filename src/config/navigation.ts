/**
 * Navigation configuration
 * ─────────────────────────────────────────────────────────────────────────────
 * Each item is a smooth-scroll anchor (href starts with #).
 * Add, remove, or reorder items here to change the nav links.
 * The header navigation is hidden on this single-page layout but the
 * in-hero CTAs still use these anchors.
 */

export interface NavItem {
  label: string
  href: string
}

export const navigation: NavItem[] = [
  { label: 'Galeria',      href: '#galeria' },
  { label: 'Depoimentos',  href: '#depoimentos' },
  { label: 'Sobre',        href: '#sobre' },
  { label: 'Vídeos',       href: '#videos' },
  { label: 'Planos',       href: '#planos' },
]

/**
 * Hero CTA buttons
 * Modify labels and targets here.
 */
export const heroCTAs = {
  primary: {
    label: 'VER PLANOS DE SHOW',
    href: '#planos',
  },
  secondary: {
    label: 'ASSISTIR',
    href: '#videos',
  },
} as const
