import SectionWithBackground from "@/components/SectionWithBackground";
import { news } from "@/lib/data/news";
import Link from "next/link";

export default function NewsPage() {
  return (
    <SectionWithBackground title="News" backgroundTheme="trawling">
      <div className="grid gap-4">
        {news.map((n, i) => {
          const isExternal = n.url?.startsWith("http");
          const linkProps = isExternal
            ? { href: n.url || "#", target: "_blank", rel: "noopener noreferrer" }
            : { href: n.url || "#" };

          return (
            <article key={i} className="card hover:shadow-lg transition-shadow hover:bg-white/90 cursor-pointer">
              {isExternal ? (
                <a {...linkProps} className="block">
                  <div className="text-sm text-gray-500">{new Date(n.date).toLocaleDateString()}</div>
                  <h3 className="font-semibold">{n.title}</h3>
                </a>
              ) : (
                <Link href={linkProps.href} className="block">
                  <div className="text-sm text-gray-500">{new Date(n.date).toLocaleDateString()}</div>
                  <h3 className="font-semibold">{n.title}</h3>
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </SectionWithBackground>
  );
}
