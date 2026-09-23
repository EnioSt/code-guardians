import { ThemeToggle } from "../button/ThemeToggle";

export function Header() {
  return (
    <header className="w-full border-b border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2.5 transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Identificação discreta da squad no topo */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold tracking-wider text-[var(--accent-color)]">
            &lt;CODE GUARDIANS /&gt;
          </span>
        </div>

        {/* Botão de Tema no canto direito */}
        <ThemeToggle />
      </div>
    </header>
  );
}
