import { ChevronsLeft, ChevronsRight } from "lucide-react";

import { usePagination } from "../../hooks/usePagination";

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = usePagination({ currentPage, totalPages });

  if (totalPages <= 1) return null;

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
        {pages.map((page, index) => (
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
