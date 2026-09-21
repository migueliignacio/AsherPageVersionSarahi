"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const marcas = [
  { src: "/marcas/spc.png", alt: "Social Padel Club" },
  { src: "/marcas/batidoos.png", alt: "Batidoos" },
  { src: "/marcas/velez-guevara.png", alt: "Vélez Guevara Abogados" },
  { src: "/marcas/barak-maniquies.png", alt: "Barak Maniquíes" },
];

export default function ClientLogos() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [overflowing, setOverflowing] = useState(false);
  const [index, setIndex] = useState(0);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setOverflowing(track.scrollWidth > track.clientWidth + 4);
    const first = track.children[0] as HTMLElement | undefined;
    const step = first ? first.offsetWidth + 32 : 1;
    setIndex(Math.min(marcas.length - 1, Math.round(track.scrollLeft / step)));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => observer.disconnect();
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    track.scrollBy({ left: dir * ((first?.offsetWidth ?? 200) + 32), behavior: "smooth" });
  };

  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
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

        <div className="relative mt-14 md:mt-20">
          {overflowing && (
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              data-cursor="expand"
              className="absolute -left-1 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[var(--color-ink)]/30 bg-[var(--color-bg)] transition-colors hover:border-[var(--color-ink)] md:-left-5"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}

          <ul
            ref={trackRef}
            onScroll={update}
            data-lenis-prevent-wheel
            className="no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto px-1 py-2 md:justify-center"
          >
            {marcas.map((marca) => (
              <li key={marca.src} className="shrink-0 snap-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full bg-white shadow-[0_10px_30px_-12px_rgba(11,25,86,0.35)] md:h-48 md:w-48">
                  <Image src={marca.src} alt={marca.alt} fill sizes="192px" className="object-cover" />
                </div>
              </li>
            ))}
          </ul>

          {overflowing && (
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Siguiente"
              data-cursor="expand"
              className="absolute -right-1 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[var(--color-ink)]/30 bg-[var(--color-bg)] transition-colors hover:border-[var(--color-ink)] md:-right-5"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {overflowing && (
          <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
            {marcas.map((marca, i) => (
              <span
                key={marca.src}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "1.25rem" : "0.375rem",
                  background: i === index ? "var(--color-ink)" : "var(--color-line)",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
