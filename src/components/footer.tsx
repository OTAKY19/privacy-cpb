import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-muted">
        <p>
          Créé avec <span aria-hidden="true" className="text-red-500">♥</span><span className="sr-only">amour</span> au Bénin
        </p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="transition-colors hover:text-fg">
            Confidentialité
          </Link>
          <a href="mailto:privacy@btcbenin.com" className="transition-colors hover:text-fg">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
