import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type Category = "notes" | "projects" | "about";

export const sidebarLinks: { slug: string; label: string }[] = [
  { slug: "notes", label: "Notes" },
  { slug: "projects", label: "Projects" },
  { slug: "about", label: "About" },
];

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  icon: string;
  featured: boolean;
  category: Category;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface Post extends PostMeta {
  contentHtml: string;
  headings: Heading[];
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description ?? "",
        author: data.author ?? "Rd",
        icon: data.icon ?? "document",
        featured: data.featured ?? false,
        category: (data.category as Category) ?? "notes",
      };
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostsByCategory(category: Category): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  const lines = markdown.split("\n");
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      headings.push({
        id: slugify(match[2]),
        text: match[2],
        level: match[1].length,
      });
    }
  }
  return headings;
}

function addHeadingIds(htmlStr: string, headings: Heading[]): string {
  let idx = 0;
  return htmlStr.replace(/<(h[23])>(.*?)<\/\1>/g, (match, tag, text) => {
    if (idx < headings.length) {
      const id = headings[idx].id;
      idx++;
      return `<${tag} id="${id}">${text}</${tag}>`;
    }
    return match;
  });
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const headings = extractHeadings(content);
  const processed = await remark().use(html).process(content);
  let contentHtml = processed.toString();
  contentHtml = addHeadingIds(contentHtml, headings);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description ?? "",
    author: data.author ?? "Rd",
    icon: data.icon ?? "document",
    featured: data.featured ?? false,
    category: (data.category as Category) ?? "notes",
    contentHtml,
    headings,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getRelatedPosts(currentSlug: string, count = 2): PostMeta[] {
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, count);
}
