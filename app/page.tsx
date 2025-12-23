import Link from "next/link";
import Section from "@/components/Section";
import { agenda } from "@/lib/data/agenda";
import { speakers } from "@/lib/data/speakers";

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-brand/20 via-brand-light/30 to-brand-dark/20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-dark/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container py-20 md:py-28 relative z-10">
          <h1 className="h1">Blue Futures — Lisbon 2026</h1>
          <p className="mt-4 max-w-2xl muted text-base">
            Blue Futures is more than a conference — it's a convergence. It is where the next generation of leaders collaborates with today's decision-makers, where grassroots student energy meets institutional power, and where new ideas for ocean stewardship and regenerative economies are born.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/agenda">View Agenda</Link>
            <Link className="btn btn-primary" href="/speakers">Meet Speakers</Link>
            <Link className="btn btn-primary" href="/about">Learn More</Link>
          </div>
        </div>
      </section>

      <Section title="Highlights" subtitle="What's happening at a glance">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card hover:shadow-lg transition">
            <div className="font-semibold text-brand">When</div>
            <div className="muted mt-2">February 27, 2026 — Lisbon</div>
          </div>
          <div className="card hover:shadow-lg transition">
            <div className="font-semibold text-brand">Speakers</div>
            <div className="muted mt-2">{speakers.length}+ confirmed leaders and innovators</div>
          </div>
          <div className="card hover:shadow-lg transition">
            <div className="font-semibold text-brand">Format</div>
            <div className="muted mt-2">One day of dialogue, co-creation & action</div>
          </div>
        </div>
      </Section>

      <Section title="Why Blue Futures?" subtitle="Creating a regenerative blue economy">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">🌊</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Ocean-Centered</h3>
                <p className="text-gray-700">We address the urgent challenges facing our oceans while celebrating the innovations that can protect them.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">👥</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Student-Led</h3>
                <p className="text-gray-700">Young voices lead the dialogue, proving that students are the changemakers we need for a sustainable future.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">🤝</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Collaborative</h3>
                <p className="text-gray-700">We bring together students, academics, businesses, policymakers, and innovators for real dialogue and action.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Innovation-Driven</h3>
                <p className="text-gray-700">Through the Blue Innovation Hub, we showcase the solutions reshaping how humanity relates to the ocean.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
