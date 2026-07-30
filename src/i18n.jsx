/* =============================================================
   Ciclo — Translations (ES primary, EN secondary)
   Add new keys here and consume via window.I18N[lang].path
   New pages can extend this object.
   ============================================================= */

window.I18N = {
  es: {
    /* --- Nav --- */
    nav: {
      product: 'Producto',
      how:     'Cómo funciona',
      pricing: 'Precios',
      faq:     'FAQ',
      login:   'Acceder',
      cta:     'Agenda una demo',
    },

    /* --- Hero --- */
    hero: {
      badge: 'Para lavanderías y tintorerías',
      h1: 'Tus clientes piden por WhatsApp. Tú solo entregas.',
      sub: 'Ciclo recibe el pedido, lo cobra y lo pone en tu tablero. Tú y tu equipo solo lavan, planchan y entregan.',
      cta_primary: 'Agenda una demo',
      cta_ghost:   'Ver cómo funciona',
      trust: 'Sin contratos largos · Configuramos tu operación en la demo',
    },

    /* --- Arc — the four-part product narrative (recibe → opera → entrega → retiene) --- */
    arc: {
      parts: [
        {
          num: '01',
          name: 'Recibe',
          body: 'Tus clientes escriben al mismo número de siempre. El bot entiende qué necesitan, arma el pedido y lo cobra. Cuando algo se sale del guion, la conversación pasa a una persona de tu equipo sin que el cliente lo note.',
          feats: ['Pedidos por WhatsApp', 'Respuestas automáticas', 'Transferencia a un humano'],
          screen: 'recibe',
          alt: 'Bandeja de conversaciones con un pedido tomado por el bot',
        },
        {
          num: '02',
          name: 'Opera',
          body: 'Cada orden entra al tablero con su cliente, sus prendas y su etapa. Recolección, proceso, entrega. Tu mostrador levanta órdenes desde el punto de venta y, si tienes varias sucursales, cambias entre ellas en un clic.',
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
          a: 'Sí. Cada pedido a domicilio incluye un link de seguimiento que le compartes a tu cliente, donde ve la etapa de su orden y la ruta del repartidor.',
        },
        {
          q: '¿Qué hacen las membresías y las promociones?',
          a: 'Las membresías, las promociones y las tarjetas de sellos quedan ligadas al perfil de cada cliente junto con su historial de órdenes, para que reconozcas y premies a quien vuelve.',
        },
        {
          q: '¿Qué cubre la asistencia?',
          a: 'Tu equipo registra entrada y salida con PIN por sucursal, y tú ves los horarios y un resumen diario de quién trabajó.',
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
            { label: 'Tablero',              href: '#modules' },
            { label: 'Servicio a domicilio', href: '#modules' },
            { label: 'Zonas de entrega',     href: '#modules' },
            { label: 'App de repartidores',  href: '#modules' },
          ],
        },
        {
          h: 'Empresa',
          links: [
            { label: 'Cómo funciona',            href: '#how' },
            { label: 'Agenda una demo',          href: 'mailto:hola@ciclo.mx?subject=Demo%20Ciclo' },
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
    nav: { product: 'Product', how: 'How it works', pricing: 'Pricing', faq: 'FAQ', login: 'Sign in', cta: 'Book a demo' },

    hero: {
      badge: 'For laundromats and dry cleaners',
      h1: 'Your customers order on WhatsApp. You just deliver.',
      sub: 'Ciclo takes the order, charges it, and puts it on your board. You and your team just wash, iron, and deliver.',
      cta_primary: 'Book a demo',
      cta_ghost:   'See how it works',
      trust: 'No long contracts · We set up your operation in the demo',
    },

    /* --- Arc — the four-part product narrative (receive → operate → deliver → retain) --- */
    arc: {
      parts: [
        {
          num: '01',
          name: 'Receive',
          body: 'Your customers text the same number they always have. The bot understands what they need, builds the order, and charges it. When something falls outside the script, the conversation hands off to someone on your team — the customer never notices.',
          feats: ['WhatsApp ordering', 'Automated replies', 'Handoff to a human'],
          screen: 'recibe',
          alt: 'Conversation inbox with an order the bot just took',
        },
        {
          num: '02',
          name: 'Operate',
          body: 'Every order lands on the board with its customer, its garments, and its stage — pickup, processing, delivery. Your counter rings up orders from the point of sale, and if you run more than one branch, you switch between them in a click.',
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

    included: {
      h: 'Everything included',
      sub: 'Nothing billed as a separate add-on.',
      rows: [
        { k: 'Orders',    v: 'Board by stage · point of sale · multi-branch · catalog and pricing · order history' },
        { k: 'WhatsApp',  v: 'Automated ordering · template-based replies · handoff to a human · conversation inbox' },
        { k: 'Delivery',  v: 'Zones on the map · fee rules by order amount, distance or kilometer · routes · driver app' },
        { k: 'Customers', v: 'Memberships · promotions and stamp cards · link-based tracking · ratings' },
        { k: 'Staff',     v: 'PIN attendance · branch schedules · daily summary' },
        { k: 'Reports',   v: 'Sales · customers · feedback · AI assistant' },
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
        { q: 'Can my customer follow their order?', a: 'Yes. Every delivery order includes a tracking link you share with your customer, where they see the order’s stage and the driver’s route.' },
        { q: 'What do memberships and promotions do?', a: 'Memberships, promotions and stamp cards attach to each customer’s profile alongside their order history, so you can recognize and reward the ones who come back.' },
        { q: 'What does attendance cover?', a: 'Your team clocks in and out with a PIN per branch, and you see the schedules and a daily summary of who worked.' },
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
          { label: 'Board',          href: '#modules' },
          { label: 'Home delivery',  href: '#modules' },
          { label: 'Delivery zones', href: '#modules' },
          { label: 'Driver app',     href: '#modules' },
        ] },
        { h: 'Company', links: [
          { label: 'How it works',            href: '#how' },
          { label: 'Book a demo',             href: 'mailto:hola@ciclo.mx?subject=Demo%20Ciclo' },
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
