import { Play } from 'lucide-react'

type Variant = 'gold' | 'outline'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  /** When true, renders a <button> element instead of an <a> */
  as?: 'button'
  fullWidth?: boolean
  children: React.ReactNode
}

/**
 * Branded CTA button.
 *
 * Usage:
 *   <Button href="#planos">VER PLANOS</Button>
 *   <Button variant="outline" href="#videos"><Play … /> ASSISTIR</Button>
 *   <Button as="button" onClick={…}>OK</Button>
 */
export function Button({
  variant = 'gold',
  as: asProp,
  fullWidth,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base = variant === 'gold' ? 'btn-gold' : 'btn-outline-gold'
  const width = fullWidth ? 'w-full' : ''
  const cls = [base, width, className].filter(Boolean).join(' ')

  if (asProp === 'button') {
    const { href: _href, ...buttonProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <button
        type="button"
        className={cls}
        {...(buttonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    )
  }

  return (
    <a className={cls} {...props}>
      {children}
    </a>
  )
}

/**
 * Convenience wrapper that adds the Play icon before children.
 */
export function PlayButton(props: Omit<ButtonProps, 'variant'> & { variant?: Variant }) {
  return (
    <Button variant="outline" {...props}>
      <Play className="h-4 w-4" aria-hidden="true" />
      {props.children}
    </Button>
  )
}
