"use client";

import React from "react";
import Image from "next/image";
import FallingParticles from "./FallingParticles";

interface SectionBackgroundProps {
  children: React.ReactNode;
  backgroundImage?: string;
  overlayOpacity?: number;
  showParticles?: boolean;
  blur?: boolean;
  priority?: boolean;
}

export default function SectionBackground({
  children,
  backgroundImage = "/assets/backgrounds/bg1.jpg",
  overlayOpacity = 0.7,
  showParticles = true,
  blur = false,
  priority = false,
}: SectionBackgroundProps) {
  return (
    <div className="relative w-full overflow-hidden isolate">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className={`object-cover opacity-80 ${blur ? "blur-md scale-110" : ""}`}
          priority={priority}
          sizes="100vw"
        />
        {/* Overlay to ensure text readability */}
        <div 
          className="absolute inset-0 bg-washi/80 transition-opacity duration-500" 
          style={{ opacity: overlayOpacity }}
        ></div>
      </div>

      {/* Decorative Texture/Gradient */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-transparent via-washi/10 to-transparent pointer-events-none"></div>

      {/* Falling Elements */}
      {showParticles && <FallingParticles count={20} />}

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}


