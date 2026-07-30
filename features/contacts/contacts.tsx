"use client";

import { sendTelegramMessage } from "@/actions/telegram";
import { Reveal, SplitTitle } from "@/lib/fx";
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
    <label className="cf-field">
      <span className="cf-label">{label}</span>
      {children}
      {error && <span className="cf-err">{error}</span>}
    </label>
  );
}

const Contacts = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [honeypot, setHoneypot] = useState("");

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

    // Honeypot: bots fill hidden fields, humans never see or touch this one.
    if (honeypot) {
      setSent(true);
      return;
    }

    setLoading(true);
    setSubmitError(false);
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
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="cf-wrap" id="contact">
      <Reveal>
        <span className="sec-tag">03 / CONTACT</span>
      </Reveal>
      <div className="cf-grid">
        <div className="cf-intro">
          <SplitTitle
            className="cf-title"
            lines={["START THE", "PROJECT."]}
          />
          <p className="cf-lede">
            A properly selected technological architecture is the foundation
            of a product&apos;s success.
          </p>
        </div>

        <Reveal className="cf-panel">
          {sent ? (
            <div className="cf-sent">
              <div className="cf-sent-icon">✓</div>
              <h3>Request sent!</h3>
              <p>I will review your project and contact you soon.</p>
            </div>
          ) : (
            <>
              <div className="cf-steps">
                {STEPS.map((s) => {
                  const isActive = step >= s.id;
                  return (
                    <div
                      key={s.id}
                      className={`cf-step ${isActive ? "active" : ""}`}
                    >
                      <div className="cf-step-label">
                        <i />
                        <span>{s.label}</span>
                      </div>
                      <div className="cf-step-bar" />
                    </div>
                  );
                })}
              </div>

              <form
                onSubmit={
                  step === 3 ? handleSubmit : (e) => e.preventDefault()
                }
                className="cf-form"
              >
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="cf-honeypot"
                />
                <div className="cf-step-body">
                  {step === 1 && (
                    <div className="cf-fields">
                      <div className="cf-step-head">
                        <h3>How can I contact you?</h3>
                        <p>I only need the most essential communication details.</p>
                      </div>
                      <InputField label="Full name" error={errors.name}>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={errors.name ? "err" : ""}
                        />
                      </InputField>
                      <InputField label="Phone number" error={errors.phone}>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+998 (00) 000-00-00"
                          className={errors.phone ? "err" : ""}
                        />
                      </InputField>
                      <InputField label="Email address" error={errors.email}>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="example@gmail.com"
                          className={errors.email ? "err" : ""}
                        />
                      </InputField>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="cf-fields">
                      <div className="cf-step-head">
                        <h3>Company and Position</h3>
                        <p>A brief context to assess the scope.</p>
                      </div>
                      <InputField label="Company name" error={errors.company}>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Eval42, LLC (Optional)"
                          className={errors.company ? "err" : ""}
                        />
                      </InputField>
                      <InputField label="Your role" error={errors.role}>
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          placeholder="CEO, Founder, Product Manager..."
                          className={errors.role ? "err" : ""}
                        />
                      </InputField>
                    </div>
                  )}
                  {step === 3 && (
                    <div className="cf-fields">
                      <div className="cf-step-head">
                        <h3>Project details</h3>
                        <p>Briefly describe what you want to build.</p>
                      </div>
                      <InputField label="Message" error={errors.message}>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Ecosystem, SaaS Dashboard, Web3 Platform..."
                          className={errors.message ? "err" : ""}
                        />
                      </InputField>
                    </div>
                  )}
                </div>
                {submitError && (
                  <p className="cf-submit-err">
                    Something went wrong while sending your request. Please
                    try again or reach out on Telegram.
                  </p>
                )}
                <div className="cf-actions">
                  {step > 1 && (
                    <button type="button" className="cf-back" onClick={handlePrev}>
                      Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button type="button" className="cf-next" onClick={handleNext}>
                      Continue
                    </button>
                  ) : (
                    <button type="submit" className="cf-submit" disabled={loading}>
                      {loading ? "Sending..." : "Send request"}
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default Contacts;
