import Link from "next/link";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920"
            alt="Ocean horizon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand-dark/90"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Blue Futures</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Lisbon 2026 — A convergence of ideas, innovation, and action for our oceans
          </p>
        </div>
      </section>

      {/* Ocean Facts */}
      <section className="py-16 bg-gradient-to-br from-brand-light/10 to-white">
        <div className="container">
          <h2 className="h2 text-center mb-4">Shocking Ocean Facts</h2>
          <p className="text-center muted max-w-2xl mx-auto mb-12">
            The numbers that remind us why we must act now
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-blue-100 shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-brand mb-2">71%</div>
              <div className="text-sm text-gray-600">Of Earth's surface is covered by oceans</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-blue-100 shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-brand mb-2">50%</div>
              <div className="text-sm text-gray-600">Of Earth's oxygen comes from the ocean</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-blue-100 shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-brand mb-2">3B+</div>
              <div className="text-sm text-gray-600">People depend on oceans for their livelihoods</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-blue-100 shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-brand mb-2">8M</div>
              <div className="text-sm text-gray-600">Tons of plastic enter oceans each year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Futures Section */}
      <section className="py-20 bg-blue-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2 mb-8 text-center">What is Blue Futures?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-brand">Blue Futures</strong> captures the sense of possibility held within the ocean's horizon — a
                future shaped by care, curiosity, and courage. It reflects the belief that the choices
                we make today can turn the deep blue into a source of renewal for generations to come.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                It is both a vision and an invitation: to imagine a world where our oceans thrive,
                and where our shared future is as vibrant and alive as the waters that sustain us.
              </p>
              <p className="text-lg leading-relaxed">
                Over two days, we explore how we can create a regenerative Blue Economy—one that
                respects nature, fosters innovation, and connects communities across the world.
                Through dialogue, collaboration, and co-creation, we turn ideas into action, and action
                into hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rethinking Our Oceans */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920"
            alt="Ocean waves"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand/85"></div>
        </div>
        <div className="relative z-10 container text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Rethinking Our Oceans, Shaping Our Future
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              The ocean is our planet's beating heart — a source of wonder, resilience, and life
              itself. It nourishes our communities, fuels our economies, stabilizes our climate, and
              connects every shore on Earth.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Yet beneath its powerful tides lies a delicate world that depends on our care. In a time
              of rising challenges — from plastic pollution to disappearing species — choosing to protect
              the ocean is choosing to protect our shared future.
            </p>
            <p className="text-brand-light font-medium text-xl">
              When we safeguard its depth, we safeguard possibility, hope, and the generations who will
              inherit the blue world we leave behind.
            </p>
          </div>
        </div>
      </section>

      {/* By Students for Students */}
      <section className="py-20 bg-blue-100">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="h2 mb-6">By Students, For Students</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Young students are the architects of tomorrow, the next generation of leaders,
                innovators, and changemakers. This conference is their stage — a place where fresh
                ideas spark, bold visions take shape, and voices that will guide businesses,
                communities, and the world come together.
              </p>
              <p className="text-brand font-medium text-lg">
                Here, we do more than learn. We connect, imagine, and act, shaping the currents of a
                future full of possibilities that only we, students, can lead.
              </p>
            </div>
            <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="py-20 bg-gradient-to-br from-brand-light/20 to-brand/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="h2 mb-8">The Sustainable Development Goals & The Ocean</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              The ocean is the lifeblood of our planet, touching every Sustainable Development
              Goal: it nourishes communities, fights poverty, drives clean energy, captures carbon,
              and powers a more just and thriving world.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              The Blue Economy is not a distant dream; it is rising now, through bold innovations:
              regenerative fisheries, renewable marine energy, and community-led conservation that
              restores life while creating opportunity.
            </p>
            <p className="text-brand font-medium text-lg">
              Around the globe, visionary leaders are proving that when courage meets action,
              the waves we shape today can carry a brighter, more sustainable future for all.
            </p>
          </div>

          {/* SDG Icons Grid */}
          <div className="mt-12 grid grid-cols-6 md:grid-cols-9 gap-3 max-w-4xl mx-auto">
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map((sdg) => (
              <div
                key={sdg}
                className={`aspect-square rounded-lg flex items-center justify-center text-white font-bold text-sm ${
                  sdg === 14 ? 'ring-4 ring-brand-light scale-110' : ''
                }`}
                style={{
                  backgroundColor: [
                    '#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21',
                    '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367',
                    '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B',
                    '#00689D', '#19486A'
                  ][sdg - 1]
                }}
              >
                {sdg}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">SDG 14: Life Below Water is at the heart of our mission</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="h2 mb-6">Join the Movement</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              This conference is an invitation: to reflect, to learn, and to lead. To connect across
              borders and disciplines, and to dare to imagine a world where our oceans thrive and so do we.
              <strong className="text-brand"> Blue Futures is not just an event—it is a call to action</strong> for the
              changemakers of today, shaping the oceans and the future we all depend on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={site.eventbriteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8 py-3"
              >
                Get Your Tickets
              </a>
              <Link href="/agenda" className="btn text-lg px-8 py-3">
                View Agenda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
