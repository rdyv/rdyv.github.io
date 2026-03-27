export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <span className="text-sm text-ink-muted">
          &copy; {new Date().getFullYear()} Rd
        </span>
        <span className="text-sm text-ink-muted">
          Design inspired by my favourite editor{" "}
          <a
            href="https://zed.dev/blog"
            className="text-ink transition-colors duration-150 hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zed&apos;s Blog
          </a>
        </span>
      </div>
    </footer>
  );
}
