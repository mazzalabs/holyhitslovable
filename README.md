# Holy Hits – Venda de Show

A clean, maintainable, and fully customizable landing page for an artist's show booking site.  
Rebuilt from visual inspection of the original Lovable page, using **React 18 · TypeScript · Vite · Tailwind CSS 3**.

---

## Quick start

```bash
# 1 – Install dependencies
npm install

# 2 – Copy the environment file and fill in your values
cp .env.example .env

# 3 – Add your image assets (see public/images/README.md)

# 4 – Start the dev server
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Build for production

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

---

## Project structure

```
src/
  assets/              Static assets imported by components
  components/
    common/            (Reserved for shared cross-concern components)
    layout/
      Footer.tsx       Page footer with social links
    sections/
      HeroSection.tsx         Full-viewport hero
      GallerySection.tsx      Horizontal scroll photo gallery
      TestimonialsSection.tsx WhatsApp-style testimonial cards
      AboutSection.tsx        Artist biography / release
      VideosSection.tsx       YouTube video thumbnails
      PlansSection.tsx        Show pricing plans
    ui/
      Button.tsx         Gold CTA button and outline variant
      GoldFrame.tsx      Card with animated gold border
      PlanCard.tsx       Individual show-plan card
      SectionHeading.tsx Eyebrow + h2 + divider
      TestimonialCard.tsx WhatsApp-bubble testimonial card
      VideoCard.tsx       YouTube thumbnail card
  config/
    brand.ts           ← Artist name, tagline, socials, SEO
    navigation.ts      ← Nav links and hero CTA labels
    site-content.ts    ← ALL page copy: gallery, testimonials, about, videos, plans, footer
    theme.ts           ← CSS variable reference (values in styles/globals.css)
  hooks/               (Reserved for custom React hooks)
  lib/
    utils.ts           Helper functions (WhatsApp URL, YouTube, year, highlight parser)
  pages/
    HomePage.tsx       Assembles all sections
  styles/
    globals.css        CSS custom properties (design tokens) + component classes
  types/
    index.ts           Shared TypeScript types
  App.tsx              Root component (injects SEO meta tags)
  main.tsx             Entry point

public/
  images/              ← Add your photo assets here (see public/images/README.md)
  favicon.png          ← Replace with your favicon
```

---

## Customisation guide

### A – Copy / Text

All visible text lives in **`src/config/site-content.ts`**:

| Section | Key |
|---|---|
| Gallery photo alt text | `galleryItems[].alt` |
| Testimonials | `testimonials[]` |
| Artist biography paragraphs | `aboutContent.paragraphs[]` |
| Videos | `videoItems[]` |
| Plans title, price, features | `showPlans[]` |
| Footer heading | `footerContent.socialHeading` |

Hero text and tagline are in **`src/config/brand.ts`** → `name`, `tagline`.

### B – Images

Add image files to `public/images/` then update the `src` values in  
`src/config/site-content.ts` (`heroContent.backgroundImage`, `galleryItems[].src`, etc.).

See `public/images/README.md` for the full list of required files.

### C – Colours

All colour tokens are CSS custom properties in **`src/styles/globals.css`** `:root` block.  
The most important ones:

| Token | Purpose |
|---|---|
| `--color-background` | Page background (near-black) |
| `--color-foreground` | Default text colour |
| `--color-primary` | Gold accent used for dots, rings |
| `--color-gold` | Gold accent for text |
| `--color-gold-soft` | Softer gold for labels |
| `--color-chat` | Teal colour of testimonial bubbles |
| `--gradient-gold` | The animated multi-stop gold gradient |
| `--shadow-glow` | Gold glow box-shadow |

### D – Fonts

Fonts are loaded in `index.html` via Google Fonts.  
Change the `@import` URL and update the `fontFamily` values in `tailwind.config.ts`.  
The display font (headings) is **Orbitron**; the body font is **Outfit**.

### E – Navigation / CTAs

Smooth-scroll anchor targets live in **`src/config/navigation.ts`**.  
Hero button labels and targets are in `heroCTAs`.

### F – Sections

To hide a section: comment it out in **`src/pages/HomePage.tsx`**.  
To reorder: drag the JSX elements.  
To add a new section: create a component in `src/components/sections/`, then import it in `HomePage.tsx`.

### G – Metadata / SEO

Edit `brand.seo.*` in **`src/config/brand.ts`**.  
For server-rendered SEO (crawlers), update `index.html` directly as well.

### H – WhatsApp number

Change `VITE_WHATSAPP_NUMBER` in `.env`, or update the `whatsapp` field in `src/config/brand.ts`.

---

## Responsive breakpoints

| Range | Behaviour |
|---|---|
| 320–639 px | Single column; horizontal scroll for gallery and videos |
| 640–1023 px | Slightly wider gallery/video cards |
| 1024–1439 px | Two-column about section; 3-column plans and videos grid |
| 1440 px+ | Max-width containers (max-w-6xl / max-w-7xl) prevent over-stretching |

---

## Assumptions & inferred behaviour

1. **Logo image** – The original uses a CSS mask (`mask-image`) so a gold gradient shines through the logo silhouette. A white-on-transparent PNG placed at `public/images/logo.png` is required.
2. **Gallery lightbox** – The original gallery items were `<button>` elements. No lightbox modal was visible from the HTML. This rebuild preserves the button affordance without a lightbox; add one if needed.
3. **Video playback** – Clicking a video card opens YouTube in a new tab. The original behaviour was indeterminate from static HTML alone.
4. **Spotify icon** – Lucide does not include a Spotify icon. `Music2` is used as a stand-in (matches the original).
5. **Logo placeholder** – Without the original Lovable CDN logo PNG you will see a blank gold rectangle. Replace `public/images/logo.png` with your actual logo.
6. **Hero image placeholder** – The original CDN image is not redistributable. A placeholder produces a black hero until your own `public/images/hero.jpg` is added.
7. **Analytics** – The original Lovable page included a `~flock.js` analytics snippet. It has not been reproduced; add your own analytics of choice if needed.
8. **Reduced motion** – All animations are suppressed via `@media (prefers-reduced-motion: reduce)` in `globals.css`.
9. **Dark-only theme** – The original is dark-only. Light-mode styles have not been added.

---

## Quality checklist

- [x] All page sections reproduced (Hero, Gallery, Testimonials, About, Videos, Plans, Footer)
- [x] Semantic HTML landmarks (`<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`)
- [x] Heading hierarchy (h1 in hero, h2 per section, h3 in plan cards)
- [x] Keyboard navigation (anchor/button focus, visible focus ring)
- [x] ARIA labels on icon-only buttons and meaningful images
- [x] `alt` text on every `<img>`
- [x] `loading="lazy"` on below-the-fold images; LCP hero image is eager
- [x] Smooth scroll (`html { scroll-behavior: smooth }`)
- [x] `prefers-reduced-motion` respected
- [x] Responsive at 320 / 640 / 1024 / 1440 px
- [x] All content editable via config files (no copy in JSX)
- [x] No inline styles except technically necessary (mask-image, CSS vars)
- [x] No hardcoded phone number in components (driven by env / config)
- [x] TypeScript strict mode
- [x] No proprietary assets, API keys, or analytics IDs copied
