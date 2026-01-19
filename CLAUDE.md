# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a **single-page Next.js 16 app** (App Router) that serves as the v0 Enterprise Adoption Playbook—a 90-day framework for driving enterprise v0 adoption.

### Key Structure

- **`src/app/page.tsx`** — The entire site is one page with collapsible sections. All content sections are composed here.
- **`src/content/playbook-data.ts`** — Central content store with TypeScript types. All text, email templates, scenarios, and timeline data live here. Components import from this file.
- **`src/app/globals.css`** — Vercel-style design system using CSS custom properties. Light theme only (no dark mode). Uses Tailwind CSS v4.

### Component Patterns

Components in `src/components/` follow these patterns:
- **Scroll animations** — Use `useScrollAnimation` hook from `src/hooks/` for fade-in effects
- **Mobile responsiveness** — Tables have dual views: `hidden md:block` for desktop table, `md:hidden` for mobile card layout
- **Styling** — Use `cn()` utility for conditional Tailwind classes, CSS variables for colors (e.g., `var(--accent-cyan)`)

### Design System

- **Fonts**: Space Grotesk (display), DM Sans (body), JetBrains Mono (code)
- **Colors**: Pure white background, black text, Vercel blue (#0070F3) accent
- **Components**: Radix UI primitives (Accordion) wrapped in `src/components/ui/`

### Content Types (from playbook-data.ts)

- `ABCCard` — The A/B/C framework cards
- `TimelineAction` — Weekly action items with outcomes
- `EmailTemplate` — Copy-ready emails with from/to audience tags
- `TalkingPoint` — Conversation scripts
- `Scenario` — Problem/solution pairs
- `PushbackItem` — Objection/response pairs
