import Image from "next/image";

const marcas = [
  { src: "/marcas/spc.png", alt: "Social Padel Club" },
  { src: "/marcas/batidoos.png", alt: "Batidoos" },
  { src: "/marcas/velez-guevara.png", alt: "Vélez Guevara Abogados" },
  { src: "/marcas/barak-maniquies.png", alt: "Barak Maniquíes" },
];

// The track holds two identical halves and scrolls by exactly one half, so
// the loop has no seam. Each half repeats the brands enough times to be wider
// than any screen.
const HALF = [...marcas, ...marcas, ...marcas];

export default function ClientLogos() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div data-reveal className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[var(--color-ink)]" aria-hidden="true" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
            Nuestros clientes
          </p>
        </div>
        <h2
          data-reveal
          className="font-display max-w-2xl text-balance text-4xl font-medium leading-[1.02] tracking-tight md:text-6xl"
        >
          Marcas que han confiado en Asher
        </h2>
      </div>

      <div
        className="marquee-group mt-14 overflow-hidden md:mt-20"
        style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
        aria-label="Logos de nuestros clientes"
      >
        <ul className="marquee-track flex" style={{ animationDuration: "45s" }}>
          {[0, 1].map((half) =>
            HALF.map((marca, i) => (
              <li
                key={`${half}-${i}`}
                className="shrink-0 px-4 py-4 md:px-6"
                aria-hidden={half === 1 ? true : undefined}
              >
                <div className="relative h-36 w-36 overflow-hidden rounded-full bg-white shadow-[0_10px_30px_-12px_rgba(11,25,86,0.35)] md:h-48 md:w-48">
                  <Image src={marca.src} alt={half === 1 ? "" : marca.alt} fill sizes="192px" className="object-cover" />
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
