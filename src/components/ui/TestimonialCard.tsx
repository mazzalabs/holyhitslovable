import { Check } from 'lucide-react'
import type { Testimonial } from '@/config/site-content'

interface TestimonialCardProps {
  testimonial: Testimonial
}

/**
 * Chat-bubble style testimonial card mimicking a WhatsApp screenshot.
 * - Coloured header bar with avatar initial + name + event label
 * - Teal chat bubble with message text and double-tick (read receipt) timestamp
 */
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="gold-frame overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.03]">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-[var(--color-border)] bg-[var(--color-secondary)] px-4 py-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] font-display text-sm font-bold text-[var(--color-primary-foreground)]"
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-[var(--color-muted-foreground)]">{testimonial.event}</p>
        </div>
      </div>

      {/* Message bubble */}
      <div className="p-5">
        <div
          className="relative rounded-2xl rounded-tl-none bg-[var(--color-chat)] px-4 py-3 text-sm font-light leading-relaxed"
          // The pointed top-left corner is achieved via rounded-tl-none
        >
          {testimonial.message}

          {/* Timestamp + double tick */}
          <span className="mt-2 flex items-center justify-end gap-1 text-[10px] text-[var(--color-muted-foreground)]">
            {testimonial.time}
            <Check className="h-3 w-3 text-[var(--color-gold)]" aria-hidden="true" />
            <Check className="-ml-2 h-3 w-3 text-[var(--color-gold)]" aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  )
}
