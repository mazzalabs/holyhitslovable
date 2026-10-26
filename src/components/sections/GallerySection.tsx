import { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GalleryLightbox } from '@/components/ui/GalleryLightbox'
import { galleryItems } from '@/config/site-content'

/**
 * Gallery section – horizontal snap-scroll row of portrait photos.
 *
 * Layout:
 * - Mobile / tablet: horizontal scroll, cards ~62 vw wide
 * - Desktop (md+): 6-column grid, min 200 px each
 *
 * Clicking a card opens a full-screen lightbox overlay with prev/next navigation.
 */
export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const total = galleryItems.length

  return (
    <section id="galeria" className="py-20 md:py-28" aria-labelledby="gallery-heading">
      <SectionHeading
        eyebrow="Galeria"
        heading="No palco e fora dele"
      />
      <div className="mx-auto max-w-6xl">
        <div
          className="scrollbar-thin flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 md:px-12"
          role="list"
          aria-label="Galeria de fotos de Holy Hits"
          style={{ scrollPaddingLeft: '1.5rem' }}
        >
          {galleryItems.map((item, index) => (
            <button
              key={index}
              type="button"
              role="listitem"
              className="group gold-frame aspect-[9/16] w-[62vw] shrink-0 snap-center overflow-hidden rounded-xl sm:w-[38vw] md:w-[calc((100%-5rem)/6)] md:min-w-[200px]"
              aria-label={`Ver foto: ${item.alt}`}
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={galleryItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => Math.max(0, (i ?? 0) - 1))}
          onNext={() => setLightboxIndex((i) => Math.min(total - 1, (i ?? 0) + 1))}
        />
      )}
    </section>
  )
}
