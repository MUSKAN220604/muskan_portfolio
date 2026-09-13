import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { Reveal } from "@/components/reveal";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const LEVEL_COLORS = [
  "var(--chip)",
  "rgba(52, 211, 153, 0.25)",
  "rgba(52, 211, 153, 0.5)",
  "rgba(52, 211, 153, 0.75)",
  "rgba(52, 211, 153, 1)",
];

export function GithubActivity() {
  const [weeks, setWeeks] = useState<Day[][] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${site.github.username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .then((data: { contributions: { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }[]; total: Record<string, number> }) => {
        if (cancelled) return;
        const days: Day[] = data.contributions;
        const grouped: Day[][] = [];
        for (let i = 0; i < days.length; i += 7) {
          grouped.push(days.slice(i, i + 7));
        }
        setWeeks(grouped);
        const totalCount = Object.values(data.total).reduce((a, b) => a + b, 0);
        setTotal(totalCount);
      })
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="mx-auto max-w-4xl border-t border-[var(--line)] px-6 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
          05 · GitHub Activity
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6">
          <div className="mb-4 flex items-center justify-between text-sm text-[var(--muted)]">
            <span>
              {error
                ? `@${site.github.username}`
                : total !== null
                ? `${total} contributions in the last year`
                : "Loading contributions…"}
            </span>
            <a
              href={`https://github.com/${site.github.username}`}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs underline underline-offset-4 hover:text-[var(--fg)]"
            >
              @{site.github.username}
            </a>
          </div>

          {weeks && (
            <div className="flex gap-[3px] overflow-x-auto pb-1">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day) => (
                    <div
                      key={day.date}
                      title={`${day.count} contributions on ${day.date}`}
                      className="h-[10px] w-[10px] rounded-[2px]"
                      style={{ backgroundColor: LEVEL_COLORS[day.level] }}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}

          {error && (
            <p className="text-sm text-[var(--muted)]">
              Couldn't load live contribution data — check the profile directly on GitHub.
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
