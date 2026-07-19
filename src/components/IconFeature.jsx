export default function IconFeature({ icon, title, description, align = "left" }) {
  const isCenter = align === "center";

  return (
    <div className={`flex gap-4 ${isCenter ? "flex-col items-center text-center" : "items-start text-left"}`}>
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-lg font-semibold text-brand-dark">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-brand-gray">{description}</p>
      </div>
    </div>
  );
}
