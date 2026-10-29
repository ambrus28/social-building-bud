import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteHeader() {
  return (
    <header className="border-b-2 border-ink/10 bg-board/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-3 sm:flex-nowrap sm:px-6 sm:py-4">
        <Link
          href="/"
          style={{ fontFamily: "var(--font-display)" }}
          className="order-1 whitespace-nowrap text-base uppercase tracking-tight text-ink sm:text-xl"
        >
          Budapesti <span className="text-pin-blue">Közösségek</span>
        </Link>
        <nav className="order-3 flex w-full items-center gap-5 text-sm font-medium text-ink/75 sm:order-2 sm:w-auto sm:gap-6">
          <Link href="/klubok" className="transition-colors hover:text-pin-blue">
            Klubok
          </Link>
          <Link href="/blog" className="transition-colors hover:text-pin-blue">
            Blog
          </Link>
          <Link href="/about" className="transition-colors hover:text-pin-blue">
            Miért csináltam?
          </Link>
        </nav>
        <div className="order-2 flex items-center gap-3 sm:order-3">
          <LanguageSwitcher />
          <Link
            href="/about"
            className="hidden shrink-0 items-center whitespace-nowrap rounded-full border-2 border-cta bg-cta px-3 py-1.5 text-xs font-semibold sm:inline-flex text-paper transition-colors hover:border-cta-hover hover:bg-cta-hover sm:px-4 sm:py-2 sm:text-sm"
          >
            Regisztráld a klubod
          </Link>
        </div>
      </div>
    </header>
  );
}
