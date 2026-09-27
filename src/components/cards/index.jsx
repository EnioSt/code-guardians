import { Link } from "react-router-dom";
import { ExternalLink, ChevronRight, FileText, FileDown } from "lucide-react";

export function ActionCard({
  title,
  description,
  icon: Icon,
  type,
  to,
  href,
  onClick,
}) {
  // Estilos compartilhados por todos os cards
  const cardClasses =
    "group flex flex-col justify-between rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm transition-all hover:border-[var(--accent-color)] hover:bg-[var(--bg-card-hover)] hover:shadow-md cursor-pointer text-left w-full";

  const content = (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-color)]/10 text-[var(--accent-color)]">
            {Icon ? <Icon size={22} /> : <FileText size={22} />}
          </div>
          {type === "external" && (
            <ExternalLink
              size={16}
              className="text-[var(--text-secondary)] opacity-60 group-hover:opacity-100"
            />
          )}
          {type === "route" && (
            <ChevronRight
              size={18}
              className="text-[var(--text-secondary)] transition-transform group-hover:translate-x-1"
            />
          )}
        </div>
        <h3 className="mt-4 text-base font-bold text-[var(--text-primary)]">
          {title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
          {description}
        </p>
      </div>
    </>
  );

  // 1. Link Externo (Figma, Jira)
  if (type === "external") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
      >
        {content}
      </a>
    );
  }

  // 2. Rota interna (Vai para a página de Atas)
  if (type === "route") {
    return (
      <Link to={to} className={cardClasses}>
        {content}
      </Link>
    );
  }

  // 3. Abre Modal informativo
  return (
    <button type="button" onClick={onClick} className={cardClasses}>
      {content}
    </button>
  );
}

export function MinuteCard({ item }) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm transition-all hover:border-[var(--accent-color)] hover:bg-[var(--bg-card-hover)]">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-[var(--accent-color)]">
            [ {item.displayDate} ]
          </span>
          {item.tags && (
            <span className="rounded bg-[var(--accent-color)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--accent-color)]">
              {item.tags[0]}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-base font-bold text-[var(--text-primary)]">
          {item.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Botão de Acesso ao PDF */}
      <div className="mt-6 border-t border-[var(--border-color)] pt-4">
        <a
          href={item.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-2 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
        >
          <FileDown size={15} />
          <span>Visualizar PDF</span>
        </a>
      </div>
    </div>
  );
}
