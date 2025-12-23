import SectionWithBackground from "@/components/SectionWithBackground";
import { speakers } from "@/lib/data/speakers";
import SpeakerCard from "@/components/SpeakerCard";

export default function SpeakersPage() {
  return (
    <SectionWithBackground title="Speakers" subtitle="Information on speakers" backgroundTheme="ocean">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakers.map((s) => <SpeakerCard key={s.slug} s={s} />)}
      </div>
    </SectionWithBackground>
  );
}
