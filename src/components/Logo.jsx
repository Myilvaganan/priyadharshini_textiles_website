export default function Logo({ dark = false, className = "" }) {
  const nameColor = dark ? "text-brand-dark" : "text-white";
  const subColor = dark ? "text-brand-green" : "text-brand-gold-light";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M20 3 C11 3 4 10 4 19 C4 27 10 33 18 34.5 C13 30 11 24 14 18 C16.5 13 22 11 22 11 C18 15 17 20 20 24 C23 20 22 15 18 11 C18 11 23.5 12.5 26 18 C29 24 27 30 22 34.5 C30 33 36 27 36 19 C36 10 29 3 20 3 Z"
          fill="#C9A24B"
        />
      </svg>
      <div className="leading-tight">
        <div className={`font-serif text-lg font-bold tracking-wide ${nameColor}`}>
          Priyadharshini
        </div>
        <div className={`text-[11px] font-medium uppercase tracking-[0.25em] ${subColor}`}>
          Textiles
        </div>
      </div>
    </div>
  );
}
