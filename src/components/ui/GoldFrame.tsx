
interface GoldFrameProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

/**
 * Container with a gold gradient border and glow shadow.
 * Uses the CSS class defined in globals.css.
 */
export function GoldFrame({ children, className = '', as: Tag = 'div' }: GoldFrameProps) {
  return (
    <Tag className={`gold-frame ${className}`}>
      {children}
    </Tag>
  )
}
