import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Filters } from "../../filters";
import icon from "../../../assets/icon.png";
// import { ThemeToggle } from "../../button";

export function Header({
  searchTerm,
  onSearchChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  onClearFilters,
  showFilters = true,
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Esconde os filtros se a rolagem passar de 20px
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border-color)] bg-[var(--bg-card)]/90 px-4 py-3 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row md:items-center md:justify-between md:gap-8">
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
        <div
          className={`flex flex-1 items-center justify-end overflow-hidden transition-all duration-300 ease-in-out origin-top ${
            showFilters
              ? isScrolled
                ? "max-h-0 opacity-0 md:max-h-[300px] md:opacity-100"
                : "max-h-[300px] opacity-100"
              : "hidden"
          }`}
        >
          {showFilters && (
            <div className="flex w-full justify-end pt-4 md:pt-0">
              <Filters
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
                startDate={startDate}
                onStartDateChange={onStartDateChange}
                endDate={endDate}
                onEndDateChange={onEndDateChange}
                onClearFilters={onClearFilters}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
