import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <section className="mb-16">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink">
          From the Blog
        </h1>
        <p className="mt-3 text-lg text-muted">
          Keep up with the latest posts.
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <div className="divide-y divide-border">
          {posts.map((post, i) => (
            <article key={post.slug} className="py-8 first:pt-0">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-center gap-3 text-sm text-muted">
                  {i === 0 && (
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      Newest
                    </span>
                  )}
                  {post.tags?.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-2 font-serif text-xl font-medium tracking-tight text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-1.5 text-muted leading-relaxed">
                  {post.description}
                </p>
                {post.author && (
                  <p className="mt-3 text-sm text-muted">{post.author}</p>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
