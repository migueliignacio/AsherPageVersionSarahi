"use client";

import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="border-y border-[var(--color-line)] px-6 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <h2 data-reveal className="font-display text-3xl font-medium uppercase tracking-tight md:text-5xl">
            Stay curious.
          </h2>
          <p data-reveal className="mt-4 max-w-sm text-[var(--color-ink-soft)]">
            Occasional ideas, experiments and things we&apos;re excited about.
          </p>
        </div>

        <form
          data-reveal
          onSubmit={onSubmit}
          className="flex items-center gap-4 border-b border-[var(--color-ink)] pb-3 md:col-span-6"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder={submitted ? "Thanks — you're on the list." : "EMAIL ADDRESS"}
            disabled={submitted}
            className="w-full bg-transparent text-sm uppercase tracking-[0.06em] placeholder:text-[var(--color-ink-soft)] focus:outline-none"
          />
          <button
            type="submit"
            data-cursor="expand"
            className="flex shrink-0 items-center gap-2 text-sm font-medium uppercase tracking-[0.08em]"
          >
            Subscribe <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
