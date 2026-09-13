import { Moon, Sun, Github, Linkedin, Mail, FileText } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { site } from "@/config/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight lowercase">
          muskan
        </a>

        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--fg)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={site.socials.email}
            className="text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
          <a
            href={site.socials.resume}
            target="_blank"
            rel="noreferrer"
            download="Roushni_Muskan_Resume.pdf"
            className="text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            aria-label="Resume"
          >
            <FileText size={17} />
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-1 rounded-full border border-[var(--line)] p-2 text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </div>
    </header>
  );
}
