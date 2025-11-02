import Section from "@/components/Section";

const teams = [
  {
    title: "Project Management",
    people: ["Diogo Silva (oikos Lisbon)", "Patricija Zizyte (oikos International)"]
  },
  {
    title: "Partnerships & Fundraising",
    people: ["Duarte Romano", "Ivan Boueke", "Estelle Freuler (manager)", "Victoria Zelianiak"]
  },
  {
    title: "Program Development",
    people: ["João Seixo", "Mathieu Jaumin", "Duarte Romano"]
  },
  {
    title: "Operations & Logistics",
    people: ["Madalena Freire", "Lucas Estèban"]
  },
  {
    title: "Participant Management",
    people: ["Bruna Sampaio"]
  }
];

export default function TeamPage() {
  return (
    <Section title="Team & Governance" subtitle="Draft team structure">
      <div className="grid md:grid-cols-2 gap-6">
        {teams.map((t) => (
          <div key={t.title} className="card">
            <div className="font-semibold">{t.title}</div>
            <ul className="mt-2 text-sm list-disc pl-5">
              {t.people.map((p,i)=>(<li key={i}>{p}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
