export default function Studio() {
  return (
    <section id="studio" className="px-6 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <p data-reveal className="text-sm uppercase tracking-[0.12em] text-[var(--color-ink-soft)] md:col-span-2">
          The studio
        </p>
        <h2
          data-reveal
          className="font-display md:col-span-8 text-4xl font-medium uppercase leading-[0.95] tracking-tight md:text-6xl"
        >
          We are a small team with big ideas.
        </h2>
      </div>

      <p data-reveal className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]/75 md:mt-14 md:text-xl">
        GLYPH is an independent studio of designers, engineers, strategists and directors who care
        about the same thing: making digital work that feels considered from the first pixel to the
        last line of code. We keep the team small on purpose — every project gets our full attention,
        not a fraction of it.
      </p>
    </section>
  );
}
