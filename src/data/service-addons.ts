export interface ServiceAddon {
  id: string;
  title: string;
  description: string;
  price: number;
}

export interface ServiceCatalogEntry {
  slug: string;
  label: string;
  accent: string;
  items: ServiceAddon[];
}

// Single catalog behind the cart: shown on each /servicios/[area] page and,
// all together, in "Arma tu propio pack" on /planes.
export const serviceAddons: Record<string, ServiceCatalogEntry> = {
  branding: {
    slug: "branding",
    label: "Branding",
    accent: "#fb1b7c",
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
    accent: "#84172e",
    items: [
      { id: "legal-aviso-privacidad", title: "Aviso de privacidad", description: "Documento a la medida para el manejo de datos de tus clientes.", price: 1800 },
      { id: "legal-terminos", title: "Términos y condiciones", description: "Reglas claras de uso para tu sitio o producto.", price: 1500 },
      { id: "legal-nda", title: "Contrato de confidencialidad (NDA)", description: "Protege información sensible al hablar con terceros.", price: 1200 },
      { id: "legal-contrato-laboral", title: "Contrato laboral", description: "Contratos a la medida para tu equipo, dentro de la ley.", price: 1600 },
      { id: "legal-busqueda-marca", title: "Búsqueda de disponibilidad de marca", description: "Verificamos que tu nombre esté libre antes de registrarlo.", price: 900 },
      { id: "legal-renovacion-marca", title: "Renovación de marca registrada", description: "Trámite de renovación para no perder tu registro.", price: 2500 },
      { id: "legal-contrato-proveedores", title: "Contrato con proveedores", description: "Acuerdos claros de entregables, tiempos y pagos.", price: 1400 },
      { id: "legal-cookies", title: "Política de cookies", description: "Cumplimiento normativo para el uso de cookies en tu sitio.", price: 700 },
      { id: "legal-asesoria-puntual", title: "Asesoría legal puntual", description: "Una hora de consulta directa para resolver una duda específica.", price: 1100 },
      { id: "legal-revision-contrato", title: "Revisión de contrato existente", description: "Analizamos un contrato que ya tienes antes de firmarlo.", price: 950 },
    ],
  },
  "digital-web": {
    slug: "digital-web",
    label: "Digital Web",
    accent: "#79b826",
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
  marca: {
    slug: "marca",
    label: "Marca",
    accent: "#aa7ef6",
    items: [
      { id: "marca-competencia", title: "Análisis de competencia", description: "Cómo se posicionan tus competidores y dónde hay espacio para ti.", price: 2200 },
      { id: "marca-buyer-persona", title: "Buyer persona", description: "Perfil claro de a quién le hablas y qué le importa.", price: 1600 },
      { id: "marca-tagline", title: "Mensaje de marca (tagline)", description: "La frase que resume qué haces y por qué importa.", price: 1000 },
      { id: "marca-arquitectura", title: "Arquitectura de marca", description: "Cómo se organizan tus líneas de producto o submarcas.", price: 3000 },
      { id: "marca-diagnostico-expres", title: "Diagnóstico exprés", description: "Lectura rápida de tu marca actual en una sesión.", price: 1200 },
      { id: "marca-taller-posicionamiento", title: "Taller de posicionamiento", description: "Sesión de trabajo para definir tu lugar en el mercado.", price: 2800 },
      { id: "marca-pitch", title: "Guion de pitch", description: "Cómo presentar tu marca en menos de un minuto.", price: 1400 },
      { id: "marca-coherencia", title: "Revisión de coherencia de marca", description: "Detectamos inconsistencias entre lo que dices y lo que muestras.", price: 900 },
      { id: "marca-naming-linea", title: "Naming de producto o línea", description: "Nombre para un nuevo producto dentro de tu marca.", price: 2000 },
      { id: "marca-expansion", title: "Estrategia de expansión", description: "Plan para llevar tu marca a una nueva ciudad, canal o mercado.", price: 3500 },
    ],
  },
  marketing: {
    slug: "marketing",
    label: "Marketing",
    accent: "#f1562c",
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
