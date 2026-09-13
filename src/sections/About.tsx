import { site } from "@/config/site";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl border-t border-[var(--line)] px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
          01 · About
        </h2>
      </Reveal>
      <div className="space-y-5 text-[0.95rem] leading-relaxed text-[var(--fg)]/85 md:text-base">
        {site.about.map((para, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p>{para}</p>
          </Reveal>
        ))}
        <Reveal delay={site.about.length * 0.08}>
          <p className="text-[var(--muted)]">
            Reach me on{" "}
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--fg)] underline underline-offset-4"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a href={site.socials.email} className="text-[var(--fg)] underline underline-offset-4">
              email
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
