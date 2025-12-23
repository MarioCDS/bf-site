"use client";
import React, { useRef, useEffect, useState } from "react";

interface SectionWithBackgroundProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  backgroundTheme?: "ocean" | "sharks" | "coral" | "underwater" | "trawling";
}

const backgroundThemes: Record<string, { gradient: string; images: string[] }> = {
  ocean: {
    gradient: "linear-gradient(135deg, rgba(0, 119, 182, 0.6) 0%, rgba(48, 192, 226, 0.6) 100%)",
    images: [
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1600&h=900&fit=crop"
    ]
  },
  sharks: {
    gradient: "linear-gradient(135deg, rgba(16, 39, 99, 0.7) 0%, rgba(13, 110, 253, 0.7) 100%)",
    images: [
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1591381954820-ce88a34f2e51?w=1600&h=900&fit=crop"
    ]
  },
  coral: {
    gradient: "linear-gradient(135deg, rgba(26, 137, 142, 0.7) 0%, rgba(0, 100, 120, 0.7) 100%)",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1600&h=900&fit=crop"
    ]
  },
  underwater: {
    gradient: "linear-gradient(135deg, rgba(13, 110, 253, 0.75) 0%, rgba(48, 192, 226, 0.75) 100%)",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1600&h=900&fit=crop"
    ]
  },
  trawling: {
    gradient: "linear-gradient(135deg, rgba(52, 73, 94, 0.8) 0%, rgba(41, 50, 65, 0.8) 100%)",
    images: [
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1494783367193-149034c05e41?w=1600&h=900&fit=crop"
    ]
  }
};

export default function SectionWithBackground({
  title,
  subtitle,
  children,
  backgroundTheme = "ocean"
}: SectionWithBackgroundProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const theme = backgroundThemes[backgroundTheme];

  // Set initial background image
  useEffect(() => {
    setImageUrl(theme.images[0]);
  }, [backgroundTheme]);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          setOffsetY(rect.top * 0.3);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-20 overflow-hidden"
      style={{
        backgroundImage: `${theme.gradient}, url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        transform: `translateY(${offsetY}px)`
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="container relative z-10">
        <h2 className="h2 text-white">{title}</h2>
        {subtitle && <p className="muted mt-2 text-white/90">{subtitle}</p>}
        <div className="mt-6 text-white">
          {children}
        </div>
      </div>
    </section>
  );
}
