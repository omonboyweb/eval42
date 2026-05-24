"use client";

import { sendTelegramMessage } from "@/actions/telegram";
import React, { useState } from "react";

const STEPS = [
  { id: 1, label: "Contact" },
  { id: 2, label: "Company" },
  { id: 3, label: "Project" },
];

type FormData = {
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

function validateStep(step: number, data: FormData): Errors {
  const errors: Errors = {};

  if (step === 1) {
    if (!data.name.trim()) errors.name = "Full name is required.";

    if (!data.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(data.phone)) {
      errors.phone = "Invalid phone format.";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email format.";
    }
  }

  if (step === 2) {
    if (!data.role.trim()) errors.role = "Role is required.";
  }

  if (step === 3) {
    if (!data.message.trim()) errors.message = "Message is required.";
    else if (data.message.trim().length < 7)
      errors.message = "Please enter at least 10 characters.";
  }

  return errors;
}

function InputField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
      <label className="text-[14px] text-slate-600 font-medium sm:w-1/3 pt-3">
        {label}
      </label>
      <div className="sm:w-2/3 flex flex-col gap-1">
        {children}
        {error && <p className="text-[12px] text-red-500">{error}</p>}
      </div>
    </div>
  );
}

const inputClass =
  "w-full bg-slate-50 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-[#635BFF]/30 focus:ring-4 focus:ring-[#635BFF]/10 rounded-lg px-4 py-3 text-[14px] text-slate-800 transition-all outline-none";
const errorInputClass =
  "w-full bg-slate-50 border border-red-300 focus:ring-4 focus:ring-red-100 rounded-lg px-4 py-3 text-[14px] text-slate-800 transition-all outline-none";

const Contacts = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    const stepErrors = validateStep(step, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep(3, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setLoading(true);
    try {
      await sendTelegramMessage(formData);
      setSent(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        role: "",
        message: "",
      });
      setTimeout(() => {
        setSent(false);
        setStep(1);
      }, 4000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 py-20 lg:py-32 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="flex flex-col items-start lg:w-1/2 pt-4">
          <h2 className="text-[36px] leading-[119%] font-light text-slate-900 tracking-[-0.03em]">
            Let's build your idea together.
          </h2>
          <p className="text-[28px] leading-[119%] font-light text-slate-500 tracking-[-0.02em] mt-6">
            A properly selected technological architecture is the foundation of
            a product's success.
          </p>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="bg-white rounded-2xl md:rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 p-8 md:p-12 transition-all min-h-[420px] flex flex-col">
            {sent ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
                  ✅
                </div>
                <h3 className="text-[22px] font-semibold text-slate-900">
                  Request sent!
                </h3>
                <p className="text-slate-500 text-[15px]">
                  I will review your project and contact you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="flex gap-4 mb-12">
                  {STEPS.map((s) => {
                    const isActive = step >= s.id;
                    return (
                      <div key={s.id} className="flex-1 flex flex-col gap-2.5">
                        <div
                          className={`flex items-center gap-2 text-[13px] font-semibold transition-colors duration-300 ${isActive ? "text-[#635BFF]" : "text-slate-400"}`}
                        >
                          <div
                            className={`w-2.5 h-2.5 rounded-full border-2 transition-colors duration-300 ${isActive ? "border-[#635BFF] bg-[#635BFF]" : "border-slate-300 bg-transparent"}`}
                          />
                          <span>{s.label}</span>
                        </div>
                        <div
                          className={`h-[3px] w-full rounded-full transition-colors duration-500 ${isActive ? "bg-[#635BFF]" : "bg-slate-200"}`}
                        />
                      </div>
                    );
                  })}
                </div>

                <form
                  onSubmit={
                    step === 3 ? handleSubmit : (e) => e.preventDefault()
                  }
                  className="flex-1 flex flex-col justify-between"
                >
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    {step === 1 && (
                      <div className="flex flex-col gap-8">
                        <div>
                          <h3 className="text-[24px] font-semibold text-slate-900 tracking-tight mb-2">
                            How can I contact you?
                          </h3>
                          <p className="text-[15px] text-slate-500">
                            I only need the most essential communication
                            details.
                          </p>
                        </div>
                        <div className="flex flex-col gap-4">
                          <InputField label="Full name" error={errors.name}>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className={
                                errors.name ? errorInputClass : inputClass
                              }
                            />
                          </InputField>
                          <InputField label="Phone number" error={errors.phone}>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+998 (00) 000-00-00"
                              className={
                                errors.phone ? errorInputClass : inputClass
                              }
                            />
                          </InputField>
                          <InputField
                            label="Email address"
                            error={errors.email}
                          >
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="example@gmail.com"
                              className={
                                errors.email ? errorInputClass : inputClass
                              }
                            />
                          </InputField>
                        </div>
                      </div>
                    )}
                    {step === 2 && (
                      <div className="flex flex-col gap-8">
                        <div>
                          <h3 className="text-[24px] font-semibold text-slate-900 tracking-tight mb-2">
                            Company and Position
                          </h3>
                          <p className="text-[15px] text-slate-500">
                            A brief context to assess the scope.
                          </p>
                        </div>
                        <div className="flex flex-col gap-4">
                          <InputField
                            label="Company name"
                            error={errors.company}
                          >
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Eval42, LLC (Optional)"
                              className={
                                errors.company ? errorInputClass : inputClass
                              }
                            />
                          </InputField>
                          <InputField label="Your role" error={errors.role}>
                            <input
                              type="text"
                              name="role"
                              value={formData.role}
                              onChange={handleChange}
                              placeholder="CEO, Founder, Product Manager..."
                              className={
                                errors.role ? errorInputClass : inputClass
                              }
                            />
                          </InputField>
                        </div>
                      </div>
                    )}
                    {step === 3 && (
                      <div className="flex flex-col gap-8">
                        <div>
                          <h3 className="text-[24px] font-semibold text-slate-900 tracking-tight mb-2">
                            Project details
                          </h3>
                          <p className="text-[15px] text-slate-500">
                            Briefly describe what you want to build.
                          </p>
                        </div>
                        <InputField label="Message" error={errors.message}>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Ecosystem, SaaS Dashboard, Web3 Platform..."
                            className={`resize-none ${errors.message ? errorInputClass : inputClass}`}
                          />
                        </InputField>
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
                        Back
                      </button>
                    )}
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-[#635BFF] text-white text-[14px] font-medium px-7 py-2.5 rounded-full hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-[#635BFF]/20"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#0F172A] disabled:opacity-60 text-white text-[14px] font-medium px-7 py-2.5 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-md shadow-slate-900/20"
                      >
                        {loading ? "Sending..." : "Send request"}
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
