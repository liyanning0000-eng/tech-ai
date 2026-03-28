import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novatechai.com"),
  title: {
    default: "Nova Tech AI Limited | AI-Powered Web Applications",
    template: "%s | Nova Tech AI Limited",
  },
  description:
    "Nova Tech AI Limited is a Hong Kong-based technology company building intelligent AI-powered web applications. Explore our suite of innovative tools designed for everyday use.",
  keywords: [
    "AI technology",
    "web applications",
    "photo restoration",
    "artificial intelligence",
    "Hong Kong tech company",
    "Nova Tech AI",
  ],
  authors: [{ name: "Nova Tech AI Limited" }],
  creator: "Nova Tech AI Limited",
  publisher: "Nova Tech AI Limited",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novatechai.com",
    siteName: "Nova Tech AI Limited",
    title: "Nova Tech AI Limited | AI-Powered Web Applications",
    description:
      "Building next-generation AI tools for everyday people. Innovative web applications crafted with intelligence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nova Tech AI Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Tech AI Limited",
    description: "Building next-generation AI tools for everyday people.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
