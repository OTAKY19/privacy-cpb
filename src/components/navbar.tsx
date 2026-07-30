import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="flex h-14 items-center justify-between border-b border-border px-6" aria-label="Navigation principale">
      <Link
        href="/"
        className="flex items-center gap-1.5 text-sm font-medium text-fg"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.85"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
        <span>Code Permis Bénin</span>
      </Link>
      <div className="flex items-center gap-1">
        <a
          href="https://play.google.com/store/apps/details?id=com.codepermisbenin.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-8 items-center rounded-lg px-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-fg sm:inline-flex"
        >
          Télécharger
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
