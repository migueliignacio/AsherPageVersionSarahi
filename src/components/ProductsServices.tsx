import Link from "next/link";
import { brand } from "@/data/asher";

export default function ProductsServices() {
  const disciplines = brand.disciplines.split(" · ");

  return (
    <section className="border-t border-[var(--color-line)] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div data-reveal className="mb-10 flex items-center gap-4">
          <span className="h-px w-10 bg-[var(--color-ink)]" aria-hidden="true" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
            Nuestros productos y servicios
          </p>
        </div>

        <h2
          data-reveal
          className="font-display max-w-3xl text-balance text-4xl font-medium leading-[1.02] tracking-tight md:text-7xl"
        >
          Soluciones integrales para tu negocio
        </h2>

        <p data-reveal className="mt-8 max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)] md:text-base">
          Ofrecemos un portafolio de servicios diseñado para acompañar en cada etapa de crecimiento. Desde la
          estrategia hasta la protección de tu marca, todo en un mismo lugar.
        </p>

        <Link
          href="/servicios"
          data-reveal
          data-cursor="expand"
          className="group mt-10 inline-flex items-center gap-3 border-b border-[var(--color-ink)] pb-1 text-xs font-medium uppercase tracking-[0.14em]"
        >
          Conoce nuestros servicios
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        <ul
          data-reveal
          className="mt-20 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-ink-soft)] md:mt-28"
        >
          {disciplines.map((name, i) => (
            <li key={name} className="flex items-center gap-6">
              {i > 0 && <span aria-hidden="true">·</span>}
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
