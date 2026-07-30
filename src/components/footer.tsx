export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center font-mono text-[.72rem] font-medium uppercase tracking-[.14em] text-muted">
        <p className="flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="inline-block size-4 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #ff5c5c 30%, #e03c3c 70%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "heart-beat 4s ease-in-out infinite",
            }}
          >
            ♥
          </span>
          <span className="sr-only">Amour</span>
          © 2026 Code Permis Bénin — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
