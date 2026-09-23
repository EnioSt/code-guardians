// import { useEffect, useState } from "react";

// export function ThemeToggle() {
//   const [isDark, setIsDark] = useState(() => {
//     return localStorage.getItem("theme") === "dark" || true;
//   });

//   useEffect(() => {
//     const root = document.documentElement;
//     if (isDark) {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDark]);

//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
//       className="cursor-pointer absolute right-4 top-4 z-50 flex items-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] px-3 py-2 text-xs font-semibold text-[var(--text-primary)] shadow-md transition-all hover:bg-[var(--bg-card-hover)]"
//       title="Alternar Tema"
//     >
//       <span>{isDark ? "☀️ Tema Claro" : "🌙 Tema Escuro"}</span>
//     </button>
//   );
// }
// ("");

// import { useEffect, useState } from "react";

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
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-sm text-white backdrop-blur-md shadow-md hover:bg-black/60 active:scale-95"
      title={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
      aria-label="Alternar tema"
    >
      <span>{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
