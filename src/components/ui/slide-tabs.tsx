"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface SlideTabChild {
  label: string;
  description?: string;
  href: string;
}

export interface SlideTabItem {
  label: string;
  href?: string;
  children?: SlideTabChild[];
}

export interface SlideTabsProps {
  tabs: SlideTabItem[];
  /** Highlights the tab whose href matches the current route. */
  activeHref?: string;
  renderLink: (
    target: { href: string; label: string },
    props: { className: string; onClick: () => void },
    children: React.ReactNode
  ) => React.ReactNode;
  className?: string;
}

export function SlideTabs({ tabs, activeHref, renderLink, className }: SlideTabsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const rootRef = useRef<HTMLUListElement>(null);

  // The tab under the cursor: the hovered one, else the current route's.
  // The cursor itself is a shared-layout element (layoutId), so it slides
  // between tabs and always fits whichever one it is in — no manual
  // measuring that could go stale when fonts/layout settle after mount.
  const litIndex = hoverIndex ?? tabs.findIndex((t) => t.href === activeHref);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpenIndex(null);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    // Desktop-only (the caller hides this below md and swaps in its own
    // mobile menu), so this never needs to fit a narrow viewport — no
    // overflow wrapper here, since overflow-x:auto also clips overflow-y,
    // which was hiding the dropdown panels entirely.
    <ul
      ref={rootRef}
      onMouseLeave={() => setHoverIndex(null)}
      className={`relative mx-auto flex w-fit flex-nowrap items-center ${className ?? ""}`}
    >
      {tabs.map((tab, i) => {
        const isOpen = openIndex === i;
        const hasChildren = !!tab.children?.length;
        const labelClass = `relative z-10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] transition-colors duration-200 md:px-5 md:py-3 md:text-sm ${
          litIndex === i ? "text-white" : "text-[var(--color-ink)]"
        }`;

        return (
          <li key={tab.label} className="relative" onMouseEnter={() => setHoverIndex(i)}>
            {litIndex === i && (
              <motion.span
                layoutId="slide-tabs-cursor"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                className="absolute inset-0 z-0 rounded-full bg-[var(--color-ink)]"
                aria-hidden="true"
              />
            )}

            {hasChildren ? (
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                data-cursor="expand"
                className={`flex items-center gap-1 ${labelClass}`}
              >
                {tab.label}
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>
            ) : (
              renderLink(
                { href: tab.href!, label: tab.label },
                {
                  className: `block ${labelClass}`,
                  onClick: () => setOpenIndex(null),
                },
                tab.label
              )
            )}

            {hasChildren && (
              <AnimatePresence>
                {isOpen && (
                  <div className="absolute left-1/2 top-full z-20 mt-4 w-max max-w-[90vw] -translate-x-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="rounded-2xl border border-[var(--color-line)] bg-white p-4 shadow-xl"
                    >
                      <ul className="space-y-1">
                        {tab.children!.map((child) => (
                          <li key={child.label}>
                            {renderLink(
                              { href: child.href, label: child.label },
                              {
                                className:
                                  "block rounded-lg px-3 py-2 text-sm text-[var(--color-ink)] transition-colors duration-200 hover:bg-[var(--color-ink)]/5",
                                onClick: () => setOpenIndex(null),
                              },
                              <>
                                <span className="font-medium">{child.label}</span>
                                {child.description && (
                                  <span className="block text-xs text-[var(--color-ink-soft)]">{child.description}</span>
                                )}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            )}
          </li>
        );
      })}
    </ul>
  );
}
