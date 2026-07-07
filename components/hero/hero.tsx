"use client";

import { useEffect, useRef, useState } from "react";
import FogCanvas from "./fog-canvas";
import {
  READY_EVENT,
  SplitText,
  finePointer,
  lerp,
  prefersReducedMotion,
  scrambleEl,
  useMagnet,
} from "@/lib/fx";

export default function Hero() {
  const [entered, setEntered] = useState(false);
  const [live, setLive] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const eyebrowRef = useRef<HTMLSpanElement | null>(null);
  const ctaRef = useMagnet<HTMLAnchorElement>();
  const ghostRef = useMagnet<HTMLAnchorElement>();

  // intro: wait for the preloader, then reveal
  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    const onReady = () => {
      setEntered(true);
      if (eyebrowRef.current) {
        scrambleEl(
          eyebrowRef.current,
          'eval(42) → "Omonbek Khujamurodov — Frontend Engineer"',
          1100,
        );
      }
      t1 = setTimeout(() => {
        titleRef.current
          ?.querySelectorAll<HTMLElement>(".ch")
          .forEach((s) => (s.style.transitionDelay = "0ms"));
        setLive(true);
      }, 1500);
    };
    window.addEventListener(READY_EVENT, onReady);
    return () => {
      window.removeEventListener(READY_EVENT, onReady);
      clearTimeout(t1);
    };
  }, []);

  // mouse parallax on the hero content
  useEffect(() => {
    const inner = innerRef.current;
    const section = sectionRef.current;
    if (!inner || !section || prefersReducedMotion() || !finePointer()) return;

    let tx = 0,
      ty = 0,
      x = 0,
      y = 0,
      raf = 0,
      visible = true;

    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / innerWidth - 0.5) * 22;
      ty = (e.clientY / innerHeight - 0.5) * 14;
    };
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      x = lerp(x, tx, 0.06);
      y = lerp(y, ty, 0.06);
      inner.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
    };
    const io = new IntersectionObserver(
      (en) => {
        visible = en[0].isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(section);
    addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero" id="top">
      <FogCanvas />
      <div ref={innerRef} className="hero-inner">
        <div className="eyebrow">
          <span className="prompt">~ $</span> <span ref={eyebrowRef} />
        </div>
        <h1
          ref={titleRef}
          className={`mega ${entered ? "in" : ""} ${live ? "live" : ""}`}
        >
          <span className="row">
            <span>
              <SplitText text="IDEAS," />
            </span>
          </span>
          <span className={`row oline ${live ? "live" : ""}`}>
            <span>
              <SplitText text="COMPILED." />
            </span>
          </span>
        </h1>
        <div className="hero-sub">
          <p>
            <b>Omonbek Khujamurodov</b> — frontend engineer crafting
            high-performance SaaS platforms, real-time dashboards and secure
            web ecosystems. Code that runs fast, reads clean and scales.
          </p>
          <div className="hero-cta">
            <a ref={ctaRef} className="btn" href="#contact" data-hover>
              Start a project <span className="arr">→</span>
            </a>
            <a ref={ghostRef} className="btn ghost" href="#work" data-hover>
              View work
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-hint">SCROLL</div>
    </section>
  );
}
