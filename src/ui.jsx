/* =============================================================
   Ciclo — Reusable UI primitives (window.UI)
   Designed for reuse across landing, blog, and any future page.
   Page-specific React lives elsewhere.
   ============================================================= */

(() => {
  /* ---------- Logo — wordmark only ---------- */

  const Logo = ({ className = '' }) => (
    <span className={`nav-logo ${className}`} style={{ lineHeight: 1 }}>
      ciclo<span className="accent">.</span>
    </span>
  );

  /* ---------- Mono label — caps + monospace ---------- */

  const Mono = ({ children, size = 'sm', className = '', as = 'span', style = {} }) => {
    const C = as;
    const cls = `${size === 'md' ? 'mono-md' : 'mono'} ${className}`.trim();
    return <C className={cls} style={style}>{children}</C>;
  };

  /* ---------- Tweaks panel — language + theme picker ---------- */

  const TweaksPanel = ({ open, setOpen, lang, setLang, theme, setTheme, t }) => {
    if (!open) {
      return (
        <button className="tweaks-toggle" onClick={() => setOpen(true)} aria-expanded="false">
          <span className="dot-mini" />
          <span>{t.title}</span>
        </button>
      );
    }
    return (
      <>
        <button className="tweaks-toggle" onClick={() => setOpen(false)} aria-expanded="true">
          <span className="dot-mini" />
          <span>{t.close}</span>
        </button>
        <div className="tweaks-panel" role="dialog" aria-label="Tweaks">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Mono style={{ color: 'var(--ink)' }}>{t.title}</Mono>
            <Mono style={{ color: 'var(--body-muted)' }}>v 4.0</Mono>
          </div>

          <hr className="hairline" />

          <div className="tweaks-row">
            <Mono>{t.lang}</Mono>
            <div className="seg">
              {t.langs.map((l) => (
                <button key={l} className={lang === l.toLowerCase() ? 'is-active' : ''} onClick={() => setLang(l.toLowerCase())}>{l}</button>
              ))}
            </div>
          </div>

          <div className="tweaks-row">
            <Mono>{t.theme}</Mono>
            <div className="seg">
              {t.themes.map((th) => (
                <button key={th} className={theme === th.toLowerCase() ? 'is-active' : ''} onClick={() => setTheme(th.toLowerCase())}>{th}</button>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  /* ---------- Export to global ---------- */

  window.UI = { Logo, Mono, TweaksPanel };
})();
