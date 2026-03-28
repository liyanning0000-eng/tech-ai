import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import ReadingProgress from "@/components/ReadingProgress";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      <ReadingProgress />

      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">

          {/* Breadcrumb */}
          <div
            className="flex items-center gap-2 mb-12"
            style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.22)" }}
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span style={{ color: "rgba(255,255,255,0.1)" }}>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span style={{ color: "rgba(255,255,255,0.1)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.38)" }}>{post.title}</span>
          </div>

          <div className="max-w-3xl">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
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

            {/* Title */}
            <h1
              className="font-semibold tracking-tight leading-tight mb-6"
              style={{ color: "#fff", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              {post.title}
            </h1>

            {/* Meta */}
            <div
              className="flex items-center gap-4 pb-8 mb-10"
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.3)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Author avatar */}
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: "0.6875rem",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  N
                </div>
                <span>{post.author}</span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.1)" }}>&middot;</span>
              <span>{post.date}</span>
              <span style={{ color: "rgba(255,255,255,0.1)" }}>&middot;</span>
              <span>{post.readTime}</span>
            </div>

            {/* Content */}
            <article className="prose">
              <MDXRemote source={post.content} />
            </article>

            {/* Footer */}
            <div
              className="mt-16 pt-8 flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.3)" }}
              >
                &#8592; Back to all articles
              </Link>
              <Link
                href="/products"
                className="btn-secondary !py-2 !px-4 !text-xs"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
