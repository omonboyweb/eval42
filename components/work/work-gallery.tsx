"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Counter, clamp, useTilt } from "@/lib/fx";

type CaseStat = { value?: number; suffix?: string; text?: string; label: string };
type CaseData = {
  id: string;
  wm: string;
  file: string;
  where: string;
  title: string;
  desc: string;
  stats: CaseStat[];
  img: string;
  alt: string;
  mat: string;
  matLine: string;
  chip: React.ReactNode;
  link?: string;
};

const CASES: CaseData[] = [
  {
    id: "halalhub",
    wm: "HALALHUB",
    file: "case/01",
    where: "food delivery · USA",
    title: "HalalHub",
    desc: "A digital ordering system for the US halal food delivery market. Real-time order tracking, vendor dashboards and payments — built to stay fast under load.",
    stats: [
      { value: 2, suffix: "K+", label: "USERS" },
      { value: 24, suffix: "/7", label: "MONITORING" },
      { text: "USA", label: "MARKET" },
    ],
    img: "/halalhub.png",
    alt: "HalalHub mobile app — ordering, smart search and live courier tracking",
    mat: "#0c1d14",
    matLine: "rgba(72,187,120,.28)",
    chip: (
      <>
        LIVE ORDERS <b>1,284</b> ▲ 12%
      </>
    ),
    link: "https://wehalalhub.com",
  },
  {
    id: "infodeck",
    wm: "INFODECK",
    file: "case/02",
    where: "education · UZB",
    title: "Infodeck",
    desc: "An education platform connecting every learning center in one system — courses, schedules, payments and progress analytics for 10K+ students.",
    stats: [
      { value: 10, suffix: "K+", label: "USERS" },
      { value: 24, suffix: "/7", label: "MONITORING" },
      { text: "UZB", label: "MARKET" },
    ],
    img: "/infodesk.png",
    alt: "Infodeck dashboard — lessons schedule, rooms and finance analytics",
    mat: "#0c1526",
    matLine: "rgba(96,140,255,.28)",
    chip: (
      <>
        ACTIVE NOW <b>10K+ STUDENTS</b>
      </>
    ),
  },
  {
    id: "homex",
    wm: "HOMEX",
    file: "case/03",
    where: "marketplace · UZB",
    title: "Homex",
    desc: "A construction & repair marketplace matching craftsmen with clients — listings, escrow-style orders and reputation built into the product.",
    stats: [
      { value: 10, suffix: "K+", label: "USERS" },
      { value: 24, suffix: "/7", label: "MONITORING" },
      { text: "UZB", label: "MARKET" },
    ],
    img: "/homex.png",
    alt: "Homex — brand identity for the craftsmen marketplace",
    mat: "#221204",
    matLine: "rgba(255,140,60,.25)",
    chip: (
      <>
        PROS ONLINE <b>642</b>
      </>
    ),
  },
];

function Shot({ data }: { data: CaseData }) {
  const tiltRef = useTilt<HTMLElement>();
  const body = (
    <>
      <span className="shot-zoom">
        <Image
          className="shot-img"
          src={data.img}
          alt={data.alt}
          fill
          sizes="(max-width: 860px) 92vw, 42vw"
        />
      </span>
      <span className="chip-float">
        <span className="dot" />
        {data.chip}
      </span>
    </>
  );
  const style = {
    "--mat": data.mat,
    "--mat-line": data.matLine,
  } as React.CSSProperties;

  return data.link ? (
    <a
      ref={tiltRef as React.Ref<HTMLAnchorElement>}
      className="shot"
      style={style}
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      data-view
      aria-label={`${data.title} — visit live site`}
    >
      {body}
    </a>
  ) : (
    <div
      ref={tiltRef as React.Ref<HTMLDivElement>}
      className="shot"
      style={style}
      data-view
    >
      {body}
    </div>
  );
}

function CaseSlide({ data }: { data: CaseData }) {
  return (
    <div className="hslide">
      <div className="wm" aria-hidden="true">
        {data.wm}
      </div>
      <article className="case">
        <div className="case-meta">
          <div className="file">
            <b>{data.file}</b> — {data.where}
          </div>
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
          <div className="case-stats">
            {data.stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>
                  {s.text ?? <Counter to={s.value!} suffix={s.suffix} />}
                </b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          {data.link ? (
            <a className="visit-btn" href={data.link} target="_blank" rel="noopener noreferrer" data-hover>
              VISIT LIVE <span>↗</span>
            </a>
          ) : (
            <span className="visit-btn static">IN PRODUCTION</span>
          )}
        </div>
        <div className="case-visual">
          <Shot data={data} />
        </div>
      </article>
    </div>
  );
}

export default function WorkGallery() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const idxRef = useRef<HTMLElement | null>(null);
  const barRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const isMobile = () => innerWidth <= 860;
    const slides = [...track.querySelectorAll<HTMLElement>(".hslide")];
    let raf = 0;

    const size = () => {
      if (isMobile()) {
        wrap.style.height = "";
        return;
      }
      const extra = track.scrollWidth - innerWidth;
      wrap.style.height = `${extra + innerHeight}px`;
    };

    const update = () => {
      raf = 0;
      if (isMobile()) return;
      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - innerHeight;
      if (total <= 0 || rect.top > innerHeight || rect.bottom < 0) return;
      const prog = clamp(-rect.top / total, 0, 1);
      const extra = track.scrollWidth - innerWidth;
      track.style.transform = `translateX(${-prog * extra}px)`;
      if (idxRef.current) {
        idxRef.current.textContent =
          "0" + clamp(Math.round(prog * (slides.length - 1)), 1, slides.length - 1);
      }
      if (barRef.current) barRef.current.style.width = `${prog * 100}%`;

      const cx = innerWidth / 2;
      for (const sl of slides) {
        const r = sl.getBoundingClientRect();
        const d = (r.left + r.width / 2 - cx) / innerWidth;
        const inner = sl.querySelector<HTMLElement>(".case");
        if (inner) {
          const f = clamp(1 - Math.abs(d) * 0.55, 0, 1);
          inner.style.opacity = (0.4 + f * 0.6).toFixed(3);
          inner.style.transform = `scale(${(0.93 + f * 0.07).toFixed(4)})`;
        }
        const wm = sl.querySelector<HTMLElement>(".wm");
        if (wm) wm.style.transform = `translate(${(d * 140).toFixed(1)}px, -50%)`;
        sl.style.setProperty("--px", `${(d * 40).toFixed(1)}px`);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      size();
      onScroll();
    };

    size();
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onResize);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={wrapRef} className="hwrap" id="work">
      <div className="hsticky">
        <div ref={trackRef} className="htrack">
          <div className="hslide intro">
            <span className="sec-tag">01 / SELECTED WORK</span>
            <h2>
              PRODUCTION
              <br />
              SYSTEMS.
            </h2>
            <div className="hint">
              DRAG YOUR SCROLL — GALLERY MOVES <b>→</b>
            </div>
          </div>
          {CASES.map((c) => (
            <CaseSlide key={c.id} data={c} />
          ))}
        </div>
        <div className="hprog">
          CASE <b ref={idxRef}>01</b> / 0{CASES.length}
        </div>
        <div className="hbar">
          <i ref={barRef} />
        </div>
      </div>
    </section>
  );
}
