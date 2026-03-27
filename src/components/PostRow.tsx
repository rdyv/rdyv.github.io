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
      className="group flex items-center gap-3 border-b border-border px-1 py-3.5 transition-colors duration-150 hover:bg-surface-hover"
    >
      <span className="flex-1 flex items-center gap-2 text-[0.9375rem] font-medium text-ink transition-colors duration-150 group-hover:text-accent">
        {post.title}
        <PostIconInline icon={post.icon} />
      </span>

      <div className="flex shrink-0 items-center gap-3">
        {showFeaturedBadge && (
          <span className="rounded-radius-xs border border-border px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-wide text-ink-muted">
            Featured
          </span>
        )}
        <time
          dateTime={post.date}
          className="text-[0.8125rem] tabular-nums text-ink-faint"
        >
          {shortDate(post.date)}
        </time>
      </div>
    </Link>
  );
}
