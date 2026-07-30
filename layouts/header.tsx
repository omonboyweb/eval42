"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { no: "01", label: "WORK", href: "#work" },
  { no: "02", label: "SERVICES", href: "#services" },
  { no: "03", label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="nav">
        <a className="logo" href="#top" data-hover>
          eval42<span className="blink">_</span>
        </a>
        <button
          className="menu-btn"
          data-hover
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </header>

      <nav id="menu" className={`menu ${open ? "open" : ""}`}>
        {LINKS.map((l) => (
          <a
            key={l.no}
            className="mlink"
            href={l.href}
            data-hover
            onClick={() => setOpen(false)}
          >
            <span>
              <span className="no">{l.no}</span>
              {l.label}
            </span>
          </a>
        ))}
        <div className="menu-meta">
          <a
            href="https://github.com/omonboyweb"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
          >
            GITHUB ↗
          </a>
          <a
            href="https://www.linkedin.com/in/omonbekxojamurodov/"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
          >
            LINKEDIN ↗
          </a>
          <a
            href="https://t.me/eval42"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
          >
            TELEGRAM ↗
          </a>
          <a
            href="/Omonbek_Frontend_Developer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
          >
            CV ↗
          </a>
          <span>TASHKENT, UZ</span>
        </div>
      </nav>
    </>
  );
}
