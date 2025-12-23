"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Sections for about page
  const aboutSections = [
    "blue-futures",
    "ocean-heart",
    "students-leaders",
    "sdg-ocean",
    "call-to-action"
  ];

  // Sections for home page
  const homeSections = [
    "highlights",
    "why-blue-futures",
    "join-movement",
    "call-action"
  ];

  const getSectionLabels = (sectionIds: string[]) => {
    const labels: Record<string, string> = {
      "blue-futures": "Blue Futures",
      "ocean-heart": "Ocean Heart",
      "students-leaders": "Students Leaders",
      "sdg-ocean": "SDG Ocean",
      "call-to-action": "Call To Action",
      "highlights": "Highlights",
      "why-blue-futures": "Why Blue Futures",
      "join-movement": "Join Movement",
      "call-action": "Future is Now"
    };
    return labels;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check which section is in viewport
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

  // Determine which sections to show
  let visibleSections: string[] = [];
  const labels = getSectionLabels([...aboutSections, ...homeSections]);

  if (pathname === "/about") {
    visibleSections = aboutSections;
  } else if (pathname === "/") {
    visibleSections = homeSections;
  }

  // Check if current page has scrollable sections
  const isScrollablePage = visibleSections.length > 0;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur border-b border-gray-100 shadow-md" : "bg-white/60 backdrop-blur"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="font-bold text-sm md:text-base hidden sm:inline">{site.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {isScrollablePage ? (
            // Scrollable page navigation
            visibleSections.map((sectionId) => {
              const label = labels[sectionId];

              return (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className={`nav-link text-sm font-medium transition-all px-3 py-2 rounded-lg ${
                    activeSection === sectionId
                      ? "bg-brand text-white"
                      : "text-gray-700 hover:text-brand hover:bg-brand-light/20"
                  }`}
                >
                  {label}
                </button>
              );
            })
          ) : (
            // Regular page navigation
            site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-medium transition-all px-3 py-2 rounded-lg ${
                  pathname === item.href
                    ? "bg-brand text-white"
                    : "text-gray-700 hover:text-brand hover:bg-brand-light/20"
                }`}
              >
                {item.label}
              </Link>
            ))
          )}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-brand">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
