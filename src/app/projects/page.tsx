import Sidebar, { MobileNav } from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects" };

const projects = [
  {
    name: "rdyv.github.io",
    description:
      "This site. A personal blog built with Next.js and Tailwind CSS.",
    url: "https://github.com/rdyv/rdyv.github.io",
  },
  {
    name: "dotfiles",
    description: "My development environment configuration and shell setup.",
    url: "https://github.com/rdyv/dotfiles",
  },
  {
    name: "quick-cli",
    description: "A lightweight CLI toolkit for common dev tasks.",
    url: "https://github.com/rdyv/quick-cli",
  },
  {
    name: "markdown-garden",
    description:
      "A personal knowledge base with bidirectional linking and graph views.",
    url: "https://github.com/rdyv/markdown-garden",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
      <MobileNav active="projects" />
      <div className="flex gap-10 pb-16">
        <Sidebar active="projects" />
        <div className="hidden w-px bg-border lg:block" />
        <div className="min-w-0 flex-1">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-md border-b border-border px-3 py-4 transition-colors duration-150 hover:bg-surface-hover"
            >
              <div className="min-w-0">
                <span className="text-[0.9375rem] font-medium text-ink transition-colors duration-150 group-hover:text-accent">
                  {project.name}
                </span>
                <p className="mt-0.5 text-sm text-ink-muted">
                  {project.description}
                </p>
              </div>
              <svg
                className="h-4 w-4 shrink-0 text-ink-faint transition-colors duration-150 group-hover:text-accent"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
