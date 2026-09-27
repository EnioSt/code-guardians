import { useState, useMemo } from "react";
import { FileDown } from "lucide-react";
import { minutesData } from "../../data/minuteData";
import { Header } from "../../components/layout/header";

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
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm transition-all hover:border-[var(--accent-color)] hover:bg-[var(--bg-card-hover)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--accent-color)]">
                      [ {item.displayDate} ]
                    </span>
                    {item.tags && (
                      <span className="rounded bg-[var(--accent-color)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--accent-color)]">
                        {item.tags[0]}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-base font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Botão de Acesso ao PDF */}
                <div className="mt-6 pt-4 border-t border-[var(--border-color)]">
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] py-2 px-3 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
                  >
                    <FileDown size={15} />
                    <span>Visualizar PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* FOOTER SIMPLES */}
      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-card)] py-6 text-center text-xs text-[var(--text-secondary)]">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; 2026 Code Guardians — Squad Repositório</span>
          <span className="font-mono text-[10px] opacity-70">v1.0.0</span>
        </div>
      </footer>
    </div>
  );
}
