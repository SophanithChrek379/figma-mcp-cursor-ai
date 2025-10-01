# Figma MCP Cursor AI

A modern Next.js application with Figma MCP integration, built with TypeScript, TailwindCSS, and ShadCN/UI.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **ShadCN/UI** - Beautiful, accessible component library
- **Figma MCP** - Model Context Protocol for Figma integration

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   └── ui/                  # ShadCN/UI components
├── lib/
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # TypeScript type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd figma-mcp-cursor-ai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx shadcn@latest add [component]` - Add ShadCN component

## 🧩 Adding ShadCN/UI Components

To add new ShadCN/UI components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add form
```

## 🎯 Features

- ⚡ **Lightning Fast** - Built with Next.js 15 and App Router
- 🔒 **Type Safe** - Full TypeScript support with strict type checking
- 🎨 **Beautiful UI** - Styled with TailwindCSS and ShadCN/UI
- 📱 **Responsive** - Mobile-first responsive design
- 🌙 **Dark Mode** - Built-in dark mode support
- ♿ **Accessible** - WCAG compliant components
- 🔧 **Developer Experience** - Hot reload, TypeScript, ESLint

## 📝 Cursor AI Rules

This project includes `.cursorrules` file with comprehensive guidelines for:
- TypeScript best practices
- Next.js App Router patterns
- TailwindCSS usage
- ShadCN/UI component guidelines
- Performance optimization
- Accessibility standards

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.