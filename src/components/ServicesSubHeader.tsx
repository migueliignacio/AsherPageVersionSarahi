"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceAddons, serviceOrder } from "@/data/service-addons";

/** Secondary bar under the main header, shared by the /servicios hub and every service page. */
export default function ServicesSubHeader() {
  const pathname = usePathname();

  const links = [
    { href: "/servicios", label: "Todos", accent: "var(--color-navy)", onAccent: "var(--color-bg)" },
    ...serviceOrder.map((slug) => ({
      href: `/servicios/${slug}`,
      label: serviceAddons[slug].label,
      accent: serviceAddons[slug].accent,
      onAccent: serviceAddons[slug].onAccent,
    })),
  ];

  const activeService = serviceOrder.map((slug) => serviceAddons[slug]).find((service) => pathname === `/servicios/${service.slug}`);

  return (
    <nav
      aria-label="Servicios"
      className="palette-asher sticky top-[3.75rem] z-40 mt-[3.75rem] border-y border-[var(--color-line)] bg-white/90 backdrop-blur md:top-16 md:mt-16"
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
                  color: active ? link.onAccent : "var(--color-ink)",
                }}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      {activeService?.sections && (
        <ul className="no-scrollbar flex items-center gap-4 overflow-x-auto border-t border-[var(--color-line)] px-5 py-2 md:justify-center md:gap-6 md:px-10">
          {activeService.sections.map((section) => (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                data-cursor="expand"
                className="inline-flex items-center gap-2 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em] underline-offset-4 hover:underline"
                style={{ color: section.accent }}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: section.accent }} aria-hidden="true" />
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
