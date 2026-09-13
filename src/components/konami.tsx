import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function Konami() {
  const [progress, setProgress] = useState<string[]>([]);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setProgress((prev) => {
        const next = [...prev, e.key].slice(-CODE.length);
        if (next.join(",") === CODE.join(",")) {
          setTriggered(true);
          setTimeout(() => setTriggered(false), 3500);
          return [];
        }
        return next;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-2 text-sm font-mono shadow-lg"
        >
          🎉 You found the easter egg — thanks for reading the code closely.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
