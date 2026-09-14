interface BlobProps {
  /** Two-stop gradient painted inside the morphing shape. */
  from: string;
  to: string;
  className?: string;
  /** Offsets the morph + drift loops so sibling blobs never sync up. */
  delay?: string;
  blur?: string;
  opacity?: number;
}

export default function Blob({
  from,
  to,
  className = "",
  delay = "0s",
  blur = "60px",
  opacity = 1,
}: BlobProps) {
  return (
    <div
      aria-hidden="true"
      className={`blob-inner pointer-events-none absolute ${className}`}
      style={{ animationDelay: delay, opacity }}
    >
      <div
        className="blob h-full w-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${from}, ${to})`,
          filter: `blur(${blur})`,
          animationDelay: delay,
        }}
      />
    </div>
  );
}
