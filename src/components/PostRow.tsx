import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { PostIconInline } from "./PostIcon";

function shortDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export default function PostRow({
  post,
  showFeaturedBadge = false,
}: {
  post: PostMeta;
  showFeaturedBadge?: boolean;
}) {
  return (
    <Link
      href={`/notes/${post.slug}`}
      className="group flex flex-col gap-1 border-b border-border px-1 py-3.5 transition-colors duration-150 hover:bg-surface-hover sm:flex-row sm:items-center sm:gap-3"
    >
      <span className="flex min-w-0 flex-1 items-center gap-2 text-[0.9375rem] font-medium text-ink transition-colors duration-150 group-hover:text-accent">
        <span className="line-clamp-1">{post.title}</span>
        <span className="shrink-0">
          <PostIconInline icon={post.icon} />
        </span>
      </span>

      <div className="flex shrink-0 items-center gap-3">
        {showFeaturedBadge && (
          <span className="hidden rounded-radius-xs border border-border px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-wide text-ink-muted sm:inline">
            Featured
          </span>
        )}
        <time
          dateTime={post.date}
          className="text-[0.75rem] tabular-nums text-ink-faint sm:text-[0.8125rem]"
        >
          {shortDate(post.date)}
        </time>
      </div>
    </Link>
  );
}
