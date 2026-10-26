import { useState, useEffect } from 'react'
import { Play, X } from 'lucide-react'
import { youtubeThumbnail, youtubeUrl, youtubeEmbedUrl, instagramEmbedUrl } from '@/lib/utils'
import type { VideoItem } from '@/config/site-content'

/**
 * Captures the first frame of a local video as a data-URL using an off-screen
 * canvas. Works on all browsers including iOS Safari, which refuses to preload
 * video data automatically (making <video preload="metadata"> show black).
 *
 * Returns null until the frame is ready.
 */
function useVideoThumbnail(src: string, posterOverride?: string): string | null {
  const [thumb, setThumb] = useState<string | null>(posterOverride ?? null)

  useEffect(() => {
    // If a hand-crafted poster was supplied, use it as-is — no extraction needed
    if (posterOverride) { setThumb(posterOverride); return }

    const video = document.createElement('video')
    video.src = src
    video.muted = true
    video.playsInline = true
    video.crossOrigin = 'anonymous'
    // Seek to 0.1 s so we get a real frame, not a blank pre-decode frame
    video.currentTime = 0.1

    const capture = () => {
      const canvas = document.createElement('canvas')
      canvas.width  = video.videoWidth  || 360
      canvas.height = video.videoHeight || 640
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      try {
        setThumb(canvas.toDataURL('image/jpeg', 0.85))
      } catch {
        // CORS or decode error — leave thumb as null (black placeholder shows)
      }
    }

    video.addEventListener('seeked',     capture, { once: true })
    video.addEventListener('loadeddata', capture, { once: true })
    video.load()

    return () => {
      video.removeEventListener('seeked',     capture)
      video.removeEventListener('loadeddata', capture)
      video.src = ''
    }
  }, [src, posterOverride])

  return thumb
}

type LocalItem = Extract<VideoItem, { type: 'local' }>

/**
 * Dedicated sub-component for local video cards.
 * Separated so it can call useVideoThumbnail as a hook at the top level.
 */
function LocalVideoCard({ item }: { item: LocalItem }) {
  const [playing, setPlaying] = useState(false)
  const thumb = useVideoThumbnail(item.src, item.poster)

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
            poster={thumb ?? item.poster}
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
        /* ── Idle: canvas-captured thumbnail + play overlay ───────────── */
        <button
          type="button"
          aria-label={`Reproduzir: ${item.label}`}
          className="relative block h-full w-full bg-black"
          onClick={() => setPlaying(true)}
        >
          {thumb ? (
            <img
              src={thumb}
              alt={`Miniatura: ${item.label}`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            /* Loading state – dark bg while frame is being extracted */
            <span className="block h-full w-full bg-neutral-900" aria-hidden="true" />
          )}
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
    return <LocalVideoCard item={item} />
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
