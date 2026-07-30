# Landing redesign — "the product is the pitch"

**Date:** 2026-07-30
**Status:** approved, ready for implementation planning

## Problem

Two separate failures, with one shared cause.

**The page undersells the product.** It advertises four modules — Tablero, Servicio a domicilio, Zonas de entrega, App de repartidores — against roughly ten that ship. Worse, it actively misinforms: `features.soon` labels WhatsApp ordering "PRÓXIMAMENTE" and the FAQ answers *"¿Ya puedo recibir pedidos por WhatsApp?"* with *"Está en desarrollo."* WhatsApp ordering is live. The page's strongest feature is presented as a thing that doesn't exist.

**The page reads as machine-generated.** Not because any single element is wrong, but because it stacks most of the 2024 generated-landing vocabulary at once:

- An ALL-CAPS mono eyebrow above all six sections (`Mono className="eyebrow"`).
- The same two-tone headline construction in every heading — `h_a` + `<span className="lighter">h_accent</span>` + `h_b`.
- `01/02/03` numbering in three unrelated components (`journey-num`, `module-card .num`, `feat-num`).
- A radial gradient bloom (`--bg-blobs`), cursor-follow tilt (`useTilt`), count-up statistics (`CountUp`), and an infinite marquee (`Ticker`).
- A floating "TWEAKS" panel offering forest/ocean themes and labelled "v 4.0" — reads as an unfinished demo, not a product site.

Taglines compound it. Every module resolves to the same 4–6 word beat: *"Tarifas de envío que tú decides." / "Dibuja hasta dónde llegas." / "Rutas claras, entregas a tiempo."* The rhythm is itself the tell.

The shared cause: the page is decorated like a landing page instead of looking like the software it sells.

## Approach

Rebuild around real product surfaces. Screenshots of the actual dashboard carry the argument; the page's job is to frame and caption them. Marketing ornament comes off.

Decisions taken during design:

| Question | Decision |
|---|---|
| Brand source of truth | The product app (`apps/web/src/app/globals.css`), used exactly rather than approximated |
| Dark mode | No — light only |
| Product screens | Real screenshots, not hand-built HTML mocks |
| Screenshot data | Seed synthetic data first, then capture |
| Google reviews | Not advertised — not ready |

## Feature inventory

Verified present in `ciclo` at time of writing. Confirmed sellable: WhatsApp ordering, the AI business assistant, and attendance. Google Business review sync exists (`modules/google-business`) but is **excluded** by decision.

| Feature | Evidence |
|---|---|
| Orders board, stages, POS, multi-branch | `dashboard/orders`, `components/pos/` |
| WhatsApp ordering + inbox + human handoff | `modules/whatsapp`, `modules/conversation`, `dashboard/conversations` |
| Delivery fee rules | `modules/delivery-fee` |
| Delivery zones | zone polygons, `settings` |
| Driver app + routes | `apps/mobile`, `modules/ruta`, `modules/driver` |
| Customer portal + order tracking | `app/portal/[token]`, `app/track/[token]` |
| Memberships + promotions | `settings/memberships-panel.tsx`, `settings/promotions-panel.tsx`, `modules/membership`, `modules/promotion` |
| Reports | `dashboard/reports`, `modules/reports` |
| AI business assistant | `dashboard/chat`, `modules/chat` |
| Attendance + schedules | `dashboard/attendance`, `modules/attendance` |

## Design system

Copy real values from `apps/web/src/app/globals.css`. The current tokens approximate the app; several drift.

**Corrections:**

- **Radius** — the app has one scale, `--radius: 0.625rem` (10px). Drop the invented `--radius-tile: 14px` and `--radius-button: 8px`.
- **Shadows** — adopt the app's `--shadow-xs/sm/md/lg` ramp verbatim. Delete `--shadow-postcard` and `--shadow-tile` (the latter's inset white highlight has no counterpart in the app).
- **Borders** — the app uses `oklch(0.87 0.01 258.34)`. The landing's `rgba(29,41,61,0.14)` is close but drifts visibly over the tint surfaces.
- **Surfaces** — background `#F8F8F8`, cards `#FFFFFF`, muted/sidebar `#F5F5F5`. Flat.
- **Type** — unchanged; Inter / Geist / JetBrains Mono already match.
- **Primary** — `#008F92` stays the lead. `--brand-soft #35BABC` is the app's `--ring`/`--sidebar-primary` and should be used only where the app uses it.

**Removed:** `--bg-blobs`, `[data-theme='forest']`, `[data-theme='ocean']`, and the unused `--glass-*` group.

**Deleted components:** `useTilt`, `CountUp`, `Ticker`, `TweaksPanel`, `HeroVisual`, `ModuleMock`. The tweaks panel's language toggle is replaced by a plain ES/EN control in the nav; the theme switcher goes entirely.

**Retained ornament:** `01`–`04` numbering in the narrative arc only, where the sequence carries real meaning. It comes out of the module cards and feature lists.

## Page structure

`HowItWorks` and `Modules` currently tell overlapping stories — one as four numbered steps, the other as four clickable cards. They merge into a single four-part arc, alternating text and screen:

| # | Section | Features carried | Screen |
|---|---|---|---|
| 01 | **Recibe** | WhatsApp bot, intent templates, human handoff | conversations inbox |
| 02 | **Opera** | order stages, POS, multi-branch, catalog | orders board + detail drawer |
| 03 | **Entrega** | fee rules, zones, driver routes, tracking link | driver route + customer track page |
| 04 | **Retiene** | memberships, promotions, reports, AI assistant | customer drawer + assistant panel |

Then:

- **Todo lo que incluye** — a dense two-column spec table. This carries the long tail without ten identical cards, and it is where attendance and schedules live, since they sit outside the delivery arc.
- **Audience** — retained as-is; short and effective.
- **Precios** — retained; custom pricing, demo CTA.
- **FAQ** — rewritten (below).
- **CTA + Footer** — retained, footer product links updated to the new anchors.

Eight sections become seven, carrying roughly two and a half times the feature coverage.

## Screenshots

**Seed first.** A seed script populates synthetic Mexican business and customer names with fabricated phone numbers. This is a publication-safety requirement, not a polish step: the dev DB contains the owner's real address `alex@meteorolabs.com`, the WhatsApp test number `13322073372`, and customer "Alejandro Torres". None of that may appear on a public page. It also fixes a quality problem — per project notes the dev DB has almost no terminal-status orders, so the board photographs sparse.

**Capture.** Playwright, already in the repo. Two constraints from project notes: the login page is at `/` (`/sign-in` 404s), and dashboard pages scroll inside the content slot, so `fullPage` clips — scroll with `mouse.wheel`. Capture at `deviceScaleFactor: 2`. The owner login (`alex.torres@klinko.mx`) was dev-reset in July and flagged "may change"; if stale, the user must run the reset — the password-reset script requires the user, not the agent.

**Two crops per section.** A wide dashboard scaled to a 375px viewport is illegible, so each section needs the full screen for desktop plus a tight detail crop for mobile — the stat row, a single order card, the fee-rule list. Roughly ten images total.

**Delivery.** WebP, 2x, target under 200 KB each. Served through a small `<Screen>` component: framed `<img>` with `srcset`, `loading="lazy"`, explicit `width`/`height` to prevent layout shift, and a meaningful `alt` describing the screen.

**Verification gate.** Every image is reviewed for real names, phone numbers, and email addresses before commit.

## Copy

**Register.** Vary sentence length. Drop taglines from some sections entirely rather than giving all four the same beat. Use concrete product values — `gratis desde $300`, `$12/km` — over abstractions.

**Hero headline.** Default to *"Tus clientes piden por WhatsApp. Tú solo entregas."* — it names the new capability and the owner's benefit in one breath, and its two-sentence asymmetry breaks the metronome the rest of the page suffers from. Alternates, if that reads too blunt: *"Recibe pedidos sin contestar el teléfono."* or *"Un número de WhatsApp. Toda tu operación detrás."*

**FAQ.** Delete *"¿Ya puedo recibir pedidos por WhatsApp?" → "Está en desarrollo."* Replace with questions the live product raises: what the bot handles versus when a human takes over, how memberships and promotions work, what attendance does, and whether customers can track their order. Retain the drivers, delivery-fee, and dry-cleaning questions — they're accurate and answer real objections.

**i18n.** Both `es` and `en` trees stay in sync. ES remains primary.

## Files

Real screenshots make this a net deletion.

**Removed:** `HeroVisual`, `ModuleMock` and their supporting CSS — roughly 400 lines out of `landing.css` (the `.mk-*`, `.app-*`, `.orow`, `.zrow` blocks) and ~200 lines out of `landing.jsx`. Plus `Ticker`, `CountUp`, `useTilt`, `TweaksPanel`.

**Added to `ciclo-landing`:** `assets/screens/` for the captured images, and a `<Screen>` primitive in `ui.jsx`. Nothing else.

**Added to `ciclo`:** the seed and capture scripts live in the product repo, not here — that is where the app, its database, and Playwright already are. `ciclo-landing` is a no-build static site with no `package.json`, and it must stay that way; adding a Node toolchain to it just to shoot screenshots would be the wrong trade. Only the resulting `.webp` files cross the repo boundary.

**Net:** `landing.jsx` drops from 623 lines to roughly 350; `landing.css` from 1088 to roughly 650. No new stylesheet or script tags — the CDN React + Babel stack is unchanged, and no build step is introduced.

## Out of scope

- Google Business reviews on the page.
- Dark mode.
- Legal page restyling (`legal/*.html` share tokens and inherit corrections automatically; layout untouched).
- Pricing changes — the `$399 / $899 MXN` benchmark noted in the README is not revisited here.

## Risks

| Risk | Mitigation |
|---|---|
| Real customer data reaches a public page | Seed synthetic data; per-image review before commit |
| Screenshots go stale as the app evolves | Capture script is committed and re-runnable |
| Dev credentials stale | User runs the password reset; agent cannot |
| Page weight from ten 2x images | WebP, lazy loading, per-image budget |
| Screenshots illegible on mobile | Per-section detail crops |
