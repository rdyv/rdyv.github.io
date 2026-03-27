import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-ink"
        >
          rdyv
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/blog"
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
