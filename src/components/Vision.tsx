import Image from "next/image";
import { stats, disciplines } from "@/data/asher";

const disciplineImages: Record<string, string> = {
  Estrategia: "/asher/disciplinas/estrategia-maroon.png",
  Marca: "/asher/disciplinas/marca-branding.png",
  Digital: "/asher/disciplinas/digital-verde.png",
  Publicidad: "/asher/disciplinas/publicidad-naranja.png",
  Legal: "/asher/disciplinas/legal-navy.png",
};

export default function Vision() {
  return (
    <section id="vision" className="border-t border-[var(--color-line)] px-5 py-28 md:px-10 md:py-40">
      <p data-reveal className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
        04 — Nuestra visión
      </p>

      <h2
        data-reveal
        className="font-display mb-20 max-w-4xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:mb-28 md:text-7xl"
      >
        Un mañana mejor, juntos
      </h2>

      <dl className="mb-28 grid gap-12 border-y border-[var(--color-line)] py-14 md:grid-cols-3 md:gap-10 md:py-20">
        {stats.map((stat) => (
          <div key={stat.label} data-reveal>
            <dt className="font-display text-5xl font-medium tracking-tight md:text-7xl">
              {stat.value}
            </dt>
            <dd className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>

      <h3 data-reveal className="font-display mb-12 text-2xl font-medium tracking-tight md:text-4xl">
        Cinco disciplinas, un solo equipo
      </h3>

      <div className="grid gap-6 md:grid-cols-5 md:gap-4">
        {disciplines.map((discipline) => {
          const imageSrc = disciplineImages[discipline.title];
          return (
            <article key={discipline.title} data-reveal data-cursor="view" className="group flex flex-col">
              {imageSrc && (
                <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-xl bg-[var(--color-surface)] transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={imageSrc}
                    alt={discipline.title}
                    fill
                    className="object-contain p-3"
                  />
                </div>
              )}
              <h4 className="font-display text-xl font-medium tracking-tight">{discipline.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {discipline.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
