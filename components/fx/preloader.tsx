"use client";

import { useEffect, useRef, useState } from "react";
import { markReady, prefersReducedMotion, scrambleEl } from "@/lib/fx";

const BOOT = [
  "loading modules .......... OK",
  "compiling ideas .......... OK",
  "warming up shaders ....... OK",
  "rendering interface ...... OK",
];

export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const brandRef = useRef<HTMLSpanElement | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const ready = () => {
      if (fired.current) return;
      fired.current = true;
      markReady();
    };

    if (prefersReducedMotion() || sessionStorage.getItem("e42seen")) {
      requestAnimationFrame(() => setGone(true));
      ready();
      return;
    }
    sessionStorage.setItem("e42seen", "1");
    document.body.classList.add("lock");
    if (brandRef.current) scrambleEl(brandRef.current, "eval", 900);

    let p = 0;
    const tick = setInterval(() => {
      p = Math.min(p + 1.8 + Math.random() * 4, 100);
      setPct(Math.floor(p));
      setLines(BOOT.slice(0, Math.floor((p / 100) * BOOT.length)));
      if (p >= 100) {
        clearInterval(tick);
        setTimeout(() => {
          setDone(true);
          document.body.classList.remove("lock");
          setTimeout(ready, 300);
          setTimeout(() => setGone(true), 1100);
        }, 240);
      }
    }, 26);

    return () => {
      clearInterval(tick);
      document.body.classList.remove("lock");
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`loader ${done ? "done" : ""}`} aria-hidden="true">
      <div className="shutter top" />
      <div className="shutter bottom" />
      <div className="loader-ui">
        <div />
        <div className="loader-brand">
          <span ref={brandRef}>eval</span>
          <span className="acc">42</span>_
        </div>
        <div className="loader-foot">
          <div className="boot">
            <div>$ eval(42)</div>
            {lines.map((l) => {
              const [head, tail] = l.split(/ (?=OK$)/);
              return (
                <div key={l}>
                  {head} <span className="ok">{tail}</span>
                </div>
              );
            })}
          </div>
          <div className="pct">{pct}</div>
        </div>
      </div>
    </div>
  );
}
