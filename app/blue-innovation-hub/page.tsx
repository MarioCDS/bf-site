import Section from "@/components/Section";

export default function BlueInnovationHubPage() {
  return (
    <div>
      <Section title="Blue Innovation Hub" subtitle="Where imagination meets implementation">
        <div className="prose max-w-none space-y-6">
          <p className="text-lg font-semibold">
            At the heart of Blue Futures lies a space where imagination meets implementation — the Blue Innovation Hub.
          </p>
          
          <p>
            Here, ocean-focused startups, researchers, and entrepreneurs showcase the ideas and technologies shaping a regenerative Blue Economy.
          </p>

          <p>
            Throughout the event, participants will have the chance to engage directly with innovators driving change in areas such as marine conservation, circular design, blue biotechnology, and sustainable food systems. Startups can present their solutions, gain visibility among international students, academics, and corporate leaders, and explore synergies with partners who share their vision for the ocean's future.
          </p>

          <p>
            By joining the Blue Innovation Hub, startups become part of a global dialogue — not only displaying their work, but contributing to the collective mission of reimagining how humanity connects with the ocean.
          </p>
        </div>
      </Section>

      <Section title="What Happens at the Hub" subtitle="">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <div className="font-semibold text-lg mb-2">Showcase Solutions</div>
            <p className="text-sm text-gray-700">Present innovative technologies and ideas shaping a regenerative Blue Economy.</p>
          </div>
          <div className="card">
            <div className="font-semibold text-lg mb-2">Gain Visibility</div>
            <p className="text-sm text-gray-700">Connect with international students, academics, and corporate leaders interested in ocean innovation.</p>
          </div>
          <div className="card">
            <div className="font-semibold text-lg mb-2">Explore Synergies</div>
            <p className="text-sm text-gray-700">Find partnership opportunities with like-minded organizations and change-makers.</p>
          </div>
          <div className="card">
            <div className="font-semibold text-lg mb-2">Marine Conservation</div>
            <p className="text-sm text-gray-700">Solutions protecting and restoring ocean ecosystems and biodiversity.</p>
          </div>
          <div className="card">
            <div className="font-semibold text-lg mb-2">Circular Design</div>
            <p className="text-sm text-gray-700">Innovations creating sustainable products with minimal ocean impact.</p>
          </div>
          <div className="card">
            <div className="font-semibold text-lg mb-2">Sustainable Systems</div>
            <p className="text-sm text-gray-700">Blue biotechnology and food systems respecting ocean health and communities.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
