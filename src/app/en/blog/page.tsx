import type { Metadata } from "next";
import Link from "next/link";
import { postsEn } from "@/data/blog.en";
import { getCategoryEn } from "@/lib/categoriesEn";

const TITLE = "Blog";
const DESCRIPTION =
  "The Budapesti Közösségek blog: guides and lists about Budapest communities, how to find a club, a running club, or a language exchange community that fits you.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/en/blog", languages: { hu: "/blog", en: "/en/blog" } },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/en/blog" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

// Reverse first so same-day posts keep newest-added first after the stable date sort.
const newestFirst = [...postsEn].reverse().sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));


export default function BlogIndexPageEn() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1
        style={{ fontFamily: "var(--font-display)" }}
        className="mb-2 text-3xl tracking-tight text-ink"
      >
        Budapesti Közösségek blog
      </h1>
      <p className="mb-10 max-w-xl text-ink/70">{DESCRIPTION}</p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
        {newestFirst.map((post) => (
          <Link
            key={post.slug}
            href={`/en/blog/${post.slug}`}
            className="pinned group relative block rounded-2xl bg-paper p-6 pt-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="pin-dot" aria-hidden="true" />
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                post.kind === "listicle" ? "bg-cta/10 text-cta" : "bg-accent-soft text-pin-blue"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${post.kind === "listicle" ? "bg-cta" : "bg-pin-blue"}`}
                aria-hidden="true"
              />
              {post.category ? getCategoryEn(post.category).name : post.kind === "listicle" ? "List" : "Guide"}
            </span>

            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-3 text-xl leading-tight tracking-tight text-ink group-hover:text-pin-blue"
            >
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-ink/70">{post.description}</p>

            <p className="mt-4 text-xs text-ink/70">
              {post.publishedAt === post.updatedAt ? (
                <>Published {new Date(post.publishedAt).toLocaleDateString("en-GB")}</>
              ) : (
                <>
                  Published {new Date(post.publishedAt).toLocaleDateString("en-GB")} · Updated{" "}
                  {new Date(post.updatedAt).toLocaleDateString("en-GB")}
                </>
              )}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
