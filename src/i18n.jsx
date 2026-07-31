/* =============================================================
   Ciclo — Translations (ES primary, EN secondary)
   Add new keys here and consume via window.I18N[lang].path
   New pages can extend this object.
   ============================================================= */

window.I18N = {
  es: {
    /* --- WhatsApp — prefilled text for the demo CTAs.
           The number itself lives once, in landing.jsx. --- */
    wa: {
      demo: 'Hola, tengo una lavandería y me interesa una demo de Ciclo.',
      talk: 'Hola, tengo una duda sobre Ciclo.',
    },

    /* --- Nav --- */
    nav: {
      product: 'Producto',
      how:     'Cómo funciona',
      assistant: 'Asistente',
      pricing: 'Precios',
      faq:     'FAQ',
      login:   'Acceder',
      cta:     'Agenda una demo',
      lang_label: 'Idioma',
    },

    /* --- Hero — conversation + the order it produced ---
       The thread and the order card must agree: same customer, same
       branch, same pickup slot. That correspondence is the whole point of
       the pairing, so don't edit one without the other. The bot only ever
       schedules a recolección — it never asks what the customer is
       washing, never quotes a price, and never charges or collects
       payment (a person records items and price later, at the branch).
       Every bot bubble here must be a literal templates.ts output; see
       apps/api/src/hatchet/workflows/agent/{templates,run-conversation}.ts
       in the ciclo repo. */
    hero: {
      badge: 'Para lavanderías y tintorerías',
      h1: 'Tus clientes piden por WhatsApp. Tú solo entregas.',
      sub: 'Ciclo recibe el pedido, lo agenda y lo pone en tu tablero. Tú y tu equipo solo lavan, planchan y entregan.',
      cta_primary: 'Agenda una demo',
      cta_ghost:   'Ver cómo funciona',
      trust: 'Sin contratos largos · Configuramos tu operación en la demo',
      thread_caption: 'Conversación de ejemplo por WhatsApp',
      thread: [
        { from: 'customer', text: 'Hola, ¿me pueden pasar a recoger ropa?' },
        { from: 'ciclo', text: '¡Hola de nuevo, Renata! 👋' },
        { from: 'ciclo', text: 'El horario de la sucursal es:\nLun-Vie 09:00-18:00; Sáb 10:00-14:00\n\n¿Qué día y en qué horario (mañana, tarde o noche) te queda bien la recolección?' },
        { from: 'customer', text: 'El 16 de julio en la tarde, si se puede.' },
        { from: 'ciclo', text: 'Voy a agendar tu recolección:\n\n👤 Renata Vidal\n📍 Río Pánuco 22, Roma Norte, Cuauhtémoc, Ciudad de Mexico, C.P. 06500\n🏠 Sucursal: Sucursal Roma Norte\n🕑 16 de julio por la tarde\n\n¿Confirmas? (sí/no)' },
        { from: 'customer', text: 'Sí, confirmo.' },
      ],
      order: {
        folio: '#4821',
        customer_label: 'Cliente',
        customer: 'Renata Vidal',
        address_label: 'Dirección',
        address: 'Río Pánuco 22, Roma Norte',
        branch_label: 'Sucursal',
        branch: 'Sucursal Roma Norte',
        stage: 'Por confirmar',
        window_label: 'Recolección',
        window: '16 de julio · por la tarde',
        note: 'Llega a tu bandeja como "Por confirmar": alguien de tu equipo la revisa y confirma antes de que entre al tablero — ningún pedido del bot se agenda solo.',
      },
    },

    /* --- Screens — the one real screenshot on the page. Sits right after
       the hero: the WhatsApp thread and the order it produced is the hero's
       pitch, and this is "here is where that order lands." A real capture
       of the running dashboard against a synthetic demo org ("Lavandería
       Aurora") — not a customer's live numbers, hence `caption` says so
       explicitly. `alt` and `sub` describe only what's visibly in the
       image: active orders, value in process, staff on shift, orders
       needing attention, a weekly orders chart, stage distribution, recent
       orders, today's attendance. Nothing here is invented or extrapolated
       past what the screenshot itself shows. */
    screens: {
      h: 'Así se ve tu operación completa.',
      sub: 'Pedidos activos, personal en turno y lo que necesita tu atención — todo en un panel.',
      alt: 'Panel de control de Ciclo: pedidos activos, valor en proceso, personal en turno, pedidos que necesitan atención, una gráfica semanal de pedidos, distribución por etapa, pedidos recientes y asistencia del día.',
      caption: 'Panel de una organización de demostración — datos de ejemplo, no una operación real.',
    },

    /* --- Arc — the four-part product narrative (recibe → opera → entrega → retiene) --- */
    arc: {
      parts: [
        {
          num: '01',
          name: 'Recibe',
          body: 'Tus clientes escriben al mismo número de siempre. El bot responde por plantilla — catálogo, precios, disponibilidad, agenda — y en cuanto la pregunta se sale del guion, la pasa a tu equipo sin que el cliente tenga que escribir a otro número.',
          feats: ['Clasificación de intención', 'Respuestas por plantilla', 'Transferencia a una persona', 'Bandeja de conversaciones compartida'],
          thread_caption: 'Ejemplo: el bot transfiere una pregunta fuera de guion',
          thread: [
            { from: 'customer', text: '¿Cuánto cuesta lavar un edredón king size? No sé si eso lo manejan.' },
            { from: 'ciclo', text: 'Déjame checarlo con el equipo, en un momento te contactan. 🙋' },
            { divider: 'Conversación transferida a una persona' },
          ],
        },
        {
          num: '02',
          name: 'Opera',
          body: 'Cada orden entra al tablero con su cliente, sus prendas y su etapa. En el mostrador capturas las prendas — cantidades y pesos — desde el punto de venta, y cambias de sucursal en un clic.',
          feats: ['Tablero por etapas', 'Punto de venta', 'Multi-sucursal', 'Catálogo y precios'],
          /* Product-shaped visual, not a screenshot — see Board's comment
             in landing.jsx for the full source citation. Folio #4821 /
             Renata Vidal is the same order the hero's OrderCard shows, on
             purpose, and sits under `unconfirmed`, outside every stage —
             `stages` holds only the three real lifecycle stages. */
          board: {
            label: 'Tablero · Sucursal Roma Norte',
            unconfirmed: { chip: 'Por confirmar', folio: '#4821', customer: 'Renata Vidal' },
            stages: [
              { key: 'pickup', label: 'Recolección', orders: [{ folio: '#4818', customer: 'Diego Salas' }] },
              { key: 'processing', label: 'Procesamiento', orders: [{ folio: '#4815', customer: 'Camila Ortiz' }] },
              { key: 'delivery', label: 'Entrega', orders: [{ folio: '#4809', customer: 'Luis Fernández' }] },
            ],
          },
        },
        {
          num: '03',
          name: 'Entrega',
          body: 'Dibujas tus zonas en el mapa y defines qué cobras: gratis desde $300, por kilómetro o tarifa fija. Tus repartidores ven la ruta del día en su teléfono y tu cliente sigue el pedido desde un link.',
          feats: ['Zonas en el mapa', 'Reglas de tarifa', 'App de repartidores', 'Seguimiento para el cliente'],
          /* Product-shaped visual, not a screenshot — see ZoneMap's comment
             in landing.jsx for the full source citation. Numbers match this
             part's own body copy exactly (gratis desde $300, $12 por
             kilómetro) — nothing new is claimed here. */
          zoneMap: {
            label: 'Zona de reparto',
            map_alt: 'Mapa con la zona de reparto dibujada alrededor de la sucursal',
            branch_label: 'Sucursal Roma Norte',
            ladder_label: 'Reglas de tarifa',
            rules: [
              { step: '1', condition: 'Pedido de $300 o más', charge: 'Gratis' },
              { step: '2', condition: 'Cualquier otro pedido', charge: '$12.00 / km' },
            ],
            note: 'Se aplica la primera regla que cumple su condición, evaluada en orden de prioridad.',
          },
        },
        {
          num: '04',
          name: 'Retiene',
          body: 'Cada cliente trae su historial: cuántas veces ha pedido y cuándo fue la última. Desde su ficha le asignas una membresía, para que la próxima vez te elija a ti primero.',
          feats: ['Historial por cliente', 'Clientes frecuentes', 'Membresías', 'Promociones'],
          /* Product-shaped visual, not a screenshot — verified against
             apps/api/src/modules/promotion/promotion-engine.ts (buy_n_get_free,
             countingWindow: 'customer_history': a stamp accumulates once per
             completed qualifying order — countDistinct(order.id) in
             src/common/loyalty-progress.ts punchCountsFor — and once punchCount
             reaches buyQuantity, the redeeming order's freeQuantity cheapest
             matching units go free, per countableUnitPrices' ascending sort in
             promotion-engine.ts) and membership-benefits.ts membershipSummaryFor
             (status: active/expired/pending derived from paidUntil/cancelledAt;
             percentOff, freeDelivery and allowanceAmount are independent,
             combinable plan fields per save-membership-plan.dto.ts — no
             exclusivity rule). The 7/10 progress, plan name and dates are an
             illustrative example, like the hero's order card — not a real
             customer. */
          retention: {
            stamp: {
              label: 'Sellos · Camisas',
              chip: 'En progreso',
              progress: 7,
              target: 10,
              progress_sr: '7 de 10 sellos',
              note: 'Cada orden completada con camisas suma un sello. Al llegar a 10, la prenda más barata de tu siguiente orden con camisas sale gratis.',
            },
            membership: {
              label: 'Membresía',
              status: 'Activa',
              plan: 'Plan Frecuente',
              benefit: '15% de descuento + entrega gratis',
              renews_label: 'Vigente hasta',
              renews: '18 de agosto',
            },
          },
        },
      ],
    },

    /* --- Assistant — its own section, the third and last appearance of
       Thread (hero, arc part 01, here), which is what turns it into a
       motif. The exchange must be answerable from what the assistant's
       tools actually return (get_sales_report: revenue, order count, avg
       ticket, category mix, new-vs-returning customers) — the model can
       call it for two ranges and narrate the comparison, but it never
       forecasts, advises, or acts on the owner's behalf. */
    assistant: {
      h: 'Un asistente que ya conoce tu negocio.',
      sub: 'Vive en tu panel y contesta con tus propios números — ventas, clientes, categorías — sin que armes un reporte.',
      thread_caption: 'Ejemplo: una pregunta real al asistente',
      /* speakers: overrides Thread's default speaker labels for THIS
         section only (Thread's `from` roles stay 'customer'/'ciclo' — the
         hero and arc part 01 threads keep depending on the defaults). The
         'customer' role here is the business owner asking about their own
         sales, not a WhatsApp customer, so the default "Cliente" label is
         wrong for a screen reader; same for "Ciclo (bot)" answering with
         report data instead of ordering. */
      speakers: { customer: 'Dueño del negocio', ciclo: 'Asistente de Ciclo' },
      thread: [
        { from: 'customer', text: '¿Cómo van las ventas esta semana?' },
        { from: 'ciclo', text: 'Esta semana llevas $18,430 en 61 pedidos (ticket promedio $302).\n14% más que la semana pasada ($16,180).\nLavado por kilo sigue siendo tu categoría con más ingresos, y tuviste 9 clientes nuevos.' },
      ],
      /* The reports screenshot beside the thread — same "your own numbers"
         claim, from the screen the assistant's answer is pulled from.
         Describes only what the capture shows: revenue/VAT/discounts/order
         count/avg ticket/cancellation-rate tiles, a daily-revenue chart and
         an orders-by-stage breakdown. */
      report_alt: 'Pantalla de reportes de Ciclo: ingresos, IVA, descuentos, número de órdenes, ticket promedio y tasa de cancelación del periodo, con una gráfica de ingresos por día y la distribución de órdenes por etapa.',
      report_caption: 'Reportes de una organización de demostración — datos de ejemplo.',
    },

    /* --- Driver route — the portrait screenshot's own moment, right after
       the arc. Copy describes only what the capture shows (see landing.jsx's
       DriverApp comment): 8 numbered stops, done vs. pending color, pickup
       vs. delivery icons, a next-stop card. No tracking-link claim here —
       that's the arc's own #incluye row, and the capture doesn't show it. */
    driver: {
      h: 'Cada repartidor trae su ruta en el bolsillo.',
      sub: 'Paradas numeradas en el mapa, recolecciones y entregas diferenciadas, y el avance del día a la mano.',
      alt: 'Ruta de un repartidor en el mapa: paradas numeradas del 1 al 8, en verde las completadas y en azul o morado las pendientes, con íconos distintos para recolección y entrega, y una tarjeta que muestra la próxima recolección con el avance 4 de 8.',
      caption: 'Ruta de un repartidor en una organización de demostración — datos de ejemplo.',
    },

    /* --- Included — the spec table; attendance lives here because it sits
       outside the delivery arc. Google reviews is absent by decision.
       Each row's capabilities are a list, not a middot-joined string — a
       phone user scans one item per line instead of parsing a run-on
       sentence. */
    included: {
      h: 'Todo lo que incluye',
      sub: 'Sin módulos que se cobran aparte.',
      rows: [
        { k: 'Órdenes',     items: ['Tablero por etapas', 'Punto de venta', 'Multi-sucursal', 'Catálogo y precios', 'Historial por orden'] },
        { k: 'WhatsApp',    items: ['Pedidos automáticos', 'Respuestas por plantilla', 'Transferencia a un humano', 'Bandeja de conversaciones'] },
        { k: 'A domicilio', items: ['Zonas en el mapa', 'Reglas de tarifa por monto, distancia o kilómetro', 'Rutas', 'App de repartidores'] },
        { k: 'Clientes',    items: ['Membresías', 'Promociones y tarjetas de sellos', 'Seguimiento por link', 'Calificaciones'] },
        { k: 'Personal',    items: ['Asistencia con PIN', 'Horarios por sucursal', 'Resumen diario'] },
        { k: 'Reportes',    items: ['Ventas', 'Clientes', 'Comentarios', 'Asistente con IA'] },
      ],
    },

    /* --- Attendance — a compact aside now, not a fabricated roster.
       Verified against apps/api/src/modules/attendance/: pin.util.ts (PIN
       hashing/verification), dto/punch.dto.ts (branchId + 4-digit PIN + type
       required per punch — the clock happens at a branch, not the PIN
       itself), schedule-resolution.ts (resolveSchedule: per-branch days,
       per-employee overrides, DEFAULT_TOLERANCE_MINUTES = 15, overridable per
       day) and daily-summary.ts (buildDailySummaries: 'late' when firstIn is
       after scheduledStart + tolerance, 'absent' when there are no punches by
       then, hours = lastOut − firstIn). `facts` replaces the old three-name
       roster (Marisol G./Iván R./Paola T. — invented employees, dropped) —
       see landing.jsx's Attendance comment for the per-fact source cite. --- */
    attendance: {
      h: 'Entradas y salidas, sucursal por sucursal.',
      sub: 'Tu equipo marca entrada y salida con un PIN de 4 dígitos en cada sucursal. Tú ves el horario de cada quien y un resumen del día.',
      note: 'Un empleado sale "tarde" si marca después de la tolerancia de su sucursal (15 minutos por defecto, ajustable por día), y "ausente" si no tiene ninguna marca en el día.',
      alt: 'Pantalla de asistencia: un teclado numérico con PIN de 4 dígitos y el reloj en vivo a la izquierda; a la derecha, el equipo de la sucursal con su horario 07:00–16:00 y su estado del día (en turno, tarde o falta).',
      caption: 'Asistencia de una organización de demostración — datos de ejemplo, no una operación real.',
    },

    /* --- Order models — two pricing units, one per category. Verified
       against apps/api/src/schema/category-type.ts (pricing_unit: per_item |
       per_kilo, CHECK-constrained, set per category), apps/api/src/common/
       order-items.ts (lineTotal = price * weight for per_kilo, price *
       quantity for per_item; assertItemsWeighed requires a weight on
       per_kilo lines before it can save) and apps/api/src/modules/
       promotion/promotion.service.ts (~line 419: buy_n_get_free rejects
       any category whose pricing_unit isn't per_item). The two example
       lines are two different illustrative orders (not one order shown
       twice — a per-kilo load and a per-garment order aren't the same
       order), so there is no shared "same order" framing here; each
       column's total is independently checkable from the per-unit prices
       shown in its own example line. The peso/prenda figures are
       illustrative, not real pricing. --- */
    audience: {
      h: 'Dos formas de cobrar, una por categoría.',
      sub: 'Cada categoría de tu catálogo cobra por kilo o por pieza. Ciclo captura la orden distinto según cuál sea.',
      labels: {
        unit: 'Unidad de cobro',
        capture: 'Qué se captura en mostrador',
        example: 'Ejemplo de la línea',
        total: 'Total',
      },
      models: [
        {
          name: 'Lavandería',
          unit: 'Por kilo',
          capture: 'El peso de la carga, en kilos',
          example: '5.4 kg × $32.00/kg',
          total: '$172.80',
        },
        {
          name: 'Tintorería',
          unit: 'Por pieza',
          capture: 'La cantidad de cada prenda',
          example: '2 camisas × $45.00 + 1 pantalón × $60.00',
          total: '$150.00',
        },
      ],
      note: 'Las promociones de "compra y llévate una gratis" solo aplican a piezas — una carga por kilo no califica.',
    },

    /* --- Demo / pricing CTA ---
       `price` is the one editable figure — the owner supplied $499 MXN
       "i think" and flagged it for confirmation before launch, so a
       correction should touch exactly this key (plus its EN twin) and
       nothing else. `price_unit` carries the per-branch framing right
       next to the number — the product sells multi-branch as a feature,
       so a bare "$499 al mes" would misread as covering the whole
       operation. */
    demo: {
      h: 'Precio a la medida de tu operación.',
      price_eyebrow: 'Precio de entrada',
      price: '$499 MXN',
      price_unit: 'por sucursal, al mes',
      sub: 'Cuéntanos cuántas órdenes manejas y armamos un plan. Sin instalación y sin contratos largos.',
      points_prose: 'Incluye WhatsApp, tablero, domicilio, membresías y reportes — sin módulos aparte. Configuramos tus zonas y tarifas contigo, con onboarding y soporte en español.',
      cta: 'Agenda una demo',
      note: 'Demo de 20 minutos · sin compromiso',
    },

    /* --- FAQ --- */
    faq: {
      h: 'Lo que casi todos nos preguntan.',
      side: '¿Tienes otra duda? Escríbenos a hola@ciclo.mx y la resolvemos en la demo.',
      items: [
        {
          q: '¿Necesito tener repartidores propios?',
          a: 'Puedes usar a tus propios repartidores con la app o coordinar con quien ya trabajas. Ciclo organiza las rutas; tú decides quién las maneja.',
        },
        {
          q: '¿Funciona para tintorería y no solo para lavandería?',
          a: 'Sí. El sistema se adapta a prendas por pieza, servicios delicados y planchado, igual que a cargas por kilo.',
        },
        {
          q: '¿Puedo cobrar el envío como yo quiera?',
          a: 'Sí. Defines reglas de tarifa con prioridad: entrega gratis a partir de cierto monto, cobro fijo, porcentaje del pedido o por kilómetro — y condiciones por distancia o ruta activa.',
        },
        {
          q: '¿Qué necesito para empezar?',
          a: 'Solo tu lista de servicios y precios. Sucursales, zonas y tarifas de entrega las configuramos juntos durante el onboarding.',
        },
      ],
    },

    /* --- CTA closer --- */
    cta_block: {
      h: 'Pon tu lavandería a domicilio esta semana.',
      sub: 'Agenda una demo de 20 minutos y te mostramos cómo se ve tu operación en Ciclo.',
      primary: 'Agenda una demo',
      ghost:   'Habla con nosotros',
    },

    /* --- Footer --- */
    footer: {
      tag_a: 'Tu lavandería y tintorería,',
      tag_em: ' a domicilio',
      tag_b: '.',
      cols: [
        {
          h: 'Producto',
          links: [
            { label: 'Tablero',              href: '#how' },
            { label: 'Servicio a domicilio', href: '#incluye' },
            { label: 'Zonas de entrega',     href: '#how' },
            { label: 'App de repartidores',  href: '#incluye' },
          ],
        },
        {
          h: 'Empresa',
          links: [
            { label: 'Cómo funciona',            href: '#how' },
            { label: 'Agenda una demo',          wa: 'demo' },
            { label: 'Contacto · hola@ciclo.mx', href: 'mailto:hola@ciclo.mx' },
          ],
        },
        {
          h: 'Legal',
          links: [
            { label: 'Términos',   href: '/legal/terminos.html' },
            { label: 'Privacidad', href: '/legal/privacidad.html' },
          ],
        },
      ],
      base_left:  '© 2026 Ciclo Laundry OS, S.A.P.I. de C.V.',
      base_right: 'Operando en México',
    },
  },

  en: {
    wa: {
      demo: 'Hi, I run a laundry business and I’d like a demo of Ciclo.',
      talk: 'Hi, I have a question about Ciclo.',
    },

    nav: { product: 'Product', how: 'How it works', assistant: 'Assistant', pricing: 'Pricing', faq: 'FAQ', login: 'Sign in', cta: 'Book a demo', lang_label: 'Language' },

    hero: {
      badge: 'For laundromats and dry cleaners',
      h1: 'Your customers order on WhatsApp. You just deliver.',
      sub: 'Ciclo takes the order, schedules it, and puts it on your board. You and your team just wash, iron, and deliver.',
      cta_primary: 'Book a demo',
      cta_ghost:   'See how it works',
      trust: 'No long contracts · We set up your operation in the demo',
      thread_caption: 'Example WhatsApp conversation',
      thread: [
        { from: 'customer', text: 'Hi, can someone come by for a pickup?' },
        { from: 'ciclo', text: 'Hey again, Renata! 👋' },
        { from: 'ciclo', text: 'Here’s the branch’s hours:\nMon–Fri 9am–6pm; Sat 10am–2pm\n\nWhat day and time window (morning, afternoon, or evening) works for the pickup?' },
        { from: 'customer', text: 'July 16th, in the afternoon, if that works.' },
        { from: 'ciclo', text: 'I’ll get your pickup scheduled:\n\n👤 Renata Vidal\n📍 Río Pánuco 22, Roma Norte, Cuauhtémoc, Ciudad de Mexico, C.P. 06500\n🏠 Branch: Roma Norte Branch\n🕑 July 16, afternoon\n\nConfirm? (yes/no)' },
        { from: 'customer', text: 'Yes, confirmed.' },
      ],
      order: {
        folio: '#4821',
        customer_label: 'Customer',
        customer: 'Renata Vidal',
        address_label: 'Address',
        address: 'Río Pánuco 22, Roma Norte',
        branch_label: 'Branch',
        branch: 'Roma Norte Branch',
        stage: 'To confirm',
        window_label: 'Pickup',
        window: 'July 16 · afternoon',
        note: 'It lands in your inbox as "To confirm": someone on your team reviews and confirms it before it hits the board — no bot order ever schedules itself.',
      },
    },

    screens: {
      h: 'This is your whole operation.',
      sub: 'Active orders, staff on shift and what needs your attention — all in one dashboard.',
      alt: 'Ciclo dashboard: active orders, value in process, staff on shift, orders needing attention, a weekly orders chart, stage distribution, recent orders and today’s attendance.',
      caption: 'Dashboard of a demo organization — sample data, not a real operation.',
    },

    /* --- Arc — the four-part product narrative (receive → operate → deliver → retain) --- */
    arc: {
      parts: [
        {
          num: '01',
          name: 'Receive',
          body: 'Your customers text the same number they always have. The bot replies from a template — catalog, prices, availability, scheduling — and the moment a question falls outside the script, it hands off to your team, with no need for the customer to write to a different number.',
          feats: ['Intent classification', 'Templated replies', 'Handoff to a person', 'Shared conversation inbox'],
          thread_caption: 'Example: the bot hands off a question outside the script',
          thread: [
            { from: 'customer', text: 'How much to wash a king-size comforter? Not sure if that’s something you handle.' },
            { from: 'ciclo', text: 'Let me check with the team, they’ll reach out to you in a moment. 🙋' },
            { divider: 'Conversation handed off to a person' },
          ],
        },
        {
          num: '02',
          name: 'Operate',
          body: 'Every order lands on the board with its customer, garments and stage. Your counter captures the garments — quantities and weights — from the point of sale, and you switch branches in a click.',
          feats: ['Board by stage', 'Point of sale', 'Multi-branch', 'Catalog and pricing'],
          board: {
            label: 'Board · Roma Norte Branch',
            unconfirmed: { chip: 'To confirm', folio: '#4821', customer: 'Renata Vidal' },
            stages: [
              { key: 'pickup', label: 'Pickup', orders: [{ folio: '#4818', customer: 'Diego Salas' }] },
              { key: 'processing', label: 'Processing', orders: [{ folio: '#4815', customer: 'Camila Ortiz' }] },
              { key: 'delivery', label: 'Delivery', orders: [{ folio: '#4809', customer: 'Luis Fernández' }] },
            ],
          },
        },
        {
          num: '03',
          name: 'Deliver',
          body: 'You draw your zones on the map and decide what to charge: free above $300, per kilometer, or a flat fee. Your drivers see the day’s route on their phone, and your customer tracks the order from a link.',
          feats: ['Zones on the map', 'Fee rules', 'Driver app', 'Customer tracking'],
          zoneMap: {
            label: 'Delivery zone',
            map_alt: 'Map with the delivery zone drawn around the branch',
            branch_label: 'Roma Norte Branch',
            ladder_label: 'Fee rules',
            rules: [
              { step: '1', condition: 'Order of $300 or more', charge: 'Free' },
              { step: '2', condition: 'Any other order', charge: '$12.00 / km' },
            ],
            note: 'The first rule whose condition is met is the one applied, evaluated in priority order.',
          },
        },
        {
          num: '04',
          name: 'Retain',
          body: 'Every customer carries their history — how many times they’ve ordered and when they last came in. From their profile you attach a membership, so next time they think of you first.',
          feats: ['Customer history', 'Repeat customers', 'Memberships', 'Promotions'],
          retention: {
            stamp: {
              label: 'Stamps · Shirts',
              chip: 'In progress',
              progress: 7,
              target: 10,
              progress_sr: '7 of 10 stamps',
              note: 'Every completed order with shirts adds a stamp. At 10, the lowest-priced shirt in your next shirt order is free.',
            },
            membership: {
              label: 'Membership',
              status: 'Active',
              plan: 'Frequent Plan',
              benefit: '15% off + free delivery',
              renews_label: 'Active through',
              renews: 'August 18',
            },
          },
        },
      ],
    },

    assistant: {
      h: 'An assistant that already knows your business.',
      sub: 'It lives in your dashboard and answers with your own numbers — sales, customers, categories — no report to build.',
      thread_caption: 'Example: a real question to the assistant',
      speakers: { customer: 'Business owner', ciclo: 'Ciclo Assistant' },
      thread: [
        { from: 'customer', text: 'How are sales doing this week?' },
        { from: 'ciclo', text: 'This week you’re at $18,430 across 61 orders (avg ticket $302).\nUp 14% from last week ($16,180).\nWash-by-the-kilo is still your top category, and you had 9 new customers.' },
      ],
      report_alt: 'Ciclo’s reports screen: revenue, VAT, discounts, order count, average ticket and cancellation rate for the period, with a daily revenue chart and orders broken down by stage.',
      report_caption: 'Reports for a demo organization — sample data.',
    },

    driver: {
      h: 'Every driver carries their route in their pocket.',
      sub: 'Numbered stops on the map, pickups and deliveries told apart, and the day’s progress at a glance.',
      alt: 'A driver’s route on the map: stops numbered 1 through 8, completed ones in green and pending ones in blue or purple, with different icons for pickup and delivery, and a card showing the next pickup with progress 4 of 8.',
      caption: 'A driver’s route for a demo organization — sample data.',
    },

    included: {
      h: 'Everything included',
      sub: 'Nothing billed as a separate add-on.',
      rows: [
        { k: 'Orders',    items: ['Board by stage', 'Point of sale', 'Multi-branch', 'Catalog and pricing', 'Order history'] },
        { k: 'WhatsApp',  items: ['Automated ordering', 'Template-based replies', 'Handoff to a human', 'Conversation inbox'] },
        { k: 'Delivery',  items: ['Zones on the map', 'Fee rules by order amount, distance or kilometer', 'Routes', 'Driver app'] },
        { k: 'Customers', items: ['Memberships', 'Promotions and stamp cards', 'Link-based tracking', 'Ratings'] },
        { k: 'Staff',     items: ['PIN attendance', 'Branch schedules', 'Daily summary'] },
        { k: 'Reports',   items: ['Sales', 'Customers', 'Ratings and comments', 'AI assistant'] },
      ],
    },

    attendance: {
      h: 'Clock-ins and clock-outs, branch by branch.',
      sub: 'Your team clocks in and out with a 4-digit PIN at each branch. You see everyone’s schedule and a daily summary.',
      note: 'An employee shows "late" if they clock in after their branch’s grace period (15 minutes by default, adjustable per day), and "absent" if they have no punches at all that day.',
      alt: 'Attendance screen: a 4-digit PIN keypad and the live clock on the left; on the right, the branch’s team with their 07:00–16:00 schedule and today’s status (clocked in, late, or absent).',
      caption: 'Attendance for a demo organization — sample data, not a real operation.',
    },

    audience: {
      h: 'Two ways to charge, one per category.',
      sub: 'Every category in your catalog bills by the kilo or by the garment. Ciclo captures the order differently depending on which.',
      labels: {
        unit: 'Pricing unit',
        capture: 'What gets captured at the counter',
        example: 'Example line',
        total: 'Total',
      },
      models: [
        {
          name: 'Laundromat',
          unit: 'By the kilo',
          capture: 'The load’s weight, in kilos',
          example: '5.4 kg × $32.00/kg',
          total: '$172.80',
        },
        {
          name: 'Dry cleaner',
          unit: 'By the garment',
          capture: 'The quantity of each garment',
          example: '2 shirts × $45.00 + 1 pair of pants × $60.00',
          total: '$150.00',
        },
      ],
      note: 'Buy-one-get-one promotions only apply to garments — a per-kilo load doesn’t qualify.',
    },

    demo: {
      h: 'Pricing that fits your operation.',
      price_eyebrow: 'Starting price',
      price: '$499 MXN',
      price_unit: 'per branch, per month',
      sub: 'Tell us how many orders you handle and we’ll build a plan. No install, no long contracts.',
      points_prose: 'Includes WhatsApp, board, delivery, memberships and reports — no separate add-ons. We set up your zones and fees with you, with onboarding and support in Spanish.',
      cta: 'Book a demo',
      note: '20-minute demo · no commitment',
    },

    faq: {
      h: 'What almost everyone asks us.',
      side: 'Have another question? Write to hola@ciclo.mx and we’ll cover it in the demo.',
      items: [
        { q: 'Do I need my own drivers?', a: 'You can use your own drivers with the app, or coordinate with whoever you already work with. Ciclo organizes the routes; you decide who runs them.' },
        { q: 'Does it work for dry cleaning, not just laundry?', a: 'Yes. The system adapts to per-garment items, delicate services and pressing, just as it does to wash-by-the-kilo.' },
        { q: 'Can I charge delivery however I want?', a: 'Yes. You define prioritized fee rules: free delivery above a threshold, a flat fee, a percentage of the order, or per kilometer — with conditions by distance or active route.' },
        { q: 'What do I need to get started?', a: 'Just your service list and prices. We configure branches, zones and delivery fees together during onboarding.' },
      ],
    },

    cta_block: {
      h: 'Put your laundromat on delivery this week.',
      sub: 'Book a 20-minute demo and we’ll show you what your operation looks like in Ciclo.',
      primary: 'Book a demo',
      ghost:   'Talk to us',
    },

    footer: {
      tag_a: 'Your laundromat and dry cleaner,',
      tag_em: ' delivered',
      tag_b: '.',
      cols: [
        { h: 'Product', links: [
          { label: 'Board',          href: '#how' },
          { label: 'Home delivery',  href: '#incluye' },
          { label: 'Delivery zones', href: '#how' },
          { label: 'Driver app',     href: '#incluye' },
        ] },
        { h: 'Company', links: [
          { label: 'How it works',            href: '#how' },
          { label: 'Book a demo',             wa: 'demo' },
          { label: 'Contact · hola@ciclo.mx', href: 'mailto:hola@ciclo.mx' },
        ] },
        { h: 'Legal', links: [
          { label: 'Terms',   href: '/legal/terminos.html' },
          { label: 'Privacy', href: '/legal/privacidad.html' },
        ] },
      ],
      base_left:  '© 2026 Ciclo Laundry OS, S.A.P.I. de C.V.',
      base_right: 'Operating in Mexico',
    },
  },
};
