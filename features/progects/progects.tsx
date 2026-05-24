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
    title: "HalalHub — A digital online system for the food delivery market",
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
    title: "Infodeck — Education project that includes all educational centers",
    banner: "/infodesk.png",
    link: "#",
    stats: { countries: "UZB", users: "10K+", monitoring: "24/7" },
  },
  {
    id: "next-project-2",
    logo: "/hooks.png",
    title:
      "Homex — Construction, repair and online market project for craftsmen",
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
          From ideas to finished products at production level.
        </h2>
        <p className="text-[18px] leading-[140%] md:px-4 tarcking-[-0.02em] text-gray-800/70  font-light md:w-[45%]">
          The digital platforms I develop and optimize provide a seamless
          interface for users and a stable and scalable infrastructure for
          businesses.
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
                      View application
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
                        <span className="text-slate-400">Active users:</span>
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
                      View application
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
          Achieve results faster with the right architecture and experience.
        </h2>
        <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex flex-col">
            <div className="border border-border-secondary w-fit p-2.75 rounded-sm bg-white/50">
              <NonameIcons />
            </div>
            <h3 className="text-base font-medium leading-[138%] tracking-[-0.03em] text-menu mt-4">
              Technical Consultation
            </h3>
            <p className="font-light text-base leading-[140%] tracking-[-0.03em] text-text-secondary mt-2">
              Tips for properly configuring the Next.js ecosystem for new
              projects, building an architectural strategy, and migrating legacy
              codebases to a modern stack without errors. <br />
              <span className="text-blue-primary text-sm font-medium hover:underline cursor-pointer transition-all">
                Talking about the project
              </span>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="border border-border-secondary w-fit p-2.75 rounded-sm bg-white/50">
              <ManyUsers />
            </div>
            <h3 className="text-base font-medium leading-[138%] tracking-[-0.03em] text-menu mt-4">
              Productivity and Code Audit
            </h3>
            <p className="font-light text-base leading-[140%] tracking-[-0.03em] text-text-secondary mt-2">
              Deeply analyze your existing web applications, optimize Core Web
              Vitals metrics, identify the causes of slow loading and maximize
              site speed.
              <br />{" "}
              <span className="text-blue-primary font-medium text-sm hover:underline cursor-pointer transition-all">
                Order an audit
              </span>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="border border-border-secondary w-fit p-2.75 rounded-sm bg-white/50">
              <HelpingIcons />
            </div>
            <h3 className="text-base font-medium leading-[138%] tracking-[-0.03em] text-menu mt-4">
              Client-Side Security
            </h3>
            <p className="font-light text-base leading-[140%] tracking-[-0.03em] text-text-secondary mt-2">
              Check the security posture of a web application. Store tokens
              securely in HttpOnly cookies, privacy-first and eliminate XSS/CSRF
              vulnerabilities.
              <br />
              <span className="text-blue-primary font-medium text-sm hover:underline cursor-pointer transition-all">
                Security check
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
