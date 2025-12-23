"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll sections for About page
  const aboutScrollSections = [
    "blue-futures",
    "rethinking-oceans",
    "students-leaders",
    "sdg-ocean",
    "call-to-action"
  ];

  const getSectionLabel = (sectionId: string) => {
    const labels: Record<string, string> = {
      "blue-futures": "Blue Futures",
      "rethinking-oceans": "Rethinking Our Oceans",
      "students-leaders": "By students for students",
      "sdg-ocean": "SDG Ocean",
      "call-to-action": "Call to Action"
    };
    return labels[sectionId] || sectionId;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check which section is in viewport (for pages with scroll sections)
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Determine if current page has scroll sections
  const isAboutPage = pathname === "/about";
  const visibleSections = isAboutPage ? aboutScrollSections : [];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur border-b border-gray-200 shadow-md" : "bg-white/80 backdrop-blur border-b border-gray-100"
      }`}
    >
      {/* Main navigation - top bar */}
      <div className="border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-sm md:text-base">{site.name}</span>
          </Link>

          {/* Main tabs - hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-0">
            {site.mainNav.map((item, index) => (
              <div key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`nav-link px-4 py-4 text-sm font-medium border-b-2 transition-all ${
                      index === site.mainNav.length - 1
                        ? "bg-brand text-white border-brand"
                        : "text-gray-700 hover:text-brand border-b-2 border-transparent hover:border-brand-light"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`nav-link px-4 py-4 text-sm font-medium border-b-2 transition-all ${
                      pathname === item.href
                        ? "text-brand border-b-2 border-brand"
                        : "text-gray-700 hover:text-brand border-b-2 border-transparent hover:border-brand-light"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-brand"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll sections tabs - only show on pages with scrollable content */}
      {visibleSections.length > 0 && (
        <div className="border-b border-gray-100 bg-gray-50">
          <div className="container flex items-center gap-0 overflow-x-auto">
            {visibleSections.map((sectionId) => {
              const label = getSectionLabel(sectionId);
              return (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap flex-shrink-0 ${
                    activeSection === sectionId
                      ? "text-brand border-b-2 border-brand bg-white"
                      : "text-gray-600 hover:text-brand border-b-2 border-transparent hover:border-brand-light/50"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container flex flex-col">
            {site.mainNav.map((item) => (
              <div key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand border-b border-gray-100"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand border-b border-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
