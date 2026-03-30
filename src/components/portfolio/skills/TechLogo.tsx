import type { SimpleIcon } from 'simple-icons'

interface TechLogoProps {
  icon: SimpleIcon
  className?: string
}

export function TechLogo({ icon, className }: TechLogoProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  )
}
