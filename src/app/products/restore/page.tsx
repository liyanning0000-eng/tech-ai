import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RestorePic | AI Photo Restoration",
  description:
    "RestorePic uses advanced AI to repair, enhance, and restore damaged or faded photographs. Bring your most precious memories back to life in seconds.",
};

const features = [
  {
    title: "Scratch & Damage Repair",
    description:
      "Seamlessly removes scratches, tears, water damage, and chemical artifacts from old photographs without any manual editing.",
  },
  {
    title: "Face Enhancement",
    description:
      "Sharpens and restores facial detail in blurry or low-resolution portraits, recovering expressions and features that time had obscured.",
  },
  {
    title: "Intelligent Colorization",
    description:
      "Converts black-and-white photographs to full color with historically informed accuracy, bringing the past to vivid life.",
  },
  {
    title: "HD Upscaling",
    description:
      "Enlarges images by up to 8x using AI super-resolution, delivering crisp, print-ready results without pixelation.",
  },
  {
    title: "Noise Reduction",
    description:
      "Removes film grain, compression artifacts, and digital noise while preserving the important detail and texture in your photograph.",
  },
  {
    title: "Batch Processing",
    description:
      "Process an entire album at once. Perfect for digitizing large collections without spending hours on individual images.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Your Photo",
    description: "Drag and drop or select any photo from your device. Old or new, JPEG or PNG \u2014 we handle it all.",
  },
  {
    number: "02",
    title: "AI Processes It",
    description:
      "Our models analyze and restore your image in seconds. No manual adjustments needed.",
  },
  {
    number: "03",
    title: "Download the Result",
    description:
      "Receive a high-resolution restored image, ready to print or share.",
  },
];

const faqs = [
  {
    q: "What types of damage can RestorePic repair?",
    a: "RestorePic can handle scratches, tears, fold marks, water stains, fading, exposure issues, blur, and low resolution. It works on photographs of any age.",
  },
  {
    q: "How long does the restoration process take?",
    a: "Most photos are processed within 5-15 seconds. Complex restorations or larger files may take slightly longer.",
  },
  {
    q: "What happens to my photos after processing?",
    a: "Your photos are encrypted in transit and automatically deleted immediately after the restored result is delivered to you. We do not store, retain, or analyze any user-submitted images.",
  },
  {
    q: "What image formats are supported?",
    a: "RestorePic supports JPEG, PNG, HEIC, WEBP, and TIFF formats, up to 25MB per image.",
  },
  {
    q: "Is there a limit to how many photos I can restore?",
    a: "Free users can restore a set number of images per month. Premium subscribers enjoy unlimited restorations and batch processing capabilities.",
  },
  {
    q: "Can I use RestorePic for professional or commercial purposes?",
    a: "Yes. Our premium tier includes a commercial use license suitable for professional photographers, archivists, and businesses.",
  },
];

function RestoreIllustration() {
  return (
    <div className="card-glow relative aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Abstract image restoration visualization */}
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="relative z-10">
        {/* Old damaged photo (left side) */}
        <rect x="20" y="40" width="70" height="90" rx="4" fill="#111" stroke="#2a2a2a" strokeWidth="1"/>
        {/* Damage lines */}
        <path d="M25 60L50 55L60 70L45 80" stroke="#333" strokeWidth="1" opacity="0.5"/>
        <path d="M30 90L55 85L65 100" stroke="#333" strokeWidth="0.8" opacity="0.4"/>
        <rect x="35" y="70" width="15" height="20" rx="2" fill="#1a1a1a" opacity="0.6"/>
        {/* Fade effect */}
        <rect x="20" y="40" width="70" height="90" rx="4" fill="url(#fadeGrad)" opacity="0.5"/>
        
        {/* Arrow in middle */}
        <path d="M100 85L115 85M110 80L115 85L110 90" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Restored photo (right side) */}
        <rect x="118" y="40" width="70" height="90" rx="4" fill="#111" stroke="#333" strokeWidth="1"/>
        {/* Face silhouette */}
        <circle cx="153" cy="72" r="15" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
        <path d="M138 110C138 101.7 145 95 153 95C161 95 168 101.7 168 110" stroke="white" strokeOpacity="0.15" strokeWidth="1" strokeLinecap="round"/>
        {/* Sparkle dots */}
        <circle cx="122" cy="44" r="2" fill="white" fillOpacity="0.5"/>
        <circle cx="130" cy="48" r="1.5" fill="white" fillOpacity="0.3"/>
        <circle cx="185" cy="46" r="2" fill="white" fillOpacity="0.5"/>
        <circle cx="178" cy="42" r="1.5" fill="white" fillOpacity="0.3"/>
        
        {/* Labels */}
        <text x="55" y="145" textAnchor="middle" fill="#444" fontSize="8" fontFamily="sans-serif">Before</text>
        <text x="153" y="145" textAnchor="middle" fill="#666" fontSize="8" fontFamily="sans-serif">After</text>
        
        {/* Glow on restored */}
        <rect x="118" y="40" width="70" height="90" rx="4" fill="url(#restoreGlow)" opacity="0.3"/>
        
        <defs>
          <linearGradient id="fadeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="black" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="black" stopOpacity="0"/>
          </linearGradient>
          <radialGradient id="restoreGlow" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="white" stopOpacity="0.08"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
      
      {/* Bottom label */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <span className="px-3 py-1 bg-white/5 border border-white/8 rounded-full text-xs text-[#555]">
          restorepic.xyz
        </span>
      </div>
    </div>
  );
}

export default function RestorePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#444] mb-12">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[#666]">RestorePic</span>
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
              RestorePic
            </h1>
            <p className="text-xl text-[#666] mb-6 leading-relaxed">
              Bring Old Photos Back to Life
            </p>
            <p className="text-[#444] leading-relaxed mb-8">
              RestorePic uses state-of-the-art artificial intelligence to repair,
              enhance, and restore damaged, faded, and degraded photographs. Whether
              it&apos;s a 100-year-old portrait or a blurry snapshot, our AI recovers
              the detail and clarity that time has taken away \u2014 in seconds.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://restorepic.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-glow"
              >
                Open RestorePic &#8599;
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
                <strong className="text-[#666]">Privacy Protected:</strong> Your
                photos are never stored. All images are encrypted in transit and
                automatically deleted after processing.
              </p>
            </div>
          </div>

          <RestoreIllustration />
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

        {/* How It Works */}
        <div className="mb-24">
          <p className="text-xs text-[#444] uppercase tracking-widest mb-10">
            How It Works
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div key={step.number} className="card-glow p-7 rounded-xl">
                <div className="text-3xl font-light text-[#1f1f1f] font-mono mb-5">
                  {step.number}
                </div>
                <h3 className="text-white font-medium mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-[#444] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Section */}
        <div className="card-glow mb-24 p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs text-[#444] uppercase tracking-widest mb-4">
                Privacy & Security
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your photos belong to you
              </h2>
              <p className="text-[#444] leading-relaxed text-sm">
                We designed RestorePic with privacy as a foundational principle.
                Photos are encrypted in transit using TLS 1.3, processed in
                isolated environments, and permanently deleted upon delivery of results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "End-to-end encryption",
                "Zero data retention",
                "No account required",
                "GDPR compliant",
                "CCPA aligned",
                "PDPO compliant",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                  <span className="text-xs text-[#555]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <p className="text-xs text-[#444] uppercase tracking-widest mb-10">
            Frequently Asked Questions
          </p>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="card-glow p-6 rounded-xl"
              >
                <h3 className="text-white font-medium mb-2 text-sm">{faq.q}</h3>
                <p className="text-[#444] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-[#333] text-sm mb-4">Questions about RestorePic?</p>
          <Link
            href="/support"
            className="text-white text-sm hover:text-white/70 transition-colors underline underline-offset-4"
          >
            Visit our support center
          </Link>
        </div>
      </div>
    </div>
  );
}
