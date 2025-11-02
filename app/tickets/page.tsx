import Section from "@/components/Section";

export default function TicketsPage() {
  return (
    <Section title="Tickets" subtitle="Draft pricing & conditions">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <div className="font-semibold">Prices</div>
          <ul className="mt-2 space-y-2 list-disc pl-5 text-sm">
            <li>1 day: €9</li>
            <li>2 days: €15</li>
          </ul>
        </div>
        <div className="card">
          <div className="font-semibold">Free entry</div>
          <ul className="mt-2 space-y-2 list-disc pl-5 text-sm">
            <li>Nova SBE students</li>
            <li>Students (not from Nova SBE) or non‑students under 23</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
