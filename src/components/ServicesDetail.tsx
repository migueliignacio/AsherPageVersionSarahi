import Link from "next/link";
import { serviceDetails } from "@/data/services";

export default function ServicesDetail() {
  return (
    <section className="bg-[var(--color-surface)] px-6 py-24 md:px-10 md:py-32">
      <div className="flex flex-col gap-20 md:gap-28">
        {serviceDetails.map((service) => (
          <div key={service.index} data-reveal className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <span className="font-display text-6xl font-medium tracking-tight text-[var(--color-ink-soft)]/40 md:text-7xl">
                {service.index}
              </span>
              <h3 className="font-display mt-4 max-w-xs text-2xl font-medium uppercase tracking-tight md:text-3xl">
                {service.name}
              </h3>
            </div>

            <div className="md:col-span-5">
              <p className="max-w-md text-lg leading-relaxed text-[var(--color-ink)]/80 md:text-xl">
                {service.description}
              </p>
              <Link
                href="/contact"
                data-cursor="expand"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.08em] underline decoration-[var(--color-ink)]/30 underline-offset-4 transition-colors hover:decoration-[var(--color-ink)]"
              >
                Start a project <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="md:col-span-3">
              <p className="mb-3 text-xs uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">Capabilities</p>
              <ul className="flex flex-col gap-2">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="text-sm text-[var(--color-ink)]/80">
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
