import { Link } from "react-router-dom";
import { ExternalLink, ChevronRight, FileText } from "lucide-react";

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
