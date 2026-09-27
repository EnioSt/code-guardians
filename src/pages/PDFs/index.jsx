import { useState, useMemo } from "react";
import { minutesData } from "../../data/minuteData";
import { Header } from "../../components/layout/header";
import { MinuteCard } from "../../components/cards";
import { Footer } from "../../components/layout/footer";
import { TagFilter } from "../../components/filters";

export function MinutesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

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

  const handleClearFilters = () => {
    setSearchTerm("");
    setStartDate("");
    setEndDate("");
    setSelectedTag("");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* 
        HEADER RESPONSIVO:
        - Logo clicável (volta para /)
        - Campo de busca por título
        - Filtro por data
        - Botão de tema
      */}
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        startDate={startDate}
        onStartDateChange={setStartDate}
        endDate={endDate}
        onEndDateChange={setEndDate}
        onClearFilters={handleClearFilters}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
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
          /* Grid de Cards de Atas */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMinutes.map((item) => (
              <MinuteCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
