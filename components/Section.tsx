export default function Section({ title, subtitle, children, className = "" }:{
  title?: string; subtitle?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        {title && <h2 className="h2">{title}</h2>}
        {subtitle && <p className="muted mt-2">{subtitle}</p>}
        <div className={title || subtitle ? "mt-6" : ""}>{children}</div>
      </div>
    </section>
  );
}
