import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark" || true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="cursor-pointer fixed right-4 top-4 z-50 flex items-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] px-3 py-2 text-xs font-semibold text-[var(--text-primary)] shadow-md transition-all hover:bg-[var(--bg-card-hover)]"
      title="Alternar Tema"
    >
      <span>{isDark ? "☀️ Tema Claro" : "🌙 Tema Escuro"}</span>
    </button>
  );
}
("");
