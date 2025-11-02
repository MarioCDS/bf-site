import Link from "next/link";
import Section from "@/components/Section";
import { agenda } from "@/lib/data/agenda";
import { speakers } from "@/lib/data/speakers";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-dark/10 to-brand-light/40">
        <div className="container py-20 md:py-28">
          <h1 className="h1">Blue Futures — Lisbon 2026</h1>
          <p className="mt-4 max-w-2xl muted">
            Blue Futures is more than a conference — it’s a convergence. It is where the next generation of leaders collaborates with today’s decision-makers, where grassroots student energy meets institutional power, and where new ideas for ocean stewardship and regenerative economies are born.
          </p>
          <div className="mt-6 flex gap-3">
            <Link className="btn btn-primary" href="/agenda">View Agenda</Link>
            <Link className="btn btn-primary" href="/speakers">Meet Speakers</Link>
          </div>
        </div>
      </section>

      <Section title="Highlights" subtitle="What's happening at a glance">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <div className="font-semibold">When</div>
            <div className="muted">Coming soon — Lisbon, 2026</div>
          </div>
          <div className="card">
            <div className="font-semibold">Speakers</div>
            <div className="muted">{speakers.length}+ confirmed</div>
          </div>
          <div className="card">
            <div className="font-semibold">First session</div>
            <div className="muted">{agenda[0].time} — {agenda[0].title}</div>
          </div>
        </div>
      </Section>
    </div>
  );
}
