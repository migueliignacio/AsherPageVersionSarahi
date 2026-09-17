import { DotPattern } from "@/components/ui/dot-pattern-1";

export interface QuoteLine {
  bold?: string;
  thin?: string;
}

export interface QuoteBlockProps {
  eyebrow: string;
  lines: QuoteLine[];
  /** Accent color (hex) driving the corner marks, border, dot pattern and eyebrow. */
  accent: string;
}

export function QuoteBlock({ eyebrow, lines, accent }: QuoteBlockProps) {
  return (
    <div className="mx-auto mb-10 max-w-5xl px-6 md:mb-16">
      <div className="relative flex flex-col items-center border" style={{ borderColor: accent }}>
        <DotPattern width={6} height={6} className="opacity-40" style={{ fill: accent }} />

        <div className="absolute -left-1.5 -top-1.5 h-3 w-3" style={{ background: accent }} />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3" style={{ background: accent }} />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3" style={{ background: accent }} />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3" style={{ background: accent }} />

        <div className="relative z-20 mx-auto max-w-4xl px-6 py-10 text-center md:py-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] md:text-sm" style={{ color: accent }}>
            {eyebrow}
          </p>
          <div className="font-display flex flex-col gap-2 text-2xl leading-tight tracking-tight text-[var(--color-ink)] md:gap-3 md:text-4xl lg:text-5xl">
            {lines.map((line, i) => (
              <div key={i} className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
                {line.bold && <span className="font-semibold">{line.bold}</span>}
                {line.thin && <span className="font-light text-[var(--color-ink-soft)]">{line.thin}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
