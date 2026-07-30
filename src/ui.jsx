/* =============================================================
   Ciclo — Reusable UI primitives (window.UI)
   Designed for reuse across landing, blog, and any future page.
   Page-specific React lives elsewhere.
   ============================================================= */

(() => {
  const { useState } = React;

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

  /* ---------- Screen — a real product screenshot, framed ----------
     The mobile crop is not a scaled-down desktop screenshot — the capture
     pipeline produces a tight element crop (a stat row, a single order
     card, a fee-rule list) with its own aspect ratio. Callers that supply
     a mobile crop must also supply its own mobileWidth/mobileHeight so the
     <source> reserves the right box; otherwise the browser would reserve
     space using the desktop ratio and reflow once the differently-shaped
     mobile image loads — the exact shift width/height exist to prevent.
     When mobileWidth/mobileHeight aren't both given, they're omitted from
     the <source> entirely: no dimensions is safer than the wrong ones.

     Failure is tracked in state, not by mutating the <img>'s src. Inside a
     <picture>, the matching <source> — not the <img src> — governs which
     resource loads; the <img src> is only used as a fallback when no
     <source> matches. Below 768px the mobile <source> always matches, so
     assigning a new src to the <img> on error does nothing to stop the
     browser from re-selecting that same failing <source>, which fires
     onError again — an infinite request loop. Once failed is true we stop
     rendering any <source> at all, so the <img src> — now the placeholder
     — is what actually gets used. */

  const Screen = ({ slug, alt, width, height, mobileWidth, mobileHeight, caption }) => {
    const [failed, setFailed] = useState(false);
    const hasMobileDims = mobileWidth != null && mobileHeight != null;
    const handleError = () => {
      // Idempotent: once failed, don't set it again — a placeholder that
      // somehow also 404s must not restart the cycle.
      if (!failed) setFailed(true);
    };
    // Only warn once the *real* desktop capture has loaded successfully —
    // `failed` is already updated by the time this fires for the
    // placeholder fallback, so today's placeholder state stays quiet.
    const handleLoad = () => {
      if (!failed && !hasMobileDims) {
        console.warn(`Screen "${slug}": mobileWidth/mobileHeight not set — mobile layout may shift when the mobile crop loads.`);
      }
    };
    return (
      <figure className="screen">
        <picture>
          {!failed && (
            <source
              media="(max-width: 767px)"
              srcSet={`assets/screens/${slug}-mobile.webp`}
              {...(hasMobileDims ? { width: mobileWidth, height: mobileHeight } : {})}
            />
          )}
          <img
            src={failed ? 'assets/screens/placeholder.svg' : `assets/screens/${slug}.webp`}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            onError={handleError}
            onLoad={handleLoad}
          />
        </picture>
        {caption && <figcaption className="screen-cap">{caption}</figcaption>}
      </figure>
    );
  };

  /* ---------- Thread — the conversation-as-UI primitive ----------
     Renders a WhatsApp-shaped exchange without cloning WhatsApp: no
     WhatsApp green, no bubble tails/tick marks, no header bar or OS
     chrome. Built entirely from Ciclo tokens so it reads as "a
     conversation happened here" while looking unmistakably like Ciclo.

     Three speaker roles because the handoff is the story: a sceptical
     owner needs to see the bot handle routine questions and a real
     person pick up anything unusual, without reading a word.
       - customer: inbound, left, bright-white bubble on a hairline.
       - ciclo:    the bot, right, filled --brand, white text.
       - staff:    a human teammate, right, --accent-soft — same side
                   as the bot but a different fill, so the transfer is
                   legible at a glance.
     A `{ divider: 'text' }` entry marks the instant the bot hands off
     to a person: a hairline rule with small centered text.

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
     'customer'/'ciclo'/'staff' and don't pass this prop, so they keep the
     default labels unchanged. */

  const THREAD_SPEAKER_LABELS = {
    es: { customer: 'Cliente', ciclo: 'Ciclo (bot)', staff: 'Alguien del equipo' },
    en: { customer: 'Customer', ciclo: 'Ciclo (bot)', staff: 'Team member' },
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

  /* ---------- Export to global ---------- */

  window.UI = { Logo, Mono, LangToggle, Screen, Thread };
})();
