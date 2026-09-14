export interface ServiceGroup {
  index: string;
  title: string;
  items: string[];
  accent: string;
}

export const serviceGroups: ServiceGroup[] = [
  {
    index: "01",
    title: "Brand & Strategy",
    items: ["Brand positioning", "Naming", "Visual identity", "Brand systems", "Creative direction"],
    accent: "var(--color-accent)",
  },
  {
    index: "02",
    title: "Digital Experiences",
    items: ["UX research", "UX/UI design", "Web design", "Web development", "SaaS development"],
    accent: "var(--color-accent-2)",
  },
  {
    index: "03",
    title: "Campaigns",
    items: ["Creative campaigns", "Digital campaigns", "Motion design", "Social media", "Art direction"],
    accent: "var(--color-accent-3)",
  },
  {
    index: "04",
    title: "Content",
    items: ["Photography", "Video", "Motion graphics", "Storytelling", "Content strategy"],
    accent: "var(--color-accent)",
  },
];

export interface ServiceDetail {
  index: string;
  name: string;
  description: string;
  capabilities: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    index: "01",
    name: "Brand Identity & Strategy",
    description:
      "We build brand systems that hold their shape across every surface — from a favicon to a keynote stage.",
    capabilities: ["Positioning", "Naming", "Verbal identity", "Visual identity", "Brand guidelines"],
  },
  {
    index: "02",
    name: "Web Design & Development",
    description:
      "We design and build digital experiences that are fast, accessible, scalable and built around real users.",
    capabilities: ["UX Research", "UX/UI Design", "Frontend Development", "Backend Development", "CMS", "Performance"],
  },
  {
    index: "03",
    name: "Product & SaaS Development",
    description:
      "From first sketch to shipped product — we design and engineer software that people actually enjoy using.",
    capabilities: ["Product strategy", "Design systems", "SaaS architecture", "Accessibility", "QA & testing"],
  },
  {
    index: "04",
    name: "Motion & Content",
    description:
      "Still and moving image, crafted with intent — content that carries a brand's voice into the feed.",
    capabilities: ["Photography", "Video direction", "Motion graphics", "Art direction", "Content strategy"],
  },
];
