import Link from "next/link";
import Section from "@/components/Section";
import OceanBackground from "@/components/OceanBackground";
import { agenda } from "@/lib/data/agenda";
import { speakers } from "@/lib/data/speakers";
import { Waves, Users, Calendar, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section with Ocean Background */}
      <OceanBackground variant="hero" className="min-h-[80vh] flex items-center">
        <div className="container py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Waves className="w-4 h-4" />
              <span>Ocean Stewardship & Blue Economy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Blue Futures
              <span className="block text-brand-light">Lisbon 2026</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              More than a conference — it's a convergence. Where the next generation of leaders collaborates with today's decision-makers, where grassroots student energy meets institutional power, and where new ideas for ocean stewardship and regenerative economies are born.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="btn-glass" href="/agenda">
                <Calendar className="w-4 h-4" />
                View Agenda
              </Link>
              <Link className="btn-glass" href="/speakers">
                <Users className="w-4 h-4" />
                Meet Speakers
              </Link>
              <Link className="btn-glass" href="/tickets">
                Get Tickets
              </Link>
            </div>
          </div>
        </div>
      </OceanBackground>

      {/* Highlights Section */}
      <Section title="Highlights" subtitle="What's happening at a glance">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card group hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand-light/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand" />
              </div>
              <div className="font-semibold">When & Where</div>
            </div>
            <div className="muted">Coming soon — Lisbon, Portugal, 2026</div>
          </div>
          <div className="card group hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand-light/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-brand" />
              </div>
              <div className="font-semibold">Speakers</div>
            </div>
            <div className="muted">{speakers.length}+ confirmed speakers from around the world</div>
          </div>
          <div className="card group hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand-light/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-brand" />
              </div>
              <div className="font-semibold">First Session</div>
            </div>
            <div className="muted">{agenda[0].time} — {agenda[0].title}</div>
          </div>
        </div>
      </Section>

      {/* Ocean Conservation Section */}
      <OceanBackground variant="section" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Protecting Our Oceans
            </h2>
            <p className="text-white/80 text-lg mb-8">
              The ocean covers 71% of our planet and is essential to life on Earth. From regulating climate to providing food security, healthy oceans are fundamental to a sustainable future. Join us in shaping the blue economy of tomorrow.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="card-glass">
                <h3 className="font-semibold text-white mb-2">Marine Biodiversity</h3>
                <p className="text-white/70 text-sm">Exploring sustainable ways to protect coral reefs, marine ecosystems, and endangered species.</p>
              </div>
              <div className="card-glass">
                <h3 className="font-semibold text-white mb-2">Sustainable Fisheries</h3>
                <p className="text-white/70 text-sm">Addressing overfishing, bottom trawling, and promoting responsible aquaculture practices.</p>
              </div>
              <div className="card-glass">
                <h3 className="font-semibold text-white mb-2">Ocean Pollution</h3>
                <p className="text-white/70 text-sm">Tackling plastic pollution, chemical runoff, and protecting marine habitats from destruction.</p>
              </div>
            </div>
          </div>
        </div>
      </OceanBackground>

      {/* Call to Action */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="h2 mb-4">Join the Movement</h2>
          <p className="muted mb-8">
            Be part of the conversation shaping the future of our oceans. Register now for early access and updates.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/tickets" className="btn btn-primary">
              Get Your Tickets
            </Link>
            <Link href="/contact" className="btn">
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
