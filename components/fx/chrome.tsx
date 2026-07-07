"use client";

import { useEffect, useRef } from "react";

/** Fixed page chrome: film grain, vertical rails and the scroll progress bar. */
export default function Chrome() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        bar.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
      });
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="rails" aria-hidden="true" />
      <div ref={barRef} className="progress" aria-hidden="true" />
    </>
  );
}
