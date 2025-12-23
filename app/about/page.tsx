import ScrollSection from "@/components/ScrollSection";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <ScrollSection
        id="blue-futures"
        title="Blue Futures"
        theme="waves"
      >
        <p className="text-lg leading-relaxed">
          Blue Futures captures the sense of possibility held within the ocean's horizon — a future shaped by care, curiosity, and courage. It reflects the belief that the choices we make today can turn the deep blue into a source of renewal for generations to come. It is both a vision and an invitation: to imagine a world where our oceans thrive, and where our shared future is as vibrant and alive as the waters that sustain us.
        </p>

        <p className="leading-relaxed">
          Over two days, we explore how we can create a regenerative Blue Economy—one that respects nature, fosters innovation, and connects communities across the world. Through dialogue, collaboration, and co-creation, we turn ideas into action, and action into hope.
        </p>
      </ScrollSection>

      <ScrollSection
        id="rethinking-oceans"
        title="Rethinking Our Oceans, Shaping Our Future"
        theme="fish"
      >
        <p className="leading-relaxed">
          The ocean is our planet's beating heart — a source of wonder, resilience, and life itself. It nourishes our communities, fuels our economies, stabilizes our climate, and connects every shore on Earth. Yet beneath its powerful tides lies a delicate world that depends on our care. In a time of rising challenges — from plastic pollution to disappearing species — choosing to protect the ocean is choosing to protect our shared future. When we safeguard its depth, we safeguard possibility, hope, and the generations who will inherit the blue world we leave behind.
        </p>

        <div className="bg-white/10 rounded-lg p-6 mt-6 border border-white/20">
          <p className="text-sm">
            <strong>Did you know?</strong> Over 3 billion people depend on marine biodiversity for their livelihoods, yet we've destroyed 90% of large fish populations in the last 100 years.
          </p>
        </div>
      </ScrollSection>

      <ScrollSection
        id="students-leaders"
        title="By students for students"
        theme="coral"
      >
        <p className="leading-relaxed">
          Young students are the architects of tomorrow, the next generation of leaders, innovators, and changemakers. This conference is their stage — a place where fresh ideas spark, bold visions take shape, and voices that will guide businesses, communities, and the world come together. Here, we do more than learn. We connect, imagine, and act, shaping the currents of a future full of possibilities that only we, students, can lead.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="font-semibold mb-2">🎓 Learning</p>
            <p className="text-sm">Gain insights from global experts and thought leaders in ocean sustainability.</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="font-semibold mb-2">🤝 Connection</p>
            <p className="text-sm">Network with peers, mentors, and innovators shaping the blue economy.</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="font-semibold mb-2">💡 Ideas</p>
            <p className="text-sm">Pitch your ideas and collaborate on real-world ocean solutions.</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="font-semibold mb-2">✊ Action</p>
            <p className="text-sm">Turn your vision into action through partnerships and initiatives.</p>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection
        id="sdg-ocean"
        title="The Sustainable Development Goals by the Ocean"
        theme="deep-sea"
      >
        <p className="leading-relaxed">
          The ocean is the lifeblood of our planet, touching every Sustainable Development Goal: it nourishes communities, fights poverty, drives clean energy, captures carbon, and powers a more just and thriving world. The Blue Economy is not a distant dream; it is rising now, through bold innovations: regenerative fisheries, renewable marine energy, and community-led conservation that restores life while creating opportunity.
        </p>

        <p className="leading-relaxed mt-6">
          Around the globe, visionary leaders are proving that when courage meets action, the waves we shape today can carry a brighter, more sustainable future for all.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <div className="text-2xl mb-2">🐟</div>
            <p className="font-semibold text-sm mb-1">Regenerative Fisheries</p>
            <p className="text-xs">Restore fish populations while supporting communities</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <div className="text-2xl mb-2">⚡</div>
            <p className="font-semibold text-sm mb-1">Renewable Marine Energy</p>
            <p className="text-xs">Powering a clean energy future from the ocean</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <div className="text-2xl mb-2">🌱</div>
            <p className="font-semibold text-sm mb-1">Community Conservation</p>
            <p className="text-xs">Restoring life while creating opportunity</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <div className="text-2xl mb-2">🔄</div>
            <p className="font-semibold text-sm mb-1">Circular Economy</p>
            <p className="text-xs">Eliminating ocean waste and pollution</p>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection
        id="call-to-action"
        title="A Call to Action"
        subtitle="Rethinking our oceans, shaping our future"
        theme="light"
      >
        <p className="text-gray-800 text-lg leading-relaxed">
          This conference is an invitation: to reflect, to learn, and to lead. To connect across borders and disciplines, and to dare to imagine a world where our oceans thrive and so do we.
        </p>

        <p className="text-gray-800 font-semibold mt-6 text-lg">
          Blue Futures is not just an event—it is a call to action for the changemakers of today, shaping the oceans and the future we all depend on.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/agenda"
            className="btn btn-primary bg-brand hover:bg-brand-dark text-white"
          >
            Explore the Agenda
          </a>
          <a
            href="https://www.eventbrite.com/e/blue-futures-oikos-conference-2026-tickets"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-brand hover:bg-brand-light/20 border border-white"
          >
            Get Your Tickets
          </a>
          <a
            href="/blue-innovation-hub"
            className="btn bg-white text-brand hover:bg-brand-light/20 border border-white"
          >
            Join the Hub
          </a>
        </div>
      </ScrollSection>

      {/* Additional spacing for scroll experience */}
      <div className="h-20"></div>
    </div>
  );
}
