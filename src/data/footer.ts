import { Github, Linkedin, type LucideIcon } from 'lucide-react'

export interface SocialLink {
  name: string
  icon: LucideIcon
  href: string
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/IsmailYaman' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ismail-kayadelen/' },
]

export const quickLinks = ['About', 'Projects', 'Skills', 'Experience']

export const contactInfo: {
  name: string
  email: string
  phone?: string
  location: string
} = {
  name: 'Ismail Kayadelen',
  email: 'hello@ismailkayadelen.com',
  location: 'Rotterdam, The Netherlands',
}
