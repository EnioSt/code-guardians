export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-card)] py-6 text-xs text-[var(--text-secondary)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        {/* Identificação da Squad + Status */}
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-[var(--accent-color)]">
            &lt;CODE GUARDIANS /&gt;
          </span>
          <span className="hidden h-3 w-px bg-[var(--border-color)] sm:inline-block" />
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Squad Ativa</span>
          </div>
        </div>

        {/* Copyright e Versão (com margem direita para não bater no FAQ) */}
        <div className="flex items-center gap-3 sm:pr-14">
          <span>
            &copy; {new Date().getFullYear()} Desenvolvido por Enio Junior
          </span>
          <span className="rounded border border-[var(--border-color)] bg-[var(--bg-primary)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-primary)]">
            v1.0.0
          </span>
        </div>
      </div>
    </footer>
  );
}
