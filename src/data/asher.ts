/** Contenido real de ASHER — consultora de crecimiento de marca. */

export const brand = {
  name: "Asher",
  tagline: "Consultora de Crecimiento de Marca",
  disciplines: "Estrategia · Marca · Digital · Legal",
  heroHeadline: "Construimos marca sin fricciones",
  heroSub:
    "Elige una ruta, cuéntanos tu proyecto, y tu marca empieza a moverse esta semana — con respaldo legal desde el día uno.",
  email: "asherlegalbranding@gmail.com",
  copyright: "© 2026 ASHER",
};

export interface Route {
  index: string;
  title: string;
  description: string;
  accent: string;
}

/** 02 — Lo que hacemos: "Cinco Rutas Claras". */
export const routes: Route[] = [
  {
    index: "01",
    title: "Crear marca",
    description: "Para emprendedores y negocios que arrancan con todo.",
    accent: "var(--color-accent)",
  },
  {
    index: "02",
    title: "Mejorar marca",
    description: "Para marcas que ya existen pero merecen verse mejor.",
    accent: "var(--color-lavender)",
  },
  {
    index: "03",
    title: "Publicidad",
    description: "Para negocios que necesitan más clientes y más ventas.",
    accent: "var(--color-accent-3)",
  },
  {
    index: "04",
    title: "Digitalización",
    description: "Para quienes necesitan presencia digital o herramientas tech.",
    accent: "var(--color-accent-2)",
  },
  {
    index: "05",
    title: "Blindaje legal",
    description: "Respaldo legal como base de todo lo que construyes.",
    accent: "var(--color-violet)",
  },
];

export interface Phase {
  index: string;
  title: string;
  description: string;
}

/** 03 — Cómo trabajamos: "Diagnóstico. Estrategia. Ejecución." */
export const phases: Phase[] = [
  { index: "01", title: "Diagnóstico", description: "Entendemos tu marca, tu mercado y tu punto de partida real." },
  { index: "02", title: "Estrategia", description: "Diseñamos un plan de marca, comunicación y crecimiento a la medida." },
  { index: "03", title: "Ejecución", description: "Implementamos con rigor: diseño, contenido, campañas y desarrollo." },
  { index: "04", title: "Blindaje", description: "Registro de marca, contratos y cumplimiento legal desde el inicio." },
  { index: "05", title: "Medición", description: "Seguimos resultados reales y ajustamos lo que haga falta." },
  { index: "06", title: "Crecimiento", description: "Tu marca evoluciona; nosotros seguimos a tu lado en cada etapa." },
];

export interface Discipline {
  title: string;
  description: string;
  accent: string;
}

/** 05 — Cinco disciplinas centrales. */
export const disciplines: Discipline[] = [
  { title: "Estrategia", description: "Diagnóstico y ruta clara antes de mover un solo elemento de tu marca.", accent: "var(--color-accent)" },
  { title: "Marca", description: "Identidad visual y de negocio que se sostiene en el tiempo.", accent: "var(--color-lavender)" },
  { title: "Digital", description: "Presencia web, automatizaciones y campañas que sí convierten.", accent: "var(--color-accent-2)" },
  { title: "Publicidad", description: "Campañas que se miden en clientes, no en likes.", accent: "var(--color-accent-3)" },
  { title: "Legal", description: "Registro y blindaje para que lo que construyes sea tuyo de verdad.", accent: "var(--color-violet)" },
];

export interface Stat {
  value: string;
  label: string;
}

/** 04 — Nuestra visión: "Un mañana Mejor, Juntos". */
export const stats: Stat[] = [
  { value: "100+", label: "Empresas asesoradas en branding, marketing y materia legal." },
  { value: "5", label: "Disciplinas centrales bajo un mismo techo, un solo equipo." },
  { value: "Día 1", label: "Respaldo legal desde el inicio, no como paso final." },
];

export interface Tier {
  name: string;
  audience: string;
  includes: string[];
  featured?: boolean;
}

export const tiers: Tier[] = [
  {
    name: "ASHER Emprende",
    audience: "Freelancers, startups y fundaciones.",
    includes: [
      "Naming e identidad de marca",
      "Logo, paleta y manual de uso básico",
      "Presencia digital inicial",
      "Blindaje legal esencial (registro de marca)",
    ],
  },
  {
    name: "ASHER PYME",
    audience: "Empresas formalizadas con menos de 70 colaboradores.",
    featured: true,
    includes: [
      "Todo lo de ASHER Emprende",
      "Estrategia de marketing y publicidad con seguimiento",
      "Herramientas digitales y automatizaciones a medida",
      "Blindaje legal integral (contratos, políticas, cumplimiento)",
      "Retainer mensual con un solo punto de contacto",
    ],
  },
  {
    name: "ASHER Corporativo",
    audience: "Empresas de 70+ colaboradores, sector público y grupos empresariales.",
    includes: [
      "Todo lo de ASHER PYME",
      "Equipo dedicado y tiempos de respuesta prioritarios",
      "Estructura corporativa y operaciones M&A",
      "Cumplimiento regulatorio avanzado",
      "Reportes ejecutivos y KPIs a medida",
    ],
  },
];

export interface CustomService {
  id: string;
  category: "Estrategia" | "Marca" | "Digital" | "Publicidad" | "Legal";
  title: string;
  description: string;
  price: number;
}

/** 06 — Plan personalizado: servicios a la carta, cada uno con su precio. */
export const customServices: CustomService[] = [
  { id: "diagnostico-marca", category: "Estrategia", title: "Diagnóstico de marca", description: "Auditoría completa de tu marca y mercado.", price: 3500 },
  { id: "plan-estrategico", category: "Estrategia", title: "Plan estratégico anual", description: "Hoja de ruta de crecimiento a 12 meses.", price: 8500 },
  { id: "naming", category: "Marca", title: "Naming", description: "Nombre de marca con validación legal y de mercado.", price: 4500 },
  { id: "identidad-visual", category: "Marca", title: "Identidad visual", description: "Logo, paleta, tipografía y manual de uso.", price: 12000 },
  { id: "rebranding", category: "Marca", title: "Rebranding completo", description: "Renovación integral de identidad existente.", price: 18000 },
  { id: "sitio-web", category: "Digital", title: "Sitio web a medida", description: "Diseño y desarrollo de sitio institucional.", price: 22000 },
  { id: "ecommerce", category: "Digital", title: "Tienda en línea", description: "E-commerce completo con pasarela de pago.", price: 32000 },
  { id: "automatizaciones", category: "Digital", title: "Automatizaciones", description: "Flujos y herramientas digitales a medida.", price: 9500 },
  { id: "campania-digital", category: "Publicidad", title: "Campaña digital", description: "Estrategia y ejecución en redes y buscadores.", price: 15000 },
  { id: "gestion-redes", category: "Publicidad", title: "Gestión de redes sociales", description: "Contenido y comunidad, mes a mes.", price: 6500 },
  { id: "produccion-contenido", category: "Publicidad", title: "Producción de contenido", description: "Fotografía y video para campañas.", price: 11000 },
  { id: "registro-marca", category: "Legal", title: "Registro de marca", description: "Trámite completo ante el instituto correspondiente.", price: 7000 },
  { id: "contratos", category: "Legal", title: "Paquete de contratos", description: "Contratos base para operación y clientes.", price: 5500 },
  { id: "cumplimiento", category: "Legal", title: "Cumplimiento regulatorio", description: "Revisión y blindaje normativo continuo.", price: 9000 },
];

/** Propuestas de valor repetidas a lo largo del sitio. */
export const valueProps = [
  "Todo bajo un mismo techo",
  "Construimos para crecer",
  "Con blindaje desde el principio",
  "Estrategia que se ejecuta",
];

export const marqueeItems = [
  "Branding Integral",
  "Publicidad Digital",
  "Identidad de Marca",
  "Digitalización",
  "Blindaje Legal",
  "Crecimiento",
];
