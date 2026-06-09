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
        <div className="hero-head">
          <span className="badge"><i />{t.hero.badge}</span>
          <h1 className="h1">
            {t.hero.h1_a}
            <span className="lighter">{t.hero.h1_accent}</span>
          </h1>
          <p className="lede">{t.hero.sub}</p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-brand btn-arrow">{t.hero.cta_primary}</a>
            <a href="#how" className="btn btn-ghost">{t.hero.cta_ghost} →</a>
          </div>
          <p className="hero-trust">{t.hero.trust}</p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );

  const HeroVisual = () => (
    <div className="hero-stage" aria-hidden="true">
      <div className="app">
        <div className="appbar">
          <span className="appbar-dots"><i /><i /><i /></span>
          <span className="appbar-url">app.ciclo.mx/tablero</span>
        </div>
        <div className="app-body">
          <aside className="app-side">
            <div className="app-brand">ciclo<span className="dot-accent">.</span></div>
            <div className="app-navlbl">Operación</div>
            <div className="app-nav is-active"><span className="app-ic" />Tablero</div>
            <div className="app-nav"><span className="app-ic" />WhatsApp<span className="app-badge">3</span></div>
            <div className="app-nav"><span className="app-ic" />Órdenes</div>
            <div className="app-nav"><span className="app-ic" />Rutas</div>
            <div className="app-nav"><span className="app-ic" />Repartidores</div>
            <div className="app-navlbl">Crecimiento</div>
            <div className="app-nav"><span className="app-ic" />Marketing</div>
            <div className="app-nav"><span className="app-ic" />Clientes</div>
          </aside>
          <main className="app-main">
            <div className="app-mhead">
              <div>
                <div className="app-greet">Buenas tardes, Lavandería Roma</div>
                <div className="app-date">Domingo · 8 de junio</div>
              </div>
              <span className="app-newbtn">+ Nueva orden</span>
            </div>
            <div className="app-stats">
              <div className="app-stat"><div className="k">Órdenes hoy</div><div className="v">38</div><div className="d up">▲ 12% vs ayer</div></div>
              <div className="app-stat"><div className="k">En ruta</div><div className="v">6</div><div className="d">2 repartidores</div></div>
              <div className="app-stat"><div className="k">Listas</div><div className="v">12</div><div className="d">para entrega</div></div>
              <div className="app-stat accent"><div className="k">Recuperados · 30d</div><div className="v">+18%</div><div className="d">campañas WhatsApp</div></div>
            </div>
            <div className="app-grid2">
              <div className="app-panel">
                <div className="app-panel-h"><span className="t">Órdenes de hoy</span><span className="a">VER TODAS</span></div>
                <div className="orow"><div><div className="who">María G.</div><div className="ometa">#1042 · Roma · 2 cobijas + ropa</div></div><div className="ort"><span className="oamt">$240</span><span className="chip c-new">NUEVA</span></div></div>
                <div className="orow"><div><div className="who">Carlos R.</div><div className="ometa">#1039 · Condesa · tintorería</div></div><div className="ort"><span className="oamt">$180</span><span className="chip c-rt">EN RUTA</span></div></div>
                <div className="orow"><div><div className="who">Sofía M.</div><div className="ometa">#1038 · Nápoles · 6 kg</div></div><div className="ort"><span className="oamt">$150</span><span className="chip c-ready">LISTA</span></div></div>
                <div className="orow"><div><div className="who">Diego L.</div><div className="ometa">#1035 · Roma Sur · edredón</div></div><div className="ort"><span className="oamt">$320</span><span className="chip c-done">ENTREGADA</span></div></div>
              </div>
              <div className="app-panel">
                <div className="app-panel-h"><span className="t">WhatsApp</span><span className="a">3 NUEVOS</span></div>
                <div className="wmini">
                  <div className="wmrow"><span className="wmav">M</span><div className="wmbody"><div className="wmname">María G.</div><div className="wmmsg">¿A qué hora pasan por la ropa?</div></div><span className="wmun">2</span></div>
                  <div className="wmrow"><span className="wmav">J</span><div className="wmbody"><div className="wmname">Jorge T.</div><div className="wmmsg">Quiero agendar recolección 🧺</div></div><span className="wmun">1</span></div>
                  <div className="wmrow"><span className="wmav">A</span><div className="wmbody"><div className="wmname">Ana P.</div><div className="wmmsg">Gracias, todo perfecto 🙌</div></div></div>
                </div>
                <div className="wmfoot"><span className="wmpill">Responder a María…</span><span className="wmsend">➤</span></div>
              </div>
            </div>
          </main>
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

  /* Per-module UI vignettes — show the actual product, not stock photos */
  const ModuleMock = ({ active }) => {
    if (active === 1) return (
      <div className="mk" aria-hidden="true">
        <div className="mk-h"><span className="mk-hdot" />Tablero · Órdenes hoy<span className="mk-h-r">38</span></div>
        <div className="orow"><div><div className="who">María G.</div><div className="ometa">#1042 · Roma · 2 cobijas + ropa</div></div><div className="ort"><span className="oamt">$240</span><span className="chip c-new">NUEVA</span></div></div>
        <div className="orow"><div><div className="who">Carlos R.</div><div className="ometa">#1039 · Condesa · tintorería</div></div><div className="ort"><span className="oamt">$180</span><span className="chip c-rt">EN RUTA</span></div></div>
        <div className="orow"><div><div className="who">Sofía M.</div><div className="ometa">#1038 · Nápoles · 6 kg</div></div><div className="ort"><span className="oamt">$150</span><span className="chip c-ready">LISTA</span></div></div>
        <div className="orow"><div><div className="who">Diego L.</div><div className="ometa">#1035 · Roma Sur · edredón</div></div><div className="ort"><span className="oamt">$320</span><span className="chip c-done">ENTREGADA</span></div></div>
      </div>
    );
    if (active === 2) return (
      <div className="mk" aria-hidden="true">
        <div className="mk-h"><span className="mk-hdot" />Ruta de hoy · Repartidor 1<span className="mk-h-r">5 paradas</span></div>
        <div className="mk-map">
          <svg viewBox="0 0 320 150" preserveAspectRatio="none">
            <path className="mk-route" d="M28 116 C 80 96, 70 50, 130 54 S 210 96, 250 60 300 30" />
            <g className="mk-stop-dot"><circle cx="28" cy="116" r="6"/><text x="28" y="120">1</text></g>
            <g className="mk-stop-dot act"><circle cx="130" cy="54" r="8"/><text x="130" y="58">2</text></g>
            <g className="mk-stop-dot"><circle cx="250" cy="60" r="6"/><text x="250" y="64">3</text></g>
            <g className="mk-stop-dot"><circle cx="300" cy="30" r="6"/><text x="300" y="34">4</text></g>
          </svg>
        </div>
        <div className="mk-stop"><span className="mk-stopn done">1</span><span>Roma · recolección</span><span className="chip c-done">HECHA</span></div>
        <div className="mk-stop"><span className="mk-stopn act">2</span><span>Condesa · entrega</span><span className="chip c-rt">AHORA</span></div>
        <div className="mk-stop"><span className="mk-stopn">3</span><span>Nápoles · entrega</span><span className="mk-eta">5:10pm</span></div>
      </div>
    );
    if (active === 3) return (
      <div className="mk" aria-hidden="true">
        <div className="mk-h"><span className="mk-hdot" />Campaña · WhatsApp<span className="mk-h-r">Borrador</span></div>
        <div className="mk-seg"><span className="mk-seg-k">SEGMENTO</span><span className="mk-seg-v">Sin pedido en 30 días</span><span className="mk-seg-n">248</span></div>
        <div className="mk-wa-thread compact">
          <span className="mk-bub out promo">🧺 ¡Te extrañamos! 20% de descuento en tu próxima recolección esta semana. Responde <b>SÍ</b> y pasamos por tu ropa.</span>
        </div>
        <div className="mk-camp-foot"><span className="mk-send-btn">Enviar a 248 clientes</span><span className="mk-camp-stat">▲ +18% reactivados</span></div>
      </div>
    );
    return (
      <div className="mk mk-wa" aria-hidden="true">
        <div className="mk-h"><span className="mk-hdot wa" />WhatsApp · Lavandería Roma<span className="mk-h-r">en línea</span></div>
        <div className="mk-wa-thread">
          <span className="mk-bub in">Hola, quiero recoger 2 cobijas y ropa 🧺</span>
          <span className="mk-bub out">¡Claro! ¿Te late hoy de 4–6pm?</span>
          <span className="mk-bub in">Sí 🙌 ¿cuánto sale?</span>
          <span className="mk-bub out">Total estimado <b>$240</b>. Te mando el link de pago.</span>
        </div>
        <div className="mk-wa-input"><span>Escribe un mensaje…</span><i className="mk-send" /></div>
      </div>
    );
  };

  /* Modules — condensed: 4 clickable cards + detail panel for the active one */
  const Modules = ({ t }) => {
    const [active, setActive] = useState(0);
    const m = t.features.modules[active];
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
            <div className="module-mock">
              <ModuleMock active={active} />
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
