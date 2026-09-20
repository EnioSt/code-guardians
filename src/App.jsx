import { ThemeToggle } from "./components/button";
import { HeroSection } from "./components/hero";

function App() {
  return (
    <div className="min-h-screen">
      {/* Botão de troca de tema */}
      <ThemeToggle />

      {/* Seção Hero no topo */}
      <HeroSection />

      {/* Área dos Cards de Atas */}
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-xl font-bold text-[var(--text-primary)]">
          &gt; Atas de Reunião_
        </h2>

        {/* Exemplo de card usando as variáveis */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm transition-all hover:border-[var(--accent-color)] hover:bg-[var(--bg-card-hover)]">
            <span className="text-xs font-semibold text-[var(--accent-color)]">
              [ 15/09/2026 ]
            </span>
            <h3 className="mt-2 text-base font-bold text-[var(--text-primary)]">
              Alinhamento de Arquitetura
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
              Definição de regras de negócio, layout e estruturação de pastas do
              projeto Code Guardians.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
