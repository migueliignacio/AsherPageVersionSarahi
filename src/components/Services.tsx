import { serviceGroups } from "@/data/services";

export default function Services() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <h2 data-reveal className="font-display mb-16 text-3xl font-medium uppercase tracking-tight md:mb-24 md:text-5xl">
        What we do
      </h2>

      <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
        {serviceGroups.map((group) => (
          <div key={group.index} data-reveal className="group border-t border-[var(--color-line)] pt-6 transition-colors duration-500">
            <div className="flex items-center gap-4">
              <span
                className="h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-150"
                style={{ background: group.accent }}
              />
              <span className="text-sm text-[var(--color-ink-soft)]">{group.index}</span>
            </div>
            <h3 className="font-display mt-3 text-2xl font-medium uppercase tracking-tight transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-2 md:text-4xl">
              {group.title}
            </h3>
            <ul className="mt-5 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-[var(--color-ink-soft)] transition-colors duration-300 hover:text-[var(--color-ink)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
