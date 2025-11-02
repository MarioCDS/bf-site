import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="container py-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center justify-between">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
        <div className="flex gap-3 text-sm">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/partners" className="hover:underline">Partners</Link>
          <Link href="/news" className="hover:underline">News</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
