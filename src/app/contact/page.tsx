import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nova Tech AI Limited. We are here to help.",
};

const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Headquarters",
    value: "Hong Kong SAR, China",
    href: null,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "win060787@gmail.com",
    href: "mailto:win060787@gmail.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 0 0 .09 1.18 2 2 0 0 1 2.11 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 00.7 2.81 2 2 0 0 1-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+852 5428 4935",
    href: "tel:+85254284935",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Business Hours",
    value: "Mon?Fri, 9:00?18:00 HKT",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="max-w-xl mb-16">
            <p className="section-label mb-3">Contact</p>
            <h1
              className="font-semibold tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", color: "#fff" }}
            >
              Let&rsquo;s start a conversation
            </h1>
            <p style={{ color: "rgba(255,255,255,0.28)", lineHeight: 1.7 }}>
              Whether you have a question, a partnership idea, or just want to say
              hello &mdash; we read every message and get back to you within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <ScrollReveal key={item.label} variant="left" delay={i * 80}>
                <div className="card-glow rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="uppercase mb-1"
                        style={{ fontSize: "0.5625rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)" }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-white transition-colors"
                          style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Response note */}
            <ScrollReveal delay={380}>
              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(74,222,128,0.04)",
                  border: "1px solid rgba(74,222,128,0.12)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#4ade80" }}
                  />
                  <p
                    className="uppercase"
                    style={{ fontSize: "0.5625rem", letterSpacing: "0.15em", color: "rgba(74,222,128,0.6)" }}
                  >
                    We Respond Fast
                  </p>
                </div>
                <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)", lineHeight: 1.65 }}>
                  Average response time is under 4 hours during business hours.
                  Urgent inquiries are handled within 1 hour.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <ScrollReveal className="lg:col-span-3" variant="up" delay={100}>
            <div className="card-glow rounded-2xl p-8">
              <h2
                className="font-semibold mb-6"
                style={{ color: "#fff", fontSize: "1.125rem" }}
              >
                Send a message
              </h2>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
