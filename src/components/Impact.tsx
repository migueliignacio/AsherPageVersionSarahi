import { stats } from "@/data/team";
import Counter from "./Counter";

export default function Impact() {
  return (
    <section className="border-y border-[var(--color-line)] px-6 py-20 md:px-10 md:py-28">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-8">
        {stats.map((stat) => (
          <Counter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
