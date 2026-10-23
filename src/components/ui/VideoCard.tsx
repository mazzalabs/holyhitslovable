import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { youtubeThumbnail, youtubeUrl, youtubeEmbedUrl } from '@/lib/utils'

interface VideoCardProps {
  youtubeId: string
  label: string
}

/**
 * Video card with in-frame playback.
 *
 * Idle state  – shows the YouTube thumbnail with a gold play-button overlay.
 * Active state – replaces the thumbnail with a <iframe> embed in the exact same
 *               card shell, so playback happens inline without any navigation or
 *               modal. An ✕ button lets the user close the player and return to
 *               the thumbnail.
 *
 * Uses youtube-nocookie.com to avoid third-party cookies until the user
 * explicitly clicks play.
 *
 * Fallback: the thumbnail is wrapped in an <a> so that if JS is disabled
 * (or the iframe fails) the card still navigates to YouTube.
 */
export function VideoCard({ youtubeId, label }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className={[
        'group gold-frame aspect-[9/16] w-[70vw] shrink-0 snap-center overflow-hidden rounded-2xl md:w-auto',
        'transition-transform duration-500',
        playing ? '' : 'hover:scale-[1.02]',
      ].join(' ')}
    >
      {playing ? (
        /* ── Active: inline iframe player ─────────────────────────────── */
        <div className="relative h-full w-full bg-black">
          <iframe
            src={youtubeEmbedUrl(youtubeId)}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
          {/* Close button — returns to thumbnail */}
          <button
            type="button"
            onClick={() => setPlaying(false)}
            aria-label="Fechar player"
            className="btn-gold absolute right-2 top-2 z-10 h-9 w-9 !p-0 text-xs"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      ) : (
        /* ── Idle: thumbnail + play overlay ───────────────────────────── */
        <a
          href={youtubeUrl(youtubeId)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Reproduzir: ${label}`}
          className="relative block h-full w-full"
          onClick={(e) => {
            // Intercept the click: play inline instead of navigating away
            e.preventDefault()
            setPlaying(true)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setPlaying(true)
            }
          }}
        >
          {/* Thumbnail */}
          <img
            src={youtubeThumbnail(youtubeId)}
            alt={`Miniatura: ${label}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Dark tint */}
          <span
            className="absolute inset-0 bg-[var(--color-background)]/30"
            aria-hidden="true"
          />
          {/* Play button */}
          <span
            className="btn-gold absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 !p-0"
            aria-hidden="true"
          >
            <Play className="h-6 w-6 fill-current" aria-hidden="true" />
          </span>
        </a>
      )}
    </div>
  )
}
