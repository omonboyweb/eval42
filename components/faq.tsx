"use client";

import { useState } from "react";

const FAQ_DATA = [
  {
    id: 1,
    question: "Infonex ekotizimi o'zi nima va u qanday ishlaydi?",
    answer:
      "Bu biznesingizning barcha bo'g'inlarini (savdo, ombor, xodimlar, ta'lim) bitta joydan boshqarish imkonini beruvchi yagona raqamli platforma. Har xil dasturlarni alohida ishlatish o'rniga, hamma jarayonni bitta xavfsiz tizimga jamlaymiz.",
  },
  {
    id: 2,
    question: "Tayyor shablon ishlatasizlarmi yoki noldan yoziladimi?",
    answer:
      "Biz har bir loyiha uchun maxsus (Custom) arxitektura quramiz. Tayyor shablonlar arzon bo'lsa-da, kelajakda biznesingiz o'sganida qotib qoladi. Bizning kodimiz esa millionlab tranzaksiyalarga bardosh bera oladigan va oson kengayadigan qilib yoziladi.",
  },
  {
    id: 3,
    question:
      "Ma'lumotlarimiz va mijozlar bazasi xavfsizligiga qanday kafolat berasiz?",
    answer:
      "Barcha ma'lumotlar E2EE (End-to-End Encryption) standartida shifrlanadi. Tizim avtorizatsiyasi daxlsiz bo'lib, serverlarimiz eng yuqori darajadagi himoyaga ega va muntazam kiber-auditdan o'tkaziladi.",
  },
  {
    id: 4,
    question: "Loyiha ishga tushgandan keyin texnik yordam bo'ladimi?",
    answer:
      "Albatta. Biz tizimni topshiribgina qolmay, SLA (Service Level Agreement) asosida 24/7 texnik monitoring va yordam ko'rsatamiz. Server barqarorligini nazorat qilib, biznesingiz bir soniya ham to'xtab qolmasligini ta'minlaymiz.",
  },
  {
    id: 5,
    question:
      "Boshqa tizimlardagi (masalan, 1C) ma'lumotlarni ko'chira olasizlarmi?",
    answer:
      "Ha, bizning muhandislar har qanday eski tizimdagi ma'lumotlarni yo'qotishlarsiz, xavfsiz tarzda yangi platformaga migratsiya qilib berishadi. Shuningdek, Payme, Click kabi to'lov tizimlarini ham integratsiya qilamiz.",
  },
];

export const FaqSection = () => {
  const [openId, setOpenId] = useState<number>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? 0 : id));
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/2">
            <div className="sticky top-32">
              <h2 className="text-[32px] leading-[102%] font-light text-h1 tracking-[-0.02em]">
                Ko'p beriladigan savollar
              </h2>
              <p className="text-[28px] leading-[102%] font-light text-secondary tracking-[-0.03em] mb-8">
                Raqamli transformatsiya va bizning ekotizim haqida
                mijozlarimizni eng ko'p qiziqtirgan savollarga javoblar.
              </p>

              <div className="p-6 bg-slate-50 rounded-md md:rounded-2xl border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Javob topolmadingizmi?
                </h4>
                <p className="text-sm text-slate-500 mb-5">
                  Bizning mutaxassislarimiz loyihangizni bepul tahlil qilib
                  berishga tayyor.
                </p>
                <button className="w-full rounded-md font-medium text-sm px-6 py-3 bg-white text-slate-900 border border-slate-200 transition-all hover:border-blue-primary hover:text-blue-primary active:scale-95 shadow-sm">
                  Biz bilan bog'lanish
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-4">
            {FAQ_DATA.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  onClick={() => toggleFaq(faq.id)}
                  className={`group cursor-pointer rounded-md md:rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-blue-primary/20 shadow-[0_10px_40px_rgba(99,91,255,0.08)]"
                      : "bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex justify-between items-center p-4 md:p-6">
                    <h3
                      className={`text-lg md:text-[20px] font-medium pr-8 transition-colors ${
                        isOpen
                          ? "text-blue-primary"
                          : "text-slate-800 group-hover:text-blue-primary"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 ${
                        isOpen
                          ? "bg-blue-primary/10 rotate-180"
                          : "bg-slate-100 group-hover:bg-blue-50"
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={`transition-colors ${isOpen ? "text-blue-primary" : "text-slate-500 group-hover:text-blue-primary"}`}
                      >
                        {isOpen ? (
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        ) : (
                          <>
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </>
                        )}
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 md:px-8 pb-6 md:pb-8 text-slate-600 text-[16px] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
