import React from "react";

interface ScrollSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundPosition?: string;
  theme?: "coral" | "fish" | "deep-sea" | "waves" | "light";
}

const themeBackgrounds: Record<string, { gradient: string; image: string }> = {
  coral: {
    gradient: "linear-gradient(135deg, rgba(26, 137, 142, 0.8) 0%, rgba(0, 100, 120, 0.8) 100%)",
    image: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop')"
  },
  fish: {
    gradient: "linear-gradient(135deg, rgba(13, 110, 253, 0.8) 0%, rgba(0, 150, 180, 0.8) 100%)",
    image: "url('https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1200&h=800&fit=crop')"
  },
  "deep-sea": {
    gradient: "linear-gradient(135deg, rgba(16, 39, 99, 0.85) 0%, rgba(13, 110, 253, 0.85) 100%)",
    image: "url('https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=800&fit=crop')"
  },
  waves: {
    gradient: "linear-gradient(135deg, rgba(0, 119, 182, 0.8) 0%, rgba(48, 192, 226, 0.8) 100%)",
    image: "url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop')"
  },
  light: {
    gradient: "linear-gradient(135deg, rgba(32, 60, 144, 0.15) 0%, rgba(79, 117, 184, 0.15) 100%)",
    image: ""
  }
};

export default function ScrollSection({
  id,
  title,
  subtitle,
  children,
  theme = "light",
  backgroundImage,
  backgroundPosition = "center"
}: ScrollSectionProps) {
  const themeStyle = themeBackgrounds[theme];
  const bgImage = backgroundImage || themeStyle.image;

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `${themeStyle.gradient}, ${bgImage}`,
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition,
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      <div className="container py-20 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <h2 className="h2 text-white mb-4">{title}</h2>
          {subtitle && <p className="text-white/90 text-lg mb-8">{subtitle}</p>}
          <div className="text-white/95 space-y-6">
            {children}
          </div>
        </div>
      </div>

      {/* Gradient overlay to bottom */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-b from-transparent to-white/20 pointer-events-none"></div>
    </section>
  );
}
