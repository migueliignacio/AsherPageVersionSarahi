import { team } from "@/data/team";

export default function Team() {
  return (
    <section className="px-6 pb-24 md:px-10 md:pb-32">
      <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <article key={member.name} data-reveal className="group">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-md transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1.5"
              style={{ background: `linear-gradient(160deg, ${member.accent}, #12121015)` }}
            >
              <span className="font-display absolute bottom-4 left-4 text-lg font-medium uppercase tracking-tight text-[var(--color-bg)] opacity-60">
                {member.name.split(" ")[0]}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-display text-lg font-medium tracking-tight">{member.name}</h3>
              <p className="text-sm text-[var(--color-ink-soft)]">{member.role}</p>
              <p className="mt-2 max-w-[32ch] text-sm text-[var(--color-ink)]/70 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                {member.bio}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
