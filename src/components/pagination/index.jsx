import { ChevronsLeft, ChevronsRight } from "lucide-react";

export function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  // Função para gerar os números das páginas a exibir
  const getPageNumbers = () => {
    const pages = [];
    // Simplificação: se for menos de 6 páginas, mostra todas
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Se for mais, mostra a primeira, a última, e as próximas da atual
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }
    return pages;
  };

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        title="Primeira Página"
        className="flex cursor-pointer items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-2 text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card-hover)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronsLeft size={16} />
      </button>

      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() =>
              typeof page === "number" ? onPageChange(page) : null
            }
            disabled={typeof page !== "number"}
            className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              currentPage === page
                ? "bg-[var(--accent-color)] text-white"
                : typeof page === "number"
                  ? "cursor-pointer text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]"
                  : "cursor-default text-[var(--text-secondary)]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        title="Última Página"
        className="flex cursor-pointer items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-2 text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card-hover)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronsRight size={16} />
      </button>
    </div>
  );
}
