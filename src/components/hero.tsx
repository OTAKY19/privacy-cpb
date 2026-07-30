export function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16">
        <figure className="w-60 shrink-0 md:w-72" aria-label="Aperçu de l'application sur iPhone">
          <div className="aspect-[540/1100] overflow-hidden rounded-[2rem] border-4 border-border bg-surface shadow-xl">
            <video
              src="/demo.mp4"
              poster="/black-demo.png"
              width={540}
              height={1100}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
          </div>
        </figure>
        <div className="max-w-lg text-center md:text-left">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider text-muted md:justify-start">
            <span aria-hidden="true" className="opacity-40">//</span>
            <span>Application de code</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Réussis ton code
            <br />
            du premier coup.
          </h1>
          <p className="mt-3 text-base text-muted md:text-lg">
            Prépare-toi à l&apos;examen avec des quiz, des examens blancs et un suivi de progression.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm md:justify-start">
            <span className="flex" role="img" aria-label="Noté 4.9 sur 5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="h-4 w-4 text-amber-400"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.77.56l-4.619-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
              ))}
            </span>
            <span className="font-medium text-fg">4.9</span>
            <span aria-hidden="true" className="text-muted">·</span>
            <span className="text-muted">Google Play</span>
          </div>
          <div className="mt-6 flex flex-col items-center gap-3 md:flex-row md:justify-start">
            <a
              href="https://play.google.com/store/apps/details?id=com.codepermisbenin.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-accent px-5 text-sm font-medium text-[#fafafa] transition-opacity hover:opacity-80"
            >
              <svg viewBox="0 0 512 512" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              Google Play
            </a>
            <a
              href="#"
              className="inline-flex h-10 items-center rounded-xl border border-border px-5 text-sm font-medium transition-colors hover:bg-surface"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" className="mr-2 h-4 w-4" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a13.5 13.5 0 0 0 0 18 13.5 13.5 0 0 0 0-18" />
                <path d="M3 12h18" />
              </svg>
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
