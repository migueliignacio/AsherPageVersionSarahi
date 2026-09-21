"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export interface MenuItem {
  num: string;
  /** One entry per line of the big title. */
  lines: string[];
  /** Which clip-path shape frames the picture. */
  clipId: "clip-original" | "clip-hexagons" | "clip-pixels";
  image: string;
  /** Section the item scrolls to when clicked. */
  href?: string;
}

const defaultItems: MenuItem[] = [
  { num: "01", lines: ["Historia"], clipId: "clip-original", image: "/asher/trabajos/mascota-asher/cover.png", href: "#historia" },
  { num: "02", lines: ["Misión, visión", "y valores"], clipId: "clip-hexagons", image: "/asher/trabajos/mascota-asher/action.png", href: "#mision" },
  { num: "03", lines: ["Proceso", "Asher"], clipId: "clip-pixels", image: "/asher/disciplinas/estrategia-maroon.png", href: "#proceso" },
];

/**
 * Hero with a big hover menu on the left and a picture on the right that is cut by an
 * animated SVG mask (a different shape per item) which grows in, breathes and shrinks out.
 */
export const Component = ({
  items = defaultItems,
  eyebrow,
  className,
}: {
  items?: MenuItem[];
  eyebrow?: string;
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);
  const reduced = useRef(false);

  const createLoop = (index: number) => {
    const item = items[index];
    const selector = `#${item.clipId} .path`;

    masterTl.current?.kill();

    imageRef.current?.setAttribute("href", item.image);
    mainGroupRef.current?.setAttribute("clip-path", `url(#${item.clipId})`);

    if (reduced.current) {
      gsap.set(selector, { scale: 1, transformOrigin: "50% 50%" });
      return;
    }
    gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(selector, {
      scale: 1,
      duration: 0.8,
      stagger: { amount: 0.4, from: "random" },
      ease: "expo.out",
    })
      .to(selector, {
        scale: 1.05,
        duration: 1.5,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
        stagger: { amount: 0.2, from: "center" },
      })
      .to(selector, {
        scale: 0,
        duration: 0.6,
        stagger: { amount: 0.3, from: "edges" },
        ease: "expo.in",
      });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      createLoop(0);
    }, containerRef);
    return () => {
      masterTl.current?.kill();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activate = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    createLoop(index);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden px-6 pb-16 pt-28 md:flex-row md:px-16 md:pb-24 md:pt-32 lg:px-24",
        className
      )}
    >
      {/* Left: the menu */}
      <div className="z-20 w-full md:w-1/2">
        {eyebrow && (
          <p className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)] md:mb-14">{eyebrow}</p>
        )}
        <nav aria-label={eyebrow}>
          <ul className="flex flex-col gap-10 md:gap-14">
            {items.map((item, index) => (
              <li key={item.num}>
                <a
                  href={item.href ?? "#"}
                  onMouseEnter={() => activate(index)}
                  onFocus={() => activate(index)}
                  onTouchStart={() => activate(index)}
                  data-cursor="expand"
                  className="group flex cursor-pointer items-start gap-5 md:gap-6"
                >
                  <span
                    className={cn(
                      "mt-1 text-2xl font-bold transition-all duration-500 md:mt-2 md:text-3xl",
                      activeIndex === index ? "scale-110 text-[#520000]" : "text-[var(--color-ink)]/30"
                    )}
                  >
                    {item.num}
                  </span>
                  <h2
                    className={cn(
                      "font-display text-4xl font-bold uppercase leading-[0.9] tracking-tighter transition-all duration-700 md:text-6xl",
                      activeIndex === index
                        ? "translate-x-4 text-[var(--color-navy)] opacity-100"
                        : "translate-x-0 text-[var(--color-ink)] opacity-35"
                    )}
                  >
                    {item.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Right: the masked picture */}
      <div className="relative mt-14 flex w-full items-center justify-center md:mt-0 md:w-1/2">
        <div className="absolute h-[120%] w-[120%] rounded-full bg-[#8fb0e3]/25 blur-[120px]" />

        <svg viewBox="0 0 500 500" className="z-10 h-auto w-full max-w-[500px] drop-shadow-xl" role="img" aria-label="Imagen ilustrativa">
          <defs>
            <clipPath id="clip-original">
              {Array.from({ length: 5 }).map((_, i) => (
                <rect key={i} className="path" x={20 + i * 100} y="20" width="80" height="460" rx="40" />
              ))}
            </clipPath>

            <clipPath id="clip-hexagons">
              <rect className="path" x="20" y="20" width="200" height="280" rx="12" />
              <rect className="path" x="20" y="320" width="200" height="160" rx="12" />
              <rect className="path" x="240" y="20" width="240" height="140" rx="12" />
              <rect className="path" x="240" y="180" width="110" height="160" rx="12" />
              <rect className="path" x="370" y="180" width="110" height="160" rx="12" />
              <rect className="path" x="240" y="360" width="240" height="120" rx="12" />
            </clipPath>

            <clipPath id="clip-pixels">
              {Array.from({ length: 9 }).map((_, i) => (
                <rect
                  key={i}
                  className="path"
                  x={(i % 3) * 160 + 20}
                  y={Math.floor(i / 3) * 160 + 20}
                  width="140"
                  height="140"
                  rx="4"
                />
              ))}
            </clipPath>
          </defs>

          <g ref={mainGroupRef} clipPath={`url(#${items[0].clipId})`}>
            <image ref={imageRef} href={items[0].image} width="500" height="500" preserveAspectRatio="xMidYMid slice" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Component;
