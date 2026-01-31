export interface NavLink {
  name: string
  href: string
  hasDropdown?: boolean
}

export const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects', hasDropdown: true },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]
