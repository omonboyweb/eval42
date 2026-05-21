"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NonameIcons from "@/icons/nonameIcons";
import ManyUsers from "@/icons/mayUsers";
import HelpingIcons from "@/icons/helpingIcons";

const PROJECTS_DATA = [
  {
    id: "halalhub",
    logo: "/A Lab.png",
    title: "HalalHub — Oziq-ovqat yetkazib berish bozorini raqamlashtirish.",
    banner: "/halalhub.png",
    link: "https://wehalalhub.com",
    stats: {
      countries: "USA",
      users: "2K+",
      monitoring: "24/7",
    },
  },
  {
    id: "next-project-1",
    logo: "/Circle.png",
    title: "Infodeck — Barcha o'quv markazlarni ichiga jamlagan",
    banner: "/infodesk.png",
    link: "#",
    stats: { countries: "UZB", users: "10K+", monitoring: "12/5" },
  },
  {
    id: "next-project-2",
    logo: "/hooks.png",
    title: "Homex — Qurilish va ustachilik.",
    banner: "/homex.png",
    link: "#",
    stats: { countries: "UZB", users: "10K+", monitoring: "24/7" },
  },
];

export const ProjectsAccordion = () => {
  const [openId, setOpenId] = useState<string>(PROJECTS_DATA[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="container px-4 py-20">
      <div className="flex flex-col md:justify-between pb-10">
        <h2 className="text-[28px] md:text-[32px] md:px-4 leading-[102%] font-light text-h1 tracking-[-0.02em] text-left md:w-[50%]">
          Murakkab biznes jarayonlarini zamonaviy raqamli ekotizimga
          aylantiramiz.
        </h2>
        <p className="text-[18px] leading-[140%] md:px-4 tarcking-[-0.02em] text-secondary font-light md:w-[45%]">
          Fortune 100 ro'yxatiga kiruvchi kompaniyalarining 50 foizi o'z
          bizneslarini rivojlantirish uchun Stripe’dan foydalangan — xalqaro
          miqyosda kengayishdan tortib, mijozlar tajribasini qayta tasavvur
          qilishgacha.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {PROJECTS_DATA.map((project) => {
          const isOpen = openId === project.id;

          return (
            <div
              key={project.id}
              className={`border-b transition-colors duration-300 ${
                isOpen ? "border-transparent" : "border-slate-200"
              }`}
            >
              <button
                onClick={() => toggleItem(project.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between py-2.5 group text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-slate-100 shrink-0 relative overflow-hidden border border-slate-200">
                    <Image
                      src={project.logo}
                      alt="logo"
                      fill
                      className="object-contain p-2"
                    />
                    <div className="absolute inset-0 bg-emerald-500/10" />{" "}
                  </div>
                  <h3 className="text-[22px] font-light leading-[111%] tracking-[-0.03em]  text-menu pr-4">
                    {project.title}
                  </h3>
                </div>
                <div className="shrink-0 ml-4">
                  {isOpen ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="hidden sm:inline-flex px-6 py-2.5 rounded-md border border-slate-200 text-blue-primary font-medium text-sm hover:bg-slate-50 transition-colors"
                    >
                      Ilovani ko'rish
                    </Link>
                  ) : (
                    <div className="w-10 h-10 rounded-md bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
              <div
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mb-8"
                    : "grid-rows-[0fr] opacity-0 mb-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-6 pt-2">
                    <div
                      className="w-full relative rounded-sm overflow-hidden"
                      style={{ aspectRatio: "21/9" }}
                    >
                      <Image
                        src={project.banner}
                        alt={project.title}
                        fill
                        className="object-cover object-left"
                        priority={isOpen}
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm md:text-base text-slate-600 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Countries:</span>
                        <span className="font-medium text-slate-800">
                          {project.stats.countries}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">
                          Faol foydalanuvchilar:
                        </span>
                        <span className="font-medium text-slate-800">
                          {project.stats.users}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Monitoring:</span>
                        <span className="font-medium text-slate-800">
                          {project.stats.monitoring}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="sm:hidden w-full text-center px-6 py-3 mt-2 rounded-md border border-slate-200 text-blue-primary font-medium text-sm hover:bg-slate-50 transition-colors"
                    >
                      Ilovani ko'rish
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-44 mb-30">
        <h2 className="text-[28px] md:text-[32px] leading-[102%] font-light text-h1 tracking-[-0.02em] text-left md:w-[50%]">
          Tajribali ekspertlar yordamida natijaga tezroq erishing
        </h2>
        <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex flex-col">
            <div className="border border-border-secondary w-fit p-[11px] rounded-sm bg-white/50">
              <NonameIcons />
            </div>
            <h3 className="text-base font-medium leading-[138%] tracking-[-0.03em] text-menu mt-4">
              Professional xizmatlar
            </h3>
            <p className="font-light text-base leading-[140%] tracking-[-0.03em] text-text-secondary mt-2">
              Biznesingizni raqamlashtirish boʻyicha individual yoʻl xaritasini
              shakllantiring. Loyihani joriy qilish, murakkab integratsiyalar va
              tizimlarni migratsiya qilishda bizning mutaxassislarimizga
              tayanishingiz mumkin.{" "}
              <span className="text-blue-primary text-sm font-medium hover:underline cursor-pointer transition-all">
                Xizmatlarni ko'rish
              </span>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="border border-border-secondary w-fit p-[11px] rounded-sm bg-white/50">
              <ManyUsers />
            </div>
            <h3 className="text-base font-medium leading-[138%] tracking-[-0.03em] text-menu mt-4">
              Texnik monitoring
            </h3>
            <p className="font-light text-base leading-[140%] tracking-[-0.03em] text-text-secondary mt-2">
              Loyiha ishga tushgandan so'ng ham biz siz bilanmiz. Tizimlar
              barqarorligini 24/7 nazorat qilamiz va har qanday yuklamalarga
              bardosh beradigan server arxitekturasini ta'minlaymiz.{" "}
              <span className="text-blue-primary font-medium text-sm hover:underline cursor-pointer transition-all">
                Batafsil o'qish
              </span>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="border border-border-secondary w-fit p-[11px] rounded-sm bg-white/50">
              <HelpingIcons />
            </div>
            <h3 className="text-base font-medium leading-[138%] tracking-[-0.03em] text-menu mt-4">
              Kiberxavfsizlik auditi
            </h3>
            <p className="font-light text-base leading-[140%] tracking-[-0.03em] text-text-secondary mt-2">
              Platformangizdagi zaifliklarni aniqlash va ularni bartaraf etish
              bo'yicha to'liq audit. Ma'lumotlaringizni E2EE shifrlash va
              zamonaviy xavfsizlik standartlari asosida himoya qilamiz.{" "}
              <span className="text-blue-primary font-medium text-sm hover:underline cursor-pointer transition-all">
                Auditga yozilish
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
