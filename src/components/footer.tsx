import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="mx-auto max-w-4xl border-t border-[var(--line)] px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-3 text-xs text-[var(--muted)] sm:flex-row">
        <span>{site.footerNote}</span>
        <span>© {new Date().getFullYear()} {site.name}</span>
      </div>
    </footer>
  );
}
