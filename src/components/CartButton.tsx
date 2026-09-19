"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";

export default function CartButton({ className = "" }: { className?: string }) {
  const { count, setOpen } = useCart();
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label={count > 0 ? `Abrir carrito, ${count} elementos` : "Abrir carrito"}
      data-cursor="expand"
      className={`relative grid place-items-center rounded-full border border-[var(--color-ink)] bg-[var(--color-bg)] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] ${className}`}
    >
      <ShoppingBag className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.6} />
      {count > 0 && (
        <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-[var(--color-accent)] px-1 text-[0.65rem] font-semibold leading-none text-[var(--color-bg)]">
          {count}
        </span>
      )}
    </button>
  );
}
