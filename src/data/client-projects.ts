/** What ASHER has done for each client, shown on /proyectos. */
export interface ClientProject {
  id: string;
  name: string;
  /** Short line with the areas ASHER worked on. */
  areas: string;
  logo: string;
  /** Services delivered. */
  services: string[];
  summary: string;
  /** Where "see the service" points. */
  href: string;
  /** Brand colours, used as the palette dots. */
  colors: string[];
  /** Sticky-card background on the parallax block. */
  background: string;
  tone: "dark" | "light";
  /** Accent for the block-reveal animation on the copy. */
  accent: string;
}

export const clientProjects: ClientProject[] = [
  {
    id: "batidoos",
    name: "Batidoos",
    areas: "Legal",
    logo: "/marcas/Batidos.webp",
    services: ["Legal"],
    summary:
      "Acompañamos a Batidoos con la parte legal de su negocio: respaldo para que su marca y su operación crezcan con tranquilidad.",
    href: "/servicios/legal",
    // Sampled from the real logo: hot pink circle, lime-green lettering, white outline.
    colors: ["#e90962", "#b3cc0d", "#ffffff"],
    background: "linear-gradient(150deg, #ff4fa3 0%, #e90962 55%, #7a0538 100%)",
    tone: "dark",
    accent: "#e90962",
  },
  {
    id: "barak-maniquies",
    name: "Barak Maniquíes",
    areas: "Branding · Marketing",
    logo: "/marcas/barak.webp",
    services: ["Branding", "Marketing", "Manejo de ads"],
    summary:
      "Construimos la identidad de Barak Maniquíes y llevamos su marketing, con manejo de anuncios pagados para que más gente los conozca.",
    href: "/servicios/marketing",
    // Sampled from the real logo: cream backdrop, gold ring, black type.
    colors: ["#c9a227", "#1a1a1a", "#f8f0e0"],
    background: "linear-gradient(150deg, #fdf8ee 0%, #f0dfb0 60%, #c9a227 100%)",
    tone: "light",
    accent: "#8a6d1f",
  },
  {
    id: "grupo-velez",
    name: "Grupo Vélez",
    areas: "Legal · Branding",
    logo: "/marcas/velezguev.webp",
    services: ["Legal", "Branding"],
    summary:
      "Con Grupo Vélez trabajamos la parte legal y su marca, para que su presencia se vea tan sólida como su trabajo.",
    href: "/servicios/legal",
    // Sampled from the real logo: navy circle, white type — already the closest match we had.
    colors: ["#0b1956", "#060e2e", "#ffffff"],
    background: "linear-gradient(150deg, #14226b 0%, #0b1956 55%, #060e2e 100%)",
    tone: "dark",
    accent: "#0b1956",
  },
  {
    id: "social-padel-club",
    name: "Social Padel Club",
    areas: "Landing page",
    logo: "/marcas/spc.webp",
    services: ["Landing page", "Digital Web"],
    summary:
      "Diseñamos y desarrollamos la landing page de Social Padel Club.",
    href: "https://padel-club-landing-phi.vercel.app/",
    // Sampled from the real logo: hot pink circle, white type — no third hue in the mark itself.
    colors: ["#e8037b", "#8c0350", "#ffffff"],
    background: "linear-gradient(150deg, #ff4fb0 0%, #e8037b 55%, #8c0350 100%)",
    tone: "dark",
    accent: "#e8037b",
  },
];
