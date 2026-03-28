"use client";

import { useState } from "react";

const subjects = [
  "General Inquiry",
  "Product Feedback",
  "Business Partnership",
  "Press & Media Inquiry",
  "Privacy Concern",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="p-8 bg-[#080808] border border-[#1a1a1a] rounded-xl text-center">
        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 9L7.5 12.5L14 6" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-white font-medium mb-2">Message Received</h3>
        <p className="text-[#444] text-sm">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-[#444] hover:text-white transition-colors underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-[#080808] border border-[#1a1a1a] rounded-xl space-y-5"
    >
      <div className="text-sm font-medium text-white mb-2">Send us a message</div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-[#444] mb-2" htmlFor="name">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-3 bg-[#111] border border-[#1a1a1a] rounded-xl text-sm text-white placeholder-[#333] focus:outline-none focus:border-[#333] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-[#444] mb-2" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full px-4 py-3 bg-[#111] border border-[#1a1a1a] rounded-xl text-sm text-white placeholder-[#333] focus:outline-none focus:border-[#333] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-[#444] mb-2" htmlFor="subject">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#111] border border-[#1a1a1a] rounded-xl text-sm text-white focus:outline-none focus:border-[#333] transition-colors appearance-none"
        >
          <option value="" disabled>
            Select a subject
          </option>
          {subjects.map((s) => (
            <option key={s} value={s} className="bg-[#111]">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-[#444] mb-2" htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help..."
          className="w-full px-4 py-3 bg-[#111] border border-[#1a1a1a] rounded-xl text-sm text-white placeholder-[#333] focus:outline-none focus:border-[#333] transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-xs">
          Something went wrong. Please email us directly at win060787@gmail.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3.5 bg-white text-[#000] text-sm font-semibold rounded-xl hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-[#333] text-center">
        We respond within 24 hours on business days.
      </p>
    </form>
  );
}
