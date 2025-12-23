import Link from "next/link";
import { site } from "@/lib/site";

export default function TicketsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920"
            alt="Conference"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand-dark/90"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Tickets</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join us on February 27, 2026 for a day of inspiration, innovation, and action
          </p>
        </div>
      </section>

      {/* Ticket Info */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Main Ticket Card */}
            <div className="card p-8 md:p-12 text-center mb-12 border-2 border-brand/20">
              <div className="inline-block px-4 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
                Student Price
              </div>
              <div className="text-5xl md:text-6xl font-bold text-brand mb-2">5 EUR</div>
              <div className="text-gray-600 mb-6">Fully refundable ticket</div>

              <div className="border-t border-gray-100 my-8"></div>

              <h3 className="text-xl font-semibold mb-4">What's Included</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full access to all conference sessions
                </li>
                <li className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Access to the Blue Innovation Hub
                </li>
                <li className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Plant-Based Food Court experience
                </li>
                <li className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Networking reception
                </li>
                <li className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conference materials
                </li>
              </ul>

              <a
                href={site.eventbriteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8 py-4 inline-block"
              >
                Get Tickets on Eventbrite
              </a>
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Event Details
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Date:</strong> February 27, 2026 (Friday)</li>
                  <li><strong>Time:</strong> 14:00 - 20:00</li>
                  <li><strong>Location:</strong> Nova SBE, Lisbon</li>
                  <li><strong>Duration:</strong> One day conference</li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Refund Policy
                </h3>
                <p className="text-gray-600 mb-4">
                  All student tickets are <strong>fully refundable</strong>. We want to make it as easy
                  as possible for students to participate in Blue Futures.
                </p>
                <p className="text-sm text-gray-500">
                  Refunds can be requested up to 24 hours before the event through Eventbrite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-16 bg-gradient-to-br from-brand-light/10 to-white">
        <div className="container">
          <h2 className="h2 text-center mb-12">Why Attend Blue Futures?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Connect</h3>
              <p className="text-gray-600">
                Network with ocean innovators, researchers, and fellow students passionate about marine sustainability
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Learn</h3>
              <p className="text-gray-600">
                Gain insights from leading experts on the Blue Economy, marine conservation, and sustainable innovation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Act</h3>
              <p className="text-gray-600">
                Be part of a movement shaping the future of our oceans and contributing to real change
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="h2 mb-4">Ready to Join Us?</h2>
            <p className="text-gray-600 mb-8">
              Secure your spot at Blue Futures 2026 and be part of the conversation shaping our ocean's future.
            </p>
            <a
              href={site.eventbriteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-lg px-8 py-3"
            >
              Get Your Tickets Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
