import { site } from "@/config/site";
import { Reveal } from "@/components/reveal";
import { skillIcons } from "@/config/skill-icons";

export function TechStack() {
  return (
    <section id="skills" className="mx-auto max-w-4xl border-t border-[var(--line)] px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
          04 · Skills
        </h2>
      </Reveal>

      <div className="space-y-6">
        {site.skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="grid gap-3 md:grid-cols-[9rem_1fr]">
              <span className="text-sm text-[var(--muted)]">{group.label}</span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const entry = skillIcons[item];
                  return (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--chip)] px-3 py-1.5 text-xs text-[var(--fg)]/85"
                    >
                      {entry && <entry.Icon size={13} color={entry.color} />}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
