import Link from "next/link";
import { site } from "@/lib/site";

export default function FoodCourtPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920"
            alt="Plant-based food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/70 to-brand-dark/90"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Plant-Based Food Court</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Innovation isn't only found in labs and startups — it's something we can
            savor, share, and celebrate together
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-blue-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The <strong className="text-brand">Plant-Based Food Court</strong> brings the spirit of
              innovation to the table... literally. Located alongside the Blue Innovation Hub, it offers
              participants a chance to refuel with delicious, sustainable meals that embody the same
              forward-thinking mindset driving the event.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Each dish is crafted to be climate-friendly, ocean-respectful, and rooted in the creativity
              of plant-based cuisine.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here, food becomes part of the experience: attendees can explore inventive flavors, discover
              new sustainable food brands, and enjoy a vibrant space where good choices for the planet
              also taste great.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-brand-light/10">
        <div className="container">
          <h2 className="h2 text-center mb-12">A Sustainable Dining Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Climate-Friendly</h3>
              <p className="text-gray-600">
                Every meal is designed with the planet in mind, minimizing carbon footprint
                while maximizing flavor and nutrition.
              </p>
            </div>

            <div className="card text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ocean-Respectful</h3>
              <p className="text-gray-600">
                Our menu choices honor ocean health, avoiding overfished species and
                supporting marine ecosystem preservation.
              </p>
            </div>

            <div className="card text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Creatively Crafted</h3>
              <p className="text-gray-600">
                Discover inventive flavors and new sustainable food brands pushing the
                boundaries of plant-based cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-blue-100">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="h2 mb-6">More Than Just Food</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Food Court is a vibrant space for connection and discovery. Between sessions,
                join fellow participants to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Explore innovative sustainable food brands</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Network with speakers and fellow attendees</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Learn about the connection between food systems and ocean health</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Experience how sustainable choices can be delicious</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
                alt="Sustainable food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-brand/5 to-brand-light/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-6 leading-relaxed">
              "It's a reminder that innovation isn't only found in labs and startups — it's something
              we can savor, share, and celebrate together... every single day."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-100">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="h2 mb-6">Join Us at Blue Futures</h2>
            <p className="text-gray-600 mb-8">
              Experience the future of sustainable food while connecting with ocean innovators
              and changemakers from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={site.eventbriteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Your Tickets
              </a>
              <Link href="/innovation-hub" className="btn">
                Explore Innovation Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
