import { SectionHeading } from '@/components/ui/SectionHeading'
import { VideoCard } from '@/components/ui/VideoCard'
import { videoItems } from '@/config/site-content'

/**
 * Videos section – horizontal snap-scroll on mobile, 3-column grid on desktop.
 *
 * Layout:
 * - Mobile / tablet: horizontal scroll, cards ~70 vw wide
 * - Desktop (md+): 3-column static grid
 *
 * Each card opens the YouTube video in a new tab on click.
 * INFERRED: future enhancement could play inline via <iframe>.
 */
export function VideosSection() {
  return (
    <section id="videos" className="py-20 md:py-28" aria-labelledby="videos-heading">
      <SectionHeading eyebrow="Vídeos" heading="Assista ao show" />

      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div
          className="scrollbar-thin flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 md:grid md:grid-cols-4 md:overflow-visible"
          aria-label="Vídeos de Holy Hits"
        >
          {videoItems.map((video, i) => (
            <VideoCard key={i} item={video} />
          ))}
        </div>
      </div>
    </section>
  )
}
