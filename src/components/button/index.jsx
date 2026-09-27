import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-sm text-white backdrop-blur-md shadow-md hover:bg-black/60 active:scale-95 transition-transform"
      title={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
      aria-label="Alternar tema"
    >
      <span>{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
