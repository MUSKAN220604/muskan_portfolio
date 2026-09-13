import { useEffect, useRef } from "react";

/**
 * Plays a short, synthesized click tone whenever the user clicks a
 * button, link, or anything with role="button". No audio file needed —
 * the sound is generated on the fly with the Web Audio API.
 */
export function useClickSound() {
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const getContext = () => {
      if (!ctxRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        ctxRef.current = new AudioCtx();
      }
      return ctxRef.current;
    };

    const playClick = () => {
      try {
        const ctx = getContext();
        if (ctx.state === "suspended") ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(920, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.09);
      } catch {
        // Audio isn't critical — fail silently (e.g. autoplay-restricted browsers).
      }
    };

    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const clickable = target?.closest('button, a, [role="button"]');
      if (clickable) playClick();
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}
