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
  socialLinks: {
    instagram: "https://www.instagram.com/asherconsulting?stkn=MTY0NTlpOTM1cHNraA==",
    facebook: "https://www.facebook.com/Asherconsult593",
    tiktok: "https://www.tiktok.com/@asherconsulting?_r=1&_t=ZS-99XgCxyAFW9",
    whatsapp: `https://wa.me/593992198798?text=${encodeURIComponent(
      "Hola, quiero agendar una consultoría con ASHER."
    )}`,
  },
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
  id: string;
  name: string;
  /** MXN. Undefined until pricing is set; the cart shows "A cotizar". */
  price?: number;
  audience: string;
  includes: string[];
  featured?: boolean;
}

export const tiers: Tier[] = [
  {
    id: "emprende",
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
    id: "pyme",
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
    id: "corporativo",
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
