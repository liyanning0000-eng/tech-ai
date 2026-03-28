import Link from "next/link";
import { LogoMark } from "./Logo";

const footerLinks = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Products: [
    { href: "/products/restore", label: "Restore.xyz" },
    { href: "/products/funeratphoto", label: "FuneratPhoto" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/support", label: "Support Center" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto"
      style={{
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">

        {/* Slogan banner */}
        <div className="mb-14 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <p
            className="text-4xl sm:text-5xl font-semibold tracking-tight"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.25))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Change Everything
            <br />
            <span style={{ fontSize: "0.6em", letterSpacing: "0.05em" }}>
              With AI &mdash; &#29992;AI&#25913;&#21464;&#19968;&#20999;
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <LogoMark size={28} />
              <span className="font-semibold text-sm text-white">Nova Tech AI</span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.8125rem", lineHeight: "1.7" }} className="max-w-xs mb-6">
              Building next-generation AI-powered tools that make everyday tasks
              smarter, faster, and more accessible.
            </p>
            <div className="space-y-1.5" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
              <p>Nova Tech AI Limited</p>
              <p>Hong Kong SAR, China</p>
              <p>
                <a
                  href="mailto:win060787@gmail.com"
                  className="hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  win060787@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+85254284935"
                  className="hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  +852 5428 4935
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                className="uppercase mb-4"
                style={{ fontSize: "0.625rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)", fontWeight: 600 }}
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-200"
                      style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.28)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.15)" }}>
            &copy; {currentYear} Nova Tech AI Limited. All rights reserved.
          </p>
          <div
            className="flex items-center gap-4"
            style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.15)" }}
          >
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <span>&middot;</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span>&middot;</span>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
