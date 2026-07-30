"use client";

import { useRef } from "react";
import { Counter, Reveal, prefersReducedMotion } from "@/lib/fx";

const CHARS = "42eval{}<>/=+*!?#01";

export default function StatsBand() {
  const rainRef = useRef<HTMLCanvasElement | null>(null);
  const raining = useRef(false);

  const runRain = () => {
    const rain = rainRef.current;
    if (!rain || raining.current || prefersReducedMotion()) return;
    raining.current = true;

    const ctx = rain.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    rain.width = innerWidth * dpr;
    rain.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const fs = 16;
    const cols = Math.ceil(innerWidth / fs);
    const drops = Array.from({ length: cols }, () => -Math.random() * 40);
    rain.classList.add("on");
    const started = performance.now();

    const fall = (now: number) => {
      ctx.fillStyle = "rgba(6,8,15,.18)";
      ctx.fillRect(0, 0, innerWidth, innerHeight);
      ctx.font = `${fs}px monospace`;
      for (let i = 0; i < cols; i++) {
        ctx.fillStyle = Math.random() < 0.1 ? "#edf0f7" : "#7c5cff";
        ctx.fillText(
          CHARS[(Math.random() * CHARS.length) | 0],
          i * fs,
          drops[i] * fs,
        );
        drops[i] =
          drops[i] * fs > innerHeight && Math.random() > 0.975
            ? 0
            : drops[i] + 1;
      }
      if (now - started < 3800) requestAnimationFrame(fall);
      else {
        rain.classList.remove("on");
        setTimeout(() => {
          ctx.clearRect(0, 0, innerWidth, innerHeight);
          raining.current = false;
        }, 600);
      }
    };
    requestAnimationFrame(fall);
  };

  return (
    <>
      <canvas ref={rainRef} className="rain" aria-hidden="true" />
      <div className="band">
        <div className="band-inner">
          <Reveal className="num">
            <b>
              <Counter to={12} />
              <span className="suf">K+</span>
            </b>
            <span>USERS SERVED</span>
          </Reveal>
          <Reveal className="num">
            <b>
              <Counter to={3} />
              <span className="suf">×</span>
            </b>
            <span>LIVE PRODUCTS</span>
          </Reveal>
          <Reveal className="num">
            <b>
              <Counter to={99} />
              <span className="suf">.9%</span>
            </b>
            <span>ALWAYS ONLINE</span>
          </Reveal>
          <Reveal className="num egg" onClick={runRain} data-hover title="?">
            <b>
              <Counter to={42} />
            </b>
            <span>THE ANSWER</span>
          </Reveal>
        </div>
      </div>
    </>
  );
}
