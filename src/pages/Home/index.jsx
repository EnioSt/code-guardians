import { useState } from "react";
import { HeroSection } from "../../components/hero";
import { ActionCard } from "../../components/cards";
import { Modal } from "../../components/modal";
import { FloatingFaq } from "../../components/faq";
import { FileText, Info, Palette } from "lucide-react";

export function Home() {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* 1. Hero no topo absoluto */}
      <HeroSection />

      {/* 2. Área principal com os Cards de Ação */}
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
              &gt; Painel da Squad_
            </h2>
            <p className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
              Acesse as documentações, atas e referências do projeto Code
              Guardians.
            </p>
          </div>
        </div>

        {/* Grid de Cards com a mesma aparência */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Vai para a página interna de Atas (PDFs) */}
          <ActionCard
            type="route"
            to="/atas"
            icon={FileText}
            title="Atas de Reunião"
            description="Consulte todas as atas e decisões registradas em reuniões com filtros por nome e data."
          />

          {/* Card 2: Abre um Modal informativo na tela */}
          <ActionCard
            type="modal"
            icon={Info}
            title="Diretrizes do Projeto"
            description="Veja o regulamento, papéis dos integrantes e padrões de entrega da squad."
            onClick={() => setIsInfoModalOpen(true)}
          />

          {/* Card 3: Link externo (Figma) */}
          <ActionCard
            type="external"
            href="https://www.figma.com"
            icon={Palette}
            title="Protótipos (Figma)"
            description="Acesse as telas navegáveis e o design system oficial no Figma."
          />
        </div>
      </main>

      {/* Modal acionado pelo Card 2 */}
      <Modal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        title="Diretrizes da Squad Code Guardians"
      >
        <div className="space-y-3">
          <p>
            Este repositório centraliza os registros oficiais do time. Abaixo
            estão as convenções gerais:
          </p>
          <ul className="list-inside list-disc space-y-1.5 text-xs text-[var(--text-secondary)] sm:text-sm">
            <li>
              As atas devem ser salvas em formato PDF no diretório público.
            </li>
            <li>Reuniões de alinhamento ocorrem semanalmente.</li>
            <li>
              Dúvidas urgentes devem ser reportadas no canal oficial de
              comunicação.
            </li>
          </ul>
        </div>
      </Modal>

      {/* Botão flutuante de FAQ no canto inferior */}
      <FloatingFaq />
    </div>
  );
}
