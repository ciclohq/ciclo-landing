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

    /* --- Arc — the four-part product narrative (recibe → opera → entrega → retiene) --- */
    arc: {
      parts: [
        {
          num: '01',
          name: 'Recibe',
          body: 'Tus clientes le escriben al mismo número de siempre — no instalan nada, no aprenden nada nuevo. El bot clasifica lo que te están pidiendo y responde desde una plantilla: catálogo, precios, disponibilidad, agenda la recolección. En cuanto la pregunta se sale de ese guion — una prenda fuera de catálogo, o de plano prefiere hablar con una persona — la conversación pasa a alguien de tu equipo en una bandeja de conversaciones compartida, sin que tu cliente tenga que escribir a otro número.',
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
          body: 'Cada orden entra al tablero con su cliente, sus prendas y su etapa. Recolección, proceso, entrega. En tu mostrador capturas las prendas y los precios desde el punto de venta y, si tienes varias sucursales, cambias entre ellas en un clic.',
          feats: ['Tablero por etapas', 'Punto de venta', 'Multi-sucursal', 'Catálogo y precios'],
          screen: 'opera',
          alt: 'Tablero de órdenes con el detalle de una orden abierto',
        },
        {
          num: '03',
          name: 'Entrega',
          body: 'Dibujas tus zonas sobre el mapa y defines qué cobras: gratis desde $300, $12 por kilómetro, o una tarifa fija. Tus repartidores ven la ruta del día en su teléfono, y tu cliente sigue su pedido desde un link.',
          feats: ['Zonas en el mapa', 'Reglas de tarifa', 'App de repartidores', 'Seguimiento para el cliente'],
          screen: 'entrega-zonas',
          alt: 'Zonas de entrega dibujadas sobre el mapa junto a las reglas de tarifa',
        },
        {
          num: '04',
          name: 'Retiene',
          body: 'Membresías, promociones y el historial de cada cliente en un solo lugar — y un asistente al que le preguntas cómo va el negocio en español, sin armar un reporte.',
          feats: ['Membresías', 'Promociones', 'Reportes', 'Asistente con IA'],
          screen: 'retiene',
          alt: 'Ficha de cliente con su membresía activa y su historial de órdenes',
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
    },

    /* --- Included — the spec table; attendance lives here because it sits
       outside the delivery arc. Google reviews is absent by decision. --- */
    included: {
      h: 'Todo lo que incluye',
      sub: 'Sin módulos que se cobran aparte.',
      rows: [
        { k: 'Órdenes',    v: 'Tablero por etapas · punto de venta · multi-sucursal · catálogo y precios · historial por orden' },
        { k: 'WhatsApp',   v: 'Pedidos automáticos · respuestas por plantilla · transferencia a un humano · bandeja de conversaciones' },
        { k: 'A domicilio',v: 'Zonas en el mapa · reglas de tarifa por monto, distancia o kilómetro · rutas · app de repartidores' },
        { k: 'Clientes',   v: 'Membresías · promociones y tarjetas de sellos · seguimiento por link · calificaciones' },
        { k: 'Personal',   v: 'Asistencia con PIN · horarios por sucursal · resumen diario' },
        { k: 'Reportes',   v: 'Ventas · clientes · comentarios · asistente con IA' },
      ],
    },

    /* --- Audience — laundromats & dry cleaners --- */
    audience: {
      h: 'Hecho para lavanderías y tintorerías.',
      sub: 'El mismo sistema, adaptado a cómo trabaja cada negocio.',
      cols: [
        { name: 'Lavanderías', text: 'Cargas por kilo, autoservicio o encargo y recolección a domicilio — todo por el mismo número.', chips: ['Por kilo', 'Autoservicio', 'Encargo', 'Recolección a domicilio'] },
        { name: 'Tintorerías', text: 'Prendas por pieza, servicios delicados y planchado, con seguimiento orden por orden.', chips: ['Por pieza', 'Delicados', 'Planchado', 'Orden por orden'] },
      ],
    },

    /* --- Demo / pricing CTA --- */
    demo: {
      h: 'Precio a la medida de tu operación.',
      sub: 'Cuéntanos cuántas órdenes manejas y armamos un plan. Sin instalación y sin contratos largos.',
      points: [
        'Tablero, domicilio, zonas y app de repartidores incluidos',
        'Configuramos tus zonas y tarifas contigo',
        'Onboarding y soporte en español',
      ],
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
          q: '¿Puedo cobrar el envío como yo quiera?',
          a: 'Sí. Defines reglas de tarifa con prioridad: entrega gratis a partir de cierto monto, cobro fijo, porcentaje del pedido o por kilómetro — y condiciones por distancia o ruta activa.',
        },
        {
          q: '¿Funciona para tintorería y no solo para lavandería?',
          a: 'Sí. El sistema se adapta a prendas por pieza, servicios delicados y planchado, igual que a cargas por kilo.',
        },
        {
          q: '¿Qué hace el bot solo y cuándo entra una persona?',
          a: 'El bot identifica lo que pide tu cliente y responde con plantillas para lo que ya conoce: catálogo, precios, agendar la recolección. En cuanto la conversación sale de ese guion, pasa a alguien de tu equipo en la bandeja de conversaciones — tu cliente sigue escribiendo al mismo número.',
        },
        {
          q: '¿Mi cliente puede seguir su pedido?',
          a: 'Sí. Cada pedido a domicilio incluye un link de seguimiento que le compartes a tu cliente, donde ve la etapa de su orden.',
        },
        {
          q: '¿Qué hacen las membresías y las promociones?',
          a: 'Las membresías, las promociones y las tarjetas de sellos quedan ligadas al perfil de cada cliente junto con su historial de órdenes, para que reconozcas y premies a quien vuelve.',
        },
        {
          q: '¿Qué cubre la asistencia?',
          a: 'Tu equipo registra entrada y salida con PIN por sucursal, y tú ves los horarios y un resumen diario de quién trabajó.',
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
      base_left:  '© 2026 CICLO LAUNDRY OS, S.A.P.I. DE C.V.',
      base_right: 'OPERANDO EN MÉXICO',
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

    /* --- Arc — the four-part product narrative (receive → operate → deliver → retain) --- */
    arc: {
      parts: [
        {
          num: '01',
          name: 'Receive',
          body: 'Your customers text the same number they always have — nothing to install, nothing new to learn. The bot classifies what they’re asking for and answers from a template: catalog, prices, availability, scheduling the pickup. The moment a question falls outside that script — a garment outside the catalog, or the customer would simply rather talk to a person — the conversation hands off to someone on your team inside a shared conversation inbox, without your customer ever writing to a different number.',
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
          body: 'Every order lands on the board with its customer, its garments, and its stage — pickup, processing, delivery. Your counter captures garments and prices from the point of sale, and if you run more than one branch, you switch between them in a click.',
          feats: ['Board by stage', 'Point of sale', 'Multi-branch', 'Catalog and pricing'],
          screen: 'opera',
          alt: 'Order board with an order’s detail panel open',
        },
        {
          num: '03',
          name: 'Deliver',
          body: 'You draw your zones on the map and decide what to charge: free above $300, $12/km, or a flat fee. Your drivers see the day’s route on their phone, and your customer tracks the order from a link.',
          feats: ['Zones on the map', 'Fee rules', 'Driver app', 'Customer tracking'],
          screen: 'entrega-zonas',
          alt: 'Delivery zones drawn on the map next to the fee rules',
        },
        {
          num: '04',
          name: 'Retain',
          body: 'Memberships, promotions, and every customer’s history in one place — plus an assistant you can ask, in plain language, how the business is doing. No report to build.',
          feats: ['Memberships', 'Promotions', 'Reports', 'AI assistant'],
          screen: 'retiene',
          alt: 'Customer profile with an active membership and order history',
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
    },

    included: {
      h: 'Everything included',
      sub: 'Nothing billed as a separate add-on.',
      rows: [
        { k: 'Orders',    v: 'Board by stage · point of sale · multi-branch · catalog and pricing · order history' },
        { k: 'WhatsApp',  v: 'Automated ordering · template-based replies · handoff to a human · conversation inbox' },
        { k: 'Delivery',  v: 'Zones on the map · fee rules by order amount, distance or kilometer · routes · driver app' },
        { k: 'Customers', v: 'Memberships · promotions and stamp cards · link-based tracking · ratings' },
        { k: 'Staff',     v: 'PIN attendance · branch schedules · daily summary' },
        { k: 'Reports',   v: 'Sales · customers · ratings and comments · AI assistant' },
      ],
    },

    audience: {
      h: 'Built for laundromats and dry cleaners.',
      sub: 'The same system, adapted to how each business works.',
      cols: [
        { name: 'Laundromats',  text: 'Wash by the pound, self-service or drop-off, and home pickup — all through one number.', chips: ['By the pound', 'Self-service', 'Drop-off', 'Home pickup'] },
        { name: 'Dry cleaners', text: 'Per-garment items, delicate care and pressing, tracked order by order.', chips: ['Per garment', 'Delicates', 'Pressing', 'Order by order'] },
      ],
    },

    demo: {
      h: 'Pricing that fits your operation.',
      sub: 'Tell us how many orders you handle and we’ll build a plan. No install, no long contracts.',
      points: [
        'Board, delivery, zones and driver app included',
        'We set up your zones and fees with you',
        'Onboarding and support in Spanish',
      ],
      cta: 'Book a demo',
      note: '20-minute demo · no commitment',
    },

    faq: {
      h: 'What almost everyone asks us.',
      side: 'Have another question? Write to hola@ciclo.mx and we’ll cover it in the demo.',
      items: [
        { q: 'Do I need my own drivers?', a: 'You can use your own drivers with the app, or coordinate with whoever you already work with. Ciclo organizes the routes; you decide who runs them.' },
        { q: 'Can I charge delivery however I want?', a: 'Yes. You define prioritized fee rules: free delivery above a threshold, a flat fee, a percentage of the order, or per kilometer — with conditions by distance or active route.' },
        { q: 'Does it work for dry cleaning, not just laundry?', a: 'Yes. The system adapts to per-garment items, delicate services and pressing, just as it does to wash-by-the-pound.' },
        { q: 'What does the bot handle on its own, and when does a person step in?', a: 'The bot reads what your customer is asking for and replies from templates for what it already knows — catalog, prices, scheduling a pickup. The moment the conversation falls outside that script, it hands off to someone on your team in the shared conversation inbox — the customer keeps texting the same number.' },
        { q: 'Can my customer follow their order?', a: 'Yes. Every delivery order includes a tracking link you share with your customer, where they see the order’s stage.' },
        { q: 'What do memberships and promotions do?', a: 'Memberships, promotions and stamp cards attach to each customer’s profile alongside their order history, so you can recognize and reward the ones who come back.' },
        { q: 'What does attendance cover?', a: 'Your team clocks in and out with a PIN per branch, and you see the schedules and a daily summary of who worked.' },
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
      base_left:  '© 2026 CICLO LAUNDRY OS, S.A.P.I. DE C.V.',
      base_right: 'OPERATING IN MEXICO',
    },
  },
};
