import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteHeaderEn() {
  return (
    <header className="border-b-2 border-ink/10 bg-board/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-3 sm:flex-nowrap sm:px-6 sm:py-4">
        <Link
          href="/en"
          style={{ fontFamily: "var(--font-display)" }}
          className="order-1 whitespace-nowrap text-base uppercase tracking-tight text-ink sm:text-xl"
        >
          Budapest <span className="text-pin-blue">Communities</span>
        </Link>
        <nav className="order-3 flex w-full items-center gap-5 text-sm font-medium text-ink/75 sm:order-2 sm:w-auto sm:gap-6">
          <Link href="/en/clubs" className="transition-colors hover:text-pin-blue">
            Clubs
          </Link>
          <Link href="/en/blog" className="transition-colors hover:text-pin-blue">
            Blog
          </Link>
          <Link href="/en/about" className="transition-colors hover:text-pin-blue">
            Why I made this
          </Link>
        </nav>
        <div className="order-2 flex items-center gap-3 sm:order-3">
          <LanguageSwitcher />
          <Link
            href="/en/about"
            className="hidden shrink-0 items-center whitespace-nowrap rounded-full border-2 border-cta bg-cta px-3 py-1.5 text-xs font-semibold sm:inline-flex text-paper transition-colors hover:border-cta-hover hover:bg-cta-hover sm:px-4 sm:py-2 sm:text-sm"
          >
            List your club
          </Link>
        </div>
      </div>
    </header>
  );
}
