import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollReveal from "@/components/ScrollReveal";
import StatsCounter from "@/components/StatsCounter";
import StarTooltips from "@/components/StarTooltips";
import HeroContent from "@/components/HeroContent";

const stats = [
  { value: 50000, suffix: "+", label: "Users Served" },
  { value: 2, suffix: "", label: "Active Products" },
  { value: 4.8, suffix: "\u2605", label: "User Rating" },
  { value: 2026, suffix: "", label: "Founded" },
];

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L11 7H16L12 10.5L13.5 16L9 13L4.5 16L6 10.5L2 7H7L9 2Z"
          stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Privacy First",
    description: "Your data is never stored beyond what is needed. End-to-end encryption and automatic deletion policies are built into every product.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M6 9L8 11L12 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AI-Powered Core",
    description: "Every product is built on state-of-the-art machine learning models, delivering results that are accurate, fast, and continually improving.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M6 9H12M9 6V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Globally Compliant",
    description: "Fully compliant with GDPR, CCPA, and Hong Kong's Personal Data (Privacy) Ordinance, with transparent data handling across all services.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 9C3 5.7 5.7 3 9 3C12.3 3 15 5.7 15 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M3 13L5 11L7 13L5 15L3 13Z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
    title: "Built to Last",
    description: "Robust infrastructure with continuous updates, dedicated support, and a product roadmap focused on long-term reliability.",
  },
];

const products = [
  {
    slug: "restore",
    name: "Restore.xyz",
    tagline: "Bring Old Photos Back to Life",
    description: "AI-powered photo restoration that repairs damaged, faded, and scratched photographs with stunning clarity.",
    tags: ["Photo Restoration", "AI Enhancement", "HD Upscaling"],
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect width="36" height="36" rx="9" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.08"/>
        <path d="M10 26L14 18L18 22L22 14L26 26H10Z" stroke="white" strokeOpacity="0.5" strokeWidth="1.2" strokeLinejoin="round"/>
        <circle cx="13" cy="13" r="2.5" stroke="white" strokeOpacity="0.5" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    slug: "funeratphoto",
    name: "FuneratPhoto",
    tagline: "Honor Every Memory with Dignity",
    description: "A compassionate AI tool designed to beautifully enhance memorial photographs, helping families preserve their most precious moments.",
    tags: ["Memorial Photos", "Gentle Enhancement", "Privacy Secure"],
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect width="36" height="36" rx="9" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.08"/>
        <circle cx="18" cy="15" r="5" stroke="white" strokeOpacity="0.5" strokeWidth="1.2"/>
        <path d="M10 28C10 23.6 13.6 20 18 20C22.4 20 26 23.6 26 28" stroke="white" strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default async function HomePage() {
  const posts = await getBlogPosts();
  const latestPosts = posts.slice(0, 2);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 noise-overlay">
        <ParticleBackground />

        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(255,255,255,0.04),transparent)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black to-transparent z-10" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Colored star tooltips */}
        <StarTooltips />

        <HeroContent />

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-20">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white" />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-14" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} variant="up" delay={i * 100}>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-white mb-1">
                    <StatsCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] text-[#333] uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14">
            <p className="text-[10px] text-[#333] uppercase tracking-[0.18em] mb-3">Our Products</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Intelligent tools for real people
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5">
          {products.map((product, i) => (
            <ScrollReveal key={product.slug} variant="up" delay={i * 150}>
              <Link
                href={`/products/${product.slug}`}
                className="card-glow group relative flex flex-col p-8 rounded-2xl overflow-hidden h-full"
              >
                {/* Hover corner glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.015] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/[0.03] transition-colors duration-500 pointer-events-none" />

                <div className="flex items-start justify-between mb-8 relative z-10">
                  {product.icon}
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-[10px] text-[#444] uppercase tracking-wider">Live</span>
                  </div>
                </div>

                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{product.name}</h3>
                  <p className="text-sm text-[#555] mb-2">{product.tagline}</p>
                  <p className="text-sm text-[#333] leading-relaxed mb-7">{product.description}</p>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/3 border border-white/5 text-[10px] text-[#444] rounded-lg uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#333] group-hover:text-[#666] transition-colors">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">&#8594;</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-28" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-[10px] text-[#333] uppercase tracking-[0.18em] mb-3">Why Nova Tech AI</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight max-w-md">
                Built on principles that matter
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} variant="up" delay={i * 100}>
                <div className="card-glow group p-7 rounded-2xl h-full">
                  <div className="text-white/20 group-hover:text-white/40 transition-colors duration-300 mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-xs text-[#333] leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="py-28" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="left">
            <div className="max-w-3xl">
              <p className="text-[10px] text-[#333] uppercase tracking-[0.18em] mb-8">Our Mission</p>
              <blockquote className="text-2xl sm:text-3xl text-[#444] leading-relaxed font-light">
                &ldquo;We believe technology should{" "}
                <span className="text-white font-medium">amplify human experience</span>
                , not replace it. Our mission is to build tools that help people preserve, enhance, and{" "}
                <span className="text-white font-medium">connect with what matters most</span>.&rdquo;
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-10 h-px bg-[#1f1f1f]" />
                <span className="text-xs text-[#2a2a2a]">Nova Tech AI Limited, Hong Kong SAR</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== COMPLIANCE MARQUEE ===== */}
      <section className="py-6 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.012)" }}>
        <div className="flex">
          <div className="marquee-track">
            {[
              "HK Registered Company",
              "GDPR Compliant",
              "PDPO Compliant",
              "CCPA Aligned",
              "Zero Data Retention",
              "TLS 1.3 Encrypted",
              "Privacy First Design",
              "AI-Powered Products",
              "HK Registered Company",
              "GDPR Compliant",
              "PDPO Compliant",
              "CCPA Aligned",
              "Zero Data Retention",
              "TLS 1.3 Encrypted",
              "Privacy First Design",
              "AI-Powered Products",
            ].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-5 px-6 text-[10px] text-[#2a2a2a] uppercase tracking-[0.15em] whitespace-nowrap"
              >
                {item}
                <span className="w-1 h-1 bg-[#2a2a2a] rounded-full" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      {latestPosts.length > 0 && (
        <section className="py-28">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-14">
                <div>
                  <p className="text-[10px] text-[#333] uppercase tracking-[0.18em] mb-3">Blog</p>
                  <h2 className="text-3xl font-semibold text-white tracking-tight">Latest insights</h2>
                </div>
                <Link href="/blog" className="hidden sm:flex items-center gap-2 text-xs text-[#333] hover:text-white transition-colors">
                  All articles &nbsp;&#8594;
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-5">
              {latestPosts.map((post, i) => (
                <ScrollReveal key={post.slug} variant="up" delay={i * 150}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="card-glow group p-7 rounded-2xl flex flex-col h-full"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {post.tags?.map((tag: string) => (
                        <span key={tag} className="px-2 py-0.5 bg-white/4 text-[9px] text-[#444] rounded uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-3 group-hover:text-white/80 transition-colors leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#333] leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[10px] text-[#2a2a2a]">
                        <span>{post.date}</span>
                        <span>&#183;</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-[10px] text-[#2a2a2a] group-hover:text-[#555] transition-colors">
                        Read &#8594;
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="py-28" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="scale">
            <div className="card-glow relative p-14 rounded-3xl overflow-hidden text-center top-glow-line">
              {/* Radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
              {/* Top line accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="relative z-10">
                <p className="text-[10px] text-[#333] uppercase tracking-[0.18em] mb-5">Get Started</p>
                <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
                  Ready to experience intelligent technology?
                </h2>
                <p className="text-[#333] mb-10 max-w-md mx-auto text-sm leading-relaxed">
                  Explore our products or reach out to learn more about what we&apos;re building.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/products" className="btn-primary btn-glow w-full sm:w-auto">
                    View All Products
                  </Link>
                  <Link href="/contact" className="btn-secondary w-full sm:w-auto">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
