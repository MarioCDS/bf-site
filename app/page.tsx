import Link from "next/link";
import ScrollSection from "@/components/ScrollSection";
import { speakers } from "@/lib/data/speakers";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand/20 via-brand-light/30 to-brand-dark/20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-dark/30 rounded-full blur-3xl"></div>
        </div>
        <div className="container py-20 md:py-28 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 max-w-2xl">
            Blue Futures — Lisbon 2026
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
            A student-led conference reimagining ocean stewardship and the regenerative Blue Economy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link className="btn btn-primary" href="/agenda">
              View Agenda
            </Link>
            <Link className="btn btn-primary" href="/speakers">
              Meet Speakers
            </Link>
            <Link className="btn btn-primary" href="/about">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <ScrollSection
        id="highlights"
        title="What's Happening"
        subtitle="Key information at a glance"
        theme="waves"
      >
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/10 rounded-lg p-6 border border-white/30 backdrop-blur">
            <div className="text-3xl mb-2">📅</div>
            <div className="font-semibold text-lg mb-2">When</div>
            <div>February 27, 2026 — Lisbon, Portugal</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6 border border-white/30 backdrop-blur">
            <div className="text-3xl mb-2">🎤</div>
            <div className="font-semibold text-lg mb-2">Speakers</div>
            <div>{speakers.length}+ confirmed leaders and innovators</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6 border border-white/30 backdrop-blur">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="font-semibold text-lg mb-2">Format</div>
            <div>One day of dialogue, co-creation, and action</div>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection
        id="why-blue-futures"
        title="Why Blue Futures?"
        subtitle="Creating a regenerative blue economy"
        theme="fish"
      >
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white/10 rounded-lg p-6 border border-white/30 backdrop-blur">
            <div className="text-4xl mb-3">🌊</div>
            <h3 className="text-xl font-semibold mb-3">Ocean-Centered</h3>
            <p>
              We address the urgent challenges facing our oceans while celebrating the innovations that can protect them.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 border border-white/30 backdrop-blur">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="text-xl font-semibold mb-3">Student-Led</h3>
            <p>
              Young voices lead the dialogue, proving that students are the changemakers we need for a sustainable future.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 border border-white/30 backdrop-blur">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-xl font-semibold mb-3">Collaborative</h3>
            <p>
              We bring together students, academics, businesses, policymakers, and innovators for real dialogue and action.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 border border-white/30 backdrop-blur">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-xl font-semibold mb-3">Innovation-Driven</h3>
            <p>
              Through the Blue Innovation Hub, we showcase solutions reshaping how humanity relates to the ocean.
            </p>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection
        id="join-movement"
        title="Join the Movement"
        subtitle="Be part of the change"
        theme="coral"
      >
        <p className="text-lg leading-relaxed mb-6">
          Blue Futures is more than a conference — it's a convergence of minds, ideas, and action. Whether you're a student passionate about sustainability, a business leader ready to innovate, or an academic exploring solutions, there's a place for you here.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/tickets"
            className="btn bg-white text-brand hover:bg-brand-light/20 border-2 border-white"
          >
            Get Your Tickets
          </Link>
          <Link
            href="/blue-innovation-hub"
            className="btn bg-white text-brand hover:bg-brand-light/20 border-2 border-white"
          >
            Join the Innovation Hub
          </Link>
          <Link
            href="/contact"
            className="btn bg-white text-brand hover:bg-brand-light/20 border-2 border-white"
          >
            Get in Touch
          </Link>
        </div>
      </ScrollSection>

      <ScrollSection
        id="call-action"
        title="The Future is Now"
        subtitle="Rethinking our oceans, shaping our future"
        theme="light"
      >
        <p className="text-gray-800 text-lg leading-relaxed">
          The ocean doesn't wait. Neither do we. Every conversation, every innovation, every act of courage at Blue Futures ripples outward, creating change that matters.
        </p>

        <p className="text-gray-800 font-semibold mt-6">
          Blue Futures 2026 — where the next generation of changemakers shapes the blue economy we all depend on.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="btn bg-brand text-white hover:bg-brand-dark border-0"
          >
            Learn More About Us
          </Link>
        </div>
      </ScrollSection>

      {/* Extra spacing */}
      <div className="h-10"></div>
    </div>
  );
}
