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
    colors: ["#520000", "#e6007e", "#ffffff"],
    background: "linear-gradient(150deg, #7a1f1f 0%, #520000 55%, #2e0000 100%)",
    tone: "dark",
    accent: "#520000",
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
    colors: ["#c3d3ef", "#0b1956", "#ffffff"],
    background: "linear-gradient(150deg, #f2f5fb 0%, #dbe4f5 60%, #c3d3ef 100%)",
    tone: "light",
    accent: "#0b1956",
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
    colors: ["#0b1956", "#8fb0e3", "#ffffff"],
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
    colors: ["#e6007e", "#0b1956", "#ffffff"],
    background: "linear-gradient(150deg, #c3d3ef 0%, #8fb0e3 60%, #6f93cf 100%)",
    tone: "light",
    accent: "#520000",
  },
];
