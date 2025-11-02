import Section from "@/components/Section";

export default function SponsorshipPage() {
  const tiers = [
    {
      name: "Supporter",
      price: "€2,500",
      benefits: [
        "Logo on website, program and select materials",
        "Social media thank-you posts",
        "1 representative ticket",
        "Acknowledgement in post‑event report"
      ]
    },
    {
      name: "Partner",
      price: "€7,500",
      benefits: [
        "All Supporter benefits",
        "Logo on main stage screens & banners",
        "Booth in Blue Innovation Hub",
        "2 reps invited to student/speaker networking",
        "Mention in media outreach & newsletters",
        "Co-design a workshop/roundtable with the team"
      ]
    },
    {
      name: "Main Sponsor",
      price: "€15,000",
      benefits: [
        "All Partner benefits",
        "Exclusive branding across key spaces",
        "Speaking opportunity in a keynote/high-level panel",
        "Priority access to student talent pool",
        "Dedicated LinkedIn/Instagram feature",
        "Prominent acknowledgement in outcomes report",
        "Dinner & Cultural Night for up to 5 representatives"
      ]
    }
  ] as const;

  return (
    <Section title="Sponsorship" subtitle="Draft tiers & benefits">
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="card">
            <div className="text-xl font-semibold">{t.name}</div>
            <div className="mt-1 text-sm text-gray-600">{t.price}</div>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-sm">
              {t.benefits.map((b,i)=>(<li key={i}>{b}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
