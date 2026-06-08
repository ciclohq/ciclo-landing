/* =============================================================
   Ciclo — Landing page composition (CREAM EDITORIAL VERTICAL SECTIONS)
   Inspired by HappyRobot.ai: classic vertical sections, big display
   headlines with weight contrast, numbered modules, flat cards.
   ============================================================= */

(() => {
  const { useState, useEffect } = React;
  const { Logo, Mono, TweaksPanel } = window.UI;

  /* ---------- Nav ---------- */

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

  /* ---------- Hero ---------- */

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

  /* ---------- Modules ---------- */

  /* Per-module photos (Unsplash, all desaturated + cobalt-tinted via CSS) */
  const MODULE_PHOTOS = [
    { src: 'https://images.unsplash.com/photo-1635274605638-d44babc08a4f', alt: 'WhatsApp — ropa doblada lista en el mostrador' },
    { src: 'https://images.unsplash.com/photo-1604335398980-ededcadcc37d', alt: 'Tablero en tienda — fila de lavadoras' },
    { src: 'https://images.unsplash.com/photo-1770927423939-bae721171237', alt: 'App de repartidores — repartidor en moto, calle mojada' },
    { src: 'https://images.unsplash.com/photo-1567113463300-102a7eb3cb26', alt: 'Marketing — prendas en perchero' },
  ];
  const photoUrl = (src, w) => `${src}?auto=format&fit=crop&w=${w}&q=85`;

  /* Modules — condensed: 4 clickable cards + detail panel for the active one */
  const Modules = ({ t }) => {
    const [active, setActive] = useState(0);
    const m = t.features.modules[active];
    const photo = MODULE_PHOTOS[active] || MODULE_PHOTOS[0];
    return (
      <section id="modules" className="section surface-white-bg" data-bg="off">
        <div className="container">
          <Mono className="eyebrow">{t.features.eyebrow}</Mono>
          <h2 className="h2">
            {t.features.spotlight.h_a}
            <span className="lighter">{t.features.spotlight.h_accent}</span>
            {t.features.spotlight.h_b}
          </h2>
          <p className="lede">{t.features.spotlight.body}</p>

          {/* Clickable cards row */}
          <div className="module-cards">
            {t.features.modules.map((mm, i) => (
              <button
                key={i}
                className={`module-card ${active === i ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                <span className="num">{`0${i + 1}`}</span>
                <span className="kicker">{mm.kicker}</span>
                <span className="name">{mm.name}</span>
                <span className="tag-line">{mm.tagline}</span>
              </button>
            ))}
          </div>

          {/* Detail panel — body + features + photo for the active module */}
          <article className="module-deep" key={active}>
            <div className="module-deep-text">
              <div className="module-num-row">
                <span className="module-num">{`0${active + 1}`}</span>
                <span className="module-kicker">{m.kicker}</span>
              </div>
              <h3 className="module-name">{m.name}</h3>
              <p className="module-tagline">{m.tagline}</p>
              <p className="module-body">{m.body}</p>
              <ul className="module-features">
                {m.features.map((f, j) => (
                  <li key={j}>
                    <span className="feat-num">{`0${j + 1}`}</span>
                    <div className="feat-body">
                      <span className="feat-tag">{f.tag}</span>
                      <span className="feat-text">{f.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="module-deep-photo">
              <img
                src={photoUrl(photo.src, 1400)}
                srcSet={`${photoUrl(photo.src, 800)} 800w, ${photoUrl(photo.src, 1400)} 1400w, ${photoUrl(photo.src, 1800)} 1800w`}
                sizes="(min-width: 980px) 50vw, 100vw"
                alt={photo.alt}
                loading="lazy"
              />
            </div>
          </article>
        </div>
      </section>
    );
  };

  /* ---------- Audience — laundromats & dry cleaners ---------- */

  const Audience = ({ t }) => (
    <section id="audience" className="section surface-cream-bg" data-bg="cream">
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

  /* ---------- FAQ ---------- */

  const FAQ = ({ t }) => {
    const [openIdx, setOpenIdx] = useState(0);
    return (
      <section id="faq" className="section surface-white-bg" data-bg="off">
        <div className="container">
          <Mono className="eyebrow">{t.faq.eyebrow}</Mono>
          <div className="faq-row">
            <div>
              <h2 className="h2">
                {t.faq.h_a}
                <span className="lighter">{t.faq.h_accent}</span>
                {t.faq.h_b}
              </h2>
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
      <div className="container">
        <h2 className="h1">
          {t.cta_block.h_a}
          <span className="lighter">{t.cta_block.h_accent}</span>
          {t.cta_block.h_b}
          <span className="lighter">{t.cta_block.h_em}</span>
          {t.cta_block.h_d}
        </h2>
        <p className="lede">{t.cta_block.sub}</p>
        <div className="actions">
          <a href="#pricing" className="btn btn-ink btn-arrow">{t.cta_block.primary}</a>
          <a href="mailto:hola@ciclo.mx?subject=Demo%20Ciclo" className="btn btn-ghost">{t.cta_block.ghost}</a>
        </div>
      </div>
    </section>
  );

  /* ---------- Footer ---------- */

  const Footer = ({ t }) => (
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
    const [theme, setTheme] = useState('default');
    const [tweaksOpen, setTweaksOpen] = useState(false);
    const [navBg, setNavBg] = useState('cream');

    useEffect(() => {
      document.documentElement.lang = lang;
      document.documentElement.dataset.theme = theme;
    }, [lang, theme]);

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
        <Nav t={t} navBg={navBg} />
        <Hero t={t} />
        <HowItWorks t={t} />
        <Modules t={t} />
        <Audience t={t} />
        <DemoCTA t={t} />
        <FAQ t={t} />
        <CTA t={t} />
        <Footer t={t} />
        <TweaksPanel
          open={tweaksOpen}
          setOpen={setTweaksOpen}
          lang={lang}
          setLang={setLang}
          theme={theme}
          setTheme={setTheme}
          t={t.tweaks}
        />
      </>
    );
  };

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
})();
