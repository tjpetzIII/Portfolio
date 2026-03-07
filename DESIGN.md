# Design System — Redwood & Moss

## Concept

**"Redwood & Moss"** — a warm, organic portfolio that feels like standing in a Pacific Northwest forest at golden hour. Light filters through the canopy as subtle atmospheric gradients. Cards feel like parchment. Accents are pulled from nature: deep fern green and redwood-bark rust.

Relaxed, warm, and memorable without being loud.

---

## Color Palette

### Light Mode — Warm Ivory Linen
| Token                    | Value     | Inspired by              |
|--------------------------|-----------|--------------------------|
| `--background`           | `#faf6ee` | Sun-bleached linen       |
| `--foreground`           | `#1c1208` | Deep walnut wood         |
| `--card`                 | `#f2e8d8` | Aged parchment           |
| `--border`               | `#d6c4a4` | Dry sand / tan bark      |
| `--muted`                | `#7c6248` | Warm brown earth         |
| `--accent`               | `#2e6a48` | Deep fern / forest floor |
| `--accent-secondary`     | `#b5451c` | Redwood bark / rust      |

### Dark Mode — Forest Floor at Dusk
| Token                    | Value     | Inspired by              |
|--------------------------|-----------|--------------------------|
| `--background`           | `#0c130a` | Deep night forest        |
| `--foreground`           | `#ede6d2` | Warm birch cream         |
| `--card`                 | `#141f10` | Rich dark humus          |
| `--border`               | `#223520` | Dark moss                |
| `--muted`                | `#8aab78` | Sage / lichen            |
| `--accent`               | `#58c47e` | Spring fern (new growth) |
| `--accent-secondary`     | `#e87a35` | Ember glow / campfire    |

---

## Atmospheric Body Background

Rather than a flat colour, the `body` carries two soft radial gradients:
- **Top-left:** 7% fern-green tint — evokes canopy light filtering in
- **Bottom-right:** 6% ember/rust tint — warm ground-level light

This creates a subtle sense of depth and atmosphere on every page without any visual clutter.

```css
background-image:
  radial-gradient(ellipse 70% 50% at 15% 0%,  /* canopy green */
    color-mix(in srgb, var(--accent) 7%, transparent) 0%, transparent 100%),
  radial-gradient(ellipse 60% 40% at 85% 100%, /* ember amber */
    color-mix(in srgb, var(--accent-secondary) 6%, transparent) 0%, transparent 100%);
```

---

## Typography

- **Font:** Geist Sans (body), Geist Mono (code/timestamps/labels)
- **Hero name:** `font-black` + `.gradient-text` at `150deg` — fern green angling into redwood rust
- **Section headings:** `font-black text-2xl` with a large `text-5xl` decorative number at 20% accent opacity
- **Card titles:** `font-bold`
- **Labels/chips:** `font-mono font-semibold`

---

## Key Visual Elements

### Gradient Text (`.gradient-text`)
`150deg` linear gradient from `--accent` (fern green) → `--accent-secondary` (redwood rust). Applied to the hero name and navbar brand. The diagonal echoes tree growth.

### Decorative Section Numbers
`01.` – `05.` rendered at `text-5xl font-black` in 20%-opacity accent — large enough to feel editorial, faint enough not to compete with the heading.

### Card Warm-Glow Hover (`.card-gradient-hover`)
Three-layer shadow on hover:
1. `0 0 0 1px` — soft accent ring (60% opacity, not harsh)
2. `0 6px 28px` — mid-range fern-green ambient glow
3. `0 2px 8px` — close ember-amber warmth at the base

Together they feel organic rather than electric.

### Experience Cards — Left Border Accent
A `3px solid var(--accent)` left border gives each job a quiet timeline structure.

### CTA Buttons — Gradient Primary
`linear-gradient(135deg, var(--accent), var(--accent-secondary))` with `hover:scale-105`. Fern to rust reads as natural, not corporate.

### Hero Background Blobs
Two `blur-3xl` circles at 10% opacity — violet placed top-left, rust placed bottom-right — reinforce the atmospheric canopy-light effect from the body gradient.

### Navbar — Glassmorphism
`backdrop-blur-md` + `color-mix(background 80%, transparent)` for a gentle frosted-glass look that doesn't cut off the atmospheric background.

---

## Component Summary

| Component      | Notable Detail                                               |
|----------------|--------------------------------------------------------------|
| Navbar         | Glassmorphism bar, gradient brand name                       |
| Hero           | Gradient name (fern→rust), atmospheric blobs, gradient CTA  |
| Experience     | Left fern-green border, rust skill chips, warm glow hover    |
| Certifications | Gradient icon badge (fern→rust diagonal), warm glow hover    |
| Projects       | Fern icon box, rust tech chips, lift + warm glow on hover    |
| Activities     | Gradient category pill (fern→rust), warm glow hover          |
| Contact        | Gradient "Say Hello" CTA button                              |
| Travel         | Rust map markers, warm glow on location cards                |

---

## Rounded Corners
All cards use `rounded-2xl` (16px) — soft and organic, not perfectly geometric.
