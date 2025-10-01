// Global type definitions for the Figma MCP Cursor AI project

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectConfig {
  name: string;
  description: string;
  version: string;
  technologies: string[];
}

// Figma MCP related types
export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
}

export interface FigmaComponent {
  id: string;
  name: string;
  description?: string;
  code?: string;
  variables?: Record<string, string>;
}

// Component prop types
export interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}
