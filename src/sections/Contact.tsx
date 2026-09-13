import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { site } from "@/config/site";
import { Reveal } from "@/components/reveal";

export function Contact() {
  const items = [
    { icon: Mail, label: site.email, href: site.socials.email },
    { icon: Linkedin, label: "LinkedIn", href: site.socials.linkedin },
    { icon: Github, label: "GitHub", href: site.socials.github },
    { icon: FileText, label: "Resume", href: site.socials.resume },
  ];

  return (
    <section id="contact" className="mx-auto max-w-4xl border-t border-[var(--line)] px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
          06 · Contact
        </h2>
      </Reveal>

      <Reveal delay={0.06}>
        <h3 className="mb-2 font-serif text-3xl md:text-4xl">Let's work together.</h3>
        <p className="mb-8 max-w-md text-[var(--muted)]">
          {site.status.availableText === "open to opportunities"
            ? "I'm currently open to internships and collaborative projects."
            : ""}
        </p>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map(({ icon: Icon, label, href }, i) => (
          <Reveal key={label} delay={0.1 + i * 0.05}>
            <a
              href={href}
              target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
              rel={href.startsWith("http") || href.endsWith(".pdf") ? "noreferrer" : undefined}
              download={href.endsWith(".pdf") ? "Roushni_Muskan_Resume.pdf" : undefined}
              className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-sm transition-colors hover:border-[var(--soft)]"
            >
              <Icon size={16} className="text-[var(--muted)]" />
              {label}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
