import { useMemo } from "react";

export function usePagination({ currentPage, totalPages }) {
  const paginationRange = useMemo(() => {
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
  }, [currentPage, totalPages]);

  return paginationRange;
}
