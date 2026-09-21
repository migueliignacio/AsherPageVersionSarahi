"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

interface TextBlockAnimationProps {
  children: ReactNode;
  /** Play when the text scrolls into view (default) or immediately on mount. */
  animateOnScroll?: boolean;
  delay?: number;
  /** Colour of the block that sweeps across each line. */
  blockColor?: string;
  stagger?: number;
  duration?: number;
  className?: string;
}

/**
 * Reveals text line by line: a coloured block wipes in from the left, the
 * line appears underneath it, and the block wipes out to the right. Replays
 * when scrolling back up. Skipped entirely for reduced-motion users.
 */
export default function TextBlockAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#0b1956",
  stagger = 0.1,
  duration = 0.6,
  className,
}: TextBlockAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const split = SplitText.create(container, {
        type: "lines",
        linesClass: "block-line-parent",
      });

      const wrappers: HTMLDivElement[] = [];
      const blocks: HTMLDivElement[] = [];

      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.display = "block";
        wrapper.style.overflow = "hidden";

        const block = document.createElement("div");
        block.setAttribute("aria-hidden", "true");
        Object.assign(block.style, {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: blockColor,
          zIndex: "2",
          transform: "scaleX(0)",
          transformOrigin: "left center",
        });

        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
        wrapper.appendChild(block);

        gsap.set(line, { opacity: 0 });
        wrappers.push(wrapper);
        blocks.push(block);
      });

      const tl = gsap.timeline({
        defaults: { ease: "expo.inOut" },
        scrollTrigger: animateOnScroll
          ? { trigger: container, start: "top 88%", toggleActions: "play none none reverse" }
          : undefined,
        delay,
      });

      tl.to(blocks, { scaleX: 1, duration, stagger, transformOrigin: "left center" })
        .set(split.lines, { opacity: 1, stagger }, `<${duration / 2}`)
        .to(blocks, { scaleX: 0, duration, stagger, transformOrigin: "right center" }, `<${duration * 0.4}`);

      // Undo the wrapping so a re-run (dev strict mode, prop change) starts clean.
      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        wrappers.forEach((wrapper) => {
          const line = wrapper.firstElementChild;
          if (line && wrapper.parentNode) wrapper.parentNode.insertBefore(line, wrapper);
          wrapper.remove();
        });
        split.revert();
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay, blockColor, stagger, duration] }
  );

  return (
    <div ref={containerRef} className={className} style={{ position: "relative" }}>
      {children}
    </div>
  );
}
