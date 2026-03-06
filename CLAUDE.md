# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a single-page portfolio site using Next.js 16 App Router. All sections render server-side from a single data file.

**Data flow:** `src/lib/data.ts` → section components → `src/app/page.tsx`

All portfolio content (profile info, experiences, projects, activities) lives exclusively in `src/lib/data.ts`. To update content, edit only that file.

**Theming:** CSS custom properties in `src/app/globals.css` define the color palette. Dark mode is automatic via `prefers-color-scheme`. Tailwind v4 consumes these via `@theme inline` — use semantic color names (`bg-background`, `text-muted`, `text-accent`, `border-border`, `bg-card`) rather than Tailwind's default palette.

**Navbar:** Uses `"use client"` for mobile menu toggle; all other components are server components.
