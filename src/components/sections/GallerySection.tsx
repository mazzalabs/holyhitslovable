import { SectionHeading } from '@/components/ui/SectionHeading'
import { galleryItems } from '@/config/site-content'

/**
 * Gallery section – horizontal snap-scroll row of portrait photos.
 *
 * Layout:
 * - Mobile / tablet: horizontal scroll, cards ~62 vw wide
 * - Desktop (md+): 6-column grid, min 200 px each
 *
 * Each card has a gold-frame border, rounded corners, and a hover scale
 * effect on the inner image.
 *
 * Clicking a card could open a lightbox (INFERRED – not observed in original).
 * For now clicking does nothing; a future enhancement would open a modal.
 */
export function GallerySection() {
  return (
    <section id="galeria" className="py-20 md:py-28" aria-labelledby="gallery-heading">
      <SectionHeading
        eyebrow="Galeria"
        heading="No palco e fora dele"
      />
      <div
        className="scrollbar-thin flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 md:px-12"
        role="list"
        aria-label="Galeria de fotos de Julia Coronetti"
      >
        {galleryItems.map((item, index) => (
          <button
            key={index}
            type="button"
            role="listitem"
            className="group gold-frame aspect-[9/16] w-[62vw] shrink-0 snap-center overflow-hidden rounded-xl sm:w-[38vw] md:w-[calc((100%-5rem)/6)] md:min-w-[200px]"
            aria-label={`Ver foto: ${item.alt}`}
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
    </section>
  )
}
