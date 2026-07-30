# Landing Rebuild — "The Product Is The Pitch" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Ciclo landing page around real product screenshots so it advertises all ten shipping features and stops reading as machine-generated.

**Architecture:** The four-card `Modules` section and the four-step `HowItWorks` section merge into a single four-part narrative arc, each part pairing prose with a real screenshot. A dense spec table carries the feature long tail. Design tokens are corrected to the product app's exact values, and the marketing ornament is deleted.

**Tech Stack:** React 18 UMD via CDN, Babel Standalone, plain CSS with tokens. **No build step, and none is to be introduced.**

**Spec:** `docs/superpowers/specs/2026-07-30-landing-product-pitch-design.md`

**Companion plan:** `ciclo/docs/superpowers/plans/2026-07-30-demo-seed-and-capture.md` produces the screenshots. This plan builds against placeholders (Task 3) and can start before that one finishes.

## Global Constraints

- **No build step.** No `package.json`, no bundler, no preprocessor. Scripts load as classic `text/babel` scripts publishing to `window.*` in order: `i18n.jsx` → `ui.jsx` → `landing.jsx`.
- **No new colors.** Every value comes from `styles/tokens.css`, and those come from `apps/web/src/app/globals.css`.
- **Light mode only.** No dark mode, no `prefers-color-scheme` handling.
- **ES and EN stay in sync.** Every key added to `window.I18N.es` gets an `en` counterpart. ES is primary.
- **Do not advertise Google Business reviews.** It ships but is excluded by decision.
- **Serve locally with:** `python3 -m http.server 8765`, then open `http://127.0.0.1:8765/`.
- **Verification is visual plus a key-parity check.** This repo has no test framework and gains none. Every task ends with a browser check at 1440px and 390px with a clean console.

---

### Task 1: Correct the design tokens to the product app's real values

**Files:**
- Modify: `styles/tokens.css`
- Reference: `../ciclo/apps/web/src/app/globals.css`

**Interfaces:**
- Produces: corrected `--radius`, `--shadow-*`, `--border` custom properties consumed by every later task.

- [ ] **Step 1: Read the product's token block**

Open `../ciclo/apps/web/src/app/globals.css` and read `:root`. The values below are transcribed from it, but read it yourself — this file is the source of truth and it moves.

- [ ] **Step 2: Collapse the radius scale**

The app has one radius, `--radius: 0.625rem` (10px), with an xl at 14px. The landing invented `--radius-button: 8px` and `--radius-tile: 14px` with no counterpart. Replace all three declarations with:

```css
  /* Radius — the product app has a single scale: --radius 0.625rem (10px). */
  --radius:    10px;
  --radius-lg: 14px;
```

- [ ] **Step 3: Replace the shadow ramp**

Delete `--shadow-tile` (its inset white highlight exists nowhere in the app) and `--shadow-postcard`. Add the app's ramp, converted from `oklch(0 0 0 / a)` to `rgba(0,0,0,a)`:

```css
  /* Shadows — copied from the product app's ramp. */
  --shadow-xs: 0px 4px 8px -1px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0px 4px 8px -1px rgba(0, 0, 0, 0.10), 0px 1px 2px -2px rgba(0, 0, 0, 0.10);
  --shadow-md: 0px 4px 8px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10);
  --shadow-lg: 0px 4px 8px -1px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.10);
```

- [ ] **Step 4: Correct the hairline to the app's border color**

The app's `--border` is `oklch(0.87 0.01 258.34)` ≈ `#D6D9DF`. The landing's `rgba(29,41,61,0.14)` is close on cream but drifts visibly over the tint surface, because alpha composites against whatever is behind it.

```css
  --hairline:      #D6D9DF;
  --hairline-soft: #E4E7EC;
```

- [ ] **Step 5: Delete the ornament tokens and alternate themes**

Remove `--bg-blobs` entirely, along with the whole `--glass-*` group (already unused) and both `[data-theme='forest']` and `[data-theme='ocean']` blocks. The theme switcher that drove them is deleted in Task 2.

- [ ] **Step 6: Fix every reference the deletions broke**

```bash
grep -rn "shadow-tile\|shadow-postcard\|radius-tile\|radius-button\|bg-blobs\|--glass" styles/ src/
```

Expected after fixing: no matches. Each hit becomes the corresponding new token — tiles and cards both take `--radius`, buttons take `--radius`, raised surfaces take `--shadow-sm`.

- [ ] **Step 7: Verify in the browser**

Serve and load the page. The background is flat `#F8F8F8` with no gradient bloom. Cards have tighter corners and shallower shadows. Console is clean. The page will still look like the old design — that is expected; only the substrate changed.

- [ ] **Step 8: Commit**

```bash
git add styles/tokens.css styles/ src/
git commit -m "style: correct design tokens to the product app's exact values"
```

---

### Task 2: Delete the generated-landing ornament

This is the task that addresses "it looks too AI." Each deletion is individually defensible; the point is that stacking them is the tell.

**Files:**
- Modify: `src/landing.jsx`, `src/ui.jsx`, `src/i18n.jsx`, `styles/landing.css`

**Interfaces:**
- Produces: a `LangToggle` component in `window.UI`, replacing `TweaksPanel`.

- [ ] **Step 1: Delete the motion and novelty components**

From `src/landing.jsx` remove: `useTilt` (lines ~34-56), `CountUp` (~15-31), and `Ticker` (~188-202). Remove `<Ticker t={t} />` from `<App />`. Replace the two `<CountUp>` usages in the hero mock with their literal values — that mock is deleted wholesale in Task 4 anyway, so do not invest in it.

- [ ] **Step 2: Replace the tweaks panel with a plain language toggle**

Delete `TweaksPanel` from `src/ui.jsx`. A floating panel offering forest/ocean themes and labelled "v 4.0" reads as an unfinished demo rather than a product site. Replace with:

```jsx
  /* ---------- Language toggle — ES/EN, sits in the nav ---------- */

  const LangToggle = ({ lang, setLang }) => (
    <div className="lang-toggle" role="group" aria-label="Idioma">
      {['es', 'en'].map((l) => (
        <button
          key={l}
          className={lang === l ? 'is-active' : ''}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
```

Export `{ Logo, Mono, LangToggle }`. In `landing.jsx`, drop the `theme`/`tweaksOpen` state and the `document.documentElement.dataset.theme` effect, and render `<LangToggle>` inside `<Nav>`.

- [ ] **Step 3: Delete the dead i18n keys**

Remove the `tweaks` block from both `es` and `en` in `src/i18n.jsx`, and remove `hero.ticker` from both.

- [ ] **Step 4: Style the language toggle**

Add to `styles/landing.css`, using only existing tokens — a quiet segmented control, not a feature:

```css
.lang-toggle { display: inline-flex; border: 1px solid var(--hairline); border-radius: var(--radius); overflow: hidden; }
.lang-toggle button {
  font: 500 12px/1 var(--font-mono); letter-spacing: var(--tracking-mono);
  padding: 7px 10px; background: transparent; color: var(--body-muted);
  border: 0; cursor: pointer;
}
.lang-toggle button.is-active { background: var(--bright-white); color: var(--ink); }
```

- [ ] **Step 5: Remove the orphaned CSS**

```bash
grep -rn "ticker\|tweaks\|seg\b\|dot-mini" styles/landing.css
```

Delete each matched block. These rules have no remaining consumers.

- [ ] **Step 6: Verify**

Load the page. No marquee under the hero, no floating tweaks button, no tilt when the cursor moves over the hero, stats render as static numbers. The ES/EN toggle sits in the nav and switches language. Console clean.

- [ ] **Step 7: Commit**

```bash
git add src/ styles/
git commit -m "refactor: delete marquee, tilt, count-ups and the theme switcher"
```

---

### Task 3: Add the `<Screen>` primitive and placeholder images

Building against placeholders decouples this plan from the capture pipeline.

**Files:**
- Modify: `src/ui.jsx`, `styles/components.css`
- Create: `assets/screens/placeholder.svg`

**Interfaces:**
- Produces: `Screen` in `window.UI`, signature `<Screen slug alt width height caption? />`. Resolves `assets/screens/<slug>.webp` with a mobile crop at `assets/screens/<slug>-mobile.webp`.

- [ ] **Step 1: Create a placeholder**

An SVG at `assets/screens/placeholder.svg` — a `#F5F5F5` rectangle with a 1px `#D6D9DF` border and centered mono text reading "SCREEN PENDING". It must be visually obvious so an unswapped placeholder cannot ship unnoticed.

- [ ] **Step 2: Write the `Screen` component**

Explicit `width`/`height` prevent layout shift as images load. `<picture>` swaps to the mobile crop below 768px, because a 1440px dashboard scaled to a 390px viewport is illegible.

```jsx
  /* ---------- Screen — a real product screenshot, framed ---------- */

  const Screen = ({ slug, alt, width, height, caption }) => (
    <figure className="screen">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={`assets/screens/${slug}-mobile.webp`}
        />
        <img
          src={`assets/screens/${slug}.webp`}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onError={(e) => { e.currentTarget.src = 'assets/screens/placeholder.svg'; }}
        />
      </picture>
      {caption && <figcaption className="screen-cap">{caption}</figcaption>}
    </figure>
  );
```

The `onError` fallback means a missing capture degrades to a visible placeholder rather than a broken-image icon.

- [ ] **Step 3: Style it as product chrome, not a marketing mockup**

In `styles/components.css`:

```css
.screen { margin: 0; }
.screen img {
  display: block; width: 100%; height: auto;
  border: 1px solid var(--hairline);
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
  background: var(--bright-white);
}
.screen-cap {
  margin-top: 12px;
  font: 400 13px/1.5 var(--font-body);
  color: var(--body-muted);
}
```

No browser chrome, no floating tilt, no gradient glow behind it. The screenshot is evidence; framing it heavily undercuts that.

- [ ] **Step 4: Verify the fallback works**

Temporarily render `<Screen slug="does-not-exist" alt="test" width={1440} height={900} />` in the hero. Confirm the placeholder appears rather than a broken image, then remove the test render.

- [ ] **Step 5: Commit**

```bash
git add src/ui.jsx styles/components.css assets/screens/
git commit -m "feat: add Screen primitive with mobile crops and placeholder fallback"
```

---

### Task 4: Rebuild the hero around WhatsApp

The current hero sells a dashboard. The product's headline capability is now WhatsApp ordering, which the page currently calls "coming soon."

**Files:**
- Modify: `src/landing.jsx`, `src/i18n.jsx`, `styles/landing.css`

- [ ] **Step 1: Delete `HeroVisual`**

Remove the entire component (~lines 118-184) and its CSS — every `.app-*`, `.appbar*`, `.orow`, `.zrow`, `.chip` rule in `styles/landing.css` that exists only to fake the dashboard. That is roughly 250 lines. A real screenshot replaces all of it.

Keep `.chip` rules **only** if the spec table in Task 6 reuses them; otherwise delete.

- [ ] **Step 2: Rewrite the hero copy**

In `src/i18n.jsx`, replace the `hero` block's headline keys. The spec's default:

```js
    hero: {
      badge: 'Para lavanderías y tintorerías',
      h1: 'Tus clientes piden por WhatsApp. Tú solo entregas.',
      sub: 'Ciclo recibe el pedido, lo cobra y lo pone en tu tablero. Tú y tu equipo solo lavan, planchan y entregan.',
      cta_primary: 'Agenda una demo',
      cta_ghost: 'Ver cómo funciona',
      trust: 'Sin contratos largos · Configuramos tu operación en la demo',
    },
```

Note `h1` is now a **single string**, not the `h1_a` + `h1_accent` split. That two-tone construction appears in all six headings today and is one of the strongest generated-page tells. Delete the `.lighter` span from the hero markup.

EN counterpart: `'Your customers order on WhatsApp. You just deliver.'`

- [ ] **Step 3: Render the hero with a screenshot**

Replace `<HeroVisual />` with the conversations screen:

```jsx
        <Screen
          slug="recibe"
          alt="Bandeja de conversaciones de WhatsApp en Ciclo, con un pedido entrante"
          width={1440}
          height={900}
        />
```

- [ ] **Step 4: Verify**

At 1440px the hero shows the headline, two CTAs and the screenshot. At 390px the mobile crop is used and text stays legible. Console clean. No console warning about missing image dimensions.

- [ ] **Step 5: Commit**

```bash
git add src/ styles/
git commit -m "feat: rebuild the hero around WhatsApp ordering with a real screen"
```

---

### Task 5: Replace HowItWorks and Modules with the four-part arc

These two sections currently tell overlapping stories — four numbered steps, then four clickable cards. They become one arc.

**Files:**
- Modify: `src/landing.jsx`, `src/i18n.jsx`, `styles/landing.css`

**Interfaces:**
- Consumes: `Screen` from Task 3.
- Produces: an `Arc` component replacing both `HowItWorks` and `Modules`.

- [ ] **Step 1: Delete `HowItWorks`, `Modules` and `ModuleMock`**

Remove all three components and their CSS — `.journey*`, `.module-*`, `.mk-*`, `.rrow`, `.sw`, `.soon-strip`. Remove `<HowItWorks>` and `<Modules>` from `<App />`.

- [ ] **Step 2: Write the arc content**

Four parts, each carrying the features the spec assigns it. Vary the sentence lengths deliberately — the current copy's uniform 4-6 word taglines are part of what reads as generated. Give at least one part no tagline at all.

```js
    arc: {
      parts: [
        {
          num: '01',
          name: 'Recibe',
          body: 'Tus clientes escriben al mismo número de siempre. El bot entiende qué necesitan, arma el pedido y lo cobra. Cuando algo se sale del guion, la conversación pasa a una persona de tu equipo sin que el cliente lo note.',
          feats: ['Pedidos por WhatsApp', 'Respuestas automáticas', 'Transferencia a un humano'],
          screen: 'recibe',
          alt: 'Bandeja de conversaciones con un pedido tomado por el bot',
        },
        {
          num: '02',
          name: 'Opera',
          body: 'Cada orden entra al tablero con su cliente, sus prendas y su etapa. Recolección, proceso, entrega. Tu mostrador levanta órdenes desde el punto de venta y, si tienes varias sucursales, cambias entre ellas en un clic.',
          feats: ['Tablero por etapas', 'Punto de venta', 'Multi-sucursal', 'Catálogo y precios'],
          screen: 'opera',
          alt: 'Tablero de órdenes con el detalle de una orden abierto',
        },
        {
          num: '03',
          name: 'Entrega',
          body: 'Dibujas tus zonas sobre el mapa y defines qué cobras: gratis desde $300, $12 por kilómetro, o una tarifa fija. Tus repartidores ven la ruta del día en su teléfono, y tu cliente sigue su pedido desde un link.',
          feats: ['Zonas en el mapa', 'Reglas de tarifa', 'App de repartidores', 'Seguimiento para el cliente'],
          screen: 'entrega-zonas',
          alt: 'Zonas de entrega dibujadas sobre el mapa junto a las reglas de tarifa',
        },
        {
          num: '04',
          name: 'Retiene',
          body: 'Membresías, promociones y el historial de cada cliente en un solo lugar — y un asistente al que le preguntas cómo va el negocio en español, sin armar un reporte.',
          feats: ['Membresías', 'Promociones', 'Reportes', 'Asistente con IA'],
          screen: 'retiene',
          alt: 'Ficha de cliente con su membresía activa y su historial de órdenes',
        },
      ],
    },
```

Write the EN counterpart with the same structure. Translate the *meaning*, not word-for-word — `$300` and `$12/km` stay as-is since they are product values.

- [ ] **Step 3: Write the `Arc` component**

Alternating sides. The `01`–`04` numbering survives here and **only** here, where sequence carries real meaning:

```jsx
  const Arc = ({ t }) => (
    <section id="how" className="section surface-cream-bg" data-bg="cream">
      <div className="container">
        {t.arc.parts.map((p, i) => (
          <article key={i} className={`arc-part ${i % 2 ? 'is-flipped' : ''}`}>
            <div className="arc-text">
              <span className="arc-num">{p.num}</span>
              <h2 className="arc-name">{p.name}</h2>
              <p className="arc-body">{p.body}</p>
              <ul className="arc-feats">
                {p.feats.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
            </div>
            <div className="arc-screen">
              <Screen slug={p.screen} alt={p.alt} width={1440} height={900} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
```

- [ ] **Step 4: Style the arc**

Two-column at desktop, stacked at mobile with the screen always following its text. Use `order` on `.is-flipped .arc-text` for the alternation rather than duplicating markup, and reset it inside the mobile breakpoint so reading order stays text-then-screen on every part.

- [ ] **Step 5: Verify**

Four parts alternate sides at 1440px. At 390px they stack, and every part reads text-then-screen — confirm the flipped parts did not invert on mobile. Console clean.

- [ ] **Step 6: Commit**

```bash
git add src/ styles/
git commit -m "feat: replace HowItWorks and Modules with the four-part narrative arc"
```

---

### Task 6: Add the "Todo lo que incluye" spec table

This is what carries ten features without ten identical cards.

**Files:**
- Modify: `src/landing.jsx`, `src/i18n.jsx`, `styles/landing.css`

- [ ] **Step 1: Write the table content**

Six rows. Attendance lives here because it sits outside the delivery arc. Google reviews is **absent by decision** — do not add it.

```js
    included: {
      h: 'Todo lo que incluye',
      sub: 'Sin módulos que se cobran aparte.',
      rows: [
        { k: 'Órdenes',    v: 'Tablero por etapas · punto de venta · multi-sucursal · catálogo y precios · historial por orden' },
        { k: 'WhatsApp',   v: 'Pedidos automáticos · respuestas por plantilla · transferencia a un humano · bandeja de conversaciones' },
        { k: 'A domicilio',v: 'Zonas en el mapa · reglas de tarifa por monto, distancia o kilómetro · rutas · app de repartidores' },
        { k: 'Clientes',   v: 'Membresías · promociones y tarjetas de sellos · seguimiento por link · calificaciones' },
        { k: 'Personal',   v: 'Asistencia con PIN · horarios por sucursal · resumen diario' },
        { k: 'Reportes',   v: 'Ventas · clientes · comentarios · asistente con IA' },
      ],
    },
```

Add the EN counterpart.

- [ ] **Step 2: Write the component**

A definition list, not a card grid — the point is density:

```jsx
  const Included = ({ t }) => (
    <section id="incluye" className="section surface-white-bg" data-bg="off">
      <div className="container">
        <h2 className="h2">{t.included.h}</h2>
        <p className="lede">{t.included.sub}</p>
        <dl className="spec">
          {t.included.rows.map((r, i) => (
            <div key={i} className="spec-row">
              <dt>{r.k}</dt>
              <dd>{r.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
```

- [ ] **Step 3: Style it**

Rows separated by `1px solid var(--hairline-soft)`. `dt` in the mono face, small and uppercase; `dd` in the body face. Two columns at desktop (roughly 180px / rest), stacked at mobile. **This is the only place an uppercase mono label survives** — it was on every section heading before, which is why it read as templated.

- [ ] **Step 4: Mount it after `<Arc>` in `<App />` and verify**

Six rows render, dense and scannable. No card borders. Legible at 390px. Console clean.

- [ ] **Step 5: Commit**

```bash
git add src/ styles/
git commit -m "feat: add the 'todo lo que incluye' spec table"
```

---

### Task 7: Rewrite the FAQ and remaining section copy

**Files:**
- Modify: `src/i18n.jsx`, `src/landing.jsx`

- [ ] **Step 1: Delete the false WhatsApp answer**

The FAQ currently answers *"¿Ya puedo recibir pedidos por WhatsApp?"* with *"Está en desarrollo."* WhatsApp ordering is live. This is the single most damaging line on the page — it talks prospects out of the strongest feature. Remove the question entirely and remove the `features.soon` "PRÓXIMAMENTE" block if Task 5 has not already.

- [ ] **Step 2: Write FAQ entries the live product raises**

Keep the three accurate ones — own drivers, delivery fee flexibility, dry cleaning. Add:

- What the bot handles on its own versus when a person takes over.
- Whether the customer can follow their order (yes — a tracking link).
- What memberships and promotions can do.
- What attendance covers.

Answer plainly. Do not claim capabilities beyond what Task 6's table lists.

- [ ] **Step 3: Strip the two-tone headline splits everywhere they remain**

```bash
grep -rn "h_accent\|h_a:\|h_b:\|h_em\|lighter" src/
```

Every remaining hit is the `h_a` + `<span className="lighter">` construction. Collapse each to a single string key and delete the span from its component. This affects `audience`, `demo`, `faq` and `cta_block`.

- [ ] **Step 4: Remove the mono eyebrow from every section but the spec table**

```bash
grep -rn 'className="eyebrow"' src/landing.jsx
```

Delete each `<Mono className="eyebrow">` and its i18n key. An eyebrow above all six sections is a template signature; the page keeps its section rhythm through headline and spacing instead.

- [ ] **Step 5: Verify ES/EN key parity**

Write `scripts/check-i18n.mjs` — zero dependencies, so it runs on bare `node` without adding a toolchain to this repo:

```js
/* Verifies window.I18N.es and .en have identical key shapes. Run: node scripts/check-i18n.mjs */
import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/i18n.jsx', import.meta.url), 'utf8');
const window = {};
new Function('window', src.replace(/^\/\*[\s\S]*?\*\//, ''))(window);

const paths = (o, p = '') =>
  o && typeof o === 'object' && !Array.isArray(o)
    ? Object.entries(o).flatMap(([k, v]) => paths(v, p ? `${p}.${k}` : k))
    : [p];

const es = new Set(paths(window.I18N.es));
const en = new Set(paths(window.I18N.en));
const missingEn = [...es].filter((k) => !en.has(k));
const missingEs = [...en].filter((k) => !es.has(k));

if (missingEn.length || missingEs.length) {
  if (missingEn.length) console.error('Missing in EN:\n  ' + missingEn.join('\n  '));
  if (missingEs.length) console.error('Missing in ES:\n  ' + missingEs.join('\n  '));
  process.exit(1);
}
console.log(`i18n OK — ${es.size} keys in both locales`);
```

- [ ] **Step 6: Run it and confirm it catches a real break**

```bash
node scripts/check-i18n.mjs
```

Expected: `i18n OK — N keys in both locales`.

Then temporarily delete one key from the `en` tree, re-run, and confirm it exits non-zero naming that key. Restore the key. A check that has never failed is not known to work.

- [ ] **Step 7: Commit**

```bash
git add src/i18n.jsx src/landing.jsx scripts/check-i18n.mjs
git commit -m "content: rewrite FAQ, drop the false WhatsApp answer, strip headline splits"
```

---

### Task 8: Update navigation, footer, metadata and sweep dead CSS

**Files:**
- Modify: `src/landing.jsx`, `src/i18n.jsx`, `index.html`, `styles/landing.css`, `README.md`

- [ ] **Step 1: Repoint nav and footer anchors**

`#modules` no longer exists. Nav becomes: Cómo funciona (`#how`), Qué incluye (`#incluye`), Precios (`#pricing`), FAQ (`#faq`). Repoint all four footer product links, which currently all target the dead `#modules`.

- [ ] **Step 2: Update `index.html` metadata**

The `<title>` and `<meta name="description">` still describe the old positioning and omit WhatsApp ordering. Rewrite both to match the new hero. Confirm `theme-color` is `#F8F8F8`.

- [ ] **Step 3: Confirm the `data-bg` nav tracking still works**

Every section needs a `data-bg` attribute for the scroll-driven nav background. Sections were added and removed, so re-verify:

```bash
grep -n 'data-bg' src/landing.jsx
```

Every top-level `<section>` and the footer should appear. Scroll the page and confirm the nav background tracks without flashing at boundaries.

- [ ] **Step 4: Sweep dead CSS**

`styles/landing.css` started at 1088 lines and should now be roughly 650. For each remaining selector, confirm a consumer exists:

```bash
for c in $(grep -o '^\.[a-z0-9-]*' styles/landing.css | sort -u | tr -d '.'); do
  grep -rq "$c" src/ || echo "ORPHAN: .$c"
done
```

Delete every reported orphan, checking each against `legal/*.html` first — those pages share `tokens.css` and `components.css` but not `landing.css`, so a match there means keep.

- [ ] **Step 5: Update the README**

`README.md` documents the old structure — it lists `Nav, Hero, Modules, Integrations, Pricing, FAQ, CTA, Footer` and describes a `TweaksPanel` that no longer exists. Rewrite the project-layout and "adding a new section" sections. Add a line documenting `node scripts/check-i18n.mjs`, and one pointing at `assets/screens/README.md` for how screenshots are regenerated.

Remove the now-false claim that brand logos come from the Iconify CDN if the integrations grid is gone.

- [ ] **Step 6: Full verification pass**

- Load at 1440px, 1024px, 768px and 390px. No horizontal scroll at any width.
- Console clean at every width.
- Every nav and footer link resolves to a section that exists.
- ES/EN toggle switches all copy with no missing-key crashes.
- `node scripts/check-i18n.mjs` passes.
- Every `<Screen>` shows either a real capture or the visible placeholder — never a broken image.
- Legal pages at `/legal/terminos.html` still render correctly, having inherited the Task 1 token changes.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: repoint anchors, refresh metadata and README, sweep dead CSS"
```

---

## Self-Review

**Spec coverage.** Token corrections (radius, shadow, border, surfaces) → Task 1. Deleted ornament — blob, tilt, count-ups, marquee, tweaks panel, forest/ocean → Tasks 1-2. `<Screen>` primitive with mobile crops → Task 3. Hero rebuilt on WhatsApp → Task 4. HowItWorks + Modules merged into the four-part arc → Task 5. Spec table carrying the long tail including attendance → Task 6. FAQ surgery and the removal of the false WhatsApp answer → Task 7. Copy register — varied sentence length, concrete `$300`/`$12/km` → Tasks 4-5. Numbering surviving only in the arc → Task 5. Eyebrow surviving only in the spec table → Tasks 6-7. Google reviews excluded → stated in Global Constraints and Task 6. Light-only → Global Constraints. ES/EN parity → Task 7. Legal pages inheriting tokens untouched → Task 8 verification.

**Type consistency.** `Screen` is defined once in Task 3 with the signature `{ slug, alt, width, height, caption? }` and used with exactly those props in Tasks 4 and 5. `LangToggle` is defined in Task 2 and consumed by `Nav` in the same task. The i18n key `arc.parts[].screen` holds the same slug strings the capture plan writes as filenames — `recibe`, `opera`, `entrega-zonas`, `entrega-ruta`, `retiene`.

**Known softness.** This repo has no test framework and gains none, per the no-build constraint. Verification is therefore visual plus the i18n parity check, which is the one thing here that is genuinely automatable. Task 7 Step 6 deliberately breaks that check to prove it works, since an assertion that has never failed is not evidence of anything.

**Cross-plan dependency.** `entrega-ruta` is captured by the companion plan but is not consumed by any task here — the arc's "Entrega" part uses `entrega-zonas`. Either drop it from the capture shot list or add it as a second screen in that part. Flagging rather than silently resolving, since it is a content judgment.
