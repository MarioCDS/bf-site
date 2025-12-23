import SectionWithBackground from "@/components/SectionWithBackground";
import { agenda } from "@/lib/data/agenda";

export default function AgendaPage() {
  const day1 = agenda.filter(a => a.day === 1);
  const day2 = agenda.filter(a => a.day === 2);
  const Day = ({items, label}:{items: typeof agenda, label: string}) => (
    <div className="card">
      <h3 className="font-semibold mb-4">{label}</h3>
      <ul className="divide-y divide-gray-100">
        {items.map((slot, i) => (
          <li key={i} className="py-3 flex gap-4">
            <div className="w-20 shrink-0 font-semibold">{slot.time}</div>
            <div>
              <div>{slot.title}</div>
              {slot.speakers && <div className="text-sm text-gray-600">{slot.speakers.join(", ")}</div>}
              {slot.description && <div className="text-sm text-gray-600">{slot.description}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <SectionWithBackground title="Agenda" subtitle="Two-day public program (draft)" backgroundTheme="coral">
      <div className="grid md:grid-cols-2 gap-6">
        <Day items={day1} label="Day 1" />
        <Day items={day2} label="Day 2" />
      </div>
    </SectionWithBackground>
  );
}
