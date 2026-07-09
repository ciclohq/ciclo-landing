/* =============================================================
   Ciclo — Landing page composition (CREAM EDITORIAL VERTICAL SECTIONS)
   Inspired by HappyRobot.ai: classic vertical sections, big display
   headlines with weight contrast, numbered modules, flat cards.
   ============================================================= */

(() => {
  const { useState, useEffect, useRef } = React;
  const { Logo, Mono, TweaksPanel } = window.UI;

  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Count-up stat — ticks from 0 to `end` once on mount */
  const CountUp = ({ end, prefix = '', suffix = '', duration = 1100 }) => {
    const [val, setVal] = useState(prefersReducedMotion() ? end : 0);
    useEffect(() => {
      if (prefersReducedMotion()) return;
      let raf;
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(end * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [end, duration]);
    return <>{prefix}{val.toLocaleString('en-US')}{suffix}</>;
  };

  /* Cursor-follow tilt — desktop pointers only, springs back on leave */
  const useTilt = (max = 2.2) => {
    const ref = useRef(null);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) return;
      if (!window.matchMedia('(pointer: fine)').matches) return;
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1200px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
      };
      const onLeave = () => { el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)'; };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      return () => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      };
    }, [max]);
    return ref;
  };

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

  /* ---------- Icons — lucide outlines, as in the product app ---------- */

  const IC = {
    grid:    <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    bag:     <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></>,
    users:   <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    box:     <><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/></>,
    gear:    <><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    dollar:  <><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
    clock:   <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    pin:     <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
    building:<><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></>,
  };
  const Icon = ({ d, className = '' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{IC[d]}</svg>
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

  /* Faithful mock of the real product dashboard (apps/web):
     inset sidebar (Plataforma nav), h-12 topbar with branch switcher,
     "Hola, {nombre} 👋" header, 4 stat cards with delta badges. */
  const HeroVisual = () => {
    const tiltRef = useTilt(2.2);
    return (
    <div className="hero-stage" aria-hidden="true">
      <div className="app" ref={tiltRef}>
        <div className="appbar">
          <span className="appbar-dots"><i /><i /><i /></span>
          <span className="appbar-url">app.ciclo.mx/dashboard</span>
        </div>
        <div className="app-topbar">
          <span className="app-burger"><i /><i /><i /></span>
          <span className="app-topsep" />
          <span className="app-branch"><Icon d="pin" />Sucursal Centro<b>⌄</b></span>
        </div>
        <div className="app-body">
          <aside className="app-side">
            <div className="app-org"><span className="app-org-ic"><Icon d="building" /></span>Lavandería Klinko</div>
            <div className="app-navlbl">Plataforma</div>
            <div className="app-nav is-active"><Icon d="grid" className="app-ni" />Resumen</div>
            <div className="app-nav"><Icon d="bag" className="app-ni" />Órdenes</div>
            <div className="app-nav"><Icon d="users" className="app-ni" />Clientes</div>
            <div className="app-nav"><Icon d="box" className="app-ni" />Productos</div>
            <div className="app-nav"><Icon d="gear" className="app-ni" />Ajustes</div>
            <div className="app-user">
              <span className="app-user-av">AT</span>
              <span className="app-user-meta"><b>Alex Torres</b><i>alex.torres@klinko.mx</i></span>
            </div>
          </aside>
          <main className="app-main">
            <div className="app-mhead">
              <div>
                <div className="app-greet">Hola, Alex 👋</div>
                <div className="app-date">Este es el resumen de la operación de tu sucursal.</div>
              </div>
              <span className="app-newbtn">+ Nueva orden</span>
            </div>
            <div className="app-stats">
              <div className="app-stat"><div className="k"><Icon d="bag" />Órdenes activas</div><div className="v"><CountUp end={24} /></div><span className="b">+12%</span></div>
              <div className="app-stat"><div className="k"><Icon d="dollar" />Ingresos del día</div><div className="v"><CountUp end={8420} prefix="$" /></div><span className="b">+4.5%</span></div>
              <div className="app-stat"><div className="k"><Icon d="users" />Clientes nuevos</div><div className="v"><CountUp end={8} /></div><span className="b">+2</span></div>
              <div className="app-stat"><div className="k"><Icon d="clock" />Tiempo promedio</div><div className="v">1.8h</div><span className="b">−6%</span></div>
            </div>
            <div className="app-grid2">
              <div className="app-panel">
                <div className="app-panel-h"><span className="t">Órdenes de hoy</span><span className="a">VER TODAS</span></div>
                <div className="orow"><div><div className="who">María G.</div><div className="ometa">#1042 · Roma · 2 cobijas + ropa</div></div><div className="ort"><span className="oamt">$240</span><span className="chip c-pick">RECOLECCIÓN</span></div></div>
                <div className="orow"><div><div className="who">Sofía M.</div><div className="ometa">#1038 · Nápoles · 6 kg</div></div><div className="ort"><span className="oamt">$150</span><span className="chip c-proc">EN PROCESO</span></div></div>
                <div className="orow"><div><div className="who">Carlos R.</div><div className="ometa">#1039 · Condesa · tintorería</div></div><div className="ort"><span className="oamt">$180</span><span className="chip c-rt">EN RUTA</span></div></div>
                <div className="orow"><div><div className="who">Diego L.</div><div className="ometa">#1035 · Roma Sur · edredón</div></div><div className="ort"><span className="oamt">$320</span><span className="chip c-done">ENTREGADA</span></div></div>
              </div>
              <div className="app-panel">
                <div className="app-panel-h"><span className="t">Servicio a domicilio</span><span className="chip c-done">ACTIVO</span></div>
                <div className="zrow"><span className="zdot z1" />Roma Norte<span className="zmeta">zona activa</span></div>
                <div className="zrow"><span className="zdot z2" />Condesa<span className="zmeta">zona activa</span></div>
                <div className="zrow"><span className="zdot z3" />Del Valle<span className="zmeta">zona activa</span></div>
                <div className="zfoot">Tarifa: gratis ≥ $300 · después $35</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
    );
  };

  /* ---------- Ticker — looping benefits strip under the hero ---------- */

  const Ticker = ({ t }) => {
    const items = t.hero.ticker || [];
    const seq = (key) => (
      <span className="ticker-seq" key={key} aria-hidden={key > 0 ? 'true' : undefined}>
        {items.map((it, i) => (
          <span className="ticker-item" key={i}><i />{it}</span>
        ))}
      </span>
    );
    return (
      <div className="ticker" data-bg="cream">
        <div className="ticker-track">{seq(0)}{seq(1)}</div>
      </div>
    );
  };

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
        <ol className="journey" data-reveal="stagger">
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

  /* Per-module UI vignettes — faithful to the real product screens */
  const ModuleMock = ({ active }) => {
    /* 01 — Servicio a domicilio: toggles + tarifas (settings screen) */
    if (active === 1) return (
      <div className="mk" aria-hidden="true">
        <div className="mk-h"><span className="mk-hdot" />Ajustes · Servicio a domicilio<span className="mk-h-r">Sucursal Roma</span></div>
        <div className="mk-set"><span className="mk-set-t">Servicio a domicilio</span><span className="sw on"><i /></span></div>
        <div className="mk-set sub"><span className="mk-set-t">Lavandería</span><span className="mk-set-n">3/4 servicios</span><span className="sw on"><i /></span></div>
        <div className="mk-set sub"><span className="mk-set-t">Tintorería</span><span className="mk-set-n">2/2 servicios</span><span className="sw on"><i /></span></div>
        <div className="mk-lbl">Tarifas de entrega</div>
        <div className="rrow"><span className="rnum">01</span><span className="rcond">Monto ≥ $300</span><span className="rval free">Gratis</span></div>
        <div className="rrow"><span className="rnum">02</span><span className="rcond">Distancia ≥ 5 km</span><span className="rval">$12/km</span></div>
        <div className="rrow"><span className="rnum">03</span><span className="rcond">Siempre</span><span className="rval">$35</span></div>
      </div>
    );
    /* 02 — Zonas de entrega: polygons on the map + zone list */
    if (active === 2) return (
      <div className="mk" aria-hidden="true">
        <div className="mk-h"><span className="mk-hdot" />Zonas de entrega<span className="mk-h-r">3 zonas</span></div>
        <div className="mk-map">
          <svg viewBox="0 0 320 150" preserveAspectRatio="none">
            <path className="mk-street" d="M0 40 H320 M0 95 H320 M60 0 V150 M150 0 V150 M240 0 V150" />
            <polygon className="mk-zone za" points="20,25 130,15 140,70 90,88 25,75" />
            <polygon className="mk-zone zb" points="160,55 265,40 285,105 195,120 155,95" />
            <g className="mk-vertex"><circle cx="160" cy="55" r="4"/><circle cx="265" cy="40" r="4"/><circle cx="285" cy="105" r="4"/><circle cx="195" cy="120" r="4"/><circle cx="155" cy="95" r="4"/></g>
          </svg>
        </div>
        <div className="zrow"><span className="zdot z1" />Roma Norte<span className="zmeta">✎</span></div>
        <div className="zrow"><span className="zdot z2" />Condesa<span className="zmeta">✎</span></div>
        <div className="zrow"><span className="zdot z3" />Del Valle<span className="zmeta">✎</span></div>
      </div>
    );
    /* 03 — App de repartidores: route + stops */
    if (active === 3) return (
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
    /* 00 — Tablero: resumen + órdenes */
    return (
      <div className="mk" aria-hidden="true">
        <div className="mk-h"><span className="mk-hdot" />Resumen · Hoy<span className="mk-h-r">Sucursal Roma</span></div>
        <div className="mk-stats">
          <div className="mk-stat"><span className="k">Activas</span><span className="v">24</span></div>
          <div className="mk-stat"><span className="k">Ingresos</span><span className="v">$4,250</span></div>
          <div className="mk-stat"><span className="k">Nuevos</span><span className="v">6</span></div>
        </div>
        <div className="orow"><div><div className="who">María G.</div><div className="ometa">#1042 · Roma · 2 cobijas + ropa</div></div><div className="ort"><span className="oamt">$240</span><span className="chip c-pick">RECOLECCIÓN</span></div></div>
        <div className="orow"><div><div className="who">Sofía M.</div><div className="ometa">#1038 · Nápoles · 6 kg</div></div><div className="ort"><span className="oamt">$150</span><span className="chip c-proc">EN PROCESO</span></div></div>
        <div className="orow"><div><div className="who">Diego L.</div><div className="ometa">#1035 · Roma Sur · edredón</div></div><div className="ort"><span className="oamt">$320</span><span className="chip c-done">ENTREGADA</span></div></div>
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
          <div className="module-cards" data-reveal="stagger">
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

          {/* Roadmap note — the WhatsApp/marketing vision, honestly flagged */}
          {t.features.soon && (
            <div className="soon-strip">
              <span className="soon-badge">{t.features.soon.label}</span>
              <span className="soon-text">{t.features.soon.text}</span>
            </div>
          )}

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
        <Mono className="eyebrow">{t.demo.eyebrow}</Mono>
        <div className="demo-block" data-reveal="">
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
          <div className="faq-row" data-reveal="">
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
      <div className="container" data-reveal="">
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
        <Nav t={t} navBg={navBg} />
        <Hero t={t} />
        <Ticker t={t} />
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
