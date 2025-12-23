import Link from "next/link";
import Section from "@/components/Section";
import { news } from "@/lib/data/news";
import { ExternalLink } from "lucide-react";

export default function NewsPage() {
  return (
    <Section title="News" subtitle="Latest updates from Blue Futures">
      <div className="grid gap-4">
        {news.map((n, i) => {
          const isExternal = n.url?.startsWith("http");
          const CardContent = (
            <>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-500">
                    {new Date(n.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </div>
                  <h3 className="font-semibold mt-1 group-hover:text-brand transition-colors">
                    {n.title}
                  </h3>
                  {n.excerpt && (
                    <p className="text-sm text-gray-600 mt-2">{n.excerpt}</p>
                  )}
                </div>
                {n.url && isExternal && (
                  <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                )}
              </div>
            </>
          );

          if (n.url) {
            if (isExternal) {
              return (
                <a
                  key={i}
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card hover:shadow-md transition block group"
                >
                  {CardContent}
                </a>
              );
            }
            return (
              <Link
                key={i}
                href={n.url}
                className="card hover:shadow-md transition block group"
              >
                {CardContent}
              </Link>
            );
          }

          return (
            <article key={i} className="card">
              {CardContent}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
