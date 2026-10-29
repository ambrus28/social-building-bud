import Link from "next/link";
import { getCategoryDescription } from "@/lib/categoryDescriptions";
import { getCategoryIcon } from "@/lib/categoryIcons";
import { categoryHref } from "@/lib/slug";
import { getClubCount } from "@/data/clubs";

type Props = {
  categories: string[];
};


export default function CategoryBrowse({ categories }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl tracking-tight text-ink">
        Melyik közösség illik hozzád?
      </h2>
      <p className="mt-1 text-ink/70">
        Válassz egy kategóriát, és nézd meg az abban működő budapesti klubokat.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <Link
            key={c}
            href={categoryHref(c)}
            className="pinned relative flex flex-col items-start rounded-2xl bg-paper p-5 text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="pin-dot" aria-hidden="true" />
            <span className="text-xl" aria-hidden="true">
              {getCategoryIcon(c)}
            </span>
            <h3 className="mt-3 font-semibold text-ink">{c}</h3>
            <p className="mt-1 text-sm text-ink/70">{getCategoryDescription(c)}</p>
            <span className="mt-3 text-sm font-medium text-pin-blue">{getClubCount(c)} klub</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
