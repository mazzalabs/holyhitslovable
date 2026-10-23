import { Play } from 'lucide-react'
import { whatsappUrl } from '@/lib/utils'
import { brand } from '@/config/brand'
import type { ShowPlan } from '@/config/site-content'

interface PlanCardProps {
  plan: ShowPlan
}

/**
 * A single show-plan card.
 *
 * Featured plans (plan.featured === true) receive:
 *   - "★ MAIS ESCOLHIDO" badge chip above the card
 *   - a gold ring border
 *   - negative top margin on desktop to appear taller
 */
export function PlanCard({ plan }: PlanCardProps) {
  const waUrl = whatsappUrl(brand.whatsapp, plan.whatsappMessage)

  return (
    <article
      className={[
        'gold-frame relative flex flex-col rounded-2xl p-7 transition-transform duration-500 hover:scale-[1.02]',
        plan.featured ? 'lg:-mt-4 ring-1 ring-[var(--color-primary)]' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* "Most chosen" badge */}
      {plan.featured && plan.badge && (
        <span className="btn-gold absolute -top-4 left-1/2 -translate-x-1/2 !px-5 !py-2 !text-[10px] whitespace-nowrap">
          {plan.badge}
        </span>
      )}

      {/* Plan label & title */}
      <p className="font-display text-xs tracking-[0.4em] text-[var(--color-muted-foreground)]">
        {plan.label}
      </p>
      <h3 className="text-gold-gradient mt-1 font-display text-2xl font-bold uppercase">
        {plan.title}
      </h3>

      {/* Recommended for */}
      <p className="mt-4 text-xs uppercase tracking-wider text-[var(--color-gold-soft)]">
        Recomendado para
      </p>
      <p className="text-sm font-light">{plan.recommended}</p>

      <div className="my-6 h-px bg-[var(--color-border)]" aria-hidden="true" />

      {/* Feature groups */}
      {plan.featureGroups.map((group) => (
        <div key={group.label} className="mt-5 first:mt-0">
          <p className="text-xs uppercase tracking-wider text-[var(--color-gold-soft)]">
            {group.label}
          </p>
          <ul className="mt-2 space-y-1.5" aria-label={group.label}>
            {group.items.map((item) => (
              <li key={item} className="flex gap-2 text-sm font-light">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Duration */}
      <div className="mt-5">
        <p className="text-xs uppercase tracking-wider text-[var(--color-gold-soft)]">
          Tempo de show
        </p>
        <p className="text-sm font-light">{plan.duration}</p>
      </div>

      {/* Sound */}
      <div className="mt-5">
        <p className="text-xs uppercase tracking-wider text-[var(--color-gold-soft)]">Som</p>
        <p className="text-sm font-light text-[var(--color-muted-foreground)]">{plan.soundInfo}</p>
      </div>

      {/* Preview video link */}
      <a
        href={plan.previewVideoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline-gold mt-6"
      >
        <Play className="h-4 w-4" aria-hidden="true" />
        VEJA AQUI O VÍDEO DESSE FORMATO
      </a>

      {/* Price */}
      <div className="mt-8 text-center">
        <p className="text-gold-gradient font-display text-4xl font-black">{plan.price}</p>
        {plan.priceNote && (
          <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">{plan.priceNote}</p>
        )}
      </div>

      {/* Disclaimers */}
      {plan.disclaimers.length > 0 && (
        <div className="mt-5 space-y-2 text-[11px] font-light leading-relaxed text-[var(--color-muted-foreground)]">
          {plan.disclaimers.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
      )}

      {/* CTA */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold mt-7 w-full"
      >
        QUERO ESSE PLANO
      </a>
    </article>
  )
}
