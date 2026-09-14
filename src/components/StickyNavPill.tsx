"use client";

import { motion } from "framer-motion";
import { useScrollSpy } from "@/lib/useScrollSpy";

const SECTIONS = [
  { id: "servicios", label: "Servicios" },
  { id: "proceso", label: "Proceso" },
  { id: "vision", label: "Visión" },
  { id: "planes", label: "Planes" },
  { id: "contacto", label: "Contacto" },
];

const IDS = SECTIONS.map((s) => s.id);

export default function StickyNavPill() {
  const active = useScrollSpy(IDS);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 md:bottom-8">
      <nav
        aria-label="Navegación de secciones"
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-[var(--color-ink)]/75 p-1.5 backdrop-blur-md"
      >
        {SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              data-cursor="expand"
              aria-current={isActive ? "true" : undefined}
              className="relative rounded-full px-3 py-2 text-[0.66rem] font-medium uppercase tracking-[0.1em] transition-colors duration-300 sm:px-4 sm:text-xs"
            >
              {/* Shared layoutId lets the pill slide between items instead of
                  cross-fading, which reads as one object tracking the scroll. */}
              {isActive && (
                <motion.span
                  layoutId="sticky-nav-pill"
                  className="absolute inset-0 rounded-full bg-[var(--color-bg)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  isActive ? "text-[var(--color-ink)]" : "text-[var(--color-bg)]/55"
                }`}
              >
                {section.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
