import { Github, Linkedin, Twitter, Dribbble, type LucideIcon } from 'lucide-react'

export interface SocialLink {
  name: string
  icon: LucideIcon
  href: string
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Dribbble', icon: Dribbble, href: '#' },
]

export const quickLinks = ['About', 'Projects', 'Skills', 'Education']

export const contactInfo = {
  email: 'hello@ismailkayadelen.com',
  phone: '+31 6 12 34 56 78',
  location: 'Rotterdam, The Netherlands',
}
