"use client";
import { useState } from "react";

type Person = {
  name: string;
  role: string;
  photo?: string;
};

const board: Person[] = [
  { name: "Diogo Silva", role: "Coordinator" },
  { name: "Patricija Zizyte", role: "Coordinator oI" },
  { name: "Duarte Romano", role: "Program Development" },
  { name: "Estelle Freuler", role: "Partnerships and Fundraising" },
  { name: "Joana Mendes", role: "Marketing" },
  { name: "Bruna Sampaio", role: "Participant Management" }
];

const team: Person[] = [
  { name: "Mathieu Jaumin", role: "Program Development" },
  { name: "Filipa Luana", role: "Program Development" },
  { name: "Madalena Freire", role: "Partnerships and Fundraising" },
  { name: "Ana Branco Silva", role: "Marketing" },
  { name: "Helena Santos", role: "Participant Management" }
];

const advisors: Person[] = [
  { name: "Vitorino Mello Oliveira", role: "Diplomat at United Nations" },
  { name: "Maria Antonieta Cunha e Sá", role: "Academic Advisor" },
  { name: "Susana Santos", role: "Sustainability Officer" },
  { name: "João Seixo", role: "Researcher and Professor at Nova SBE" }
];

const tabs = ["Board", "Team", "Advisors"] as const;
type Tab = typeof tabs[number];

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="card p-6 text-center group hover:shadow-lg transition-shadow">
      {/* Photo placeholder */}
      <div className="w-24 h-24 bg-gradient-to-br from-brand-light/30 to-brand/20 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-3xl font-semibold text-brand/60">
          {person.name.split(" ").map(n => n[0]).join("")}
        </span>
      </div>
      <h3 className="font-semibold text-lg group-hover:text-brand transition-colors">{person.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{person.role}</p>
    </div>
  );
}

export default function GovernancePage() {
  const [activeTab, setActiveTab] = useState<Tab>("Board");

  const getPeople = () => {
    switch (activeTab) {
      case "Board": return board;
      case "Team": return team;
      case "Advisors": return advisors;
    }
  };

  const getDescription = () => {
    switch (activeTab) {
      case "Board":
        return "The Board leads the strategic direction of Blue Futures, ensuring the conference delivers on its mission to foster ocean stewardship and intergenerational dialogue.";
      case "Team":
        return "Our dedicated team works tirelessly across various functions to bring Blue Futures to life, from program development to participant experience.";
      case "Advisors":
        return "Our advisors bring invaluable expertise and guidance, helping shape the conference's vision and ensuring its impact reaches far beyond the event itself.";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand-dark/90"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Governance</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet the passionate students and experts driving Blue Futures forward
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-100">
        <div className="container">
          <nav className="flex justify-center gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? "bg-brand text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gradient-to-br from-brand-light/5 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">{activeTab}</h2>
            <p className="muted max-w-2xl mx-auto">{getDescription()}</p>
          </div>

          <div className={`grid gap-6 ${
            activeTab === "Board" ? "md:grid-cols-3" :
            activeTab === "Team" ? "md:grid-cols-3 lg:grid-cols-5" :
            "md:grid-cols-2 lg:grid-cols-4"
          } max-w-6xl mx-auto`}>
            {getPeople().map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* About oikos */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="h2 mb-6">About oikos</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong className="text-brand">oikos</strong> is an international student organization committed
                  to sustainability in economics and management. Founded in 1987, oikos chapters around the world
                  empower students to drive change toward a more sustainable economy.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong className="text-brand">oikos Lisbon</strong>, based at Nova SBE, is the local chapter
                  organizing Blue Futures 2026 in collaboration with oikos International.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Together, we believe that students have the power to shape the future — and that starts with
                  reimagining our relationship with the ocean.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-light/20 to-brand/10 rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold text-brand mb-2">35+</div>
                <div className="text-gray-600 mb-4">Years of Impact</div>
                <div className="text-4xl font-bold text-brand mb-2">50+</div>
                <div className="text-gray-600 mb-4">Global Chapters</div>
                <div className="text-4xl font-bold text-brand mb-2">10,000+</div>
                <div className="text-gray-600">Student Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-br from-brand/5 to-brand-light/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="h2 mb-4">Join Our Team</h2>
            <p className="text-gray-600 mb-8">
              Interested in being part of the Blue Futures organizing team? We're always looking
              for passionate students to join our mission.
            </p>
            <a
              href="mailto:bluefutures@oikos-lisbon.org?subject=Join%20the%20Team"
              className="btn btn-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
