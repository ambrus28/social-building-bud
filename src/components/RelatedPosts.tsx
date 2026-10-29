import Link from "next/link";
import type { BlogPost } from "@/data/blog";

type Props = {
  posts: BlogPost[];
  title: string;
  hrefPrefix: "/blog" | "/en/blog";
  className?: string;
};

export default function RelatedPosts({ posts, title, hrefPrefix, className = "" }: Props) {
  if (posts.length === 0) return null;
  return (
    <section className={className}>
      <h2
        style={{ fontFamily: "var(--font-display)" }}
        className="mb-5 text-xl uppercase tracking-tight text-ink"
      >
        {title}
      </h2>
      <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`${hrefPrefix}/${post.slug}`}
              className="block h-full rounded-2xl bg-paper p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                style={{ fontFamily: "var(--font-display)" }}
                className="block text-base leading-tight tracking-tight text-ink"
              >
                {post.title}
              </span>
              <span className="mt-2 line-clamp-3 block text-sm text-ink/60">{post.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
