"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardColors {
  bg: string;
  text: string;
  border: string;
}

interface CardProps {
  number: string;
  title: string;
  description: string;
  colors: CardColors;
  className?: string;
  rotate?: string;
}

const Pin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

function Card({ number, title, description, colors, className, rotate }: CardProps) {
  return (
    <div className={cn("relative w-full transition-transform duration-300 hover:z-30 hover:scale-105 md:w-[280px]", rotate, className)}>
      <div className="rounded-[25px] border border-[var(--color-line)] bg-white p-2 shadow-[0px_10px_20px_0px_rgba(11,25,86,0.12)]">
        <Pin className={cn("z-20 mx-auto mb-6 h-8 w-8", colors.text)} />
        <div className={cn("relative flex h-full flex-col overflow-hidden rounded-[15px] border p-[15px]", colors.bg, colors.border)}>
          <span className={cn("font-display mb-5 text-4xl font-semibold", colors.text)}>{number}</span>
          <h3 className="mb-[10px] text-2xl font-semibold leading-none text-[var(--color-ink)]">{title}</h3>
          <p className="text-sm/5 tracking-tight text-[var(--color-ink-soft)]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export interface Step {
  title: string;
  description: string;
  colors: CardColors;
}

export interface StepPosition {
  className?: string;
  rotate?: string;
}

export interface HowItWorksProps {
  steps: Step[];
  positions: StepPosition[];
  /** Total height of the desktop track (px), sized to fit every position. */
  height: number;
  className?: string;
}

/**
 * A hand-drawn-feeling timeline: pinned cards zigzagging down a dashed path
 * that keeps redrawing itself. Adapted from the community "how-it-works"
 * component — steps/positions/height are now props (no hardcoded 5-step
 * layout or Comic Sans number), and every colour comes in through the
 * ASHER palette instead of orange/blue/purple.
 */
export default function HowItWorks({ steps, positions, height, className }: HowItWorksProps) {
  return (
    <LazyMotion features={domAnimation}>
      <div className={cn("relative px-4 max-md:pb-16 md:py-10", className)}>
        <div className="mx-auto max-w-6xl">
          <div
            className="relative mx-auto flex h-auto w-full max-w-[1000px] flex-col space-y-8 md:block md:h-[var(--md-height)] md:space-y-0"
            style={{ "--md-height": `${height}px` } as React.CSSProperties}
          >
            {steps.length > 1 && (
              <svg
                className="pointer-events-none absolute left-0 top-0 z-0 hidden h-full w-full md:block"
                viewBox={`0 0 1000 ${height}`}
                preserveAspectRatio="none"
              >
                {(() => {
                  const segments = [
                    "M 290 150 C 500 150, 550 270, 710 270",
                    "C 850 270, 500 350, 290 450",
                    "C 290 600, 550 720, 750 720",
                    "C 950 720, 500 800, 290 850",
                    "C 50 970, 500 900, 710 970",
                  ];
                  const pathD = segments.slice(0, Math.max(0, steps.length - 1)).join(" ");
                  return (
                    <m.path
                      d={pathD}
                      stroke="var(--color-line)"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -140 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  );
                })()}
              </svg>
            )}

            {steps.map((step, index) => {
              const position = positions[index % positions.length];
              return (
                <Card
                  key={step.title}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  colors={step.colors}
                  rotate={position.rotate}
                  className={position.className}
                />
              );
            })}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
