# Roushni Muskan — Portfolio

A personal portfolio rebuilt in the style of [nodeanurag/my-portfolio](https://github.com/nodeanurag/my-portfolio): dark/light "Onyx" theme, glassmorphism cards, scroll-reveal animations, a live GitHub contribution graph, and a Konami-code easter egg.

## Tech Stack

- **Framework:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS (CSS-variable theme, dark/light via `.light` class)
- **Animations:** Framer Motion (scroll reveals, scroll progress bar)
- **Icons:** lucide-react
- **GitHub graph:** live contribution data via `github-contributions-api.jogruber.de`

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customization

Everything content-related — name, bio, projects, skills, timeline, socials — lives in one place: `src/config/site.ts`. Edit that file to update the site; no need to touch components.

## Structure

```
src/
  components/   nav, footer, theme toggle, reveal animation, konami easter egg, scroll progress, live clock
  sections/     Hero, About, Projects, Experience, TechStack, GithubActivity, Contact
  config/       site.ts — all content
```

## Deploy

Push to GitHub and import into Vercel, or run `npm run build` and deploy the `dist/` folder anywhere static (Netlify, GitHub Pages, Cloudflare Pages).

## Notes / what's different from the reference

To keep this a clean rebuild rather than a copy, a few of the reference site's extras were left out (multi-page routing, Cmd+K command palette, the oneko.js cursor pet, and the Writing/blog section, since there's no blog content yet). All of those are straightforward to add back — say the word and they can be layered in.
