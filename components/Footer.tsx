import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">About Blue Futures</h3>
            <p className="text-sm text-gray-600">A student-led conference reimagining ocean stewardship and the regenerative Blue Economy.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-brand transition">About</Link></li>
              <li><Link href="/agenda" className="text-gray-600 hover:text-brand transition">Agenda</Link></li>
              <li><Link href="/speakers" className="text-gray-600 hover:text-brand transition">Speakers</Link></li>
              <li><Link href="/partners" className="text-gray-600 hover:text-brand transition">Partners</Link></li>
              <li><Link href="/tickets" className="text-gray-600 hover:text-brand transition">Get Tickets</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact & Social</h3>
            <div className="text-sm space-y-2">
              <p><a href="mailto:info@bluefutures2026.com" className="text-gray-600 hover:text-brand transition">info@bluefutures2026.com</a></p>
              <div className="flex gap-4 mt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand transition">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand transition">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand transition">Twitter</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-between">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/contact" className="text-gray-600 hover:text-brand transition">Contact</Link>
            <Link href="/news" className="text-gray-600 hover:text-brand transition">News</Link>
            <a href="https://www.eventbrite.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand transition">Eventbrite</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
