/* =============================================================
   Ciclo — Landing page composition (CREAM EDITORIAL VERTICAL SECTIONS)
   Inspired by HappyRobot.ai: classic vertical sections, big display
   headlines with weight contrast, numbered modules, flat cards.
   ============================================================= */

(() => {
  const { useState, useEffect } = React;
  const { Logo, LangToggle, Screen, Thread } = window.UI;

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
          <a href="#" className="btn btn-ghost" style={{ height: 40, padding: '0 16px', fontSize: 14 }}>{t.nav.login}</a>
          <a {...waProps(t.wa.demo)} className="btn btn-ink btn-arrow" style={{ height: 40, padding: '0 16px', fontSize: 14 }}>{t.nav.cta}</a>
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

  /* ---------- Arc — the four-part product narrative ----------
     Replaces HowItWorks + Modules: one story (receive → operate → deliver →
     retain), each part pairing prose with a visual. Part 01 renders a
     Thread — the handoff the hero deliberately doesn't show: an
     out-of-scope question, a divider marking the transfer, a person
     answering. Parts 02–04 keep real product screenshots. The check is
     "does this part supply thread data," not "is this index 0" — a later
     part can adopt a Thread the same way. The 01–04 numbering survives
     here and only here, where sequence carries real meaning. */

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
              {p.thread ? (
                <Thread messages={p.thread} caption={p.thread_caption} lang={lang} />
              ) : (
                <Screen slug={p.screen} alt={p.alt} width={1440} height={900} />
              )}
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

  /* ---------- Order models — the same order, priced two ways ----------
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
     cards, no stripes, no pill cloud — one shared "same order" label, then
     two hairline-separated spec lists in the #incluye idiom (mono dt,
     16px dd), stacked at mobile so one model reads fully before the other.
     The peso/prenda figures in each example line are illustrative, not
     real Ciclo pricing. */

  const OrderModels = ({ t }) => (
    <section id="audience" className="section surface-cream-bg" data-bg="cream">
      <div className="container">
        <h2 className="h2">{t.audience.h}</h2>
        <p className="lede">{t.audience.sub}</p>
        <p className="compare-order">{t.audience.order_label}</p>
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

  /* ---------- Demo / pricing CTA ---------- */

  const DemoCTA = ({ t }) => (
    <section id="pricing" className="section surface-tint-bg" data-bg="tint">
      <div className="container">
        <div className="demo-block" data-reveal="">
          <div className="demo-block-text">
            <h2 className="h2">{t.demo.h}</h2>
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
          <Arc t={t} lang={lang} />
          <Assistant t={t} lang={lang} />
          <Included t={t} />
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
