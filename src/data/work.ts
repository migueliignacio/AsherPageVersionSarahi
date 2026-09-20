export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  summary: string;
  cover: string;
  accent: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "mascota-asher",
    category: "Branding",
    title: "AS, la mascota de ASHER",
    summary: "Diseñamos un personaje de marca para darle una cara amigable a una consultora que reúne cuatro disciplinas distintas.",
    cover: "/asher/trabajos/mascota-asher/badge.png",
    accent: "#520000",
  },
];
