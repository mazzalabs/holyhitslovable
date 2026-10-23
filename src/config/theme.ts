/**
 * Theme configuration
 * ─────────────────────────────────────────────────────────────────────────────
 * This file documents the design tokens that are defined as CSS custom
 * properties in src/styles/globals.css. Update that file to change the
 * actual rendered values.
 *
 * This TypeScript object is the single source of truth for naming; it is
 * imported by components that need to reference token names programmatically.
 */

export const theme = {
  fonts: {
    display: "'Orbitron', sans-serif",
    body: "'Outfit', system-ui, sans-serif",
  },

  /**
   * CSS variable names for colours.
   * Actual values live in src/styles/globals.css :root block.
   */
  colors: {
    background:       'var(--color-background)',
    foreground:       'var(--color-foreground)',
    card:             'var(--color-card)',
    cardForeground:   'var(--color-card-foreground)',
    primary:          'var(--color-primary)',
    primaryForeground:'var(--color-primary-foreground)',
    secondary:        'var(--color-secondary)',
    muted:            'var(--color-muted)',
    mutedForeground:  'var(--color-muted-foreground)',
    border:           'var(--color-border)',
    gold:             'var(--color-gold)',
    goldSoft:         'var(--color-gold-soft)',
    chat:             'var(--color-chat)',
  },

  gradients: {
    gold:   'var(--gradient-gold)',
    silver: 'var(--gradient-silver)',
  },

  shadows: {
    glow: 'var(--shadow-glow)',
  },

  radii: {
    default: 'var(--radius)',
    full: '9999px',
  },

  /**
   * Animation durations (ms) – used with prefers-reduced-motion checks in JS.
   */
  motion: {
    shine: 6000,
    rise: 1100,
    hover: 300,
  },
} as const

export type Theme = typeof theme
