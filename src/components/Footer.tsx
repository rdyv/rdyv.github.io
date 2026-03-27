export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl border-x border-border items-center justify-center px-6 py-4 sm:px-8">
        <span className="text-sm text-ink-muted">
          &copy; {new Date().getFullYear()} Rd
        </span>
      </div>
    </footer>
  );
}
