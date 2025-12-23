"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { speakers } from "@/lib/data/speakers";
import { agenda } from "@/lib/data/agenda";
import { news } from "@/lib/data/news";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const term = q.toLowerCase();
    if (!term) return { speakers: [], agenda: [], news: [] };
    return {
      speakers: speakers.filter(s => (s.name + " " + s.title + " " + (s.org||"") + " " + s.bio).toLowerCase().includes(term)),
      agenda: agenda.filter(a => (a.title + " " + (a.speakers||[]).join(" ")).toLowerCase().includes(term)),
      news: news.filter(n => (n.title).toLowerCase().includes(term))
    };
  }, [q]);

  const hasResults = q && (results.speakers.length > 0 || results.agenda.length > 0 || results.news.length > 0);
  const noResults = q && !hasResults;

  return (
    <div>
      {/* Hero Section with Ocean Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920"
            alt="Underwater ocean scene"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand-dark/90"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Search</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Find speakers, sessions, and news from Blue Futures
          </p>

          {/* Search Input */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search speakers, sessions, news..."
                className="w-full bg-blue-100 text-gray-800 border-0 rounded-2xl pl-14 pr-6 py-4 text-lg outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-16 bg-gradient-to-br from-brand-light/5 to-white min-h-[400px]">
        <div className="container">
          {!q && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h2 className="h2 mb-4">Start Searching</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Enter a search term above to find speakers, agenda items, and news related to Blue Futures.
              </p>
            </div>
          )}

          {noResults && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
              <h2 className="h2 mb-4">No Results Found</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                We couldn't find anything matching "{q}". Try different keywords or browse our pages.
              </p>
            </div>
          )}

          {hasResults && (
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Speakers Results */}
              {results.speakers.length > 0 && (
                <div>
                  <h2 className="h2 mb-6 flex items-center gap-3">
                    <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Speakers ({results.speakers.length})
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {results.speakers.map(s => (
                      <Link
                        key={s.slug}
                        href={`/speakers/${s.slug}`}
                        className="card p-4 hover:shadow-lg transition-shadow flex items-center gap-4"
                      >
                        <div className="w-14 h-14 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-brand font-semibold">
                            {s.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold hover:text-brand">{s.name}</h3>
                          <p className="text-sm text-gray-600">{s.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Agenda Results */}
              {results.agenda.length > 0 && (
                <div>
                  <h2 className="h2 mb-6 flex items-center gap-3">
                    <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Sessions ({results.agenda.length})
                  </h2>
                  <div className="space-y-3">
                    {results.agenda.map((a, i) => (
                      <Link
                        key={i}
                        href="/agenda"
                        className="card p-4 hover:shadow-lg transition-shadow block"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-brand font-bold text-lg">{a.time}</div>
                          <div>
                            <h3 className="font-semibold">{a.title}</h3>
                            {a.speakers && a.speakers.length > 0 && (
                              <p className="text-sm text-gray-600 mt-1">
                                With: {a.speakers.join(", ")}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* News Results */}
              {results.news.length > 0 && (
                <div>
                  <h2 className="h2 mb-6 flex items-center gap-3">
                    <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    News ({results.news.length})
                  </h2>
                  <div className="space-y-3">
                    {results.news.map((n, i) => (
                      <Link
                        key={i}
                        href="/news"
                        className="card p-4 hover:shadow-lg transition-shadow block"
                      >
                        <div className="text-sm text-brand font-medium mb-1">
                          {new Date(n.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </div>
                        <h3 className="font-semibold">{n.title}</h3>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1920"
            alt="School of fish"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/85"></div>
        </div>
        <div className="relative z-10 container text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Quick Links</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Jump directly to the sections you're interested in
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/speakers" className="btn bg-blue-100 text-brand hover:bg-blue-100/90">
              View Speakers
            </Link>
            <Link href="/agenda" className="btn border-white text-white hover:bg-blue-100/10">
              See Agenda
            </Link>
            <Link href="/news" className="btn border-white text-white hover:bg-blue-100/10">
              Latest News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
