
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm test         # Run all Jest tests
```

## Testing

Tests use Jest with `@testing-library/react` and `@testing-library/jest-dom`. Test files live next to their source files with a `.test.ts` / `.test.tsx` extension.

```bash
npm test                                        # Run all tests
npx jest --testPathPatterns=<filename>          # Run a single test file
```

Note: use `npx jest --testPathPatterns` (not `npm test -- --testPathPattern`) — the `testPathPattern` option was removed in the version of Jest used here.

**Conventions:**
- `describe` block per component/export, individual `it` blocks per behavior
- Use `@testing-library/react` (`render` + `screen`) for React components; plain Jest for non-component files
- Prefer `getByRole`, `getByText`, `getByLabelText` over `getByTestId`
- Use real data from `@/lib/data` rather than mocking where possible

## Architecture

This is a multi-page portfolio site using Next.js 16 App Router. All sections render server-side from a single data file.

**Pages:**
- `src/app/page.tsx` — Main portfolio page (hero, experience, projects, activities, contact)
- `src/app/travel/page.tsx` — Travel page

**Data flow:** `src/lib/data.ts` → section components → page files

All portfolio content (profile info, experiences, projects, activities, travel) lives exclusively in `src/lib/data.ts`. To update content, edit only that file.

**Theming:** CSS custom properties in `src/app/globals.css` define the color palette. Dark mode is automatic via `prefers-color-scheme`. Tailwind v4 consumes these via `@theme inline` — use semantic color names (`bg-background`, `text-muted`, `text-accent`, `border-border`, `bg-card`) rather than Tailwind's default palette.

**Navbar:** Uses `"use client"` for mobile menu toggle; all other components are server components.

**Profile image:** Never add a border or outline to the profile picture in `Hero.tsx`. The image should always render without any border, ring, or outline style.

**Boxes/borders:** Keep boxes to a maximum of one level — card containers are fine, but nested boxes are not. Skill tags, tech tags, category labels, and similar inline items must be plain text (e.g. joined with `·`), never wrapped in bordered or background-filled boxes.
