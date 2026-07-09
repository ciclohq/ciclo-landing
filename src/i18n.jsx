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
      h1_a: 'Tu lavandería,',
      h1_accent: ' operada por WhatsApp.',
      sub: 'Un solo número para recibir, cobrar y entregar cada orden — y un tablero que lo controla todo, de la recolección a la entrega.',
      cta_primary: 'Agenda una demo',
      cta_ghost:   'Cómo funciona',
      trust: 'Sin contratos largos · Configuramos tu operación en la demo',
      ticker: [
        'Tablero multi-sucursal',
        'Zonas de entrega en el mapa',
        'Tarifas de envío flexibles',
        'Rutas para repartidores',
        'Onboarding en español',
        'WhatsApp · próximamente',
      ],
    },

    /* --- How it works — the order journey --- */
    how: {
      eyebrow: 'CÓMO FUNCIONA',
      h_a: 'Una orden,',
      h_accent: ' de principio a fin.',
      sub: 'Desde el primer mensaje hasta que el cliente vuelve.',
      steps: [
        { num: '01', name: 'El cliente pide a domicilio',      text: 'La orden entra al sistema con su cliente, dirección y servicios — y su tarifa de envío se calcula sola.' },
        { num: '02', name: 'La tienda la procesa en el tablero', text: 'Cada orden avanza por etapas: recolección, proceso, entrega e inspección.' },
        { num: '03', name: 'El repartidor sigue su ruta',      text: 'Las recolecciones y entregas del día en su app, con acceso propio por repartidor.' },
        { num: '04', name: 'Todo queda registrado',            text: 'Cada transición guarda quién la hizo y cuándo — historial completo por orden.' },
      ],
    },

    /* --- Modules — 4 named pillars --- */
    features: {
      eyebrow: 'PRODUCTO',
      spotlight: {
        h_a: 'Cuatro piezas,',
        h_accent: ' un solo',
        h_b: ' sistema.',
        body: 'Todo lo que necesitas para operar tu lavandería o tintorería a domicilio — sin pegar cinco herramientas distintas.',
      },
      modules: [
        {
          kicker: 'OPERACIÓN',
          name: 'Tablero',
          tagline: 'Toda tu operación de un vistazo.',
          body: 'Un tablero web para el mostrador: el resumen del día, cada orden con su etapa y su cliente, y tu catálogo de servicios con precios. Con una o varias sucursales.',
          features: [
            { tag: 'RESUMEN',    text: 'Órdenes activas, ingresos del día y clientes nuevos de un vistazo.' },
            { tag: 'ETAPAS',     text: 'Cada orden avanza por etapas: recolección, proceso, entrega e inspección.' },
            { tag: 'SUCURSALES', text: 'Cambia de sucursal en un clic; cada una con su catálogo y su equipo.' },
          ],
        },
        {
          kicker: 'A DOMICILIO',
          name: 'Servicio a domicilio',
          tagline: 'Tarifas de envío que tú decides.',
          body: 'Activa qué servicios ofreces a domicilio y define reglas de tarifa con prioridad: entrega gratis a partir de cierto monto, cobro fijo, porcentaje del pedido o por kilómetro.',
          features: [
            { tag: 'SERVICIOS',   text: 'Elige qué categorías y servicios ofreces a domicilio, con sus precios.' },
            { tag: 'TARIFAS',     text: 'Gratis, fija, porcentaje o por kilómetro — en el orden que tú definas.' },
            { tag: 'CONDICIONES', text: 'Por monto mínimo, por distancia o cuando ya hay una ruta activa.' },
          ],
        },
        {
          kicker: 'COBERTURA',
          name: 'Zonas de entrega',
          tagline: 'Dibuja hasta dónde llegas.',
          body: 'Dibuja tus zonas de entrega directamente sobre el mapa, como un polígono alrededor de tus colonias. Tu cobertura queda clara para ti y para tu equipo.',
          features: [
            { tag: 'MAPA',      text: 'Dibuja cada zona sobre el mapa, vértice por vértice.' },
            { tag: 'EDICIÓN',   text: 'Nombra, ajusta o elimina zonas cuando tu cobertura cambie.' },
            { tag: 'COBERTURA', text: 'Decide exactamente en qué colonias recolectas y entregas.' },
          ],
        },
        {
          kicker: 'REPARTO',
          name: 'App de repartidores',
          tagline: 'Rutas claras, entregas a tiempo.',
          body: 'Una app móvil para tus repartidores con las recolecciones y entregas del día. Cada repartidor entra con su propia cuenta y tú mantienes el control desde el tablero.',
          features: [
            { tag: 'RUTA',   text: 'Las recolecciones y entregas del día, en orden.' },
            { tag: 'ACCESO', text: 'Cada repartidor con su propia cuenta y solo lo que necesita ver.' },
            { tag: 'AVANCE', text: 'El avance de cada parada se refleja en el tablero de la tienda.' },
          ],
        },
      ],
      soon: {
        label: 'PRÓXIMAMENTE',
        text: 'Pedidos por WhatsApp con tu marca y campañas para recuperar clientes — en desarrollo.',
      },
    },

    /* --- Audience — laundromats & dry cleaners --- */
    audience: {
      eyebrow: 'PARA QUIÉN',
      h_a: 'Hecho para',
      h_accent: ' lavanderías y tintorerías.',
      h_b: '',
      sub: 'El mismo sistema, adaptado a cómo trabaja cada negocio.',
      cols: [
        { name: 'Lavanderías', text: 'Cargas por kilo, autoservicio o encargo y recolección a domicilio — todo por el mismo número.', chips: ['Por kilo', 'Autoservicio', 'Encargo', 'Recolección a domicilio'] },
        { name: 'Tintorerías', text: 'Prendas por pieza, servicios delicados y planchado, con seguimiento orden por orden.', chips: ['Por pieza', 'Delicados', 'Planchado', 'Orden por orden'] },
      ],
    },

    /* --- Demo / pricing CTA --- */
    demo: {
      eyebrow: 'PRECIOS',
      h_a: 'Precio a la medida',
      h_accent: ' de tu operación.',
      h_b: '',
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
      eyebrow: 'PREGUNTAS',
      h_a: 'Lo que ',
      h_accent: 'casi todos',
      h_b: ' nos preguntan.',
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
          q: '¿Ya puedo recibir pedidos por WhatsApp?',
          a: 'Está en desarrollo. Hoy Ciclo organiza tu operación a domicilio — tablero, zonas, tarifas y rutas — y la integración de WhatsApp con tu marca llega próximamente.',
        },
        {
          q: '¿Qué necesito para empezar?',
          a: 'Solo tu catálogo de servicios y precios. Nosotros configuramos tus sucursales, zonas y tarifas contigo durante el onboarding.',
        },
      ],
    },

    /* --- CTA closer --- */
    cta_block: {
      h_a: 'Pon tu lavandería ',
      h_accent: 'a domicilio',
      h_b: ' esta ',
      h_em: 'semana',
      h_d: '.',
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

    /* --- Tweaks panel --- */
    tweaks: {
      title: 'AJUSTES',
      close: 'CERRAR',
      lang: 'IDIOMA',
      theme: 'TEMA DE COLOR',
      themes: ['DEFAULT', 'FOREST', 'OCEAN'],
      langs:  ['ES', 'EN'],
    },
  },

  en: {
    nav: { product: 'Product', how: 'How it works', pricing: 'Pricing', faq: 'FAQ', login: 'Sign in', cta: 'Book a demo' },

    hero: {
      badge: 'For laundromats and dry cleaners',
      h1_a: 'Your laundromat,',
      h1_accent: ' run on WhatsApp.',
      sub: 'One number to take, charge, and deliver every order — and one board that runs it all, from pickup to drop-off.',
      cta_primary: 'Book a demo',
      cta_ghost:   'How it works',
      trust: 'No long contracts · We set up your operation in the demo',
      ticker: [
        'Multi-branch board',
        'Delivery zones on the map',
        'Flexible delivery fees',
        'Routes for drivers',
        'White-glove onboarding',
        'WhatsApp · coming soon',
      ],
    },

    how: {
      eyebrow: 'HOW IT WORKS',
      h_a: 'One order,',
      h_accent: ' end to end.',
      sub: 'From the first message to the customer coming back.',
      steps: [
        { num: '01', name: 'The customer orders delivery',     text: 'The order enters the system with its customer, address and services — and its delivery fee is computed automatically.' },
        { num: '02', name: 'The store works it on the board',   text: 'Every order moves through stages: pickup, processing, delivery and inspection.' },
        { num: '03', name: 'The driver follows the route',      text: 'The day’s pickups and deliveries in their app, with per-driver access.' },
        { num: '04', name: 'Everything gets recorded',          text: 'Every transition stores who did it and when — a full history per order.' },
      ],
    },

    features: {
      eyebrow: 'PRODUCT',
      spotlight: {
        h_a: 'Four pieces,',
        h_accent: ' one',
        h_b: ' system.',
        body: 'Everything you need to run your laundromat or dry cleaner on delivery — without gluing five separate tools together.',
      },
      modules: [
        {
          kicker: 'OPERATIONS',
          name: 'Board',
          tagline: 'Your whole operation at a glance.',
          body: 'A web board for the counter: the day’s summary, every order with its stage and customer, and your service catalog with prices. With one branch or many.',
          features: [
            { tag: 'OVERVIEW', text: 'Active orders, daily revenue and new customers at a glance.' },
            { tag: 'STAGES',   text: 'Every order moves through stages: pickup, processing, delivery, inspection.' },
            { tag: 'BRANCHES', text: 'Switch branches in one click; each with its own catalog and team.' },
          ],
        },
        {
          kicker: 'DELIVERY',
          name: 'Home delivery',
          tagline: 'Delivery fees on your terms.',
          body: 'Choose which services you offer for delivery and define prioritized fee rules: free delivery above a threshold, a flat fee, a percentage of the order, or per kilometer.',
          features: [
            { tag: 'SERVICES',   text: 'Pick which categories and services you offer for delivery, with prices.' },
            { tag: 'FEES',       text: 'Free, flat, percentage or per-km — in the priority order you define.' },
            { tag: 'CONDITIONS', text: 'By minimum order value, by distance, or when a route is already active.' },
          ],
        },
        {
          kicker: 'COVERAGE',
          name: 'Delivery zones',
          tagline: 'Draw how far you go.',
          body: 'Draw your delivery zones directly on the map, as polygons around your neighborhoods. Your coverage is clear to you and your team.',
          features: [
            { tag: 'MAP',      text: 'Draw each zone on the map, vertex by vertex.' },
            { tag: 'EDITING',  text: 'Name, adjust or remove zones as your coverage changes.' },
            { tag: 'COVERAGE', text: 'Decide exactly which neighborhoods you pick up from and deliver to.' },
          ],
        },
        {
          kicker: 'DELIVERY',
          name: 'Driver app',
          tagline: 'Clear routes, on-time deliveries.',
          body: 'A mobile app for your drivers with the day’s pickups and deliveries. Each driver signs in with their own account while you keep control from the board.',
          features: [
            { tag: 'ROUTE',    text: 'The day’s pickups and deliveries, in order.' },
            { tag: 'ACCESS',   text: 'Each driver gets their own account and only what they need to see.' },
            { tag: 'PROGRESS', text: 'Every stop’s progress shows up on the store board.' },
          ],
        },
      ],
      soon: {
        label: 'COMING SOON',
        text: 'WhatsApp ordering under your brand and win-back campaigns — in development.',
      },
    },

    audience: {
      eyebrow: 'WHO IT’S FOR',
      h_a: 'Built for',
      h_accent: ' laundromats and dry cleaners.',
      h_b: '',
      sub: 'The same system, adapted to how each business works.',
      cols: [
        { name: 'Laundromats',  text: 'Wash by the pound, self-service or drop-off, and home pickup — all through one number.', chips: ['By the pound', 'Self-service', 'Drop-off', 'Home pickup'] },
        { name: 'Dry cleaners', text: 'Per-garment items, delicate care and pressing, tracked order by order.', chips: ['Per garment', 'Delicates', 'Pressing', 'Order by order'] },
      ],
    },

    demo: {
      eyebrow: 'PRICING',
      h_a: 'Pricing that fits',
      h_accent: ' your operation.',
      h_b: '',
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
      eyebrow: 'QUESTIONS',
      h_a: 'What ',
      h_accent: 'almost everyone',
      h_b: ' asks us.',
      side: 'Have another question? Write to hola@ciclo.mx and we’ll cover it in the demo.',
      items: [
        { q: 'Do I need my own drivers?', a: 'You can use your own drivers with the app, or coordinate with whoever you already work with. Ciclo organizes the routes; you decide who runs them.' },
        { q: 'Can I charge delivery however I want?', a: 'Yes. You define prioritized fee rules: free delivery above a threshold, a flat fee, a percentage of the order, or per kilometer — with conditions by distance or active route.' },
        { q: 'Does it work for dry cleaning, not just laundry?', a: 'Yes. The system adapts to per-garment items, delicate services and pressing, just as it does to wash-by-the-pound.' },
        { q: 'Can I take orders over WhatsApp yet?', a: 'It’s in development. Today Ciclo runs your delivery operation — board, zones, fees and routes — and branded WhatsApp ordering is coming soon.' },
        { q: 'What do I need to get started?', a: 'Just your services and price list. We configure your branches, zones and fees with you during onboarding.' },
      ],
    },

    cta_block: {
      h_a: 'Put your laundromat ',
      h_accent: 'on delivery',
      h_b: ' this ',
      h_em: 'week',
      h_d: '.',
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

    tweaks: {
      title: 'TWEAKS',
      close: 'CLOSE',
      lang: 'LANGUAGE',
      theme: 'COLOR THEME',
      themes: ['DEFAULT', 'FOREST', 'OCEAN'],
      langs:  ['ES', 'EN'],
    },
  },
};
