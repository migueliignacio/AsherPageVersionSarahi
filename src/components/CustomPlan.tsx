"use client";

import { serviceAddons, serviceOrder } from "@/data/service-addons";
import { CatalogGrid } from "./CatalogGrid";
import CartSummary from "./CartSummary";

export default function CustomPlan() {
  return (
    <section
      id="plan-personalizado"
      className="border-t border-[var(--color-line)] px-5 py-28 md:px-10 md:py-40"
    >
      <p
        data-reveal
        className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]"
      >
        06 — Plan personalizado
      </p>

      <h2
        data-reveal
        className="font-display mb-6 max-w-3xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:text-7xl"
      >
        Arma tu propio pack
      </h2>
      <p data-reveal className="mb-16 max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)] md:mb-24">
        El mismo catálogo de cada servicio, en un solo lugar. Súmalo a un plan o elige solo lo que necesitas.
      </p>

      <div className="grid gap-10 md:grid-cols-3 md:gap-16">
        <div className="space-y-8 md:col-span-2">
          {serviceOrder.map((slug) => {
            const area = serviceAddons[slug];
            return (
              <div key={slug} data-reveal>
                <h3 className="font-display mb-3 text-sm font-medium uppercase tracking-tight md:text-base">
                  {area.label}
                </h3>
                <CatalogGrid items={area.items} accent={area.accent} onAccent={area.onAccent} />
              </div>
            );
          })}
        </div>

        <div data-reveal className="md:col-span-1">
          <CartSummary title="Tu pack" />
        </div>
      </div>
    </section>
  );
}
