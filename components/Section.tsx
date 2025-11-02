export default function Section({ title, subtitle, children }:{
  title: string; subtitle?: string; children: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">{title}</h2>
        {subtitle && <p className="muted mt-2">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
