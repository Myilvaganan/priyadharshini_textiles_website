import { Link } from "react-router-dom";

export default function Card({
  image,
  eyebrow,
  title,
  description,
  to,
  linkLabel = "View Details",
  icon,
  children,
  className = "",
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl ${className}`}
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-brand-gold" />

      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        {icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
            {icon}
          </div>
        )}

        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}

        {title && (
          <h3 className="font-serif text-xl font-semibold text-brand-dark">{title}</h3>
        )}

        {description && (
          <p className="mt-2 text-sm leading-relaxed text-brand-gray">{description}</p>
        )}

        {children}

        {to && (
          <Link
            to={to}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-brand-gold transition-colors duration-200 hover:text-brand-dark"
          >
            {linkLabel}
            <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
