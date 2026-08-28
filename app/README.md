# Tabutech labs

A modular React website for **Tabutech labs**, an Indian technology company
researching and developing products for meaningful societal and industrial
challenges.

The application recreates the original company website as a lightweight
single-page React application. It preserves the visual identity, responsive
layout, product pages, animations, accessible navigation, and research-stage
product language.

## Pages

| Route | Description |
| --- | --- |
| `/` | Company homepage with Lab, Stories, Services, and Grow with us sections |
| `/truthbubble-ai` | TruthBubble AI product and research page |
| `/shivastras` | Shivastras wearable-technology research page |
| `/research` | Research principles and focus areas |

Internal links use client-side navigation and support browser back and forward
controls. Each page can also be opened directly by URL.

## Technology

- React 19
- Vite 8
- JavaScript and JSX
- CSS with responsive and reduced-motion support
- Vitest and React Testing Library
- ESLint

No backend, database, authentication, or environment variables are currently
required.

## Getting started

Use Node.js 22 or a compatible version supported by Vite 8.

```bash
cd app
npm install
npm run dev
```

The development command automatically runs linting and all tests before Vite
starts. The local address is printed in the terminal, normally
`http://localhost:5173`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Run quality checks, then start the development server |
| `npm run test` | Run the complete test suite once |
| `npm run test:watch` | Re-run relevant tests as files change |
| `npm run lint` | Check JavaScript and JSX with ESLint |
| `npm run check` | Run linting and tests together |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |

For a release check, run:

```bash
npm run check
npm run build
```

## Project structure

```text
app/
├── public/                 Static files and favicon
├── src/
│   ├── components/         Shared presentation components
│   │   ├── Arrow.jsx
│   │   ├── Brand.jsx
│   │   └── DetailLayout.jsx
│   ├── data/
│   │   └── siteContent.jsx Central page and card content
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── DetailPage.jsx
│   │   └── ShivastrasPage.jsx
│   ├── styles/             Site styles and compatibility layer
│   ├── test/               Shared test setup
│   ├── App.jsx             Routing and document titles
│   ├── App.test.jsx        Route and interaction tests
│   └── main.jsx            React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Making changes

### Edit company or product content

Most reusable copy and page data lives in
[`src/data/siteContent.jsx`](src/data/siteContent.jsx). Page-specific layouts
live in `src/pages/`.

Keep the following product qualifications accurate:

- TruthBubble AI is in early validation and research.
- Shivastras is in research, feasibility, and validation.
- Do not imply that products are launched, certified, patented, or formally
  partnered unless those claims have been approved.

### Add a route

1. Create a page component in `src/pages/`.
2. Add its path and renderer to the `routes` object in `src/App.jsx`.
3. Add its document title in the same file.
4. Add direct-route and navigation coverage to `src/App.test.jsx`.

### Styling

The visual system is loaded through `src/styles/site.css`, which imports the
preserved stylesheet from the adjacent `TabuTech_Labs_Developer_Handover`
directory. Keep that directory beside `app/` when developing or building this
workspace. The small Tailwind compatibility file exists because the preserved
stylesheet contains an unused Tailwind import; the React application itself
does not rely on Tailwind utility classes.

## Testing

The tests verify:

- Homepage and portal-section rendering
- Direct loading of every public route
- Page-specific document titles
- Client-side navigation between pages
- External contact-link behavior and safety attributes

Tests run in a browser-like JSDOM environment. Add a regression test whenever
navigation, shared components, or route content changes materially.

## Production deployment

Create the deployable files with:

```bash
npm run build
```

Upload the generated `dist/` directory to a static host. Because this is a
single-page application, configure the host to serve `index.html` as the
fallback for unknown paths. Without this fallback, directly opening routes such
as `/research` may return a server-level 404.

The current contact actions link to LinkedIn. Instagram, Reddit, and Kickstarter
remain labeled placeholders until official profile URLs are available.

## Accessibility

The interface includes visible keyboard focus states, semantic page sections,
accessible link labels, responsive mobile layouts, and reduced-motion behavior.
Preserve these features when extending the visual design.
