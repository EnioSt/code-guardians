import { X } from "lucide-react";

export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Camada escura com embaçamento de fundo */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Caixa do Modal */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-2xl">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
          <h3 className="text-lg font-bold text-[var(--text-primary)]">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Conteúdo textual */}
        <div className="mt-4 max-h-[70vh] overflow-y-auto text-sm leading-relaxed text-[var(--text-secondary)]">
          {children}
        </div>
      </div>
    </div>
  );
}
