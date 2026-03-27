import Link from "next/link";
import { sidebarLinks } from "@/lib/blog";

export default function Sidebar({ active }: { active: string }) {
  return (
    <aside className="hidden w-48 shrink-0 lg:block">
      <nav className="space-y-1.5">
        {sidebarLinks.map((item) => (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            className={`block rounded-radius-md px-3 py-2 text-sm transition-all duration-150 ${
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
