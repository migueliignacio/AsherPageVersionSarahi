"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface MenuItem {
  num: string;
  /** One entry per line of the big title. */
  lines: string[];
  /** Section the item scrolls to when clicked. */
  href?: string;
}

const defaultItems: MenuItem[] = [
  { num: "01", lines: ["Historia"], href: "#historia" },
  { num: "02", lines: ["Misión, visión", "y valores"], href: "#mision" },
  { num: "03", lines: ["Proceso", "Asher"], href: "#proceso" },
];

/**
 * Hero for Quiénes somos: a big centered menu, the active entry picked out
 * in navy. No side picture — just the three sections, large and legible.
 */
export const Component = ({
  items = defaultItems,
  eyebrow,
  className,
}: {
  items?: MenuItem[];
  eyebrow?: string;
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-28 md:py-32",
        className
      )}
    >
      <div className="w-full max-w-3xl">
        {eyebrow && (
          <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)] md:mb-16">
            {eyebrow}
          </p>
        )}
        <nav aria-label={eyebrow}>
          <ul className="flex flex-col items-center gap-10 md:gap-14">
            {items.map((item, index) => (
              <li key={item.num}>
                <a
                  href={item.href ?? "#"}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onTouchStart={() => setActiveIndex(index)}
                  data-cursor="expand"
                  className="group flex cursor-pointer items-start gap-5 md:gap-7"
                >
                  <span
                    className={cn(
                      "mt-2 text-2xl font-bold transition-all duration-500 md:mt-4 md:text-4xl",
                      activeIndex === index ? "scale-110 text-[#520000]" : "text-[var(--color-ink)]/30"
                    )}
                  >
                    {item.num}
                  </span>
                  <h2
                    className={cn(
                      "font-display text-center text-5xl font-bold uppercase leading-[0.9] tracking-tighter transition-all duration-700 sm:text-6xl md:text-7xl lg:text-8xl",
                      activeIndex === index
                        ? "translate-x-2 text-[var(--color-navy)] opacity-100"
                        : "translate-x-0 text-[var(--color-ink)] opacity-35"
                    )}
                  >
                    {item.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Component;
