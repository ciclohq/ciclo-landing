/* =============================================================
   Ciclo — Landing page composition (CREAM EDITORIAL VERTICAL SECTIONS)
   Inspired by HappyRobot.ai: classic vertical sections, big display
   headlines with weight contrast, numbered modules, flat cards.
   ============================================================= */

(() => {
  const { useState, useEffect } = React;
  const { Logo, Mono, LangToggle, Screen } = window.UI;

  /* ---------- Nav ---------- */

  const Nav = ({ t, navBg, lang, setLang }) => (
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
          <LangToggle lang={lang} setLang={setLang} />
          <a href="#" className="btn btn-ghost" style={{ height: 40, padding: '0 16px', fontSize: 14 }}>{t.nav.login}</a>
          <a href="mailto:hola@ciclo.mx?subject=Demo%20Ciclo" className="btn btn-ink btn-arrow" style={{ height: 40, padding: '0 16px', fontSize: 14 }}>{t.nav.cta}</a>
        </div>
      </div>
    </nav>
  );

  /* ---------- Hero ---------- */

  const Hero = ({ t }) => (
    <section className="hero" data-bg="cream">
      <div className="container">
        <div className="hero-head">
          <span className="badge"><i />{t.hero.badge}</span>
          <h1 className="h1">{t.hero.h1}</h1>
          <p className="lede">{t.hero.sub}</p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-brand btn-arrow">{t.hero.cta_primary}</a>
            <a href="#how" className="btn btn-ghost">{t.hero.cta_ghost} →</a>
          </div>
          <p className="hero-trust">{t.hero.trust}</p>
        </div>
        <Screen
          slug="recibe"
          alt="Bandeja de conversaciones de WhatsApp en Ciclo, con un pedido entrante"
          width={1440}
          height={900}
        />
      </div>
    </section>
  );

  /* ---------- Arc — the four-part product narrative ----------
     Replaces HowItWorks + Modules: one story (receive → operate → deliver →
     retain), each part pairing prose with a real product screenshot. The
     01–04 numbering survives here and only here, where sequence carries
     real meaning. */

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

  /* ---------- Included — the spec table ----------
     A definition list, not a card grid: the point is density. This is the
     one place the uppercase mono label survives (in the `dt`s) — every
     section eyebrow was removed elsewhere because it read as templated. */

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

  /* ---------- Audience — laundromats & dry cleaners ---------- */

  const Audience = ({ t }) => (
    <section id="audience" className="section surface-cream-bg" data-bg="cream">
      <div className="container">
        <h2 className="h2">{t.audience.h}</h2>
        <p className="lede">{t.audience.sub}</p>
        <div className="audience-grid" data-reveal="stagger">
          {t.audience.cols.map((c, i) => (
            <div key={i} className="audience-card">
              <h3 className="audience-name">{c.name}</h3>
              <p className="audience-text">{c.text}</p>
              {c.chips && (
                <div className="audience-chips">
                  {c.chips.map((ch, j) => <span key={j} className="audience-chip">{ch}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
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
          <a href="#pricing" className="btn btn-ink btn-arrow">{t.cta_block.primary}</a>
          <a href="mailto:hola@ciclo.mx?subject=Demo%20Ciclo" className="btn btn-ghost">{t.cta_block.ghost}</a>
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
              <h5>{col.h}</h5>
              {col.links.map((l, j) => (
                <a key={j} href={l.href} onClick={l.href === '#' ? (e) => e.preventDefault() : undefined}>
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        {/* Below 768px the nav LangToggle is hidden — this is the only
            reachable one at that width; hidden itself at 768px and up. */}
        <LangToggle lang={lang} setLang={setLang} />
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
       Real anchors (#modules, #pricing, etc.) are unaffected. */
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
        <Hero t={t} />
        <Arc t={t} />
        <Included t={t} />
        <Audience t={t} />
        <DemoCTA t={t} />
        <FAQ t={t} />
        <CTA t={t} />
        <Footer t={t} lang={lang} setLang={setLang} />
      </>
    );
  };

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
})();
