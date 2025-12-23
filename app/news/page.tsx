import Link from "next/link";
import { news } from "@/lib/data/news";

export default function NewsPage() {
  return (
    <div>
      {/* Hero Section with Ocean Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1920"
            alt="Colorful fish swimming in the ocean"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand-dark/90"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest developments, announcements, and stories from Blue Futures
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16 bg-gradient-to-br from-brand-light/5 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {news.map((n, i) => (
                <article key={i} className="card hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-brand font-medium mb-1">
                        {new Date(n.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </div>
                      {n.url ? (
                        <a
                          href={n.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-semibold hover:text-brand transition-colors inline-flex items-center gap-2"
                        >
                          {n.title}
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <h3 className="text-xl font-semibold">{n.title}</h3>
                      )}
                    </div>
                    {n.url && (
                      <a
                        href={n.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary text-sm"
                      >
                        Read More
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {news.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No news articles yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Ocean Facts Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1920"
            alt="Coral reef ecosystem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/85"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Informed, Stay Engaged</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Follow our journey as we prepare for Blue Futures 2026. Subscribe to updates and be part of the conversation.
          </p>
          <Link href="/contact" className="btn bg-white text-brand hover:bg-white/90">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
