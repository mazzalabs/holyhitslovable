import { brand } from '@/config/brand'

/**
 * Returns the copyright year string.
 * If brand.copyrightYear is 'auto' returns the current calendar year.
 */
export function copyrightYear(): number {
  if (brand.copyrightYear === 'auto') {
    return new Date().getFullYear()
  }
  return brand.copyrightYear as unknown as number
}

/**
 * Builds a WhatsApp deep-link URL for a pre-filled message.
 */
export function whatsappUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

/**
 * Returns the YouTube thumbnail URL for a given video ID.
 * Uses hqdefault (480×360) which is always available.
 */
export function youtubeThumbnail(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}

/**
 * Builds the YouTube watch URL for opening in a new tab (fallback).
 */
export function youtubeUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`
}

/**
 * Builds the YouTube nocookie embed URL.
 * autoplay=1 starts playback immediately when the iframe is inserted.
 * Works for both regular videos and Shorts IDs.
 */
export function youtubeEmbedUrl(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
}

/**
 * Builds the Instagram embed URL for a post or reel.
 * Uses /embed/ (not /embed/captioned/) so only the media player is rendered —
 * no caption, no like count, no comments.
 */
export function instagramEmbedUrl(postUrl: string): string {
  // Normalise: strip trailing slash, then append embed path
  const base = postUrl.replace(/\/$/, '')
  return `${base}/embed/`
}

/**
 * Renders a paragraph string that may contain a <highlight>…</highlight>
 * pseudo-tag into a React-renderable array of strings / JSX.
 *
 * This avoids dangerouslySetInnerHTML while still supporting a single
 * highlighted span per paragraph.
 */
export function parseHighlight(text: string): Array<string | { highlight: string }> {
  const parts = text.split(/(<highlight>.*?<\/highlight>)/g)
  return parts.map((part) => {
    const m = part.match(/^<highlight>(.*?)<\/highlight>$/)
    return m ? { highlight: m[1] } : part
  })
}

/**
 * Parses markdown-style links `[label](href)` inside text strings.
 */
export function parseMarkdownLink(text: string): Array<string | { label: string; href: string }> {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (match) {
      return { label: match[1], href: match[2] }
    }
    return part
  })
}
