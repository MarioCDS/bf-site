import { speakers } from "@/lib/data/speakers";
import SpeakerCard from "@/components/SpeakerCard";

export default function SpeakersPage() {
  return (
    <div>
      {/* Hero Section with Ocean Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920"
            alt="Sea turtle swimming in the ocean"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand-dark/90"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Speakers</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet the visionaries, researchers, and changemakers who will inspire us at Blue Futures 2026
          </p>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-16 bg-gradient-to-br from-brand-light/5 to-white">
        <div className="container">
          {speakers.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {speakers.map((s) => <SpeakerCard key={s.slug} s={s} />)}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="h2 mb-4">Speakers Coming Soon</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                We're finalizing our incredible lineup of speakers. Check back soon for announcements!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Ocean Conservation Quote */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1920"
            alt="Green sea turtle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/85"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <blockquote className="text-2xl md:text-3xl font-medium max-w-3xl mx-auto mb-6 leading-relaxed">
            "The sea, once it casts its spell, holds one in its net of wonder forever."
          </blockquote>
          <cite className="text-white/80 text-lg">— Jacques Cousteau</cite>
        </div>
      </section>
    </div>
  );
}
