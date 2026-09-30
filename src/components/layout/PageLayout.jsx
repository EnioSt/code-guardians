import { Header } from "./header";
import { Footer } from "./footer";
import { BackToTop } from "./BackToTop";

export function PageLayout({ children, showFilters = true, headerProps = {} }) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] relative">
      <Header showFilters={showFilters} {...headerProps} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        {children}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
