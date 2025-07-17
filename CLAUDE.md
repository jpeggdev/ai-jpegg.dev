# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI-focused tech blog called "CodeAI" built with Next.js 15, React 19, TypeScript, and Tailwind CSS. It features articles about AI development, machine learning, and programming from a developer's perspective.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: React 19
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Typography**: @tailwindcss/typography for article content
- **Animations**: Framer Motion
- **Theme**: Dark mode support with next-themes
- **Package Manager**: pnpm (has pnpm-lock.yaml)

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Project Architecture

### App Router Structure
- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with theme provider, navbar, footer
  - `page.tsx` - Homepage with hero, featured posts, code examples
  - `articles/` - Blog articles with dynamic routing
  - `projects/` - Project showcase pages
  - `about/` - About page

### Component Architecture
- `components/` - Reusable React components
  - `ui/` - shadcn/ui component library (Button, Card, etc.)
  - Feature components: `navbar.tsx`, `footer.tsx`, `featured-post.tsx`
  - Custom components: `code-snippet.tsx`, `newsletter-form.tsx`
- `lib/utils.ts` - Utility functions including `cn()` for className merging
- `hooks/` - Custom React hooks

### Styling System
- Uses CSS variables for theming (light/dark mode)
- Custom Tailwind config with extended color palette
- Typography plugin for article content
- Component variants using class-variance-authority (cva)

### Key Configuration Files
- `next.config.mjs` - ESLint and TypeScript errors ignored during builds, unoptimized images
- `tailwind.config.ts` - Extended theme with custom colors, typography, animations
- `components.json` - shadcn/ui configuration

## Development Guidelines

### Component Patterns
- Use shadcn/ui components as building blocks
- Implement variants with class-variance-authority
- Follow the existing component structure in `components/ui/`
- Use `cn()` utility for conditional className merging

### Styling Conventions
- Use Tailwind utility classes
- Leverage CSS variables for theming
- Use the established color palette (primary, secondary, muted, etc.)
- Follow the typography scale for consistent text sizing

### File Organization
- Place page components in `app/` following App Router conventions
- Create reusable components in `components/`
- Use TypeScript interfaces for prop typing
- Import paths use `@/` alias for project root

### Theme Implementation
- Dark mode is the default theme
- Use `next-themes` ThemeProvider in layout
- Theme toggle component available in navbar
- CSS variables automatically switch between themes

## Testing & Deployment Notes

The Next.js config ignores ESLint and TypeScript errors during builds, suggesting this may be a development/prototype environment. Be aware of potential type safety issues when making changes.