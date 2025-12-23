"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // List of sections that are scrollable (used on about and other pages)
  const scrollSections = [
    "blue-futures",
    "ocean-heart",
    "students-leaders",
    "sdg-ocean",
    "call-to-action"
  ];

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

  // Determine if we're on a scrollable page
  const isScrollablePage = ["/about", "/governance", "/blue-innovation-hub", "/food-court"].includes(
    pathname
  );

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
          {isScrollablePage && scrollSections.length > 0 ? (
            // Scrollable page navigation
            scrollSections.map((sectionId) => {
              const label = sectionId
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

              return (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className={`nav-link text-sm font-medium transition-all ${
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
                className={`nav-link text-sm font-medium transition-all ${
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
