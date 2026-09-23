import { ThemeToggle } from "../button";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      <div className="relative mx-auto w-full aspect-video md:aspect-[4/1] max-h-[480px]">
        {/* 1. Botão integrado no canto superior direito do banner */}
        <div className="absolute right-3 top-3 z-30 sm:right-4 sm:top-4">
          <ThemeToggle />
        </div>
        <picture className="absolute inset-0 h-full w-full">
          <source
            media="(min-width: 768px)"
            srcSet="/assets/img/banner-desktop2.jpg"
          />
          <img
            src="/assets/img/banner-mobile3.jpg"
            alt="Banner Code Guardians"
            className="h-full w-full object-cover"
          />
        </picture>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-center md:pb-6">
          <h1 className="sr-only">CODE GUARDIANS</h1>
          <p className="mx-auto max-w-2xl text-xs font-medium text-white drop-shadow sm:text-sm md:text-base">
            Sejam bem-vindos à página do projeto! Aqui você encontrará as
            informações, orientações e conteúdos importantes para acompanhar o
            projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
