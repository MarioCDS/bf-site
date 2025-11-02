import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { speakers } from "@/lib/data/speakers";

export default function SpeakerDetail({ params }:{ params: { slug: string } }) {
  const s = speakers.find((x) => x.slug === params.slug);
  if (!s) return notFound();
  return (
    <Section title={s.name} subtitle={`${s.title}${s.org ? `, ${s.org}` : ""}`}>
      <div className="grid md:grid-cols-3 gap-8">
        <img src={s.headshot || "/placeholder.svg"} alt={s.name} className="rounded-2xl bg-gray-100 w-full h-auto"/>
        <div className="md:col-span-2">
          <p className="muted whitespace-pre-line">{s.bio}</p>
        </div>
      </div>
    </Section>
  );
}
