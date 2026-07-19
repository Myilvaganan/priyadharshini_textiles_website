export default function SectionLabel({ children, breadcrumb, className = "" }) {
  return (
    <p className={`eyebrow ${className}`}>
      {breadcrumb ? <span>Home &gt; {children}</span> : children}
    </p>
  );
}
