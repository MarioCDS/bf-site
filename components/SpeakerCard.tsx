import Link from "next/link";
import type { Speaker } from "@/lib/data/speakers";

export default function SpeakerCard({ s }:{ s: Speaker }) {
  return (
    <Link href={`/speakers/${s.slug}`} className="card hover:shadow-md transition block">
      <div className="flex items-center gap-4">
        <img src={s.headshot || "/placeholder.svg"} alt={s.name} className="w-16 h-16 rounded-full object-cover bg-gray-100"/>
        <div>
          <div className="font-semibold">{s.name}</div>
          <div className="text-sm text-gray-600">{s.title}{s.org ? `, ${s.org}` : ""}</div>
        </div>
      </div>
    </Link>
  );
}
