import Section from "@/components/Section";

export default function FoodCourtPage() {
  return (
    <div>
      <Section title="The Plant-Based Food Court" subtitle="Innovation that you can taste">
        <div className="prose max-w-none space-y-6">
          <p className="text-lg font-semibold">
            The Plant-Based Food Court brings the spirit of innovation to the table… literally.
          </p>
          
          <p>
            Located alongside the Blue Innovation Hub, it offers participants a chance to refuel with delicious, sustainable meals that embody the same forward-thinking mindset driving the event. Each dish is crafted to be climate-friendly, ocean-respectful, and rooted in the creativity of plant-based cuisine.
          </p>

          <p>
            Here, food becomes part of the experience: attendees can explore inventive flavors, discover new sustainable food brands, and enjoy a vibrant space where good choices for the planet also taste great. It's a reminder that innovation isn't only found in labs and startups — it's something we can savor, share, and celebrate together… every single day.
          </p>
        </div>
      </Section>

      <Section title="Why Plant-Based?" subtitle="Nourishing people and the planet">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <div className="font-semibold text-lg mb-2">🌊 Ocean-Respectful</div>
            <p className="text-sm text-gray-700">Plant-based diets reduce pressure on ocean fisheries and marine ecosystems.</p>
          </div>
          <div className="card">
            <div className="font-semibold text-lg mb-2">🌍 Climate-Friendly</div>
            <p className="text-sm text-gray-700">Lower carbon footprint compared to animal-based food production.</p>
          </div>
          <div className="card">
            <div className="font-semibold text-lg mb-2">✨ Creative & Delicious</div>
            <p className="text-sm text-gray-700">Innovative plant-based cuisine that shows sustainability tastes amazing.</p>
          </div>
          <div className="card">
            <div className="font-semibold text-lg mb-2">🤝 Community & Connection</div>
            <p className="text-sm text-gray-700">A shared space to discover new brands and celebrate conscious choices together.</p>
          </div>
        </div>
      </Section>

      <Section title="Experience the Food Court" subtitle="">
        <div className="prose max-w-none">
          <p>
            Throughout the event, our Food Court serves as a hub of sustainability and creativity. Discover innovative flavors from local and international plant-based brands, learn about sustainable food systems, and enjoy meals that align with the values of Blue Futures. Every bite is a step toward a more regenerative future for our oceans and planet.
          </p>
        </div>
      </Section>
    </div>
  );
}
