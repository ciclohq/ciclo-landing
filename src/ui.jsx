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

  const LangToggle = ({ lang, setLang, label }) => (
    <div className="lang-toggle" role="group" aria-label={label}>
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

  /* ---------- Thread — the conversation-as-UI primitive ----------
     Renders a WhatsApp-shaped exchange without cloning WhatsApp: no
     WhatsApp green, no bubble tails/tick marks, no header bar or OS
     chrome. Built entirely from Ciclo tokens so it reads as "a
     conversation happened here" while looking unmistakably like Ciclo.

     Two speaker roles:
       - customer: inbound, left, bright-white bubble on a hairline.
       - ciclo:    the bot, right, filled --brand, white text.
     A `{ divider: 'text' }` entry marks the instant the bot hands off to
     a person — a hairline rule with small centered text, no reply bubble
     of its own. There is deliberately no third "staff" role: Ciclo has no
     way to put a staff reply in a customer's WhatsApp thread that is both
     attributable (the `messages` table carries no sender identity) and
     honestly NOT implied to have been composed inside Ciclo (staff can
     only reply from WhatsApp directly — see thread-view.tsx's "Responde
     desde WhatsApp"). A previous version had a `staff` role for exactly
     one thread; it's gone along with that thread now that the divider
     alone carries the point. Re-add it only once a caller has a bubble
     that can be honestly attributed.

     Semantics: an <ol role="list"> (role="list" defends against the
     old Safari/VoiceOver bug where `list-style: none` — set globally
     in base.css — strips list semantics). Each message carries a
     visually-hidden speaker label ahead of its text so a screen
     reader doesn't hit an undifferentiated wall of bubbles. `caption`
     becomes the list's accessible name.

     `speakerLabels` lets one call site override the announced label for
     a role (e.g. the assistant section's 'customer' role is the business
     owner, not a WhatsApp customer) without touching the `from` role
     names themselves — the hero and arc sections still key off
     'customer'/'ciclo' and don't pass this prop, so they keep the
     default labels unchanged. */

  const THREAD_SPEAKER_LABELS = {
    es: { customer: 'Cliente', ciclo: 'Ciclo (bot)' },
    en: { customer: 'Customer', ciclo: 'Ciclo (bot)' },
  };

  const Thread = ({ messages = [], caption, lang = 'es', speakerLabels }) => {
    const labels = { ...(THREAD_SPEAKER_LABELS[lang] || THREAD_SPEAKER_LABELS.es), ...(speakerLabels || {}) };
    return (
      <div className="thread-frame">
        <ol className="thread" role="list" aria-label={caption || undefined}>
          {messages.map((m, i) => {
            if (m.divider) {
              return (
                <li key={i} className="thread-divider">
                  <span className="thread-divider-line" aria-hidden="true" />
                  <span className="thread-divider-text">{m.divider}</span>
                  <span className="thread-divider-line" aria-hidden="true" />
                </li>
              );
            }
            return (
              <li key={i} className={`thread-msg thread-msg--${m.from}`}>
                <span className="thread-bubble">
                  <span className="sr-only">{(labels[m.from] || m.from) + ': '}</span>
                  <span className="thread-text">{m.text}</span>
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    );
  };

  /* ---------- Screenshot — a real capture, rendered at real size ----------
     One image, no mobile crop, no <picture>/<source> fallback machinery —
     a previous `Screen` component had both (plus an onError that
     reassigned `src`), and a failing <source> paired with that onError is
     an infinite request loop: the browser falls back to the onError's new
     `src`, which still matches the <source>'s media query, so the
     <source> wins again. There is exactly one image here, so that failure
     mode can't occur. `width`/`height` are the intrinsic pixel dimensions
     (not the CSS display size — callers get that from their own layout
     CSS) so the browser reserves the correct aspect ratio before the
     image loads and nothing shifts underneath it. */

  const Screenshot = ({ src, width, height, alt, className = '' }) => (
    <img
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  );

  /* ---------- Export to global ---------- */

  window.UI = { Logo, Mono, LangToggle, Thread, Screenshot };
})();
