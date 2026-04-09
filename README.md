# Plane Care Academy

Website for Plane Care Academy — an EASA Part-147 approved aviation maintenance training organisation based in Sofia, Bulgaria. Built with Next.js 15 and exported as a static site for cPanel hosting.

## Tech Stack

- **Framework:** Next.js 15 (App Router, static export)
- **UI:** React 19, Bootstrap 5
- **Animations:** WOW.js (scroll), Swiper (carousels)
- **Counters:** react-countup with scroll-spy
- **Content:** `data/content.json` (flat-file CMS)

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Static export build → `out/` folder |
| `npm run lint` | Run ESLint |

## Deployment (cPanel)

1. Run `npm run build` — output goes to `out/`
2. Upload the **contents** of `out/` to `public_html/` via FTP or cPanel File Manager
3. The `public/.htaccess` file is included in the build automatically and handles 404 routing on Apache

> **Note:** `out/` is excluded from git. Always build locally before uploading.

## Project Structure

```
pc-acad-nex/
├── app/                          # Next.js App Router pages
│   ├── page.js                   # Home page
│   ├── about/
│   ├── contact/
│   ├── courses/
│   │   ├── page.js               # Course categories overview
│   │   ├── incoming-courses/
│   │   │   ├── page.jsx          # Upcoming courses listing
│   │   │   └── [slug]/page.js    # Dynamic detail pages (generateStaticParams)
│   │   ├── type-trainings/
│   │   │   ├── page.jsx          # Type trainings grid
│   │   │   └── [slug]/page.js    # Dynamic detail pages (generateStaticParams)
│   │   ├── online-trainings/     # Regulatory training listing
│   │   └── other-trainings/      # Placeholder (under development)
│   ├── news/
│   │   └── page.js               # News listing
│   └── not-found.js              # Custom 404 page
├── components/
│   ├── courses/
│   │   ├── IncomingCourses.jsx       # Home page upcoming courses section
│   │   ├── IncomingTrainingDetails.jsx
│   │   ├── OtherTrainingCard.jsx     # Regulatory training card
│   │   ├── OtherTrainings.jsx        # Regulatory training grid
│   │   ├── TypeTrainingCard.jsx
│   │   ├── TypeTrainingDetails.jsx
│   │   └── TypeTrainings.jsx
│   ├── home/
│   │   ├── About.jsx
│   │   └── News.jsx (removed — now in components/news/)
│   ├── news/
│   │   ├── News.jsx              # Home page news section
│   │   └── NewsDetails.jsx       # Article detail view
│   ├── Breadcrumb.js             # Supports crumbs={[{label, href}]} prop
│   └── Counter.js                # react-countup with scroll-spy
├── data/
│   └── content.json              # All site content (CMS replacement)
├── layouts/
│   ├── NextLayout.js             # Page wrapper (header + footer)
│   ├── Header.js
│   ├── Footer.js
│   └── MobileMenu.jsx
├── public/
│   ├── .htaccess                 # Apache config for cPanel
│   └── assets/                   # CSS, fonts, images
├── utility/
│   └── sliderProps.js            # Swiper configuration presets
├── next.config.mjs               # Static export config
└── _others/                      # Archived / unused components (do not import)
```

## Content Management

All content is stored in `data/content.json`. To update the site:

- **Navigation / Footer links** → `navigation`, `footer` keys
- **Type training courses** → `typeTrainings` array (adding a new entry with a `slug` automatically creates a new route at the next build)
- **Incoming courses** → `incomingCourses` array (same slug-based routing)
- **Regulatory training courses** → `regulatoryTrainings` array
- **News articles** → `news` array (currently empty; restore `app/news/[slug]/page.js` from git when articles are added — see note below)
- **Team, certificates, stats** → respective keys

### Restoring news detail pages

The `app/news/[slug]/` dynamic route was removed because the `news` array is currently empty (static export requires at least one generated page per dynamic route). To restore it:

1. Add articles to the `news` array in `content.json` (each needs `slug`, `href`, `excerpt`, `body[]`)
2. Copy `app/news/[slug]/page.js` back from git history
3. Run `npm run build`

## Path Aliases

| Alias | Resolves to |
|---|---|
| `@/*` | Project root |
| `@css/*` | `public/assets/css/` |

## Code Style

- JavaScript/JSX only — no TypeScript
- Prettier: 4-space indent, 120-character line width
- All dynamic route pages must be `async` and `await params` (Next.js 15 requirement)
