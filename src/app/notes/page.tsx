import { getPostsByCategory } from "@/lib/blog";
import PostRow from "@/components/PostRow";
import Sidebar, { MobileNav } from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Notes" };

export default function NotesPage() {
  const posts = getPostsByCategory("notes");

  return (
    <div className="mx-auto flex min-h-full max-w-6xl flex-col px-4 sm:px-6 lg:flex-row lg:gap-10 lg:px-8">
      <div className="pt-8 lg:hidden">
        <MobileNav active="notes" />
      </div>
      <div className="hidden pt-8 lg:block">
        <Sidebar active="notes" />
      </div>
      <div className="hidden w-px self-stretch bg-border lg:block" />
      <div className="min-w-0 flex-1 pb-16 pt-8">
        {posts.map((post) => (
          <PostRow key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
