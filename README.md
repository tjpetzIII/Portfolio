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
npm test         # Run Jest tests
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
```

## ✏️ Updating Content

All portfolio content (profile info, experiences, projects, activities, travel locations) lives in **`src/lib/data.ts`**. Edit that file to update anything on the site.

## 🎨 Theming

Color palette is defined via CSS custom properties in `globals.css`. Dark mode is automatic via `prefers-color-scheme`. Use semantic Tailwind class names like `bg-background`, `text-muted`, `text-accent`, `border-border`, and `bg-card`.

## 🧪 Testing

Tests use Jest + `@testing-library/react`. Test files live next to their source files (`.test.tsx`).

```bash
npm test                                    # Run all tests
npx jest --testPathPatterns=<filename>      # Run a single test file
```
