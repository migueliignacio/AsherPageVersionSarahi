import type { Metadata } from "next";
import Link from "next/link";
import { PerspectiveMarquee } from "@/components/ui/perspective-marquee";
import { currency } from "@/lib/currency";
import { serviceAddons, serviceOrder } from "@/data/service-addons";

export const metadata: Metadata = {
  title: "Servicios — ASHER",
  description: "Branding, Digital Web, Legal y Marketing: cuatro servicios, un mismo equipo.",
};

const marqueeItems = serviceOrder.map((slug) => serviceAddons[slug].label.toUpperCase());

export default function ServiciosPage() {
  return (
    <div className="palette-asher">
      <section className="px-5 pb-8 pt-16 md:px-10 md:pt-24">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">Servicios</p>
        <h1 className="font-display max-w-4xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:text-7xl">
          Cuatro servicios. Un mismo equipo.
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
          Elige por dónde empezar. Cada servicio tiene su propia página, con un catálogo de adicionales que
          puedes sumar a tu carrito o a un plan.
        </p>
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

      <section className="border-t border-[var(--color-line)] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
          {serviceOrder.map((slug, i) => {
            const service = serviceAddons[slug];
            const from = Math.min(...service.items.map((item) => item.price));
            return (
              <Link
                key={slug}
                href={`/servicios/${slug}`}
                data-cursor="view"
                className="group relative flex flex-col gap-6 bg-[var(--color-bg)] p-7 transition-colors duration-300 hover:bg-[var(--color-surface)] md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--color-ink-soft)]">0{i + 1}</span>
                  <span className="h-3 w-3 rounded-full" style={{ background: service.accent }} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-medium uppercase tracking-tight md:text-3xl">
                    {service.label}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{service.blurb}</p>
                  {service.sections && (
                    <p className="mt-3 text-xs uppercase tracking-[0.14em]">
                      {service.sections.map((section) => section.label).join(" · ")}
                    </p>
                  )}
                </div>
                <p className="mt-auto text-xs text-[var(--color-ink-soft)]">
                  {service.items.length} adicionales desde {currency.format(from)}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em]">
                  Explorar <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            );
          })}

          <div className="flex flex-col justify-between gap-6 bg-[var(--color-navy)] p-7 text-[var(--color-bg)] sm:col-span-2 md:p-9">
            <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">¿No sabes por dónde empezar?</h2>
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
        </div>
      </section>
    </div>
  );
}
