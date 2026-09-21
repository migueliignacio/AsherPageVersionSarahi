import type { Metadata } from "next";
import Link from "next/link";
import { PerspectiveMarquee } from "@/components/ui/perspective-marquee";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import { serviceAddons, serviceOrder } from "@/data/service-addons";

export const metadata: Metadata = {
  title: "Servicios — ASHER",
  description: "Branding, Digital Web, Legal y Marketing: cuatro servicios, un mismo equipo.",
};

const marqueeItems = serviceOrder.map((slug) => serviceAddons[slug].label.toUpperCase());

interface ServicePanel {
  headline: string;
  tagline: string;
  /** Panel background. */
  background: string;
  /** Text colour on that background. */
  ink: string;
  /** Text colour for the secondary lines. */
  soft: string;
}

// One colour per service: branding pink, digital web green, legal red, marketing tomato.
const panels: Record<string, ServicePanel> = {
  branding: {
    headline: "Lo que eres, hecho visible.",
    tagline: "Identidad visual y verbal para marcas con propósito.",
    background: "#f8c6d4",
    ink: "#0b1956",
    soft: "#2a3670",
  },
  "digital-web": {
    headline: "Presencia digital que trabaja por tu marca.",
    tagline: "Sitios y soluciones digitales que conectan y convierten.",
    background: "#b9ef7a",
    ink: "#0b1956",
    soft: "#2a3670",
  },
  legal: {
    headline: "Tu negocio y tu marca, protegidos.",
    tagline: "Derecho de empresas y derecho de marcas: constitución, contratos, registro y protección.",
    background: "#b3202a",
    ink: "#ffffff",
    soft: "rgba(255,255,255,0.85)",
  },
  marketing: {
    headline: "Estrategia que se convierte en movimiento.",
    tagline: "Planes, contenido y campañas que generan resultados.",
    background: "#ee5a2b",
    ink: "#ffffff",
    soft: "rgba(255,255,255,0.9)",
  },
};

export default function ServiciosPage() {
  return (
    <div className="palette-asher">
      <section className="px-5 pb-8 pt-16 md:px-10 md:pt-24">
        <TextBlockAnimation blockColor="#8fb0e3" duration={0.5} animateOnScroll={false} className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">Servicios</p>
        </TextBlockAnimation>
        <TextBlockAnimation blockColor="#0b1956" animateOnScroll={false} delay={0.1}>
          <h1 className="font-display max-w-4xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:text-7xl">
            Cuatro servicios. Un mismo equipo.
          </h1>
        </TextBlockAnimation>
        <TextBlockAnimation blockColor="#520000" duration={0.5} animateOnScroll={false} delay={0.3} className="mt-8">
          <p className="max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
            Elige por dónde empezar. Cada servicio tiene su propia página, con un catálogo de adicionales que
            puedes sumar a tu carrito o a un plan.
          </p>
        </TextBlockAnimation>
      </section>

      <div className="relative h-[55vh] min-h-[340px] w-full md:h-[65vh]">
        <PerspectiveMarquee
          items={marqueeItems}
          fontSize={110}
          color="var(--color-navy)"
          fadeColor="var(--color-bg)"
          background="var(--color-bg)"
          pixelsPerFrame={2}
        />
      </div>

      <section className="border-t border-[var(--color-line)] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {serviceOrder.map((slug, i) => {
            const service = serviceAddons[slug];
            const panel = panels[slug];
            return (
              <Link
                key={slug}
                href={`/servicios/${slug}`}
                data-cursor="view"
                className="group relative flex min-h-[420px] flex-col justify-between gap-10 overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1 md:min-h-[480px] md:p-10"
                style={{ background: panel.background, color: panel.ink }}
              >
                <div className="max-w-[26rem]">
                  <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: panel.soft }}>
                    0{i + 1} — {service.label}
                  </p>
                  <h2 className="font-display text-balance text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">
                    {panel.headline}
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed md:text-base" style={{ color: panel.soft }}>
                    {panel.tagline}
                  </p>
                </div>

                <span className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-navy)] shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                  Conocer el servicio <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 rounded-3xl bg-[var(--color-navy)] p-7 text-[var(--color-bg)] md:mt-5 md:p-9">
          <TextBlockAnimation blockColor="#8fb0e3">
            <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">¿No sabes por dónde empezar?</h2>
          </TextBlockAnimation>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/planes"
              data-cursor="expand"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg)] px-5 py-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-navy)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Ver planes <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contacto"
              data-cursor="expand"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-bg)]/40 px-5 py-3 text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-300 hover:bg-[var(--color-bg)] hover:text-[var(--color-navy)]"
            >
              Hablemos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
