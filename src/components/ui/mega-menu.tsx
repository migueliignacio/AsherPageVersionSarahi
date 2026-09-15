"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type MegaMenuSubItem = {
  label: string;
  description: string;
  icon: React.ElementType;
  href: string;
};

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: MegaMenuSubItem[];
  }[];
  href?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-0 ${className || ""}`}
        {...props}
      >
        {items.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            {navItem.subMenus ? (
              <button
                type="button"
                data-cursor="expand"
                className="relative flex cursor-pointer items-center justify-center gap-1 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-ink)]/60 transition-colors duration-300 hover:text-[var(--color-ink)] group"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span className="relative z-10">{navItem.label}</span>
                <ChevronDown
                  className={`relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 ${
                    openMenu === navItem.label ? "rotate-180" : ""
                  }`}
                />
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="mega-menu-hover-bg"
                    className="absolute inset-0 size-full rounded-full bg-[var(--color-ink)]/8"
                  />
                )}
              </button>
            ) : (
              <Link
                href={navItem.href ?? "#"}
                data-cursor="expand"
                className="relative flex cursor-pointer items-center justify-center gap-1 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-ink)]/60 transition-colors duration-300 hover:text-[var(--color-ink)] group"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span className="relative z-10">{navItem.label}</span>
                {isHover === navItem.id && (
                  <motion.div
                    layoutId="mega-menu-hover-bg"
                    className="absolute inset-0 size-full rounded-full bg-[var(--color-ink)]/8"
                  />
                )}
              </Link>
            )}

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-1/2 top-full w-auto -translate-x-1/2 pt-3 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="w-max rounded-2xl border border-[var(--color-bg)]/10 bg-[var(--color-ink)] p-4 shadow-xl"
                  >
                    <div className="flex w-fit shrink-0 space-x-9">
                      {navItem.subMenus.map((sub) => (
                        <div className="w-full" key={sub.title}>
                          <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-bg)]/45">
                            {sub.title}
                          </h3>
                          <ul className="space-y-5">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  {/* Plain anchor (not next/link): its built-in
                                      hash scroll would fight the Lenis-driven
                                      scroll this site uses everywhere else.
                                      SmoothScroll's click listener intercepts
                                      it and hands it to Lenis instead. */}
                                  <a
                                    href={item.href}
                                    data-cursor="expand"
                                    className="group flex items-start gap-3"
                                  >
                                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-[var(--color-bg)]/25 text-[var(--color-bg)] transition-colors duration-300 group-hover:bg-[var(--color-bg)] group-hover:text-[var(--color-ink)]">
                                      <Icon className="h-4 w-4 flex-none" />
                                    </div>
                                    <div className="w-max leading-5">
                                      <p className="shrink-0 text-sm font-medium text-[var(--color-bg)]">
                                        {item.label}
                                      </p>
                                      <p className="shrink-0 text-xs text-[var(--color-bg)]/50 transition-colors duration-300 group-hover:text-[var(--color-bg)]/75">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
