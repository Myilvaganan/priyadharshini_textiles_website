import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ease-out hover:scale-[1.03] active:scale-[0.97]";

const variants = {
  primary: "bg-brand-gold text-brand-dark hover:bg-brand-gold-light",
  secondary: "border border-white text-white bg-transparent hover:bg-white/10",
  "secondary-dark":
    "border border-brand-dark text-brand-dark bg-transparent hover:bg-brand-dark hover:text-white",
};

export default function Button({
  to,
  href,
  variant = "primary",
  className = "",
  children,
  onClick,
  type = "button",
  ...rest
}) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
