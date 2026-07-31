/* =============================================================
   Ciclo — Landing page composition (CREAM EDITORIAL VERTICAL SECTIONS)
   Inspired by HappyRobot.ai: classic vertical sections, big display
   headlines with weight contrast, numbered modules, flat cards.
   ============================================================= */

(() => {
  const { useState, useEffect } = React;
  const { Logo, LangToggle, Thread, Screenshot } = window.UI;

  /* ---------- Contact ----------
     Every "Agenda una demo" CTA opens WhatsApp with a prefilled message.
     The number lives here once; the message text comes from i18n so each
     locale opens the thread in its own language. E.164 with no + or
     spaces — the format wa.me expects. */

  const WHATSAPP_NUMBER = '13322073372';
  const waLink = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  /* Opens the WhatsApp app (or web.whatsapp.com) in a new tab, so the
     visitor keeps the landing page behind them. */
  const waProps = (message) => ({
    href: waLink(message),
    target: '_blank',
    rel: 'noopener noreferrer',
  });

  /* ---------- Nav ---------- */

  const Nav = ({ t, navBg, lang, setLang }) => (
    <nav className={`nav nav-bg-${navBg}`}>
      <div className="nav-row">
        <a href="#" aria-label="Ciclo"><Logo /></a>
        <div className="nav-links">
          <a href="#how">{t.nav.how}</a>
          <a href="#asistente">{t.nav.assistant}</a>
          <a href="#incluye">{t.nav.product}</a>
          <a href="#pricing">{t.nav.pricing}</a>
          <a href="#faq">{t.nav.faq}</a>
        </div>
        <div className="nav-cta">
          <LangToggle lang={lang} setLang={setLang} label={t.nav.lang_label} />
          {/* height:44 — the tap-target floor; padding/fontSize stay smaller
              than the default .btn so the nav row still reads compact. */}
          <a href="#" className="btn btn-ghost" style={{ height: 44, padding: '0 16px', fontSize: 14 }}>{t.nav.login}</a>
          <a {...waProps(t.wa.demo)} className="btn btn-ink btn-arrow" style={{ height: 44, padding: '0 16px', fontSize: 14 }}>{t.nav.cta}</a>
        </div>
      </div>
    </nav>
  );

  /* ---------- Hero — conversation, and the order it produced ----------
     Replaces the old hero screenshot. Left: a real-shaped WhatsApp
     exchange (Thread). Right: a static order card built from the same
     tokens, sharing the customer, branch and pickup slot the thread just
     agreed on — the correspondence between the two panels is the pitch,
     not decoration around it. No service/items field: the bot never asks
     what the customer is washing, so the conversation never establishes
     one (a person records items at the branch). The handoff moment is
     deliberately absent here; it gets its own dedicated thread in the
     arc. */

  const OrderCard = ({ o }) => (
    <div className="order-card">
      <div className="order-card-head">
        <span className="order-card-folio">{o.folio}</span>
        <span className="chip chip--pick">{o.stage}</span>
      </div>
      <dl className="order-card-fields">
        <div>
          <dt>{o.customer_label}</dt>
          <dd>{o.customer}</dd>
        </div>
        <div>
          <dt>{o.address_label}</dt>
          <dd>{o.address}</dd>
        </div>
        <div>
          <dt>{o.branch_label}</dt>
          <dd>{o.branch}</dd>
        </div>
        <div>
          <dt>{o.window_label}</dt>
          <dd>{o.window}</dd>
        </div>
      </dl>
      <p className="order-card-note">{o.note}</p>
    </div>
  );

  const Hero = ({ t, lang }) => (
    <section className="hero surface-tint-bg" data-bg="tint">
      <div className="container">
        <div className="hero-head">
          <span className="badge"><i />{t.hero.badge}</span>
          <h1 className="h1">{t.hero.h1}</h1>
          <p className="lede">{t.hero.sub}</p>
          <div className="hero-actions">
            <a {...waProps(t.wa.demo)} className="btn btn-brand btn-arrow">{t.hero.cta_primary}</a>
            <a href="#how" className="btn btn-ghost">{t.hero.cta_ghost} →</a>
          </div>
          <p className="hero-trust">{t.hero.trust}</p>
        </div>
        <div className="hero-convo">
          <Thread messages={t.hero.thread} caption={t.hero.thread_caption} lang={lang} />
          <OrderCard o={t.hero.order} />
        </div>
      </div>
    </section>
  );

  /* ---------- Screens — the one real screenshot on the page ----------
     Everywhere else in the arc, a product-shaped visual stands in for a
     screenshot on purpose (see Board's and ZoneMap's comments: a real
     1440×900 capture renders at ~0.40× in that ~570px media column,
     illegible before it ships). This section exists to be the opposite of
     that — the "here is the whole application" moment the page lost when
     the original hand-built mocks were pulled. `.container-wide` (1440px,
     base.css) instead of the page's usual 1200px `.container` so the image
     gets real width: assets/screens/dashboard.webp is a 2× capture of the
     dashboard at its own 1440-wide desktop layout (2880×1800 intrinsic),
     so at a 1440px+ viewport this section displays it at that native 1:1
     CSS size — full crispness on a retina screen, not a downscaled crop.

     Placed directly after Hero, before SectionJump/Arc: the hero's pitch
     is a WhatsApp thread and the order it produced; this is where that
     order lands. `data-bg="off"` (bright white) sits between the hero's
     `tint` and `#how`'s `cream`, so no two adjacent sections share a
     surface. Not registered in the nav/SectionJump — both are already at
     capacity in Spanish under ~900px (~70px of slack), and this section's
     framing line already tells a scrolling visitor what they're looking
     at, so a nav entry would be redundant with the copy right above it.

     Real screenshot, demo data: captured from the running dashboard
     against a synthetic org ("Lavandería Aurora"), not a customer's live
     numbers — `t.screens.caption` says so explicitly, under the image, so
     nothing here reads as someone's real operation. */

  const Screens = ({ t }) => (
    <section id="panel" className="section screens surface-white-bg" data-bg="off">
      <div className="container-wide">
        <div className="screens-head">
          <h2 className="h2">{t.screens.h}</h2>
          <p className="lede">{t.screens.sub}</p>
        </div>
        <figure className="screens-figure">
          <Screenshot
            className="screens-img"
            src="assets/screens/dashboard.webp"
            width={2880}
            height={1800}
            alt={t.screens.alt}
          />
          <figcaption className="screens-caption">{t.screens.caption}</figcaption>
        </figure>
      </div>
    </section>
  );

  /* ---------- Section jump — mobile-only in-page section nav ----------
     Stands in for the header's .nav-links row, which is `display: none`
     below 880px (see .section-jump's comment in landing.css for the full
     rationale: no JS drawer, a plain static anchor row instead). Reuses
     the same five anchors and the same t.nav.* labels the desktop header
     links use, so no new i18n keys. Rendered once, right after Hero and before
     Arc — never inside Hero — so it can't affect what's above the fold on
     first load; it only becomes visible once the visitor scrolls to it. */

  const SectionJump = ({ t, lang }) => (
    <nav className="section-jump" aria-label={lang === 'es' ? 'Secciones' : 'Sections'}>
      <a href="#how">{t.nav.how}</a>
      <a href="#asistente">{t.nav.assistant}</a>
      <a href="#incluye">{t.nav.product}</a>
      <a href="#pricing">{t.nav.pricing}</a>
      <a href="#faq">{t.nav.faq}</a>
    </nav>
  );

  /* ---------- Stamp card — arc part 04's visual ----------
     The stamp count is inherently a count, so it renders as a punch-card
     grid of filled/empty dots (geometry: dots), not a hairline-row list —
     the 4th and last distinct shape in the arc (bubbles → columns → map →
     dots). Verified against apps/api/src/common/loyalty-progress.ts:
     punchCountsFor only counts orders where order.status === 'completed'
     (line 65) toward a customer_history buy_n_get_free promo, and
     loyaltyProgressFor's `target` is the promotion's own `buyQuantity`
     field (line 147) — the number of dots drawn here IS that target, not
     an arbitrary round number. apps/api/src/modules/promotion/
     promotion.service.ts (line 419) rejects a buy_n_get_free promo against
     any category whose pricing_unit isn't 'per_item', which is why this
     card's promo is scoped to a per-piece category ("Camisas") rather than
     a per-kilo one — a laundromat's by-the-kilo loads can't run this
     promotion at all, so illustrating it on shirts is not an arbitrary
     choice. The membership state below reuses membership-benefits.ts
     membershipSummaryFor's fields (status derived, never stored;
     percentOff/freeDelivery independent, combinable plan fields) but folds
     them into one sentence instead of a second stacked dt/dd block, so the
     card doesn't quietly reintroduce the hairline-row shape it exists to
     replace. The dot grid is aria-hidden; the count is also rendered as
     text so it isn't screen-reader-invisible. */

  const StampCard = ({ t }) => (
    <div className="stampcard">
      <div className="panel-head">
        <span className="panel-label">{t.stamp.label}</span>
        <span className="chip chip--route">{t.stamp.chip}</span>
      </div>
      <div className="stampcard-dots" aria-hidden="true">
        {Array.from({ length: t.stamp.target }).map((_, i) => (
          <span key={i} className={`stampcard-dot ${i < t.stamp.progress ? 'is-filled' : ''}`} />
        ))}
      </div>
      <p className="sr-only">{t.stamp.progress_sr}</p>
      <p className="stampcard-count">
        {t.stamp.progress}<span className="stampcard-count-target">/{t.stamp.target}</span>
      </p>
      <p className="stampcard-note">{t.stamp.note}</p>
      <div className="stampcard-membership">
        <div className="stampcard-membership-head">
          <span className="panel-label">{t.membership.label}</span>
          <span className="chip chip--done">{t.membership.status}</span>
        </div>
        <p className="stampcard-membership-text">
          <strong>{t.membership.plan}</strong> — {t.membership.benefit}. {t.membership.renews_label} {t.membership.renews}.
        </p>
      </div>
    </div>
  );

  /* ---------- Board — arc part 02's visual ----------
     The board's real metaphor is parallel stage columns, not a vertical
     list — this renders three lane columns (geometry: columns, the 2nd of
     the arc's four distinct shapes) plus one order sitting outside all of
     them, exactly like the real board does. There was never a real
     'opera' capture to begin with (a 1440×900 board screenshot renders at
     ~0.40× in this arc's ~570px column, illegible before it even ships) —
     the same situation StampCard replaced for arc 04.

     `unconfirmed` / #4821 / Renata Vidal is deliberately the SAME order
     the hero's OrderCard shows — so this panel and the hero read as one
     continuous claim, not two unrelated mocks: the bot schedules it
     unconfirmed, and here it sits outside every lane exactly as promised,
     while orders a dispatcher already confirmed occupy pickup/processing/
     delivery. That's the hero's "ningún pedido del bot se agenda solo"
     claim, shown again from the operator's side of the board.

     Stage taxonomy verified against apps/api/src/schema/
     lifecycle-stage-type.ts (lines 12-14) — a CHECK constraint restricts
     `key` to 'pickup' | 'delivery' | 'processing', no other stage exists,
     which is exactly the three lanes rendered — and apps/api/src/hatchet/
     workflows/agent/tools.ts's scheduleRecoleccion (line 1130; the
     "stage-less" comment at line 1162): a bot-created order inserts with
     `currentStageId: null` until a dispatcher calls POST
     /orders/:id/confirm, which is why `unconfirmed` is modeled as its own
     field, structurally outside the `stages` array, rather than as a
     fourth lane or a stage_kind on a shared row shape.

     The unconfirmed chip's color is matched to the product's real badge,
     not invented: order-status-pill.tsx's PENDING_CONFIRMATION_CONFIG
     (lines 53-57) renders "Por confirmar" as a warning/orange pill, which
     is what --chip-proc (warning orange) stands in for here — its name
     suggests "processing," but the color, not the name, is what's being
     matched; the processing LANE itself carries no chip color at all in
     this shape (lanes are typed by position, not by a colored badge). */

  const Board = ({ t }) => (
    <div className="board">
      <div className="panel-head">
        <span className="panel-label">{t.label}</span>
      </div>
      <div className="board-unconfirmed">
        <span className="board-unconfirmed-folio">{t.unconfirmed.folio}</span>
        <span className="board-unconfirmed-customer">{t.unconfirmed.customer}</span>
        <span className="chip chip--proc">{t.unconfirmed.chip}</span>
      </div>
      <div className="board-lanes" role="list" aria-label={t.label} tabIndex={0}>
        {t.stages.map((s, i) => (
          <div key={i} className={`board-lane board-lane--${s.key}`} role="listitem">
            <div className="board-lane-head">
              <span className="board-lane-name">{s.label}</span>
              <span className="board-lane-count">{s.orders.length}</span>
            </div>
            <div className="board-lane-orders">
              {s.orders.map((o, j) => (
                <div key={j} className="board-order">
                  <span className="board-order-folio">{o.folio}</span>
                  <span className="board-order-customer">{o.customer}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ---------- Zone map — arc part 03's visual ----------
     An inline SVG polygon standing in for a drawn delivery zone (geometry:
     map, the 3rd of the arc's four distinct shapes), with a compact
     numbered fee ladder beneath it — no image file, no map tiles, no
     network request; a real map screenshot at 1440×900 renders illegibly
     in this arc's ~570px column anyway, and there was never a real
     'entrega-zonas' capture to begin with. Zones are genuinely drawn
     on-screen in the product, not a landing-page invention: apps/api/src/
     schema/zone.ts stores each zone's `boundary` as a `geographyPolygon`
     (line 15), and apps/web/src/components/dashboard/settings/
     zone-map.tsx configures mapbox-gl-draw with `defaultMode:
     "draw_polygon"` (line 97) — an operator draws an irregular polygon on
     a live map, which is what the hand-drawn (non-circular, non-square)
     polygon points below represent, not a generic map icon.

     The fee ladder shows exactly the two rule types this page already
     claims in its own prose (arc part 03's body and the FAQ's shipping
     answer): "gratis desde $300" / "free above $300" and "$12 por
     kilómetro" / "$12/km" — it dramatizes numbers already on the page, it
     does not invent new ones. Verified against apps/api/src/modules/
     delivery-fee/delivery-fee-engine.ts: `evaluateDeliveryFee` sorts rules
     by `priority` ascending and returns the fee of the FIRST rule whose
     condition matches (line 68). An `order_value_gte` rule charging `free`
     ranked ahead of an `always` rule charging `per_km` is exactly this
     two-rule shape — the `always` rule only ever fires because the free
     rule's condition didn't match (order subtotal below $300), so
     "cualquier otro pedido" / "any other order" describes it accurately,
     not as an invented catch-all. */

  const ZoneMap = ({ t }) => (
    <div className="panel">
      <div className="panel-head">
        <span className="panel-label">{t.label}</span>
      </div>
      <svg className="zonemap-svg" viewBox="0 0 220 130" role="img" aria-label={t.map_alt}>
        <rect className="zonemap-bg" x="0" y="0" width="220" height="130" rx="12" />
        <g className="zonemap-grid" aria-hidden="true">
          <line x1="0" y1="34" x2="220" y2="34" />
          <line x1="0" y1="78" x2="220" y2="78" />
          <line x1="58" y1="0" x2="58" y2="130" />
          <line x1="152" y1="0" x2="152" y2="130" />
        </g>
        <polygon className="zonemap-zone" points="62,16 146,11 182,47 168,101 96,120 34,85 22,44" />
        <circle className="zonemap-branch" cx="98" cy="60" r="6" />
      </svg>
      <p className="zonemap-caption">{t.branch_label}</p>
      <ol className="zonemap-ladder" role="list" aria-label={t.ladder_label}>
        {t.rules.map((r, i) => (
          <li key={i} className="zonemap-rule">
            <span className="zonemap-rule-step" aria-hidden="true">{r.step}</span>
            <span className="zonemap-rule-condition">{r.condition}</span>
            <span className="zonemap-rule-charge">{r.charge}</span>
          </li>
        ))}
      </ol>
      <p className="panel-note">{t.note}</p>
    </div>
  );

  /* ---------- Arc — the four-part product narrative ----------
     Replaces HowItWorks + Modules: one story (receive → operate → deliver →
     retain), each part pairing prose with a visual. Deliberately FOUR
     different geometries, not four skins on one shape: 01/Thread renders
     chat bubbles (unchanged — the page's signature element), 02/Board
     renders parallel stage columns, 03/ZoneMap renders an inline SVG
     polygon plus a fee ladder, 04/StampCard renders a dot grid. None of
     them is a screenshot. The check is "which data key does this part
     supply," not "which index is this." The 01–04 numbering survives here
     and only here, where sequence carries real meaning. */

  const Arc = ({ t, lang }) => (
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
              {p.retention ? (
                <StampCard t={p.retention} />
              ) : p.thread ? (
                <Thread messages={p.thread} caption={p.thread_caption} lang={lang} />
              ) : p.board ? (
                <Board t={p.board} />
              ) : p.zoneMap ? (
                <ZoneMap t={p.zoneMap} />
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );

  /* ---------- Driver route — the portrait screenshot's own moment ----------
     assets/screens/driver-route.webp is 1170×2532 — portrait, the only
     portrait image on the page; every other capture (dashboard, reports,
     attendance) is a 2880×1800 desktop screen. Every other visual on the
     page, real or product-shaped, reads landscape-or-wider; a phone screen
     is the one silhouette that can't and shouldn't be forced into that
     mold — sizing it into a wide slot would shrink it into illegibility
     for no reason, since a portrait image doesn't need width, it needs
     height, which this page has plenty of.

     Placement: arc part 03 ("Entrega") already carries this section's
     visual — the inline SVG zone map + fee ladder — and the arc's own
     framing is deliberate: "None of them is a screenshot" (see Arc's
     comment above). Dropping a real capture into that slot, beside or
     instead of the SVG, would break the one rule that keeps the arc's four
     parts reading as one system rather than four random widgets. So this
     gets its own moment immediately after the arc closes instead — still
     "nearby" the delivery story, not interrupting the 01–04 sequence.
     Part 03's body copy used to also state the driver-route claim in
     prose ("Tus repartidores ven la ruta del día en su teléfono") before
     this section existed to show it; now that this section makes the
     claim in full (plus the "App de repartidores" pill), the arc body
     no longer restates it — same claim, said once instead of twice
     (task: mobile scroll length). `data-bg="off"` between the arc's
     `cream` and #asistente's `navy` — no two adjacent sections share a
     surface.

     Copy describes only what's visibly in the crop (verified by viewing
     the file directly): stops numbered 1–8 on a map, green pins for
     completed stops, blue/purple for pending, a small package icon on
     pickup pins and a house icon on delivery pins, and a bottom card
     reading "PRÓXIMA RECOLECCIÓN" / "4/8". No tracking-link claim here —
     that's a different feature (#incluye's "Seguimiento por link" row) and
     isn't what this crop shows. */

  const DriverApp = ({ t }) => (
    <section id="ruta" className="section section--tight surface-white-bg" data-bg="off">
      <div className="container">
        <div className="driver-row">
          <div className="driver-text">
            <h2 className="h3">{t.driver.h}</h2>
            <p className="lede">{t.driver.sub}</p>
          </div>
          <figure className="driver-media">
            <Screenshot
              src="assets/screens/driver-route.webp"
              width={1170}
              height={2532}
              alt={t.driver.alt}
            />
            <figcaption className="driver-caption">{t.driver.caption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );

  /* ---------- Assistant — its own section ----------
     Used to pair a hand-built Thread (an invented Q&A — "$18,430 en 61
     pedidos") with a screenshot of the Reportes screen: wrong screen for
     a section about the assistant, and an invented answer sitting right
     next to it (task: assistant screenshot defect). Both are gone. This
     is now a single real capture — assets/screens/assistant.webp, taken by
     actually driving the product against the synthetic "Lavandería
     Aurora" org, opening /dashboard/chat, and asking the same question
     the old thread invented an answer for. The real LLM's real reply is
     what's in the crop, so there's no separate Thread claiming a
     different number ("$3,464.95 en 20 órdenes" per the "Nuevos" row is
     the crop's real figure) beside it. Thread itself is untouched — the
     hero and arc part 01 still use it; this section simply stopped being
     its third appearance.

     This is the page's one deliberately inverted band (task: page rhythm —
     nine-plus screens of light surfaces was the core complaint). Short,
     self-contained, single-image now, so the inversion is carried by the
     heading/lede plus one on-dark screenshot frame rather than a
     thread-plus-image pair. `.surface-ink-bg` + the `#asistente`-scoped
     overrides in landing.css use only the existing on-dark token family
     the footer already established (--ink, --hairline-on-dark(-soft),
     --body-on-dark(-muted)) — no new colors.

     Copy describes only what's visibly in the crop (verified by viewing
     the file directly): a table of order status/stage counts, a bolded
     "Lectura rápida" summary, a "Mejores clientes de la semana" table
     (name, revenue, order count) for five named customers, a "Clientes
     nuevos vs recurrentes" table, a second bolded summary, and a closing
     offer to compare this week against last week. `t.assistant.alt` /
     `t.assistant.caption` follow the same naming and framing as every
     other single-screenshot section on the page (Screens, DriverApp,
     Attendance) — no `report_`/`thread_` prefix left over from the old
     two-up layout. Single centered column (`.assistant-figure`, capped at
     1040px like the old two-up row's combined width) rather than the
     former two-column thread-plus-image grid — one image needs one
     column, not a breakpoint. The image's border/shadow reuse the
     existing on-dark hairline token (`--hairline-on-dark`), already
     established by the scoped rules below — no new colors. */

  const Assistant = ({ t }) => (
    <section id="asistente" className="section surface-ink-bg" data-bg="navy">
      <div className="container">
        <div className="assistant-head">
          <h2 className="h2">{t.assistant.h}</h2>
          <p className="lede">{t.assistant.sub}</p>
        </div>
        <figure className="assistant-figure">
          <Screenshot
            className="assistant-img"
            src="assets/screens/assistant.webp"
            width={2880}
            height={1800}
            alt={t.assistant.alt}
          />
          <figcaption className="assistant-caption">{t.assistant.caption}</figcaption>
        </figure>
      </div>
    </section>
  );

  /* ---------- Included — the spec table, now a multi-column index ----------
     Was a single-column `dl` — 6 rows × up to 5 items = 24 hairline rows
     stacked in one ~1792px column, nearly two phone screens of the same
     shape repeated (task: back-half variety, measured). Same content,
     grouped into an index instead: a CSS grid of the 6 groups, 2 columns
     from the smallest width up, 3 at desktop (980px+) — no 1-column
     mobile step, because that step was still ~1.8 phone screens on its
     own (task: mobile scroll length, measured): 6 groups stacked with
     nothing left to shrink, just a lot of them. 2-up halves that to 3
     rows for the identical 6 groups / 24 items, so the section reads as
     a squarish reference block at every width, not a scroll. Density is
     still the point (every capability from every group is still here,
     still one per line) — only the silhouette changes.

     No `dl`/`dt` here anymore: each group is a real `<h3>` (heading
     semantics a `dt` never carried) at body-text size/weight rather than
     the page's uppercase-mono micro-label — the group name IS the
     grouping, so it earns hierarchy through size and weight, not a caps
     treatment identical to a dozen other unrelated labels on the page
     (task: micro-label monopoly). No cards — a plain hairline rule above
     each group is the only chrome, same restraint as before. */

  const Included = ({ t }) => (
    <section id="incluye" className="section surface-white-bg" data-bg="off">
      <div className="container">
        <h2 className="h2">{t.included.h}</h2>
        <p className="lede">{t.included.sub}</p>
        <div className="spec-grid">
          {t.included.rows.map((r, i) => (
            <div key={i} className="spec-group">
              <h3 className="spec-group-name">{r.k}</h3>
              <ul className="spec-items">
                {r.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  /* ---------- Attendance — staff clock-in, now carried by a real screenshot ----------
     Sits outside the recibe/opera/entrega/retiene arc on purpose (staff
     attendance isn't part of the customer-facing delivery story), so it
     doesn't interrupt the arc's flow — placed right after #incluye instead,
     next to the "Personal" spec row it elaborates on, the same way
     OrderModels elaborates on the pricing-unit row directly below it.

     Previously a fabricated three-employee roster (Marisol G./Iván R./
     Paola T.) under a full `.h2`, then three `.arc-feats` pills asserting
     PIN clock-in / adjustable tolerance / a daily summary. assets/screens/
     attendance.webp (captured against the synthetic "Lavandería Aurora"
     org, PII-verified) now shows all three of those claims directly — the
     PIN keypad and live clock, each employee's 07:00–16:00 schedule, and
     the per-employee "En turno"/"Tarde"/"Falta" state — so the pills are
     cut rather than restyled: the image carries what they used to assert.
     `.h3`-weight heading, `.section--tight` padding (roughly half of
     `--section-y`), text beside the image at 760px+ (matching the
     hero-convo/compare breakpoint), stacked text-then-image at mobile.
     Still no cards, no invented names, no roster. Every claim in `sub`/
     `note` remains literal product behavior, unchanged from before:
       - pin.util.ts: hashPin/verifyPin — the 4-digit PIN is scrypt-hashed
         and timing-safe compared, never stored or checked as plaintext.
       - dto/punch.dto.ts: PunchDto requires branchId + a pin matching
         `/^\d{4}$/` + type ('check_in'|'check_out') on every punch — the
         clock happens at a branch, not the PIN alone.
       - schedule-resolution.ts: DEFAULT_TOLERANCE_MINUTES = 15;
         resolveSchedule reads a per-branch, per-day-of-week schedule
         first, then an optional per-employee, per-day override (including
         its own toleranceMinutes) — the screenshot's uniform 07:00–16:00
         is one branch's resolved schedule, not a claim that every branch
         shares it.
       - daily-summary.ts: buildDailySummaries flags 'late' when firstIn is
         after scheduledStart + tolerance and 'absent' when there are no
         punches by then — exactly the states visible in the roster and
         explained by `note` (hours = lastOut − firstIn is also computed
         there, but isn't claimed here or shown in the crop). */

  const Attendance = ({ t }) => (
    <section id="personal" className="section section--tight surface-tint-bg" data-bg="tint">
      <div className="container">
        <div className="personal-row">
          <div className="personal-text">
            <h2 className="h3">{t.attendance.h}</h2>
            <p className="lede">{t.attendance.sub}</p>
            <p className="personal-note">{t.attendance.note}</p>
          </div>
          <figure className="personal-media">
            <Screenshot
              src="assets/screens/attendance.webp"
              width={2880}
              height={1800}
              alt={t.attendance.alt}
            />
            <figcaption className="personal-caption">{t.attendance.caption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );

  /* ---------- Order models — two pricing units, one per category ----------
     Replaces the two-card "audience" pattern (identical bordered cards,
     gradient stripe, pill cloud) that said nothing a shop owner couldn't
     have guessed. Every category in the catalog carries a pricing_unit of
     either per_kilo or per_item (apps/api/src/schema/category-type.ts, a
     DB CHECK constraint — there are only ever these two). That single field
     changes what a counter line captures and how its total is computed:
     loadOrderItems in apps/api/src/common/order-items.ts derives lineTotal
     as `price * weight` for a per_kilo line and `price * quantity` for a
     per_item line, and assertItemsWeighed in the same file rejects a
     per_kilo line with no weight recorded. The promotion note is real too:
     promotion.service.ts (~line 419) rejects a buy_n_get_free rule against
     any category whose pricing_unit isn't per_item — a laundromat's
     per-kilo loads can't run that promotion, a dry cleaner's per-garment
     lines can. Same section slot as the old cards (id="audience"); no
     cards, no stripes, no pill cloud — two hairline-separated spec lists
     (sentence-case dt, 16px dd — see .compare-row dt's comment in
     landing.css for why the dt dropped its uppercase-mono treatment),
     stacked at mobile so one model reads fully before the other.
     Deliberately NOT framed as "the same order, two ways" — a 5.4kg
     per-kilo load and a 2-shirts-plus-a-pair-of-
     pants per-item order are two different illustrative orders, and
     claiming they're the same one doesn't survive a reader doing the
     arithmetic. Each column's total is independently checkable from the
     per-unit prices in its own example line. The peso/prenda figures are
     illustrative, not real Ciclo pricing. */

  const OrderModels = ({ t }) => (
    <section id="audience" className="section surface-cream-bg" data-bg="cream">
      <div className="container">
        <h2 className="h2">{t.audience.h}</h2>
        <p className="lede">{t.audience.sub}</p>
        <div className="compare">
          {t.audience.models.map((m, i) => (
            <div key={i} className="compare-model">
              <h3 className="compare-model-name">{m.name}</h3>
              <dl className="compare-rows">
                <div className="compare-row">
                  <dt>{t.audience.labels.unit}</dt>
                  <dd>{m.unit}</dd>
                </div>
                <div className="compare-row">
                  <dt>{t.audience.labels.capture}</dt>
                  <dd>{m.capture}</dd>
                </div>
                <div className="compare-row">
                  <dt>{t.audience.labels.example}</dt>
                  <dd>{m.example}</dd>
                </div>
                <div className="compare-row compare-row--total">
                  <dt>{t.audience.labels.total}</dt>
                  <dd>{m.total}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
        <p className="compare-note">{t.audience.note}</p>
      </div>
    </section>
  );

  /* ---------- Demo / pricing CTA — now price-led ----------
     `price` + `price_unit` are the only price signal on the page — see
     i18n.jsx's comment on `demo`. This is the page's money moment, and it
     used to look exactly like every other hairline-row section below the
     arc: an `.h2` headline first, the price a small line beneath it, then
     a three-item checklist (task: back-half variety, measured at 914px of
     checklist-shaped everything). Reordered so the price is the first and
     largest thing in the block — `.price-amount` now reads bigger than
     the `.h3` headline beneath it, not the other way around — and the
     checklist is gone, folded into `points_prose`, one flowing paragraph
     instead of three ✓-prefixed rows. `price_unit` still sits right beside
     the number at strong weight (not a muted caption), because the
     product sells multi-branch as a feature and a bare "$499" would
     misread as covering the whole operation. */

  const DemoCTA = ({ t }) => (
    <section id="pricing" className="section surface-tint-bg" data-bg="tint">
      <div className="container">
        <div className="demo-block" data-reveal="">
          <div className="demo-block-text">
            <p className="price-kicker">{t.demo.price_eyebrow}</p>
            <p className="price-tag">
              <span className="price-amount">{t.demo.price}</span>
              <span className="price-unit">{t.demo.price_unit}</span>
            </p>
            <h2 className="h3 demo-h">{t.demo.h}</h2>
            <p className="lede">{t.demo.sub}</p>
            <p className="demo-points-prose">{t.demo.points_prose}</p>
          </div>
          <div className="demo-block-cta">
            <a
              {...waProps(t.wa.demo)}
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

  /* ---------- FAQ ---------- */

  const FAQ = ({ t }) => {
    const [openIdx, setOpenIdx] = useState(0);
    return (
      <section id="faq" className="section surface-white-bg" data-bg="off">
        <div className="container">
          <div className="faq-row" data-reveal="">
            <div>
              <h2 className="h2">{t.faq.h}</h2>
              <p className="faq-side" style={{ marginTop: 24 }}>{t.faq.side}</p>
            </div>
            <div className="faq-list">
              {t.faq.items.map((it, i) => {
                const isOpen = openIdx === i;
                return (
                  <div key={i} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="q"
                      onClick={() => setOpenIdx(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="q-text">{it.q}</span>
                      <span className="q-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className="a-wrap" hidden={!isOpen}>
                      <p className="a">{it.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };

  /* ---------- CTA closer ---------- */

  const CTA = ({ t }) => (
    <section className="cta-block" data-bg="cream">
      <div className="container" data-reveal="">
        <h2 className="h1">{t.cta_block.h}</h2>
        <p className="lede">{t.cta_block.sub}</p>
        <div className="actions">
          <a {...waProps(t.wa.demo)} className="btn btn-ink btn-arrow">{t.cta_block.primary}</a>
          <a {...waProps(t.wa.talk)} className="btn btn-ghost">{t.cta_block.ghost}</a>
        </div>
      </div>
    </section>
  );

  /* ---------- Footer ---------- */

  const Footer = ({ t, lang, setLang }) => (
    <footer className="footer" data-bg="navy">
      <div className="container">
        <p className="footer-tag">
          {t.footer.tag_a}<span className="accent">{t.footer.tag_em}</span>{t.footer.tag_b}
        </p>
        <div className="footer-links">
          {t.footer.cols.map((col, i) => (
            <div key={i} className="footer-col">
              <h3>{col.h}</h3>
              {col.links.map((l, j) => (
                /* `wa: '<key>'` resolves to a WhatsApp link with that
                   locale's prefilled message, so the number stays in
                   one place. Everything else is a plain href. */
                <a
                  key={j}
                  {...(l.wa
                    ? waProps(t.wa[l.wa])
                    : {
                        href: l.href,
                        onClick: l.href === '#' ? (e) => e.preventDefault() : undefined,
                      })}
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        {/* Below 768px the nav LangToggle is hidden — this is the only
            reachable one at that width; hidden itself at 768px and up. */}
        <LangToggle lang={lang} setLang={setLang} label={t.nav.lang_label} />
        <div className="footer-base">
          <span>{t.footer.base_left}</span>
          <span>{t.footer.base_right}</span>
        </div>
      </div>
    </footer>
  );

  /* ---------- App ---------- */

  const App = () => {
    const [lang, setLang] = useState('es');
    /* Matches Hero's data-bg ('tint') so there's no flash to the wrong nav
       color before the scroll-position effect below runs on mount. */
    const [navBg, setNavBg] = useState('tint');

    useEffect(() => {
      document.documentElement.lang = lang;
    }, [lang]);

    /* Neutralize dead-link clicks (href="#") so they don't jump to top.
       Real anchors (#how, #incluye, #pricing, etc.) are unaffected. */
    useEffect(() => {
      const onClick = (e) => {
        const a = e.target.closest && e.target.closest('a[href="#"]');
        if (a) e.preventDefault();
      };
      document.addEventListener('click', onClick);
      return () => document.removeEventListener('click', onClick);
    }, []);

    /* Scroll reveal — flag <html> as reveal-ready (so content stays visible
       if JS never runs), then mark each [data-reveal] element on first entry. */
    useEffect(() => {
      if (!('IntersectionObserver' in window)) return;
      document.documentElement.classList.add('reveal-ready');
      const els = document.querySelectorAll('[data-reveal]');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, []);

    /* Track which [data-bg] section is at the top of the viewport
       (just below the nav) — pick that section's bg as the nav bg. */
    useEffect(() => {
      const sections = document.querySelectorAll('[data-bg]');
      if (!sections.length) return;
      const NAV_HEIGHT = 64;
      const pickActive = () => {
        let best = null;
        let bestDist = Infinity;
        sections.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom < NAV_HEIGHT) return; // already scrolled past
          const dist = Math.abs(rect.top - NAV_HEIGHT);
          if (rect.top <= NAV_HEIGHT + 1 && dist < bestDist) {
            best = el;
            bestDist = dist;
          }
        });
        if (best) setNavBg(best.dataset.bg);
        else setNavBg(sections[0].dataset.bg);
      };
      pickActive();
      window.addEventListener('scroll', pickActive, { passive: true });
      window.addEventListener('resize', pickActive);
      return () => {
        window.removeEventListener('scroll', pickActive);
        window.removeEventListener('resize', pickActive);
      };
    }, []);

    const t = window.I18N[lang];

    return (
      <>
        <Nav t={t} navBg={navBg} lang={lang} setLang={setLang} />
        <main>
          <Hero t={t} lang={lang} />
          <Screens t={t} />
          <SectionJump t={t} lang={lang} />
          <Arc t={t} lang={lang} />
          <DriverApp t={t} />
          <Assistant t={t} />
          <Included t={t} />
          <Attendance t={t} />
          <OrderModels t={t} />
          <DemoCTA t={t} />
          <FAQ t={t} />
          <CTA t={t} />
        </main>
        <Footer t={t} lang={lang} setLang={setLang} />
      </>
    );
  };

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
})();
