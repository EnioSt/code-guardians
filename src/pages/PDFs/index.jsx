import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, FileDown, ArrowLeft } from "lucide-react";
import { minutesData } from "../../data/minuteData";
import { ThemeToggle } from "../../components/button";

export function MinutesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");

  // Filtra as atas conforme digitação ou seleção de data
  const filteredMinutes = useMemo(() => {
    return minutesData.filter((item) => {
      const matchesTitle = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesDate = filterDate ? item.date === filterDate : true;
      return matchesTitle && matchesDate;
    });
  }, [searchTerm, filterDate]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* 
        HEADER RESPONSIVO:
        - Logo clicável (volta para /)
        - Campo de busca por título
        - Filtro por data
        - Botão de tema
      */}
      <header className="sticky top-0 z-30 border-b border-[var(--border-color)] bg-[var(--bg-card)]/90 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Logo / Botão de Voltar para Home */}
          <Link
            to="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-80"
            title="Voltar para a página inicial"
          >
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--bg-card-hover)]">
              {/* Pode ser a imagem /assets/img/icon.png ou um ícone */}
              <img
                src="/icon.png"
                alt="Logo Code Guardians"
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Fallback se não encontrar a imagem
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-color)]">
                <ArrowLeft
                  size={14}
                  className="transition-transform group-hover:-translate-x-0.5"
                />
                <span>Voltar à Home</span>
              </div>
              <span className="font-mono text-sm font-bold text-[var(--text-primary)]">
                CODE GUARDIANS
              </span>
            </div>
          </Link>

          {/* Filtros de Pesquisa (Título e Data) */}
          <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center md:max-w-xl md:justify-end">
            {/* Campo de Busca por Título */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar por título da ata..."
                className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] py-1.5 pl-9 pr-3 text-xs text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--accent-color)] focus:outline-none"
              />
            </div>

            {/* Campo de Filtro por Data */}
            <div className="relative">
              <Calendar
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
              />
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] py-1.5 pl-9 pr-3 text-xs text-[var(--text-primary)] focus:border-[var(--accent-color)] focus:outline-none sm:w-auto"
              />
            </div>

            {/* Limpar Filtros (só aparece se algum filtro estiver ativo) */}
            {(searchTerm || filterDate) && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterDate("");
                }}
                className="text-xs text-[var(--accent-color)] hover:underline whitespace-nowrap"
              >
                Limpar
              </button>
            )}

            {/* Botão de Tema no Header */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL (LISTA DE ATAS) */}
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
