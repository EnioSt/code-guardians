export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-card)] py-6 text-center text-xs text-[var(--text-secondary)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row">
        <span>&copy; 2026 Desenvolvido por Enio Junior</span>
        <span className="font-mono text-[10px] opacity-70">v1.0.0</span>
      </div>
    </footer>
  );
}
