"use client";
import { useMemo, useState } from "react";
import Section from "@/components/Section";
import { speakers } from "@/lib/data/speakers";
import { agenda } from "@/lib/data/agenda";
import { news } from "@/lib/data/news";

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
    <Section title="Search">
      <input
        value={q}
        onChange={(e)=>setQ(e.target.value)}
        placeholder="Search people, sessions, news…"
        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand"
      />
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Speakers</h3>
          <ul className="space-y-2">
            {results.speakers.map(s => <li key={s.slug}>{s.name}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Agenda</h3>
          <ul className="space-y-2">
            {results.agenda.map((a,i) => <li key={i}>{a.time} — {a.title}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">News</h3>
          <ul className="space-y-2">
            {results.news.map((n,i) => <li key={i}>{n.title}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  );
}
