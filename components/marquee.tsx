"use client";

import { useEffect, useRef } from "react";
import { clamp, lerp, prefersReducedMotion } from "@/lib/fx";

const ITEMS = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "PERFORMANCE",
  "SECURITY",
  "SAAS ARCHITECTURE",
  "UI ENGINEERING",
  "OPEN SOURCE",
];

export default function Marquee() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // skew the belt with scroll velocity
  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track || prefersReducedMotion()) return;

    let lastY = scrollY,
      skew = 0,
      raf = 0,
      visible = true;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      const vel = scrollY - lastY;
      lastY = scrollY;
      skew = lerp(skew, clamp(vel * 0.35, -10, 10), 0.1);
      track.style.transform = `skewX(${skew.toFixed(2)}deg)`;
    };
    const io = new IntersectionObserver(
      (en) => {
        visible = en[0].isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(wrap);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className="marquee" aria-hidden="true">
      <div ref={trackRef}>
        <div className="track">
          {[0, 1].map((half) =>
            ITEMS.map((it) => (
              <span key={`${half}-${it}`}>
                <i>◆</i>
                {it}
              </span>
            )),
          )}
        </div>
      </div>
    </div>
  );
}
