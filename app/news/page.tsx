import SectionWithBackground from "@/components/SectionWithBackground";
import { news } from "@/lib/data/news";
import Link from "next/link";

export default function NewsPage() {
  return (
    <SectionWithBackground title="News" backgroundTheme="trawling">
      <div className="grid gap-4">
        {news.map((n, i) => {
          const isExternal = n.url?.startsWith("http");
          const hasLink = !!n.url;

          return (
            <article key={i} className={`card transition-shadow ${hasLink ? 'hover:shadow-lg hover:bg-white/90 cursor-pointer' : ''}`}>
              {hasLink && isExternal ? (
                <a href={n.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="text-sm text-gray-500">{new Date(n.date).toLocaleDateString()}</div>
                  <h3 className="font-semibold">{n.title}</h3>
                </a>
              ) : hasLink ? (
                <Link href={n.url} className="block">
                  <div className="text-sm text-gray-500">{new Date(n.date).toLocaleDateString()}</div>
                  <h3 className="font-semibold">{n.title}</h3>
                </Link>
              ) : (
                <div>
                  <div className="text-sm text-gray-500">{new Date(n.date).toLocaleDateString()}</div>
                  <h3 className="font-semibold">{n.title}</h3>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </SectionWithBackground>
  );
}
