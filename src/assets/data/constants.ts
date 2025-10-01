// Application constants and configuration
export const APP_CONFIG = {
  name: 'Figma MCP Cursor AI',
  description: 'A modern Next.js application with Figma MCP integration',
  version: '1.0.0',
  author: 'Your Name',
  url: 'https://your-domain.com',
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;


export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com', icon: 'github' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
] as const;
