"use client";

import { useEffect, useRef } from "react";
import { insights } from "@/data/insights";

export default function Insights() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      track.classList.add("cursor-grabbing");
      startX = e.pageX;
      scrollStart = track.scrollLeft;
    };
    const onUp = () => {
      isDown = false;
      track.classList.remove("cursor-grabbing");
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const dx = e.pageX - startX;
      track.scrollLeft = scrollStart - dx * 1.3;
    };

    track.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMove);

    return () => {
      track.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section id="insights" className="py-24 md:py-32">
      <div className="mb-12 flex items-end justify-between px-6 md:mb-16 md:px-10">
        <h2 data-reveal className="font-display text-3xl font-medium uppercase tracking-tight md:text-5xl">
          Insights
        </h2>
        <span className="hidden text-xs uppercase tracking-[0.1em] text-[var(--color-ink-soft)] md:inline">
          Drag to explore →
        </span>
      </div>

      <div
        ref={trackRef}
        data-cursor="drag"
        className="no-scrollbar flex flex-col gap-10 px-6 md:cursor-grab md:flex-row md:gap-6 md:overflow-x-auto md:px-10"
      >
        {insights.map((post) => (
          <article key={post.title} data-reveal className="group md:w-[340px] md:flex-none">
            <div
              className="aspect-[4/3] overflow-hidden rounded-md transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.02]"
              style={{ background: `linear-gradient(150deg, ${post.accent}, #12121018)` }}
            />
            <div className="mt-4">
              <span className="text-xs uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">{post.category}</span>
              <h3 className="font-display mt-2 text-lg font-medium leading-snug tracking-tight">{post.title}</h3>
              <p className="mt-3 text-xs text-[var(--color-ink-soft)]">
                {post.author} — {post.date}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
