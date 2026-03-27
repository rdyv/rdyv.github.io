import { getPostsByCategory } from "@/lib/blog";
import PostRow from "@/components/PostRow";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Notes" };

export default function NotesPage() {
  const posts = getPostsByCategory("notes");

  return (
    <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="flex gap-10 pb-16">
        <Sidebar active="notes" />
        <div className="hidden w-px bg-border lg:block" />
        <div className="min-w-0 flex-1">
          {posts.map((post) => (
            <PostRow key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
