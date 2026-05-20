# Tacos (Taquizas) Chuy

Mexican street food catering for the greater South Washington area (Puyallup, Tacoma, Lakewood).

**Live site:** [https://tacoschuy.com](https://tacoschuy.com)

**Cloudflare Pages deployment:** [Dashboard](https://dash.cloudflare.com/8bdaac438601ac14fe856c49598eaf03/pages/view/tacoschuy/deployments/new)

---

## Overview

A modern, responsive single-page website for a local taco catering business. Built with Next.js and statically exported for fast performance on Cloudflare Pages.

### Features

- **Video hero background** — Compressed MP4 (2.8 MB → 437 KB) with poster fallback
- **Modern restaurant design** — Warm amber/terracotta palette, Playfair Display + Inter typography
- **Responsive layout** — Works on desktop, tablet, and mobile
- **Scroll reveal animations** — Sections fade in as you scroll
- **Floating shapes + animated gradient** — Subtle background motion in hero
- **Contact info checklist** — Lets customers know what details to have ready
- **TikTok social integration** — Embedded video + footer icon link
- **Photo gallery** — Hover-zoom grid with overlay captions

---

## Tech Stack

- **Framework:** Next.js 14 (Pages Router)
- **Language:** JavaScript (functional components + hooks)
- **Styling:** Custom CSS with CSS custom properties
- **Icons:** React Icons (Font Awesome brand icons)
- **Video:** Native HTML5 `<video>` + ffmpeg compression
- **TikTok embed:** Direct iframe embed
- **Export:** Static HTML via `next export`

---

## SEO & Performance

- **Meta tags:** Title, description, viewport, robots, theme-color
- **Open Graph:** `og:title`, `og:description`, `og:image`, `og:url`, `og:locale`
- **Twitter Cards:** `summary_large_image` with image alt text
- **Canonical URL:** `https://tacoschuy.com`
- **Structured data:** JSON-LD `LocalBusiness` schema with `@id`, `sameAs`, geo coordinates
- **Sitemap:** `sitemap.xml` with `lastmod`
- **Robots.txt:** Allows all, points to sitemap
- **Web manifest:** PWA manifest with icons
- **Apple touch icon:** `icon.png`
- **Image preloading:** Hero background + banner preloaded for LCP

---

## File Structure

```
tacoschuy/
├── pages/
│   ├── index.js              # Main page (HomeIndex)
│   ├── 404.js                # Not found page
│   ├── _app.js               # Global CSS imports
│   ├── _document.js          # HTML document shell
│   └── components/
│       ├── Header.js         # Navbar + hero section
│       ├── Footer.js         # Dark footer with social links
│       ├── Gallery.js        # Photo grid with hover overlays
│       ├── ItemList.js       # Menu cards (tacos, sides, drinks)
│       ├── VideoPlayer.js    # TikTok iframe embed
│       └── layout.js         # Page wrapper
├── public/
│   ├── video-bg.mp4          # Compressed hero video (437 KB)
│   ├── card.jpg              # OG image / banner
│   ├── avatar.jpg            # Logo avatar
│   ├── bg.jpg                # Hero poster fallback
│   ├── favicon.ico           # Browser favicon
│   ├── icon.png              # Apple touch icon
│   ├── robots.txt            # Crawler directives
│   ├── sitemap.xml           # URL sitemap
│   └── site.webmanifest      # PWA manifest
├── utils/
│   └── constants.js          # Business info, menu items, images
├── styles/
│   └── globals.css           # Next.js default (minimal)
├── pages/assets/
│   ├── css/index.css         # Main stylesheet (modern design)
│   ├── images/               # Photo gallery images
│   └── scss/                 # Old Strata theme (deprecated)
└── package.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build static export
npm run build

# Output is in `out/` directory
```

---

## Deployment

The site is deployed to **Cloudflare Pages** via static export.

1. Push to `master` branch
2. Cloudflare Pages auto-builds from GitHub
3. Build command: `npm run build`
4. Output directory: `out`

---

## Recent Updates

- Modern redesign with video hero
- SEO overhaul (OG tags, JSON-LD, sitemap)
- Functional component migration (class → hooks)
- TikTok embed integration
- Mobile responsiveness improvements
- Contact section with info checklist

---

## Contact

**Jesus Miranda**  
📞 [253-620-0380](tel:253-620-0380)  
✉️ [jesusmiranda702@gmail.com](mailto:jesusmiranda702@gmail.com)  
📍 Puyallup, WA 98374
