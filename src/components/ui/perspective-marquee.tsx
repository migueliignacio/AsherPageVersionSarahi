"use client";

import { useEffect, useRef } from "react";

export interface PerspectiveMarqueeProps {
  items?: string[];
  /** Font size in px for a 1200px-wide stage; scales with the container. */
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  /** Pixels travelled per frame at 30fps (2 = 60px/s). */
  pixelsPerFrame?: number;
  rotateY?: number;
  rotateX?: number;
  perspective?: number;
  fadeColor?: string;
  background?: string;
  speed?: number;
  className?: string;
}

const FONT_FAMILY = "var(--font-display), 'Helvetica Neue', sans-serif";
const FPS = 30;

/**
 * Perspective marquee: a tilted, endlessly scrolling row of words that blur
 * and fade away from the center. Ported from the remotion version, driven by
 * a requestAnimationFrame clock instead of remotion's frame counter, so it
 * needs no extra dependency. It fills its (positioned) parent, and only runs
 * while on screen.
 */
export function PerspectiveMarquee({
  items = ["Uno", "Dos", "Tres"],
  fontSize = 84,
  color = "#fafafa",
  fontWeight = 700,
  pixelsPerFrame = 2,
  rotateY = -28,
  rotateX = 8,
  perspective = 1200,
  fadeColor = "#050505",
  background = "#050505",
  speed = 1,
  className,
}: PerspectiveMarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let setWidth = 1;
    let stageWidth = 1;
    let scale = 1;
    let frame = 0;
    let raf: number | null = null;
    let last = 0;
    let positions: { center: number }[] = [];

    const measure = () => {
      stageWidth = root.clientWidth || 1;
      scale = Math.min(1.3, Math.max(0.5, stageWidth / 1200));
      root.style.setProperty("--pm-font", `${fontSize * scale}px`);
      setWidth = Math.max(1, track.scrollWidth / 3);
      positions = spanRefs.current.map((el) => ({
        center: el ? el.offsetLeft + el.offsetWidth / 2 : 0,
      }));
    };

    const paint = () => {
      const offset = -((frame * pixelsPerFrame) % setWidth);
      track.style.transform = `translateX(${offset}px)`;
      const half = stageWidth / 2;
      spanRefs.current.forEach((el, i) => {
        if (!el) return;
        const norm = (positions[i].center + offset - half) / half;
        const distance = Math.min(1, Math.abs(norm));
        el.style.filter = `blur(${distance * 6 * scale}px)`;
        el.style.opacity = String(1 - distance * 0.4);
      });
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (last) frame += ((now - last) / 1000) * FPS * speed;
      last = now;
      paint();
    };

    const start = () => {
      if (raf !== null || reduced) return;
      last = 0;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (raf !== null) cancelAnimationFrame(raf);
      raf = null;
    };

    measure();
    paint();
    document.fonts?.ready.then(() => {
      measure();
      paint();
    });

    const resizeObserver = new ResizeObserver(() => {
      measure();
      paint();
    });
    resizeObserver.observe(root);

    const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    visibility.observe(root);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibility.disconnect();
    };
  }, [fontSize, pixelsPerFrame, speed, items]);

  const rendered = [...items, ...items, ...items];

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: `${perspective}px`,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div ref={trackRef} style={{ position: "relative", display: "flex", whiteSpace: "nowrap", willChange: "transform" }}>
          {rendered.map((item, i) => (
            <span
              key={i}
              ref={(el) => {
                spanRefs.current[i] = el;
              }}
              style={{
                display: "inline-block",
                fontFamily: FONT_FAMILY,
                fontSize: "var(--pm-font, 84px)",
                fontWeight,
                color,
                letterSpacing: "-0.03em",
                paddingRight: "0.9em",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(90deg, ${fadeColor} 0%, transparent 18%, transparent 82%, ${fadeColor} 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(180deg, ${fadeColor} 0%, transparent 25%, transparent 75%, ${fadeColor} 100%)`,
        }}
      />
    </div>
  );
}

export default PerspectiveMarquee;
