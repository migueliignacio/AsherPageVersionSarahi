interface Props {
  text: string;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({ text, reverse = false, className = "" }: Props) {
  const items = Array.from({ length: 8 });

  return (
    <div className={`marquee-group overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`marquee-track flex ${reverse ? "reverse" : ""}`}>
        {items.map((_, i) => (
          <span
            key={i}
            className="font-display px-6 text-[3.5vw] font-medium uppercase leading-none tracking-tight md:text-[2.4vw]"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
