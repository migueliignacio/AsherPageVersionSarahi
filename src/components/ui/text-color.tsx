"use client";

import React from "react";
import { Plus } from "lucide-react";

export interface TextColorWord {
  text: string;
  from: string;
  to: string;
}

export interface TextColorProps {
  /** Exactly 3 words, each cross-fading into its own gradient in sequence. */
  words: [TextColorWord, TextColorWord, TextColorWord];
  className?: string;
}

export function TextColor({ words, className }: TextColorProps) {
  const [w1, w2, w3] = words;
  const beforeAnim = ["before:animate-gradient-background-1", "before:animate-gradient-background-2", "before:animate-gradient-background-3"];
  const foregroundAnim = ["animate-gradient-foreground-1", "animate-gradient-foreground-2", "animate-gradient-foreground-3"];

  return (
    <div className={className}>
      <div className="mb-10 mt-4 md:mt-6">
        <div className="px-2">
          <div className="relative p-8 w-full h-full border border-[var(--color-line)] [mask-image:radial-gradient(200rem_24rem_at_center,white,transparent)]">
            <h1 className="tracking-tighter flex select-none px-3 py-2 flex-col text-center text-6xl font-extrabold leading-none sm:text-8xl md:flex-col lg:flex-row">
              <Plus className="absolute -left-4 -top-4 h-8 w-8 text-[var(--color-ink)]/40" />
              <Plus className="absolute -bottom-4 -left-4 h-8 w-8 text-[var(--color-ink)]/40" />
              <Plus className="absolute -right-4 -top-4 h-8 w-8 text-[var(--color-ink)]/40" />
              <Plus className="absolute -bottom-4 -right-4 h-8 w-8 text-[var(--color-ink)]/40" />

              {[w1, w2, w3].map((word, i) => (
                <span
                  key={word.text}
                  data-content={word.text}
                  className={`relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] before:text-[var(--color-ink)] sm:before:top-0 ${beforeAnim[i]}`}
                >
                  <span
                    className={`relative z-10 bg-gradient-to-r from-[var(--word-from)] to-[var(--word-to)] bg-clip-text px-2 text-transparent sm:px-5 ${foregroundAnim[i]}`}
                    style={{ "--word-from": word.from, "--word-to": word.to } as React.CSSProperties}
                  >
                    {word.text}
                  </span>
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
