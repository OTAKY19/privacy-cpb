import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center md:pt-32 md:pb-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Réussis ton code
          <br />
          <span className="text-primary">du premier coup.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted md:text-lg">
          Prépare-toi à l&apos;examen du code de la route avec des quiz illimités, des examens
          blancs et un suivi de progression personnalisé.
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
            Google Play
          </a>
          <Link
            href="#features"
            className="inline-flex h-12 items-center rounded-full border border-border px-8 text-sm font-medium transition-colors hover:bg-surface"
          >
            En savoir plus
          </Link>
        </div>
        <p className="mt-6 flex items-center justify-center gap-1 text-sm text-muted">
          <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          4.9 · Approuvé par les auto-écoles du Bénin
        </p>
      </div>
    </section>
  );
}
