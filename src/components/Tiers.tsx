"use client";

import { tiers } from "@/data/asher";
import { useLeadModal } from "./LeadModalProvider";

export default function Tiers() {
  const { openModal } = useLeadModal();
  return (
    <section id="planes" className="border-t border-[var(--color-line)] px-5 py-28 md:px-10 md:py-40">
      <p data-reveal className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
        05 — Planes
      </p>

      <h2
        data-reveal
        className="font-display mb-16 max-w-3xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:mb-24 md:text-7xl"
      >
        Un nivel para cada etapa
      </h2>

      <div className="grid gap-6 md:grid-cols-3 md:gap-5">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            data-reveal
            className={`flex flex-col rounded-3xl p-8 md:p-10 ${
              tier.featured
                ? "bg-[var(--color-violet)] text-[var(--color-bg)]"
                : "border border-[var(--color-line)] bg-[var(--color-bg)]"
            }`}
          >
            {tier.featured && (
              <span className="mb-5 self-start rounded-full bg-[var(--color-bg)]/15 px-3 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.12em]">
                Más popular
              </span>
            )}

            <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
              {tier.name}
            </h3>
            <p
              className={`mt-3 text-sm leading-relaxed ${
                tier.featured ? "text-[var(--color-bg)]/70" : "text-[var(--color-ink-soft)]"
              }`}
            >
              {tier.audience}
            </p>

            <ul
              className={`mt-8 flex-1 space-y-3 border-t pt-8 text-sm leading-relaxed ${
                tier.featured
                  ? "border-[var(--color-bg)]/20 text-[var(--color-bg)]/85"
                  : "border-[var(--color-line)] text-[var(--color-ink-soft)]"
              }`}
            >
              {tier.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => openModal(`tier_${tier.name}`)}
              data-cursor="expand"
              className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-xs font-medium uppercase tracking-[0.1em] transition-transform duration-300 hover:-translate-y-0.5 ${
                tier.featured
                  ? "bg-[var(--color-bg)] text-[var(--color-violet)]"
                  : "bg-[var(--color-ink)] text-[var(--color-bg)]"
              }`}
            >
              Solicitar propuesta <span aria-hidden="true">→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
