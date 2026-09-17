"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLeadModal } from "@/components/LeadModalProvider";

export interface CatalogItem {
  id: string;
  title: string;
  description: string;
  price: number;
}

export interface ServiceCatalogProps {
  eyebrow: string;
  title: string;
  items: CatalogItem[];
  accent: string;
  /** Passed to the lead modal so the source of the request is traceable. */
  origin: string;
  className?: string;
}

const currency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

/**
 * No-image services catalog with an add-to-cart sidebar: click a row to
 * add/remove it, click the chevron for its description, cart keeps a
 * running total. Same interaction model as CustomPlan's "Arma tu propio
 * pack", scoped to one service area and tinted with its own accent color.
 */
export function ServiceCatalog({ eyebrow, title, items, accent, origin, className }: ServiceCatalogProps) {
  const { openModal } = useLeadModal();
  const [selected, setSelected] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string[]>([]);

  const selectedItems = useMemo(
    () => items.filter((item) => selected.includes(item.id)),
    [items, selected]
  );

  const total = useMemo(
    () => selectedItems.reduce((sum, item) => sum + item.price, 0),
    [selectedItems]
  );

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const remove = (id: string) => {
    setSelected((prev) => prev.filter((x) => x !== id));
  };

  return (
    <section
      className={cn("border-t border-[var(--color-line)] px-5 py-20 md:px-10 md:py-28", className)}
      style={{ "--catalog-accent": accent } as React.CSSProperties}
    >
      <p className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
        {eyebrow}
      </p>
      <h2 className="font-display mb-12 max-w-2xl text-balance text-3xl font-medium leading-[1.05] tracking-tight md:mb-16 md:text-5xl">
        {title}
      </h2>

      <div className="grid gap-10 md:grid-cols-3 md:gap-16">
        <div className="grid gap-2 sm:grid-cols-2 md:col-span-2">
          {items.map((item) => {
            const isSelected = selected.includes(item.id);
            const isExpanded = expanded.includes(item.id);
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border transition-colors duration-300"
                style={{
                  borderColor: isSelected ? accent : "var(--color-line)",
                  background: isSelected ? accent : "var(--color-bg)",
                  color: isSelected ? "var(--color-bg)" : "var(--color-ink)",
                }}
              >
                <div className="flex items-center gap-1 px-2">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    data-cursor="expand"
                    className={cn(
                      "flex min-w-0 flex-1 items-center justify-between gap-3 py-3 pl-2 text-left",
                      !isSelected && "hover:opacity-70"
                    )}
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="grid h-4 w-4 shrink-0 place-items-center rounded-full border text-[0.55rem]"
                        style={{
                          borderColor: isSelected ? "var(--color-bg)" : "var(--color-line)",
                          background: isSelected ? "var(--color-bg)" : "transparent",
                          color: isSelected ? accent : "transparent",
                        }}
                      >
                        ✓
                      </span>
                      <span className="truncate text-xs font-medium">{item.title}</span>
                    </span>
                    <span
                      className="shrink-0 text-xs font-medium uppercase tracking-[0.04em]"
                      style={{ opacity: isSelected ? 0.9 : 1, color: isSelected ? "var(--color-bg)" : "var(--color-ink-soft)" }}
                    >
                      {currency.format(item.price)}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleExpanded(item.id)}
                    aria-label={isExpanded ? "Ocultar descripción" : "Ver descripción"}
                    aria-expanded={isExpanded}
                    data-cursor="expand"
                    className={cn(
                      "grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[0.6rem] transition-transform duration-300",
                      isExpanded && "rotate-180"
                    )}
                    style={{
                      borderColor: isSelected ? "color-mix(in srgb, var(--color-bg) 50%, transparent)" : "var(--color-line)",
                      color: isSelected ? "var(--color-bg)" : "var(--color-ink-soft)",
                    }}
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
                        className="px-4 pb-3 text-xs leading-relaxed"
                        style={{ opacity: isSelected ? 0.75 : 1, color: isSelected ? "var(--color-bg)" : "var(--color-ink-soft)" }}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)] p-6">
            <h3 className="font-display text-base font-medium tracking-tight">Tu selección</h3>

            {selectedItems.length === 0 ? (
              <p className="mt-3 text-xs text-[var(--color-ink-soft)]">
                Elige los adicionales que quieres sumar a tu plan.
              </p>
            ) : (
              <ul className="mt-4 max-h-64 space-y-2 overflow-y-auto border-t border-[var(--color-line)] pt-4 text-xs">
                <AnimatePresence initial={false}>
                  {selectedItems.map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center justify-between gap-2 overflow-hidden"
                    >
                      <span className="truncate text-[var(--color-ink-soft)]">{item.title}</span>
                      <span className="flex shrink-0 items-center gap-2">
                        <span className="font-medium">{currency.format(item.price)}</span>
                        <button
                          type="button"
                          onClick={() => remove(item.id)}
                          aria-label={`Quitar ${item.title}`}
                          data-cursor="expand"
                          className="grid h-4 w-4 place-items-center rounded-full text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
                        >
                          ×
                        </button>
                      </span>
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

            <button
              type="button"
              disabled={selectedItems.length === 0}
              onClick={() => openModal(origin)}
              data-cursor="expand"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-medium uppercase tracking-[0.1em] transition-transform duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:bg-[var(--color-line)] disabled:text-[var(--color-ink-soft)]"
              style={selectedItems.length > 0 ? { background: accent, color: "var(--color-bg)" } : undefined}
            >
              Solicitar estos servicios <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
