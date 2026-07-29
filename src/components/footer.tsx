import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-muted md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} BÉNIN TECHNOLOGIE CONSULTING</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Politique de confidentialité
          </Link>
          <a
            href="mailto:privacy@btcbenin.com"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
