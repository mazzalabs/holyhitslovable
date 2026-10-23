import { SectionHeading } from '@/components/ui/SectionHeading'
import { PlanCard } from '@/components/ui/PlanCard'
import { showPlans } from '@/config/site-content'

/**
 * Pricing / Plans section – 3-column card grid.
 *
 * Layout:
 * - Mobile: single column, full width
 * - Tablet: still single column (cards are wide)
 * - Desktop (lg+): 3-column grid; featured card has negative top margin to
 *   appear taller than its siblings
 *
 * All content and prices are editable in src/config/site-content.ts.
 */
export function PlansSection() {
  return (
    <section id="planos" className="px-6 py-20 md:py-28" aria-labelledby="plans-heading">
      <SectionHeading eyebrow="Contrate" heading="Planos de show" />

      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-3">
        {showPlans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  )
}
