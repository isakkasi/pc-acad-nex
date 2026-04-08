# Plane Care Academy

Aviation training academy website built with Next.js 15.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 18, React Bootstrap
- **Animations:** WOW.js (scroll animations), Swiper (carousels)
- **Components:** React Countup, React Player, React Visibility Sensor

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
pc-acad-nex/
├── app/                    # Next.js App Router pages
│   ├── page.js             # Home page
│   ├── about/
│   ├── contact/
│   ├── courses/
│   │   ├── page.js
│   │   ├── incoming-courses/
│   │   ├── online-trainings/
│   │   ├── type-trainings/
│   │   └── other-trainings/
│   ├── news/
│   ├── news-details/
│   ├── project/
│   ├── project-details/
│   ├── service-details/
│   ├── team/
│   └── team-details/
├── components/             # Reusable React components
│   ├── home/               # Home page sections
│   └── courses/            # Course-related components
├── layouts/                # Layout wrappers (Header, Footer, Sidebar, etc.)
├── utility/                # Slider configs and helpers
├── public/assets/          # Static CSS, fonts, images
└── _others/                # Archived / alternate implementations
```

## Path Aliases

| Alias | Resolves to |
|---|---|
| `@/*` | Project root |
| `@css/*` | `public/assets/css/` |

## Code Style

Prettier is configured with 4-space indentation and 120-character line width.
