import { useState, useMemo } from "react";
import { minutesData } from "../../data/minuteData";
import { Header } from "../../components/layout/header";
import { MinuteCard } from "../../components/cards";

export function MinutesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Filtra por termo de busca e intervalo de datas (De / Até)
  const filteredMinutes = useMemo(() => {
    return minutesData.filter((item) => {
      // Filtro por título
      const matchesTitle = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Filtro por período
      const matchesStartDate = startDate ? item.date >= startDate : true;
      const matchesEndDate = endDate ? item.date <= endDate : true;

      return matchesTitle && matchesStartDate && matchesEndDate;
    });
  }, [searchTerm, startDate, endDate]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setStartDate("");
    setEndDate("");
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
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
            Atas de Reunião ({filteredMinutes.length})
          </h1>
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

      {/* FOOTER SIMPLES */}
      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-card)] py-6 text-center text-xs text-[var(--text-secondary)]">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; 2026 Desenvolvido por Enio Junior</span>
          <span className="font-mono text-[10px] opacity-70">v1.0.0</span>
        </div>
      </footer>
    </div>
  );
}
