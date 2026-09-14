"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span className="h-px w-6 bg-[var(--color-ink)]" />
        <span className="h-px w-6 bg-[var(--color-ink)]" />
      </button>

      <div
        className="fixed inset-0 z-40 bg-[var(--color-ink)] text-[var(--color-bg)] transition-[clip-path] duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
        style={{
          clipPath: open ? "circle(150% at 90% 5%)" : "circle(0% at 90% 5%)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center text-2xl"
        >
          ×
        </button>

        <nav className="flex h-full flex-col items-start justify-center gap-2 px-8">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display overflow-hidden text-5xl font-medium uppercase tracking-tight"
              style={{
                transform: open ? "translateY(0)" : "translateY(100%)",
                opacity: open ? 1 : 0,
                transition: `transform .6s cubic-bezier(.16,1,.3,1) ${i * 0.06 + 0.1}s, opacity .6s ease ${i * 0.06 + 0.1}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
