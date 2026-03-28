"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { LogoMark } from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(2,2,2,0.75)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <LogoMark size={26} />
          <span
            className="font-semibold tracking-tight"
            style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.9)" }}
          >
            Nova Tech AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                fontSize: "0.8125rem",
                color: pathname === link.href ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.38)",
                background: pathname === link.href ? "rgba(255,255,255,0.07)" : "transparent",
              }}
              onMouseEnter={e => { if (pathname !== link.href) (e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)"; }}
              onMouseLeave={e => { if (pathname !== link.href) (e.target as HTMLElement).style.color = "rgba(255,255,255,0.38)"; }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/support"
            className="transition-colors duration-200"
            style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.28)" }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)"}
            onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.28)"}
          >
            Support
          </Link>
          <Link href="/contact" className="btn-primary !py-2 !px-4 !rounded-lg !text-xs">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className="block h-px bg-white transition-all duration-300"
            style={{ width: 20, transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }}
          />
          <span
            className="block h-px bg-white transition-all duration-300"
            style={{ width: 14, opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-px bg-white transition-all duration-300"
            style={{ width: 20, transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(2,2,2,0.92)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
          className="md:hidden px-6 py-4"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg transition-colors"
                style={{
                  fontSize: "0.875rem",
                  color: pathname === link.href ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)",
                  background: pathname === link.href ? "rgba(255,255,255,0.07)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="mt-2 pt-3 flex flex-col gap-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <Link
                href="/support"
                className="px-4 py-3"
                style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.3)" }}
              >
                Support
              </Link>
              <Link href="/contact" className="btn-primary !rounded-lg text-center">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
