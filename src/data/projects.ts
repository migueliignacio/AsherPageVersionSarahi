export interface Project {
  index: string;
  name: string;
  category: string;
  description: string;
  year: string;
  size: "lg" | "md" | "sm";
  orientation: "portrait" | "landscape" | "square";
  accent: string;
}

export const projects: Project[] = [
  {
    index: "01",
    name: "NOVA",
    category: "Brand & Digital Platform",
    description: "Digital ecosystem for a new generation of creators.",
    year: "2025",
    size: "lg",
    orientation: "landscape",
    accent: "var(--color-accent)",
  },
  {
    index: "02",
    name: "AURA",
    category: "Brand Identity",
    description: "Brand identity and digital platform for sustainable technology.",
    year: "2025",
    size: "md",
    orientation: "portrait",
    accent: "var(--color-accent-2)",
  },
  {
    index: "03",
    name: "KIN",
    category: "UX/UI & Web Development",
    description: "A new digital experience for modern communities.",
    year: "2024",
    size: "sm",
    orientation: "square",
    accent: "var(--color-accent-3)",
  },
  {
    index: "04",
    name: "ORBIT",
    category: "Product Design & SaaS",
    description: "Product design and SaaS development for ambitious teams.",
    year: "2024",
    size: "lg",
    orientation: "landscape",
    accent: "var(--color-accent-2)",
  },
  {
    index: "05",
    name: "LUMA",
    category: "Brand Transformation",
    description: "Brand transformation and interactive storytelling.",
    year: "2023",
    size: "md",
    orientation: "portrait",
    accent: "var(--color-accent)",
  },
  {
    index: "06",
    name: "DRIFT",
    category: "Campaign & Motion",
    description: "A moving campaign identity for a mobility platform.",
    year: "2023",
    size: "sm",
    orientation: "square",
    accent: "var(--color-accent-3)",
  },
];
