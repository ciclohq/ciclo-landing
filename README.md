# Ciclo — Landing

Marketing landing page for [Ciclo](https://ciclo.mx) — laundry & dry-cleaning delivery, run through one WhatsApp number. In-store order board, driver routing app, and win-back marketing for laundromats and dry cleaners in Mexico.

## Stack

- React 18 (UMD via CDN) + Babel Standalone — no build step
- Plain CSS with design tokens — no preprocessor
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
│   ├── favicon.svg
│   └── screens/             # product screenshots consumed by <Screen>; placeholder.svg is the fallback
├── src/
│   ├── i18n.jsx             # translations (es primary, en secondary)
│   ├── ui.jsx                # reusable primitives (Logo, Mono, LangToggle, Screen)
│   └── landing.jsx           # page composition (Nav, Hero, Arc, Included, Audience, DemoCTA, FAQ, CTA, Footer)
├── styles/
│   ├── tokens.css           # design tokens (colors, type, spacing, themes)
│   ├── base.css             # resets + body backdrop
│   ├── components.css       # shared atoms (.btn variants)
│   ├── landing.css          # landing-page sections
│   └── legal.css            # editorial layout for /legal/*
├── legal/
│   ├── terminos.html
│   ├── privacidad.html
│   └── lfpdppp.html
└── scripts/
    └── check-i18n.mjs       # verifies the es/en trees in src/i18n.jsx have identical key sets
```

Script load order matters — `i18n.jsx` populates `window.I18N`, `ui.jsx` populates `window.UI`, then `landing.jsx` consumes both.

## Adding a new section

1. Add copy keys for both `es` and `en` in `src/i18n.jsx`.
2. Add the React component to `src/landing.jsx` and mount it inside `<App />`.
3. Add styles to `styles/landing.css` (use existing tokens — don't introduce new colors).
4. Tag the section's outer `<section>` (or the footer) with `data-bg="cream|off|tint|navy"` so the scroll-driven nav background tracks it — the handler in `landing.jsx` reads every `[data-bg]` element.
5. Run `node scripts/check-i18n.mjs` before committing — it exits non-zero if the `es` and `en` key sets in `src/i18n.jsx` have drifted apart.

## Notes

- Legal pages are templates. **They need a Mexican lawyer review before going live.**
- `assets/screens/` is populated by a capture pipeline that lives in the sibling `ciclo` repo, not here — see that repo's README for how to regenerate screenshots. `<Screen>` (in `src/ui.jsx`) falls back to `assets/screens/placeholder.svg` if a capture is missing or fails to load.
