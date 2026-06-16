# Core Modern Solutions — Design System

> Brand strategy & business-modernization consultancy based in Guatemala.
> This repository is the single source of truth for Core's visual identity, voice, and reusable UI — built so design agents and developers can produce on-brand interfaces, documents, decks, and assets.

---

## 1. Company & product context

**Core Modern Solutions** is a brand-strategy and business-modernization consultancy founded by **Sebastián Barberena** in **Guatemala**. It works with **SMB / PYME owners** (2–50 employees, monthly sales Q20,000–Q500,000) who have a validated product or service but lack the visual, communicational, and operational structure to scale.

Positioning, in their own words: *"No le vendemos diseño a empresas. Le damos claridad a empresarios."* (We don't sell design to companies. We give clarity to entrepreneurs.)

**Three service pillars:**
1. **Brand Foundation** — brand audit, brand book, visual identity, positioning, documented tone.
2. **Presencia Digital** — profile optimization (IG/FB/LinkedIn), content strategy, sales materials, Google Business.
3. **Sistemas & Automatización** — CRM & sales pipeline, Make/Zapier automations, SOPs, dashboards, client onboarding.

**Language:** The brand operates primarily in **Spanish (Guatemala)** for client-facing copy, with **English** used in the internal/refined brand-system documentation. Build copy in Spanish unless asked otherwise.

**Founder / contact:** Sebastián Barberena · admin@coremsgt.com

### The "products" / surfaces in this system
There is no shipping software product. Core's "products" are **communication surfaces**:
- **Brand & marketing website** (dark, premium, digital) — see `templates/marketing-site/`.
- **Client proposals & documents** (light, formal, ROI-driven) — see `templates/proposal/`.
- **Presentation slides** (16:9, dark or light) — see `templates/pitch-deck/`.
- **Internal brand reference docs** (the Brand Profile tabbed document).

---

## 2. Source materials (provenance)

This system was distilled from materials the user provided. You may not have access to all of them — they are recorded here for traceability.

- **Uploaded brand docs** (Spanish, exported from Figma, May 2026):
  - `Core_Color_System.md` · `Core_Typography_System.md` · `Core_Logo_System.md`
  - `Tipografía.pdf` / `Tipografia.pdf` (typography boards)
  - `index.html` — the **Core Brand Profile** internal tabbed document (Identidad / Tono & Voz / Servicios / Cliente Ideal / Sistema Visual).
- **Mounted codebase folders** (read-only, via File System Access):
  - `figma-exports/` — logo SVGs, color-family SVGs, value cards, tone & typography boards, imagery.
  - `Core Brand System/` — the refined **Brand System v2.0** site (`Core_Brand_System.html`, dark/premium), plus `Propuesta de Valor.pdf`.
- **GitHub repo provided:** [`coremsgt/Core-Card`](https://github.com/coremsgt/Core-Card) — a Card component repo. **⚠️ Not yet imported** (GitHub was not connected during build). Explore it to refine the `Card` primitive precisely. Reading it directly is recommended before doing card-heavy work for this brand.

All real visual assets (logos, value illustrations, color/tone boards, imagery) were copied into `assets/`.

---

## 3. Content fundamentals — how Core writes

Core's voice is *"el mentor que ya lo vivió"* — the mentor who has already lived it. Authority earned through business understanding, not design jargon.

**Tone attributes**
- **Autoridad sin arrogancia** — confidence from data & experience; clarity to convince, never jargon to impress.
- **Claridad estratégica** — every word earns its place. No filler, no courtesy paragraphs.
- **Calor Carnegie** — person first, business second. Validate the entrepreneur; make their problem our problem.
- **Orientación a resultados** — everything translates to measurable impact: how much, by when, how the investment is recovered (ROI in **quetzales** and **months**).

**Casing & person**
- Spanish client copy uses **vos / tu** (Guatemalan informal-respectful), e.g. *"Lo que tus clientes necesitan escuchar de vos es…"*. First person plural **"nosotros / Core"** for the firm.
- English system docs are crisp and declarative ("Authority is demonstrated, not claimed.").
- **Eyebrows / labels** are UPPERCASE with wide tracking (`--ls-label`). Headlines are sentence case, occasionally with a **bold** keyword inside a light headline (e.g. "Built from **geometry.**").

**Do say / Don't say**
- ✅ "Vimos que tu marca tiene una oportunidad enorme en…" · "Esto se recupera en X meses porque…" · "Este es el siguiente paso concreto."
- ❌ "Somos los mejores del mercado." · "Tu marca está mal." · "engagement / synergy / disruptive" without context · promises with no number or date.

**Emoji & vibe**
- The **informal internal** Brand Profile uses section emoji (🎯 📐 💰 🤝) as quick wayfinding.
- The **refined, client-facing** Brand System v2.0 uses **NO emoji** — it relies on arrows (→), check/cross (✓ ✕), numerals (01–06), and hairline rules. **Default to the no-emoji, refined register** for anything client-facing or premium. Reserve emoji for quick internal documents only.
- Overall vibe: **premium, disciplined, warm-but-precise.** Think trusted advisor with a clean deck, not a loud agency.

**Numbers as language:** quetzales (Q), months-to-ROI, employee counts, percentages. Avoid vanity metrics.

---

## 4. Visual foundations

**Color.** Four "energies", each with Bright / Mid / Dark depths, over a 6-step neutral spine (see `tokens/colors.css`).
- **Blue is the protagonist** (`#0049E5` bright → `#152B5B` mid → `#03102B` dark). In every piece, blue leads; accents support.
- **One accent per piece** — never mix Green + Gold + Red in the same artifact. Gold = value, Green = success/growth, Red = urgency.
- **Red is scarce** — only for genuine urgency/errors. Misuse devalues it.
- **Gradients = premium**, reserved for heroes, covers, high-impact pieces. The signature is **Brand Blue** (`#0049E6 → #152B5B → #03102B`, radial/diagonal). Never on running text.
- The brand runs in **two modes**: **Light** (white / `#F0F0F0` — proposals, documents, print) and **Dark** (`#0A0A0A` canvas with blue radial glows + `#03102B` navy — presentations, web, hero). Toggle dark by wrapping in `.core-dark`.

**Typography.** **Seravek** (humanist sans; macOS/iOS system font) is the brand face — one typeface, every weight. Web fallback **Hanken Grotesk** (see substitution flag below). Scale: H1 56 / H2 48 / H3 40 / H4 32 / H5 24; Body 16 reading standard; Caption 12. Italic is reserved for **quotes & testimonials**. Mono (**JetBrains Mono**, sub for SF Mono) is an accent for specs, hex codes, version stamps. Large headings use negative tracking (`--ls-display`).

**Spacing & layout.** 8px base grid (`--space-*`). Document width caps at ~900px; full sections at 1280px. Generous whitespace; lots of air around the premium pieces.

**Corner radii.** Soft and generous — 12px default cards/inputs, 16px large cards/logo plates, 20px hero & quote blocks, 100px pills/tags. Nothing sharp-cornered.

**Cards.**
- *Light mode:* white surface, **1px `#E0E0E0` hairline border**, 12–16px radius, subtle shadow (`--shadow-md`). The informal Brand Profile also uses a **4px colored left-border** accent on "pillar" cards — acceptable for internal/wayfinding contexts, but the refined register prefers full hairline borders + a small top accent bar instead.
- *Dark mode:* `rgba(255,255,255,0.02)` fill, `rgba(255,255,255,0.06)` border, hover lifts border toward blue (`rgba(0,73,229,0.25)`) and tints the fill.

**Borders & dividers.** Hairlines everywhere: `#E0E0E0` on light, `rgba(255,255,255,0.06)` on dark. Section dividers are full-width 1px rules. Eyebrow labels often precede a `24px × 1px` blue tick.

**Shadows & glows.** Light surfaces: soft neutral shadows (`--shadow-sm/md/lg`). Dark surfaces: **blue glow** auras (`--glow-blue`) — e.g. the hero brandmark uses `drop-shadow(0 0 60px rgba(0,73,229,0.3))`. No hard/black drop shadows on dark.

**Backgrounds.** Dark canvas uses layered **radial gradients** (blue ellipse top-center, faint green bottom-left) over `#0A0A0A`. Light uses flat white or `#F0F0F0`. No photographic textures, no noise/grain, no repeating patterns. Imagery, when present, is clean and corporate (see `assets/imagery/`).

**Transparency & blur.** Sticky nav on dark uses `backdrop-filter: blur(20px) saturate(1.4)` over `rgba(3,16,43,0.9)`. Accent tints use low-alpha fills (e.g. `rgba(0,73,229,0.06)` chips). Glass effects are reserved for fixed chrome (nav), not content cards.

**Animation & motion.** Restrained and premium. Standard ease `cubic-bezier(0.4,0,0.2,1)`; entrance ease-out `cubic-bezier(0.16,1,0.3,1)`. Durations 0.15s–0.3s. Hover = color/border shift + subtle fill tint (no bounce). The hero scroll-hint uses a slow 2.4s float. Smooth scroll on anchors. No springy/bouncy motion; no infinite decorative loops on content.

**Hover / press states.**
- *Buttons:* primary darkens blue (`bright → mid`); ghost/secondary tint the background with low-alpha blue.
- *Cards (dark):* border brightens toward blue, fill tints up.
- *Links:* muted → full-strength (`--n-300 → white` on dark; underline or color on light).
- *Press:* slight darken; no scale-down required, but a subtle `transform: translateY(1px)` is acceptable.

**Iconography.** See section 5.

---

## 5. Iconography

There is **no proprietary icon font or SVG icon set** in the provided materials. The codebase expresses small UI glyphs three ways:
- **Arrows** (`→`) for list bullets and "next step" affordances — the dominant motif in the refined system.
- **Check / cross** (`✓` / `✕`) for do/don't and success/error.
- **Section emoji** (🎯 📐 💰 🤝 🔍 🗺️ ⚙️ 🚀 📊) — **internal documents only**, as colorful wayfinding. Not for client-facing/premium work.

**Substitution (flagged):** For real product UI we adopt **[Lucide](https://lucide.dev)** (CDN) as the icon set — clean, consistent ~1.75px stroke, geometric-humanist, which matches Seravek and the refined v2.0 aesthetic. Components reference Lucide by name. **⚠️ If Core later adopts an official icon set, swap Lucide for it.**

**Brand glyph / logo as icon:** the **CO brandmark** (interlocking C+O, four colored arcs) is the favicon / avatar / app-icon. Files in `assets/logos/`:
- `Logo_brandmark_dark.svg` — full-color mark for **light** backgrounds (grey connectors dark).
- `Logo_brandmark_light.svg` — full-color mark for **dark** backgrounds (grey connectors light).
- `Logo_brandmark_mode.svg` — mark tuned for Brand-Blue backgrounds.
- `Logo_wordmark_dark.svg` / `Logo_wordmark_light.svg` — the **CORE** wordmark (neutral greys, no accent color) for formal/print/document headers.
- `co_brandmark.png` — raster fallback.
Value illustrations live in `assets/values/` (`Value 1–6.svg`); color/tone/type boards in `assets/brand/`; imagery in `assets/imagery/` (`Profile.png`, `Bienvenidos.png`).

**Logo rules:** never distort, recolor, or add effects to the CO mark; keep clear space ≥ the height of the "C" arc; wordmark min width 80px; don't stack mark + wordmark at equal weight. Logo SVGs render white-on-transparent for the light variants, so they only show on dark plates.

---

## 6. Repository index / manifest

**Foundations**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css` — CSS custom properties.
- `guidelines/*.card.html` — foundation specimen cards (Type, Colors, Spacing, Brand) shown in the Design System tab.

**Components** (`components/`) — reusable React primitives, namespace `window.CoreModernSolutionsDesignSystem_3e7ab2`:
- `core/Button`, `core/IconButton`, `core/Badge`, `core/Tag`, `core/Card`, `core/Avatar`
- `forms/Input`, `forms/Select`, `forms/Checkbox`
- `feedback/Callout`, `navigation/Tabs`, `data/StatCard`

**Templates** (`templates/`) — full starting points consuming projects can copy or follow:
- `marketing-site/` — dark premium brand/marketing site (React, composes DS components + contact modal).
- `proposal/` — light client proposal document with an interactive ROI plan builder.
- `pitch-deck/` — Core-branded 16:9 slide deck (`.dc.html`): title, agenda, content, ROI, quote, closing.

**Skill**
- `SKILL.md` — Agent-Skills-compatible entry for downloading & reusing this system.

---

## 7. Substitutions & open questions (please confirm)

- **Seravek → Hanken Grotesk** webfont substitution. Upload a licensed Seravek webfont to make it the true rendered face everywhere.
- **Icons → Lucide** (CDN). Confirm or provide an official set.
- **Primary logo undecided** — per `Core_Logo_System.md`, Sebastián has not finalized brandmark-only vs. wordmark as the primary. Components/kits default to the **CO brandmark** for digital and the **CORE wordmark** for documents.
- **`coremsgt/Core-Card`** GitHub repo not yet imported — connect GitHub to refine the `Card` primitive against the real source.

---

*Core Modern Solutions · Design System · Built from the Figma brand exports & Brand System v2.0 · admin@coremsgt.com*
