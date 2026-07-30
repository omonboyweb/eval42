"use client";

import { useEffect, useRef } from "react";
import { clamp, prefersReducedMotion } from "@/lib/fx";

const TEXT =
  "Most websites are just built. Mine are engineered — they open in milliseconds, protect your data by default, and move with intent. Every pixel earns its place.";
const KEYWORDS = new Set(["engineered", "milliseconds,", "protect", "intent."]);
const WORDS = TEXT.split(" ");

export default function Manifesto() {
  const pRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const p = pRef.current;
    if (!p || prefersReducedMotion()) return;
    const words = [...p.querySelectorAll<HTMLElement>(".w")];
    let raf = 0;

    const update = () => {
      raf = 0;
      const r = p.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const prog = clamp(
        (innerHeight * 0.82 - r.top) / (r.height + innerHeight * 0.35),
        0,
        1,
      );
      const lit = Math.floor(prog * words.length);
      words.forEach((w, i) => w.classList.toggle("lit", i < lit));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="manifesto">
      <p ref={pRef}>
        {WORDS.map((w, i) => (
          <span key={i}>
            <span className={`w ${KEYWORDS.has(w) ? "key" : ""}`}>{w}</span>
            {i < WORDS.length - 1 ? " " : ""}
          </span>
        ))}
      </p>
    </section>
  );
}
