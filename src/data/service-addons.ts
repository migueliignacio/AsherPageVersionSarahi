export interface ServiceAddon {
  id: string;
  title: string;
  description: string;
  price: number;
}

/** A distinct area inside a service, with its own copy and catalog (e.g. Legal). */
export interface ServiceSection {
  id: string;
  label: string;
  title: string;
  description: string;
  highlights: string[];
  accent: string;
  onAccent: string;
  items: ServiceAddon[];
}

export interface ServiceCatalogEntry {
  slug: string;
  label: string;
  /** One-line summary for the /servicios hub. */
  blurb: string;
  accent: string;
  /** Text color that reads on top of `accent`. */
  onAccent: string;
  /** Flat list of every add-on (for a sectioned service, the union of its sections). */
  items: ServiceAddon[];
  sections?: ServiceSection[];
}

// Single catalog behind the cart: shown on each /servicios/[area] page and,
// all together, in "Arma tu propio pack" on /planes.
const legalSections: ServiceSection[] = [
  {
    id: "derecho-empresas",
    label: "Derecho de empresas",
    title: "Tu empresa, bien constituida y protegida",
    description:
      "Estructura legal, contratos y cumplimiento para que tu negocio opere con orden y crezca sin sobresaltos.",
    highlights: [
      "Constitución y reformas societarias",
      "Contratos con clientes, equipo y proveedores",
      "Políticas de privacidad y cumplimiento",
    ],
    accent: "#7d1a1f",
    onAccent: "#ffffff",
    items: [
      { id: "legal-constitucion-empresa", title: "Constitución de empresa", description: "Creamos tu sociedad de principio a fin: estatutos, registro y obligaciones iniciales.", price: 3500 },
      { id: "legal-estatutos", title: "Reforma de estatutos y actas", description: "Actualizamos estatutos, nombramientos y actas de junta para que todo esté en regla.", price: 2200 },
      { id: "legal-contrato-laboral", title: "Contrato laboral", description: "Contratos a la medida para tu equipo, dentro de la ley.", price: 1600 },
      { id: "legal-contrato-proveedores", title: "Contrato con proveedores", description: "Acuerdos claros de entregables, tiempos y pagos.", price: 1400 },
      { id: "legal-nda", title: "Contrato de confidencialidad (NDA)", description: "Protege información sensible al hablar con terceros.", price: 1200 },
      { id: "legal-revision-contrato", title: "Revisión de contrato existente", description: "Analizamos un contrato que ya tienes antes de firmarlo.", price: 950 },
      { id: "legal-aviso-privacidad", title: "Aviso de privacidad", description: "Documento a la medida para el manejo de datos de tus clientes.", price: 1800 },
      { id: "legal-terminos", title: "Términos y condiciones", description: "Reglas claras de uso para tu sitio o producto.", price: 1500 },
      { id: "legal-cookies", title: "Política de cookies", description: "Cumplimiento normativo para el uso de cookies en tu sitio.", price: 700 },
      { id: "legal-asesoria-puntual", title: "Asesoría legal puntual", description: "Una hora de consulta directa para resolver una duda específica.", price: 1100 },
    ],
  },
  {
    id: "derecho-de-marcas",
    label: "Derecho de marcas",
    title: "Tu marca, registrada y a salvo",
    description:
      "Registro, defensa y gestión de tu propiedad intelectual: que el nombre que construyes sea tuyo de verdad.",
    highlights: [
      "Búsqueda y registro de marca",
      "Oposiciones, cesiones y licencias",
      "Vigilancia y defensa ante usos indebidos",
    ],
    accent: "#0b1956",
    onAccent: "#ffffff",
    items: [
      { id: "legal-diagnostico-pi", title: "Diagnóstico de propiedad intelectual", description: "Revisamos qué activos de tu marca puedes y debes proteger.", price: 1600 },
      { id: "legal-busqueda-marca", title: "Búsqueda de disponibilidad de marca", description: "Verificamos que tu nombre esté libre antes de registrarlo.", price: 900 },
      { id: "legal-registro-marca", title: "Registro de marca", description: "Solicitud y seguimiento del registro de tu marca ante la autoridad competente.", price: 3800 },
      { id: "legal-clases-marca", title: "Registro en clases adicionales", description: "Extiende la protección de tu marca a más productos o servicios.", price: 2600 },
      { id: "legal-oposicion-marca", title: "Oposiciones y observaciones", description: "Defendemos tu solicitud si alguien se opone o la autoridad la observa.", price: 3200 },
      { id: "legal-renovacion-marca", title: "Renovación de marca registrada", description: "Trámite de renovación para no perder tu registro.", price: 2500 },
      { id: "legal-cesion-licencia", title: "Cesión y licencia de marca", description: "Contrato para transferir o licenciar el uso de tu marca.", price: 2400 },
      { id: "legal-cambio-titular", title: "Cambio de titular o de datos", description: "Actualizamos titularidad, domicilio o nombre en el registro.", price: 1500 },
      { id: "legal-vigilancia-marca", title: "Vigilancia de marca", description: "Monitoreamos solicitudes nuevas que puedan parecerse a la tuya.", price: 1800 },
      { id: "legal-carta-cese", title: "Carta de cese y desistimiento", description: "Requerimiento formal ante un uso indebido de tu marca.", price: 1300 },
    ],
  },
];

/** Display order used by the nav, the hub, and "Arma tu propio pack". */
export const serviceOrder = ["branding", "digital-web", "legal", "marketing"] as const;

export const serviceAddons: Record<string, ServiceCatalogEntry> = {
  branding: {
    slug: "branding",
    label: "Branding",
    blurb: "Identidades de marca con carácter: naming, sistemas visuales y guías que se sostienen en el tiempo.",
    accent: "#520000",
    onAccent: "#ffffff",
    items: [
      { id: "branding-auditoria-logo", title: "Auditoría de logo", description: "Revisión de tu logo actual: legibilidad, versatilidad y uso correcto.", price: 1200 },
      { id: "branding-paleta-colores", title: "Paleta de colores", description: "Colores de marca definidos con reglas de uso claras.", price: 900 },
      { id: "branding-tono-voz", title: "Guía de tono de voz", description: "Cómo suena tu marca al escribir: cercana, formal, directa.", price: 1500 },
      { id: "branding-tarjetas", title: "Tarjetas de presentación", description: "Diseño listo para imprenta, alineado a tu identidad.", price: 700 },
      { id: "branding-plantillas-rrss", title: "Plantillas para redes sociales", description: "Set de plantillas editables para publicaciones e historias.", price: 1800 },
      { id: "branding-firma-correo", title: "Firma de correo de marca", description: "Firma profesional con tu identidad, lista para tu equipo.", price: 500 },
      { id: "branding-papeleria", title: "Papelería corporativa", description: "Hojas membretadas, sobres y carpetas con tu marca.", price: 2200 },
      { id: "branding-favicon", title: "Icono / favicon", description: "Versión simplificada de tu marca para apps y pestañas del navegador.", price: 600 },
      { id: "branding-mockups", title: "Mockups de producto", description: "Tu marca aplicada a empaques, prendas o dispositivos para presentar.", price: 1400 },
      { id: "branding-revision", title: "Revisión de marca", description: "Feedback experto sobre una marca existente antes de invertir en cambios.", price: 850 },
    ],
  },
  legal: {
    slug: "legal",
    label: "Legal",
    blurb: "Derecho de empresas y derecho de marcas: constitución, contratos, registro y protección para crecer sin sobresaltos.",
    accent: "#7d1a1f",
    onAccent: "#ffffff",
    items: legalSections.flatMap((section) => section.items),
    sections: legalSections,
  },
  "digital-web": {
    slug: "digital-web",
    label: "Digital Web",
    blurb: "Sitios y productos digitales rápidos, claros y listos para convertir visitas en clientes.",
    accent: "#8fb0e3",
    onAccent: "#0b1956",
    items: [
      { id: "digital-landing", title: "Landing page adicional", description: "Página enfocada en un solo objetivo: captar o vender.", price: 4500 },
      { id: "digital-formulario", title: "Formulario de contacto avanzado", description: "Captura de leads con validación y envío automático.", price: 1200 },
      { id: "digital-pagos", title: "Integración de pagos", description: "Cobra en línea directo desde tu sitio.", price: 3800 },
      { id: "digital-seo", title: "Optimización SEO on-page", description: "Ajustes técnicos y de contenido para aparecer mejor en buscadores.", price: 2600 },
      { id: "digital-blog", title: "Blog / CMS", description: "Sección de contenido que tu equipo puede actualizar solo.", price: 3200 },
      { id: "digital-chat", title: "Chat en vivo", description: "Atiende visitas de tu sitio en tiempo real.", price: 1500 },
      { id: "digital-migracion", title: "Migración de dominio / hosting", description: "Cambio de proveedor sin perder tiempo de actividad.", price: 1800 },
      { id: "digital-mantenimiento", title: "Mantenimiento mensual", description: "Actualizaciones, respaldos y monitoreo continuo.", price: 2000 },
      { id: "digital-ssl", title: "Certificado SSL y seguridad", description: "Tu sitio protegido y marcado como seguro.", price: 900 },
      { id: "digital-analitica", title: "Reporte de analítica", description: "Qué páginas visitan, de dónde vienen y qué convierte.", price: 1300 },
    ],
  },
  marketing: {
    slug: "marketing",
    label: "Marketing",
    blurb: "Campañas y contenido para que tu marca se mueva: más alcance, más conversaciones, más clientes.",
    accent: "#6f95d6",
    onAccent: "#0b1956",
    items: [
      { id: "marketing-fotos-producto", title: "Sesión de fotos de producto", description: "Fotografía profesional lista para catálogo y redes.", price: 2800 },
      { id: "marketing-video-corto", title: "Video corto para redes", description: "Pieza vertical pensada para detener el scroll.", price: 3500 },
      { id: "marketing-copywriting", title: "Copywriting para campaña", description: "Textos que venden, escritos para tu audiencia.", price: 1200 },
      { id: "marketing-calendario", title: "Calendario de contenido mensual", description: "Qué publicar, cuándo y por qué, todo el mes.", price: 1800 },
      { id: "marketing-ads", title: "Gestión de anuncios (Ads)", description: "Campañas pagadas configuradas y optimizadas por expertos.", price: 4000 },
      { id: "marketing-newsletter", title: "Newsletter / email marketing", description: "Correos que mantienen viva la relación con tus clientes.", price: 1500 },
      { id: "marketing-influencers", title: "Influencer outreach", description: "Conectamos tu marca con voces que ya tienen tu audiencia.", price: 2500 },
      { id: "marketing-banners", title: "Diseño de banners publicitarios", description: "Piezas gráficas listas para pauta digital.", price: 1000 },
      { id: "marketing-reporte", title: "Reporte de resultados mensual", description: "Qué funcionó, qué no, y qué sigue.", price: 900 },
      { id: "marketing-lanzamiento", title: "Estrategia de lanzamiento", description: "Plan completo para el lanzamiento de un producto o campaña.", price: 3200 },
    ],
  },
};
