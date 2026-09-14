export interface Insight {
  category: string;
  title: string;
  author: string;
  date: string;
  accent: string;
}

export const insights: Insight[] = [
  {
    category: "Product",
    title: "Designing digital products people actually want",
    author: "Mara Ibsen",
    date: "Mar 2026",
    accent: "var(--color-accent)",
  },
  {
    category: "Technology",
    title: "The future of creative technology",
    author: "Priya Nandan",
    date: "Feb 2026",
    accent: "var(--color-accent-2)",
  },
  {
    category: "Craft",
    title: "Why great websites feel different",
    author: "Theo Fang",
    date: "Jan 2026",
    accent: "var(--color-accent-3)",
  },
  {
    category: "AI",
    title: "Building brands for an AI-first world",
    author: "Owen Castell",
    date: "Dec 2025",
    accent: "var(--color-accent)",
  },
  {
    category: "Systems",
    title: "Design systems beyond the interface",
    author: "Sasha Rein",
    date: "Nov 2025",
    accent: "var(--color-accent-2)",
  },
];
