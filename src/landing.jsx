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
    { src: 'https://images.unsplash.com/photo-1604335398980-ededcadcc37d', alt: 'Multi-sucursal — fila de lavadoras' },
    { src: 'https://images.unsplash.com/photo-1635274605638-d44babc08a4f', alt: 'Punto de venta — prendas dobladas' },
    { src: 'https://images.unsplash.com/photo-1770927423939-bae721171237', alt: 'A domicilio — repartidores en moto, calle mojada' },
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

  /* ---------- Integrations ---------- */

  /* Inline SVG marks — text-style for known brands, iconography for the rest */
  const ICON = {
    spei: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 7h13l-3-3M21 17H8l3 3" />
      </svg>
    ),
    mercadoPago: (
      <svg viewBox="0 0 64 24" fill="currentColor" aria-hidden="true">
        <text x="32" y="17" textAnchor="middle" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="14" fontWeight="700" letterSpacing="-0.04em">mp</text>
        <ellipse cx="32" cy="22" rx="11" ry="0.8" />
      </svg>
    ),
    oxxo: (
      <svg viewBox="0 0 64 24" fill="currentColor" aria-hidden="true">
        <text x="32" y="17" textAnchor="middle" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.06em">OXXO</text>
      </svg>
    ),
    clip: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="7" y1="15" x2="11" y2="15" />
      </svg>
    ),
    bbva: (
      <svg viewBox="0 0 64 24" fill="currentColor" aria-hidden="true">
        <text x="32" y="17" textAnchor="middle" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.05em">BBVA</text>
      </svg>
    ),
    sat: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 21h14M6 21V10l6-5 6 5v11M9 21v-7h6v7" />
        <circle cx="12" cy="13" r="0.7" fill="currentColor" />
      </svg>
    ),
    cancel: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 8l8 8M16 8l-8 8" />
      </svg>
    ),
    layers: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12,3 21,8 12,13 3,8" />
        <polyline points="3,13 12,18 21,13" />
        <polyline points="3,18 12,23 21,18" />
      </svg>
    ),
    addenda: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="6" y="3" width="12" height="14" rx="1" opacity="0.45" />
        <rect x="3" y="6" width="12" height="14" rx="1" />
        <line x1="6" y1="11" x2="12" y2="11" />
        <line x1="6" y1="14" x2="10" y2="14" />
      </svg>
    ),
  };

  /* Iconify CDN — real brand logos where the brand exists in SimpleIcons */
  const iconifyUrl = (slug) => `https://api.iconify.design/simple-icons/${slug}.svg?color=%23ffffff`;

  /* Two-group structure: compact tile grid with arrow tags */
  const INTEG_GROUPS = [
    {
      label: 'Pagos',
      lede: 'Procesadores integrados — un solo reporte para todo lo que cobras.',
      items: [
        { name: 'SPEI',         tag: 'TRANSFERENCIA → CONCILIADA', color: '#0F4C81', icon: ICON.spei },
        { name: 'Mercado Pago', tag: 'TARJETA · QR · LINK',        color: '#009EE3', iconify: 'mercadopago' },
        { name: 'OXXO Pay',     tag: '22K SUCURSALES → SISTEMA',   color: '#E1251B', icon: ICON.oxxo, wide: true },
        { name: 'Clip',         tag: 'TERMINAL → TICKET FIRMADO',  color: '#FB6A1F', icon: ICON.clip },
      ],
    },
    {
      label: 'SAT · Timbrado',
      lede: 'PAC certificado incluido — cada venta se timbra al SAT sola.',
      items: [
        { name: 'CFDI 4.0',             tag: 'VENTA → TIMBRADO EN 2 SEG',  color: '#6A1B3A', icon: ICON.sat },
        { name: 'Complementos de pago', tag: 'PAGO TARDÍO → REP AUTO',     color: '#3B82F6', icon: ICON.layers },
        { name: 'Cancelación 2.0',      tag: 'MOTIVO + SUSTITUCIÓN',       color: '#0F1628', icon: ICON.cancel },
        { name: 'Addenda corporativa',  tag: 'WALMART · LIVERPOOL · OXXO', color: '#1F5FCF', icon: ICON.addenda },
      ],
    },
  ];

  const Integrations = ({ t }) => (
    <section id="integrations" className="section surface-ink-bg" data-bg="navy">
      <div className="container">
        <div className="integ-head">
          <div>
            <Mono className="eyebrow">{t.integrations.eyebrow}</Mono>
            <h2 className="h2">
              {t.integrations.h2_a}
              <span className="lighter">{t.integrations.h2_accent}</span>
              {t.integrations.h2_b}
            </h2>
          </div>
          <p className="lede">{t.integrations.sub}</p>
        </div>
        <div className="integ-groups">
          {INTEG_GROUPS.map((group, gi) => (
            <div key={gi} className="integ-group">
              <div className="integ-group-h">
                <Mono className="integ-group-num">{`0${gi + 1}`}</Mono>
                <div>
                  <div className="integ-group-label">{group.label}</div>
                  <p className="integ-group-lede">{group.lede}</p>
                </div>
              </div>
              <div className="integ-tiles">
                {group.items.map((it, i) => (
                  <div key={i} className="integ-tile">
                    <div className={`integ-mark ${it.wide ? 'is-wide' : ''}`} style={{ background: it.color }}>
                      {it.iconify ? (
                        <img className="integ-mark-img" src={iconifyUrl(it.iconify)} alt="" loading="lazy" />
                      ) : (
                        <span className="integ-mark-icon">{it.icon}</span>
                      )}
                    </div>
                    <div className="integ-meta">
                      <div className="integ-name">{it.name}</div>
                      <Mono className="integ-tag">{it.tag}</Mono>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  /* ---------- Pricing ---------- */

  const Pricing = ({ t }) => (
    <section id="pricing" className="section surface-tint-bg" data-bg="tint">
      <div className="container">
        <Mono className="eyebrow">{t.pricing.eyebrow}</Mono>
        <h2 className="h2">
          {t.pricing.h_a}
          <span className="lighter">{t.pricing.h_accent}</span>
          {t.pricing.h_b}
        </h2>
        <p className="lede">{t.pricing.sub}</p>
        <div className="pricing-grid">
          {t.pricing.plans.map((p, i) => (
            <div key={i} className={`plan ${p.featured ? 'featured' : ''}`}>
              {p.featured && <span className="plan-popular">{t.pricing.popular}</span>}
              <Mono className="plan-name">{p.name}</Mono>
              <div className="plan-price">{p.price}<span className="unit">{p.unit}</span></div>
              <p className="plan-tag">{p.tag}</p>
              <ul className="plan-list">
                {p.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <div className="plan-cta">
                <a
                  href={p.cta && /vent|sales/i.test(p.cta) ? 'mailto:ventas@ciclo.mx?subject=Plan%20Empresa' : '#'}
                  className={`btn ${p.featured ? 'btn-brand' : 'btn-ink'} btn-arrow`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
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
        <Integrations t={t} />
        <Pricing t={t} />
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
