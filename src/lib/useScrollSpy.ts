"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently "active".
 *
 * IntersectionObserver alone is ambiguous when several sections straddle the
 * viewport, so instead of trusting isIntersecting we keep every entry and pick
 * the one whose box is closest to a reading line ~38% down the viewport.
 */
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    let raf = 0;
    const measure = () => {
      raf = 0;
      const line = window.innerHeight * 0.38;
      let best: string | null = null;
      let bestDistance = Infinity;

      for (const section of sections) {
        const { top, bottom } = section.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) continue;
        // Distance from the reading line to the section's visible span.
        const distance = top > line ? top - line : bottom < line ? line - bottom : 0;
        if (distance < bestDistance) {
          bestDistance = distance;
          best = section.id;
        }
      }

      if (best) setActive(best);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ids]);

  return active;
}
