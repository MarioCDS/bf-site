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
            <Link className="btn btn-primary" href="/about">
              Learn More
            </Link>
            <Link className="btn btn-primary" href="/agenda">
              View Agenda
            </Link>
            <Link className="btn btn-primary" href="/speakers">
              Meet Speakers
            </Link>
          </div>
        </div>
      </section>

      {/* Additional spacing */}
      <div className="h-20"></div>
    </div>
  );
}
