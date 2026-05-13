"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PetalProps {
  id: number;
}

const Petal = ({ id }: PetalProps) => {
  const size = useMemo(() => Math.random() * 10 + 5, []);
  const initialX = useMemo(() => Math.random() * 100, []);
  const duration = useMemo(() => Math.random() * 10 + 10, []);
  const delay = useMemo(() => Math.random() * 20, []);
  const rotation = useMemo(() => Math.random() * 360, []);
  const drift = useMemo(() => (Math.random() - 0.5) * 40, []);

  return (
    <motion.div
      initial={{ 
        top: "-5%", 
        left: `${initialX}%`, 
        opacity: 0,
        rotate: rotation,
        scale: size / 10
      }}
      animate={{ 
        top: "105%",
        left: `${initialX + drift}%`,
        opacity: [0, 0.8, 0.8, 0],
        rotate: rotation + 360,
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        ease: "linear",
        delay: delay 
      }}
      style={{
        position: "absolute",
        width: size,
        height: size * 1.2,
        background: "radial-gradient(circle, #fbcfe8 0%, #fda4af 100%)",
        borderRadius: "50% 0 50% 50%",
        pointerEvents: "none",
        zIndex: 1,
        filter: "blur(0.5px)",
        willChange: "transform",
      }}
    />
  );
};

export default function FallingParticles({ count = 20 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const actualCount = useMemo(() => isMobile ? Math.floor(count / 3) : count, [isMobile, count]);
  const petals = useMemo(() => Array.from({ length: actualCount }, (_, i) => i), [actualCount]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {petals.map((id) => (
        <Petal key={id} id={id} />
      ))}
    </div>
  );
}

