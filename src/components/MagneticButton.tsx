"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function MagneticButton({ href, children, className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      data-cursor="expand"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-flex transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </a>
  );
}
