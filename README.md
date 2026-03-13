# 🧑‍💻 Thomas Petz — Personal Portfolio

A multi-page personal portfolio site built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Features a main portfolio page and a travel page, all server-rendered from a single data file.

## 🚀 Getting Started

```bash
npm install
npm run dev   # http://localhost:3000
```

## 🛠️ Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
npm test         # Run Jest unit tests
npm run test:e2e # Run Playwright e2e tests
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── travel/page.tsx   # Travel page 🗺️
│   └── globals.css       # Theming & CSS custom properties
├── components/           # Hero, Experience, Projects, Activities, Contact, Navbar
└── lib/
    └── data.ts           # ✏️ All site content lives here
e2e/
├── home.spec.ts          # E2E tests for the main portfolio page
└── travel.spec.ts        # E2E tests for the travel page
```

## ✏️ Updating Content

All portfolio content (profile info, experiences, projects, activities, travel locations) lives in **`src/lib/data.ts`**. Edit that file to update anything on the site.

## 🎨 Theming

Color palette is defined via CSS custom properties in `globals.css`. Dark mode is automatic via `prefers-color-scheme`. Use semantic Tailwind class names like `bg-background`, `text-muted`, `text-accent`, `border-border`, and `bg-card`.

## 🧪 Testing

### Unit Tests

Tests use Jest + `@testing-library/react`. Test files live next to their source files (`.test.tsx`).

```bash
npm test                                    # Run all unit tests
npx jest --testPathPatterns=<filename>      # Run a single test file
```

### End-to-End Tests

E2E tests use Playwright (Chromium) and run against the dev server. The dev server must be running before executing them.

```bash
npm run dev      # Start dev server first
npm run test:e2e # Run all e2e tests
```

E2E test files live in `e2e/`:

- `e2e/home.spec.ts` — covers the full main page: navbar, hero, experience, certifications, projects, activities, contact, and section navigation
- `e2e/travel.spec.ts` — covers the travel page: map rendering, location cards, and navbar behavior
