import { useState } from "react";
import { Modal } from "../../modal";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  WhatsappIcon,
} from "../../icons/Icon";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            &copy; {new Date().getFullYear()} Desenvolvido por{" "}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer font-medium text-[var(--accent-color)] transition-colors hover:underline"
            >
              Enio Junior
            </button>
          </span>
          <span className="rounded border border-[var(--border-color)] bg-[var(--bg-primary)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-primary)]">
            v1.0.0
          </span>
        </div>
      </div>

      {/* Modal Redes Sociais */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Minhas Redes Sociais"
      >
        <div className="flex flex-col gap-4">
          <p>Conecte-se comigo através das minhas redes:</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href="https://www.linkedin.com/in/enio-santos-635860161/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-[var(--border-color)] p-3 text-[var(--text-primary)] transition-colors hover:border-[var(--accent-color)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-color)]"
            >
              <LinkedinIcon size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/EnioSt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-[var(--border-color)] p-3 text-[var(--text-primary)] transition-colors hover:border-[var(--accent-color)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-color)]"
            >
              <GithubIcon size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/enio_santosjr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-[var(--border-color)] p-3 text-[var(--text-primary)] transition-colors hover:border-[var(--accent-color)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-color)]"
            >
              <InstagramIcon size={20} />
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/+5517997553609"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-[var(--border-color)] p-3 text-[var(--text-primary)] transition-colors hover:border-[var(--accent-color)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-color)]"
            >
              <WhatsappIcon size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </Modal>
    </footer>
  );
}
