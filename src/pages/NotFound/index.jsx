import { Link } from "react-router-dom";
import { PageLayout } from "../../components/layout/PageLayout";

export function NotFound() {
  return (
    <PageLayout showFilters={false}>
      <div className="flex h-full flex-col items-center justify-center py-16 text-center">
        <h1 className="mb-4 text-6xl font-bold tracking-tight text-[var(--text-primary)]">
          404
        </h1>
        <h2 className="mb-6 text-xl font-medium text-[var(--text-secondary)] sm:text-2xl">
          Página não encontrada
        </h2>
        <p className="mb-8 max-w-md text-sm text-[var(--text-secondary)]">
          Ops! A página que você está procurando não existe, foi removida ou
          está temporariamente indisponível.
        </p>
        <Link
          to="/"
          className="rounded-lg bg-[var(--accent-color)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-color)]/90"
        >
          Voltar para a Home
        </Link>
      </div>
    </PageLayout>
  );
}
