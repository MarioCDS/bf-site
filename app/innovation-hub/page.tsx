import Link from "next/link";
import { site } from "@/lib/site";

export default function InnovationHubPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
            alt="Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand-dark/90"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blue Innovation Hub</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Where imagination meets implementation — showcasing the ideas and technologies
            shaping a regenerative Blue Economy
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At the heart of Blue Futures lies a space where imagination meets implementation —
              the <strong className="text-brand">Blue Innovation Hub</strong>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Here, ocean-focused startups, researchers, and entrepreneurs showcase the ideas and
              technologies shaping a regenerative Blue Economy.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Throughout the event, participants will have the chance to engage directly with innovators
              driving change in areas such as marine conservation, circular design, blue biotechnology,
              and sustainable food systems.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gradient-to-br from-brand-light/10 to-white">
        <div className="container">
          <h2 className="h2 text-center mb-12">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Startup Showcases</h3>
              <p className="text-gray-600">
                Ocean-focused startups present their solutions and gain visibility among
                international students, academics, and corporate leaders.
              </p>
            </div>

            <div className="card text-center p-8">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Direct Engagement</h3>
              <p className="text-gray-600">
                Meet innovators driving change in marine conservation, circular design,
                blue biotechnology, and sustainable food systems.
              </p>
            </div>

            <div className="card text-center p-8">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Dialogue</h3>
              <p className="text-gray-600">
                Join a global conversation about reimagining how humanity
                connects with the ocean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="h2 text-center mb-4">Innovation Areas</h2>
          <p className="text-center muted max-w-2xl mx-auto mb-12">
            Explore cutting-edge solutions across key sectors of the Blue Economy
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Marine Conservation", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Circular Design", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
              { title: "Blue Biotechnology", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
              { title: "Sustainable Food", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }
            ].map((area, i) => (
              <div key={i} className="bg-gradient-to-br from-brand/5 to-brand-light/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={area.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold">{area.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Startups CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">For Startups & Innovators</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            By joining the Blue Innovation Hub, startups become part of a global dialogue — not only
            displaying their work, but contributing to the collective mission of reimagining how
            humanity connects with the ocean.
          </p>
          <p className="text-white/80 mb-8">
            Explore synergies with partners who share your vision for the ocean's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-brand hover:bg-white/90">
              Apply to Showcase
            </Link>
            <a
              href={site.eventbriteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-white text-white hover:bg-white/10"
            >
              Get Your Tickets
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
