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
      eyebrow: 'A DOMICILIO · WHATSAPP',
      h1_a: 'Tu lavandería y tintorería,',
      h1_accent: ' a domicilio.',
      sub: 'Un solo número de WhatsApp para recibir, cobrar y entregar cada orden.',
      cta_primary: 'Agenda una demo',
      cta_ghost:   'Cómo funciona',
    },

    /* --- How it works — the order journey --- */
    how: {
      eyebrow: 'CÓMO FUNCIONA',
      h_a: 'Una orden,',
      h_accent: ' de principio a fin.',
      sub: 'Desde el primer mensaje hasta que el cliente vuelve.',
      steps: [
        { num: '01', name: 'El cliente escribe por WhatsApp', text: 'Pide, cotiza y agenda su recolección sin instalar ninguna app.' },
        { num: '02', name: 'La tienda gestiona la orden',      text: 'Cada pedido entra al tablero con su estado: nueva, en ruta, lista, entregada.' },
        { num: '03', name: 'El repartidor sigue su ruta',      text: 'Las paradas del día, en orden, con confirmación de recolección y entrega.' },
        { num: '04', name: 'Marketing los trae de vuelta',     text: 'Promociones y recordatorios por WhatsApp para los clientes que dejaron de venir.' },
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
          kicker: 'CANAL',
          name: 'WhatsApp',
          tagline: 'Un número, todas tus órdenes.',
          body: 'Tus clientes ya usan WhatsApp. Reciben su cotización, confirman la recolección y pagan sin salir del chat — y tú gestionas todo desde un solo número con tu marca.',
          features: [
            { tag: 'PEDIDOS', text: 'Los clientes piden y confirman órdenes por chat, sin instalar nada.' },
            { tag: 'COBROS',  text: 'Envías el total y el link de pago en el mismo hilo.' },
            { tag: 'AVISOS',  text: 'Notificas "en ruta" y "entregada" en automático.' },
          ],
        },
        {
          kicker: 'EN TIENDA',
          name: 'Tablero en tienda',
          tagline: 'Toda la operación en una pantalla.',
          body: 'Un tablero web para el mostrador: cada orden con su estado, su cliente y su ruta. Se acabaron las libretas y los grupos de WhatsApp internos.',
          features: [
            { tag: 'ESTADOS',  text: 'Nueva, en ruta, lista, entregada — de un vistazo.' },
            { tag: 'CLIENTES', text: 'Historial, direcciones y datos de cada cliente.' },
            { tag: 'MULTI',    text: 'Funciona igual con una o varias sucursales.' },
          ],
        },
        {
          kicker: 'REPARTO',
          name: 'App de repartidores',
          tagline: 'Rutas claras, entregas a tiempo.',
          body: 'Una app web para tus repartidores con las paradas del día en orden, navegación al mapa y confirmación de recolección y entrega.',
          features: [
            { tag: 'RUTA',    text: 'Las paradas del día, ordenadas y optimizadas.' },
            { tag: 'NAVEGA',  text: 'Abre cada dirección en su mapa favorito.' },
            { tag: 'PRUEBA',  text: 'Confirma recolección y entrega con un toque.' },
          ],
        },
        {
          kicker: 'MARKETING',
          name: 'Marketing',
          tagline: 'Recupera a los clientes que dejaron de venir.',
          body: 'Identifica a quién no ves hace semanas y mándale una promoción por WhatsApp. Llena los días flojos con campañas que armas en minutos.',
          features: [
            { tag: 'SEGMENTOS', text: 'Filtra por última visita o por cuánto gastan.' },
            { tag: 'PROMOS',    text: 'Envía cupones y recordatorios por WhatsApp.' },
            { tag: 'REACTIVA',  text: 'Trae de vuelta a los clientes inactivos en automático.' },
          ],
        },
      ],
    },

    /* --- Audience — laundromats & dry cleaners --- */
    audience: {
      eyebrow: 'PARA QUIÉN',
      h_a: 'Hecho para',
      h_accent: ' lavanderías y tintorerías.',
      h_b: '',
      sub: 'El mismo sistema, adaptado a cómo trabaja cada negocio.',
      cols: [
        { name: 'Lavanderías', text: 'Cargas por kilo, autoservicio o encargo y recolección a domicilio — todo por el mismo número.' },
        { name: 'Tintorerías', text: 'Prendas por pieza, servicios delicados y planchado, con seguimiento orden por orden.' },
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
        'Los cuatro módulos incluidos',
        'Número de WhatsApp configurado con tu marca',
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
          q: '¿Cómo pagan los clientes?',
          a: 'Por el mismo WhatsApp: les envías el total y un link de pago, o cobran en efectivo o terminal al entregar. Todo queda registrado en la orden.',
        },
        {
          q: '¿Funciona para tintorería y no solo para lavandería?',
          a: 'Sí. El sistema se adapta a prendas por pieza, servicios delicados y planchado, igual que a cargas por kilo.',
        },
        {
          q: '¿El número de WhatsApp es mío o de Ciclo?',
          a: 'Configuramos un número dedicado para tu marca. Tus clientes ven tu nombre, no el de Ciclo.',
        },
        {
          q: '¿Qué necesito para empezar?',
          a: 'Solo tu catálogo de servicios y precios. Nosotros configuramos el número, el tablero y la app de repartidores durante el onboarding.',
        },
      ],
    },

    /* --- CTA closer --- */
    cta_block: {
      h_a: 'Empieza ',
      h_accent: 'mañana',
      h_b: '. Tu primera venta es ',
      h_em: 'esta tarde',
      h_d: '.',
      sub: 'Crea tu cuenta gratis. Sin tarjeta, sin instalación, sin permanencia.',
      primary: 'Comenzar gratis',
      ghost:   'Hablar con un asesor',
    },

    /* --- Footer --- */
    footer: {
      tag_a: 'El sistema operativo para la',
      tag_em: ' lavandería moderna',
      tag_b: ' en LatAm.',
      cols: [
        {
          h: 'Producto',
          links: [
            { label: 'Módulos',       href: '#modules' },
            { label: 'Integraciones', href: '#integrations' },
            { label: 'Precios',       href: '#pricing' },
            { label: 'Preguntas',     href: '#faq' },
          ],
        },
        {
          h: 'Empresa',
          links: [
            { label: 'Contacto · hola@ciclo.mx', href: 'mailto:hola@ciclo.mx' },
            { label: 'WhatsApp',                 href: '#' },
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
      base_right: 'OPERANDO EN LATAM',
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
      eyebrow: 'DELIVERY · WHATSAPP',
      h1_a: 'Your laundromat and dry cleaner,',
      h1_accent: ' delivered.',
      sub: 'One WhatsApp number to take, charge, and deliver every order.',
      cta_primary: 'Book a demo',
      cta_ghost:   'How it works',
    },

    how: {
      eyebrow: 'HOW IT WORKS',
      h_a: 'One order,',
      h_accent: ' end to end.',
      sub: 'From the first message to the customer coming back.',
      steps: [
        { num: '01', name: 'The customer messages on WhatsApp', text: 'They order, get a quote, and book a pickup — no app to install.' },
        { num: '02', name: 'The store manages the order',        text: 'Every order lands on the board with its status: new, en route, ready, delivered.' },
        { num: '03', name: 'The driver follows the route',       text: 'The day’s stops, in order, with pickup and delivery confirmation.' },
        { num: '04', name: 'Marketing brings them back',         text: 'WhatsApp promos and reminders for the customers who stopped coming.' },
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
          kicker: 'CHANNEL',
          name: 'WhatsApp',
          tagline: 'One number, all your orders.',
          body: 'Your customers already use WhatsApp. They get their quote, confirm the pickup, and pay without leaving the chat — and you manage everything from one number under your brand.',
          features: [
            { tag: 'ORDERS',   text: 'Customers place and confirm orders by chat, nothing to install.' },
            { tag: 'PAYMENTS', text: 'You send the total and the payment link in the same thread.' },
            { tag: 'ALERTS',   text: 'You notify "en route" and "delivered" automatically.' },
          ],
        },
        {
          kicker: 'IN-STORE',
          name: 'In-store board',
          tagline: 'The whole operation on one screen.',
          body: 'A web board for the counter: every order with its status, its customer, and its route. No more notebooks or internal WhatsApp groups.',
          features: [
            { tag: 'STATUS',    text: 'New, en route, ready, delivered — at a glance.' },
            { tag: 'CUSTOMERS', text: 'History, addresses and details for every customer.' },
            { tag: 'MULTI',     text: 'Works the same with one branch or many.' },
          ],
        },
        {
          kicker: 'DELIVERY',
          name: 'Driver app',
          tagline: 'Clear routes, on-time deliveries.',
          body: 'A web app for your drivers with the day’s stops in order, map navigation, and pickup and delivery confirmation.',
          features: [
            { tag: 'ROUTE',    text: 'The day’s stops, ordered and optimized.' },
            { tag: 'NAVIGATE', text: 'Open each address in their favorite map.' },
            { tag: 'PROOF',    text: 'Confirm pickup and delivery with one tap.' },
          ],
        },
        {
          kicker: 'MARKETING',
          name: 'Marketing',
          tagline: 'Win back the customers who stopped coming.',
          body: 'Find who you haven’t seen in weeks and send them a WhatsApp promo. Fill the slow days with campaigns you build in minutes.',
          features: [
            { tag: 'SEGMENTS',   text: 'Filter by last visit or by how much they spend.' },
            { tag: 'PROMOS',     text: 'Send coupons and reminders over WhatsApp.' },
            { tag: 'REACTIVATE', text: 'Automatically bring inactive customers back.' },
          ],
        },
      ],
    },

    audience: {
      eyebrow: 'WHO IT’S FOR',
      h_a: 'Built for',
      h_accent: ' laundromats and dry cleaners.',
      h_b: '',
      sub: 'The same system, adapted to how each business works.',
      cols: [
        { name: 'Laundromats',  text: 'Wash-by-kilo, self-service or drop-off, and home pickup — all through one number.' },
        { name: 'Dry cleaners', text: 'Per-garment items, delicate care and pressing, tracked order by order.' },
      ],
    },

    demo: {
      eyebrow: 'PRICING',
      h_a: 'Pricing that fits',
      h_accent: ' your operation.',
      h_b: '',
      sub: 'Tell us how many orders you handle and we’ll build a plan. No install, no long contracts.',
      points: [
        'All four modules included',
        'A WhatsApp number set up with your brand',
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
        { q: 'How do customers pay?', a: 'Through the same WhatsApp: you send the total and a payment link, or they pay cash or card on delivery. It’s all recorded on the order.' },
        { q: 'Does it work for dry cleaning, not just laundry?', a: 'Yes. The system adapts to per-garment items, delicate services and pressing, just as it does to wash-by-kilo.' },
        { q: 'Is the WhatsApp number mine or Ciclo’s?', a: 'We set up a dedicated number for your brand. Your customers see your name, not Ciclo’s.' },
        { q: 'What do I need to get started?', a: 'Just your services and price list. We configure the number, the board and the driver app during onboarding.' },
      ],
    },

    cta_block: {
      h_a: 'Start ',
      h_accent: 'tomorrow',
      h_b: '. Your first sale is ',
      h_em: 'this afternoon',
      h_d: '.',
      sub: 'Create your account free. No card, no install, no commitment.',
      primary: 'Start free',
      ghost:   'Talk to an advisor',
    },

    footer: {
      tag_a: 'The operating system for the',
      tag_em: ' modern laundromat',
      tag_b: ' in LatAm.',
      cols: [
        { h: 'Product', links: [
          { label: 'Modules',      href: '#modules' },
          { label: 'Integrations', href: '#integrations' },
          { label: 'Pricing',      href: '#pricing' },
          { label: 'FAQ',          href: '#faq' },
        ] },
        { h: 'Company', links: [
          { label: 'Contact · hola@ciclo.mx', href: 'mailto:hola@ciclo.mx' },
          { label: 'WhatsApp',                href: '#' },
        ] },
        { h: 'Legal', links: [
          { label: 'Terms',   href: '/legal/terminos.html' },
          { label: 'Privacy', href: '/legal/privacidad.html' },
        ] },
      ],
      base_left:  '© 2026 CICLO LAUNDRY OS, S.A.P.I. DE C.V.',
      base_right: 'OPERATING IN LATAM',
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
