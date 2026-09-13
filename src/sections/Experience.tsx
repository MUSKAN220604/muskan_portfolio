import { site } from "@/config/site";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl border-t border-[var(--line)] px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
          03 · Experience & Education
        </h2>
      </Reveal>

      <div className="space-y-0">
        {site.timeline.map((entry, i) => (
          <Reveal key={entry.role} delay={i * 0.06}>
            <div className="grid gap-1 border-b border-[var(--line)] py-5 last:border-b-0 md:grid-cols-[9rem_1fr]">
              <span className="font-mono text-xs text-[var(--muted)]">{entry.period}</span>
              <div>
                <p className="font-medium">
                  {entry.role} <span className="text-[var(--muted)]">— {entry.org}</span>
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{entry.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
