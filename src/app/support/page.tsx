import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Support Center",
  description:
    "Get help with Nova Tech AI products. Find answers in our FAQ, reach our support team, or explore documentation.",
};

const faqs = [
  {
    q: "What types of photos give the best restoration results?",
    a: "Photos with clear subjects and minimal extreme overexposure or full-black areas work best. Our AI can handle tears, scratches, fading, and water damage effectively.",
  },
  {
    q: "How long does photo processing take?",
    a: "Most photos are enhanced in under 30 seconds. Batch processing may take a few minutes depending on the number of images.",
  },
  {
    q: "Is my data secure and private?",
    a: "Yes. Photos are processed over encrypted connections and deleted within 24 hours of processing. We never use your photos for any purpose beyond your restoration request.",
  },
  {
    q: "What file formats are supported?",
    a: "We support JPEG, PNG, WEBP, TIFF, and BMP. Output files are provided in JPEG and PNG at the highest quality possible.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes ? all our products include a free trial with limited credits so you can experience the full quality before committing.",
  },
  {
    q: "Can I use the enhanced photos for commercial purposes?",
    a: "You retain full rights to all photos you upload and receive. Please ensure you have the appropriate rights to the original images before processing.",
  },
];

export default function SupportPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="max-w-xl mb-16">
            <p className="section-label mb-3">Support</p>
            <h1
              className="font-semibold tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", color: "#fff" }}
            >
              How can we help?
            </h1>
            <p style={{ color: "rgba(255,255,255,0.28)", lineHeight: 1.7 }}>
              Our team is ready to assist you. Browse the FAQ below or reach
              out directly ? we typically respond within a few hours.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact cards */}
        <ScrollReveal className="mb-16">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                title: "Email Support",
                detail: "win060787@gmail.com",
                cta: "Send Email",
                href: "mailto:win060787@gmail.com",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 0 0 3.07 9.81a19.79 19.79 0 0 1-3.07-8.61A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                  </svg>
                ),
                title: "Phone Support",
                detail: "+852 5428 4935",
                cta: "Call Now",
                href: "tel:+85254284935",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                ),
                title: "Contact Form",
                detail: "We reply within 24 h",
                cta: "Open Form",
                href: "/contact",
              },
            ].map((c) => (
              <div key={c.title} className="card-glow rounded-xl p-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {c.icon}
                </div>
                <h3
                  className="font-semibold mb-1"
                  style={{ color: "#fff", fontSize: "0.9375rem" }}
                >
                  {c.title}
                </h3>
                <p
                  className="mb-4"
                  style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)" }}
                >
                  {c.detail}
                </p>
                {c.href.startsWith("/") ? (
                  <Link href={c.href} className="btn-secondary !py-2 !px-4 !text-xs">
                    {c.cta}
                  </Link>
                ) : (
                  <a href={c.href} className="btn-secondary !py-2 !px-4 !text-xs">
                    {c.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal className="mb-16">
          <div className="divider mb-10" />
          <p className="section-label mb-3">FAQ</p>
          <h2
            className="font-semibold tracking-tight mb-8"
            style={{ color: "#fff", fontSize: "1.5rem" }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="card-glow rounded-xl p-6"
              >
                <h3
                  className="font-medium mb-3"
                  style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem" }}
                >
                  {item.q}
                </h3>
                <p
                  style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.28)", lineHeight: 1.7 }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Still need help */}
        <ScrollReveal variant="scale">
          <div
            className="card-glow rounded-2xl p-8 text-center relative overflow-hidden top-glow-line"
            style={{ position: "relative" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.025), transparent)",
              }}
            />
            <div className="relative z-10">
              <p className="section-label mb-3">Still Need Help?</p>
              <h3
                className="font-semibold mb-2"
                style={{ color: "#fff", fontSize: "1.25rem" }}
              >
                Can&rsquo;t find what you&rsquo;re looking for?
              </h3>
              <p
                className="mb-6 max-w-sm mx-auto"
                style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.25)" }}
              >
                Our team is available Monday through Friday and happy to help with any inquiry.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/contact" className="btn-primary btn-glow w-full sm:w-auto">
                  Contact Support
                </Link>
                <a
                  href="mailto:win060787@gmail.com"
                  className="btn-secondary w-full sm:w-auto"
                >
                  win060787@gmail.com
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
