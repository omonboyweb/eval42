"use client";

import { useEffect, useRef } from "react";
import { finePointer, lerp, prefersReducedMotion } from "@/lib/fx";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || !finePointer() || prefersReducedMotion()) return;

    document.documentElement.classList.add("has-cursor");
    let mx = -100,
      my = -100,
      rx = -100,
      ry = -100,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      const view = t.closest?.("[data-view]");
      const hover = t.closest?.("[data-hover], a, button");
      ring.classList.toggle("is-view", !!view);
      ring.classList.toggle("is-hover", !view && !!hover);
    };
    const loop = () => {
      rx = lerp(rx, mx, 0.16);
      ry = lerp(ry, my, 0.16);
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      const half = ring.offsetWidth / 2;
      ring.style.transform = `translate(${rx - half}px, ${ry - half}px)`;
      raf = requestAnimationFrame(loop);
    };

    addEventListener("mousemove", onMove, { passive: true });
    addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", onMove);
      removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span className="cur-label">VIEW →</span>
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
