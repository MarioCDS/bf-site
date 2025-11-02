import Section from "@/components/Section";
import { news } from "@/lib/data/news";

export default function NewsPage() {
  return (
    <Section title="News">
      <div className="grid gap-4">
        {news.map((n, i) => (
          <article key={i} className="card">
            <div className="text-sm text-gray-500">{new Date(n.date).toLocaleDateString()}</div>
            <h3 className="font-semibold">{n.title}</h3>
          </article>
        ))}
      </div>
    </Section>
  );
}
