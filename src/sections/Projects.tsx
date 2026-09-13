import { site } from "@/config/site";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl border-t border-[var(--line)] px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
          02 · Projects
        </h2>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {site.projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <div className="group h-full rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--soft)]">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="font-medium leading-snug">{project.title}</h3>
                {project.status && (
                  <span className="shrink-0 rounded-full border border-[var(--line)] px-2.5 py-0.5 text-[0.65rem] text-[var(--muted)]">
                    {project.status}
                  </span>
                )}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">{project.blurb}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[var(--chip)] px-2.5 py-1 font-mono text-[0.7rem] text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
