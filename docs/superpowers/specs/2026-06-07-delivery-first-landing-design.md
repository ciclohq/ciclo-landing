# Ciclo landing — delivery-first redesign

**Date:** 2026-06-07
**Status:** Approved design, ready for implementation plan

## Goal

Replace the current broad "operating system for laundromats" landing page with a
focused **delivery-first** story. Ciclo gives a brand one WhatsApp number through which
customers place and manage orders, plus three supporting modules: an in-store web order
board, a driver routing web app, and a win-back marketing module. Target audience is both
**lavanderías (laundromats)** and **tintorerías (dry cleaners)**.

## Decisions (locked)

- **Conversion goal:** Book a demo. Every primary CTA is *Agenda una demo* (mailto, as today:
  `hola@ciclo.mx` / `ventas@ciclo.mx`).
- **Pricing:** No public tiers. The Pricing grid is replaced by a single contact/demo block.
- **Integrations:** The Integrations section (payments + SAT/CFDI 4.0 timbrado) is removed.
- **Language:** Spanish primary with the existing EN toggle. All copy authored in both `es` and `en`.
- **Narrative angle:** The order journey — the four pieces are stages of one continuous loop.
- **Hero visual:** Direction B — a real delivery photo with a floating WhatsApp chat card overlaid.

## Brand / palette / stack (unchanged)

- Cool-white / stone backgrounds (`--paper-cream #F0F2F5`, `--off-white #F8FAFC`) with sky-blue
  accents (`--brand #3B82F6`, `--brand-deep #1F5FCF`) and charcoal ink (`--ink #18181B`).
  The white-with-blue request is already the brand palette — **no token changes needed**.
- React 18 (UMD via CDN) + Babel Standalone, no build step. Plain CSS with the existing token system.
- Script load order preserved: `i18n.jsx` → `ui.jsx` → `landing.jsx`.
- The `data-bg` nav-background tracking on scroll and the `TweaksPanel` dev tool stay.

## Section flow

1. **Nav** — Logo · links (Cómo funciona, Producto, Precios, FAQ) · CTA *Agenda una demo*.
   Login link may stay or be dropped (see Open items).
2. **Hero** (`data-bg="cream"`) — Direction B.
   - H1: *"Tu lavandería y tintorería, a domicilio."* (with the second clause in the lighter accent style).
   - Sub: *"Un solo número de WhatsApp para recibir, cobrar y entregar cada orden."*
   - CTAs: *Agenda una demo* (primary, ink) / *Cómo funciona* (ghost).
   - Visual: delivery photo (reuse the existing Unsplash delivery image) with a small floating
     WhatsApp chat card overlay.
3. **Cómo funciona** — the order-journey strip, four connected numbered steps (scannable overview):
   - `01` Cliente escribe por WhatsApp
   - `02` La tienda gestiona la orden
   - `03` El repartidor sigue su ruta
   - `04` Marketing los trae de vuelta
4. **Producto** — interactive card+detail panel (reuse the current `Modules` component pattern:
   clickable cards row + detail panel + per-module photo). The four pieces, mapped to the journey:
   - **WhatsApp** — *Un número, todas tus órdenes.* Customers chat to place orders; quotes, status
     updates, and payment confirmations all flow through one number.
   - **Tablero en tienda** — *Toda la operación en una pantalla.* Web board to track every order by
     status (nueva, en ruta, lista, entregada) from the counter.
   - **App de repartidores** — *Rutas claras, entregas a tiempo.* Driver web app with the day's stops,
     route order, and pickup/delivery confirmation.
   - **Marketing** — *Recupera a los clientes que dejaron de venir.* Win-back campaigns, promotions,
     and messages to lapsed clients.
   - Each module keeps a short feature list (~3 items) in the detail panel, rewritten for delivery.
5. **Para quién** — short dual block establishing it serves both lavanderías and tintorerías
   (different needs, one system).
6. **Precios → demo** — single *Agenda una demo* block replacing the tiered pricing grid. No price points.
7. **FAQ** — rewritten for delivery. Candidate questions:
   - ¿Necesito repartidores propios?
   - ¿Cómo pagan los clientes?
   - ¿Funciona para tintorería y no solo lavandería?
   - ¿Qué necesito para empezar?
   - ¿El número de WhatsApp es mío o de Ciclo?
8. **CTA closer + Footer** — final *Agenda una demo* push; footer links/legal/language toggle.
   Remove footer links that point to the removed Integrations/Pricing-tier content.

## Removed

- Integrations section component + its inline SVG brand marks and Iconify usage (payments, SAT/CFDI).
- Tiered Pricing grid (the `$399 / $899 MXN` plans).
- POS / multi-branch / CFDI-centric module copy.

## Files touched

- `src/i18n.jsx` — rewrite all copy keys for both `es` and `en`; add keys for the new
  HowItWorks, Audience, and DemoCTA sections; remove integrations/pricing-tier keys.
- `src/landing.jsx` — remove `Integrations` and tiered `Pricing` components; rewrite `Hero`
  (photo + chat overlay) and `Modules` (journey content); add `HowItWorks`, `Audience`, and
  `DemoCTA` components; update `App` composition and the nav links; keep `data-bg` ordering coherent.
- `styles/landing.css` — styles for the journey strip, audience dual block, demo block, and the
  hero chat-card overlay; remove now-unused integrations/pricing-grid styles.
- `index.html` — update `<title>` and `<meta name="description">` for the delivery positioning.
- `README.md` — update positioning line and the "Adding a new section" / notes references that
  mention pricing benchmarks and integrations.
- `src/ui.jsx` — unchanged unless a new shared primitive is needed.
- `legal/*` — untouched.

## Open items (decide during implementation, sensible defaults noted)

- **Nav login link:** keep the existing *Iniciar sesión* ghost link (default: keep).
- **Module photos:** reuse existing Unsplash images, desaturated + tinted per current CSS treatment.
- **Audience block depth:** a compact two-column block (laundromats / dry cleaners), not a full section
  with photos — keep it light (default).

## Out of scope

- No backend, forms, or real WhatsApp integration — CTAs remain mailto links as today.
- No new fonts or color tokens.
- No changes to legal pages.
