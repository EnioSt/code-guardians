import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Filters } from "../../filters";
import icon from "../../../assets/icon.png";
import { ThemeToggle } from "../../button";

export function Header({
  searchTerm,
  onSearchChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  onClearFilters,
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border-color)] bg-[var(--bg-card)]/90 px-4 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Logo e Botão de Voltar */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
          title="Voltar para a página inicial"
        >
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--bg-card-hover)]">
            <img
              src={icon}
              alt="Logo Code Guardians"
              className="h-full w-full object-cover"
              onError={(e) => {
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
            <span className="font-mono text-xs font-bold tracking-wider text-[var(--accent-color)]">
              &lt;CODE GUARDIANS /&gt;
            </span>
          </div>
        </Link>

        {/* Inputs de Filtro */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <Filters
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            startDate={startDate}
            onStartDateChange={onStartDateChange}
            endDate={endDate}
            onEndDateChange={onEndDateChange}
            onClearFilters={onClearFilters}
          />

          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
