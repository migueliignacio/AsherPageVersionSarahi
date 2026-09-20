"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { currency } from "@/lib/currency";
import { useCart } from "./CartProvider";

export interface CatalogGridItem {
  id: string;
  title: string;
  description: string;
  price: number;
}

/**
 * The one catalog row list used by every /servicios page and by "Arma tu
 * propio pack": click a row to add/remove it from the shared cart, click
 * the chevron for its description.
 */
export function CatalogGrid({ items, accent, onAccent = "var(--color-bg)" }: { items: CatalogGridItem[]; accent: string; onAccent?: string }) {
  const { has, toggle } = useCart();
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => {
        const isSelected = has(item.id);
        const isExpanded = expanded.includes(item.id);
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border transition-colors duration-300"
            style={{
              borderColor: isSelected ? accent : "var(--color-line)",
              background: isSelected ? accent : "var(--color-bg)",
              color: isSelected ? onAccent : "var(--color-ink)",
            }}
          >
            <div className="flex items-center gap-1 px-2">
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-pressed={isSelected}
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
                      borderColor: isSelected ? onAccent : "var(--color-line)",
                      background: isSelected ? onAccent : "transparent",
                      color: isSelected ? accent : "transparent",
                    }}
                  >
                    ✓
                  </span>
                  <span className="truncate text-xs font-medium">{item.title}</span>
                </span>
                <span
                  className="shrink-0 text-xs font-medium uppercase tracking-[0.04em]"
                  style={{ color: isSelected ? onAccent : "var(--color-ink-soft)" }}
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
                  borderColor: isSelected ? `color-mix(in srgb, ${onAccent} 50%, transparent)` : "var(--color-line)",
                  color: isSelected ? onAccent : "var(--color-ink-soft)",
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
                    style={{ opacity: isSelected ? 0.75 : 1, color: isSelected ? onAccent : "var(--color-ink-soft)" }}
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
  );
}
