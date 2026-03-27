export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-footer-bg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <span className="text-xs text-footer-text">
          &copy; {new Date().getFullYear()} Rd
        </span>
        <span className="text-xs text-footer-text">
          Design inspired by my favourite editor{" "}
          <a
            href="https://zed.dev/blog"
            className="text-footer-heading transition-colors duration-150 hover:text-white"
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
