import { useRef } from "react";
import { Search, Calendar, Tag } from "lucide-react";

export function Filters({
  searchTerm,
  onSearchChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  onClearFilters,
}) {
  // 1. Criamos as referências para os dois inputs de data
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const hasActiveFilters = searchTerm || startDate || endDate;

  return (
    <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center md:max-w-2xl md:justify-end">
      {/* Campo de Busca por Título */}
      <div className="relative flex-1">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Pesquisar por título da ata..."
          className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] py-1.5 pl-9 pr-3 text-xs text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--accent-color)] focus:outline-none"
        />
      </div>

      {/* Container de Datas - Lado a lado no mobile */}
      <div className="flex w-full gap-2 sm:w-auto">
        {/* Filtro: Data Inicial (De) */}
        <div className="relative flex-1 sm:flex-none">
          {/* Ícone agora é um botão clicável que abre o calendário */}
          <button
            type="button"
            onClick={() => startDateRef.current?.showPicker?.()}
            className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded p-1 text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-color)]"
            title="Abrir calendário"
          >
            <Calendar size={16} />
          </button>
          <input
            ref={startDateRef}
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            title="Data Inicial"
            className="w-full min-w-0 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] py-1.5 pl-8 pr-2 text-xs text-[var(--text-primary)] [color-scheme:light] dark:[color-scheme:dark] [&::-webkit-calendar-picker-indicator]:hidden focus:border-[var(--accent-color)] focus:outline-none sm:w-auto"
          />
        </div>

        {/* Filtro: Data Final (Até) */}
        <div className="relative flex-1 sm:flex-none">
          {/* Ícone agora é um botão clicável que abre o calendário */}
          <button
            type="button"
            onClick={() => endDateRef.current?.showPicker?.()}
            className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded p-1 text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-color)]"
            title="Abrir calendário"
          >
            <Calendar size={16} />
          </button>
          <input
            ref={endDateRef}
            type="date"
            value={endDate}
            min={startDate || undefined}
            onChange={(e) => onEndDateChange(e.target.value)}
            title="Data Final"
            className="w-full min-w-0 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] py-1.5 pl-8 pr-2 text-xs text-[var(--text-primary)] [color-scheme:light] dark:[color-scheme:dark] [&::-webkit-calendar-picker-indicator]:hidden focus:border-[var(--accent-color)] focus:outline-none sm:w-auto"
          />
        </div>
      </div>

      {/* Botão de Limpar Filtros */}
      {hasActiveFilters && (
        <button
          type="button"
          onClick={onClearFilters}
          className="whitespace-nowrap text-xs text-[var(--accent-color)] hover:underline"
        >
          Limpar
        </button>
      )}
    </div>
  );
}

export function TagFilter({ selectedTag, onTagChange, tags }) {
  return (
    <div className="relative inline-flex items-center">
      <Tag
        size={14}
        className="pointer-events-none absolute left-3 text-[var(--text-secondary)]"
      />
      <select
        value={selectedTag}
        onChange={(e) => onTagChange(e.target.value)}
        aria-label="Filtrar por tag"
        className="cursor-pointer rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] py-1.5 pl-8 pr-8 text-xs font-medium text-[var(--text-primary)] transition-colors focus:border-[var(--accent-color)] focus:outline-none"
      >
        <option value="">Todas as tags</option>
        {tags.map((tag) => (
          <option key={tag} value={tag} className="bg-[var(--bg-card)]">
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}
