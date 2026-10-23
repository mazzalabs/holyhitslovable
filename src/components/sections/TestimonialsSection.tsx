import { SectionHeading } from '@/components/ui/SectionHeading'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { testimonials } from '@/config/site-content'

/**
 * Testimonials section – 3-column grid of WhatsApp-bubble style cards.
 *
 * Layout:
 * - Mobile: single column
 * - Desktop (md+): 3-column grid
 */
export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="px-6 py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <SectionHeading
        eyebrow="Depoimentos"
        heading="Quem contratou, aprova"
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>
    </section>
  )
}
