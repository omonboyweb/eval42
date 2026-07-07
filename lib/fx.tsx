"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

export const clamp = (v: number, lo: number, hi: number) =>
  Math.min(Math.max(v, lo), hi);
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

export const READY_EVENT = "eval42:ready";

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function finePointer() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches
  );
}

/** Scramble-decode text into an element. */
export function scrambleEl(el: HTMLElement, finalText: string, dur = 700) {
  if (prefersReducedMotion()) {
    el.textContent = finalText;
    return;
  }
  const start = performance.now();
  const frame = (now: number) => {
    const t = Math.min((now - start) / dur, 1);
    const settled = Math.floor(t * finalText.length);
    let out = finalText.slice(0, settled);
    for (let i = settled; i < finalText.length; i++) {
      out +=
        finalText[i] === " "
          ? " "
          : GLYPHS[(Math.random() * GLYPHS.length) | 0];
    }
    el.textContent = out;
    if (t < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/** Animate a number 0 → target inside an element. */
export function countEl(
  el: HTMLElement,
  target: number,
  suffix = "",
  dur = 1300,
) {
  if (prefersReducedMotion()) {
    el.textContent = target + suffix;
    return;
  }
  const start = performance.now();
  const frame = (now: number) => {
    const t = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (t < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/** Observe once; returns [ref, inView]. */
export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/** Magnetic pull toward the cursor. */
export function useMagnet<T extends HTMLElement>(strength = 0.26) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !finePointer()) return;
    const move = (e: MouseEvent) => {
      const b = el.getBoundingClientRect();
      const dx = e.clientX - (b.left + b.width / 2);
      const dy = e.clientY - (b.top + b.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };
    const leave = () => {
      el.style.transition =
        "transform .5s cubic-bezier(.19,1,.22,1), box-shadow .3s";
      el.style.transform = "";
      setTimeout(() => (el.style.transition = "box-shadow .3s"), 500);
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strength]);
  return ref;
}

/** 3D tilt on hover. */
export function useTilt<T extends HTMLElement>(max = 10) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !finePointer()) return;
    const move = (e: MouseEvent) => {
      const b = el.getBoundingClientRect();
      const px = (e.clientX - b.left) / b.width - 0.5;
      const py = (e.clientY - b.top) / b.height - 0.5;
      el.style.transform = `rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(8px)`;
    };
    const leave = () => {
      el.style.transform = "";
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [max]);
  return ref;
}

/** Split text into staggered letter spans (pairs with .ch / .in CSS). */
export function SplitText({ text, step = 38 }: { text: string; step?: number }) {
  return (
    <>
      {[...text].map((ch, i) => (
        <span
          key={i}
          className="ch"
          style={{ transitionDelay: `${i * step}ms` } as CSSProperties}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </>
  );
}

/** Fade-up wrapper that reveals when scrolled into view. */
export function Reveal({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} {...rest}>
      {children}
    </div>
  );
}

/** Counter that animates when it enters the viewport. */
export function Counter({
  to,
  suffix = "",
  className = "",
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          countEl(el, to, suffix);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, suffix]);
  return (
    <span ref={ref} className={className}>
      0{suffix ? "" : ""}
    </span>
  );
}

/** Masked multi-line split title that reveals in view, then goes "live" for hover play. */
export function SplitTitle({
  lines,
  className = "",
  as: Tag = "h2",
  rowClass = [],
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2";
  rowClass?: string[];
}) {
  const [ref, inView] = useInView<HTMLHeadingElement>(0.4);
  const [live, setLive] = useState(false);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => {
      ref.current
        ?.querySelectorAll<HTMLElement>(".ch")
        .forEach((s) => (s.style.transitionDelay = "0ms"));
      setLive(true);
    }, 1500);
    return () => clearTimeout(t);
  }, [inView, ref]);

  return (
    <Tag
      ref={ref}
      className={`${className} ${inView ? "in" : ""} ${live ? "live" : ""}`}
    >
      {lines.map((line, i) => (
        <span key={i} className={`row ${rowClass[i] ?? ""} ${live ? "live" : ""}`}>
          <span>
            <SplitText text={line} />
          </span>
        </span>
      ))}
    </Tag>
  );
}

/** Spotlight position tracking for service rows. */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const b = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - b.left}px`);
    el.style.setProperty("--my", `${e.clientY - b.top}px`);
  }, []);
  return { ref, onMouseMove };
}
