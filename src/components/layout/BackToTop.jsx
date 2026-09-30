import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Exibe o botão quando a rolagem passar de 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[var(--accent-color)] p-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90 md:rounded-lg md:px-4 md:py-2.5 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {/* Ícone de seta visível apenas em telas menores (celulares) */}
      <ArrowUp size={20} className="md:hidden" />

      {/* Texto visível apenas em telas maiores (desktop) */}
      <span className="hidden text-sm font-medium md:block">
        Voltar ao topo
      </span>
    </button>
  );
}
