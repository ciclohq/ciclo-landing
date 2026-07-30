# Section Quality Pass — mobile-first

> REQUIRED SUB-SKILL: superpowers:subagent-driven-development.

**Goal:** Every section earns its place, is scannable on a phone, and stops looking like a SaaS template. Features currently explained only in FAQ answers get real homes.

**Amends:** the merged rebuild + conversation-led redesign. All their Global Constraints still bind.

## The diagnosis

Measured at 390×844: the page is 10,646px — **12.6 phone screens**.

| Section | Mobile | Verdict |
|---|---|---|
| Hero | 2.2 screens | Works. Tall — the thread runs 6 messages. |
| `#how` (Arc) | 3.5 screens | The spine. But part 04 "Retiene" is hollow since the assistant was extracted out of it. |
| `#asistente` | 0.8 | Good, sparse. |
| `#incluye` | 1.2 | **Six run-on middot lists. Unscannable on a phone.** |
| `#audience` | 1.1 | **Textbook AI slop** — two identical bordered cards, gradient stripe, paragraph, pill tags, saying nothing. |
| `#pricing` | 0.9 | No price signal. Its "included" bullet is stale — omits WhatsApp, memberships, attendance, reports, assistant. |
| `#faq` | 1.2 | **A dumping ground.** See below. |
| CTA / footer | 1.6 | Fine. |

**The FAQ defect.** It answers *features*, not *objections*. Memberships, promotions, attendance and order tracking are explained **nowhere else on the page** — a spec-table row is not an explanation. One question ("¿Qué hace el bot solo y cuándo entra una persona?") is now redundant with arc 01, which shows exactly that.

**Mobile bug.** The sticky nav overlaps section headings on anchor navigation — no `scroll-margin-top` anywhere.

## Direction

**The page should look like the software, not like marketing about the software.** The Thread already proves this works. Everything that is *not* product-shaped — card grids, pill clouds, middot runs — is what reads as mediocre. Each section should show a real thing the product does, rendered the way the product renders it: order cards, rule rows, stamp cards, roster rows.

Refined and dense, not decorated. No new colors, no animation, light mode only, no build step — all inherited and non-negotiable.

## Global Constraints

- No build step, no `package.json`, no npm dependencies.
- No new colors — every value from `styles/tokens.css`.
- Light mode only. **No animation.**
- Classic `text/babel` scripts, order `i18n.jsx` → `ui.jsx` → `landing.jsx`.
- ES and EN in sync; `node scripts/check-i18n.mjs` exits 0.
- **Every claim maps to product source at `/Users/alex.torres/dev/projects/ciclohq/ciclo`.** Never verify a claim against other copy on this page — it has been wrong four times. Anything unmappable does not ship.
- **Mobile is the primary target.** 390px is the design width, not an afterthought.

---

### Task 1 — Mobile foundations and the capability index

**Files:** `styles/base.css`, `styles/landing.css`, `src/landing.jsx`, `src/i18n.jsx`

1. **Fix anchor scroll.** Add `scroll-margin-top` to every `[id]` section clearing the sticky nav's height, plus `scroll-behavior: smooth` gated behind `prefers-reduced-motion`.
2. **Rebuild `#incluye`.** Today each row is one `dd` of middot-joined text that wraps into an unscannable block. Make each capability its own line item so a phone user can scan it — hairline-separated, the group label anchored, generous tap-height rows. Keep it dense and product-like; do not turn it into cards.
3. **Audit the mobile type scale** across the page: body copy no smaller than 16px, meta labels no smaller than 12px. `.arc-feats li` currently renders at 10.5px — fix it.

### Task 2 — Kill the Audience slop; refill arc 04

**Files:** `src/landing.jsx`, `src/i18n.jsx`, `styles/landing.css`

1. **Replace `#audience`.** The two-card pattern goes. Show the *same order* moving through the system differently for a lavandería (by the kilo) versus a tintorería (per garment) — a factual, product-shaped comparison a shop owner recognises as their own work. Verify both models exist in the product (`pricing_unit`, per-kilo vs per-item offerings) before asserting either.
2. **Refill arc part 04.** It currently gestures at memberships, promotions, reports and an assistant that now has its own section. Give it a single clear job — customer retention — and let Task 3 carry the detail.

### Task 3 — Real homes for memberships, promotions and attendance; FAQ becomes objections

**Files:** `src/landing.jsx`, `src/i18n.jsx`, `styles/landing.css`

1. **Memberships and promotions** get genuine presence, product-shaped — a stamp card mid-progress, a membership state on a customer. Verify against `modules/membership`, `modules/promotion`; `buy_n_get_free` maps `buyQuantity = Y`, `freeQuantity = X − Y`, and rejects per-kilo targets.
2. **Attendance** gets a home — PIN clock-in, per-branch schedules, daily summary. Verify against `modules/attendance`.
3. **Shrink the FAQ to objections.** Remove every question that exists to explain a feature now shown elsewhere, and the one made redundant by arc 01. What remains should be doubts that stop a sale: own drivers, dry cleaning, fee control, what it takes to start.

### Task 4 — Pricing, and a whole-page mobile pass

**Files:** `src/i18n.jsx`, `styles/landing.css`, `src/landing.jsx`

1. **Pricing** — lead with **$499 MXN / month, per branch**, framed as a starting price. Supplied by the owner, who hedged with "i think" — it is flagged for confirmation before launch, so do not bury it in prose that would be expensive to re-edit; keep the figure in one i18n key. Per-branch is the unit: the product is multi-branch and the page already says so, so the wording must make the unit unambiguous rather than implying $499 covers a whole business. Also fix the stale "included" bullet, which omits WhatsApp, memberships, attendance, reports and the assistant.
2. **Whole-page mobile pass** at 390px: section rhythm and vertical spacing, tap targets ≥44px, no text below the scale, no horizontal overflow, and total scroll length reduced from 12.6 screens where content allows.

## Verification

Per task: `node scripts/check-i18n.mjs` exits 0, and the controller runs Chromium at 390/768/1024/1440 in both locales checking console errors, overflow, computed type sizes, tap-target heights and anchor-scroll offset.
