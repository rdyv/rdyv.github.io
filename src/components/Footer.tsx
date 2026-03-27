export default function Footer() {
  return (
    <footer className="border-t border-border bg-footer-bg text-sm text-gray-400">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <p>&copy; {new Date().getFullYear()} rdyv</p>
      </div>
    </footer>
  );
}
