import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 h-[57px] w-full border-b border-border bg-surface/60 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between border-x border-border px-4 sm:px-6 lg:px-8">
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
    </header>
  );
}
