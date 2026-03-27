import Link from "next/link";
import { sidebarLinks } from "@/lib/blog";

export function MobileNav({ active }: { active: string }) {
  return (
    <nav className="flex gap-2 overflow-x-auto pb-6 lg:hidden">
      {sidebarLinks.map((item) => (
        <Link
          key={item.slug}
          href={`/${item.slug}`}
          className={`shrink-0 rounded-md px-4 py-2 text-sm transition-all duration-150 ${
            active === item.slug
              ? "font-medium text-accent"
              : "text-ink-muted hover:bg-surface-hover hover:text-ink"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default function Sidebar({ active }: { active: string }) {
  return (
    <aside className="hidden w-36 shrink-0 lg:block">
      <nav className="sticky top-[73px] -mr-10 -ml-4 flex flex-col gap-0.5 sm:-ml-6 lg:-ml-8">
        {sidebarLinks.map((item) => (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            className={`block px-4 py-1.5 text-sm transition-all duration-150 sm:px-6 lg:px-8 ${
              active === item.slug
                ? "bg-accent/10 font-medium text-accent"
                : "text-ink-muted hover:bg-surface-hover hover:text-ink"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
