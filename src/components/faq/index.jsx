import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { Modal } from "../modal";

export function FloatingFaq() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--accent-color)] text-white shadow-xl transition-all hover:scale-105 active:scale-95"
        title="Dúvidas Frequentes (FAQ)"
        aria-label="Abrir FAQ"
      >
        <HelpCircle size={24} />
      </button>

      {/* Modal do FAQ */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="FAQ - Dúvidas Frequentes"
      >
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[var(--text-primary)]">
              Onde encontro os protótipos?
            </h4>
            <p className="mt-1">
              Acesse o card do Figma na tela inicial para ver todos os fluxos
              desenhados.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-primary)]">
              Com que frequência as atas são atualizadas?
            </h4>
            <p className="mt-1">
              Ao término de cada cerimônia ou alinhamento semanal da squad.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
