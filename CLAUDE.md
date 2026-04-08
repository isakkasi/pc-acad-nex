# Claude Guidelines — Plane Care Academy

## Project Context

This is a Next.js 15 (App Router) website for Plane Care Academy, an aviation training academy. It is a frontend-only project with no backend or database.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Lint check
```

## Code Conventions

- **Language:** JavaScript/JSX (no TypeScript)
- **Formatting:** Prettier — 4-space indent, 120-char line width, no tabs
- **Imports:** Use path aliases `@/` (root) and `@css/` (CSS assets) — avoid relative `../../` imports
- **Component files:** PascalCase filenames (e.g. `MyComponent.jsx`), page files are lowercase (`page.js` / `page.jsx`)
- **Layout:** All pages wrap their content in `<NextLayout>` from `@/layouts/NextLayout`

## Architecture Notes

- **App Router:** All routes live under `/app`. Each route folder has a `page.js` or `page.jsx`.
- **Layouts:** `NextLayout.js` wraps all pages and wires up Header/Footer. The `header` prop selects the header variant.
- **Preloader:** The `<Preloader />` component is disabled in `app/layout.js` due to a known issue — do not re-enable without fixing it first.
- **Home page sections:** Most home page sections (`<About />`, `<Team />`, `<News />`, etc.) are currently commented out in `app/page.js`. Uncomment to restore them.
- **`_others/` folder:** Contains archived and alternate component implementations. Do not import from here in production pages.
- **Static assets:** All CSS is imported globally in `app/layout.js`. Do not add `<link>` tags manually; import CSS files instead.

## Key Files

| File | Purpose |
|---|---|
| `app/layout.js` | Root layout, global CSS imports, metadata |
| `layouts/NextLayout.js` | Shared page wrapper (header + footer) |
| `layouts/Header.js` | Site header/navigation |
| `layouts/Footer.js` | Site footer |
| `utility/sliderProps.js` | Swiper slider configuration presets |
| `public/assets/css/main.css` | Primary stylesheet |

## Do Not

- Do not add TypeScript — this project is JS only
- Do not import from `_others/` in active pages
- Do not add inline `<style>` tags — use the existing CSS files
- Do not re-enable `<Preloader />` without resolving the component issue
