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

      <div
        className="scrollbar-thin mx-auto flex max-w-5xl snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible"
        aria-label="Vídeos de Julia Coronetti"
      >
        {videoItems.map((video) => (
          <VideoCard key={video.youtubeId} youtubeId={video.youtubeId} label={video.label} />
        ))}
      </div>
    </section>
  )
}
