"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 flex h-14 items-center justify-between px-5 transition-[background,box-shadow,border-color] duration-300 ${
        scrolled ? "navScrolled" : "border-transparent"
      }`}
      aria-label="Navigation principale"
    >
      <Link href="/" className="flex items-center gap-1.5 text-fg">
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
        <span className="font-mono text-[.7rem] font-medium uppercase tracking-[.14em]">
          Code Permis Bénin
        </span>
      </Link>

      <div className="flex items-center gap-0.5">
        <a
          href="https://play.google.com/store/apps/details?id=com.codepermisbenin.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-8 items-center rounded-lg px-3 text-[.82rem] font-medium text-muted transition-colors hover:bg-surface hover:text-fg sm:inline-flex"
        >
          Télécharger
        </a>

        {/* Legal dropdown */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            onBlur={() => setTimeout(() => setMenuOpen(false), 150)}
            className="hidden h-8 items-center rounded-lg px-3 text-[.82rem] font-medium text-muted transition-colors hover:bg-surface hover:text-fg sm:inline-flex"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <circle cx="5" cy="12" r="1.8" />
              <circle cx="12" cy="12" r="1.8" />
              <circle cx="19" cy="12" r="1.8" />
            </svg>
          </button>
          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 top-full mt-1 w-44 rounded-xl border border-border bg-surface py-1 shadow-md"
            >
              <Link
                href="/privacy"
                role="menuitem"
                className="block px-4 py-2 text-[.82rem] text-fg transition-colors hover:bg-surface-hover"
                onClick={() => setMenuOpen(false)}
              >
                Confidentialité
              </Link>
              <Link
                href="/eula"
                role="menuitem"
                className="block px-4 py-2 text-[.82rem] text-fg transition-colors hover:bg-surface-hover"
                onClick={() => setMenuOpen(false)}
              >
                Conditions
              </Link>
            </div>
          )}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
