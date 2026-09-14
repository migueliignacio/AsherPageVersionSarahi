export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  accent: string;
}

export const team: TeamMember[] = [
  { name: "Mara Ibsen", role: "Founder & Creative Director", bio: "Leads creative vision across every project.", accent: "var(--color-accent)" },
  { name: "Theo Fang", role: "Design Director", bio: "Shapes visual systems from concept to launch.", accent: "var(--color-accent-2)" },
  { name: "Priya Nandan", role: "Lead Engineer", bio: "Builds the products underneath the pixels.", accent: "var(--color-accent-3)" },
  { name: "Owen Castell", role: "Strategy Lead", bio: "Turns ambiguity into a clear point of view.", accent: "var(--color-accent)" },
  { name: "Sasha Rein", role: "Motion Designer", bio: "Gives brands a sense of movement and rhythm.", accent: "var(--color-accent-2)" },
  { name: "Iyabo Kwan", role: "Photographer & Director", bio: "Captures the human side of every brand.", accent: "var(--color-accent-3)" },
];

export interface Value {
  index: string;
  title: string;
  description: string;
}

export const values: Value[] = [
  { index: "01", title: "Curious", description: "We ask the second question, not just the first." },
  { index: "02", title: "Bold", description: "We choose the interesting answer over the safe one." },
  { index: "03", title: "Human", description: "Every system we build serves a person on the other end." },
  { index: "04", title: "Experimental", description: "We prototype ideas before we ever pitch them." },
  { index: "05", title: "Responsible", description: "Craft and consequence matter equally to us." },
];

export interface Sector {
  index: string;
  title: string;
  description: string;
  accent: string;
}

export const sectors: Sector[] = [
  { index: "01", title: "Technology", description: "Platforms, tools and products for teams building the future.", accent: "var(--color-accent-2)" },
  { index: "02", title: "Culture", description: "Institutions and programs shaping how people gather and belong.", accent: "var(--color-accent)" },
  { index: "03", title: "Community", description: "Grassroots organisations and changemakers doing the hard work.", accent: "var(--color-accent-3)" },
  { index: "04", title: "Science", description: "Research, climate and health ventures that need clarity.", accent: "var(--color-accent-2)" },
  { index: "05", title: "Business", description: "Corporates in transformation, rebuilding from the inside out.", accent: "var(--color-accent)" },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 9, suffix: "+", label: "Years creating" },
  { value: 120, suffix: "+", label: "Projects shipped" },
  { value: 35, suffix: "", label: "Brands built" },
  { value: 24, suffix: "", label: "Countries reached" },
  { value: 95, suffix: "%", label: "Client retention" },
];
