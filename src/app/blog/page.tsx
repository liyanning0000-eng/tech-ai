import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, updates, and deep dives from the Nova Tech AI team. Explore articles on AI technology, photo restoration, and the future of intelligent applications.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="section-label mb-4">Blog</p>
          <h1
            className="font-semibold tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", color: "#fff" }}
          >
            Thoughts on AI &amp; Technology
          </h1>
          <p style={{ color: "rgba(255,255,255,0.28)", lineHeight: 1.7 }}>
            Insights, deep dives, and perspectives from the Nova Tech AI team.
            We write about the technology we build and the problems we solve.
          </p>
        </ScrollReveal>

        {/* Posts */}
        {posts.length === 0 ? (
          <div
            className="card-glow text-center py-24 rounded-2xl"
          >
            <p style={{ color: "rgba(255,255,255,0.25)" }}>No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {posts.map((post, index) => (
              <ScrollReveal
                key={post.slug}
                variant="up"
                delay={index * 100}
                className={index === 0 ? "md:col-span-2" : ""}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className={`card-glow group p-8 rounded-2xl flex flex-col h-full ${
                    index === 0 ? "md:flex-row md:gap-10 md:items-start" : ""
                  }`}
                >
                  {/* Tags */}
                  <div
                    className={`flex items-center gap-2 mb-4 ${
                      index === 0 ? "md:mb-0 md:mt-1 md:flex-col md:items-start md:gap-2 md:min-w-[120px]" : ""
                    }`}
                  >
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          fontSize: "0.6875rem",
                          color: "rgba(255,255,255,0.35)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col flex-1">
                    <h2
                      className="font-semibold tracking-tight mb-3 group-hover:opacity-80 transition-opacity leading-snug flex-1"
                      style={{
                        color: "#fff",
                        fontSize: index === 0 ? "1.5rem" : "1.0625rem",
                      }}
                    >
                      {post.title}
                    </h2>

                    <p
                      className="leading-relaxed mb-6"
                      style={{
                        color: "rgba(255,255,255,0.28)",
                        fontSize: index === 0 ? "0.9375rem" : "0.875rem",
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center gap-3"
                        style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.18)" }}
                      >
                        <span>{post.author}</span>
                        <span>&middot;</span>
                        <span>{post.date}</span>
                        <span>&middot;</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span
                        className="group-hover:translate-x-0.5 transition-transform duration-200"
                        style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.18)" }}
                      >
                        Read &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
