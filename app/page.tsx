import GreenCircle from "@/icons/greenCircle";
import PurpleCircle from "@/icons/purpleCircle";
import RedCircle from "@/icons/redCircle";
import Image from "next/image";

import img1 from "@/public/Atica.png";
import img2 from "@/public/Treva.png";
import img3 from "@/public/Stari.svg";
import img4 from "@/public/hooks.png";
import img5 from "@/public/Asgardia.png";
import img6 from "@/public/Circle.png";
import img7 from "@/public/Radiyal.png";
import img8 from "@/public/A Lab.png";
import img9 from "@/public/Code Lab.png";
import img10 from "@/public/Muszica.png";
import img11 from "@/public/Tower.png";
import img12 from "@/public/Earth.png";
import { ServicesBentoGrid } from "@/features/services/service";
import { ProjectsAccordion } from "@/features/progects/progects";
import { FaqSection } from "@/components/faq";
import Contacts from "@/features/contacts/contacts";

const PARTNER_LOGOS = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 md:-top-10 md:left-50 w-70 md:w-200 md:h-200 rounded-full blur-[60px] md:blur-[100px] opacity-10">
          <PurpleCircle className="w-full h-full" />
        </div>
        <div className="absolute top-10 right-20 md:-top-30 md:right-0 w-55 md:w-200 md:h-200 rounded-full blur-[60px] md:blur-[100px] opacity-[6%]">
          <RedCircle className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 left-0 md:top-40 md:right-10 w-70 md:w-200 md:h-200 rounded-full blur-[60px] md:blur-[100px] opacity-[8%]">
          <GreenCircle className="w-full h-full" />
        </div>
      </div>

      <section className="container mx-auto px-4 relative z-10">
        <div className="pt-20 md:pt-40 lg:ml-20 pb-20 md:pb-32 w-full max-w-3xl">
          <h1 className="font-semibold text-4xl md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.03em] text-h1">
            Kelajak texnologiyalari - bugungi{" "}
            <span className="text-blue-primary">biznesingiz</span> xizmatida.
          </h1>

          <p className="text-lg md:text-2xl leading-relaxed text-description mt-6 md:mt-8">
            2025-yildan buyon Infonex global standartlar asosida raqamli
            transformatsiyani amalga oshirib kelmoqda. Biz bilan
            avtomatlashtirish — bu shunchaki kod emas, bu sizning yangi
            darajadagi samaradorligingizdir.
          </p>
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto rounded-sm font-medium text-sm px-8 py-3.5 bg-blue-primary text-white border border-blue-primary transition-all hover:bg-blue-primary/90 hover:shadow-lg hover:shadow-blue-primary/20 active:scale-95">
              Loyiha boshlash
            </button>
            <button className="w-full sm:w-auto text-sm font-medium rounded-sm border border-[#D6D9FC] px-8 py-3.5 text-blue-primary bg-white/50 backdrop-blur-sm transition-all hover:bg-[#F3F4FE] hover:border-blue-primary active:scale-95">
              Demo ko'rish
            </button>
          </div>
        </div>
      </section>
      <section className="border-b border-border-line relative z-10">
        <div className="container mx-auto px-4 border-t border-border-line py-8 flex flex-wrap justify-center md:justify-between items-center gap-8">
          {PARTNER_LOGOS.map((logo, index) => (
            <div
              key={index}
              className="cursor-pointer transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={12}
                height={32}
                className="h-8 md:h-10 w-auto object-contain"
                priority={index < 5}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-bg">
        <ServicesBentoGrid />
      </section>
      <section className="border-y border-border-line bg-white">
        <div className="container mx-auto pt-20 md:pt-25 flex flex-col gap-12 md:gap-25">
          <h2 className="text-[28px] md:text-[32px] px-4 leading-[102%] font-light text-h1 tracking-[-0.02em] text-center md:text-left">
            Ishonch raqamlarda aks etadi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-4 border-y border-border-line py-10 md:py-20 px-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex flex-col justify-center gap-6 w-full mx-auto"
              >
                <h3 className="font-bold text-[40px] md:text-[48px] leading-[68%] tracking-[-0.02em] text-center text-menu">
                  150+
                </h3>
                <p className="font-light text-[16px] leading-[138%] text-center">
                  O'zbekiston va xalqaro bozordagi raqamli yechimlar
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg border-b border-border-line">
        <ProjectsAccordion />
      </section>
      <section className="border-b  border-border-line">
        <FaqSection />
      </section>
      <section>
        <Contacts />
      </section>
    </main>
  );
}
