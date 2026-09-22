"use client";

import { Component, useSyncExternalStore, type ReactNode } from "react";
import { Warp } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

export interface ShaderFeature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface FeatureShaderCardsProps {
  eyebrow: string;
  /** Two colours (dark → light) that drive every card's shader gradient. */
  colors: [string, string];
  features: ShaderFeature[];
  className?: string;
}

const SHAPES = ["checks", "stripes", "edge"] as const;

/** A deterministic variation per card index, so each tile's shader differs a little without random colours. */
function shaderConfig(index: number, colors: [string, string]) {
  return {
    proportion: 0.32 + (index % 3) * 0.05,
    softness: 0.85 + (index % 2) * 0.2,
    distortion: 0.14 + (index % 4) * 0.02,
    swirl: 0.6 + (index % 3) * 0.1,
    swirlIterations: 8 + (index % 4) * 2,
    shape: SHAPES[index % SHAPES.length],
    shapeScale: 0.08 + (index % 3) * 0.015,
    colors: [colors[0], colors[1], colors[0], colors[1]],
  };
}

function detectWebgl() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

// WebGL support never changes over a page's lifetime, so this is read once
// (cached) and synced in with useSyncExternalStore instead of an effect —
// the same pattern CartProvider uses for other client-only reads that must
// stay consistent with SSR on first paint.
let cachedWebgl: boolean | null = null;
function getWebglSnapshot() {
  if (cachedWebgl === null) cachedWebgl = detectWebgl();
  return cachedWebgl;
}
function subscribeNever() {
  return () => {};
}
function useHasWebgl() {
  return useSyncExternalStore(subscribeNever, getWebglSnapshot, () => false);
}

/** Catches a shader init failure so one bad card can't blank the whole grid. */
class ShaderErrorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

/** Same two-colour gradient the shader would use, for browsers without WebGL. */
function StaticGradient({ colors }: { colors: [string, string] }) {
  return (
    <div
      className="absolute inset-0"
      style={{ background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)` }}
    />
  );
}

function CardShader({ index, colors }: { index: number; colors: [string, string] }) {
  const webgl = useHasWebgl();

  if (!webgl) return <StaticGradient colors={colors} />;

  const config = shaderConfig(index, colors);
  return (
    <ShaderErrorBoundary fallback={<StaticGradient colors={colors} />}>
      <Warp
        style={{ height: "100%", width: "100%" }}
        proportion={config.proportion}
        softness={config.softness}
        distortion={config.distortion}
        swirl={config.swirl}
        swirlIterations={config.swirlIterations}
        shape={config.shape}
        shapeScale={config.shapeScale}
        scale={1}
        rotation={0}
        speed={0.8}
        colors={config.colors}
      />
    </ShaderErrorBoundary>
  );
}

/**
 * Feature grid with a live WebGL shader behind each card, tinted to the
 * service's own colours. Adapted from the community "feature-shader-cards"
 * component: props instead of a hardcoded list, a two-colour gradient per
 * section instead of six unrelated hues, and a static-gradient fallback for
 * browsers without WebGL so a card is never a blank box.
 */
export function FeatureShaderCards({ eyebrow, colors, features, className }: FeatureShaderCardsProps) {
  return (
    <section className={cn("px-5 py-20 md:px-10 md:py-28", className)}>
      <p className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)] md:mb-14">
        {eyebrow}
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={feature.title} className="relative h-80 overflow-hidden rounded-3xl">
            <CardShader index={index} colors={colors} />

            <div className="relative z-10 flex h-full flex-col rounded-3xl border border-white/15 bg-black/45 p-7 md:p-8">
              <div className="mb-6 text-white [&>svg]:h-9 [&>svg]:w-9">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white md:text-2xl">{feature.title}</h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-white/85">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureShaderCards;
