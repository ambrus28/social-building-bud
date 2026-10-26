import type { ClubCost } from "@/data/clubs";

const LABELS: Record<ClubCost, { hu: string; en: string }> = {
  free: { hu: "Ingyenes", en: "Free" },
  donation: { hu: "Adományalapú", en: "Donation-based" },
  paid: { hu: "Fizetős", en: "Paid" },
};

export function getCostLabel(cost: ClubCost | null | undefined, locale: "hu" | "en"): string | null {
  return cost ? LABELS[cost][locale] : null;
}

export function costBadgeClass(cost: ClubCost): string {
  return cost === "paid"
    ? "rounded-full border border-ink/15 px-2 py-0.5 text-ink/60"
    : "rounded-full bg-accent-soft px-2 py-0.5 font-medium text-pin-blue";
}
