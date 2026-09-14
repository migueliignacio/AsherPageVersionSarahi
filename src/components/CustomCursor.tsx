"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "view" | "expand" | "drag";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>("default");
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    setEnabled(isFine);
    if (!isFine) return;

    let ringX = 0,
      ringY = 0,
      mouseX = 0,
      mouseY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);

    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const cursorType = (el.dataset.cursor as CursorMode) || "expand";
      setMode(cursorType);
      setLabel(el.dataset.cursorLabel || "");
    };
    const onLeave = () => {
      setMode("default");
      setLabel("");
    };

    const attach = () => {
      const targets = document.querySelectorAll<HTMLElement>("[data-cursor]");
      targets.forEach((t) => {
        t.addEventListener("mouseenter", onEnter);
        t.addEventListener("mouseleave", onLeave);
      });
      return targets;
    };
    let targets = attach();

    const mutationObserver = new MutationObserver(() => {
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", onEnter);
        t.removeEventListener("mouseleave", onLeave);
      });
      targets = attach();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      mutationObserver.disconnect();
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", onEnter);
        t.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full border border-white text-center text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--color-ink)] mix-blend-difference transition-[width,height,background-color] duration-300 ease-out"
        style={{
          width:
            mode === "view"
              ? 84
              : mode === "expand"
                ? 56
                : mode === "drag"
                  ? 70
                  : 30,
          height:
            mode === "view"
              ? 84
              : mode === "expand"
                ? 56
                : mode === "drag"
                  ? 70
                  : 30,
          background: mode === "expand" ? "var(--color-ink)" : "transparent",
          opacity: mode === "expand" ? 0.1 : 1,
          willChange: "transform, width, height",
        }}
      >
        <span className="mix-blend-difference">
          {mode === "view"
            ? label || "VIEW →"
            : mode === "drag"
              ? label || "DRAG"
              : ""}
        </span>
      </div>
    </>
  );
}
