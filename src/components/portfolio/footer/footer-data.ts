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
  email: 'hello@alexchen.dev',
  phone: '+1 (415) 555-1234',
  location: 'San Francisco, CA',
}
