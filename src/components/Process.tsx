import { phases } from "@/data/asher";

export default function Process() {
  return (
    <section id="proceso" className="palette-asher border-t border-[var(--color-line)] px-5 py-28 md:px-10 md:py-40">
      <p data-reveal className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
        03 — Cómo trabajamos
      </p>

      <h2
        data-reveal
        className="font-display mb-16 max-w-4xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:mb-24 md:text-7xl"
      >
        Diagnóstico. Estrategia. Ejecución.
      </h2>

      <ol className="grid gap-px overflow-hidden rounded-3xl bg-[var(--color-line)] md:grid-cols-3">
        {phases.map((phase) => (
          <li
            key={phase.index}
            data-reveal
            className="group bg-[var(--color-bg)] p-8 transition-colors duration-500 hover:bg-[var(--color-surface)] md:p-10"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-ink)] text-xs transition-colors duration-500 group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-bg)]">
              {phase.index}
            </span>
            <h3 className="font-display mt-6 text-2xl font-medium tracking-tight">{phase.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {phase.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
