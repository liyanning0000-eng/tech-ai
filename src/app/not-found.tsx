import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        {/* Code */}
        <div
          className="font-light font-mono mb-6"
          style={{ fontSize: "6rem", color: "rgba(255,255,255,0.04)", lineHeight: 1 }}
        >
          404
        </div>

        {/* Divider glow */}
        <div className="divider mb-8" />

        <h1
          className="font-semibold mb-3"
          style={{ color: "#fff", fontSize: "1.5rem" }}
        >
          Page not found
        </h1>
        <p
          className="mb-8 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.9375rem" }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            Go Home
          </Link>
          <Link href="/support" className="btn-secondary w-full sm:w-auto">
            Get Support
          </Link>
        </div>
      </div>
    </div>
  );
}
