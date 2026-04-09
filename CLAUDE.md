# Claude Guidelines — Plane Care Academy

## Project Context

This is a Next.js 15 (App Router) website for Plane Care Academy, an EASA Part-147 approved aviation training academy based in Bulgaria. It is a **frontend-only static site** — no backend, no database. All content is driven by `data/content.json`.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Static export build → produces out/
npm run lint     # Lint check (also skipped during build — see next.config.mjs)
```

## Build & Deployment

- `next.config.mjs` is configured with `output: "export"` and `trailingSlash: true`
- `npm run build` produces the `out/` folder — upload its contents to `public_html/` on cPanel
- `public/.htaccess` is included and copied to `out/` automatically; it handles 404 routing for Apache
- `out/` is excluded from git via `.gitignore`
- ESLint is skipped during builds (`eslint: { ignoreDuringBuilds: true }`) due to a circular-reference issue in the ESLint config

## Content Management

All site content lives in **`data/content.json`**. This is the single source of truth until a backend is implemented. Structure:

| Key | What it controls |
|---|---|
| `site` | Site name, tagline, logo paths, favicon |
| `contact` | Address, phones, email, social links |
| `navigation` | Header nav items and submenus |
| `footer` | Quick links, bottom links, copyright year |
| `hero` | Home page hero section |
| `about` | About section text, bullet points, CEO details |
| `stats` | Counter stats (4 items) |
| `courseCategories` | Home page course category cards (3 items) |
| `typeTrainings` | 10 type training courses with full options tables |
| `incomingCourses` | Upcoming courses with dates, method, location |
| `regulatoryTrainings` | 10 regulatory/compliance courses |
| `news` | News articles (currently empty — items backed up in `_backUpNewsItem`) |
| `team` | Team member profiles |
| `certificates` | EASA certificate images |

## Dynamic Routes

All dynamic routes use `generateStaticParams()` to pre-render pages at build time. **Next.js 15 requires `params` to be awaited** — all page components and `generateMetadata` functions must be `async` and use `const { slug } = await params`.

| Route | Data source | Status |
|---|---|---|
| `/courses/type-trainings/[slug]` | `content.typeTrainings` | Active — 10 pages |
| `/courses/incoming-courses/[slug]` | `content.incomingCourses` | Active — 2 pages |
| `/news/[slug]` | `content.news` | **Removed** — news array is intentionally empty; restore `app/news/[slug]/page.js` from git when articles are added back |

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
- **Home page:** Active sections are `<About />`, `<IncomingCourses />`, `<News />`. Other sections (`<Team />`, `<Pricing />`, etc.) are commented out in `app/page.js`.
- **News:** The `/news` listing page and `NewsDetails` component are fully built. The `app/news/[slug]/` dynamic route is removed while the news array is empty — add it back when content is ready.
- **`_others/` folder:** Contains archived and alternate component implementations. Do not import from here in production pages.
- **Static assets:** All CSS is imported globally in `app/layout.js`. Do not add `<link>` tags manually; import CSS files instead.
- **"Under development" pages:** `app/courses/other-trainings/page.jsx` and `app/service-details/page.js` use the `error-section` / `error-items` pattern with a `fal fa-tools` icon. Use the same pattern for any other unfinished pages.

## Key Files

| File | Purpose |
|---|---|
| `data/content.json` | Central content/CMS file — all site data |
| `app/layout.js` | Root layout, global CSS imports, metadata |
| `next.config.mjs` | Static export config (`output`, `trailingSlash`, `eslint`) |
| `public/.htaccess` | Apache config for cPanel deployment |
| `layouts/NextLayout.js` | Shared page wrapper (header + footer) |
| `layouts/Header.js` | Site header/navigation |
| `layouts/Footer.js` | Site footer |
| `components/Breadcrumb.js` | Breadcrumb — supports `crumbs={[{label, href}]}` array prop |
| `utility/sliderProps.js` | Swiper slider configuration presets |
| `public/assets/css/main.css` | Primary stylesheet |

## Do Not

- Do not add TypeScript — this project is JS only
- Do not import from `_others/` in active pages
- Do not add inline `<style>` tags — use the existing CSS files
- Do not re-enable `<Preloader />` without resolving the component issue
- Do not add a new dynamic route without `generateStaticParams` — the build will fail with `output: export`
- Do not access `params.slug` synchronously in page components — always `await params` first (Next.js 15 requirement)
