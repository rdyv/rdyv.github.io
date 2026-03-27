const icons: Record<string, React.ReactNode> = {
  document: (
    <svg viewBox="0 0 64 64" fill="currentColor">
      <rect x="14" y="6" width="36" height="48" rx="3" opacity="0.15" />
      <rect
        x="14"
        y="6"
        width="36"
        height="48"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="22"
        y1="18"
        x2="42"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="22"
        y1="26"
        x2="42"
        y2="26"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="22"
        y1="34"
        x2="36"
        y2="34"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="22" y="42" width="12" height="4" rx="1" opacity="0.4" />
    </svg>
  ),
  lightning: (
    <svg viewBox="0 0 64 64" fill="currentColor">
      <polygon
        points="36,4 16,36 28,36 24,60 48,24 34,24 40,4"
        opacity="0.15"
      />
      <polygon
        points="36,4 16,36 28,36 24,60 48,24 34,24 40,4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  graph: (
    <svg viewBox="0 0 64 64" fill="currentColor">
      <circle cx="32" cy="16" r="6" opacity="0.15" />
      <circle
        cx="32"
        cy="16"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="16" cy="44" r="6" opacity="0.15" />
      <circle
        cx="16"
        cy="44"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="48" cy="44" r="6" opacity="0.15" />
      <circle
        cx="48"
        cy="44"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="28"
        y1="21"
        x2="19"
        y2="39"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="36"
        y1="21"
        x2="45"
        y2="39"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="22"
        y1="44"
        x2="42"
        y2="44"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 3"
      />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 64 64" fill="currentColor">
      <rect x="8" y="18" width="20" height="28" rx="3" opacity="0.15" />
      <rect
        x="8"
        y="18"
        width="20"
        height="28"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="36" y="18" width="20" height="28" rx="3" opacity="0.15" />
      <rect
        x="36"
        y="18"
        width="20"
        height="28"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="28"
        y1="28"
        x2="36"
        y2="28"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="28"
        y1="36"
        x2="36"
        y2="36"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="14" cy="28" r="2" opacity="0.5" />
      <circle cx="14" cy="36" r="2" opacity="0.5" />
      <circle cx="50" cy="28" r="2" opacity="0.5" />
      <circle cx="50" cy="36" r="2" opacity="0.5" />
    </svg>
  ),
  hammer: (
    <svg viewBox="0 0 64 64" fill="currentColor">
      <rect
        x="28"
        y="30"
        width="6"
        height="26"
        rx="2"
        transform="rotate(-45 31 43)"
        opacity="0.15"
      />
      <rect
        x="28"
        y="30"
        width="6"
        height="26"
        rx="2"
        transform="rotate(-45 31 43)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M30 8 L42 8 L48 18 L42 28 L24 28 L18 18 Z" opacity="0.15" />
      <path
        d="M30 8 L42 8 L48 18 L42 28 L24 28 L18 18 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 64 64" fill="currentColor">
      <circle cx="32" cy="14" r="6" opacity="0.15" />
      <circle
        cx="32"
        cy="14"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="32" cy="50" r="6" opacity="0.15" />
      <circle
        cx="32"
        cy="50"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="48" cy="32" r="6" opacity="0.15" />
      <circle
        cx="48"
        cy="32"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="32"
        y1="20"
        x2="32"
        y2="44"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M32 28 Q32 32 42 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 64 64" fill="currentColor">
      <ellipse cx="32" cy="16" rx="18" ry="8" opacity="0.15" />
      <ellipse
        cx="32"
        cy="16"
        rx="18"
        ry="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M14 16 V48 C14 52.4 22 56 32 56 C42 56 50 52.4 50 48 V16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M14 32 C14 36.4 22 40 32 40 C42 40 50 36.4 50 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 3"
      />
    </svg>
  ),
  circle: (
    <svg viewBox="0 0 64 64" fill="currentColor">
      <circle cx="32" cy="32" r="22" opacity="0.15" />
      <circle
        cx="32"
        cy="32"
        r="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="32" cy="32" r="8" opacity="0.3" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 64 64" fill="currentColor">
      <path
        d="M32 6 C32 6 44 16 44 34 L36 42 L28 42 L20 34 C20 16 32 6 32 6Z"
        opacity="0.15"
      />
      <path
        d="M32 6 C32 6 44 16 44 34 L36 42 L28 42 L20 34 C20 16 32 6 32 6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="24" r="4" opacity="0.4" />
      <line
        x1="26"
        y1="50"
        x2="28"
        y2="42"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="38"
        y1="50"
        x2="36"
        y2="42"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="32"
        y1="54"
        x2="32"
        y2="44"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 64 64" fill="currentColor">
      <rect x="8" y="12" width="48" height="40" rx="4" opacity="0.15" />
      <rect
        x="8"
        y="12"
        width="48"
        height="40"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <polyline
        points="18,28 28,34 18,40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="34"
        y1="40"
        x2="46"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  bug: (
    <svg viewBox="0 0 64 64" fill="currentColor">
      <ellipse cx="32" cy="36" rx="14" ry="18" opacity="0.15" />
      <ellipse
        cx="32"
        cy="36"
        rx="14"
        ry="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="32" cy="20" r="8" opacity="0.15" />
      <circle
        cx="32"
        cy="20"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="12"
        y1="30"
        x2="18"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="46"
        y1="30"
        x2="52"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="14"
        y1="42"
        x2="18"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="50"
        y1="42"
        x2="46"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="28" cy="18" r="2" opacity="0.5" />
      <circle cx="36" cy="18" r="2" opacity="0.5" />
    </svg>
  ),
};

export function PostIconLarge({ icon }: { icon: string }) {
  return (
    <div className="flex aspect-[16/10] w-full items-center justify-center rounded-t-radius-xs border border-border bg-code-bg">
      <div className="w-16 text-ink-faint">{icons[icon] ?? icons.document}</div>
    </div>
  );
}

export function PostIconInline({ icon }: { icon: string }) {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center text-ink-faint">
      {icons[icon] ?? icons.document}
    </span>
  );
}
