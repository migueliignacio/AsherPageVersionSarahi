"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { routes, disciplines } from "@/data/asher";

// The site's real per-service logos + accent colors (from the /servicios
// pages), not the mismatched maroon/navy/photo-card mix the discipline
// data used to point at before.
const disciplineImages: Record<string, string> = {
  Estrategia: "/asher/logos/branding.png",
  Marca: "/asher/logos/marca.png",
  Digital: "/asher/logos/digital-web.png",
  Publicidad: "/asher/logos/marketing.png",
  Legal: "/asher/logos/legal.png",
};

const disciplineColors: Record<string, string> = {
  Estrategia: "#fb1b7c",
  Marca: "#aa7ef6",
  Digital: "#79b826",
  Publicidad: "#f1562c",
  Legal: "#84172e",
};

export default function Routes() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Wipes the headline open from the left as the section enters view.
  const clip = useTransform(scrollYProgress, [0.1, 0.85], [100, 0]);
  const clipPath = useTransform(clip, (v) => `inset(0 ${v}% 0 0)`);

  return (
    <section ref={ref} id="servicios" className="relative overflow-hidden px-5 py-28 md:px-10 md:py-40">
      {/* Faint three-column grid guides */}
      <div className="pointer-events-none absolute inset-0 mx-auto grid max-w-[1600px] grid-cols-3" aria-hidden="true">
        <div className="border-r border-[var(--color-line)]" />
        <div className="border-r border-[var(--color-line)]" />
        <div />
      </div>

      <p data-reveal className="relative z-20 mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
        02 — Lo que hacemos
      </p>

      <div className="relative mx-auto mb-24 max-w-[1400px] md:mb-32">
        {/* Discipline pills scattered behind the headline. */}
        {disciplines.map((d, i) => {
          const imageSrc = disciplineImages[d.title];
          const color = disciplineColors[d.title];
          return (
            <div
              key={d.title}
              aria-hidden="true"
              className={`group absolute z-0 block h-14 w-14 overflow-hidden rounded-full p-3 transition-transform duration-500 hover:scale-110 sm:h-20 sm:w-20 sm:p-4 md:h-32 md:w-32 md:p-6 ${
                [
                  "left-[4%] top-[18%] -rotate-[7deg]",
                  "left-[20%] bottom-[6%] rotate-[5deg]",
                  "right-[8%] bottom-[2%] -rotate-[4deg]",
                  "right-[14%] top-[10%] rotate-[8deg]",
                  "left-[42%] top-[2%] rotate-[3deg]",
                ][i]
              }`}
              style={{ background: `color-mix(in srgb, ${color} 14%, var(--color-bg))` }}
            >
              {imageSrc && (
                <div className="relative h-full w-full">
                  <Image
                    src={imageSrc}
                    alt={d.title}
                    fill
                    sizes="(min-width: 768px) 128px, (min-width: 640px) 80px, 56px"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          );
        })}

        <motion.h2
          style={{ clipPath }}
          className="font-display relative z-10 text-center font-medium uppercase leading-[0.85] tracking-[-0.03em] mix-blend-multiply"
        >
          <span className="block" style={{ fontSize: "clamp(2.6rem, 12vw, 11rem)" }}>
            Cinco rutas
            <br />
            claras
          </span>
        </motion.h2>
      </div>

      <div className="relative z-10 border-t border-[var(--color-line)]">
        {routes.map((route) => (
          <Link
            key={route.index}
            href="/contacto"
            data-reveal
            data-cursor="view"
            className="group relative flex items-center justify-between gap-6 overflow-hidden border-b border-[var(--color-line)] py-8 md:py-10"
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0"
              style={{ background: route.accent }}
              aria-hidden="true"
            />

            <span className="relative z-10 flex items-baseline gap-5 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-4 md:gap-10">
              <span className="text-xs text-[var(--color-ink-soft)] transition-colors duration-500 group-hover:text-[var(--color-bg)]/70">
                {route.index}
              </span>
              <span className="font-display text-2xl font-medium tracking-tight transition-colors duration-500 group-hover:text-[var(--color-bg)] md:text-5xl">
                {route.title}
              </span>
            </span>

            <span className="relative z-10 hidden max-w-xs text-sm text-[var(--color-ink-soft)] transition-colors duration-500 group-hover:text-[var(--color-bg)] md:block">
              {route.description}
            </span>

            <span className="relative z-10 text-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--color-bg)]" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>

      <div
        id="diagnostico"
        data-reveal
        className="relative z-10 mt-16 flex flex-col items-start gap-5 rounded-3xl bg-[var(--color-ink)] px-8 py-12 text-[var(--color-bg)] md:flex-row md:items-center md:justify-between md:px-12"
      >
        <div>
          <h3 className="font-display text-2xl font-medium tracking-tight md:text-4xl">Diagnóstico</h3>
          <p className="mt-2 max-w-md text-sm text-[var(--color-bg)]/70">
            3 preguntas para saber exactamente qué necesitas primero.
          </p>
        </div>
        <Link
          href="/contacto"
          data-cursor="expand"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--color-bg)] px-7 py-4 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-ink)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Empezar diagnóstico <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
