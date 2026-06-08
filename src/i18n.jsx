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
            { tag: 'PROMOS',    text: 'Envías cupones y recordatorios por WhatsApp.' },
            { tag: 'REACTIVA',  text: 'Trae de vuelta a los clientes inactivos en automático.' },
          ],
        },
      ],
    },

    /* --- Integrations — section header (tile data is hardcoded in landing.jsx) --- */
    integrations: {
      eyebrow: 'CONEXIONES',
      h2_a: 'Pagos y facturación',
      h2_accent: ' incluidos',
      h2_b: ' — sin proveedores extra.',
      sub: 'Los procesadores de pago y el PAC fiscal vienen integrados. Tú solo activas la cuenta — no contratas nada por separado, no cargas otra factura cada mes.',
    },

    /* --- Pricing --- */
    pricing: {
      eyebrow: 'PRECIOS',
      h_a: 'Precio',
      h_accent: ' justo',
      h_b: ' para LatAm.',
      sub: 'Empieza gratis. Sin contrato anual, sin permanencia. Si ya no te sirve, te exportas todo en un click. Precios en MXN + IVA.',
      popular: 'POPULAR',
      plans: [
        {
          name: 'GRATIS',
          price: '$ 0',
          unit: 'MXN / mes',
          tag: 'Para una sola sucursal probando aguas.',
          features: [
            '1 sucursal · 1 usuario',
            'Hasta 80 órdenes / mes',
            'Punto de venta básico',
            '50 CFDI 4.0 incluidos',
            'Soporte por correo',
          ],
          cta: 'Crear cuenta',
        },
        {
          name: 'OPERATIVO',
          price: '$ 399',
          unit: 'MXN / mes · anual',
          tag: 'Para la lavandería que ya tiene clientes recurrentes.',
          featured: true,
          features: [
            '1 sucursal · 3 usuarios',
            '500 órdenes / mes',
            'CFDI 4.0 ilimitado · PAC incluido',
            'SPEI, Mercado Pago, OXXO Pay, Clip',
            'Servicio a domicilio (rutas básicas)',
            'Reportes en vivo',
            'Soporte por WhatsApp · horario MX',
          ],
          cta: 'Probar 14 días',
        },
        {
          name: 'PRO',
          price: '$ 899',
          unit: 'MXN / mes · anual',
          tag: 'Para operadores con varias sucursales que ya hacen marketing.',
          features: [
            'Hasta 5 sucursales · usuarios ilimitados',
            'Órdenes ilimitadas',
            'Marketing por WhatsApp (campañas, reactivación)',
            'Membresías y abonos prepagados',
            'API + webhooks privados',
            'Onboarding y soporte prioritario por WhatsApp',
          ],
          cta: 'Probar 14 días',
        },
      ],
    },

    /* --- FAQ --- */
    faq: {
      eyebrow: 'PREGUNTAS',
      h_a: 'Lo que ',
      h_accent: 'casi todos',
      h_b: ' nos preguntan.',
      side: 'Si no encuentras tu pregunta, escríbenos a hola@ciclo.mx — contestamos en menos de 4 horas hábiles.',
      items: [
        {
          q: '¿Necesito comprar hardware especial?',
          a: 'No. Ciclo corre en cualquier tablet, laptop o computadora con navegador. Si quieres impresora térmica, lector de código y báscula, te recomendamos modelos baratos y los configuramos contigo.',
        },
        {
          q: '¿Cómo funciona el timbrado CFDI 4.0?',
          a: 'Tenemos un PAC certificado integrado. Cada venta puede timbrarse al instante, con o sin RFC del cliente. Genera tickets simplificados y permite que el cliente facture después desde un portal con tu marca.',
        },
        {
          q: '¿Qué pasa si se cae el internet?',
          a: 'El POS sigue funcionando offline para venta y emisión de ticket. Cuando vuelve la red, sincroniza órdenes y timbra los CFDI pendientes en orden cronológico.',
        },
        {
          q: '¿Puedo migrar mi información de un sistema anterior?',
          a: 'Importamos tu catálogo (prendas y tarifas) y tu lista de clientes desde Excel o CSV con una plantilla que te damos. El historial de órdenes anteriores se queda en el sistema viejo — empezar limpio en Ciclo es más rápido que intentar migrar algo que cada POS guarda distinto.',
        },
        {
          q: '¿Qué tan seguros están mis datos y los de mis clientes?',
          a: 'Datos cifrados en tránsito (TLS 1.3) y en reposo (AES-256). Cumplimos con la LFPDPPP y el aviso de privacidad lo configuras desde la app.',
        },
        {
          q: '¿Cobran comisión por procesar pagos?',
          a: 'Ciclo no cobra comisión por venta. Pagas solo lo que cobre tu procesador (SPEI, Mercado Pago, OXXO Pay, Clip) — y siempre te mostramos el desglose antes de cobrar.',
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
      eyebrow: ‘PRODUCT’,
      spotlight: {
        h_a: ‘Four pieces,’,
        h_accent: ‘ one’,
        h_b: ‘ system.’,
        body: ‘Everything you need to run your laundromat or dry cleaner on delivery — without gluing five separate tools together.’,
      },
      modules: [
        {
          kicker: ‘CHANNEL’,
          name: ‘WhatsApp’,
          tagline: ‘One number, all your orders.’,
          body: ‘Your customers already use WhatsApp. They get their quote, confirm the pickup, and pay without leaving the chat — and you manage everything from one number under your brand.’,
          features: [
            { tag: ‘ORDERS’,   text: ‘Customers place and confirm orders by chat, nothing to install.’ },
            { tag: ‘PAYMENTS’, text: ‘You send the total and the payment link in the same thread.’ },
            { tag: ‘ALERTS’,   text: ‘You notify "en route" and "delivered" automatically.’ },
          ],
        },
        {
          kicker: ‘IN-STORE’,
          name: ‘In-store board’,
          tagline: ‘The whole operation on one screen.’,
          body: ‘A web board for the counter: every order with its status, its customer, and its route. No more notebooks or internal WhatsApp groups.’,
          features: [
            { tag: ‘STATUS’,    text: ‘New, en route, ready, delivered — at a glance.’ },
            { tag: ‘CUSTOMERS’, text: ‘History, addresses and details for every customer.’ },
            { tag: ‘MULTI’,     text: ‘Works the same with one branch or many.’ },
          ],
        },
        {
          kicker: ‘DELIVERY’,
          name: ‘Driver app’,
          tagline: ‘Clear routes, on-time deliveries.’,
          body: ‘A web app for your drivers with the day’s stops in order, map navigation, and pickup and delivery confirmation.’,
          features: [
            { tag: ‘ROUTE’,    text: ‘The day’s stops, ordered and optimized.’ },
            { tag: ‘NAVIGATE’, text: ‘Open each address in their favorite map.’ },
            { tag: ‘PROOF’,    text: ‘Confirm pickup and delivery with one tap.’ },
          ],
        },
        {
          kicker: ‘MARKETING’,
          name: ‘Marketing’,
          tagline: ‘Win back the customers who stopped coming.’,
          body: ‘Find who you haven’t seen in weeks and send them a WhatsApp promo. Fill the slow days with campaigns you build in minutes.’,
          features: [
            { tag: ‘SEGMENTS’,   text: ‘Filter by last visit or by how much they spend.’ },
            { tag: ‘PROMOS’,     text: ‘Send coupons and reminders over WhatsApp.’ },
            { tag: ‘REACTIVATE’, text: ‘Automatically bring inactive customers back.’ },
          ],
        },
      ],
    },

    integrations: {
      eyebrow: 'CONNECTIONS',
      h2_a: 'Payments and invoicing,',
      h2_accent: ' included',
      h2_b: ' — no extra vendors.',
      sub: 'Payment processors and the certified PAC come integrated. You just activate the account — no separate contracts, no extra invoice in your inbox each month.',
    },

    pricing: {
      eyebrow: 'PRICING',
      h_a: 'Fair',
      h_accent: ' pricing',
      h_b: ' for LatAm.',
      sub: 'Start free. No annual contract, no commitment. If it stops being useful, export everything in a click. Prices in MXN + VAT.',
      popular: 'POPULAR',
      plans: [
        { name: 'FREE',        price: '$ 0',    unit: 'MXN / month',          tag: 'For a single branch testing the waters.',                                  features: ['1 branch · 1 user', 'Up to 80 orders / month', 'Basic point of sale', '50 CFDI 4.0 included', 'Email support'],                                                                                              cta: 'Create account' },
        { name: 'OPERATIONAL', price: '$ 399',  unit: 'MXN / month · annual', tag: 'For the laundromat with recurring customers.',                              featured: true, features: ['1 branch · 3 users', '500 orders / month', 'CFDI 4.0 unlimited · PAC included', 'SPEI, Mercado Pago, OXXO Pay, Clip', 'Home delivery (basic routes)', 'Live reports', 'WhatsApp support · MX hours'], cta: 'Try 14 days' },
        { name: 'PRO',         price: '$ 899',  unit: 'MXN / month · annual', tag: 'For operators with multiple branches who run marketing.',                   features: ['Up to 5 branches · unlimited users', 'Unlimited orders', 'WhatsApp marketing (campaigns, re-engagement)', 'Memberships and prepaid bundles', 'Private API + webhooks', 'Onboarding and priority WhatsApp support'],                cta: 'Try 14 days' },
      ],
    },

    faq: {
      eyebrow: 'QUESTIONS',
      h_a: 'What ',
      h_accent: 'almost everyone',
      h_b: ' asks us.',
      side: 'If you don’t see your question, write to hola@ciclo.mx — we reply within 4 business hours.',
      items: [
        { q: 'Do I need special hardware?', a: 'No. Ciclo runs on any tablet, laptop or computer with a browser. If you want a thermal printer, barcode scanner or scale, we recommend cheap models and configure them with you.' },
        { q: 'How does CFDI 4.0 stamping work?', a: 'We have a certified PAC integrated. Every sale can be stamped instantly, with or without the customer’s RFC. Generate simplified tickets and let customers self-invoice later through a portal with your branding.' },
        { q: 'What happens if internet goes down?', a: 'The POS keeps working offline for sales and ticket printing. When connectivity returns, it syncs orders and stamps pending CFDI in chronological order.' },
        { q: 'Can I migrate my data from another system?', a: 'We import your catalog (garments and prices) and customer list from Excel or CSV using a template we provide. Order history stays in the old system — starting clean in Ciclo is faster than trying to migrate something every POS stores differently.' },
        { q: 'How safe is my data and my customers’ data?', a: 'Encrypted in transit (TLS 1.3) and at rest (AES-256). We comply with LFPDPPP and you configure the privacy notice from inside the app.' },
        { q: 'Do you charge a commission for processing payments?', a: 'Ciclo does not charge a commission per sale. You pay only what your processor charges (SPEI, Mercado Pago, OXXO Pay, Clip) — and we always show the breakdown before charging.' },
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
