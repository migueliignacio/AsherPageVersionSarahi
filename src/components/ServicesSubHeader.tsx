"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceAddons, serviceOrder } from "@/data/service-addons";

/** Secondary bar under the main header, shared by the /servicios hub and every service page. */
export default function ServicesSubHeader() {
  const pathname = usePathname();

  const links = [
    { href: "/servicios", label: "Todos", accent: "var(--color-navy)" },
    ...serviceOrder.map((slug) => ({
      href: `/servicios/${slug}`,
      label: serviceAddons[slug].label,
      accent: serviceAddons[slug].accent,
    })),
  ];

  return (
    <nav
      aria-label="Servicios"
      className="palette-asher sticky top-20 z-40 mt-20 border-y border-[var(--color-line)] bg-[var(--color-bg)]/90 backdrop-blur md:top-[6.5rem] md:mt-[6.5rem]"
    >
      <ul className="no-scrollbar flex items-center gap-2 overflow-x-auto px-5 py-3 md:justify-center md:gap-3 md:px-10">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                data-cursor="expand"
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-300 hover:border-[var(--color-ink)]"
                style={{
                  borderColor: active ? link.accent : "var(--color-line)",
                  background: active ? link.accent : "transparent",
                  color: active ? "var(--color-bg)" : "var(--color-ink)",
                }}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
