import { values } from "@/data/team";

const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-4", "md:col-span-8", "md:col-span-6 md:col-start-4"];

export default function Culture() {
  return (
    <section className="bg-[var(--color-surface)] px-6 py-24 md:px-10 md:py-32">
      <h2
        data-reveal
        className="font-display mb-16 max-w-2xl text-3xl font-medium uppercase leading-tight tracking-tight md:mb-24 md:text-5xl"
      >
        How we think
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {values.map((value, i) => (
          <div
            key={value.index}
            data-reveal
            className={`group rounded-md border border-[var(--color-line)] p-8 transition-colors duration-400 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] md:p-12 ${spans[i] || "md:col-span-6"}`}
          >
            <span className="text-sm text-[var(--color-ink-soft)] transition-colors duration-400 group-hover:text-[var(--color-bg)]/60">
              {value.index}
            </span>
            <h3 className="font-display mt-4 text-3xl font-medium uppercase tracking-tight md:text-5xl">{value.title}</h3>
            <p className="mt-4 max-w-sm text-sm text-[var(--color-ink)]/70 transition-colors duration-400 group-hover:text-[var(--color-bg)]/80">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
