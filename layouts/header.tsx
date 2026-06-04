"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu, FileText, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80"
            : "bg-white/80 backdrop-blur-sm border-b border-gray-100",
        ].join(" ")}
      >
        <div className="max-w-300 mx-auto border-x px-4">
          <div className="flex h-16 items-center justify-between gap-8">
            <Link
              href="/"
              className="shrink-0 text-[22px] font-medium tracking-tight text-gray-950 hover:opacity-70 transition-opacity duration-200"
            >
              Eval42
            </Link>
            <nav className="hidden md:flex items-center gap-1 flex-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm text-gray-600 font-medium rounded-md
                             hover:text-gray-950 hover:bg-gray-50 transition-all duration-150
                             group"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <Link
                href="/Omonbek_Frontend_Developer_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600
                           rounded-md border border-gray-200 hover:border-gray-300 hover:text-gray-950
                           hover:bg-gray-50 transition-all duration-150"
              >
                <FileText size={14} strokeWidth={1.75} />
                CV
                <ArrowUpRight
                  size={12}
                  strokeWidth={2}
                  className="text-gray-400"
                />
              </Link>

              <a
                href="tel:+998884280937"
                type="button"
                className="px-4 py-2 text-sm font-medium text-white rounded-md
                           bg-blue-primary hover:bg-blue-primary/80 active:scale-[0.97]
                           transition-all duration-150 shadow-sm"
              >
                Contact
              </a>
            </div>
            <button
              type="button"
              aria-label="Menyuni ochish"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 -mr-1 rounded-md text-gray-600 hover:text-gray-950
                         hover:bg-gray-100 transition-colors duration-150"
            >
              <Menu size={20} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
        className={[
          "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden transition-all duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Asosiy menyu"
        className={[
          "fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white md:hidden",
          "flex flex-col shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-[22px] font-medium tracking-tight text-gray-950"
          >
            Eval42
          </Link>
          <button
            type="button"
            aria-label="Menyuni yopish"
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-1 rounded-md text-gray-500 hover:text-gray-950
                       hover:bg-gray-100 transition-colors duration-150"
          >
            <X size={20} strokeWidth={1.75} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5">
            {NAV_LINKS.map((link, i) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
                  className={[
                    "flex items-center px-3 py-3 text-[15px] font-medium text-gray-700 rounded-lg",
                    "hover:text-gray-950 hover:bg-gray-50 transition-all duration-150",
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4",
                    "transition-[opacity,transform] duration-300",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-5 py-5 border-t border-gray-100 space-y-2.5">
          <a
            href="/Omonbek_Frontend_Developer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm
                       font-medium text-gray-700 rounded-md border border-gray-200
                       hover:border-gray-300 hover:bg-gray-50 transition-all duration-150"
          >
            <FileText size={15} strokeWidth={1.75} />
            CV yuklab olish
            <ArrowUpRight size={13} strokeWidth={2} className="text-gray-400" />
          </a>

          <a
            href="tel:+998884280937"
            type="button"
            className="w-full flex justify-center px-4 py-2.5 text-sm font-medium text-white rounded-md
                        bg-blue-primary hover:bg-blue-primary/80 active:scale-[0.98]
                       transition-all duration-150 shadow-sm"
          >
            Men bilan bog&apos;lanish
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
