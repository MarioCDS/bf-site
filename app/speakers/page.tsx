import Section from "@/components/Section";
import { speakers } from "@/lib/data/speakers";
import SpeakerCard from "@/components/SpeakerCard";

export default function SpeakersPage() {
  return (
    <Section title="Speakers" subtitle="Information on speakers">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakers.map((s) => <SpeakerCard key={s.slug} s={s} />)}
      </div>
    </Section>
  );
}
