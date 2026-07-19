import { Link } from "react-router-dom";

export default function Breadcrumb({ items = [], light = false }) {
  const linkColor = light ? "text-brand-gold-light" : "text-brand-gold";
  const sepColor = light ? "text-white/50" : "text-brand-gray";

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-medium">
      <Link to="/" className={`${linkColor} hover:underline`}>
        Home
      </Link>
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          <span className={sepColor}>&gt;</span>
          {item.to && i !== items.length - 1 ? (
            <Link to={item.to} className={`${linkColor} hover:underline`}>
              {item.label}
            </Link>
          ) : (
            <span className={light ? "text-white/80" : "text-brand-gray"}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
