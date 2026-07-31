/* =============================================================
   Ciclo — Landing page composition (CREAM EDITORIAL VERTICAL SECTIONS)
   Inspired by HappyRobot.ai: classic vertical sections, big display
   headlines with weight contrast, numbered modules, flat cards.
   ============================================================= */

(() => {
  const { useState, useEffect } = React;
  const { Logo, LangToggle, Thread } = window.UI;

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
        <span className="order-card-chip">{o.stage}</span>
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
    <section className="hero" data-bg="cream">
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

  /* ---------- Retention panel — arc part 04's visual ----------
     A stamp card mid-progress plus a membership state on a customer, in
     the order-card idiom (bright-white panel, hairline, mono dt / 16px dd,
     a chip for status) rather than a screenshot — there was never a real
     'retiene' capture to begin with (Screen would have silently fallen
     back to the placeholder). Verified against apps/api/src/modules/
     promotion/promotion-engine.ts (buy_n_get_free + countingWindow:
     'customer_history': one stamp per completed qualifying order, and once
     the punch count reaches buyQuantity, the redeeming order's cheapest
     freeQuantity units go free — countableUnitPrices sorts ascending) and
     membership-benefits.ts membershipSummaryFor (status is derived, never
     stored; percentOff/freeDelivery/allowanceAmount are independent,
     combinable plan fields). The stamp dots are aria-hidden; the count is
     also rendered as text so it isn't screen-reader-invisible. */

  const RetentionPanel = ({ t }) => (
    <div className="retain-panel">
      <div className="retain-card">
        <div className="retain-card-head">
          <span className="retain-card-label">{t.stamp.label}</span>
          <span className="retain-card-chip">{t.stamp.chip}</span>
        </div>
        <div className="retain-stamps" aria-hidden="true">
          {Array.from({ length: t.stamp.target }).map((_, i) => (
            <span key={i} className={`retain-stamp ${i < t.stamp.progress ? 'is-filled' : ''}`} />
          ))}
        </div>
        <p className="sr-only">{t.stamp.progress_sr}</p>
        <p className="retain-card-note">{t.stamp.note}</p>
      </div>
      <div className="retain-card">
        <div className="retain-card-head">
          <span className="retain-card-label">{t.membership.label}</span>
          <span className="retain-card-chip retain-card-chip--done">{t.membership.status}</span>
        </div>
        <dl className="retain-fields">
          <div>
            <dt>{t.membership.plan_label}</dt>
            <dd>{t.membership.plan}</dd>
          </div>
          <div>
            <dt>{t.membership.benefit_label}</dt>
            <dd>{t.membership.benefit}</dd>
          </div>
          <div>
            <dt>{t.membership.renews_label}</dt>
            <dd>{t.membership.renews}</dd>
          </div>
        </dl>
      </div>
    </div>
  );

  /* ---------- Board panel — arc part 02's visual ----------
     A slice of the orders board — several orders, each with a folio, a
     customer, and a stage — in the order-card idiom (bright-white surface,
     hairline border, shadow-md, mono-uppercase labels) rather than a
     screenshot: a 1440×900 board capture renders at ~0.40× in this arc's
     ~570px column, illegible before it even ships. There was never a real
     'opera' capture to begin with (Screen would have silently fallen back
     to the placeholder), the same situation RetentionPanel replaced for
     arc 04.

     Row #4821 / Renata Vidal / "Por confirmar" is deliberately the SAME
     order the hero's OrderCard shows — so this panel and the hero read as
     one continuous claim, not two unrelated mocks: the bot schedules it
     unconfirmed, and here it is, sitting on the board exactly as promised,
     next to orders a dispatcher already confirmed into pickup/processing/
     delivery. That's the hero's "ningún pedido del bot se agenda solo"
     claim, shown again from the operator's side of the board.

     Stage taxonomy verified against apps/api/src/schema/
     lifecycle-stage-type.ts — a CHECK constraint restricts `key` to
     'pickup' | 'delivery' | 'processing', no other stage exists — and
     apps/api/src/hatchet/workflows/agent/tools.ts (scheduleRecoleccion,
     ~line 1162: a bot-created order inserts with `currentStageId: null`,
     "stage-less ('Por confirmar')" until a dispatcher calls
     POST /orders/:id/confirm; getActiveOrders' own comment, ~line 881-882,
     documents "null = unconfirmed 'Por confirmar'" as the literal label
     the product itself uses).

     Chip colors are matched to the product's real badge, not invented:
     apps/web/src/components/dashboard/orders/order-status-pill.tsx's
     STAGE_DOT maps pickup→slate, processing→blue, delivery→emerald
     (lines 249-251), and a separate PENDING_CONFIRMATION_CONFIG overrides
     the unconfirmed state to a warning/orange pill labeled "Por confirmar"
     (lines 53-57, 77-82). The landing token set has no slate or emerald
     swatch, so the closest --chip-* family stands in for each by color
     family, not by token name: chip-new (muted gray) for pickup/slate,
     chip-pick (info blue) for processing/blue, chip-done (success green)
     for delivery/emerald, chip-proc (warning orange) for unconfirmed —
     chip-proc's name suggests "processing," but its color is the same
     warning-orange the real "Por confirmar" pill uses, and processing
     gets chip-pick instead because that token's blue is what the real
     badge uses for processing. */

  const BOARD_CHIP_CLASS = {
    unconfirmed: 'board-chip--unconfirmed',
    pickup: 'board-chip--pickup',
    processing: 'board-chip--processing',
    delivery: 'board-chip--delivery',
  };

  const BoardPanel = ({ t }) => (
    <div className="board-panel">
      <div className="board-panel-head">
        <span className="board-panel-label">{t.label}</span>
        <span className="board-panel-count">{t.count}</span>
      </div>
      <ol className="board-rows" role="list" aria-label={t.label}>
        {t.rows.map((r, i) => (
          <li key={i} className="board-row">
            <span className="board-row-id">
              <span className="board-row-folio">{r.folio}</span>
              <span className="board-row-customer">{r.customer}</span>
            </span>
            <span className={`board-chip ${BOARD_CHIP_CLASS[r.stage_kind] || ''}`}>{r.stage}</span>
          </li>
        ))}
      </ol>
    </div>
  );

  /* ---------- Fee-rules panel — arc part 03's visual ----------
     A slice of a delivery plan's prioritised rule list, in the same
     hairline/mono idiom rather than a map screenshot — "dibujas tus zonas
     sobre el mapa" needs an actual canvas the arc's ~570px column can't
     render legibly either way, and there was never a real 'entrega-zonas'
     capture to begin with. This panel shows exactly the two rule types
     this page already claims in its own prose (arc part 03's body and the
     FAQ's shipping answer): "gratis desde $300" / "free above $300" and
     "$12 por kilómetro" / "$12/km" — it dramatizes numbers already on the
     page, it does not invent new ones.

     Verified against apps/api/src/modules/delivery-fee/
     delivery-fee-engine.ts: `evaluateDeliveryFee` sorts rules by
     `priority` ascending and returns the fee of the FIRST rule whose
     condition matches (lines 64-69). An `order_value_gte` rule charging
     `free` ranked ahead of an `always` rule charging `per_km` is exactly
     this two-rule shape — the `always` rule only ever fires because the
     free rule's condition didn't match (order subtotal below $300), so
     "cualquier otro pedido" / "any other order" describes it accurately,
     not as an invented catch-all. `priority`, `conditionType` and
     `chargeType` are the engine's own field names (delivery-fee.service.ts
     orders live rules by `deliveryPricingRules.priority` ascending, lines
     161-173), not landing copy re-described. */

  const FeeRulesPanel = ({ t }) => (
    <div className="fee-panel">
      <div className="fee-panel-head">
        <span className="fee-panel-label">{t.label}</span>
        <span className="fee-panel-chip">{t.chip}</span>
      </div>
      <ol className="fee-rules" role="list" aria-label={t.label}>
        {t.rules.map((r, i) => (
          <li key={i} className="fee-rule">
            <span className="fee-rule-cond">
              <span className="fee-rule-priority">{r.priority}</span>
              <span className="fee-rule-condition">{r.condition}</span>
            </span>
            <span className="fee-rule-charge">{r.charge}</span>
          </li>
        ))}
      </ol>
      <p className="fee-panel-note">{t.note}</p>
    </div>
  );

  /* ---------- Arc — the four-part product narrative ----------
     Replaces HowItWorks + Modules: one story (receive → operate → deliver →
     retain), each part pairing prose with a visual. Part 01 renders a
     Thread — the handoff the hero deliberately doesn't show: an
     out-of-scope question, a divider marking the transfer, a person
     answering. Part 02 renders BoardPanel (the orders board), part 03
     renders FeeRulesPanel (prioritised delivery fee rules), part 04
     renders RetentionPanel (a stamp card and a membership state) — all
     three the same "adopt a different visual instead of a screenshot"
     allowance the 01/Thread precedent set, now covering every part; no
     arc part renders a screenshot any more. The check is "which data key
     does this part supply," not "which index is this." The 01–04
     numbering survives here and only here, where sequence carries real
     meaning. */

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
                <RetentionPanel t={p.retention} />
              ) : p.thread ? (
                <Thread messages={p.thread} caption={p.thread_caption} lang={lang} />
              ) : p.board ? (
                <BoardPanel t={p.board} />
              ) : p.feeRules ? (
                <FeeRulesPanel t={p.feeRules} />
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );

  /* ---------- Assistant — its own section ----------
     Third and last appearance of Thread (hero, arc part 01, here) — three
     is what makes it a motif instead of three similar-looking one-offs.
     Speaker roles are reused for a different exchange than the rest of the
     page: the owner asks (customer — left, white) and the assistant
     answers (ciclo — right, brand-filled). `t.assistant.speakers`
     overrides the announced screen-reader labels for those two roles —
     the default "Cliente"/"Ciclo (bot)" labels are wrong here, since this
     is the owner asking about their own sales, not a WhatsApp customer.
     The answer is real report data shaped like a genuine tool response
     (see get_sales_report in apps/api/src/modules/chat/chat-tools.ts) —
     no forecasting, no advice, no action taken for the owner. */

  const Assistant = ({ t, lang }) => (
    <section id="asistente" className="section surface-tint-bg" data-bg="tint">
      <div className="container">
        <div className="assistant-head">
          <h2 className="h2">{t.assistant.h}</h2>
          <p className="lede">{t.assistant.sub}</p>
        </div>
        <div className="assistant-thread">
          <Thread messages={t.assistant.thread} caption={t.assistant.thread_caption} lang={lang} speakerLabels={t.assistant.speakers} />
        </div>
      </div>
    </section>
  );

  /* ---------- Included — the spec table ----------
     A definition list, not a card grid: the point is density. This is the
     one place the uppercase mono label survives (in the `dt`s) — every
     section eyebrow was removed elsewhere because it read as templated.

     Each group's capabilities render as their own line items (`spec-items`
     li), not a middot-joined string in a single `dd` — the old shape wrapped
     into an unscannable run-on paragraph at 390px. Structurally this stays
     a two-column spec sheet at desktop (label | stacked list) and a single
     stacked column on mobile — never cards, density is the point. */

  const Included = ({ t }) => (
    <section id="incluye" className="section surface-white-bg" data-bg="off">
      <div className="container">
        <h2 className="h2">{t.included.h}</h2>
        <p className="lede">{t.included.sub}</p>
        <dl className="spec">
          {t.included.rows.map((r, i) => (
            <div key={i} className="spec-row">
              <dt>{r.k}</dt>
              <dd>
                <ul className="spec-items">
                  {r.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );

  /* ---------- Attendance — staff clock-in, its own compact home ----------
     Sits outside the recibe/opera/entrega/retiene arc on purpose (staff
     attendance isn't part of the customer-facing delivery story), so it
     doesn't interrupt the arc's flow — placed right after #incluye instead,
     next to the "Personal" spec row it elaborates on, the same way
     OrderModels elaborates on the pricing-unit row directly below it. Kept
     to a compact three-row roster (the hairline idiom, no cards) rather
     than a full-height section: a real daily-summary shape, not a second
     scroll-length section. Verified against apps/api/src/modules/
     attendance/pin.util.ts, dto/punch.dto.ts (branchId + 4-digit PIN per
     punch), schedule-resolution.ts (per-branch/per-employee schedules,
     DEFAULT_TOLERANCE_MINUTES = 15) and daily-summary.ts (late/absent
     flags, hours from firstIn/lastOut). */

  const Attendance = ({ t }) => (
    <section id="personal" className="section surface-white-bg" data-bg="off">
      <div className="container">
        <h2 className="h2">{t.attendance.h}</h2>
        <p className="lede">{t.attendance.sub}</p>
        <div className="roster">
          {t.attendance.rows.map((r, i) => (
            <div key={i} className="roster-row">
              <div className="roster-who">
                <span className="roster-name">{r.name}</span>
                <span className="roster-meta">{r.meta}</span>
              </div>
              <span className="roster-times">{r.times}</span>
              <span className={`roster-flag roster-flag--${r.flag_kind}`}>{r.flag}</span>
            </div>
          ))}
        </div>
        <p className="roster-note">{t.attendance.note}</p>
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
     cards, no stripes, no pill cloud — two hairline-separated spec lists in
     the #incluye idiom (mono dt, 16px dd), stacked at mobile so one model
     reads fully before the other. Deliberately NOT framed as "the same
     order, two ways" — a 5.4kg per-kilo load and a 2-shirts-plus-a-pair-of-
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

  /* ---------- Demo / pricing CTA ----------
     `price` + `price_unit` are the only price signal on the page — see
     i18n.jsx's comment on `demo`. `price_unit` renders at the same visual
     weight as the number, right beside it (not a muted caption), because
     the product sells multi-branch as a feature and a bare "$499 al mes"
     would misread as covering the whole operation. */

  const DemoCTA = ({ t }) => (
    <section id="pricing" className="section surface-tint-bg" data-bg="tint">
      <div className="container">
        <div className="demo-block" data-reveal="">
          <div className="demo-block-text">
            <h2 className="h2">{t.demo.h}</h2>
            <div className="price-block">
              <p className="price-eyebrow">{t.demo.price_eyebrow}</p>
              <p className="price-tag">
                <span className="price-amount">{t.demo.price}</span>
                <span className="price-unit">{t.demo.price_unit}</span>
              </p>
            </div>
            <p className="lede">{t.demo.sub}</p>
            <ul className="demo-points">
              {t.demo.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
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
    const [navBg, setNavBg] = useState('cream');

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
          <SectionJump t={t} lang={lang} />
          <Arc t={t} lang={lang} />
          <Assistant t={t} lang={lang} />
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
