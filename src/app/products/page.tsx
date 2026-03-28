import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Nova Tech AI's suite of intelligent web applications. From AI photo restoration to memorial photo enhancement.",
};

const products = [
  {
    slug: "restore",
    name: "Restore.xyz",
    url: "restore.xyz",
    tagline: "Bring Old Photos Back to Life",
    description:
      "AI-powered photo restoration that repairs damaged, faded, scratched, and degraded photographs with stunning clarity. Transform precious memories into vibrant, high-definition keepsakes.",
    features: [
      "Old photo restoration",
      "Scratch & tear repair",
      "Face enhancement",
      "Color correction & colorization",
      "HD upscaling (up to 8x)",
      "Batch processing",
    ],
    platform: "Web Application",
    status: "Live",
    category: "Photo Technology",
    statusColor: "#4ade80",
  },
  {
    slug: "funeratphoto",
    name: "FuneratPhoto",
    url: "funeratphoto.com",
    tagline: "Honor Every Memory with Dignity",
    description:
      "A compassionate AI tool designed specifically to enhance memorial and funeral photographs. Purpose-built for families preserving their most irreplaceable moments.",
    features: [
      "Respectful portrait enhancement",
      "Background beautification",
      "Lighting & color correction",
      "Photo restoration",
      "High-resolution export",
      "Instant processing",
    ],
    platform: "Web Application",
    status: "Live",
    category: "Memorial Technology",
    statusColor: "#4ade80",
  },
];

const upcoming = [
  {
    name: "VoiceScript AI",
    description: "Real-time AI transcription and translation for meetings, interviews, and podcasts. Supports 50+ languages with speaker identification.",
    tags: ["Transcription", "Translation", "Audio AI"],
    eta: "Q3 2026",
  },
  {
    name: "PortraitGen",
    description: "Generate professional-quality portrait photos from casual selfies using generative AI. Perfect for LinkedIn, resumes, and social profiles.",
    tags: ["Portrait AI", "Generative", "Professional"],
    eta: "Q4 2026",
  },
  {
    name: "DocuMind",
    description: "AI-powered document intelligence ? extract, summarize, and analyze complex documents, contracts, and reports in seconds.",
    tags: ["Document AI", "Summarization", "Analysis"],
    eta: "2027",
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <p className="section-label mb-3">Products</p>
            <h1
              className="font-semibold tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", color: "#fff" }}
            >
              Intelligent tools, real impact
            </h1>
            <p style={{ color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>
              Every product we build starts with a real human need. We apply
              cutting-edge AI to solve problems that matter, with privacy and
              simplicity at the core.
            </p>
          </div>
        </ScrollReveal>

        {/* Active Products */}
        <div className="space-y-5 mb-24">
          {products.map((product, i) => (
            <ScrollReveal key={product.slug} variant="up" delay={i * 120}>
              <div className="card-glow rounded-2xl p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg"
                        style={{
                          background: "rgba(74,222,128,0.08)",
                          border: "1px solid rgba(74,222,128,0.2)",
                          fontSize: "0.6875rem",
                          color: product.statusColor,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: product.statusColor }}
                        />
                        {product.status}
                      </span>
                      <span
                        className="px-2.5 py-1 rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          fontSize: "0.6875rem",
                          color: "rgba(255,255,255,0.3)",
                        }}
                      >
                        {product.category}
                      </span>
                    </div>

                    <h2
                      className="font-semibold mb-1"
                      style={{ fontSize: "1.5rem", color: "#fff" }}
                    >
                      {product.name}
                    </h2>
                    <p
                      className="mb-4"
                      style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9375rem" }}
                    >
                      {product.tagline}
                    </p>
                    <p
                      className="leading-relaxed mb-8"
                      style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.875rem" }}
                    >
                      {product.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <Link href={`/products/${product.slug}`} className="btn-primary !py-3 !px-6">
                        Learn More
                      </Link>
                      <a
                        href={`https://${product.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary !py-3 !px-6"
                      >
                        Visit Site &#8599;
                      </a>
                    </div>
                  </div>

                  {/* Right */}
                  <div>
                    <p
                      className="uppercase mb-4"
                      style={{ fontSize: "0.5625rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)" }}
                    >
                      Key Features
                    </p>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span
                            className="w-1 h-1 rounded-full shrink-0"
                            style={{ background: "rgba(255,255,255,0.2)" }}
                          />
                          <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.38)" }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="pt-5"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <p
                        className="uppercase mb-2"
                        style={{ fontSize: "0.5625rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)" }}
                      >
                        Platform
                      </p>
                      <span
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          fontSize: "0.75rem",
                          color: "rgba(255,255,255,0.35)",
                        }}
                      >
                        &#127760; {product.platform}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Upcoming Products */}
        <ScrollReveal>
          <div className="mb-10">
            <div className="divider mb-10" />
            <div className="flex items-center gap-3 mb-2">
              <p className="section-label">Coming Soon</p>
              <span
                className="px-2 py-0.5 rounded"
                style={{
                  fontSize: "0.5625rem",
                  background: "rgba(96,165,250,0.08)",
                  border: "1px solid rgba(96,165,250,0.2)",
                  color: "#60a5fa",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                In Development
              </span>
            </div>
            <h2
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.75rem", color: "#fff" }}
            >
              More exciting products on the way
            </h2>
            <p
              className="mt-2"
              style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.25)" }}
            >
              We are constantly building. Here is a glimpse of what is coming next.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {upcoming.map((item, i) => (
            <ScrollReveal key={item.name} variant="scale" delay={i * 100}>
              <div
                className="card-glow rounded-xl p-6 h-full"
                style={{ opacity: 0.75 }}
              >
                {/* ETA badge */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="px-2 py-1 rounded-lg"
                    style={{
                      fontSize: "0.5625rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.25)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    ETA: {item.eta}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "1rem" }}>&#128274;</span>
                </div>

                <h3
                  className="font-semibold mb-2"
                  style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.0625rem" }}
                >
                  {item.name}
                </h3>
                <p
                  className="leading-relaxed mb-4"
                  style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.22)" }}
                >
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded"
                      style={{
                        fontSize: "0.5625rem",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.2)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Enterprise CTA */}
        <ScrollReveal variant="scale">
          <div
            className="card-glow rounded-2xl p-8 text-center relative overflow-hidden top-glow-line"
            style={{ position: "relative" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.03), transparent)",
              }}
            />
            <div className="relative z-10">
              <p className="section-label mb-3">Enterprise</p>
              <h3
                className="font-semibold mb-2"
                style={{ color: "#fff", fontSize: "1.25rem" }}
              >
                Interested in custom solutions or enterprise licensing?
              </h3>
              <p
                className="mb-6 max-w-md mx-auto"
                style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.25)" }}
              >
                We work with businesses and organizations to build tailored AI solutions.
              </p>
              <Link href="/contact" className="btn-primary btn-glow inline-flex">
                Contact Our Team
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
