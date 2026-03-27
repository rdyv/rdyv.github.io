import Link from "next/link";
import Image from "next/image";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return { title: "Post not found" };
  }
}

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

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const related = getRelatedPosts(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="flex gap-10 pb-16">
        <Sidebar active={post.category} />
        <div className="hidden w-px bg-border lg:block" />

        <article className="min-w-0 flex-1">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link
              href={`/${post.category}`}
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors duration-150 hover:text-accent"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="10 12 6 8 10 4" />
              </svg>
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </Link>
          </nav>

          {/* Header */}
          <header className="pb-10">
            <p className="mb-3 text-[0.8125rem] text-ink-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>

            <h1 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.2]">
              {post.title}
            </h1>
          </header>

          {/* Table of contents */}
          {post.headings.length > 0 && (
            <nav className="mb-10 rounded-radius-md border border-border bg-surface-raised p-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-ink-faint">
                On this page
              </p>
              <ul className="space-y-1.5">
                {post.headings.map((h) => (
                  <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
                    <a
                      href={`#${h.id}`}
                      className="text-sm text-accent transition-colors duration-150 hover:text-accent-hover"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Divider */}
          <div className="relative mb-10 flex items-center justify-center">
            <div className="h-px flex-1 bg-border" />
            <div className="diamond mx-4" />
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Post body */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Separator */}
          <div className="my-16 text-center text-sm tracking-[0.5em] text-ink-faint">
            * * *
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <section className="mb-16">
              <h2 className="mb-6 text-xs font-medium uppercase tracking-wider text-ink-faint">
                Keep reading
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/notes/${r.slug}`}
                    className="group rounded-radius-md border border-border bg-surface-raised p-5 transition-all duration-200 hover:border-accent-border hover:shadow-md"
                  >
                    <p className="font-serif text-base font-[450] leading-snug text-ink transition-colors duration-150 group-hover:text-accent">
                      {r.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {r.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </div>
  );
}
