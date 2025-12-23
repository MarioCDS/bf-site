"use client";

interface VideoBackgroundProps {
  videoUrl?: string;
  posterUrl?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
}

export default function VideoBackground({
  videoUrl,
  posterUrl,
  overlay = true,
  overlayOpacity = 0.6,
  children,
  className = ""
}: VideoBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      {videoUrl && (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterUrl}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Animated Ocean Gradient Fallback */}
      {!videoUrl && (
        <div className="absolute inset-0 ocean-gradient animate-ocean" />
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand/70 via-brand-dark/50 to-brand/70"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
