import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/ocean-poster.jpg"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-brand/70 via-brand/50 to-brand-dark/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center text-white py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Blue Futures
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Lisbon 2026
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            A convergence where the next generation of leaders collaborates with today's decision-makers,
            where grassroots student energy meets institutional power, and where new ideas for ocean
            stewardship and regenerative economies are born.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={site.eventbriteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-brand hover:bg-white/90 text-lg px-8 py-3"
            >
              Get Your Tickets
            </a>
            <Link href="/about" className="btn border-white text-white hover:bg-white/10 text-lg px-8 py-3">
              Learn More
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Ocean Facts Section */}
      <section className="py-20 bg-gradient-to-br from-brand-light/10 to-white">
        <div className="container">
          <h2 className="h2 text-center mb-4">The Ocean in Crisis</h2>
          <p className="text-center muted max-w-2xl mx-auto mb-12">
            Shocking facts that remind us why we must act now
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="text-5xl font-bold text-brand mb-2">8M+</div>
              <div className="text-lg font-medium mb-2">Tons of Plastic</div>
              <div className="text-sm text-gray-600">Enter our oceans every year, threatening marine life and ecosystems</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="text-5xl font-bold text-brand mb-2">50%</div>
              <div className="text-lg font-medium mb-2">Coral Reefs Lost</div>
              <div className="text-sm text-gray-600">Half of the world's coral reefs have died in the last 30 years</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="text-5xl font-bold text-brand mb-2">90%</div>
              <div className="text-lg font-medium mb-2">Large Fish Gone</div>
              <div className="text-sm text-gray-600">Industrial fishing has depleted 90% of the world's large ocean fish</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Blue Futures Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920"
            alt="Ocean waves"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand/80"></div>
        </div>
        <div className="relative z-10 container text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Blue Futures</h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              Blue Futures captures the sense of possibility held within the ocean's horizon — a future
              shaped by care, curiosity, and courage. It reflects the belief that the choices we make
              today can turn the deep blue into a source of renewal for generations to come.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              It is both a vision and an invitation: to imagine a world where our oceans thrive,
              and where our shared future is as vibrant and alive as the waters that sustain us.
            </p>
            <Link href="/about" className="inline-block mt-8 btn border-white text-white hover:bg-white/10">
              Discover Our Vision
            </Link>
          </div>
        </div>
      </section>

      {/* Rethinking Our Oceans Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="h2 mb-6">Rethinking Our Oceans, Shaping Our Future</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The ocean is our planet's beating heart — a source of wonder, resilience, and life itself.
                It nourishes our communities, fuels our economies, stabilizes our climate, and connects
                every shore on Earth.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Yet beneath its powerful tides lies a delicate world that depends on our care. In a time
                of rising challenges — from plastic pollution to disappearing species — choosing to protect
                the ocean is choosing to protect our shared future.
              </p>
              <p className="text-brand font-medium">
                When we safeguard its depth, we safeguard possibility, hope, and the generations who will
                inherit the blue world we leave behind.
              </p>
            </div>
            <div className="relative h-80 md:h-auto md:aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800"
                alt="Ocean life"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* By Students for Students Section */}
      <section className="py-20 bg-gradient-to-br from-brand-light/20 to-brand/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-80 md:h-auto md:aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="h2 mb-6">By Students, For Students</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Young students are the architects of tomorrow, the next generation of leaders, innovators,
                and changemakers. This conference is their stage — a place where fresh ideas spark, bold
                visions take shape, and voices that will guide businesses, communities, and the world
                come together.
              </p>
              <p className="text-brand font-medium">
                Here, we do more than learn. We connect, imagine, and act, shaping the currents of a
                future full of possibilities that only we, students, can lead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative z-10 container text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Sustainable Development Goals & The Ocean
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              The ocean is the lifeblood of our planet, touching every Sustainable Development Goal:
              it nourishes communities, fights poverty, drives clean energy, captures carbon, and powers
              a more just and thriving world.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              The Blue Economy is not a distant dream; it is rising now, through bold innovations:
              regenerative fisheries, renewable marine energy, and community-led conservation that
              restores life while creating opportunity.
            </p>
            <p className="text-brand-light font-medium text-lg">
              Around the globe, visionary leaders are proving that when courage meets action,
              the waves we shape today can carry a brighter, more sustainable future for all.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="h2 mb-6">Join the Movement</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              This conference is an invitation: to reflect, to learn, and to lead. To connect across
              borders and disciplines, and to dare to imagine a world where our oceans thrive and so do we.
              Blue Futures is not just an event—it is a call to action for the changemakers of today,
              shaping the oceans and the future we all depend on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={site.eventbriteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8 py-3"
              >
                Get Your Tickets Now
              </a>
              <Link href="/agenda" className="btn text-lg px-8 py-3">
                View Agenda
              </Link>
              <Link href="/speakers" className="btn text-lg px-8 py-3">
                Meet Our Speakers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info Section */}
      <section className="py-16 bg-gradient-to-br from-brand-light/10 to-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">When</h3>
              <p className="text-gray-600">February 27, 2026</p>
              <p className="text-gray-600 text-sm">Starting at 14:00</p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Where</h3>
              <p className="text-gray-600">Nova SBE</p>
              <p className="text-gray-600 text-sm">Lisbon, Portugal</p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Tickets</h3>
              <p className="text-gray-600">5 EUR for students</p>
              <p className="text-gray-600 text-sm">Fully refundable</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
