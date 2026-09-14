import { projects } from "@/data/projects";

interface SectorBlock {
  title: string;
  count: number;
  description: string;
  projectIndexes: string[];
}

const BLOCKS: SectorBlock[] = [
  {
    title: "Community & Health",
    count: 33,
    description:
      "Work shaped by the challenges of our time. Brands, programs and apps built with changemakers across government, council and not-for-profits.",
    projectIndexes: ["01", "03"],
  },
  {
    title: "Science & Innovation",
    count: 20,
    description:
      "Complex projects that need considered communication design. Think AI, climate tooling, cloud infrastructure and biotech.",
    projectIndexes: ["04", "02"],
  },
  {
    title: "Arts & Culture",
    count: 12,
    description:
      "Working with institutions and programs to build brands and experiential design that amplify the right cultural narratives.",
    projectIndexes: ["05", "06"],
  },
];

export default function SectorShowcase() {
  return (
    <section id="sectors" className="px-5 md:px-10">
      {BLOCKS.map((block) => {
        const items = block.projectIndexes
          .map((i) => projects.find((p) => p.index === i))
          .filter((p): p is (typeof projects)[number] => Boolean(p));

        return (
          <div key={block.title} className="border-t border-[var(--color-line)] py-24 md:py-32">
            <div className="mb-16 grid gap-10 md:mb-20 md:grid-cols-3 md:gap-16">
              <h2
                data-reveal
                className="font-display flex items-start gap-3 text-4xl font-medium leading-[0.95] tracking-tight md:col-span-2 md:text-6xl"
              >
                <span className="text-balance">{block.title}</span>
                <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--color-ink)] text-xs font-normal md:h-11 md:w-11 md:text-sm">
                  {block.count}
                </span>
              </h2>
              <p data-reveal className="max-w-md text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {block.description}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {items.map((project) => (
                <article
                  key={project.index}
                  data-reveal
                  data-cursor="view"
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-3xl">
                    {/* Placeholder art stands in for project imagery. */}
                    <div
                      className="aspect-[4/3] w-full transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${project.accent}, var(--color-surface))`,
                      }}
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-[var(--color-bg)]/90 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.1em] backdrop-blur-sm">
                      {project.category}
                    </span>
                    <div className="pointer-events-none absolute inset-0 bg-[var(--color-ink)]/0 transition-colors duration-500 group-hover:bg-[var(--color-ink)]/10" />
                  </div>

                  <p className="mt-5 max-w-lg text-sm leading-relaxed">
                    <span className="font-medium">{project.name}</span>
                    <span className="text-[var(--color-ink-soft)]"> — {project.description}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
