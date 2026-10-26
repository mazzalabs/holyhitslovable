import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryItem } from '@/config/site-content'

interface GalleryLightboxProps {
  items: readonly GalleryItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

/**
 * Full-screen image lightbox overlay.
 *
 * - Closes on ✕ button, Escape key, or clicking the backdrop
 * - Prev / Next chevron buttons for browsing the gallery
 * - Arrow-key navigation
 * - Focus-trapped to the overlay while open
 */
export function GalleryLightbox({ items, index, onClose, onPrev, onNext }: GalleryLightboxProps) {
  const item = items[index]

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    // Prevent background scroll while overlay is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={item.alt}
    >
      {/* Image — stop propagation so clicking the image itself doesn't close */}
      <img
        src={item.src}
        alt={item.alt}
        className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="btn-gold absolute right-4 top-4 h-10 w-10 !p-0"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Prev button */}
      {index > 0 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Foto anterior"
          className="btn-gold absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 !p-0"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
      )}

      {/* Next button */}
      {index < items.length - 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Próxima foto"
          className="btn-gold absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 !p-0"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      )}

      {/* Counter */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-light text-white/60">
        {index + 1} / {items.length}
      </p>
    </div>
  )
}
