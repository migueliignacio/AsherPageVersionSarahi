/**
 * lucide-react dropped brand glyphs in v1, so the two social marks we need are
 * kept here as plain inline SVG. Sized in em so they inherit the button scale.
 */

const base = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function InstagramIcon({ className = "text-base" }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ className = "text-base" }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-11h4v1.5A6 6 0 0 1 16 8z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function FacebookIcon({ className = "text-base" }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path
        d="M14 8.2h-1.3a2 2 0 0 0-2 2V12H8.3v3h2.4v6h3v-6h2l.4-3h-2.4v-1.4c0-.4.3-.7.7-.7H14z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function TiktokIcon({ className = "text-base" }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M13.2 6.5v8.6a2.4 2.4 0 1 1-2.4-2.4c.1 0 .3 0 .4.02" />
      <path d="M13.2 6.5c.25 1.7 1.5 3 3.2 3.2" />
    </svg>
  );
}

export function WhatsappIcon({ className = "text-base" }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
      <path
        d="M8.4 8.3c-.3 0-.6.1-.8.4-.3.3-.9 1-.9 2.3 0 1.3.9 2.6 1 2.8.1.2 1.8 2.9 4.5 4 .6.3 1.1.4 1.5.5.6.2 1.2.1 1.6 0 .5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3l-1.8-.9c-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-.5-.2-1.5-.6-2.4-1.4-.7-.6-1.2-1.4-1.4-1.7-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5s0-.4-.1-.5c-.1-.2-.7-1.7-1-2.3-.2-.5-.4-.5-.6-.5z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
