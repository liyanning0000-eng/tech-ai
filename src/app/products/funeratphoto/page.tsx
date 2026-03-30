import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FuneralPhoto | Memorial Photo Enhancement",
  description:
    "FuneralPhoto is a compassionate AI tool that helps families beautifully enhance memorial and funeral photographs. Privacy-first, instant, and thoughtfully designed.",
};

const features = [
  {
    title: "Portrait Enhancement",
    description:
      "Gently sharpens and clarifies facial detail in photos of loved ones, preserving natural appearance while improving overall quality.",
  },
  {
    title: "Background Refinement",
    description:
      "Softens or simplifies backgrounds to draw focus to the subject, creating a dignified and composed final image.",
  },
  {
    title: "Lighting Correction",
    description:
      "Intelligently adjusts exposure, contrast, and white balance to bring warmth and clarity to underexposed or poorly lit photographs.",
  },
  {
    title: "Damage Restoration",
    description:
      "Repairs scratches, tears, and physical damage in older photographs - perfect for restoring cherished family portraits from decades past.",
  },
  {
    title: "Color Enhancement",
    description:
      "Enhances color depth and tonal balance to make photographs feel more vivid and lifelike, without artificial-looking oversaturation.",
  },
  {
    title: "High-Resolution Export",
    description:
      "Exports beautifully processed images at print-quality resolution, ready for memorial programs, books, and digital tributes.",
  },
];

const useCases = [
  {
    title: "Funeral Programs",
    description:
      "A clear, dignified portrait for printed or digital programs.",
  },
  {
    title: "Memorial Books",
    description:
      "Enhanced photographs for professionally printed remembrance albums.",
  },
  {
    title: "Digital Tributes",
    description:
      "High-quality images for memorial websites and obituary pages.",
  },
  {
    title: "Family Archives",
    description:
      "Restore decades-old photographs of ancestors for future generations.",
  },
];

const faqs = [
  {
    q: "How is FuneralPhoto different from regular photo editing apps?",
    a: "FuneralPhoto is purpose-built for memorial use cases. Its enhancement models are specifically tuned for portrait dignity, and its entire design is built around the sensitivity of this context.",
  },
  {
    q: "Are the photos I submit kept private?",
    a: "Absolutely. All submitted photographs are encrypted in transit, processed in an isolated environment, and permanently deleted immediately after the result is delivered. We retain no copies, no metadata, and no processing history.",
  },
  {
    q: "How quickly does FuneralPhoto process images?",
    a: "Most photos are processed within 10-20 seconds. We understand that families often need results quickly, and we've optimized our pipeline accordingly.",
  },
  {
    q: "What image quality do I need to upload?",
    a: "FuneralPhoto can work with photos of any quality, including very old or low-resolution images. The AI is specifically designed to extract and enhance detail from imperfect sources.",
  },
  {
    q: "Can I use FuneralPhoto for old black-and-white photographs?",
    a: "Yes. FuneralPhoto can restore, enhance, and optionally colorize black-and-white photographs of loved ones.",
  },
  {
    q: "Is there a support team I can contact?",
    a: "Yes. You can reach our support team at win060787@gmail.com. We understand the urgency that can come with these requests and aim to respond within 24 hours.",
  },
];

function FuneratIllustration() {
  return (
    <div className="card-glow relative aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="relative z-10">
        {/* Main portrait frame */}
        <rect x="55" y="30" width="90" height="110" rx="6" fill="#0d0d0d" stroke="#2a2a2a" strokeWidth="1"/>
        
        {/* Portrait face */}
        <circle cx="100" cy="72" r="22" stroke="white" strokeOpacity="0.2" strokeWidth="1.2"/>
        <path d="M78 112C78 100.9 88.1 92 100 92C111.9 92 122 100.9 122 112" stroke="white" strokeOpacity="0.2" strokeWidth="1.2" strokeLinecap="round"/>
        
        {/* Enhancement particles/sparkles */}
        <circle cx="60" cy="36" r="2.5" fill="white" fillOpacity="0.4"/>
        <circle cx="67" cy="30" r="1.5" fill="white" fillOpacity="0.25"/>
        <circle cx="73" cy="37" r="1" fill="white" fillOpacity="0.2"/>
        
        <circle cx="140" cy="36" r="2.5" fill="white" fillOpacity="0.4"/>
        <circle cx="133" cy="30" r="1.5" fill="white" fillOpacity="0.25"/>
        <circle cx="127" cy="37" r="1" fill="white" fillOpacity="0.2"/>

        <circle cx="60" cy="133" r="2.5" fill="white" fillOpacity="0.3"/>
        <circle cx="67" cy="140" r="1.5" fill="white" fillOpacity="0.2"/>
        
        <circle cx="140" cy="133" r="2.5" fill="white" fillOpacity="0.3"/>
        <circle cx="133" cy="140" r="1.5" fill="white" fillOpacity="0.2"/>

        {/* Glow overlay */}
        <rect x="55" y="30" width="90" height="110" rx="6" fill="url(#portraitGlow)"/>
        
        {/* Flower/memorial element */}
        <circle cx="100" cy="162" r="5" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
        <path d="M94 156C94 156 97 153 100 156C103 153 106 156 106 156" stroke="white" strokeOpacity="0.12" strokeWidth="0.8" strokeLinecap="round"/>
        
        {/* Bottom caption */}
        <text x="100" y="185" textAnchor="middle" fill="#444" fontSize="8" fontFamily="sans-serif">memorial · tribute · legacy</text>

        <defs>
          <radialGradient id="portraitGlow" cx="0.5" cy="0.3" r="0.8">
            <stop offset="0%" stopColor="white" stopOpacity="0.06"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <span className="px-3 py-1 bg-white/5 border border-white/8 rounded-full text-xs text-[#555]">
          funeralphoto.com
        </span>
      </div>
    </div>
  );
}

export default function FuneratPhotoPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#444] mb-12">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[#666]">FuneralPhoto</span>
        </div>

        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-14 mb-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/8 text-xs text-[#888] rounded-md">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Live
              </span>
              <span className="px-2.5 py-1 bg-white/3 border border-white/5 text-xs text-[#555] rounded-md">
                Web Application
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
              FuneralPhoto
            </h1>
            <p className="text-xl text-[#666] mb-6 leading-relaxed">
              Honor Every Memory with Dignity
            </p>
            <p className="text-[#444] leading-relaxed mb-8">
              FuneralPhoto is a compassionate AI application designed to help families
              enhance and preserve memorial photographs. Every aspect \u2014 from its technology
              to its interface \u2014 is designed with care, respect, and an absolute commitment
              to your privacy.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://funeralphoto.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-glow"
              >
                Open FuneralPhoto &#8599;
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <Link href="/privacy" className="text-xs text-[#555] hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-[#333]">&#183;</span>
              <Link href="/terms" className="text-xs text-[#555] hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-start gap-3 p-4 card-glow rounded-xl">
              <div className="w-2 h-2 bg-green-500 rounded-full shrink-0 mt-1" />
              <p className="text-xs text-[#444]">
                <strong className="text-[#666]">Strict Privacy Policy:</strong> Memorial
                photos are permanently deleted immediately after delivery. We retain no data, ever.
              </p>
            </div>
          </div>

          <FuneratIllustration />
        </div>

        {/* Use Cases */}
        <div className="mb-24">
          <p className="text-xs text-[#444] uppercase tracking-widest mb-10">
            How Families Use FuneralPhoto
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card-glow p-6 rounded-xl">
                <h3 className="text-white font-medium mb-2 text-sm">{useCase.title}</h3>
                <p className="text-xs text-[#444] leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-24">
          <p className="text-xs text-[#444] uppercase tracking-widest mb-10">
            Features
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="card-glow p-6 rounded-xl">
                <h3 className="text-white font-medium mb-2 text-sm">{feature.title}</h3>
                <p className="text-xs text-[#444] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Promise */}
        <div className="card-glow mb-24 p-8 md:p-10 rounded-2xl">
          <p className="text-xs text-[#444] uppercase tracking-widest mb-6">
            Our Privacy Promise
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4 max-w-xl">
            Memorial photographs deserve the highest level of protection
          </h2>
          <p className="text-[#444] leading-relaxed mb-8 max-w-2xl text-sm">
            We understand that photographs of loved ones are not ordinary data. They are
            irreplaceable records of people who are deeply missed. That is why our privacy
            policy goes beyond legal compliance - it is a commitment built into the
            architecture of our system.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Encrypted in Transit", body: "TLS 1.3 encryption for all data." },
              { title: "Zero Retention", body: "Photos deleted automatically after processing." },
              { title: "Isolated Processing", body: "No cross-user data exposure." },
              { title: "No Profiling", body: "We do not build user profiles." },
              { title: "No Third-Party Sharing", body: "Images never shared or sold." },
              { title: "Full Compliance", body: "GDPR, CCPA, and Hong Kong PDPO." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0 mt-1.5" />
                <div>
                  <div className="text-white text-xs font-medium mb-1">{item.title}</div>
                  <div className="text-[#333] text-xs leading-relaxed">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <p className="text-xs text-[#444] uppercase tracking-widest mb-10">
            Frequently Asked Questions
          </p>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-glow p-6 rounded-xl">
                <h3 className="text-white font-medium mb-2 text-sm">{faq.q}</h3>
                <p className="text-[#444] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support CTA */}
        <div className="card-glow text-center p-8 rounded-2xl top-glow-line" style={{ position: "relative" }}>
          <h3 className="text-white font-medium mb-2">
            We&apos;re here when you need us
          </h3>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.25)" }}>
            If you have questions or need assistance during a difficult time, our
            support team responds within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/support" className="btn-primary btn-glow">
              Visit Support Center
            </Link>
            <a href="mailto:win060787@gmail.com" className="btn-secondary">
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
