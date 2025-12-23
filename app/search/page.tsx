"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import { speakers } from "@/lib/data/speakers";
import { agenda } from "@/lib/data/agenda";
import { news } from "@/lib/data/news";
import { Search, User, Calendar, Newspaper, ExternalLink } from "lucide-react";

export default function SearchPage() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    if (!q.trim()) {
      return { speakers: [], agenda: [], news: [] };
    }
    const term = q.toLowerCase();
    return {
      speakers: speakers.filter(s =>
        (s.name + " " + s.title + " " + (s.org || "") + " " + s.bio)
          .toLowerCase()
          .includes(term)
      ),
      agenda: agenda.filter(a =>
        (a.title + " " + (a.speakers || []).join(" ") + " " + (a.description || ""))
          .toLowerCase()
          .includes(term)
      ),
      news: news.filter(n =>
        (n.title + " " + (n.excerpt || "")).toLowerCase().includes(term)
      )
    };
  }, [q]);

  const totalResults = results.speakers.length + results.agenda.length + results.news.length;
  const hasQuery = q.trim().length > 0;

  return (
    <Section title="Search" subtitle="Find speakers, sessions, and news">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search people, sessions, news…"
          className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
          autoFocus
        />
      </div>

      {hasQuery && (
        <div className="mt-4 text-sm text-gray-500">
          {totalResults === 0
            ? "No results found"
            : `Found ${totalResults} result${totalResults !== 1 ? "s" : ""}`}
        </div>
      )}

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {/* Speakers Results */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <User className="w-4 h-4 text-brand" />
            Speakers
            {hasQuery && (
              <span className="text-sm font-normal text-gray-500">
                ({results.speakers.length})
              </span>
            )}
          </h3>
          <ul className="space-y-2">
            {!hasQuery ? (
              <li className="text-sm text-gray-500">Type to search speakers...</li>
            ) : results.speakers.length === 0 ? (
              <li className="text-sm text-gray-500">No speakers found</li>
            ) : (
              results.speakers.map(s => (
                <li key={s.slug}>
                  <Link
                    href={`/speakers/${s.slug}`}
                    className="block p-3 rounded-lg hover:bg-brand-light/20 transition group"
                  >
                    <div className="font-medium group-hover:text-brand transition-colors">
                      {s.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {s.title}
                      {s.org && `, ${s.org}`}
                    </div>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Agenda Results */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-brand" />
            Agenda
            {hasQuery && (
              <span className="text-sm font-normal text-gray-500">
                ({results.agenda.length})
              </span>
            )}
          </h3>
          <ul className="space-y-2">
            {!hasQuery ? (
              <li className="text-sm text-gray-500">Type to search sessions...</li>
            ) : results.agenda.length === 0 ? (
              <li className="text-sm text-gray-500">No sessions found</li>
            ) : (
              results.agenda.map((a, i) => (
                <li key={i}>
                  <Link
                    href={`/agenda#day${a.day}`}
                    className="block p-3 rounded-lg hover:bg-brand-light/20 transition group"
                  >
                    <div className="text-xs text-gray-500">Day {a.day} • {a.time}</div>
                    <div className="font-medium group-hover:text-brand transition-colors">
                      {a.title}
                    </div>
                    {a.speakers && a.speakers.length > 0 && (
                      <div className="text-sm text-gray-500 mt-1">
                        {a.speakers.join(", ")}
                      </div>
                    )}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* News Results */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-brand" />
            News
            {hasQuery && (
              <span className="text-sm font-normal text-gray-500">
                ({results.news.length})
              </span>
            )}
          </h3>
          <ul className="space-y-2">
            {!hasQuery ? (
              <li className="text-sm text-gray-500">Type to search news...</li>
            ) : results.news.length === 0 ? (
              <li className="text-sm text-gray-500">No news found</li>
            ) : (
              results.news.map((n, i) => {
                const isExternal = n.url?.startsWith("http");
                const content = (
                  <div className="p-3 rounded-lg hover:bg-brand-light/20 transition group">
                    <div className="text-xs text-gray-500">
                      {new Date(n.date).toLocaleDateString()}
                    </div>
                    <div className="font-medium group-hover:text-brand transition-colors flex items-center gap-2">
                      {n.title}
                      {isExternal && <ExternalLink className="w-3 h-3 text-gray-400" />}
                    </div>
                    {n.excerpt && (
                      <div className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {n.excerpt}
                      </div>
                    )}
                  </div>
                );

                if (n.url) {
                  if (isExternal) {
                    return (
                      <li key={i}>
                        <a
                          href={n.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          {content}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={i}>
                      <Link href={n.url} className="block">
                        {content}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={i}>
                    <Link href="/news" className="block">
                      {content}
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </Section>
  );
}
