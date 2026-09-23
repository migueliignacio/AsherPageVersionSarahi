"use client";

import Link from "next/link";
import { requestDiagnostico } from "@/lib/diagnostico-signal";

/**
 * Small by default so it never covers the page; grows on hover/focus to show
 * its message. Always points at the home page's diagnóstico section, and
 * asks Routes.tsx to open the quiz itself — not just scroll to the CTA that
 * starts it (see diagnostico-signal.ts).
 */
export default function ImpactBadge() {
  return (
    <Link
      href="/#diagnostico"
      onClick={requestDiagnostico}
      data-cursor="expand"
      aria-label="Hacer el diagnóstico de marca"
      className="group fixed bottom-4 right-4 z-40 grid h-11 w-11 place-items-center rounded-2xl transition-[width,height] duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:h-32 hover:w-32 focus-visible:h-32 focus-visible:w-32 md:bottom-6 md:right-6 md:h-12 md:w-12 md:hover:h-36 md:hover:w-36 md:focus-visible:h-36 md:focus-visible:w-36"
    >
      <span
        className="spin-slow absolute inset-0 rounded-2xl"
        style={{
          background:
            "conic-gradient(from 0deg, #520000, #8fb0e3, #0b1956, #c3d3ef, #7d1a1f, #8fb0e3, #520000)",
        }}
        aria-hidden="true"
      />
      <span className="absolute inset-[2px] rounded-[0.85rem] bg-[var(--color-bg)]" aria-hidden="true" />
      <span
        className="relative z-10 text-base transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0"
        aria-hidden="true"
      >
        ↘
      </span>
      <span className="absolute inset-0 z-10 grid place-items-center px-4 text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.06em] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span>
          Haz tu
          <br />
          diagnóstico
          <br />
          en 3 pasos
          <span className="mt-1 block text-base" aria-hidden="true">
            ↘
          </span>
        </span>
      </span>
    </Link>
  );
}
