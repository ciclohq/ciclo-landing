# Conversation-Led Design Amendment

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Make the page look like Ciclo rather than like generic SaaS, by turning the WhatsApp conversation into the design's signature element — and give the AI assistant its own section.

**Amends:** `2026-07-30-landing-product-pitch.md` (merged). Everything in that plan's Global Constraints still binds.

## Why

Two pieces of feedback after the rebuild landed:

1. *"this is the same design it previously had."* Correct. The rebuild removed ornament and corrected tokens, but never touched the visual language: centered hero → badge → headline → lede → two buttons → big image, alternating text/image rows, two-card grid, white card on tint, two-column FAQ, dark footer. It is a cleaner version of the same page. The earlier fork toward "match the product app" optimized for restraint and delivered exactly that.
2. *"we mention whatsapp and the AI assistant really little."* Also correct. WhatsApp is one of four equal arc parts, carrying the same weight as delivery-fee rules. The assistant is a trailing clause in part 04 plus two words in a table row. The two most defensible features are the least visible.

Both resolve with one move: stop *depicting* the conversation in a screenshot and make the conversation the page's recurring visual form.

## Approach

A `Thread` primitive renders chat exchanges in HTML. It appears three times — hero, arc 01, and the new assistant section — which makes it a motif rather than a one-off.

**Do not clone WhatsApp's interface.** No `#25D366` green, no imitation of their bubble chrome or header. Use Ciclo's own tokens: `--brand` for outbound, `--bright-white` over `--hairline` for inbound, `--radius-xl` corners. It should read unmistakably as a conversation while looking like Ciclo. Imitating a third party's UI on a commercial page is both a legal and a taste problem.

**Side benefit:** hero and arc 01 stop depending on captures that do not exist. The screenshot list drops from five slugs to three (`opera`, `entrega-zonas`, `retiene`), and the interim page shows two real-looking conversations instead of five grey boxes.

## Global Constraints

Inherited from the parent plan, restated because they bind every task:

- No build step. No `package.json`, no bundler, no npm dependencies.
- No new colors — every value from `styles/tokens.css`.
- Light mode only. **No animation** — the parent plan deleted tilt, count-ups and a marquee precisely because they read as generated; a typing-dots or message-arrival animation would reintroduce that.
- Classic `text/babel` scripts publishing to `window.*` in order `i18n.jsx` → `ui.jsx` → `landing.jsx`.
- ES and EN i18n trees in sync. `node scripts/check-i18n.mjs` must exit 0.
- Every claim must match what ships. **Ciclo does not process payments** — no bubble may show the bot taking money. It receives, schedules, and hands off.
- Google Business reviews stay off the page.

---

### Task 1: The `Thread` primitive

**Files:** `src/ui.jsx`, `styles/components.css`

**Produces:** `Thread` in `window.UI`, signature `<Thread messages caption? />` where `messages` is an array of `{ from: 'customer' | 'ciclo' | 'staff', text, time? }`, plus an optional `{ divider: 'text' }` entry for the human-handoff marker.

- [ ] **Step 1: Write the component**

Three speaker roles, because the handoff is the story: `customer` (inbound, left), `ciclo` (the bot, right, brand-tinted), `staff` (a human on the team, right, visually distinct from the bot so the handoff is legible without reading). A `divider` entry renders a hairline rule with centered small-caps text.

Semantics: render as an ordered list, not a stack of divs. Each message needs an accessible speaker label — a visually-hidden `<span>` naming who is speaking, so a screen reader does not encounter an undifferentiated wall of text. The whole thread takes an `aria-label` from the caption.

- [ ] **Step 2: Style it**

Bubbles: `--radius-xl`, generous padding, `max-width: 78%`. Inbound `--bright-white` with a `--hairline` border; `ciclo` filled `--brand` with white text; `staff` `--accent-soft` with `--ink` text. Timestamps in `--font-mono` at a small size in `--body-muted`.

Must be legible at 390px **and** inside the arc's ~570px column — this is the whole reason for choosing HTML over screenshots, so verify type size at both.

Add a `.thread-frame` wrapper: a phone-ish container with `--radius-xl`, `--hairline` border and `--shadow-md`, no imitation of any real device chrome or OS status bar.

- [ ] **Step 3: Export and verify**

Add to `window.UI`. Confirm the page still mounts and `window.UI` exports `Logo, Mono, LangToggle, Screen, Thread`.

- [ ] **Step 4: Commit**

---

### Task 2: Hero as conversation

**Files:** `src/landing.jsx`, `src/i18n.jsx`, `styles/landing.css`

- [ ] **Step 1: Replace the hero's `<Screen>` with a two-panel composition**

Left: a `Thread` showing a customer ordering and the bot scheduling the pickup. Right: the resulting order card — folio, customer, zone, service, stage chip, scheduled time — as a static card built from tokens.

The point of the pairing is the causal link: a message on the left becomes an order on the right. At desktop they sit side by side; at mobile the thread stacks above the card.

- [ ] **Step 2: Write the conversation copy in both locales**

Short — four to six messages. It must not imply payment. A truthful arc: customer asks, bot answers with the service and price, customer confirms, bot schedules the pickup and states the window.

- [ ] **Step 3: Delete the now-unused `hero` slug**

The hero no longer renders a `<Screen>`. Remove `hero.alt` if it becomes orphaned, keeping both locales in sync.

- [ ] **Step 4: Verify and commit**

`node scripts/check-i18n.mjs` exits 0. Report what you could not verify.

---

### Task 3: Arc 01 becomes the handoff, and WhatsApp gets its weight

**Files:** `src/landing.jsx`, `src/i18n.jsx`, `styles/landing.css`

- [ ] **Step 1: Render arc part 01 with a `Thread` instead of a `<Screen>`**

This thread's job is the handoff the hero does not show: the customer asks something out of scope, a `divider` marks the transfer, and a `staff` message answers. That is the single most credible thing on the page — it is what makes "a bot takes your orders" believable to a sceptical owner.

The other three parts keep their `<Screen>`.

- [ ] **Step 2: Give WhatsApp more than a quarter of the arc**

With the hero and part 01 both conversations, WhatsApp already owns the top of the page. Adjust part 01's copy so it reads as the spine rather than as one of four equal siblings — more substantial body copy, and features that name the mechanics (intent classification, templated answers, handoff, shared inbox).

- [ ] **Step 3: Remove the `recibe` slug**

No longer rendered. Keep locales in sync.

- [ ] **Step 4: Verify and commit**

---

### Task 4: The assistant gets its own section

**Files:** `src/landing.jsx`, `src/i18n.jsx`, `styles/landing.css`, and the capture plan in the sibling repo

- [ ] **Step 1: Add an `Assistant` section between `Arc` and `Included`**

`id="asistente"`, its own `data-bg`. A short heading, a sentence of framing, and a `Thread` rendering a real question and a real answer — the same primitive as the hero, which is what makes it a motif.

The exchange must be answerable from what the product actually has: sales, customers, comments, order history. A plausible question is *"¿cómo van las ventas esta semana?"* with an answer summarising figures and a comparison. **Do not invent capabilities** — no forecasting, no advice, no actions taken on the owner's behalf.

- [ ] **Step 2: Add it to the nav**

The nav currently reads Cómo funciona / Producto / Precios / FAQ. Decide whether the assistant earns a nav slot or is reached by scrolling; if you add one, keep the nav from overflowing at 768px — it was already tight enough that the language toggle had to be moved to the footer below that width.

- [ ] **Step 3: Update the capture plan in the sibling repo**

`../ciclo/docs/superpowers/plans/2026-07-30-demo-seed-and-capture.md` still lists `hero` and `recibe`. Both are gone. Reduce the shot list to `opera`, `entrega-zonas`, `retiene` — three desktop captures plus three mobile crops, six images rather than ten.

- [ ] **Step 4: Verify and commit**

---

## Verification

No test framework, by design. Per task: `node scripts/check-i18n.mjs` exits 0, and the controller runs a Chromium pass at 1440/1024/768/390px checking console errors, failed requests, mounting, horizontal overflow, and computed type sizes inside the arc column.

**Specific to this amendment:** confirm no `#25D366` or other WhatsApp-brand green enters the stylesheet, and that thread text is legible at 390px and in the ~570px arc column.
