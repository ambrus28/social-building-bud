"use client";

import { useMemo, useState } from "react";
import type { Club } from "@/data/clubs";
import { getCategoryIcon } from "@/lib/categoryIcons";
import { getCategoryEn } from "@/lib/categoriesEn";
import ClubCardEn from "./ClubCardEn";

const PAGE_SIZE = 9;

// Accent-insensitive matching, so "konyvklub" finds "Könyvklub".
function fold(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

type Props = {
  clubs: Club[];
  categories: string[];
  initialCategory?: string;
  initialSearch?: string;
};

export default function HomeContentEn({ clubs, categories, initialCategory, initialSearch }: Props) {
  const [search, setSearch] = useState(initialSearch ?? "");
  const [freeOnly, setFreeOnly] = useState(false);
  const [category, setCategory] = useState<string>(initialCategory ?? "");
  const [page, setPage] = useState(1);
  const [appliedFilters, setAppliedFilters] = useState({ search, category, freeOnly });

  const sortedCategories = useMemo(
    () => [...categories].sort((a, b) => getCategoryEn(a).name.localeCompare(getCategoryEn(b).name)),
    [categories]
  );

  const filtered = useMemo(() => {
    const q = fold(search.trim());
    return clubs.filter((club) => {
      const matchesSearch =
        !q ||
        fold(club.name).includes(q) ||
        fold(club.description_en).includes(q) ||
        fold(club.category).includes(q);
      const matchesCategory = !category || club.category === category;
      const matchesCost = !freeOnly || club.cost === "free" || club.cost === "donation";
      return matchesSearch && matchesCategory && matchesCost;
    });
  }, [clubs, search, category, freeOnly]);

  if (
    search !== appliedFilters.search ||
    category !== appliedFilters.category ||
    freeOnly !== appliedFilters.freeOnly
  ) {
    setAppliedFilters({ search, category, freeOnly });
    setPage(1);
  }

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="search"
          aria-label="Search clubs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by club name or description…"
          className="w-full flex-1 rounded-full border-2 border-ink/15 bg-paper px-5 py-2.5 text-sm text-ink placeholder:text-ink/60 focus:border-pin-blue focus:outline-none"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-full border-2 border-ink/15 bg-paper px-5 py-2.5 text-sm text-ink focus:border-pin-blue focus:outline-none"
        >
          <option value="">All categories</option>
          {sortedCategories.map((c) => (
            <option key={c} value={c}>
              {getCategoryEn(c).name}
            </option>
          ))}
        </select>
        <label className="inline-flex shrink-0 cursor-pointer items-center gap-2 text-sm text-ink/75">
          <input
            type="checkbox"
            checked={freeOnly}
            onChange={(e) => setFreeOnly(e.target.checked)}
            className="h-4 w-4 accent-[var(--pin-blue)]"
          />
          Free or donation-based only
        </label>
      </div>

      {category && (
        <div className="mb-6">
          <button
            type="button"
            onClick={() => setCategory("")}
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-pin-blue bg-accent-soft px-4 py-2.5 text-sm font-medium text-pin-blue"
          >
            {getCategoryIcon(category)} {getCategoryEn(category).name} ✕
          </button>
        </div>
      )}

      <p className="mb-6 text-sm text-ink/70">{filtered.length} clubs found</p>

      {filtered.length === 0 ? (
        <p className="border-2 border-dashed border-ink/20 p-10 text-center text-ink/70">
          No club matches this filter. Try a different search or filter.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((club) => (
              <ClubCardEn key={club.id} club={club} />
            ))}
          </div>

          {pageCount > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="border-2 border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className={`flex h-9 w-9 items-center justify-center border-2 text-sm font-medium transition-colors ${
                    p === currentPage
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/15 text-ink/70 hover:border-ink/40"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                disabled={currentPage === pageCount}
                className="border-2 border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
