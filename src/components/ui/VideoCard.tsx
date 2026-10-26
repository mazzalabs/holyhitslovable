import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { youtubeThumbnail, youtubeUrl, youtubeEmbedUrl, instagramEmbedUrl } from '@/lib/utils'
import type { VideoItem } from '@/config/site-content'

/**
 * Video card with in-frame playback.
 *
 * Supports three source types (discriminated by `item.type`):
 *
 * **youtube** – shows the YouTube thumbnail with a gold play-button overlay.
 *   Clicking plays inline via a youtube-nocookie iframe to avoid third-party
 *   cookies until the user explicitly clicks play. An ✕ button closes the player.
 *
 * **instagram** – shows the Instagram post / reel embed directly inside the card
 *   via an Instagram /embed/ iframe. A fallback <a> opens the post in a new tab.
 *
 * **local** – serves a video file from /public. Idle state shows the first frame
 *   (or an optional poster image) with the gold play overlay. Active state plays
 *   the video inline with native controls and an ✕ close button.
 */
interface VideoCardProps {
  item: VideoItem
}

export function VideoCard({ item }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)

  /* ── Instagram ─────────────────────────────────────────────────────────── */
  if (item.type === 'instagram') {
    return (
      <div
        className={[
          'group gold-frame aspect-[9/16] w-[70vw] shrink-0 snap-center overflow-hidden rounded-2xl md:w-auto',
          'transition-transform duration-500 hover:scale-[1.02]',
        ].join(' ')}
      >
        <a
          href={item.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver no Instagram: ${item.label}`}
          className="relative block h-full w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={instagramEmbedUrl(item.instagramUrl)}
            title={item.label}
            allowFullScreen
            scrolling="no"
            className="pointer-events-none h-full w-full border-0"
          />
          {/* Invisible overlay so the whole card acts as a tap-to-open link */}
          <span className="absolute inset-0" aria-hidden="true" />
        </a>
      </div>
    )
  }

  /* ── Local video ───────────────────────────────────────────────────────── */
  if (item.type === 'local') {
    return (
      <div
        className={[
          'group gold-frame aspect-[9/16] w-[70vw] shrink-0 snap-center overflow-hidden rounded-2xl md:w-auto',
          'transition-transform duration-500',
          playing ? '' : 'hover:scale-[1.02]',
        ].join(' ')}
      >
        {playing ? (
          /* ── Active: native video player ──────────────────────────────── */
          <div className="relative h-full w-full bg-black">
            <video
              src={item.src}
              poster={item.poster}
              controls
              autoPlay
              playsInline
              className="h-full w-full object-cover"
            />
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
          /* ── Idle: first-frame preview + play overlay ─────────────────── */
          <button
            type="button"
            aria-label={`Reproduzir: ${item.label}`}
            className="relative block h-full w-full"
            onClick={() => setPlaying(true)}
          >
            <video
              src={item.src}
              poster={item.poster}
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
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
          </button>
        )}
      </div>
    )
  }

  /* ── YouTube ───────────────────────────────────────────────────────────── */
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
            src={youtubeEmbedUrl(item.youtubeId)}
            title={item.label}
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
          href={youtubeUrl(item.youtubeId)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Reproduzir: ${item.label}`}
          className="relative block h-full w-full"
          onClick={(e) => {
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
            src={youtubeThumbnail(item.youtubeId)}
            alt={`Miniatura: ${item.label}`}
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
