/* =============================================================
   Ciclo — Reusable UI primitives (window.UI)
   Designed for reuse across landing, blog, and any future page.
   Page-specific React lives elsewhere.
   ============================================================= */

(() => {
  /* ---------- Logo — droplets mark + wordmark, matches the product app ---------- */

  const Logo = ({ className = '' }) => (
    <span className={`nav-logo ${className}`} style={{ lineHeight: 1 }}>
      <span className="logo-ic" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
          <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
        </svg>
      </span>
      ciclo
    </span>
  );

  /* ---------- Mono label — caps + monospace ---------- */

  const Mono = ({ children, size = 'sm', className = '', as = 'span', style = {} }) => {
    const C = as;
    const cls = `${size === 'md' ? 'mono-md' : 'mono'} ${className}`.trim();
    return <C className={cls} style={style}>{children}</C>;
  };

  /* ---------- Language toggle — ES/EN, sits in the nav ---------- */

  const LangToggle = ({ lang, setLang }) => (
    <div className="lang-toggle" role="group" aria-label="Idioma">
      {['es', 'en'].map((l) => (
        <button
          key={l}
          className={lang === l ? 'is-active' : ''}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  /* ---------- Export to global ---------- */

  window.UI = { Logo, Mono, LangToggle };
})();
