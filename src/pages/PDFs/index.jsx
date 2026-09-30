import { useState, useMemo, useEffect } from "react";
import { minutesData } from "../../data/minuteData";
import { PageLayout } from "../../components/layout/PageLayout";
import { MinuteCard } from "../../components/cards";
import { TagFilter } from "../../components/filters";
import { Pagination } from "../../components/pagination";

const ITEMS_PER_PAGE = 12;

export function MinutesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Extrai automaticamente a lista única de tags a partir dos dados
  const availableTags = useMemo(() => {
    const tagsSet = new Set();
    minutesData.forEach((item) => {
      item.tags?.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, []);

  // 2. Filtra por título, período de datas e tag
  const filteredMinutes = useMemo(() => {
    return minutesData.filter((item) => {
      const matchesTitle = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStartDate = startDate ? item.date >= startDate : true;
      const matchesEndDate = endDate ? item.date <= endDate : true;
      const matchesTag = selectedTag ? item.tags?.includes(selectedTag) : true;

      return matchesTitle && matchesStartDate && matchesEndDate && matchesTag;
    });
  }, [searchTerm, startDate, endDate, selectedTag]);

  // Reseta para a página 1 sempre que os filtros mudarem
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, startDate, endDate, selectedTag]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setStartDate("");
    setEndDate("");
    setSelectedTag("");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Paginação
  const totalPages = Math.ceil(filteredMinutes.length / ITEMS_PER_PAGE);
  const paginatedMinutes = filteredMinutes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <PageLayout
      headerProps={{
        searchTerm,
        onSearchChange: setSearchTerm,
        startDate,
        onStartDateChange: setStartDate,
        endDate,
        onEndDateChange: setEndDate,
        onClearFilters: handleClearFilters,
      }}
    >
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
          Atas de Reunião ({filteredMinutes.length})
        </h1>

        {/* O filtro de tags fica aqui */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--text-secondary)]">
            Categoria:
          </span>
          <TagFilter
            tags={availableTags}
            selectedTag={selectedTag}
            onTagChange={setSelectedTag}
          />
        </div>
      </div>

      {/* Estado Vazio (Nenhum resultado encontrado) */}
      {filteredMinutes.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-color)] py-16 text-center">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Nenhuma ata encontrada com os filtros aplicados.
          </p>
        </div>
      ) : (
        <>
          {/* Grid de Cards de Atas */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedMinutes.map((item) => (
              <MinuteCard key={item.id} item={item} />
            ))}
          </div>

          {/* Paginação */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </PageLayout>
  );
}
