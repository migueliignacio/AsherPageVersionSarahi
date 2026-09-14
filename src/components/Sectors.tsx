import { sectors } from "@/data/team";

export default function Sectors() {
  return (
    <section className="border-y border-[var(--color-line)] px-6 py-24 md:px-10 md:py-32">
      <h2
        data-reveal
        className="font-display mb-16 max-w-2xl text-3xl font-medium uppercase leading-tight tracking-tight md:mb-24 md:text-5xl"
      >
        We work where design meets change.
      </h2>

      <div className="flex flex-col">
        {sectors.map((sector) => (
          <div
            key={sector.index}
            data-reveal
            data-cursor="view"
            className="group relative flex items-center justify-between overflow-hidden border-t border-[var(--color-line)] py-8 transition-colors duration-500 last:border-b md:py-10"
          >
            <div
              className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0 group-hover:opacity-100"
              style={{ background: sector.accent }}
            />

            <div className="relative z-10 flex items-baseline gap-6 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-4 md:gap-10">
              <span className="text-sm text-[var(--color-ink-soft)] transition-colors duration-500 group-hover:text-[var(--color-bg)]/70">
                {sector.index}
              </span>
              <h3 className="font-display text-3xl font-medium uppercase tracking-tight transition-colors duration-500 group-hover:text-[var(--color-bg)] md:text-5xl">
                {sector.title}
              </h3>
            </div>

            <p className="relative z-10 hidden max-w-xs translate-x-6 text-sm text-[var(--color-ink-soft)] opacity-0 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0 group-hover:text-[var(--color-bg)] group-hover:opacity-90 md:block">
              {sector.description}
            </p>

            <span className="relative z-10 text-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--color-bg)]">
              ↗
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
