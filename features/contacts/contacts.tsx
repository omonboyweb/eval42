"use client";

import React, { useState } from "react";

const STEPS = [
  { id: 1, label: "Aloqa" },
  { id: 2, label: "Kompaniya" },
  { id: 3, label: "Loyiha" },
];

const Contacts = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mijoz ma'lumotlari:", formData);
    alert("So'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz!");
    setStep(1);
    setFormData({ phone: "", email: "", company: "", role: "", message: "" });
  };

  return (
    <section className="bg-bg border-y border-slate-100">
      <div className="container mx-auto px-4 py-20 lg:py-32 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="flex flex-col items-start lg:w-1/2 pt-4">
          <h2 className="text-[36px] leading-[119%] font-light text-h1 tracking-[-0.03em]">
            Keling, loyihangizni yangi bosqichga olib chiqamiz.
          </h2>
          <p className="text-[28px] leading-[119%] font-light text-description tracking-[-0.02em] mt-6">
            To‘g‘ri texnologik yechimni tanlash — muvaffaqiyatning yarmi.
            Bizning jamoamiz loyihangiz tahlili va uni amalga oshirishda sizga
            eng yaqin hamkor bo‘lishga tayyor.
          </p>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="bg-white rounded-2xl md:rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 p-8 md:p-12 transition-all min-h-[420px] flex flex-col">
            <div className="flex gap-4 mb-12">
              {STEPS.map((s) => {
                const isActive = step >= s.id;
                return (
                  <div key={s.id} className="flex-1 flex flex-col gap-2.5">
                    <div
                      className={`flex items-center gap-2 text-[13px] font-semibold transition-colors duration-300 ${
                        isActive ? "text-[#635BFF]" : "text-slate-400"
                      }`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full border-[2px] transition-colors duration-300 ${
                          isActive
                            ? "border-[#635BFF] bg-white"
                            : "border-slate-300 bg-transparent"
                        }`}
                      />
                      <span className="block">{s.label}</span>
                    </div>
                    <div
                      className={`h-[3px] w-full rounded-full transition-colors duration-500 ${
                        isActive ? "bg-[#635BFF]" : "bg-slate-200"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            <form
              onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                {step === 1 && (
                  <div className="flex flex-col gap-8">
                    <div>
                      <h3 className="text-[24px] font-semibold text-slate-900 tracking-tight mb-2">
                        Siz bilan qanday bog'lanamiz?
                      </h3>
                      <p className="text-[15px] text-slate-500">
                        Bizga faqat eng muhim aloqa vositalari kerak.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                        <label className="text-[14px] text-slate-600 font-medium sm:w-1/3">
                          Telefon raqam
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+998 (00) 000-00-00"
                          className="sm:w-2/3 bg-slate-50 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-[#635BFF]/30 focus:ring-4 focus:ring-[#635BFF]/10 rounded-lg px-4 py-3 text-[14px] text-slate-800 transition-all outline-none"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                        <label className="text-[14px] text-slate-600 font-medium sm:w-1/3">
                          Pochta manzili
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="namuna@kompaniya.uz"
                          className="sm:w-2/3 bg-slate-50 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-[#635BFF]/30 focus:ring-4 focus:ring-[#635BFF]/10 rounded-lg px-4 py-3 text-[14px] text-slate-800 transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div>
                      <h3 className="text-[24px] font-semibold text-slate-900 tracking-tight mb-2">
                        Biznesingiz haqida
                      </h3>
                      <p className="text-[15px] text-slate-500">
                        Bu bizga tizim arxitekturasini aniq sizga moslashda
                        yordam beradi.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                        <label className="text-[14px] text-slate-600 font-medium sm:w-1/3">
                          Kompaniya nomi
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Masalan: Infonex MChJ"
                          className="sm:w-2/3 bg-slate-50 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-[#635BFF]/30 focus:ring-4 focus:ring-[#635BFF]/10 rounded-lg px-4 py-3 text-[14px] text-slate-800 transition-all outline-none"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                        <label className="text-[14px] text-slate-600 font-medium sm:w-1/3">
                          Lavozimingiz
                        </label>
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          placeholder="Masalan: Direktor, Menejer"
                          className="sm:w-2/3 bg-slate-50 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-[#635BFF]/30 focus:ring-4 focus:ring-[#635BFF]/10 rounded-lg px-4 py-3 text-[14px] text-slate-800 transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div>
                      <h3 className="text-[24px] font-semibold text-slate-900 tracking-tight mb-2">
                        Loyiha tafsilotlari
                      </h3>
                      <p className="text-[15px] text-slate-500">
                        Qanday tizim qurmoqchi ekanligingizni qisqacha ta'riflab
                        bering.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                      <label className="text-[14px] text-slate-600 font-medium sm:w-1/3 pt-3">
                        Xabar
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Loyihadan kutayotgan maqsadlaringiz..."
                        className="sm:w-2/3 bg-slate-50 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-[#635BFF]/30 focus:ring-4 focus:ring-[#635BFF]/10 rounded-lg px-4 py-3 text-[14px] text-slate-800 transition-all outline-none resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-3 mt-10">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="text-[14px] font-semibold text-slate-500 hover:text-slate-800 px-4 py-2.5 transition-colors"
                  >
                    Orqaga
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#635BFF] text-white text-[14px] font-medium px-7 py-2.5 rounded-full hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-[#635BFF]/20"
                  >
                    Davom etish
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-[#0F172A] text-white text-[14px] font-medium px-7 py-2.5 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-md shadow-slate-900/20"
                  >
                    So'rovni yuborish
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
