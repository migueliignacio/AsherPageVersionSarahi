import { valueProps } from "@/data/asher";

export default function About() {
  return (
    <section id="quienes-somos" className="px-5 py-28 md:px-10 md:py-40">
      <p data-reveal className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
        01 — Quiénes somos
      </p>

      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <h2
          data-reveal
          className="font-display text-balance text-4xl font-medium leading-[0.95] tracking-tight md:col-span-7 md:text-7xl"
        >
          Claridad para crecer
        </h2>

        <div data-reveal className="space-y-5 text-sm leading-relaxed text-[var(--color-ink-soft)] md:col-span-4 md:col-start-9">
          <p>
            Somos una consultora integral de marca, marketing, tecnología y
            protección legal. Construimos, mejoramos, digitalizamos y protegemos
            marcas.
          </p>
          <p>
            Con respaldo legal desde el día uno — no como último paso, sino como
            la base de todo lo que construimos contigo.
          </p>
        </div>
      </div>

      <ul data-reveal className="mt-16 flex flex-wrap gap-3 md:mt-24">
        {valueProps.map((prop) => (
          <li
            key={prop}
            className="rounded-full border border-[var(--color-ink)]/20 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.08em]"
          >
            {prop}
          </li>
        ))}
      </ul>
    </section>
  );
}
