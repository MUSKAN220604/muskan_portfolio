import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "@/config/site";
import { LiveClock } from "@/components/live-clock";

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-4xl px-6 pb-20 pt-24 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-xs text-[var(--muted)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        {site.status.availableText}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-gilroy text-5xl leading-tight md:text-7xl"
      >
        {site.greeting}.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 max-w-xl text-lg text-[var(--muted)]"
      >
        {site.role}. {site.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 flex flex-wrap items-center gap-3 text-sm"
      >
        {site.tldr.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--line)] bg-[var(--chip)] px-3 py-1.5 text-[var(--muted)]"
          >
            {item}
          </span>
        ))}
      </motion.div>

      <div className="mt-10 flex items-center justify-between border-t border-[var(--line)] pt-5">
        <LiveClock />
        <a
          href="#about"
          className="flex items-center gap-1.5 text-xs text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
        >
          Scroll
          <ArrowDown size={13} />
        </a>
      </div>
    </section>
  );
}
