import { phases } from "@/data/asher";

/** The three-phase list that follows the "Cómo trabajamos" parallax card. */
export default function Process() {
  return (
    <ol className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-3xl bg-[var(--color-line)] md:grid-cols-3">
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
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{phase.description}</p>
        </li>
      ))}
    </ol>
  );
}
