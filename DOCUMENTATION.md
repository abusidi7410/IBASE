# TOSS Corporate Website — Project Documentation

Technical and project documentation for the corporate website of **Tech One-Stop Solution Ltd (TOSS)**.

- **Live site:** https://toss-corporate-vision-main.vercel.app
- **Source repository:** https://github.com/abusidi7410/IBASE.git
- **Vercel dashboard:** https://vercel.com/frontline12/toss-corporate-vision-main
- **Last updated:** August 2026

---

## 1. Overview

TOSS is a Nigerian ICT solutions company (established 2020) delivering networking, connectivity, cloud, cybersecurity, software, telecom, CCTV, renewable energy and consultancy services. This project is the company's public marketing website — a server-rendered, SEO-friendly corporate site with pages for the company story, services, products, projects and contact.

The site is built as a **single-page application with server-side rendering (SSR)** using TanStack Start. It is deployed on Vercel's global edge/Node platform.

### Goals

- Present TOSS as a professional, trustworthy, established technology company.
- Convert visitors into quote requests via the contact form.
- Be fast, accessible, mobile-friendly and SEO-optimised.

---

## 2. Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Framework | [TanStack Start](https://tanstack.com/start) (v1) + React 19 |
| Routing | TanStack Router (v1, file-based) |
| Data fetching | TanStack React Query |
| Styling | Tailwind CSS v4 + `tw-animate-css` |
| UI primitives | Radix UI + shadcn-style component set |
| Icons | lucide-react |
| Server runtime | Nitro (Node.js) with SSR |
| Build / bundler | Vite 8 (Rolldown) |
| Language | TypeScript (strict) |
| Package manager | npm |
| Hosting | Vercel (production + preview) |

### Key dependencies

- `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/react-query`
- `react` / `react-dom` 19
- `tailwindcss` 4, `@tailwindcss/vite`
- `nitro`
- `lucide-react`
- Radix UI (`@radix-ui/*`) primitives

---

## 3. Project Structure

```
toss-corporate-vision-main/
├── public/                      # Static assets served at the root
│   ├── favicon.svg              # TOSS brand favicon (SVG, primary)
│   ├── favicon.png              # TOSS brand favicon (PNG fallback)
│   └── robots.txt               # Crawler rules + sitemap reference
├── scripts/
│   └── gen-favicon.cjs          # Node script that generated public/favicon.png
├── src/
│   ├── assets/                  # Photography used across pages (JPG)
│   ├── components/
│   │   ├── site/                # Site-specific UI components
│   │   └── ui/                  # Reusable Radix/shadcn-style primitives
│   ├── content/
│   │   └── site.ts              # ⭐ Single source of truth for site content
│   ├── hooks/
│   │   └── use-mobile.tsx       # Responsive / mobile detection hook
│   ├── lib/
│   │   ├── error-capture.ts     # SSR error capture/expansion
│   │   ├── error-page.ts        # Renders a styled 500 fallback page
│   │   └── utils.ts             # cn() classname helper
│   ├── routes/                  # File-based routes (pages + sitemap)
│   ├── router.tsx               # Router factory (React Query client)
│   ├── routeTree.gen.ts         # Generated route tree (do not edit manually)
│   ├── server.ts                # Custom SSR server entry (error wrapper)
│   ├── start.ts                 # TanStack Start middleware (error + CSRF)
│   └── styles.css               # Tailwind theme + design tokens
├── package.json
├── tsconfig.json
├── vite.config.ts               # Vite + Nitro build configuration
├── vercel.json                  # Vercel build settings
├── components.json              # shadcn/ui configuration
├── eslint.config.js             # ESLint flat config
├── .prettierrc / .prettierignore
└── README.md
```

---

## 4. Pages & Routes

File-based routing with TanStack Router. Each route defines its own SEO `<head>` (title, description, Open Graph, canonical).

| Route | File | Purpose |
| ----- | ---- | ------- |
| `/` | `src/routes/index.tsx` | Homepage — hero, who we are, services, capabilities, solutions, projects, why TOSS, industries, tech stack, CTA |
| `/about` | `src/routes/about.tsx` | Company story, role, mission & vision, why TOSS, industries |
| `/services` | `src/routes/services.tsx` | Full services grid, capabilities, power/continuity, tech stack |
| `/solutions` | `src/routes/solutions.tsx` | Product/platform solutions (Global-Care, Bank-Well, X-Global ERP, etc.) |
| `/projects` | `src/routes/projects.tsx` | Selected client projects, delivery approach |
| `/contact` | `src/routes/contact.tsx` | Contact details + quote request form (`#quote` anchor) |
| `/sitemap.xml` | `src/routes/sitemap[.]xml.tsx` | Auto-generated XML sitemap (server handler) |

The root layout lives in `src/routes/__root.tsx`, which renders the shared `Navbar` and `Footer`, injects global `<head>` tags (title, description, favicon, fonts, JSON-LD Organization schema) and handles the 404/error pages.

---

## 5. Content Management

**All editable copy lives in `src/content/site.ts`.** This is the single source of truth for:

- `company` — name, address, phone, email, website, description
- `services` — 10 services (slug, title, description, icon name)
- `capabilities` — Connect / Protect / Transform
- `solutions` — products (title + description)
- `advantages` — Why-TOSS points (title, description, icon)
- `industries` — list of sectors served
- `projects` — client, scope, year, sector
- `technologies` — tech/platform capabilities
- `mission` / `missionSupport` / `vision` / `visionSupport`

> To change site text, phone numbers, addresses, services or projects, **edit `src/content/site.ts`** — the components consume it automatically. Images live in `src/assets/` and are imported per-page.

---

## 6. Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:8080)
npm run dev
```

The dev server runs on port `8080` with host `::` (configured in `vite.config.ts`).

### Lint & format

```bash
npm run lint      # ESLint
npm run format    # Prettier (writes files)
```

---

## 7. Building & Previewing

```bash
# Production build (default = Node server preset)
npm run build

# Preview the production build locally
npm run preview
```

Build output:
- Node preset → `dist/client` (static) + `dist/server` (SSR server)

To build for a specific target, set the `NITRO_PRESET` environment variable (powered by `vite.config.ts`):

```bash
NITRO_PRESET=vercel npm run build      # Vercel output (see below)
NITRO_PRESET=node-server npm run build # Generic Node output (default)
```

---

## 8. Deployment (Vercel)

The site is deployed on Vercel and connected to the GitHub repository so that pushes to `main` trigger automatic redeploys.

### Configuration

- **`vercel.json`** — declares `installCommand: npm install`, `buildCommand: npm run vercel-build`, and `outputDirectory: .vercel/output`.
- **`package.json`** — the `vercel-build` script runs `NITRO_PRESET=vercel vite build`.
- **`vite.config.ts`** — when the `vercel` preset is active, Nitro outputs the **Build Output API** format to `.vercel/output` (static files + server functions).

### Current URLs

- **Production alias:** https://toss-corporate-vision-main.vercel.app
- Deployments (previews) use `-<hash>-frontline12.vercel.app` subdomains.

### Redeploy manually (CLI)

```bash
npx vercel --prod --yes
```

### Custom domain

The generated site-wide tags point to `https://www.toss.ng` (set in `src/content/site.ts` → `company.website` and `__root.tsx`). To go live on a custom domain:

1. In the Vercel project → **Settings → Domains**, add your domain (e.g. `toss.ng` / `www.toss.ng`) and follow DNS setup.
2. Update `company.website` and the JSON-LD `url` if the final domain differs.

---

## 9. Environment Variables

There are currently **no required runtime environment variables**. The only build-time variable used is `NITRO_PRESET`, which is set automatically by the Vercel build script; it can be overridden per-command as shown in Section 7.

If a form/email backend is connected later (see Section 10), any API keys should be added as Vercel Environment Variables and referenced via `import.meta.env.*`.

---

## 10. Contact Form & Known Limitations

> **Important:** The contact form (`src/components/site/ContactForm.tsx`) is **not yet wired to a backend/email service**. Submitting the form composes the fields into an email and opens the visitor's mail client addressed to `info@toss.ng` (`mailto:`).

To connect a real submission pipeline, wire the `handleSubmit` handler to a service such as Resend, SendGrid, a Vercel Serverless Function, or a third-party form API, then store credentials as Vercel environment variables.

Other notes:

- Images in `src/assets/` are illustrative photography, not depictions of actual client sites (documented on the Projects page).
- The Tech Stack section lists capabilities and does not imply vendor partnerships or accreditations (documented in the UI).

---

## 11. Design System

Defined in `src/styles.css` using Tailwind v4 `@theme` tokens. The brand is a restrained corporate palette:

| Token | Value | Usage |
| ----- | ----- | ----- |
| `--primary` | Forest green `#12372A` | Headings, buttons, brand |
| `--background` | Warm off-white `#F7F7F2` | Page background |
| `--foreground` | Charcoal `#202522` | Body text |
| `--gold` | Muted gold `#B89B5E` | Small accents (e.g. project years) |
| `--charcoal` | Dark green-charcoal | Footer background |
| `--surface` | White | Cards / raised surfaces |

Typography uses **Inter** (loaded via Google Fonts) with tight tracking on headings. The design favours whitespace, photography and typography over heavy decoration, per the project brief.

---

## 12. Accessibility & Performance

- Semantic landmarks (`header`, `nav`, `main`, `footer`, `address`), skip-to-content link, and ARIA labels on interactive controls.
- `prefers-reduced-motion` support and honor of system font preferences.
- Responsive layouts from mobile to large desktop.
- Lazy loading for below-the-fold images; `fetchPriority="high"` on the hero image.
- SSR + per-route code-splitting for fast initial loads.
- Focus-visible outlines and accessible form labels.

---

## 13. Troubleshooting

| Problem | Likely cause / fix |
| ------- | ------------------ |
| Dev server won't start on 8080 | Port in use — the config uses `port: 8080`; change in `vite.config.ts` or free the port. |
| Changes to text don't show | Content lives in `src/content/site.ts` — edit there, not inside components. |
| Route pages missing after adding a file | The route tree (`src/routeTree.gen.ts`) is generated; restart the dev server / run the build to regenerate. |
| Vercel build fails with "No Output Directory" | Ensure the build uses `npm run vercel-build` (Vercel preset → `.vercel/output`). |
| Favicon not updating | Hard-refresh the browser (cache); both `favicon.svg` and `favicon.png` are referenced in `__root.tsx`. |
