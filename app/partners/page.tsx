import Link from "next/link";
import { partners, Partner } from "@/lib/data/partners";

const tierOrder: Partner["tier"][] = ["Host", "Main Sponsor", "Partner", "Institutional Partner"];

const tierDescriptions: Record<Partner["tier"], string> = {
  "Host": "The organizations making Blue Futures possible",
  "Main Sponsor": "Our primary supporters driving ocean innovation",
  "Partner": "Collaborators committed to ocean sustainability",
  "Institutional Partner": "Academic and research institutions advancing ocean knowledge"
};

export default function PartnersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920"
            alt="Ocean partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand-dark/90"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Together, we're shaping the future of our oceans. Blue Futures is made possible by
            the generous support and collaboration of these organizations.
          </p>
        </div>
      </section>

      {/* Partners by Tier */}
      <section className="py-16 bg-blue-100">
        <div className="container">
          {tierOrder.map((tier) => {
            const tierPartners = partners.filter(p => p.tier === tier);
            if (tierPartners.length === 0) return null;

            return (
              <div key={tier} className="mb-16 last:mb-0">
                <div className="text-center mb-8">
                  <h2 className="h2 mb-2">{tier === "Host" ? "Hosts" : tier === "Main Sponsor" ? "Main Sponsors" : tier + "s"}</h2>
                  <p className="muted">{tierDescriptions[tier]}</p>
                </div>

                <div className={`grid gap-6 ${
                  tier === "Host" ? "md:grid-cols-3" :
                  tier === "Main Sponsor" ? "md:grid-cols-2 max-w-3xl mx-auto" :
                  "md:grid-cols-3 lg:grid-cols-4"
                }`}>
                  {tierPartners.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`card hover:shadow-lg transition-shadow group ${
                        tier === "Host" || tier === "Main Sponsor" ? "p-8" : "p-6"
                      }`}
                    >
                      {/* Logo */}
                      <div className={`bg-gray-50 rounded-xl flex items-center justify-center mb-4 p-4 ${
                        tier === "Host" || tier === "Main Sponsor" ? "h-28" : "h-20"
                      }`}>
                        {partner.logo ? (
                          <img
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            className={`max-h-full max-w-full object-contain ${
                              tier === "Host" || tier === "Main Sponsor" ? "h-16" : "h-12"
                            }`}
                          />
                        ) : (
                          <span className={`font-semibold text-gray-400 text-center px-4 ${
                            tier === "Host" || tier === "Main Sponsor" ? "text-lg" : "text-sm"
                          }`}>
                            {partner.name}
                          </span>
                        )}
                      </div>

                      {/* Partner Name */}
                      <h3 className={`font-semibold text-center group-hover:text-brand transition-colors ${
                        tier === "Host" || tier === "Main Sponsor" ? "text-lg" : "text-base"
                      }`}>
                        {partner.name}
                      </h3>

                      {/* Description */}
                      {partner.description && (tier === "Host" || tier === "Main Sponsor") && (
                        <p className="text-sm text-gray-600 text-center mt-2">
                          {partner.description}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-light/10 to-brand/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-6">Become a Partner</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Join us in shaping the future of our oceans. Partner with Blue Futures to connect
              with the next generation of ocean leaders, showcase your commitment to sustainability,
              and contribute to meaningful change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Contact Us About Partnership
              </Link>
              <a
                href="mailto:bluefutures@oikos-lisbon.org?subject=Partnership%20Inquiry"
                className="btn"
              >
                Email Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
