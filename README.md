# Ciclo — Landing

Marketing landing page for [Ciclo](https://ciclo.mx) — the operating system for laundromats and dry cleaners in LatAm. Punto de venta, órdenes, rutas, pagos y CFDI 4.0 en una sola plataforma.

## Stack

- React 18 (UMD via CDN) + Babel Standalone — no build step
- Plain CSS with design tokens — no preprocessor
- Iconify CDN for brand logos in the integrations grid
- Static HTML legal pages share the same design system

## Run locally

```bash
python3 -m http.server 8765
```

Then open <http://127.0.0.1:8765/>.

## Project layout

```
ciclo-landing/
├── index.html              # entry — loads tokens → base → components → landing
├── assets/
│   └── favicon.svg
├── src/
│   ├── i18n.jsx            # translations (es primary, en secondary)
│   ├── ui.jsx              # reusable primitives (Logo, Mono, TweaksPanel)
│   └── landing.jsx         # page composition (Nav, Hero, Modules, Integrations, Pricing, FAQ, CTA, Footer)
├── styles/
│   ├── tokens.css          # design tokens (colors, type, spacing, themes)
│   ├── base.css            # resets + body backdrop
│   ├── components.css      # shared atoms (.btn variants)
│   ├── landing.css         # landing-page sections
│   └── legal.css           # editorial layout for /legal/*
└── legal/
    ├── terminos.html
    ├── privacidad.html
    └── lfpdppp.html
```

Script load order matters — `i18n.jsx` populates `window.I18N`, `ui.jsx` populates `window.UI`, then `landing.jsx` consumes both.

## Adding a new section

1. Add copy keys for both `es` and `en` in `src/i18n.jsx`.
2. Add the React component to `src/landing.jsx` and mount it inside `<App />`.
3. Add styles to `styles/landing.css` (use existing tokens — don't introduce new colors).
4. Tag the section's outer element with `data-bg="cream|off|tint|navy"` so the nav background tracks it on scroll.

## Notes

- Legal pages are templates. **They need a Mexican lawyer review before going live.**
- The price points (`$399 / $899 MXN`) benchmark against Pulpos and Lavayya — revisit when those move.
- Brand logos in `Integrations` use the public Iconify CDN; brands not in SimpleIcons (BBVA, OXXO, SAT) fall back to inline SVG marks defined in `landing.jsx`.
