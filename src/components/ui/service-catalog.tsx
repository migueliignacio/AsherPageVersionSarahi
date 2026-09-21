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
  /** Anchor id, for services with several areas on one page. */
  id?: string;
  description?: string;
  highlights?: string[];
  className?: string;
}

/** One service area's add-ons, wired to the site-wide cart. */
export function ServiceCatalog({
  eyebrow,
  title,
  items,
  accent,
  onAccent,
  id,
  description,
  highlights,
  className,
}: ServiceCatalogProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-40 border-t border-[var(--color-line)] px-5 py-20 md:px-10 md:py-28", className)}
    >
      <p className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">{eyebrow}</p>
      <h2 className="font-display mb-6 max-w-2xl text-balance text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mb-8 max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)] md:text-base">{description}</p>
      )}
      {highlights && highlights.length > 0 && (
        <ul className="mb-12 flex flex-wrap gap-x-8 gap-y-3 text-sm md:mb-16">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: accent }} aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
      )}
      {!highlights?.length && <div className="mb-6 md:mb-10" />}

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
