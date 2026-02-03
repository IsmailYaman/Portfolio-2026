import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main'
}

/**
 * Reusable container component for consistent max-width and padding across sections.
 * Provides the standard portfolio layout constraints.
 */
export function Container({
  children,
  className,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={cn('mx-auto max-w-7xl px-6 md:px-12 lg:px-20', className)}
    >
      {children}
    </Component>
  )
}
