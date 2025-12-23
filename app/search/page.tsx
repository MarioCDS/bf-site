"use client";
import { useMemo, useState } from "react";
import SectionWithBackground from "@/components/SectionWithBackground";
import { speakers } from "@/lib/data/speakers";
import { agenda } from "@/lib/data/agenda";
import { news } from "@/lib/data/news";
import Link from "next/link";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const term = q.toLowerCase();
    return {
      speakers: speakers.filter(s => (s.name + " " + s.title + " " + (s.org||"") + " " + s.bio).toLowerCase().includes(term)),
      agenda: agenda.filter(a => (a.title + " " + (a.speakers||[]).join(" ")).toLowerCase().includes(term)),
      news: news.filter(n => (n.title).toLowerCase().includes(term))
    };
  }, [q]);

  return (
    <SectionWithBackground title="Search" backgroundTheme="ocean">
      <input
        value={q}
        onChange={(e)=>setQ(e.target.value)}
        placeholder="Search people, sessions, news…"
        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand text-gray-800"
      />
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <h3 className="font-semibold mb-3 text-white">Speakers</h3>
          <ul className="space-y-2">
            {results.speakers.length > 0 ? (
              results.speakers.map(s => (
                <li key={s.slug}>
                  <Link href={`/speakers/${s.slug}`} className="text-white/90 hover:text-brand-light hover:underline transition text-sm">
                    {s.name}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-white/60 text-sm">No speakers found</li>
            )}
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <h3 className="font-semibold mb-3 text-white">Agenda</h3>
          <ul className="space-y-2">
            {results.agenda.length > 0 ? (
              results.agenda.map((a,i) => <li key={i} className="text-white/90 text-sm">{a.time} — {a.title}</li>)
            ) : (
              <li className="text-white/60 text-sm">No sessions found</li>
            )}
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <h3 className="font-semibold mb-3 text-white">News</h3>
          <ul className="space-y-2">
            {results.news.length > 0 ? (
              results.news.map((n,i) => (
                <li key={i}>
                  {n.url?.startsWith("http") ? (
                    <a href={n.url} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-brand-light hover:underline transition text-sm">
                      {n.title}
                    </a>
                  ) : (
                    <div className="text-white/90 text-sm">
                      {n.title}
                    </div>
                  )}
                </li>
              ))
            ) : (
              <li className="text-white/60 text-sm">No news found</li>
            )}
          </ul>
        </div>
      </div>
    </SectionWithBackground>
  );
}
