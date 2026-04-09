# TODO — Plane Care Academy

## Pending

### News
- [ ] Write and publish news articles — add entries to `data/content.json` → `news` array (each needs `id`, `date`, `title`, `image`, `href`, `slug`, `excerpt`, `body[]`)
- [ ] Restore `app/news/[slug]/page.js` dynamic route from git once the `news` array has at least one entry
- [ ] Add news article images to `public/assets/img/news/`

### Courses
- [ ] Populate `app/courses/other-trainings/page.jsx` — currently shows "under development"; catalogue content (Skills Training, Organisational Training) is in the brochure PDF
- [ ] Review incoming courses (`incomingCourses` in `content.json`) — update dates, times, and availability as schedules change
- [ ] Add more courses to `regulatoryTrainings` if needed (Sheet Metal Worker, Organisational Training courses from brochure are not yet listed)

### SEO & Metadata
- [ ] Add per-page `generateMetadata()` to each static route (currently only `news/[slug]` has it)
- [ ] Add Open Graph and Twitter card metadata in `app/layout.js`

### Preloader
- [ ] Fix `<Preloader />` component issue and re-enable in `app/layout.js`

### Pages (leftover template routes — not in navigation)
- [ ] Decide fate of `/project`, `/project-details`, `/team`, `/team-details`, `/news-details` — either build them out or remove the route folders
- [ ] `app/service-details/page.js` shows "under development" — build out or remove

### Backend / CMS (future)
- [ ] Replace `data/content.json` with a headless CMS or backend API when ready
- [ ] Re-enable dynamic rendering (remove `output: "export"` from `next.config.mjs`) when a Node.js host or Vercel is used
- [ ] Set up environment variables for API keys / CMS tokens

### Cleanup
- [ ] Audit `_others/` folder — delete components that will never be used
- [ ] Audit and remove unused dependencies from `package.json`
- [ ] Fix ESLint circular-reference issue in config (currently skipped during builds via `ignoreDuringBuilds: true`)

## Done

- [x] Initial Next.js 15 project setup with App Router
- [x] Routing structure for all main pages
- [x] Header, Footer, MobileMenu layouts — navigation driven by `data/content.json`
- [x] Swiper slider integration
- [x] WOW.js scroll animations setup
- [x] Path aliases configured (`@/`, `@css/`)
- [x] Prettier formatting configured
- [x] SSR guard added to `utility/index.js` (stickyNav)
- [x] `MobileMenu.jsx` — added `"use client"` directive
- [x] `Counter.js` — rewritten with react-countup `enableScrollSpy`
- [x] `data/content.json` — created as central content/CMS file
- [x] `Breadcrumb.js` — updated to support `crumbs` array with per-step links
- [x] Type Trainings — 10 courses in `content.json`, single dynamic route `[slug]`, `TypeTrainingDetails` component
- [x] Incoming Courses — dynamic `[slug]` route, `IncomingTrainingDetails` component with dates/method/location
- [x] Regulatory Training — 10 courses in `content.json`, `app/courses/online-trainings/` page, `OtherTrainings` + `OtherTrainingCard` components
- [x] Other Trainings — "under development" page (`app/courses/other-trainings/`)
- [x] News listing — `app/news/page.js` reads from `content.json`
- [x] News detail — `NewsDetails` component built; `app/news/[slug]/` route removed pending news content
- [x] Home page — active sections: Hero, About, Incoming Courses, News
- [x] Static export configured (`output: "export"`, `trailingSlash: true`)
- [x] cPanel deployment — `public/.htaccess` added, `out/` excluded from git
- [x] Build verified — 31 static pages generated cleanly
- [x] All dynamic route pages updated to `async` / `await params` (Next.js 15 requirement)
