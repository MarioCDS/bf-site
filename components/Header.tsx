"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="font-semibold text-brand">{site.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link text-sm ${pathname === item.href ? "bg-brand-light/30" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.eventbriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 btn btn-primary text-sm"
          >
            Get Your Tickets
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="container py-4 flex flex-col gap-2">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`nav-link ${pathname === item.href ? "bg-brand-light/30" : ""}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.eventbriteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-center mt-2"
            >
              Get Your Tickets
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
