import { DashboardWidget } from "@/components/crm";
import { LmsWidget } from "@/components/lms";
import GreenCircle from "@/icons/greenCircle";
import LinerIcons from "@/icons/linerIcons";
import PurpleCircle from "@/icons/purpleCircle";
import RedCircle from "@/icons/redCircle";
import Image from "next/image";

const BentoCard = ({
  className,
  children,
  dark = false,
}: {
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg p-2 lg:rounded-4xl border transition-all duration-500 hover:-translate-y-1 ${
        dark
          ? "bg-[#0A192F] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          : "bg-white border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
      } ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-blue-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
      {children}
    </div>
  );
};

export const ServicesBentoGrid = () => {
  return (
    <section className="bg-bg container mx-auto px-4 py-24">
      <div className="mb-16 md:text-left md:max-w-[60%]">
        <h2 className="text-[32px] leading-[102%] font-light text-h1 tracking-[-0.02em]">
          Simple interfaces for complex ideas
        </h2>
        <p className="text-[32px] leading-[102%] font-light text-gray-800/70 tracking-[-0.03em]">
          I don&apos;t just write code — I turn your project into a
          high-performance, pixel-perfect, and user-friendly digital product.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
        <BentoCard className="md:col-span-2 lg:col-span-4 min-h-120 flex flex-col p-6 md:p-8 overflow-hidden gap-4">
          <Image
            src="/279.webp"
            alt="ERP Background"
            fill
            className="object-cover object-left pointer-events-none z-0"
          />
          <div className="flex flex-col z-10">
            <div className="flex justify-between w-full items-center">
              <h3 className="text-2xl leading-[135%] font-semibold text-h1">
                SaaS & Dashboard Architecture
              </h3>
              <button className="rounded-sm font-medium text-sm w-10 h-10 bg-purple2 hover:bg-blue-primary hover:text-white border transition-all hover:shadow-lg hover:shadow-blue-primary/20 active:scale-95 text-blue-primary flex justify-center items-center">
                <LinerIcons className="text-inherit" />
              </button>
            </div>
            <p className="text-description text-[16px] leading-relaxed mt-4 max-w-[90%]">
              Multi-tenant complex control panels and CRM systems. Seamless
              interface for managing large amounts of data in real time
            </p>
          </div>
          <div className="overflow-hidden z-10 mt-auto">
            <DashboardWidget />
          </div>
        </BentoCard>

        <BentoCard className="md:col-span-1 lg:col-span-2 min-h-120 p-8 flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden! ">
            <div className="absolute -top-10 -left-10 w-50 h-50 md:w-62.5 md:h-62.5 rounded-full blur-[100px] opacity-30">
              <PurpleCircle className="w-full h-full" />
            </div>
            <div className="absolute top-20 -right-10 w-37.5 h-37.5 md:w-50 md:h-50 rounded-full blur-[100px] opacity-30">
              <RedCircle className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 left-10 w-45 h-45 md:w-55 md:h-55 rounded-full blur-[100px] opacity-30">
              <GreenCircle className="w-full h-full" />
            </div>
          </div>

          <div className="relative z-40 pointer-events-none w-full mb-4">
            <div className="flex justify-between items-center pointer-events-auto">
              <h3 className="text-2xl font-semibold text-h1 leading-[135%]">
                Product Engineering
              </h3>
              <button className="rounded-sm font-medium text-sm w-8 h-8 bg-purple2 hover:bg-blue-primary hover:text-white border transition-all hover:shadow-lg hover:shadow-blue-primary/20 active:scale-95 text-blue-primary flex justify-center items-center">
                <LinerIcons className="text-inherit w-3 h-4" />
              </button>
            </div>
            <p className="text-description text-[16px] leading-relaxed mt-4 pointer-events-auto">
              Interactive components that encourage user action, robust forms
              protected by Zod , and smooth animations.
            </p>
          </div>

          <div className="transition-all duration-300 z-40">
            <LmsWidget />
          </div>
        </BentoCard>
        <BentoCard
          dark
          className="md:col-span-1 lg:col-span-2 p-8 flex flex-col relative min-h-120 md:min-h-125"
        >
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute bottom-10 left-10 w-45 h-45 md:w-55 md:h-55 rounded-full blur-[100px] opacity-30">
              <GreenCircle className="w-full h-full" />
            </div>
            <div className="absolute top-20 -left-10 w-37.5 h-37.5 md:w-50 md:h-50 rounded-full blur-[100px] opacity-30">
              <RedCircle className="w-full h-full" />
            </div>
            <div className="absolute -top-10 -right-10 w-50 h-50 md:w-62.5 md:h-62.5 rounded-full blur-[100px] opacity-30">
              <PurpleCircle className="w-full h-full" />
            </div>
          </div>

          <div className="relative z-10 pb-[75%] sm:pb-[65%] md:pb-[75%] pointer-events-none">
            <div className="flex justify-between items-center pointer-events-auto">
              <h3 className="text-2xl leading-[135%] font-semibold text-white">
                Scalable Codebase
              </h3>
              <button className="rounded-sm font-medium text-sm w-8 h-8 bg-purple2 hover:bg-blue-primary hover:text-white border border-slate-700 transition-all hover:shadow-lg hover:shadow-blue-primary/20 active:scale-95 text-blue-primary flex justify-center items-center">
                <LinerIcons className="text-inherit w-3 h-4" />
              </button>
            </div>
            <p className="text-slate-400 text-[16px] leading-relaxed max-w-[88%] mt-2">
              Legacy-free, future-proof TypeScript architecture and secure
              Next.js middleware integrations.
            </p>
          </div>

          <div className="w-[95%] h-[65%] sm:h-[55%] md:h-[65%] bg-[#0B1528] rounded-tl-xl p-4 md:p-5 border-t border-l border-slate-700/50 font-mono shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)] overflow-hidden absolute bottom-0 right-0 group/code">
            <div className="flex gap-2 mb-4 sticky top-0 bg-[#0B1528] z-10 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm" />
            </div>
            <pre className="text-[10px] md:text-[11px] leading-[1.7] text-slate-300 overflow-y-auto h-full pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <code>
                <span className="text-slate-500"></span>
                <span className="text-purple-400">import</span> {"{"} Core,
                Security, Payment {"}"}{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-amber-300">
                  &apos;@infonex/enterprise&apos;
                </span>
                ;{"\n\n"}
                <span className="text-purple-400">async function</span>{" "}
                <span className="text-blue-400">deploySystem</span>(config:{" "}
                <span className="text-emerald-400">AppConfig</span>) {"{\n"}
                {"  "}
                <span className="text-slate-500">
                  {"// 1. Highload base\n"}
                </span>
                {"  "}
                <span className="text-purple-400">const</span> db ={" "}
                <span className="text-purple-400">await</span>{" "}
                <span className="text-emerald-400">Core</span>.
                <span className="text-blue-400">connect</span>({"{\n"}
                {"    "}mode:{" "}
                <span className="text-amber-300">
                  &apos;high-availability&apos;
                </span>
                ,{"\n"}
                {"    "}encryption:{" "}
                <span className="text-amber-300">&apos;E2EE&apos;</span>
                {"\n"}
                {"  }"});{"\n\n"}
                {"  "}
                <span className="text-slate-500">
                  {"// 2. Local fees and automatic tax\n"}
                </span>
                {"  "}
                <span className="text-purple-400">const</span> billing ={" "}
                <span className="text-purple-400">new</span>{" "}
                <span className="text-emerald-400">Payment</span>.
                <span className="text-blue-400">Gateway</span>({"{\n"}
                {"    "}providers: [
                <span className="text-amber-300">&apos;Stripe&apos;</span>,{" "}
                <span className="text-amber-300">
                  &apos;Bank of America&apos;
                </span>
                , <span className="text-amber-300">&apos;PayPal&apos;</span>],
                {"\n"}
                {"    "}currency:{" "}
                <span className="text-amber-300">&apos;USD&apos;</span>,{"\n"}
                {"    "}autoTaxCalculate:{" "}
                <span className="text-purple-400">true</span>,{" "}
                <span className="text-slate-500">{"// VAT calculation\n"}</span>
                {"  }"});{"\n\n"}
                {"  "}
                <span className="text-slate-500">
                  {"// 3. Security and Role Separation \n"}
                </span>
                {"  "}
                <span className="text-purple-400">const</span> auth ={" "}
                <span className="text-purple-400">new</span>{" "}
                <span className="text-emerald-400">Security</span>.
                <span className="text-blue-400">Guard</span>({"{\n"}
                {"    "}roles: [
                <span className="text-amber-300">&apos;Director&apos;</span>,{" "}
                <span className="text-amber-300">&apos;Manager&apos;</span>,{" "}
                <span className="text-amber-300">&apos;Accountant&apos;</span>],
                {"\n"}
                {"    "}mfa:{" "}
                <span className="text-amber-300">&apos;sms-auth&apos;</span>
                {"\n"}
                {"  }"});{"\n\n"}
                {"  "}console.<span className="text-blue-400">log</span>(
                <span className="text-amber-300">
                  `[Progect] The system has been successfully launched!`
                </span>
                );{"\n"}
                {"  "}
                <span className="text-purple-400">return</span> {"{"} status:{" "}
                <span className="text-amber-300">&quot;Online&quot;</span>,
                uptime:{" "}
                <span className="text-amber-300">&quot;99.99%&quot;</span> {"}"}
                ;{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </BentoCard>
        <BentoCard className="md:col-span-1 lg:col-span-2 p-8 min-h-120 md:min-h-125 flex flex-col overflow-hidden relative">
          <Image
            src="/rotated.webp"
            alt="Mobile App Background"
            fill
            priority
            className="object-cover object-top pointer-events-none z-0"
          />

          <div className="relative z-10">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl leading-[135%] font-semibold text-h1">
                Performance First
              </h3>
              <button className="rounded-sm font-medium w-8 h-8 bg-white/70 backdrop-blur-md hover:bg-blue-primary hover:text-white border border-white/50 transition-all hover:shadow-lg hover:shadow-blue-primary/20 active:scale-95 text-blue-primary flex justify-center items-center">
                <LinerIcons className="text-inherit w-3 h-4" />
              </button>
            </div>
            <p className="text-description leading-relaxed max-w-[85%] text-[16px] mt-2">
              Interfaces that load in seconds on any smartphone (LCP optimized).
              100% result in Core Web Vitals indicators.
            </p>
          </div>
          <div className="relative z-20 w-full h-full mt-4">
            <Image
              src="/iPhone 16.png"
              alt="iPhone App Preview"
              fill
              className="object-cover"
            />
          </div>
        </BentoCard>

        <BentoCard className="md:col-span-1 lg:col-span-2 p-8 relative flex flex-col min-h-120 md:min-h-125">
          <Image
            src="/kibr.png"
            alt="Cybersecurity Background"
            fill
            priority
            className="object-cover object-bottom pointer-events-none z-0"
          />

          <div className="flex justify-between items-center z-10">
            <h3 className="text-2xl leading-[135%] font-semibold text-h1">
              Security & Privacy
            </h3>
            <button className="rounded-sm font-medium text-sm w-8 h-8 bg-purple2 hover:bg-blue-primary hover:text-white border transition-all hover:shadow-lg hover:shadow-blue-primary/20 active:scale-95 text-blue-primary flex justify-center items-center">
              <LinerIcons className="text-inherit w-3 h-4" />
            </button>
          </div>
          <p className="text-description text-[16px] leading-relaxed max-w-[90%] z-10 mt-2">
            Privacy-first architecture. Securely storing tokens in HttpOnly
            cookies and fully protecting the client side from XSS/CSRF attacks.
          </p>
        </BentoCard>
      </div>
    </section>
  );
};
