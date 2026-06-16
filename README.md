# UI Kit — Marketing Site (dark, premium)

A single-page brand/marketing site for **Core Modern Solutions**, in the **dark premium register** (`.core-dark`, `#0A0A0A` canvas with blue radial glows). Recreated from the Brand System v2.0 aesthetic and the Brand Profile content.

## Run
Open `index.html`. It loads the global tokens (`../../styles.css`), the compiled component bundle (`../../_ds_bundle.js`, namespace `CoreModernSolutionsDesignSystem_3e7ab2`), then `screens.jsx` + `app.jsx` via Babel.

## Screens / sections (`screens.jsx`)
- **SiteNav** — sticky glass nav (brandmark + wordmark name + links + CTA Button).
- **Hero** — CO brandmark with blue glow, light-weight headline with one bold line, CTA + ghost button, tags.
- **Services** — three service pillars (Brand Foundation / Presencia Digital / Sistemas & Automatización) as hover-lift cards with Badge + check list.
- **Values** — four value cards with colored accent bars + a row of `StatCard` ROI tiles.
- **Process** — five-step diagnosis→follow-up strip.
- **CTA** — Brand Blue gradient panel with a gold CTA.
- **SiteFooter** — brandmark, wordmark, email.

## Interactivity (`app.jsx`)
- Header / hero / CTA buttons open a **ContactModal** (Input + Select + Callout from the DS). Submitting shows a success state. Anchor links scroll to sections.

## Components used
`Button`, `Badge`, `Tag`, `StatCard`, `Input`, `Select`, `Callout` — all from the design-system bundle. Icons are inline Lucide-style SVGs (see `MkIcon`).

## Notes
- This is a **recreation** of Core's brand register, not a new design. Copy is Spanish (Guatemala), matching the brand voice.
- Real logo assets are referenced from `../../assets/logos/`.
