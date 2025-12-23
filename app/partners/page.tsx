import SectionWithBackground from "@/components/SectionWithBackground";
import { partners } from "@/lib/data/partners";

export default function PartnersPage() {
  const tiers = ["Host","Main","Partner","Supporter"] as const;
  return (
    <SectionWithBackground title="Partners" subtitle="Structural & institutional collaborators (draft)" backgroundTheme="underwater">
      <div className="grid gap-8">
        {tiers.map((t) => (
          <div key={t}>
            <h3 className="font-semibold mb-3 text-white">{t}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {partners.filter(p => p.tier===t).map((p) => (
                <div key={p.name} className="card text-center">{p.name}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWithBackground>
  );
}
