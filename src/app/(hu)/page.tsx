import type { Metadata } from "next";
import Link from "next/link";
import CategoryBrowse from "@/components/CategoryBrowse";
import HeroPhotos from "@/components/HeroPhotos";
import { clubs, getCategoriesByPopularity } from "@/data/clubs";
import { categoryHref } from "@/lib/slug";
import RelatedPosts from "@/components/RelatedPosts";
import { posts } from "@/data/blog";
import { pickBySlugs } from "@/lib/relatedPosts";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { hu: "/", en: "/en" } },
};

const WEEKLY = [
  { day: "Kedd", club: "Garmin Running Club", where: "18:00, Városliget, edzővel", href: "/klub/garmin-running-club", tilt: -2 },
  { day: "Csütörtök", club: "Andúril Társasjáték Klub", where: "18:00-tól, XIII. kerület, Visegrádi utca", href: "/klub/anduril-tarsasjatek-klub", tilt: 1.5 },
  { day: "Vasárnap", club: "Heti Betevő", where: "Önkéntes ételosztás, VII. kerület", href: "/klub/heti-betevo", tilt: -1 },
];

const STEPS = [
  "Válassz egy kategóriát, vagy keress rá egy konkrét tevékenységre.",
  "Nézd meg a hozzá tartozó klubokat: leírás, Instagram vagy weboldal egy helyen.",
  "Vedd fel velük a kapcsolatot, és csatlakozz ingyen, regisztráció nélkül.",
];

const FAQ = [
  {
    q: "Mi az a Budapesti Közösségek?",
    a: "Ingyenes, kézzel válogatott lista valódi budapesti közösségi klubokról: sport, nyelvcsere, könyvklub, jóga és sok más téma.",
  },
  {
    q: "Hogyan találom meg a nekem való közösséget?",
    a: "Böngéssz kategória szerint a főoldalon, vagy keress rá kulcsszóval a teljes klublistában, mindkettő ingyenes és regisztráció nélküli.",
  },
  {
    q: "Fizetni kell egy klubhoz csatlakozáshoz?",
    a: "A legtöbb itt listázott klub ingyenes. Ha egy adott klubnak mégis van díja, azt a klub saját oldalán tünteti fel, nem itt.",
  },
];

const FEATURED_SLUGS = ["ingyenes-heti-kozossegi-programok-budapesten", "8-kozosseg-ahova-egyedul-is-mehetsz", "konyvklubok-budapesten", "legjobb-futoklubok-budapesten", "turaklubok-budapesten-kezdoknek", "csendes-kozossegek-introvertaltaknak-budapesten"];

export default function Home() {
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
              100% ingyenes!
            </span>

            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="text-5xl uppercase leading-[1.12] tracking-tight text-ink sm:text-7xl"
            >
              Budapesti Közösségek
              <br />
              Találd meg a sajátod
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70 lg:mx-0">
              Kézzel válogatott, valódi budapesti közösségi klubok. Remélem, te is
              megtalálod köztük az új közösséged.
            </p>
            <form action="/klubok" method="get" role="search" className="mx-auto mt-8 flex max-w-xl gap-2 lg:mx-0">
              <label htmlFor="hero-search" className="sr-only">
                Keresés a klubok között
              </label>
              <input
                id="hero-search"
                name="q"
                type="search"
                placeholder="Pl. futás, könyvklub"
                className="min-w-0 flex-1 rounded-full border-2 border-ink/15 bg-paper px-5 py-3 text-base text-ink placeholder:text-ink/60 focus:border-pin-blue focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full border-2 border-cta bg-cta px-5 py-3 text-sm font-bold text-paper shadow-md transition-colors hover:border-cta-hover hover:bg-cta-hover"
              >
                Keresés
              </button>
            </form>
            <ul className="mx-auto mt-4 flex max-w-xl flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">
              {popular.slice(0, 6).map((c) => (
                <li key={c}>
                  <Link
                    href={categoryHref(c)}
                    className="inline-block rounded-full bg-paper px-3 py-1.5 text-sm text-ink/75 shadow-sm transition-colors hover:text-pin-blue"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink/70">
              <Link href="/klubok" className="font-semibold text-pin-blue underline-offset-4 hover:underline">
                Mind a {clubs.length} klub megnézése
              </Link>
              <span className="px-2" aria-hidden="true">/</span>
              <a href="/about" className="underline-offset-4 hover:underline">
                Van klubod? Küldd be ingyen
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
          Minden héten, ingyen
        </h2>
        <p className="mt-1 text-ink/70">Három fix alkalom, ahova egyedül, előzetes tudás nélkül is mehetsz.</p>
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
            href="/blog/ingyenes-heti-kozossegi-programok-budapesten"
            className="font-semibold text-pin-blue underline-offset-4 hover:underline"
          >
            A teljes heti ingyenes programlista
          </Link>
        </p>
      </section>

      <CategoryBrowse categories={popular} />

      <RelatedPosts
        posts={pickBySlugs(posts, FEATURED_SLUGS)}
        title="Népszerű útmutatók"
        hrefPrefix="/blog"
        className="mx-auto max-w-6xl px-6 pt-16"
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl tracking-tight text-ink">
          Hogyan működik?
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
          Gyakran ismételt kérdések
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
