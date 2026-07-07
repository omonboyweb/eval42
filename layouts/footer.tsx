"use client";

import { useEffect, useState } from "react";

const SOCIALS = [
  { label: "GITHUB", href: "https://github.com/omonboyweb" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/omonbekxojamurodov/" },
  { label: "TELEGRAM", href: "https://t.me/eval42" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/omonbek_khojamurodov/" },
];

export default function Footer() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Tashkent",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="site">
      <span>© {new Date().getFullYear()} eval42 — Tashkent, UZ</span>
      <span className="clock">
        LOCAL TIME <b suppressHydrationWarning>{time}</b> +05
      </span>
      <div className="soc">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
