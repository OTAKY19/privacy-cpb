import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-bold tracking-tight text-primary">
          Code Permis Bénin
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <Link href="#features" className="transition-colors hover:text-foreground">
            Fonctionnalités
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.codepermisbenin.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-light"
          >
            Télécharger
          </a>
        </nav>
      </div>
    </header>
  );
}
