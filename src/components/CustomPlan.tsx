"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { customServices, type CustomService } from "@/data/asher";

const categories = ["Estrategia", "Marca", "Digital", "Publicidad", "Legal"] as const;

const currency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

export default function CustomPlan() {
  const [selected, setSelected] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string[]>([]);

  const selectedServices = useMemo(
    () => customServices.filter((s) => selected.includes(s.id)),
    [selected]
  );

  const total = useMemo(
    () => selectedServices.reduce((sum, s) => sum + s.price, 0),
    [selectedServices]
  );

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleExpanded = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

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
        className="font-display mb-16 max-w-3xl text-balance text-4xl font-medium leading-[0.95] tracking-tight md:mb-24 md:text-7xl"
      >
        Arma tu propio pack
      </h2>

      <div className="grid gap-10 md:grid-cols-3 md:gap-16">
        <div className="space-y-8 md:col-span-2">
          {categories.map((category) => {
            const items = customServices.filter((s) => s.category === category);
            return (
              <div key={category} data-reveal>
                <h3 className="font-display mb-3 text-sm font-medium uppercase tracking-tight md:text-base">
                  {category}
                </h3>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((service) => {
                    const isSelected = selected.includes(service.id);
                    const isExpanded = expanded.includes(service.id);
                    return (
                      <div
                        key={service.id}
                        className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                          isSelected
                            ? "border-[var(--color-violet)] bg-[var(--color-violet)] text-[var(--color-bg)]"
                            : "border-[var(--color-line)] bg-[var(--color-bg)]"
                        }`}
                      >
                        <div className="flex items-center gap-1 px-2">
                          <button
                            type="button"
                            onClick={() => toggle(service.id)}
                            data-cursor="expand"
                            className={`flex min-w-0 flex-1 items-center justify-between gap-3 py-3 pl-2 text-left ${
                              !isSelected && "hover:opacity-70"
                            }`}
                          >
                            <span className="flex items-center gap-2 min-w-0">
                              <span
                                aria-hidden="true"
                                className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border text-[0.55rem] ${
                                  isSelected
                                    ? "border-[var(--color-bg)] bg-[var(--color-bg)] text-[var(--color-violet)]"
                                    : "border-[var(--color-line)] text-transparent"
                                }`}
                              >
                                ✓
                              </span>
                              <span className="truncate text-xs font-medium">{service.title}</span>
                            </span>
                            <span
                              className={`shrink-0 text-xs font-medium uppercase tracking-[0.04em] ${
                                isSelected ? "text-[var(--color-bg)]/90" : "text-[var(--color-ink-soft)]"
                              }`}
                            >
                              {currency.format(service.price)}
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={() => toggleExpanded(service.id)}
                            aria-label={isExpanded ? "Ocultar descripción" : "Ver descripción"}
                            aria-expanded={isExpanded}
                            data-cursor="expand"
                            className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[0.6rem] transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            } ${
                              isSelected
                                ? "border-[var(--color-bg)]/50 text-[var(--color-bg)]"
                                : "border-[var(--color-line)] text-[var(--color-ink-soft)]"
                            }`}
                          >
                            ⌄
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <p
                                className={`px-4 pb-3 text-xs leading-relaxed ${
                                  isSelected ? "text-[var(--color-bg)]/75" : "text-[var(--color-ink-soft)]"
                                }`}
                              >
                                {service.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div data-reveal className="md:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)] p-6">
            <h3 className="font-display text-base font-medium tracking-tight">Tu pack</h3>

            {selectedServices.length === 0 ? (
              <p className="mt-3 text-xs text-[var(--color-ink-soft)]">
                Selecciona los servicios que necesitas para armar tu propuesta.
              </p>
            ) : (
              <ul className="mt-4 max-h-64 space-y-2 overflow-y-auto border-t border-[var(--color-line)] pt-4 text-xs">
                <AnimatePresence initial={false}>
                  {selectedServices.map((service: CustomService) => (
                    <motion.li
                      key={service.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center justify-between gap-3 overflow-hidden"
                    >
                      <span className="truncate text-[var(--color-ink-soft)]">{service.title}</span>
                      <span className="shrink-0 font-medium">{currency.format(service.price)}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}

            <div className="mt-4 flex items-baseline justify-between border-t border-[var(--color-line)] pt-4">
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                Total
              </span>
              <motion.span
                key={total}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="font-display text-xl font-medium tracking-tight"
              >
                {currency.format(total)}
              </motion.span>
            </div>

            <a
              href="#contacto"
              data-cursor="expand"
              className={`mt-6 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-medium uppercase tracking-[0.1em] transition-transform duration-300 hover:-translate-y-0.5 ${
                selectedServices.length === 0
                  ? "pointer-events-none bg-[var(--color-line)] text-[var(--color-ink-soft)]"
                  : "bg-[var(--color-ink)] text-[var(--color-bg)]"
              }`}
            >
              Solicitar este pack <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
