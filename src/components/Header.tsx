import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-[57px] shrink-0 border-b border-border bg-nav-bg backdrop-blur-lg">
      <div className="flex h-full items-center">
        <div className="w-4 sm:w-6 md:w-12" />

        <nav className="flex flex-1 items-center justify-between gap-4 border-x border-border px-5">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-sm font-medium tracking-tight text-ink transition-colors duration-150 hover:text-accent sm:gap-2.5 sm:text-[1.0625rem]"
          >
            <Image
              src="/profile.png"
              alt="Rd"
              width={28}
              height={28}
              className="rounded-full"
            />
            Notes of Rd
          </Link>

          <ThemeToggle />
        </nav>

        <div className="w-4 sm:w-6 md:w-12" />
      </div>
    </header>
  );
}
