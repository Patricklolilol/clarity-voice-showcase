# Clarity — AI Voice Agency Landing Page

A single-page, French-language marketing site for Clarity (Nice, Côte d'Azur). Premium, restrained aesthetic — serif headlines, generous whitespace, sparing teal accents, subtle scroll animations.

## Assets & Setup

- Copy uploaded `Clarity_logo.png` into `src/assets/clarity-logo.png` and import it in the nav and footer.
- Add Google Fonts (Cormorant Garamond + Inter) via `<link>` in `index.html`.
- Update `index.html` meta title to "Clarity — Agence IA Vocale · Nice, Côte d'Azur" and add a French meta description.
- Install `framer-motion` for scroll animations.

## Design System

Extend `tailwind.config.ts` and `src/index.css` with the brand tokens (all HSL in CSS vars):

- `--bg` #FAFAF8, `--bg-soft` #F0EDE8, `--bg-dark` #1A1614
- `--text` #2C2825, `--text-muted` #7A7169, `--text-on-dark` #9A9088
- `--accent` (teal) #1D9E75
- `--divider` #E8E4DF
- Fonts: `font-serif` → Cormorant Garamond; `font-sans` → Inter
- Utility class `.label-eyebrow` → Inter 10–11px, uppercase, letter-spacing 0.18em
- Buttons: squared (0–2px radius), no shadows, no gradients
- Reusable `FadeInUp` motion wrapper (40px travel, 0.6s ease-out, stagger 0.15s)

## Page Structure (`src/pages/Index.tsx`)

Composed of section components in `src/components/clarity/`:

1. **Nav** — sticky; transparent → `rgba(250,250,248,0.95)` with thin bottom border on scroll. Logo left; "Notre approche / Nos offres / Contact" anchor links + teal "Demander une démo" CTA. Mobile: hamburger opens a full-screen sheet.
2. **Hero** — full viewport, dark bg, eyebrow "NICE · CÔTE D'AZUR", serif headline "Votre agence ne dort jamais.", subtitle, two CTAs, bottom stat-pill row with thin dividers. Slow parallax on background using `useScroll` + `useTransform`.
3. **Problem** — light bg, eyebrow + headline + 3-column stat block (62% / 93% / 22×).
4. **Solution** — `#F0EDE8` bg, 2×2 white feature cards with thin border, subtle hover lift; card 1 has a 3px teal top border.
5. **Pricing** — three cards, middle PRO highlighted dark with "LE PLUS POPULAIRE" teal badge; teal "Demander une démo →" link under each price; fine-print line below.
6. **Why Clarity** — dark section, headline + paragraph + 4-fact row.
7. **CTA + Footer** — centered CTA block, then minimal footer with logo, copyright center, teal email right, thin top border.

## Demo Modal

`DemoModal.tsx` using existing shadcn `Dialog`. Triggered by every "Demander une démo" CTA via a shared context/state. Body shows a clean placeholder div: "Calendly embed goes here" — bordered, centered, on light bg.

## Interactions

- Smooth scroll: anchor links scroll to `#approche`, `#offres`, `#contact` via `scrollIntoView({ behavior: 'smooth' })`.
- All sections wrap headline/eyebrow/children in `FadeInUp` with `whileInView` + `viewport={{ once: true, margin: "-80px" }}`.
- Hero parallax: background layer translates Y as user scrolls.

## Responsiveness

Mobile-first: all multi-column grids collapse to single column under `md`. Hero clamp-based typography already scales. Nav collapses to hamburger under `md`.

## Out of Scope

- No real Calendly integration (placeholder only).
- No CMS, no backend, no form submission.
- No additional pages — single-page anchored navigation only.