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

interface CursorPosition {
  left: number;
  width: number;
  opacity: number;
}

export function SlideTabs({ tabs, activeHref, renderLink, className }: SlideTabsProps) {
  const [position, setPosition] = useState<CursorPosition>({ left: 0, width: 0, opacity: 0 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);
  const rootRef = useRef<HTMLUListElement>(null);

  const resetToActive = () => {
    const idx = tabs.findIndex((t) => t.href === activeHref);
    const el = idx >= 0 ? tabsRef.current[idx] : null;
    if (el) {
      setPosition({ left: el.offsetLeft, width: el.getBoundingClientRect().width, opacity: 1 });
    } else {
      setPosition((p) => ({ ...p, opacity: 0 }));
    }
  };

  useEffect(() => {
    resetToActive();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeHref, tabs.length]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpenIndex(null);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <ul
      ref={rootRef}
      onMouseLeave={resetToActive}
      className={`relative mx-auto flex w-fit items-center rounded-full border border-[var(--color-ink)] bg-[var(--color-bg)] p-1 ${className ?? ""}`}
    >
      {tabs.map((tab, i) => {
        const isOpen = openIndex === i;
        const hasChildren = !!tab.children?.length;

        return (
          <li
            key={tab.label}
            ref={(el) => {
              tabsRef.current[i] = el;
            }}
            className="relative"
            onMouseEnter={() => {
              const el = tabsRef.current[i];
              if (el) setPosition({ left: el.offsetLeft, width: el.getBoundingClientRect().width, opacity: 1 });
            }}
          >
            {hasChildren ? (
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                data-cursor="expand"
                className="relative z-10 flex items-center gap-1 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-bg)] mix-blend-difference md:px-5 md:py-3 md:text-sm"
              >
                {tab.label}
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>
            ) : (
              renderLink(
                { href: tab.href!, label: tab.label },
                {
                  className:
                    "relative z-10 block px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-bg)] mix-blend-difference md:px-5 md:py-3 md:text-sm",
                  onClick: () => setOpenIndex(null),
                },
                tab.label
              )
            )}

            {hasChildren && (
              <AnimatePresence>
                {isOpen && (
                  <div className="absolute left-1/2 top-full z-20 mt-3 w-max max-w-[90vw] -translate-x-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)] p-4 shadow-xl"
                    >
                      <ul className="space-y-1">
                        {tab.children!.map((child) => (
                          <li key={child.label}>
                            {renderLink(
                              { href: child.href, label: child.label },
                              {
                                className:
                                  "block rounded-lg px-3 py-2 text-sm text-[var(--color-ink)] transition-colors duration-200 hover:bg-[var(--color-surface)]",
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

      <Cursor position={position} />
    </ul>
  );
}

function Cursor({ position }: { position: CursorPosition }) {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-7 rounded-full bg-[var(--color-ink)] md:h-11"
    />
  );
}
