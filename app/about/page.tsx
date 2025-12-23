import OceanBackground from "@/components/OceanBackground";
import Section from "@/components/Section";
import { Waves, Users, Target, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <OceanBackground variant="section" className="py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Blue Futures
            </h1>
            <p className="text-lg text-white/80">
              Lisbon 2026 — A convergence for ocean stewardship and the regenerative Blue Economy
            </p>
          </div>
        </div>
      </OceanBackground>

      {/* Main Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              Blue Futures is a community-powered conference hosted by oikos Lisbon at Nova SBE.
              It brings together students, alumni, academics, businesses and policymakers to
              protect our oceans and co-create a regenerative Blue Economy.
            </p>
          </div>

          {/* Two Movements */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="card hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Community Retreat</h3>
              <p className="text-gray-600">
                A 4-day oikos community retreat focused on leadership, reflection, and collaboration.
                Building bonds and shared vision among ocean champions.
              </p>
            </div>
            <div className="card hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-xl bg-brand-light/20 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Open Conference</h3>
              <p className="text-gray-600">
                An open conference welcoming a wider public for dialogue, co-creation, and action.
                Where ideas transform into tangible outcomes.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-brand" />
              </div>
              <h2 className="h2">Our Mission</h2>
            </div>
            <div className="card bg-gradient-to-br from-brand/5 to-brand-light/10 border-brand/20">
              <p className="text-lg text-gray-700 leading-relaxed">
                By supporting Blue Futures Lisbon 2026, partners don't just fund an event — they invest in a
                global movement that builds bridges across generations and sectors, with outcomes
                that ripple far beyond the gathering.
              </p>
            </div>
          </div>

          {/* Key Themes */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                <Waves className="w-5 h-5 text-brand" />
              </div>
              <h2 className="h2">Key Themes</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Ocean Conservation",
                "Blue Economy",
                "Sustainable Fisheries",
                "Marine Biodiversity",
                "Climate Resilience",
                "Intergenerational Dialogue"
              ].map((theme, i) => (
                <div key={i} className="px-4 py-3 rounded-xl bg-brand-light/10 text-brand font-medium text-center">
                  {theme}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
