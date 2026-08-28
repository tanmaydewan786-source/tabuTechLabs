# Tabutech labs

A modular React website for **Tabutech labs**, an Indian technology company
researching and developing products for meaningful societal and industrial
challenges.

The application is a lightweight single-page React experience. It preserves
the visual identity, responsive layout, accessible navigation, and
research-stage product language.

## Sections

| Navigation item | Description |
| --- | --- |
| What we do | Eight software, engineering, research, and quality capabilities |
| Our Products | TruthBubble AI and Shivastras product lines |
| About Us | Company vision, mission, and working principles |
| Contact Us | Partnership and conversation link |

Navigation switches the right-side content panel instantly without changing the
URL or leaving the page.

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
| `npm run deploy` | Check, build, and publish `dist/` to GitHub Pages |

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

### Add a section

1. Add a panel component and navigation entry in `src/pages/HomePage.jsx`.
2. Add the panel to the `panels` map in the same file.
3. Add interaction coverage to `src/App.test.jsx`.

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
- Rendering of all navigation sections
- Switching content without changing the URL
- The company document title
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

### GitHub Pages

The project is configured for the custom domain `https://tabutechlabs.com/`.
To publish it, run:

```bash
npm run deploy
```

This command runs linting and tests, creates a production build using the
custom-domain root path, generates a route fallback, and publishes `dist/`
to the `gh-pages` branch. In the GitHub repository settings, select
**Settings → Pages → Deploy from a branch**, then choose the `gh-pages` branch
and `/ (root)` folder.

## Accessibility

The interface includes visible keyboard focus states, semantic page sections,
accessible link labels, responsive mobile layouts, and reduced-motion behavior.
Preserve these features when extending the visual design.
