import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/blog";
import { PostIconLarge } from "./PostIcon";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const day = d.getDate();
  const suffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
        ? "nd"
        : day === 3 || day === 23
          ? "rd"
          : "th";
  return (
    d.toLocaleDateString("en-US", { month: "long" }) +
    ` ${day}${suffix}, ${d.getFullYear()}`
  );
}

export default function FeaturedCard({
  post,
  isNewest = false,
}: {
  post: PostMeta;
  isNewest?: boolean;
}) {
  return (
    <Link
      href={`/notes/${post.slug}`}
      className="blog-card group flex flex-col overflow-hidden"
    >
      {/* Icon area */}
      <PostIconLarge icon={post.icon} />

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h2 className="font-serif text-[0.9375rem] font-medium leading-snug tracking-tight text-ink transition-colors duration-150 group-hover:text-accent">
          {post.title}
        </h2>
        <p className="mt-1.5 line-clamp-2 text-[0.8125rem] leading-relaxed text-ink-muted">
          {post.description}
        </p>

        {/* Author + date row */}
        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <div className="flex items-center gap-2">
            <Image
              src="/profile.png"
              alt={post.author || "Rd"}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-[0.75rem] text-ink-muted">
              {post.author || "Rd"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <time
              dateTime={post.date}
              className="text-[0.75rem] text-ink-faint"
            >
              {formatDate(post.date)}
            </time>
            {isNewest && (
              <span className="rounded-radius-xs border border-border px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-wide text-ink">
                Newest
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
