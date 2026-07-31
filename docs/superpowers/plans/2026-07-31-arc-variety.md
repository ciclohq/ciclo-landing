# Arc Variety — break the visual monotony

> REQUIRED SUB-SKILL: superpowers:subagent-driven-development.

**Goal:** Stop the page reading as one repeated shape. Give the arc's four parts four genuinely different geometries, fix the surface rhythm, and collapse the duplicated panel shells.

**Amends:** the merged section quality pass (PR #2, `4c50bb4`). All its Global Constraints still bind.

## The diagnosis, measured

Three of the arc's four media blocks are the *same shell*:

| Part | Media | Radius | Background | Border |
|---|---|---|---|---|
| Recibe | `.thread-frame` | 14px | #F5F5F5 | 1px |
| Opera | `.board-panel` | 14px | #FFFFFF | 1px |
| Entrega | `.fee-panel` | 14px | #FFFFFF | 1px |
| Retiene | `.retain-panel` | 0 | transparent | 0 |

Seven rounded-and-bordered panels exist across the stylesheets. `.retain-card`, `.board-panel`, `.fee-panel` and `.thread-frame` each redeclare an equivalent shell plus a near-identical `-head` and `-label`, and they have already drifted (row padding 14/14/14/16, one uses `clamp()`). Changing panel padding currently needs three edits.

Surface rhythm collides twice: hero and arc are both cream (≈5.7 phone screens together), and `#incluye` / `#personal` are both off-white back to back.

Net effect, in the final reviewer's words: *"traded AI-slop cards for everything-is-a-hairline-list — a different uniform, same uniformity."* Roughly nine phone screens between hero and price with no change in shape, scale or colour.

## Global Constraints

- No build step, no `package.json`, no npm dependencies.
- **No new colors** — every value from `styles/tokens.css`.
- Light mode only (no dark *theme*; individual dark surfaces are allowed — the footer is already navy).
- Classic `text/babel` scripts, order `i18n.jsx` → `ui.jsx` → `landing.jsx`.
- ES and EN in sync; `node scripts/check-i18n.mjs` exits 0 (currently **241**).
- **390px is the design width.** Body ≥16px, meta ≥12px, tap targets ≥44px. Page is 13.6 phone screens — do not grow it.
- **Every claim maps to product source** at `/Users/alex.torres/dev/projects/ciclohq/ciclo`, never to other copy on this page. Five false claims have shipped; that circular check is how each survived.
- Motion note: "no animation" was previously briefed as absolute and that was **wrong** — `rise-in`, `faq-fade`, an IntersectionObserver reveal and button hover transforms all pre-date this work. Do not add gratuitous motion; do not contort to avoid it.

---

### Task 1 — Four different geometries

**Files:** `src/landing.jsx`, `src/i18n.jsx`, `styles/landing.css`, `styles/components.css`

The target is four *shapes*, not four skins: **bubbles → columns → map → dots.**

- **01 Recibe — unchanged.** The `Thread` is the page's signature and is already the most distinct thing on it. Do not touch it.
- **02 Opera — stage lanes.** Replace the vertical list with the board's actual metaphor: parallel stage columns, each with its label, a count, and a compact order or two. Stage keys are `pickup`/`processing`/`delivery` (`apps/api/src/schema/lifecycle-stage-type.ts`); bot-created orders sit outside them as *Por confirmar* until a dispatcher confirms (`agent/tools.ts` ~1171, `order-status-pill.tsx`). A board scrolls sideways in real life — at 390px horizontal scroll *within the lane strip* is acceptable and honest, but the page itself must never scroll horizontally.
- **03 Entrega — a zone map.** Draw the delivery zone as an inline SVG polygon with a compact fee ladder beside or beneath it. Zones are genuinely drawn on a map in the product. Keep the existing rule values consistent with the rest of the page (*gratis desde $300*, *$12/km*) or change both together. Inline SVG only — no image files, no external requests.
- **04 Retiene — a punch card.** The stamp card is inherently a grid of stamps: render filled and empty stamps as circles so the geometry reads as counting, not as rows. Only **completed** orders earn a stamp (`loyalty-progress.ts:62-70`); the target is `buyQuantity` (`:147`); per-kilo targets are rejected (`promotion.service.ts:419`). Keep the membership state alongside, but it must not reintroduce a hairline-row block.

**Then consolidate the shell.** Once the new forms exist, extract the surviving common chrome into a single reusable class rather than three near-copies with drifted padding. Delete whatever the new forms orphan — no dead CSS.

### Task 2 — Page rhythm

**Files:** `src/landing.jsx`, `styles/landing.css`, `src/i18n.jsx`

1. **Fix the two surface collisions.** Hero and arc are both cream; `#incluye` and `#personal` are both off-white and adjacent. Re-sequence surfaces so no two adjacent sections share one, and so the eye gets a change of ground at least every couple of screens. `data-bg` drives the nav background — keep every section's attribute correct after any change.
2. **Introduce one inverted band.** Nine screens of light surfaces is the core complaint. Give exactly **one** mid-page section a dark ground using existing on-dark tokens (`--ink`, `--hairline-on-dark`, `--body-on-dark`, `--body-on-dark-muted`) — the same family the footer already uses. `#asistente` is the natural candidate: it is short, self-contained, and the teal thread reads well on dark. **One only** — two would become their own pattern. Verify contrast ≥4.5:1 for every text pair on the dark ground.
3. **Demote `#personal`.** It is a fake three-employee roster carrying an `h2`, given the same weight as the delivery engine, for the least differentiating feature on the page. Reduce it to something compact that states the capability without a fabricated roster — and reclaim the vertical space. Attendance must remain represented; it was moved out of the FAQ deliberately.

## Verification

Per task: `check-i18n.mjs` exits 0, and the controller runs Chromium at 390/768/1024/1440 in both locales checking console errors, page-level horizontal overflow, computed type sizes, tap targets, contrast on any dark ground, and total page height (must not exceed 13.6 phone screens at 390px).
