export function CTASection() {
  return (
    <section className="border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Prêt à commencer ?</h2>
        <p className="mt-3 text-muted">
          Rejoins les milliers d&apos;élèves qui préparent leur code avec Code Permis Bénin.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=com.codepermisbenin.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            Télécharger sur Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
