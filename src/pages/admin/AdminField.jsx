const fieldClasses =
  "mt-1.5 w-full rounded-lg border border-brand-dark/15 px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-brand-gold";

export default function AdminField({ label, value, onChange, rows, type = "text" }) {
  return (
    <div>
      <label className="text-sm font-medium text-brand-dark">{label}</label>
      {rows ? (
        <textarea
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={fieldClasses}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={fieldClasses}
        />
      )}
    </div>
  );
}
