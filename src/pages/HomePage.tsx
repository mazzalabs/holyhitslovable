import { HeroSection } from '@/components/sections/HeroSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { VideosSection } from '@/components/sections/VideosSection'
import { PlansSection } from '@/components/sections/PlansSection'
import { Footer } from '@/components/layout/Footer'

/**
 * Home page – assembles all sections in order.
 *
 * Section order (matches original):
 *   1. Hero
 *   2. Gallery
 *   3. Testimonials
 *   4. About / Release
 *   5. Videos
 *   6. Plans
 *   7. Footer
 *
 * To reorder sections, simply move the JSX elements below.
 * To hide a section, remove or comment it out.
 */
export function HomePage() {
  return (
    <main className="overflow-x-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">
      <HeroSection />
      <GallerySection />
      <TestimonialsSection />
      <AboutSection />
      <VideosSection />
      <PlansSection />
      <Footer />
    </main>
  )
}
