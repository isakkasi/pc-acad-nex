# TODO — Plane Care Academy

## In Progress

- [ ] Decide on final home page section layout (many sections are commented out in `app/page.js`)

## Pending

### Home Page
- [ ] Uncomment and integrate desired sections: About, Services, Team, Statistics, CaseStudy, Pricing, Testimonial, News
- [ ] Review and remove unused imported components from `app/page.js`

### Preloader
- [ ] Fix `<Preloader />` component issue and re-enable in `app/layout.js`

### Content / Data
- [ ] Replace placeholder/dummy content with real academy content (courses, team, news, etc.)
- [ ] Add real images to `public/assets/img/` and update component references
- [ ] Fill in actual contact information in the Contact and Footer sections

### Courses
- [ ] Verify all course subcategory pages are populated: incoming, online, type-trainings, other-trainings
- [ ] Connect course listings to a data source (JSON, CMS, or API)

### SEO & Metadata
- [ ] Add per-page metadata (title, description) to each route's `page.js`
- [ ] Add Open Graph and social sharing metadata in `app/layout.js`
- [ ] Verify favicon is correct

### Cleanup
- [ ] Review `_others/` folder — archive or delete components no longer needed
- [ ] Audit and remove unused dependencies from `package.json`
- [ ] Set up ESLint config (currently using Next.js default lint with no custom rules)

### Deployment
- [ ] Configure environment variables if/when a backend or CMS is added
- [ ] Set up CI/CD pipeline
- [ ] Choose and configure hosting (Vercel recommended for Next.js)

## Done

- [x] Initial Next.js 15 project setup
- [x] Routing structure for all main pages
- [x] Header, Footer, Sidebar, and MobileMenu layouts
- [x] Swiper slider integration
- [x] WOW.js scroll animations setup
- [x] Path aliases configured (`@/`, `@css/`)
- [x] Prettier formatting configured
