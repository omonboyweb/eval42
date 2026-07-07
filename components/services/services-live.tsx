"use client";

import { useEffect, useRef, useState } from "react";
import {
  Reveal,
  SplitTitle,
  countEl,
  useInView,
  useSpotlight,
} from "@/lib/fx";

const SERVICES = [
  {
    no: "/01",
    title: "SaaS & Dashboard Architecture",
    desc: "Multi-tenant control panels and CRM systems. Seamless interfaces for managing large amounts of data in real time.",
    chips: ["CRM / ERP", "MULTI-TENANT", "REAL-TIME DATA", "DESIGN SYSTEMS"],
    label: "dashboard.tsx",
  },
  {
    no: "/02",
    title: "Performance Engineering",
    desc: "Core Web Vitals in the green. Bundle-level optimization, streaming SSR, edge rendering — speed as a feature.",
    chips: ["CORE WEB VITALS", "STREAMING SSR", "EDGE RENDERING", "BUNDLE DIET"],
    label: "performance.audit",
  },
  {
    no: "/03",
    title: "Security-first Frontend",
    desc: "CSP, XSS hardening, safe auth flows. Interfaces that protect the people using them.",
    chips: ["CSP", "XSS HARDENING", "AUTH FLOWS", "AUDITS"],
    label: "security.scan",
  },
  {
    no: "/04",
    title: "Design Engineering",
    desc: "Motion systems, kinetic typography, WebGL moments — the layer that makes a product feel alive.",
    chips: ["GSAP / WEBGL", "KINETIC TYPE", "MICRO-INTERACTIONS"],
    label: "motion.config",
  },
];

function ServiceRow({
  svc,
  active,
  onActivate,
}: {
  svc: (typeof SERVICES)[number];
  active: boolean;
  onActivate: () => void;
}) {
  const { ref, onMouseMove } = useSpotlight<HTMLDivElement>();
  const [inViewRef, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={(el) => {
        ref.current = el;
        inViewRef.current = el;
      }}
      className={`svc-row reveal ${inView ? "in" : ""} ${active ? "active" : ""}`}
      onMouseMove={onMouseMove}
      onMouseEnter={onActivate}
      onClick={onActivate}
    >
      <span className="no">{svc.no}</span>
      <div>
        <h3>{svc.title}</h3>
        <p>{svc.desc}</p>
        <div className="svc-chips">
          {svc.chips.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
      <span className="go">→</span>
    </div>
  );
}

export default function ServicesLive() {
  const [active, setActive] = useState(0);
  const hoverRef = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const gaugeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (active === 1 && gaugeRef.current) countEl(gaugeRef.current, 98, "", 1500);
  }, [active]);

  // auto-cycle scenes while the section is on screen and not being explored
  useEffect(() => {
    const id = setInterval(() => {
      if (hoverRef.current) return;
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.72 && r.bottom > innerHeight * 0.35) {
        setActive((a) => (a + 1) % SERVICES.length);
      }
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="block"
      id="services"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <span className="sec-tag">02 / SERVICES</span>
      <SplitTitle
        className="sec-title"
        lines={["Simple interfaces", "for complex ideas."]}
      />

      <div className="svc-grid">
        <div className="svc">
          {SERVICES.map((s, i) => (
            <ServiceRow
              key={s.no}
              svc={s}
              active={active === i}
              onActivate={() => setActive(i)}
            />
          ))}
        </div>

        <Reveal className="svc-screen" aria-hidden="true">
          <div className="sbar">
            <i />
            <i />
            <i />
            <span className="sbar-label">{SERVICES[active].label}</span>
          </div>
          <div className="scenes">
            <div className={`scene ${active === 0 ? "active" : ""}`}>
              <div className="mock">
                <div className="row2">
                  <div className="cell">
                    <div className="label">TENANTS / LIVE</div>
                    <div className="big">
                      312<em>▲ 8%</em>
                    </div>
                  </div>
                  <div className="cell">
                    <div className="label">THROUGHPUT — 24H</div>
                    <svg viewBox="0 0 200 56" preserveAspectRatio="none">
                      <polyline
                        className="spark"
                        points="0,46 22,40 44,43 66,30 88,34 110,20 132,25 154,12 176,18 200,8"
                        fill="none"
                        stroke="#7c5cff"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="cell">
                  <div className="label">WORKSPACE LOAD</div>
                  <div className="line">
                    <i style={{ "--w": "84%" } as React.CSSProperties} />
                  </div>
                  <div className="line">
                    <i style={{ "--w": "61%" } as React.CSSProperties} />
                  </div>
                  <div className="line">
                    <i style={{ "--w": "73%" } as React.CSSProperties} />
                  </div>
                </div>
              </div>
            </div>

            <div className={`scene ${active === 1 ? "active" : ""}`}>
              <div className="gauge-wrap">
                <div style={{ position: "relative" }}>
                  <svg className="gauge" viewBox="0 0 140 140">
                    <circle className="track" cx="70" cy="70" r="54" />
                    <circle className="fill" cx="70" cy="70" r="54" />
                  </svg>
                  <div className="gauge-num" ref={gaugeRef}>
                    0
                  </div>
                </div>
                <div className="vitals fade-seq">
                  <div className="v">
                    LCP <b>0.8s</b> — good
                  </div>
                  <div className="v">
                    CLS <b>0.00</b> — stable
                  </div>
                  <div className="v">
                    TBT <b>40ms</b> — snappy
                  </div>
                  <div className="v">
                    LIGHTHOUSE <b>98 / 100</b>
                  </div>
                </div>
              </div>
            </div>

            <div className={`scene ${active === 2 ? "active" : ""}`}>
              <div className="term">
                <div className="tline">$ audit --frontend --deep</div>
                <div className="tline">
                  CSP ............... <b>strict-dynamic ✓</b>
                </div>
                <div className="tline">
                  XSS ............... <b>sanitized ✓</b>
                </div>
                <div className="tline">
                  AUTH .............. <b>httpOnly · sameSite ✓</b>
                </div>
                <div className="tline">
                  DEPS .............. <b>0 vulnerabilities ✓</b>
                </div>
                <div className="tline res">✓ SECURE — ship it.</div>
              </div>
              <div className="scanline" />
            </div>

            <div className={`scene ${active === 3 ? "active" : ""}`}>
              <svg className="mcurve" viewBox="0 0 300 150">
                <path className="cpath" d="M20,130 C80,130 100,20 280,20" />
                <circle r="5" fill="#7c5cff">
                  <animateMotion
                    dur="2.2s"
                    repeatCount="indefinite"
                    path="M20,130 C80,130 100,20 280,20"
                  />
                </circle>
              </svg>
              <div className="mword">
                <span>M</span>
                <span>O</span>
                <span>T</span>
                <span>I</span>
                <span>O</span>
                <span>N</span>
              </div>
              <div className="mlabel">
                cubic-bezier(<b>.19, 1, .22, 1</b>) — every move has intent
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
