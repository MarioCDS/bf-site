"use client";
import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

interface OceanBackgroundProps {
  variant?: "hero" | "section" | "deep";
  showBubbles?: boolean;
  showLightRays?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function OceanBackground({
  variant = "hero",
  showBubbles = true,
  showLightRays = true,
  children,
  className = ""
}: OceanBackgroundProps) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    if (showBubbles) {
      const newBubbles: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 20 + 5,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10
      }));
      setBubbles(newBubbles);
    }
  }, [showBubbles]);

  const variantClasses = {
    hero: "hero-ocean",
    section: "section-ocean",
    deep: "section-deep"
  };

  return (
    <div className={`relative overflow-hidden ${variantClasses[variant]} ${className}`}>
      {/* Light rays effect */}
      {showLightRays && (
        <>
          <div className="light-rays" style={{ transform: "translateX(-50%) rotate(-15deg)" }} />
          <div className="light-rays" style={{ transform: "translateX(-30%) rotate(10deg)", animationDelay: "2s" }} />
        </>
      )}

      {/* Floating bubbles */}
      {showBubbles && bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`
          }}
        />
      ))}

      {/* Wave overlay at bottom */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: "60px" }}
      >
        <path
          fill="rgba(255,255,255,0.1)"
          d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
        <path
          fill="rgba(255,255,255,0.05)"
          d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,85.3C960,75,1056,53,1152,53.3C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
