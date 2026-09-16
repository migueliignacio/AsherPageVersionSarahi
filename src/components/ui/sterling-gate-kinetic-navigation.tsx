"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

export interface KineticNavChild {
  label: string;
  description?: string;
  href: string;
}

export interface KineticNavItem {
  label: string;
  href?: string;
  children?: KineticNavChild[];
}

export interface SterlingGateKineticNavigationProps {
  /** Rendered inside the always-visible, transparent header — usually a logo. */
  logo: React.ReactNode;
  logoHref?: string;
  items: KineticNavItem[];
  /** Extra content in the header next to the toggle (a CTA button, socials…). */
  headerRight?: React.ReactNode;
  /** Rendered at the bottom of the open fullscreen menu. */
  menuFooter?: React.ReactNode;
  /**
   * How a link should navigate. Lets the host app route hash targets through
   * its own smooth-scroll handler and everything else through its router.
   */
  renderLink: (
    target: { href: string; label: string },
    props: { className: string; onClick: () => void; ["data-cursor"]: string; ["aria-label"]?: string },
    children: React.ReactNode
  ) => React.ReactNode;
}

const SHAPES = [
  (key: string) => (
    <svg key={key} viewBox="0 0 400 400" fill="none" className="h-full w-full">
      <circle className="shape-element" cx="80" cy="120" r="40" fill="var(--kn-shape-a)" />
      <circle className="shape-element" cx="300" cy="80" r="60" fill="var(--kn-shape-b)" />
      <circle className="shape-element" cx="200" cy="300" r="80" fill="var(--kn-shape-c)" />
      <circle className="shape-element" cx="350" cy="280" r="30" fill="var(--kn-shape-a)" />
    </svg>
  ),
  (key: string) => (
    <svg key={key} viewBox="0 0 400 400" fill="none" className="h-full w-full">
      <path className="shape-element" d="M0 200 Q100 100, 200 200 T 400 200" stroke="var(--kn-shape-a)" strokeWidth="60" fill="none" />
      <path className="shape-element" d="M0 280 Q100 180, 200 280 T 400 280" stroke="var(--kn-shape-b)" strokeWidth="40" fill="none" />
    </svg>
  ),
  (key: string) => (
    <svg key={key} viewBox="0 0 400 400" fill="none" className="h-full w-full">
      {[
        [50, 50], [150, 50], [250, 50], [350, 50],
        [100, 150], [200, 150], [300, 150],
        [50, 250], [150, 250], [250, 250], [350, 250],
        [100, 350], [200, 350], [300, 350],
      ].map(([cx, cy], i) => (
        <circle key={i} className="shape-element" cx={cx} cy={cy} r={8 + (i % 3) * 2} fill={i % 3 === 0 ? "var(--kn-shape-a)" : i % 3 === 1 ? "var(--kn-shape-b)" : "var(--kn-shape-c)"} />
      ))}
    </svg>
  ),
  (key: string) => (
    <svg key={key} viewBox="0 0 400 400" fill="none" className="h-full w-full">
      <path className="shape-element" d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100" fill="var(--kn-shape-a)" />
      <path className="shape-element" d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200" fill="var(--kn-shape-c)" />
    </svg>
  ),
  (key: string) => (
    <svg key={key} viewBox="0 0 400 400" fill="none" className="h-full w-full">
      <line className="shape-element" x1="0" y1="100" x2="300" y2="400" stroke="var(--kn-shape-a)" strokeWidth="30" />
      <line className="shape-element" x1="100" y1="0" x2="400" y2="300" stroke="var(--kn-shape-b)" strokeWidth="25" />
      <line className="shape-element" x1="200" y1="0" x2="400" y2="200" stroke="var(--kn-shape-c)" strokeWidth="20" />
    </svg>
  ),
];

export function SterlingGateKineticNavigation({
  logo,
  logoHref = "/",
  items,
  headerRight,
  menuFooter,
  renderLink,
}: SterlingGateKineticNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openChild, setOpenChild] = useState<number | null>(null);

  const overlayRef = useRef<HTMLDivElement>(null);
  const backdropRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listRef = useRef<HTMLUListElement>(null);
  const shapesWrapRef = useRef<HTMLDivElement>(null);
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Build the open/close timeline once (paused) and just play()/reverse() it
  // on toggle — recreating a fresh timeline on every isOpen change raced
  // against React's effect cleanup/rerun cycle and could leave the overlay
  // stuck mid-transition.
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    try {
      if (!gsap.parseEase("kn-main")) {
        CustomEase.create("kn-main", "0.65, 0.01, 0.05, 0.99");
      }
    } catch {
      /* falls back to gsap defaults below */
    }
    const ease = gsap.parseEase("kn-main") ? "kn-main" : "power2.out";
    const backdrops = backdropRefs.current.filter(Boolean);
    const links = listRef.current ? Array.from(listRef.current.querySelectorAll<HTMLElement>("[data-kn-link]")) : [];

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      tl.set(overlay, { display: "flex" })
        .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45, ease })
        .fromTo(backdrops, { xPercent: 101 }, { xPercent: 0, stagger: 0.1, duration: 0.55, ease }, "<")
        .fromTo(links, { yPercent: 130, rotate: 6 }, { yPercent: 0, rotate: 0, stagger: 0.05, duration: 0.6, ease }, "<+=0.2");
      // Only hide the overlay once it's fully reversed (closed) — doing this
      // as an eventCallback (not a timeline .set()) means it never fires
      // partway through the forward (opening) playthrough.
      tl.eventCallback("onReverseComplete", () => {
        overlay.style.display = "none";
      });
      timelineRef.current = tl;
    });

    return () => {
      ctx.revert();
      timelineRef.current = null;
    };
  }, []);

  useEffect(() => {
    const tl = timelineRef.current;
    const overlay = overlayRef.current;
    if (!tl || !overlay) return;

    document.body.style.overflow = isOpen ? "hidden" : "";
    overlay.style.pointerEvents = isOpen ? "auto" : "none";

    if (isOpen) {
      overlay.style.display = "flex";
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleShapeEnter = (index: number) => {
    shapeRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === index) {
        el.classList.add("opacity-100");
        el.classList.remove("opacity-0");
        gsap.fromTo(
          el.querySelectorAll(".shape-element"),
          { scale: 0.5, opacity: 0, rotation: -10 },
          { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.06, ease: "back.out(1.7)", overwrite: "auto" }
        );
      }
    });
  };

  const handleShapeLeave = (index: number) => {
    const el = shapeRefs.current[index];
    if (!el) return;
    gsap.to(el.querySelectorAll(".shape-element"), {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      overwrite: "auto",
      onComplete: () => {
        el.classList.add("opacity-0");
        el.classList.remove("opacity-100");
      },
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenChild(null);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-10 md:py-6">
        {renderLink(
          { href: logoHref, label: "Inicio" },
          {
            className: "relative block h-8 w-8 md:h-10 md:w-10",
            onClick: closeMenu,
            "data-cursor": "expand",
            "aria-label": "ASHER — inicio",
          },
          logo
        )}

        <div className="flex items-center gap-2">
          {headerRight}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            data-cursor="expand"
            className="flex items-center gap-2 rounded-full border border-[var(--color-ink)] px-4 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]"
          >
            <span>{isOpen ? "Cerrar" : "Menú"}</span>
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span
                className="absolute h-px w-3 bg-current transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              />
              <span
                className="absolute h-px w-3 bg-current transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(-45deg)" : "rotate(90deg)" }}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[60] hidden flex-col overflow-x-hidden overflow-y-auto bg-[var(--color-ink)] text-[var(--color-bg)]"
        style={
          {
            // opacity/visibility/display are intentionally NOT set here —
            // GSAP owns them imperatively once mounted (the "hidden" class
            // above covers the pre-JS/initial state). Declaring them in
            // React's style object would make React reset them on every
            // re-render, stomping whatever GSAP had animated them to.
            "--kn-shape-a": "rgba(255,70,32,0.18)",
            "--kn-shape-b": "rgba(61,59,255,0.16)",
            "--kn-shape-c": "rgba(207,255,92,0.16)",
          } as React.CSSProperties
        }
      >
        <div ref={shapesWrapRef} className="pointer-events-none absolute inset-0 overflow-hidden">
          {SHAPES.map((Shape, i) => (
            <div
              key={i}
              ref={(el) => {
                shapeRefs.current[i] = el;
              }}
              className="absolute inset-0 opacity-0 transition-opacity"
            >
              {Shape(`shape-${i}`)}
            </div>
          ))}
        </div>

        <div
          ref={(el) => {
            backdropRefs.current[0] = el;
          }}
          className="absolute inset-0 bg-[var(--color-ink)]"
        />

        <div className="relative flex min-h-full flex-col justify-center px-6 py-28 md:px-16">
          <ul ref={listRef} className="flex flex-col gap-1">
            {items.map((item, i) => {
              const shapeIndex = i % SHAPES.length;
              const hasChildren = !!item.children?.length;
              const isChildOpen = openChild === i;
              return (
                <li key={item.label} className="border-b border-[var(--color-bg)]/10 py-3 first:pt-0">
                  <div
                    data-kn-link
                    className="overflow-hidden"
                    onMouseEnter={() => handleShapeEnter(shapeIndex)}
                    onMouseLeave={() => handleShapeLeave(shapeIndex)}
                  >
                    {hasChildren ? (
                      <button
                        type="button"
                        onClick={() => setOpenChild(isChildOpen ? null : i)}
                        aria-expanded={isChildOpen}
                        data-cursor="expand"
                        className="font-display flex w-full items-center justify-between gap-4 text-left text-4xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-70 md:text-6xl"
                      >
                        {item.label}
                        <span
                          className="text-xl transition-transform duration-300 md:text-3xl"
                          style={{ transform: isChildOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                        >
                          +
                        </span>
                      </button>
                    ) : (
                      renderLink(
                        { href: item.href!, label: item.label },
                        {
                          className:
                            "font-display block text-4xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-70 md:text-6xl",
                          onClick: closeMenu,
                          "data-cursor": "expand",
                        },
                        item.label
                      )
                    )}
                  </div>

                  {hasChildren && (
                    <div
                      className="grid overflow-hidden transition-[grid-template-rows] duration-400 ease-out"
                      style={{ gridTemplateRows: isChildOpen ? "1fr" : "0fr" }}
                    >
                      <div className="min-h-0">
                        <ul className="flex flex-col gap-1 py-3 pl-1">
                          {item.children!.map((child) => (
                            <li key={child.label}>
                              {renderLink(
                                { href: child.href, label: child.label },
                                {
                                  className:
                                    "inline-flex items-baseline gap-3 py-1 text-lg text-[var(--color-bg)]/70 transition-colors duration-300 hover:text-[var(--color-bg)] md:text-2xl",
                                  onClick: closeMenu,
                                  "data-cursor": "expand",
                                },
                                child.label
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {menuFooter && <div className="mt-10">{menuFooter}</div>}
        </div>
      </div>
    </>
  );
}
