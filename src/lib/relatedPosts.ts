import type { BlogPost } from "@/data/blog";

export function newestInCategory(posts: BlogPost[], category: string, limit = 3): BlogPost[] {
  return posts
    .filter((p) => p.category === category)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}

export function pickBySlugs(posts: BlogPost[], slugs: string[]): BlogPost[] {
  return slugs.map((s) => posts.find((p) => p.slug === s)).filter((p): p is BlogPost => Boolean(p));
}
