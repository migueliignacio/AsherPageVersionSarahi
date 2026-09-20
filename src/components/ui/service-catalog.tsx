"use client";

import { cn } from "@/lib/utils";
import { CatalogGrid, type CatalogGridItem } from "@/components/CatalogGrid";
import CartSummary from "@/components/CartSummary";

export interface ServiceCatalogProps {
  eyebrow: string;
  title: string;
  items: CatalogGridItem[];
  accent: string;
  onAccent?: string;
  className?: string;
}

/** One service area's add-ons, wired to the site-wide cart. */
export function ServiceCatalog({ eyebrow, title, items, accent, onAccent, className }: ServiceCatalogProps) {
  return (
    <section className={cn("border-t border-[var(--color-line)] px-5 py-20 md:px-10 md:py-28", className)}>
      <p className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">{eyebrow}</p>
      <h2 className="font-display mb-12 max-w-2xl text-balance text-3xl font-medium leading-[1.05] tracking-tight md:mb-16 md:text-5xl">
        {title}
      </h2>

      <div className="grid gap-10 md:grid-cols-3 md:gap-16">
        <div className="md:col-span-2">
          <CatalogGrid items={items} accent={accent} onAccent={onAccent} />
        </div>
        <div className="md:col-span-1">
          <CartSummary />
        </div>
      </div>
    </section>
  );
}
