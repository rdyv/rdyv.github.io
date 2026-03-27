"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "site-auth";
const PASSWORD = "letmein";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === PASSWORD) setAuthed(true);
    setChecking(false);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, input);
      setAuthed(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  }

  if (checking) return null;

  if (authed) return <>{children}</>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface">
      <form
        onSubmit={handleSubmit}
        className="flex w-72 flex-col items-center gap-4"
      >
        <p className="text-sm text-ink-muted">
          This site is password protected.
        </p>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Password"
          autoFocus
          className={`w-full rounded-md border bg-surface px-3 py-2 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-ink-faint focus:border-accent ${
            error ? "border-red-400" : "border-border"
          }`}
        />
        <button
          type="submit"
          className="w-full cursor-pointer rounded-md bg-accent px-3 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-accent-hover"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
