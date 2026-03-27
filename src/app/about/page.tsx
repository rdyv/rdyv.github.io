import Sidebar, { MobileNav } from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto flex min-h-full max-w-6xl flex-col px-4 sm:px-6 lg:flex-row lg:gap-10 lg:px-8">
      <div className="pt-8 lg:hidden">
        <MobileNav active="about" />
      </div>
      <div className="hidden pt-8 lg:block">
        <Sidebar active="about" />
      </div>
      <div className="hidden w-px self-stretch bg-border lg:block" />
      <div className="min-w-0 flex-1 pb-16 pt-8">
        <h1 className="font-serif text-xl font-semibold text-ink">Rd</h1>
        <div className="mt-3 space-y-3 text-[0.9375rem] leading-relaxed text-ink-muted">
          <p>
            I write software and think about how tools shape the way we work.
          </p>
          <p>
            Most of my time goes into building things with Go, TypeScript, and
            whatever else fits the problem. I care about simplicity, fast
            feedback loops, and code that is easy to delete.
          </p>
          <p>
            This site is where I put down notes, document projects, and
            occasionally share an opinion. Nothing formal, just things I find
            worth writing about.
          </p>
          <p>
            You can find me on{" "}
            <a
              href="https://github.com/rdyv"
              className="text-accent transition-colors duration-150 hover:text-accent-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
