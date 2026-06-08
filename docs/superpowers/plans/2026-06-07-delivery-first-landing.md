# Delivery-First Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the broad "operating system for laundromats" landing page with a focused delivery-first story built around the order journey: one WhatsApp number, an in-store order board, a driver routing app, and a win-back marketing module — serving both laundromats and dry cleaners.

**Architecture:** Same stack and design system as today — React 18 (UMD) + Babel Standalone, no build step; plain CSS with the existing token system; Spanish-primary with EN toggle. Work proceeds section by section: each task updates the `es` + `en` copy in `src/i18n.jsx`, the matching component in `src/landing.jsx`, and any styles in `styles/landing.css` together, so the page renders after every commit. The cool-white + sky-blue palette is already the brand and needs no token changes.

**Tech Stack:** React 18 UMD, Babel Standalone, vanilla CSS (design tokens), static hosting via `python3 -m http.server`.

---

## Verification method (read once, applies to every task)

There is no automated test runner — this is a static, browser-compiled React page. Verification is **load the page and look**, plus static greps.

**Start the local server once (leave it running across tasks):**

```bash
python3 -m http.server 8765 >/tmp/ciclo-server.log 2>&1 &
```

**Each task's verify step means:**
1. Confirm the page still serves: `curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8765/` → expect `200`.
2. Open `http://127.0.0.1:8765/` in a browser. Because Babel compiles JSX in-browser, a JSX/JS syntax error shows as a **blank page** with a red error in the DevTools Console. The gate is: page renders **and the Console has zero errors**.
3. Toggle ES/EN via the floating Tweaks panel (bottom-right) and confirm the section under test renders in both languages.

If a step in this plan changes JSX, a blank page after reload almost always means an unbalanced brace/paren/tag in that edit — re-read the edited block before trying anything else.

---

## Task 1: Global meta + Nav

Repositions the page title/description and rewrites the nav (links + demo CTA). The nav gains a `how` and `faq` i18n key and points at the new `#how` anchor.

**Files:**
- Modify: `index.html` (lines 7-8: `<title>` + `<meta name="description">`)
- Modify: `src/i18n.jsx` (the two `nav:` objects — es ~line 10, en ~line 253)
- Modify: `src/landing.jsx` (the `Nav` component, lines 13-29)
- Modify: `README.md` (positioning line, line 3)

- [ ] **Step 1: Update the document title and description**

In `index.html`, replace the `<title>` and `<meta name="description">` lines:

```html
  <title>Ciclo — Tu lavandería y tintorería, a domicilio</title>
  <meta name="description" content="Un solo número de WhatsApp para recibir, cobrar y entregar cada orden. Tablero en tienda, app de repartidores y marketing para lavanderías y tintorerías en México." />
```

- [ ] **Step 2: Rewrite the Spanish `nav` object**

In `src/i18n.jsx`, replace the `es` → `nav` object:

```js
    nav: {
      product: 'Producto',
      how:     'Cómo funciona',
      pricing: 'Precios',
      faq:     'FAQ',
      login:   'Acceder',
      cta:     'Agenda una demo',
    },
```

- [ ] **Step 3: Rewrite the English `nav` object**

In `src/i18n.jsx`, replace the `en` → `nav` object:

```js
    nav: { product: 'Product', how: 'How it works', pricing: 'Pricing', faq: 'FAQ', login: 'Sign in', cta: 'Book a demo' },
```

- [ ] **Step 4: Rewrite the Nav component**

In `src/landing.jsx`, replace the entire `Nav` component (lines 13-29):

```jsx
  const Nav = ({ t, navBg }) => (
    <nav className={`nav nav-bg-${navBg}`}>
      <div className="nav-row">
        <a href="#" aria-label="Ciclo"><Logo /></a>
        <div className="nav-links">
          <a href="#how">{t.nav.how}</a>
          <a href="#modules">{t.nav.product}</a>
          <a href="#pricing">{t.nav.pricing}</a>
          <a href="#faq">{t.nav.faq}</a>
        </div>
        <div className="nav-cta">
          <a href="#" className="btn btn-ghost" style={{ height: 40, padding: '0 16px', fontSize: 14 }}>{t.nav.login}</a>
          <a href="mailto:hola@ciclo.mx?subject=Demo%20Ciclo" className="btn btn-ink btn-arrow" style={{ height: 40, padding: '0 16px', fontSize: 14 }}>{t.nav.cta}</a>
        </div>
      </div>
    </nav>
  );
```

- [ ] **Step 5: Update the README positioning line**

In `README.md`, replace line 3:

```markdown
Marketing landing page for [Ciclo](https://ciclo.mx) — laundry & dry-cleaning delivery, run through one WhatsApp number. In-store order board, driver routing app, and win-back marketing for laundromats and dry cleaners in Mexico.
```

- [ ] **Step 6: Verify**

Reload `http://127.0.0.1:8765/`. Confirm: page renders, no Console errors, nav shows **Cómo funciona · Producto · Precios · FAQ** and the **Agenda una demo** button opens a mailto. Toggle EN → nav shows **How it works · Product · Pricing · FAQ**. (The `#how` anchor won't scroll anywhere yet — that section arrives in Task 3.)

- [ ] **Step 7: Commit**

```bash
git add index.html src/i18n.jsx src/landing.jsx README.md
git commit -m "Reposition meta + nav for delivery-first landing"
```

---

## Task 2: Hero (photo + floating WhatsApp chat)

Hero direction B: keep the existing desaturated/cobalt-tinted photo treatment, add a floating WhatsApp chat card overlay, and rewrite the headline. Hero keys collapse from `h1_a/h1_b/h1_accent/h1_c` to `h1_a/h1_accent` plus a new `eyebrow`.

**Files:**
- Modify: `src/i18n.jsx` (the two `hero:` objects — es ~line 18, en ~line 255)
- Modify: `src/landing.jsx` (`Hero` component lines 33-53 and `HeroPhoto` component lines 55-65)
- Modify: `styles/landing.css` (add hero-chat styles after the `.hero-photo` block, ~line 194)

- [ ] **Step 1: Rewrite the Spanish `hero` object**

In `src/i18n.jsx`, replace the `es` → `hero` object:

```js
    hero: {
      eyebrow: 'A DOMICILIO · WHATSAPP',
      h1_a: 'Tu lavandería y tintorería,',
      h1_accent: ' a domicilio.',
      sub: 'Un solo número de WhatsApp para recibir, cobrar y entregar cada orden.',
      cta_primary: 'Agenda una demo',
      cta_ghost:   'Cómo funciona',
    },
```

- [ ] **Step 2: Rewrite the English `hero` object**

In `src/i18n.jsx`, replace the `en` → `hero` object:

```js
    hero: {
      eyebrow: 'DELIVERY · WHATSAPP',
      h1_a: 'Your laundromat and dry cleaner,',
      h1_accent: ' delivered.',
      sub: 'One WhatsApp number to take, charge, and deliver every order.',
      cta_primary: 'Book a demo',
      cta_ghost:   'How it works',
    },
```

- [ ] **Step 3: Rewrite the Hero component**

In `src/landing.jsx`, replace the `Hero` component (lines 33-53):

```jsx
  const Hero = ({ t }) => (
    <section className="hero" data-bg="cream">
      <div className="container">
        <div className="hero-inner">
          <div>
            <Mono className="eyebrow">{t.hero.eyebrow}</Mono>
            <h1 className="h1">
              {t.hero.h1_a}
              <span className="lighter">{t.hero.h1_accent}</span>
            </h1>
            <p className="lede">{t.hero.sub}</p>
            <div className="hero-actions">
              <a href="#pricing" className="btn btn-ink btn-arrow">{t.hero.cta_primary}</a>
              <a href="#how" className="btn btn-ghost">{t.hero.cta_ghost}</a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
```

- [ ] **Step 4: Replace HeroPhoto with HeroVisual**

In `src/landing.jsx`, replace the `HeroPhoto` component (lines 55-65) with `HeroVisual` (photo + floating chat). The chat bubbles are decorative product imagery (kept in Spanish in both languages on purpose) and marked `aria-hidden`:

```jsx
  const HeroVisual = () => (
    <div className="hero-visual">
      <div className="hero-photo">
        <img
          src="https://images.unsplash.com/photo-1770927423939-bae721171237?auto=format&fit=crop&w=1600&q=85"
          srcSet="https://images.unsplash.com/photo-1770927423939-bae721171237?auto=format&fit=crop&w=900&q=85 900w, https://images.unsplash.com/photo-1770927423939-bae721171237?auto=format&fit=crop&w=1600&q=85 1600w, https://images.unsplash.com/photo-1770927423939-bae721171237?auto=format&fit=crop&w=2000&q=85 2000w"
          sizes="(min-width: 980px) 50vw, 100vw"
          alt="Repartidor entregando ropa limpia a domicilio"
          loading="eager"
        />
      </div>
      <div className="hero-chat" aria-hidden="true">
        <div className="hero-chat-head">
          <span className="hero-chat-dot">✓</span>
          Lavandería Roma
        </div>
        <div className="hero-chat-body">
          <span className="bub in">Quiero recoger 2 cobijas y ropa 🧺</span>
          <span className="bub out">¡Claro! Pasamos hoy 4–6pm · total $240</span>
          <span className="bub in">Perfecto, gracias 🙌</span>
        </div>
      </div>
    </div>
  );
```

- [ ] **Step 5: Add hero-chat styles**

In `styles/landing.css`, immediately after the `.hero-photo::after { ... }` rule (ends ~line 194), add:

```css
/* Hero visual — photo with a floating WhatsApp chat card */
.hero-visual { position: relative; }
.hero-chat {
  position: absolute;
  left: clamp(-12px, -1.5vw, 0px);
  bottom: 22px;
  width: min(74%, 300px);
  background: var(--bright-white);
  border: 1px solid var(--hairline);
  border-radius: 14px;
  box-shadow: var(--shadow-postcard);
  overflow: hidden;
  z-index: 2;
}
.hero-chat-head {
  display: flex; align-items: center; gap: 8px;
  background: #075E54; color: #FFFFFF;
  padding: 9px 12px;
  font-family: var(--font-body); font-size: 12.5px; font-weight: 600;
}
.hero-chat-dot {
  width: 20px; height: 20px; border-radius: 50%;
  background: #25D366; color: #075E54;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700;
}
.hero-chat-body {
  background: #ECE5DD;
  padding: 12px;
  display: flex; flex-direction: column; gap: 7px;
}
.hero-chat .bub {
  max-width: 88%;
  padding: 7px 10px;
  border-radius: 10px;
  font-family: var(--font-body); font-size: 12px; line-height: 1.35;
  color: var(--ink);
}
.hero-chat .bub.in  { background: #FFFFFF;  align-self: flex-start; border-top-left-radius: 3px; }
.hero-chat .bub.out { background: #DCF8C6;  align-self: flex-end;   border-top-right-radius: 3px; }
@media (max-width: 600px) {
  .hero-chat { position: static; width: 100%; margin-top: 16px; }
}
```

- [ ] **Step 6: Verify**

Reload. Confirm: hero shows the new headline (with "a domicilio." in italic serif accent), the delivery photo, and the floating green-header WhatsApp card with three bubbles. No Console errors. Toggle EN → headline reads "Your laundromat and dry cleaner, *delivered.*"; the chat card stays Spanish (intended). Resize narrow (<600px) → the chat card drops below the photo instead of overlapping.

- [ ] **Step 7: Commit**

```bash
git add src/i18n.jsx src/landing.jsx styles/landing.css
git commit -m "Rebuild hero: delivery photo with floating WhatsApp chat"
```

---

## Task 3: "Cómo funciona" — the order-journey strip

A new scannable section: four numbered, connected steps. Inserted between Hero and Modules. Uses `data-bg="tint"` (pale cobalt) so the nav background tracks it.

**Files:**
- Modify: `src/i18n.jsx` (add a `how:` object to both `es` and `en`, right after each `hero:` object)
- Modify: `src/landing.jsx` (add `HowItWorks` component; mount it in `App`)
- Modify: `styles/landing.css` (add `.journey` styles)

- [ ] **Step 1: Add the Spanish `how` object**

In `src/i18n.jsx`, in the `es` object, add immediately after the `hero` object (after its closing `},`):

```js
    /* --- How it works — the order journey --- */
    how: {
      eyebrow: 'CÓMO FUNCIONA',
      h_a: 'Una orden,',
      h_accent: ' de principio a fin.',
      sub: 'Desde el primer mensaje hasta que el cliente vuelve.',
      steps: [
        { num: '01', name: 'El cliente escribe por WhatsApp', text: 'Pide, cotiza y agenda su recolección sin instalar ninguna app.' },
        { num: '02', name: 'La tienda gestiona la orden',      text: 'Cada pedido entra al tablero con su estado: nueva, en ruta, lista, entregada.' },
        { num: '03', name: 'El repartidor sigue su ruta',      text: 'Las paradas del día, en orden, con confirmación de recolección y entrega.' },
        { num: '04', name: 'Marketing los trae de vuelta',     text: 'Promociones y recordatorios por WhatsApp para los clientes que dejaron de venir.' },
      ],
    },
```

- [ ] **Step 2: Add the English `how` object**

In `src/i18n.jsx`, in the `en` object, add immediately after the `hero` object:

```js
    how: {
      eyebrow: 'HOW IT WORKS',
      h_a: 'One order,',
      h_accent: ' end to end.',
      sub: 'From the first message to the customer coming back.',
      steps: [
        { num: '01', name: 'The customer messages on WhatsApp', text: 'They order, get a quote, and book a pickup — no app to install.' },
        { num: '02', name: 'The store manages the order',        text: 'Every order lands on the board with its status: new, en route, ready, delivered.' },
        { num: '03', name: 'The driver follows the route',       text: 'The day’s stops, in order, with pickup and delivery confirmation.' },
        { num: '04', name: 'Marketing brings them back',         text: 'WhatsApp promos and reminders for the customers who stopped coming.' },
      ],
    },
```

- [ ] **Step 3: Add the HowItWorks component**

In `src/landing.jsx`, add this component right before the `Modules` component (before the `/* ---------- Modules ---------- */` comment, ~line 67):

```jsx
  /* ---------- How it works — order journey ---------- */

  const HowItWorks = ({ t }) => (
    <section id="how" className="section surface-tint-bg" data-bg="tint">
      <div className="container">
        <Mono className="eyebrow">{t.how.eyebrow}</Mono>
        <h2 className="h2">
          {t.how.h_a}
          <span className="lighter">{t.how.h_accent}</span>
        </h2>
        <p className="lede">{t.how.sub}</p>
        <ol className="journey">
          {t.how.steps.map((s, i) => (
            <li key={i} className="journey-step">
              <span className="journey-num">{s.num}</span>
              <h3 className="journey-name">{s.name}</h3>
              <p className="journey-text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
```

- [ ] **Step 4: Mount HowItWorks in App**

In `src/landing.jsx`, in the `App` component's returned JSX (~line 472), add `<HowItWorks t={t} />` between `<Hero t={t} />` and `<Modules t={t} />`:

```jsx
        <Nav t={t} navBg={navBg} />
        <Hero t={t} />
        <HowItWorks t={t} />
        <Modules t={t} />
```

- [ ] **Step 5: Add journey styles**

In `styles/landing.css`, after the hero-chat block added in Task 2, add:

```css
/* ---------- How it works — order-journey strip ---------- */

.journey {
  list-style: none; margin: 56px 0 0; padding: 0;
  display: grid; grid-template-columns: 1fr; gap: 16px;
}
@media (min-width: 760px) { .journey { grid-template-columns: repeat(4, 1fr); gap: 24px; } }
.journey-step {
  position: relative;
  padding: 24px 20px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--hairline);
  border-radius: var(--radius-tile);
}
.journey-num {
  font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.12em;
  color: var(--brand); font-weight: 500;
}
.journey-name {
  font-family: var(--font-display); font-weight: 500;
  font-size: 19px; line-height: 1.15; letter-spacing: -0.02em;
  color: var(--ink); margin: 14px 0 8px;
}
.journey-text { font-size: 14.5px; line-height: 1.5; color: var(--body); margin: 0; }
@media (min-width: 760px) {
  .journey-step:not(:last-child)::after {
    content: '→';
    position: absolute; top: 50%; right: -17px; transform: translateY(-50%);
    color: var(--brand); font-family: var(--font-mono); font-size: 16px;
  }
}
```

- [ ] **Step 6: Verify**

Reload. Confirm: a new pale-cobalt section appears below the hero with heading "Una orden, *de principio a fin.*" and four numbered cards (01–04) connected by blue arrows on desktop. Clicking the nav **Cómo funciona** scrolls to it. No Console errors. Toggle EN → "One order, *end to end.*" with English steps.

- [ ] **Step 7: Commit**

```bash
git add src/i18n.jsx src/landing.jsx styles/landing.css
git commit -m "Add Cómo funciona order-journey section"
```

---

## Task 4: "Producto" — rewrite the four modules

The `Modules` component (clickable cards + detail panel) is reused unchanged; only its content (`features` i18n) and the `MODULE_PHOTOS` array change. The four modules become WhatsApp / Tablero en tienda / App de repartidores / Marketing, each with three feature rows.

**Files:**
- Modify: `src/i18n.jsx` (the two `features:` objects — es ~line 29, en ~line 265)
- Modify: `src/landing.jsx` (the `MODULE_PHOTOS` array, lines 70-75)

- [ ] **Step 1: Rewrite the Spanish `features` object**

In `src/i18n.jsx`, replace the entire `es` → `features` object:

```js
    features: {
      eyebrow: 'PRODUCTO',
      spotlight: {
        h_a: 'Cuatro piezas,',
        h_accent: ' un solo',
        h_b: ' sistema.',
        body: 'Todo lo que necesitas para operar tu lavandería o tintorería a domicilio — sin pegar cinco herramientas distintas.',
      },
      modules: [
        {
          kicker: 'CANAL',
          name: 'WhatsApp',
          tagline: 'Un número, todas tus órdenes.',
          body: 'Tus clientes ya usan WhatsApp. Reciben su cotización, confirman la recolección y pagan sin salir del chat — y tú gestionas todo desde un solo número con tu marca.',
          features: [
            { tag: 'PEDIDOS', text: 'Los clientes piden y confirman órdenes por chat, sin instalar nada.' },
            { tag: 'COBROS',  text: 'Envías el total y el link de pago en el mismo hilo.' },
            { tag: 'AVISOS',  text: 'Notificas “en ruta” y “entregada” en automático.' },
          ],
        },
        {
          kicker: 'EN TIENDA',
          name: 'Tablero en tienda',
          tagline: 'Toda la operación en una pantalla.',
          body: 'Un tablero web para el mostrador: cada orden con su estado, su cliente y su ruta. Se acabaron las libretas y los grupos de WhatsApp internos.',
          features: [
            { tag: 'ESTADOS',  text: 'Nueva, en ruta, lista, entregada — de un vistazo.' },
            { tag: 'CLIENTES', text: 'Historial, direcciones y datos de cada cliente.' },
            { tag: 'MULTI',    text: 'Funciona igual con una o varias sucursales.' },
          ],
        },
        {
          kicker: 'REPARTO',
          name: 'App de repartidores',
          tagline: 'Rutas claras, entregas a tiempo.',
          body: 'Una app web para tus repartidores con las paradas del día en orden, navegación al mapa y confirmación de recolección y entrega.',
          features: [
            { tag: 'RUTA',    text: 'Las paradas del día, ordenadas y optimizadas.' },
            { tag: 'NAVEGA',  text: 'Abre cada dirección en su mapa favorito.' },
            { tag: 'PRUEBA',  text: 'Confirma recolección y entrega con un toque.' },
          ],
        },
        {
          kicker: 'MARKETING',
          name: 'Marketing',
          tagline: 'Recupera a los clientes que dejaron de venir.',
          body: 'Identifica a quién no ves hace semanas y mándale una promoción por WhatsApp. Llena los días flojos con campañas que armas en minutos.',
          features: [
            { tag: 'SEGMENTOS', text: 'Filtra por última visita o por cuánto gastan.' },
            { tag: 'PROMOS',    text: 'Envía cupones y recordatorios por WhatsApp.' },
            { tag: 'REACTIVA',  text: 'Trae de vuelta a los clientes inactivos en automático.' },
          ],
        },
      ],
    },
```

- [ ] **Step 2: Rewrite the English `features` object**

In `src/i18n.jsx`, replace the entire `en` → `features` object:

```js
    features: {
      eyebrow: 'PRODUCT',
      spotlight: {
        h_a: 'Four pieces,',
        h_accent: ' one',
        h_b: ' system.',
        body: 'Everything you need to run your laundromat or dry cleaner on delivery — without gluing five separate tools together.',
      },
      modules: [
        {
          kicker: 'CHANNEL',
          name: 'WhatsApp',
          tagline: 'One number, all your orders.',
          body: 'Your customers already use WhatsApp. They get their quote, confirm the pickup, and pay without leaving the chat — and you manage everything from one number under your brand.',
          features: [
            { tag: 'ORDERS',  text: 'Customers place and confirm orders by chat, nothing to install.' },
            { tag: 'PAYMENTS', text: 'You send the total and the payment link in the same thread.' },
            { tag: 'ALERTS',  text: 'You notify “en route” and “delivered” automatically.' },
          ],
        },
        {
          kicker: 'IN-STORE',
          name: 'In-store board',
          tagline: 'The whole operation on one screen.',
          body: 'A web board for the counter: every order with its status, its customer, and its route. No more notebooks or internal WhatsApp groups.',
          features: [
            { tag: 'STATUS',    text: 'New, en route, ready, delivered — at a glance.' },
            { tag: 'CUSTOMERS', text: 'History, addresses and details for every customer.' },
            { tag: 'MULTI',     text: 'Works the same with one branch or many.' },
          ],
        },
        {
          kicker: 'DELIVERY',
          name: 'Driver app',
          tagline: 'Clear routes, on-time deliveries.',
          body: 'A web app for your drivers with the day’s stops in order, map navigation, and pickup and delivery confirmation.',
          features: [
            { tag: 'ROUTE',   text: 'The day’s stops, ordered and optimized.' },
            { tag: 'NAVIGATE', text: 'Open each address in their favorite map.' },
            { tag: 'PROOF',   text: 'Confirm pickup and delivery with one tap.' },
          ],
        },
        {
          kicker: 'MARKETING',
          name: 'Marketing',
          tagline: 'Win back the customers who stopped coming.',
          body: 'Find who you haven’t seen in weeks and send them a WhatsApp promo. Fill the slow days with campaigns you build in minutes.',
          features: [
            { tag: 'SEGMENTS', text: 'Filter by last visit or by how much they spend.' },
            { tag: 'PROMOS',   text: 'Send coupons and reminders over WhatsApp.' },
            { tag: 'REACTIVATE', text: 'Automatically bring inactive customers back.' },
          ],
        },
      ],
    },
```

- [ ] **Step 3: Update MODULE_PHOTOS**

In `src/landing.jsx`, replace the `MODULE_PHOTOS` array (lines 70-75) so the photos and alt text match the new four modules (reusing the existing known-good Unsplash IDs):

```js
  const MODULE_PHOTOS = [
    { src: 'https://images.unsplash.com/photo-1635274605638-d44babc08a4f', alt: 'WhatsApp — ropa doblada lista en el mostrador' },
    { src: 'https://images.unsplash.com/photo-1604335398980-ededcadcc37d', alt: 'Tablero en tienda — fila de lavadoras' },
    { src: 'https://images.unsplash.com/photo-1770927423939-bae721171237', alt: 'App de repartidores — repartidor en moto, calle mojada' },
    { src: 'https://images.unsplash.com/photo-1567113463300-102a7eb3cb26', alt: 'Marketing — prendas en perchero' },
  ];
```

- [ ] **Step 4: Verify**

Reload. Scroll to **Producto**. Confirm: heading "Cuatro piezas, *un solo* sistema."; four cards labelled WhatsApp / Tablero en tienda / App de repartidores / Marketing. Click each card → the detail panel updates with that module's tagline, body, three feature rows, and the matching photo. No Console errors. Toggle EN → "Four pieces, *one* system." with English module content.

- [ ] **Step 5: Commit**

```bash
git add src/i18n.jsx src/landing.jsx
git commit -m "Rewrite Producto modules around the delivery system"
```

---

## Task 5: "Para quién" — laundromats & dry cleaners

A short two-column block establishing the dual audience. Inserted between Modules and the demo/pricing section. `data-bg="cream"`.

**Files:**
- Modify: `src/i18n.jsx` (add an `audience:` object to both `es` and `en`, after each `features` object)
- Modify: `src/landing.jsx` (add `Audience` component; mount it in `App`)
- Modify: `styles/landing.css` (add `.audience-grid` styles)

- [ ] **Step 1: Add the Spanish `audience` object**

In `src/i18n.jsx`, in the `es` object, add right after the `features` object's closing `},`:

```js
    /* --- Audience — laundromats & dry cleaners --- */
    audience: {
      eyebrow: 'PARA QUIÉN',
      h_a: 'Hecho para',
      h_accent: ' lavanderías y tintorerías.',
      h_b: '',
      sub: 'El mismo sistema, adaptado a cómo trabaja cada negocio.',
      cols: [
        { name: 'Lavanderías', text: 'Cargas por kilo, autoservicio o encargo y recolección a domicilio — todo por el mismo número.' },
        { name: 'Tintorerías', text: 'Prendas por pieza, servicios delicados y planchado, con seguimiento orden por orden.' },
      ],
    },
```

- [ ] **Step 2: Add the English `audience` object**

In `src/i18n.jsx`, in the `en` object, add right after the `features` object:

```js
    audience: {
      eyebrow: 'WHO IT’S FOR',
      h_a: 'Built for',
      h_accent: ' laundromats and dry cleaners.',
      h_b: '',
      sub: 'The same system, adapted to how each business works.',
      cols: [
        { name: 'Laundromats',  text: 'Wash-by-kilo, self-service or drop-off, and home pickup — all through one number.' },
        { name: 'Dry cleaners', text: 'Per-garment items, delicate care and pressing, tracked order by order.' },
      ],
    },
```

- [ ] **Step 3: Add the Audience component**

In `src/landing.jsx`, add this component right after the `Modules` component closes (after its `};`, before `/* ---------- Integrations ---------- */`):

```jsx
  /* ---------- Audience — laundromats & dry cleaners ---------- */

  const Audience = ({ t }) => (
    <section className="section surface-cream-bg" data-bg="cream">
      <div className="container">
        <Mono className="eyebrow">{t.audience.eyebrow}</Mono>
        <h2 className="h2">
          {t.audience.h_a}
          <span className="lighter">{t.audience.h_accent}</span>
          {t.audience.h_b}
        </h2>
        <p className="lede">{t.audience.sub}</p>
        <div className="audience-grid">
          {t.audience.cols.map((c, i) => (
            <div key={i} className="audience-card">
              <h3 className="audience-name">{c.name}</h3>
              <p className="audience-text">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
```

- [ ] **Step 4: Mount Audience in App**

In `src/landing.jsx`, in `App`'s returned JSX, add `<Audience t={t} />` immediately after `<Modules t={t} />`:

```jsx
        <Modules t={t} />
        <Audience t={t} />
```

- [ ] **Step 5: Add audience styles**

In `styles/landing.css`, after the `.journey` block from Task 3, add:

```css
/* ---------- Audience — dual block ---------- */

.audience-grid {
  display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 48px;
}
@media (min-width: 760px) { .audience-grid { grid-template-columns: 1fr 1fr; gap: 24px; } }
.audience-card {
  padding: 32px;
  background: var(--bright-white);
  border: 1px solid var(--hairline);
  border-radius: var(--radius-tile);
}
.audience-name {
  font-family: var(--font-display); font-weight: 500;
  font-size: 26px; letter-spacing: -0.025em; color: var(--ink); margin: 0 0 12px;
}
.audience-text { font-size: 16px; line-height: 1.55; color: var(--body); margin: 0; max-width: 42ch; }
```

- [ ] **Step 6: Verify**

Reload. Below Producto, confirm a cream section "Hecho para *lavanderías y tintorerías.*" with two white cards (Lavanderías / Tintorerías). No Console errors. Toggle EN → "Built for *laundromats and dry cleaners.*"

- [ ] **Step 7: Commit**

```bash
git add src/i18n.jsx src/landing.jsx styles/landing.css
git commit -m "Add Para quién audience section"
```

---

## Task 6: Remove Integrations, replace Pricing with a demo block

This task does the big structural removal. It deletes the Integrations section (component + its inline SVG marks + Iconify usage + i18n) and replaces the tiered Pricing grid with a single "Agenda una demo" block. The demo section keeps `id="pricing"` so the nav anchor still works.

**Files:**
- Modify: `src/landing.jsx` (delete `ICON`, `iconifyUrl`, `INTEG_GROUPS`, `Integrations`, `Pricing`; add `DemoCTA`; update `App`)
- Modify: `src/i18n.jsx` (delete both `integrations` objects; replace both `pricing` objects with a `demo` object)
- Modify: `styles/landing.css` (delete Integrations + pricing-grid styles; add `.demo-block` styles)

- [ ] **Step 1: Delete the ICON, iconifyUrl, and INTEG_GROUPS definitions**

In `src/landing.jsx`, delete everything from the `/* ---------- Integrations ---------- */` comment (line 148) through the end of the `INTEG_GROUPS` array's closing `];` (line 234). This removes the `ICON` object, the `iconifyUrl` helper, and `INTEG_GROUPS`.

- [ ] **Step 2: Delete the Integrations component**

In `src/landing.jsx`, delete the entire `Integrations` component (the `const Integrations = ({ t }) => ( ... );` block, originally lines 236-282).

- [ ] **Step 3: Replace the Pricing component with DemoCTA**

In `src/landing.jsx`, replace the entire `Pricing` component (the `/* ---------- Pricing ---------- */` comment through the `Pricing` component's closing `);`, originally lines 284-320) with:

```jsx
  /* ---------- Demo / pricing CTA ---------- */

  const DemoCTA = ({ t }) => (
    <section id="pricing" className="section surface-tint-bg" data-bg="tint">
      <div className="container">
        <Mono className="eyebrow">{t.demo.eyebrow}</Mono>
        <div className="demo-block">
          <div className="demo-block-text">
            <h2 className="h2">
              {t.demo.h_a}
              <span className="lighter">{t.demo.h_accent}</span>
              {t.demo.h_b}
            </h2>
            <p className="lede">{t.demo.sub}</p>
            <ul className="demo-points">
              {t.demo.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div className="demo-block-cta">
            <a
              href="mailto:hola@ciclo.mx?subject=Demo%20Ciclo"
              className="btn btn-brand btn-arrow"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {t.demo.cta}
            </a>
            <p className="demo-note">{t.demo.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
```

- [ ] **Step 4: Update App composition**

In `src/landing.jsx`, in `App`'s returned JSX, remove the `<Integrations t={t} />` line and change `<Pricing t={t} />` to `<DemoCTA t={t} />`. The section list should read:

```jsx
        <Nav t={t} navBg={navBg} />
        <Hero t={t} />
        <HowItWorks t={t} />
        <Modules t={t} />
        <Audience t={t} />
        <DemoCTA t={t} />
        <FAQ t={t} />
        <CTA t={t} />
        <Footer t={t} />
```

- [ ] **Step 5: Delete the Spanish `integrations` object and replace `pricing` with `demo`**

In `src/i18n.jsx`, in the `es` object: delete the entire `integrations: { ... },` object (lines 93-100), and replace the entire `pricing: { ... },` object (lines 102-158) with:

```js
    /* --- Demo / pricing CTA --- */
    demo: {
      eyebrow: 'PRECIOS',
      h_a: 'Precio a la medida',
      h_accent: ' de tu operación.',
      h_b: '',
      sub: 'Cuéntanos cuántas órdenes manejas y armamos un plan. Sin instalación y sin contratos largos.',
      points: [
        'Los cuatro módulos incluidos',
        'Número de WhatsApp configurado con tu marca',
        'Onboarding y soporte en español',
      ],
      cta: 'Agenda una demo',
      note: 'Demo de 20 minutos · sin compromiso',
    },
```

- [ ] **Step 6: Delete the English `integrations` object and replace `pricing` with `demo`**

In `src/i18n.jsx`, in the `en` object: delete the entire `integrations: { ... },` object, and replace the entire `pricing: { ... },` object with:

```js
    demo: {
      eyebrow: 'PRICING',
      h_a: 'Pricing that fits',
      h_accent: ' your operation.',
      h_b: '',
      sub: 'Tell us how many orders you handle and we’ll build a plan. No install, no long contracts.',
      points: [
        'All four modules included',
        'A WhatsApp number set up with your brand',
        'Onboarding and support in Spanish',
      ],
      cta: 'Book a demo',
      note: '20-minute demo · no commitment',
    },
```

- [ ] **Step 7: Remove Integrations + pricing-grid CSS, add demo-block CSS**

In `styles/landing.css`, delete the entire `/* ---------- Integrations — two groups + tile grid ---------- */` block (lines 363-462) and the entire `/* ---------- Pricing ---------- */` block (lines 464-541). In their place, add:

```css
/* ---------- Demo / pricing CTA ---------- */

.demo-block {
  margin-top: 48px;
  display: grid; grid-template-columns: 1fr; gap: 32px;
  background: var(--bright-white);
  border: 1px solid var(--hairline);
  border-radius: var(--radius-tile);
  padding: clamp(28px, 4vw, 56px);
  box-shadow: var(--shadow-tile);
  align-items: center;
}
@media (min-width: 880px) { .demo-block { grid-template-columns: 1.4fr 1fr; gap: 56px; } }
.demo-points {
  margin: 28px 0 0; padding: 0; list-style: none;
  border-top: 1px solid var(--hairline);
}
.demo-points li {
  padding: 12px 0; border-bottom: 1px solid var(--hairline);
  font-size: 15px; color: var(--body);
  display: flex; align-items: baseline; gap: 10px;
}
.demo-points li::before { content: '✓'; color: var(--brand); font-weight: 600; font-size: 13px; }
.demo-note {
  margin: 14px 0 0; text-align: center;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--body-muted);
}
```

- [ ] **Step 8: Static check — no dangling references**

Run each and expect **no output** (every old identifier is gone):

```bash
grep -n "Integrations\|INTEG_GROUPS\|iconifyUrl\|<Pricing" src/landing.jsx
grep -n "integrations:\|pricing:" src/i18n.jsx
```

- [ ] **Step 9: Verify**

Reload. Confirm: the Integrations (dark) section and the three-tier Pricing grid are **gone**. In their place, the **Precios** section shows a single white panel — heading "Precio a la medida *de tu operación.*", three checkmarked points, and a blue **Agenda una demo** button (opens mailto) with the "Demo de 20 minutos · sin compromiso" note. Nav **Precios** scrolls here. No Console errors. Toggle EN → "Pricing that fits *your operation.*"

- [ ] **Step 10: Commit**

```bash
git add src/landing.jsx src/i18n.jsx styles/landing.css
git commit -m "Remove integrations + tiered pricing; add demo CTA block"
```

---

## Task 7: FAQ — delivery questions

The `FAQ` component is unchanged; only the `faq` i18n content changes to delivery-relevant questions.

**Files:**
- Modify: `src/i18n.jsx` (the two `faq:` objects)

- [ ] **Step 1: Rewrite the Spanish `faq` object**

In `src/i18n.jsx`, replace the entire `es` → `faq` object:

```js
    faq: {
      eyebrow: 'PREGUNTAS',
      h_a: 'Lo que ',
      h_accent: 'casi todos',
      h_b: ' nos preguntan.',
      side: '¿Tienes otra duda? Escríbenos a hola@ciclo.mx y la resolvemos en la demo.',
      items: [
        {
          q: '¿Necesito tener repartidores propios?',
          a: 'Puedes usar a tus propios repartidores con la app o coordinar con quien ya trabajas. Ciclo organiza las rutas; tú decides quién las maneja.',
        },
        {
          q: '¿Cómo pagan los clientes?',
          a: 'Por el mismo WhatsApp: les envías el total y un link de pago, o cobran en efectivo o terminal al entregar. Todo queda registrado en la orden.',
        },
        {
          q: '¿Funciona para tintorería y no solo para lavandería?',
          a: 'Sí. El sistema se adapta a prendas por pieza, servicios delicados y planchado, igual que a cargas por kilo.',
        },
        {
          q: '¿El número de WhatsApp es mío o de Ciclo?',
          a: 'Configuramos un número dedicado para tu marca. Tus clientes ven tu nombre, no el de Ciclo.',
        },
        {
          q: '¿Qué necesito para empezar?',
          a: 'Solo tu catálogo de servicios y precios. Nosotros configuramos el número, el tablero y la app de repartidores durante el onboarding.',
        },
      ],
    },
```

- [ ] **Step 2: Rewrite the English `faq` object**

In `src/i18n.jsx`, replace the entire `en` → `faq` object:

```js
    faq: {
      eyebrow: 'QUESTIONS',
      h_a: 'What ',
      h_accent: 'almost everyone',
      h_b: ' asks us.',
      side: 'Have another question? Write to hola@ciclo.mx and we’ll cover it in the demo.',
      items: [
        { q: 'Do I need my own drivers?', a: 'You can use your own drivers with the app, or coordinate with whoever you already work with. Ciclo organizes the routes; you decide who runs them.' },
        { q: 'How do customers pay?', a: 'Through the same WhatsApp: you send the total and a payment link, or they pay cash or card on delivery. It’s all recorded on the order.' },
        { q: 'Does it work for dry cleaning, not just laundry?', a: 'Yes. The system adapts to per-garment items, delicate services and pressing, just as it does to wash-by-kilo.' },
        { q: 'Is the WhatsApp number mine or Ciclo’s?', a: 'We set up a dedicated number for your brand. Your customers see your name, not Ciclo’s.' },
        { q: 'What do I need to get started?', a: 'Just your services and price list. We configure the number, the board and the driver app during onboarding.' },
      ],
    },
```

- [ ] **Step 3: Verify**

Reload. Scroll to **FAQ**. Confirm: five delivery questions, the first open by default, clicking toggles each. Side text mentions hola@ciclo.mx. No Console errors. Toggle EN → English questions.

- [ ] **Step 4: Commit**

```bash
git add src/i18n.jsx
git commit -m "Rewrite FAQ for delivery questions"
```

---

## Task 8: CTA closer + Footer + full-page pass

Final copy: the closing CTA and the footer (links cleaned of the removed Integrations/Pricing-tier anchors). Then a full top-to-bottom verification in both languages.

**Files:**
- Modify: `src/i18n.jsx` (the two `cta_block:` objects and the two `footer:` objects)

- [ ] **Step 1: Rewrite the Spanish `cta_block` object**

In `src/i18n.jsx`, replace the `es` → `cta_block` object:

```js
    cta_block: {
      h_a: 'Pon tu lavandería ',
      h_accent: 'a domicilio',
      h_b: ' esta ',
      h_em: 'semana',
      h_d: '.',
      sub: 'Agenda una demo de 20 minutos y te mostramos cómo se ve tu operación en Ciclo.',
      primary: 'Agenda una demo',
      ghost:   'Habla con nosotros',
    },
```

- [ ] **Step 2: Rewrite the English `cta_block` object**

In `src/i18n.jsx`, replace the `en` → `cta_block` object:

```js
    cta_block: {
      h_a: 'Put your laundromat ',
      h_accent: 'on delivery',
      h_b: ' this ',
      h_em: 'week',
      h_d: '.',
      sub: 'Book a 20-minute demo and we’ll show you what your operation looks like in Ciclo.',
      primary: 'Book a demo',
      ghost:   'Talk to us',
    },
```

- [ ] **Step 3: Point the CTA ghost button at email**

The `CTA` component's ghost link currently uses `mailto:hola@ciclo.mx?subject=Demo%20Ciclo` — confirm it stays a mailto (no change needed if it already does). Open `src/landing.jsx`, find the `CTA` component, and verify the ghost `<a>` href is `mailto:hola@ciclo.mx?subject=Demo%20Ciclo`. If it points at `#`, change it to that mailto.

- [ ] **Step 4: Rewrite the Spanish `footer` object**

In `src/i18n.jsx`, replace the `es` → `footer` object:

```js
    footer: {
      tag_a: 'Tu lavandería y tintorería,',
      tag_em: ' a domicilio',
      tag_b: '.',
      cols: [
        {
          h: 'Producto',
          links: [
            { label: 'WhatsApp',          href: '#modules' },
            { label: 'Tablero en tienda', href: '#modules' },
            { label: 'Repartidores',      href: '#modules' },
            { label: 'Marketing',         href: '#modules' },
          ],
        },
        {
          h: 'Empresa',
          links: [
            { label: 'Cómo funciona',           href: '#how' },
            { label: 'Agenda una demo',         href: 'mailto:hola@ciclo.mx?subject=Demo%20Ciclo' },
            { label: 'Contacto · hola@ciclo.mx', href: 'mailto:hola@ciclo.mx' },
          ],
        },
        {
          h: 'Legal',
          links: [
            { label: 'Términos',   href: '/legal/terminos.html' },
            { label: 'Privacidad', href: '/legal/privacidad.html' },
          ],
        },
      ],
      base_left:  '© 2026 CICLO LAUNDRY OS, S.A.P.I. DE C.V.',
      base_right: 'OPERANDO EN MÉXICO',
    },
```

- [ ] **Step 5: Rewrite the English `footer` object**

In `src/i18n.jsx`, replace the `en` → `footer` object:

```js
    footer: {
      tag_a: 'Your laundromat and dry cleaner,',
      tag_em: ' delivered',
      tag_b: '.',
      cols: [
        { h: 'Product', links: [
          { label: 'WhatsApp',       href: '#modules' },
          { label: 'In-store board', href: '#modules' },
          { label: 'Drivers',        href: '#modules' },
          { label: 'Marketing',      href: '#modules' },
        ] },
        { h: 'Company', links: [
          { label: 'How it works',             href: '#how' },
          { label: 'Book a demo',              href: 'mailto:hola@ciclo.mx?subject=Demo%20Ciclo' },
          { label: 'Contact · hola@ciclo.mx',  href: 'mailto:hola@ciclo.mx' },
        ] },
        { h: 'Legal', links: [
          { label: 'Terms',   href: '/legal/terminos.html' },
          { label: 'Privacy', href: '/legal/privacidad.html' },
        ] },
      ],
      base_left:  '© 2026 CICLO LAUNDRY OS, S.A.P.I. DE C.V.',
      base_right: 'OPERATING IN MEXICO',
    },
```

- [ ] **Step 6: Full-page verification**

Reload and scroll the whole page top to bottom in **Spanish**, confirming each section renders with zero Console errors and the nav background tracks correctly as you scroll (stone → cobalt → white → cream → cobalt → white → cream → navy):
1. Nav — Cómo funciona · Producto · Precios · FAQ · Agenda una demo
2. Hero — headline + photo + WhatsApp chat card
3. Cómo funciona — four journey steps
4. Producto — four clickable modules + detail panel
5. Para quién — Lavanderías / Tintorerías
6. Precios — demo block + Agenda una demo button
7. FAQ — five delivery questions
8. CTA closer — "Pon tu lavandería *a domicilio* esta *semana*."
9. Footer — three columns, no Integraciones/Precios-tier links, legal links present

Then toggle **EN** via the Tweaks panel and re-scan top to bottom — every section renders in English (the hero chat card intentionally stays Spanish).

Also confirm no stale anchors remain:

```bash
grep -n "#integrations" src/i18n.jsx
```
Expect **no output**.

- [ ] **Step 7: Commit**

```bash
git add src/i18n.jsx src/landing.jsx
git commit -m "Rewrite CTA closer and footer for delivery-first landing"
```

---

## Self-review notes (for the implementer)

- **Anchors:** `#how` → HowItWorks (Task 3), `#modules` → Modules (unchanged id), `#pricing` → DemoCTA (Task 6 keeps `id="pricing"`), `#faq` → FAQ (unchanged id). All four nav links resolve after Task 6.
- **`data-bg` values** used: `cream`, `tint`, `off`, `navy` — all have matching `.nav-bg-*` rules in `landing.css` (lines 22-48), so nav tracking works without new CSS.
- **`btn-brand`** (DemoCTA button) and **`btn-ink` / `btn-ghost` / `btn-arrow`** already exist in `components.css` — no new button styles needed.
- **`Mono`** and **`Logo`** come from `window.UI` (`src/ui.jsx`), already destructured at the top of `landing.jsx` — no import changes.
- **Out of scope:** no backend/forms (CTAs stay mailto), no new fonts/tokens, legal pages untouched.
