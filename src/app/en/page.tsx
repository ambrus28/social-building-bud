import type { Metadata } from "next";
import Link from "next/link";
import CategoryBrowseEn from "@/components/CategoryBrowseEn";
import HeroPhotos from "@/components/HeroPhotos";
import { clubs, getCategoriesByPopularity } from "@/data/clubs";
import { categoryHrefEn, getCategoryEn } from "@/lib/categoriesEn";
import RelatedPosts from "@/components/RelatedPosts";
import { postsEn } from "@/data/blog.en";
import { pickBySlugs } from "@/lib/relatedPosts";

export const metadata: Metadata = {
  alternates: { canonical: "/en", languages: { hu: "/", en: "/en" } },
};

const WEEKLY = [
  { day: "Tuesday", club: "Garmin Running Club", where: "18:00, Városliget, coach-led", href: "/en/club/garmin-running-club", tilt: -2 },
  { day: "Thursday", club: "Andúril Társasjáték Klub", where: "From 18:00, District XIII, Visegrádi utca", href: "/en/club/anduril-tarsasjatek-klub", tilt: 1.5 },
  { day: "Sunday", club: "Heti Betevő", where: "Volunteer meal service, District VII", href: "/en/club/heti-betevo", tilt: -1 },
];

const STEPS = [
  "Pick a category, or search for a specific activity.",
  "Check out the clubs in it: description, Instagram or website in one place.",
  "Reach out to them directly, and join for free, no registration needed.",
];

const FAQ = [
  {
    q: "What is Budapesti Közösségek?",
    a: "A free, hand-picked list of real Budapest community clubs: sport, language exchange, book clubs, yoga and many other topics.",
  },
  {
    q: "How do I find the community that's right for me?",
    a: "Browse by category on the homepage, or search the full club list by keyword. Both are free and need no registration.",
  },
  {
    q: "Do I have to pay to join a club?",
    a: "Most clubs listed here are free. If a specific club does charge a fee, it states this on its own page, not here.",
  },
];

const FEATURED_SLUGS = ["free-weekly-community-events-in-budapest", "8-communities-in-budapest-you-can-join-alone", "book-clubs-in-budapest", "best-running-clubs-budapest", "hiking-clubs-in-budapest-for-beginners", "quiet-communities-for-introverts-in-budapest"];

export default function HomeEn() {
  const popular = getCategoriesByPopularity();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="corkboard relative overflow-hidden px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <span
              style={{ fontFamily: "var(--font-handwritten)", transform: "rotate(-4deg)" }}
              className="mb-6 inline-block rounded-sm bg-pin-yellow px-4 py-1 text-xl font-bold text-ink shadow-md"
            >
              100% free!
            </span>

            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="text-5xl uppercase leading-[1.12] tracking-tight text-ink sm:text-7xl"
            >
              Budapest Communities
              <br />
              Find yours
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70 lg:mx-0">
              Hand-picked, real Budapest community clubs. I hope you find your
              new community among them too.
            </p>
            <form action="/en/clubs" method="get" role="search" className="mx-auto mt-8 flex max-w-xl gap-2 lg:mx-0">
              <label htmlFor="hero-search" className="sr-only">
                Search clubs
              </label>
              <input
                id="hero-search"
                name="q"
                type="search"
                placeholder="e.g. running, book club"
                className="min-w-0 flex-1 rounded-full border-2 border-ink/15 bg-paper px-5 py-3 text-base text-ink placeholder:text-ink/60 focus:border-pin-blue focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full border-2 border-cta bg-cta px-5 py-3 text-sm font-bold text-paper shadow-md transition-colors hover:border-cta-hover hover:bg-cta-hover"
              >
                Search
              </button>
            </form>
            <ul className="mx-auto mt-4 flex max-w-xl flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">
              {popular.slice(0, 6).map((c) => (
                <li key={c}>
                  <Link
                    href={categoryHrefEn(c)}
                    className="inline-block rounded-full bg-paper px-3 py-1.5 text-sm text-ink/75 shadow-sm transition-colors hover:text-pin-blue"
                  >
                    {getCategoryEn(c).name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink/70">
              <Link href="/en/clubs" className="font-semibold text-pin-blue underline-offset-4 hover:underline">
                See all {clubs.length} clubs
              </Link>
              <span className="px-2" aria-hidden="true">/</span>
              <a href="/en/about" className="underline-offset-4 hover:underline">
                Run a club? List it for free
              </a>
            </p>
          </div>

          <HeroPhotos />
        </div>

        <svg
          className="absolute inset-x-0 bottom-0 h-6 w-full text-board"
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 24 L0 10 Q 30 0 60 10 T 120 10 T 180 10 T 240 10 T 300 10 T 360 10 T 420 10 T 480 10 T 540 10 T 600 10 T 660 10 T 720 10 T 780 10 T 840 10 T 900 10 T 960 10 T 1020 10 T 1080 10 T 1140 10 T 1200 10 L1200 24 Z"
            fill="currentColor"
          />
        </svg>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-14">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl tracking-tight text-ink">
          Every week, free
        </h2>
        <p className="mt-1 text-ink/70">Three fixed sessions you can join alone, no experience needed.</p>
        <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {WEEKLY.map((note) => (
            <li key={note.href}>
              <Link
                href={note.href}
                style={{ "--pin-rotation": `${note.tilt}deg` } as React.CSSProperties}
                className="pinned relative block rounded-sm bg-paper px-5 pb-5 pt-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <span className="pin-dot" aria-hidden="true" />
                <span style={{ fontFamily: "var(--font-handwritten)" }} className="block text-3xl font-bold text-cta">
                  {note.day}
                </span>
                <span className="mt-1 block font-semibold text-ink">{note.club}</span>
                <span className="mt-1 block text-sm text-ink/70">{note.where}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          <Link
            href="/en/blog/free-weekly-community-events-in-budapest"
            className="font-semibold text-pin-blue underline-offset-4 hover:underline"
          >
            The full list of free weekly events
          </Link>
        </p>
      </section>

      <CategoryBrowseEn categories={popular} />

      <RelatedPosts
        posts={pickBySlugs(postsEn, FEATURED_SLUGS)}
        title="Popular guides"
        hrefPrefix="/en/blog"
        className="mx-auto max-w-6xl px-6 pt-16"
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl tracking-tight text-ink">
          How does it work?
        </h2>
        <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step} className="rounded-2xl bg-paper p-5 shadow-sm">
              <span
                style={{ fontFamily: "var(--font-display)" }}
                className="text-3xl text-cta"
              >
                {i + 1}
              </span>
              <p className="mt-2 text-sm text-ink/70">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl tracking-tight text-ink">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-6">
          {FAQ.map((item) => (
            <div key={item.q}>
              <h3 className="font-semibold text-ink">{item.q}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
