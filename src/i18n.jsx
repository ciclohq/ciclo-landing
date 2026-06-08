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

    /* --- Modules — 4 named pillars --- */
    features: {
      eyebrow: 'MÓDULOS · CICLO',
      spotlight: {
        h_a: 'Cuatro módulos,',
        h_accent: ' una sola',
        h_b: ' operación.',
        body: 'Cuatro módulos, una sola base de datos. Cada venta del mostrador se factura, dispara una entrega, suma a tu margen y reactiva al cliente — sin que muevas un dedo entre sistemas, sin Excel en medio.',
      },
      modules: [
        {
          kicker: 'GESTIÓN',
          name: 'Ciclo Gestión',
          tagline: 'El negocio entero, sin moverte de la barra.',
          body: 'Multi-sucursal en una sola cuenta, con los reportes que de verdad importan y los cierres de caja conciliados solos. Sin licencias extra, sin sistemas en paralelo.',
          features: [
            { tag: 'TABLERO',        text: 'Vista en vivo de todas tus sucursales en una pantalla' },
            { tag: 'REPORTES',       text: 'Margen por sucursal, ticket promedio y productividad por empleado — sin tablas dinámicas' },
            { tag: 'CIERRE DE CAJA', text: 'Conciliado solo cada noche contra SPEI, tarjeta y efectivo — sin cuadrar a mano' },
            { tag: 'INVENTARIO',     text: 'Costo por kilo lavado, suministros y consumo por sucursal' },
            { tag: 'EMPLEADOS',      text: 'Turnos, comisiones y nómina por sucursal con permisos por rol' },
          ],
        },
        {
          kicker: 'PUNTO DE VENTA',
          name: 'Ciclo Punto de Venta',
          tagline: '12 segundos por cobro.',
          body: 'Diseñado para mostradores reales: ruidosos, rápidos y con clientes que pagan de cinco formas distintas. Imprime el ticket o mándalo por WhatsApp con un click.',
          features: [
            { tag: 'PAGOS',   text: 'Acepta cualquier forma de pago en una sola pantalla — efectivo, transferencia, QR o terminal' },
            { tag: 'TICKETS', text: 'Imprime térmico o envía el ticket por WhatsApp con un click' },
            { tag: 'PRENDAS', text: 'Etiqueta única con código y foto de ingreso — bitácora por prenda, ninguna se pierde por ahí' },
            { tag: 'CUENTAS', text: 'Cuenta corriente del cliente, abonos prepagados y pago contra entrega' },
            { tag: 'OFFLINE', text: 'Sigue cobrando si se cae el internet — sincroniza órdenes y CFDI cuando regresa la red' },
          ],
        },
        {
          kicker: 'A DOMICILIO',
          name: 'Ciclo Rutas',
          tagline: 'La logística de tu lavandería, sin Rappi en medio.',
          body: 'Recolección y entrega con motos propias o flota tercerizada. Tú decides la zona, nosotros armamos la ruta y le mandamos al cliente la ETA por WhatsApp con un link para seguir al repartidor en vivo.',
          features: [
            { tag: 'RUTAS',       text: 'Tú dibujas la zona, Ciclo arma la ruta optimizada por hora y volumen' },
            { tag: 'SEGUIMIENTO', text: 'El cliente sigue al repartidor en vivo, como un pedido de comida — sin app extra' },
            { tag: 'COBRO',       text: 'Cobro contra entrega: efectivo, transferencia o tarjeta con terminal en la mochila' },
            { tag: 'DIRECCIONES', text: 'Foto de la fachada y referencia escrita — sin teléfonos del cliente al repartidor' },
            { tag: 'FLOTA',       text: 'Motos propias o tercerizadas — tú decides cuándo escalar' },
          ],
        },
        {
          kicker: 'MARKETING',
          name: 'Ciclo Marketing',
          tagline: 'Más conversaciones, más clientes que vuelven.',
          body: 'El cliente no abre el correo, pero contesta el WhatsApp en dos minutos. Campañas segmentadas, reactivación automática y membresías que crean ingresos recurrentes — todo en un mismo lugar, sin pagarle a una agencia ni contratar otra herramienta.',
          features: [
            { tag: 'CAMPAÑAS',     text: 'Mensajes por WhatsApp a grupos específicos según lo que tu cliente compra y cuándo' },
            { tag: 'REACTIVACIÓN', text: 'Trae automáticamente al cliente que lleva 90 días sin venir' },
            { tag: 'MEMBRESÍAS',   text: 'Convierte clientes ocasionales en suscriptores con planes recurrentes' },
            { tag: 'RESEÑAS',      text: 'Invitación automática a reseñar en Google después de cada entrega' },
            { tag: 'MÉTRICAS',     text: 'Apertura, respuesta y conversión medidas — sabes qué campaña funcionó' },
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

    features: {
      eyebrow: 'MODULES · CICLO',
      spotlight: {
        h_a: 'Four modules,',
        h_accent: ' one',
        h_b: ' operation.',
        body: 'Four modules, one database. Every sale at the counter gets invoiced, triggers a delivery, adds to your margin and reactivates the customer — without you moving a finger between systems, without a spreadsheet in the middle.',
      },
      modules: [
        {
          kicker: 'MANAGEMENT',
          name: 'Ciclo Management',
          tagline: 'The whole business, without leaving the counter.',
          body: 'Multi-branch in one account, with the reports that actually matter and end-of-day reconciliations done for you. No extra licenses, no parallel systems.',
          features: [
            { tag: 'DASHBOARD',  text: 'Live view across every branch on one screen' },
            { tag: 'REPORTS',    text: 'Margin per branch, average ticket and productivity per employee — no pivot tables' },
            { tag: 'CASH CLOSE', text: 'Reconciled nightly against SPEI, card and cash — no hand-balancing' },
            { tag: 'INVENTORY',  text: 'Cost per kilo washed, supplies and consumption per branch' },
            { tag: 'STAFF',      text: 'Shifts, commissions and payroll per branch with role-based permissions' },
          ],
        },
        {
          kicker: 'POINT OF SALE',
          name: 'Ciclo Punto de Venta',
          tagline: '12 seconds per checkout.',
          body: 'Built for real counters: loud, fast, and with customers paying five different ways. Print the ticket or send it via WhatsApp with one click.',
          features: [
            { tag: 'PAYMENTS', text: 'Accept any payment method on one screen — cash, transfer, QR or terminal' },
            { tag: 'TICKETS',  text: 'Thermal print or send the ticket via WhatsApp with one click' },
            { tag: 'GARMENTS', text: 'One label with code and intake photo — per-garment log, none get misplaced' },
            { tag: 'ACCOUNTS', text: 'Customer house accounts, prepaid bundles and pay-on-delivery' },
            { tag: 'OFFLINE',  text: 'Keeps charging when internet drops — orders and CFDI sync once it comes back' },
          ],
        },
        {
          kicker: 'HOME DELIVERY',
          name: 'Ciclo Routes',
          tagline: 'Your laundromat’s logistics, without Rappi in the middle.',
          body: 'Pickup and delivery with your own couriers or a third-party fleet. You pick the zone, we plan the route and ping the customer their ETA via WhatsApp with a live link to follow the rider.',
          features: [
            { tag: 'ROUTES',    text: 'You draw the zone, Ciclo plans the route — optimized by hour and volume' },
            { tag: 'TRACKING',  text: 'Customer follows the rider live, like a food order — no app to download' },
            { tag: 'PAYMENT',   text: 'Pay on delivery: cash, transfer or card with a terminal in the messenger bag' },
            { tag: 'ADDRESSES', text: 'Storefront photo + written landmark — no customer phone numbers exposed to the rider' },
            { tag: 'FLEET',     text: 'Own couriers or third-party — your call when to scale' },
          ],
        },
        {
          kicker: 'MARKETING',
          name: 'Ciclo Marketing',
          tagline: 'More conversations, more customers coming back.',
          body: 'Customers don’t open email — but they reply to WhatsApp in two minutes. Segmented campaigns, automatic re-engagement and memberships that drive recurring revenue — all in one place, without paying an agency or buying another tool.',
          features: [
            { tag: 'CAMPAIGNS',     text: 'WhatsApp messages to specific groups based on what your customer buys and when' },
            { tag: 'RE-ENGAGEMENT', text: 'Automatically bring back the customer who hasn’t shown up in 90 days' },
            { tag: 'MEMBERSHIPS',   text: 'Convert one-time customers into subscribers with recurring plans' },
            { tag: 'REVIEWS',       text: 'Automatic Google review invite after every delivery' },
            { tag: 'METRICS',       text: 'Open rate, reply rate and conversion measured — you know what worked' },
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
