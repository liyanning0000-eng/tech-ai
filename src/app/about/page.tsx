import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Nova Tech AI Limited is a Hong Kong-registered technology company founded in March 2026, specializing in AI-powered web applications for consumers worldwide.",
};

const timeline = [
  {
    date: "March 2026",
    title: "Company Founded",
    description:
      "Nova Tech AI Limited is incorporated in Hong Kong SAR, with a founding team committed to building intelligent, privacy-respecting web applications.",
  },
  {
    date: "March 2026",
    title: "Restore.xyz Launched",
    description:
      "Our flagship AI photo restoration product launches, enabling users to repair and enhance damaged or faded photographs in seconds.",
  },
  {
    date: "April 2026",
    title: "FuneralPhoto Launched",
    description:
      "Our compassionate memorial photo enhancement tool launches, purpose-built to help families preserve and honor their most irreplaceable memories.",
  },
  {
    date: "2026 Onwards",
    title: "Expanding the Portfolio",
    description:
      "We continue to research and develop new AI-powered tools, with a focus on privacy-first design, accessibility, and real-world impact.",
  },
];

const values = [
  {
    number: "01",
    title: "Integrity",
    description:
      "We say what we do and do what we say. From our privacy policies to our product roadmaps, transparency is non-negotiable.",
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "We invest continuously in research and development, bringing the most capable AI techniques to consumer-grade products.",
  },
  {
    number: "03",
    title: "Privacy",
    description:
      "User data is not our product. We architect our systems to collect only what is necessary and retain nothing beyond immediate need.",
  },
  {
    number: "04",
    title: "Accessibility",
    description:
      "Powerful technology should not require a technical background. We design for everyday people first.",
  },
];

const complianceBadges = [
  {
    label: "Hong Kong PDPO",
    description: "Personal Data (Privacy) Ordinance compliant",
  },
  {
    label: "GDPR Aware",
    description: "Designed with European data protection standards in mind",
  },
  {
    label: "CCPA Aligned",
    description: "California Consumer Privacy Act aligned practices",
  },
  {
    label: "Secure Web Platform",
    description: "Deployed as encrypted, HTTPS-only web applications",
  },
  {
    label: "Zero Data Retention",
    description: "User-submitted photos automatically deleted after processing",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <p className="section-label mb-4">About Us</p>
            <h1
              className="font-semibold tracking-tight leading-tight mb-6"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", color: "#fff" }}
            >
              Building intelligent technology
              <br />
              <span style={{ color: "rgba(255,255,255,0.2)" }}>for everyday people</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "1.0625rem", lineHeight: 1.75 }}>
              Nova Tech AI Limited is a Hong Kong-based technology company
              specializing in AI-powered web applications. We build tools that
              are smart, private, and genuinely useful.
            </p>
          </div>
        </ScrollReveal>

        {/* Company Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {[
            { label: "Founded", value: "March 2026" },
            { label: "Headquarters", value: "Hong Kong SAR" },
            { label: "Industry", value: "AI / Web Technology" },
            { label: "Market Focus", value: "Global (US Primary)" },
          ].map((item, i) => (
            <ScrollReveal key={item.label} variant="up" delay={i * 80}>
              <div className="card-glow p-6 rounded-xl">
                <div className="section-label mb-2">{item.label}</div>
                <div className="font-medium text-white">{item.value}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {[
            {
              label: "Our Mission",
              text: "To make state-of-the-art artificial intelligence accessible to everyone \u2014 through beautifully designed, privacy-respecting web applications that solve real problems.",
            },
            {
              label: "Our Vision",
              text: "A world where intelligent technology amplifies human experience \u2014 helping people preserve memories, connect with the past, and navigate life\u2019s most meaningful moments with greater clarity.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.label} variant="up" delay={i * 150}>
              <div className="card-glow p-8 rounded-xl h-full">
                <div className="section-label mb-4">{item.label}</div>
                <p
                  className="leading-relaxed font-light"
                  style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.0625rem" }}
                >
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Slogan */}
        <ScrollReveal className="mb-20">
          <div
            className="card-glow rounded-2xl p-10 text-center relative overflow-hidden top-glow-line"
            style={{ position: "relative" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.03), transparent)",
              }}
            />
            <p
              className="section-label mb-4"
              style={{ position: "relative" }}
            >
              Our Slogan
            </p>
            <p
              className="font-semibold tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.25))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                position: "relative",
              }}
            >
              &#29992; AI &#25913;&#21464;&#19968;&#20999;
            </p>
            <p
              className="mt-2"
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.18)",
                letterSpacing: "0.12em",
                position: "relative",
              }}
            >
              Change Everything With AI
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="mb-20">
          <ScrollReveal>
            <p className="section-label mb-10">Company Timeline</p>
          </ScrollReveal>
          <div className="relative">
            <div
              className="absolute left-3 top-0 bottom-0 w-px"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <ScrollReveal key={i} variant="left" delay={i * 100}>
                  <div className="pl-12 relative">
                    <div
                      className="absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "rgba(255,255,255,0.7)" }}
                      />
                    </div>
                    <div className="section-label mb-1">{item.date}</div>
                    <h3
                      className="font-medium mb-2"
                      style={{ color: "#fff" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.28)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <ScrollReveal>
            <p className="section-label mb-10">Our Values</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <ScrollReveal key={value.number} variant="up" delay={i * 100}>
                <div className="card-glow p-8 rounded-xl">
                  <div
                    className="font-light font-mono mb-4"
                    style={{ fontSize: "2rem", color: "rgba(255,255,255,0.06)" }}
                  >
                    {value.number}
                  </div>
                  <h3
                    className="font-semibold mb-3"
                    style={{ color: "#fff" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  >
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="mb-20">
          <ScrollReveal>
            <p className="section-label mb-6">Compliance &amp; Certifications</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceBadges.map((badge, i) => (
              <ScrollReveal key={badge.label} variant="scale" delay={i * 80}>
                <div className="card-glow flex items-start gap-3 p-5 rounded-xl">
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                    style={{ background: "#4ade80" }}
                  />
                  <div>
                    <div
                      className="text-sm font-medium mb-1"
                      style={{ color: "#fff" }}
                    >
                      {badge.label}
                    </div>
                    <div
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      {badge.description}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal variant="scale">
          <div
            className="card-glow p-10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <h3
                className="font-semibold mb-2"
                style={{ color: "#fff" }}
              >
                Get in touch with our team
              </h3>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.25)" }}>
                For business inquiries, partnerships, or press requests.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/support" className="btn-secondary">
                Support
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
