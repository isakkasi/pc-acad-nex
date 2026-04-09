# Changelog — Plane Care Academy

All notable changes to this project will be documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.1] — 2026-04-09

### Fixed
- `public/.htaccess` — added `DirectoryIndex index.html` to prevent Apache on cPanel from serving `index.txt` for directory-based routes, which caused `/courses/`, `/news/`, and all sub-routes to display a blank page

---

## [1.0.0] — 2026-04-09

Initial public release. Frontend-only static site, ready for cPanel deployment.

### Pages
- Home — Hero, About, Incoming Courses, News sections
- About
- Contact
- Courses overview
- Type Trainings listing + 10 individual detail pages (dynamic slug routing)
- Incoming Courses listing + 2 individual detail pages (dynamic slug routing)
- Regulatory Training listing (10 courses)
- Other Trainings — placeholder (under development)
- News listing
- Custom 404 page

### Components
- `Breadcrumb` — multi-step with linked crumbs
- `Counter` — scroll-triggered countup
- `TypeTrainingDetails` — options table, sidebar, self-study note
- `IncomingTrainingDetails` — extends type training with dates, method, location, price, request form link
- `OtherTrainingCard` / `OtherTrainings` — regulatory course cards
- `NewsDetails` — article view with recent news sidebar
- `IncomingCourses` — home page upcoming courses section
- `News` (home) / `News` (listing page) — driven by content.json

### Content
- `data/content.json` — central content file covering site info, navigation, footer, hero, about, stats, course categories, 10 type trainings, 2 incoming courses, 10 regulatory training courses, team, certificates

### Infrastructure
- Next.js 15 static export (`output: "export"`, `trailingSlash: true`)
- `public/.htaccess` for Apache / cPanel hosting
- `out/` excluded from git
- All dynamic routes use `generateStaticParams` + async `await params` (Next.js 15)
- 31 static pages generated at build time
