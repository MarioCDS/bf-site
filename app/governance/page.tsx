"use client";
import { useEffect, useState, useRef } from "react";
import OceanBackground from "@/components/OceanBackground";
import { Users, Award, Lightbulb, ChevronDown } from "lucide-react";

// Data for Board members
const boardMembers = [
  {
    name: "Dr. Maria Santos",
    role: "Chairperson",
    org: "Ocean Policy Institute",
    bio: "Leading expert in marine policy with 20+ years of experience in ocean governance and sustainable development."
  },
  {
    name: "Prof. António Ferreira",
    role: "Vice-Chair",
    org: "University of Lisbon",
    bio: "Professor of Marine Biology specializing in coral reef ecosystems and climate change adaptation."
  },
  {
    name: "Elena Rodriguez",
    role: "Board Member",
    org: "Blue Economy Foundation",
    bio: "Pioneer in sustainable fisheries management and circular economy practices in coastal communities."
  },
  {
    name: "Dr. James Morrison",
    role: "Board Member",
    org: "Global Ocean Initiative",
    bio: "International advocate for marine protected areas and ocean conservation frameworks."
  }
];

// Data for Team
const teamCategories: {
  title: string;
  people: { name: string; org?: string; role: string }[];
}[] = [
  {
    title: "Project Management",
    people: [
      { name: "Diogo Silva", org: "oikos Lisbon", role: "Project Lead" },
      { name: "Patricija Zizyte", org: "oikos International", role: "Program Coordinator" }
    ]
  },
  {
    title: "Partnerships & Fundraising",
    people: [
      { name: "Duarte Romano", role: "Partnerships Lead" },
      { name: "Ivan Boueke", role: "Fundraising Coordinator" },
      { name: "Estelle Freuler", role: "Manager" },
      { name: "Victoria Zelianiak", role: "Partnerships Associate" }
    ]
  },
  {
    title: "Program Development",
    people: [
      { name: "João Seixo", role: "Program Director" },
      { name: "Mathieu Jaumin", role: "Content Lead" },
      { name: "Duarte Romano", role: "Speaker Liaison" }
    ]
  },
  {
    title: "Operations & Logistics",
    people: [
      { name: "Madalena Freire", role: "Operations Manager" },
      { name: "Lucas Estèban", role: "Logistics Coordinator" }
    ]
  },
  {
    title: "Participant Management",
    people: [
      { name: "Bruna Sampaio", role: "Participant Experience Lead" }
    ]
  }
];

// Data for Advisors
const advisors = [
  {
    name: "Prof. Sophie Laurent",
    expertise: "Marine Conservation",
    org: "European Marine Institute",
    bio: "Advisor on marine biodiversity and ecosystem restoration strategies."
  },
  {
    name: "Dr. Carlos Mendes",
    expertise: "Blue Finance",
    org: "Sustainable Investment Partners",
    bio: "Expert in blue bonds and financing mechanisms for ocean projects."
  },
  {
    name: "Ana Costa",
    expertise: "Youth Engagement",
    org: "Ocean Youth Network",
    bio: "Connecting young leaders with ocean stewardship opportunities worldwide."
  },
  {
    name: "Dr. Henrik Andersen",
    expertise: "Fisheries Policy",
    org: "Nordic Seas Research Center",
    bio: "Specialist in sustainable fisheries and aquaculture governance."
  },
  {
    name: "Lisa Chen",
    expertise: "Ocean Technology",
    org: "Blue Tech Ventures",
    bio: "Pioneering innovative solutions for ocean monitoring and conservation."
  }
];

type Section = "board" | "team" | "advisors";

export default function GovernancePage() {
  const [activeSection, setActiveSection] = useState<Section>("board");
  const boardRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const advisorsRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "board" as Section, label: "Board", icon: Award, ref: boardRef },
    { id: "team" as Section, label: "Team", icon: Users, ref: teamRef },
    { id: "advisors" as Section, label: "Advisors", icon: Lightbulb, ref: advisorsRef }
  ];

  // Scroll spy - update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of [...sections].reverse()) {
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: Section) => {
    const section = sections.find(s => s.id === sectionId);
    if (section?.ref.current) {
      const offset = 100; // Account for sticky header
      const top = section.ref.current.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <OceanBackground variant="deep" className="py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Governance
            </h1>
            <p className="text-lg text-white/80">
              Meet the dedicated individuals guiding Blue Futures towards a sustainable ocean economy. Our governance structure ensures transparency, expertise, and inclusive representation.
            </p>
            <div className="mt-8 flex items-center gap-2 text-white/60 text-sm">
              <ChevronDown className="w-4 h-4 animate-bounce" />
              <span>Scroll to explore our Board, Team, and Advisors</span>
            </div>
          </div>
        </div>
      </OceanBackground>

      {/* Sticky Navigation Tabs */}
      <div className="sticky-tabs border-b border-gray-100">
        <div className="container">
          <div className="tab-nav inline-flex">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={activeSection === id ? "active" : ""}
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Board Section */}
      <section ref={boardRef} className="section" id="board">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-brand" />
            </div>
            <div>
              <h2 className="h2">Board of Directors</h2>
              <p className="muted">Strategic leadership and oversight</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {boardMembers.map((member, i) => (
              <div key={i} className="card hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-brand-light flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-xl">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <div className="text-brand font-medium text-sm">{member.role}</div>
                    <div className="text-gray-500 text-sm">{member.org}</div>
                    <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="section-ocean py-20" id="team">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Our Team</h2>
              <p className="text-white/70">The people making Blue Futures happen</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamCategories.map((category, i) => (
              <div key={i} className="card-glass">
                <h3 className="font-semibold text-white mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.people.map((person, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-medium">
                          {person.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium">{person.name}</div>
                        <div className="text-white/60 text-sm">
                          {person.role}
                          {person.org && ` · ${person.org}`}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section ref={advisorsRef} className="section" id="advisors">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-brand" />
            </div>
            <div>
              <h2 className="h2">Advisors</h2>
              <p className="muted">Expert guidance across key domains</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor, i) => (
              <div key={i} className="card hover:shadow-lg transition group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-light to-brand flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {advisor.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-brand transition-colors">
                      {advisor.name}
                    </h3>
                    <div className="text-sm text-gray-500">{advisor.org}</div>
                  </div>
                </div>
                <div className="inline-block px-2 py-1 rounded-md bg-brand-light/20 text-brand text-xs font-medium mb-2">
                  {advisor.expertise}
                </div>
                <p className="text-gray-600 text-sm">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <OceanBackground variant="deep" className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals to contribute to Blue Futures. Whether as a volunteer, speaker, or partner, there's a place for you.
          </p>
          <a href="/contact" className="btn-glass">
            Get Involved
          </a>
        </div>
      </OceanBackground>
    </div>
  );
}
