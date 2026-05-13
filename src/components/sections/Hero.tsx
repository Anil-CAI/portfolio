"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  // Smooth mouse movement for eyes
  const springConfig = { stiffness: 150, damping: 20 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const eyeX = useTransform(smoothMouseX, [0, 1920], [-10, 10]);
  const eyeY = useTransform(smoothMouseY, [0, 1080], [-8, 8]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, isMobile]);

  return (
    <section className="relative min-h-screen bg-[#ff4d8d] flex items-center justify-center overflow-hidden cursor-default">
      {/* Dynamic Background Shapes - Simplified for mobile */}
      <motion.div 
        animate={isMobile ? {} : { 
          scale: [1, 1.2, 1],
          rotate: [0, 20, 0],
          x: [-20, 20, -20]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-[#4ade80] rounded-[45%_55%_65%_35%_/_45%_45%_55%_55%] opacity-90"
      />
      <motion.div 
        animate={isMobile ? {} : { 
          scale: [1, 1.3, 1],
          rotate: [0, -30, 0],
          y: [20, -20, 20]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[5%] right-[-10%] w-[50vw] md:w-[35vw] h-[50vw] md:h-[35vw] bg-[#a855f7] rounded-full opacity-70"
      />
      <motion.div 
        animate={isMobile ? {} : { 
          scale: [1, 1.1, 1],
          rotate: [0, 15, 0],
          x: [30, -30, 30]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-15%] right-[5%] w-[70vw] md:w-[50vw] h-[70vw] md:h-[50vw] bg-[#eab308] rounded-[55%_45%_35%_65%_/_50%_60%_40%_50%] opacity-90"
      />

      {/* Main ANIL Characters Container */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 md:gap-10 px-4 w-full max-w-[1400px] py-20">
        
        {/* A - The Green Peak Monster */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="relative w-[35vw] md:w-[20vw] max-w-[280px]"
        >
          <svg viewBox="0 0 200 240" className="w-full drop-shadow-2xl">
            <motion.path 
              animate={isMobile ? {} : { d: ["M100 20 L20 220 L180 220 Z", "M100 25 L30 215 L170 215 Z", "M100 20 L20 220 L180 220 Z"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              d="M100 20 L20 220 L180 220 Z" fill="#2fd16b" 
            />
            <rect x="75" y="140" width="50" height="15" rx="5" fill="#ff4d8d" />
            <circle cx="100" cy="80" r="22" fill="white" />
            <motion.circle style={isMobile ? { x: 0, y: 0 } : { x: eyeX, y: eyeY }} cx="100" cy="80" r="10" fill="#1a1a2e" />
            <circle cx="104" cy="76" r="4" fill="white" />
            <path d="M90 115 L95 110 L100 115 L105 110 L110 115" stroke="white" strokeWidth="3" fill="none" />
          </svg>
        </motion.div>

        {/* N - The Blue Bend Monster */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative w-[35vw] md:w-[20vw] max-w-[280px] md:-mt-10"
        >
          <svg viewBox="0 0 200 240" className="w-full drop-shadow-2xl">
            <motion.path 
              animate={isMobile ? {} : { strokeWidth: [35, 40, 35] }}
              transition={{ duration: 3, repeat: Infinity }}
              d="M40 220 V40 L160 220 V40" stroke="#38bdf8" strokeWidth="38" fill="none" strokeLinecap="round" strokeLinejoin="round" 
            />
            <circle cx="65" cy="80" r="15" fill="white" />
            <motion.circle style={isMobile ? { x: 0, y: 0 } : { x: eyeX, y: eyeY }} cx="65" cy="80" r="7" fill="#1a1a2e" />
            <circle cx="135" cy="180" r="12" fill="white" />
            <motion.circle style={isMobile ? { x: 0, y: 0 } : { x: eyeX, y: eyeY }} cx="135" cy="180" r="5" fill="#ff4d8d" />
            <motion.path 
              animate={isMobile ? {} : { 
                d: ["M160 80 Q185 85 175 140", "M160 80 Q205 95 185 160", "M160 80 Q185 85 175 140"] 
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              d="M160 80 Q185 85 175 140" stroke="#ff85b3" strokeWidth="15" strokeLinecap="round" fill="none" 
            />
          </svg>
        </motion.div>

        {/* I - The Yellow Tall Monster */}
        <motion.div
          whileHover={{ scale: 1.1, y: -20 }}
          className="relative w-[25vw] md:w-[15vw] max-w-[200px] md:mt-10"
        >
          <svg viewBox="0 0 140 240" className="w-full drop-shadow-2xl">
            <motion.rect 
              animate={isMobile ? {} : { height: [180, 200, 180] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              x="35" y="20" width="70" height="190" rx="35" fill="#facc15" 
            />
            <circle cx="70" cy="70" r="25" fill="white" />
            <motion.circle style={isMobile ? { x: 0, y: 0 } : { x: eyeX, y: eyeY }} cx="70" cy="70" r="12" fill="#38bdf8" />
            <circle cx="75" cy="65" r="5" fill="white" />
            <motion.path 
              animate={isMobile ? {} : { d: ["M50 140 Q60 130 70 140 T90 140", "M50 145 Q60 155 70 145 T90 145", "M50 140 Q60 130 70 140 T90 140"] }}
              transition={{ duration: 3, repeat: Infinity }}
              d="M50 140 Q60 130 70 140 T90 140" stroke="#1a1a2e" strokeWidth="4" fill="none" strokeLinecap="round" 
            />
          </svg>
        </motion.div>

        {/* L - The Orange Corner Monster */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          className="relative w-[35vw] md:w-[20vw] max-w-[280px]"
        >
          <svg viewBox="0 0 200 240" className="w-full drop-shadow-2xl">
            <path d="M50 40 V200 H170" stroke="#f59e0b" strokeWidth="40" fill="none" strokeLinecap="round" />
            <circle cx="50" cy="75" r="18" fill="white" />
            <motion.circle style={isMobile ? { x: 0, y: 0 } : { x: eyeX, y: eyeY }} cx="50" cy="75" r="8" fill="#38bdf8" />
            <circle cx="150" cy="200" r="8" fill="white" />
            <circle cx="150" cy="200" r="4" fill="#1a1a2e" />
            <path d="M80 200 L90 215 L100 200 L110 215 L120 200" stroke="white" strokeWidth="4" fill="none" />
            <motion.path 
              animate={isMobile ? {} : { rotate: [-20, 20, -20] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ originX: "50px", originY: "120px" }}
              d="M50 120 Q20 110 10 130" stroke="#f59e0b" strokeWidth="10" strokeLinecap="round" fill="none" 
            />
          </svg>
        </motion.div>
      </div>

      {/* Navigation Overlay */}
      <div className="absolute top-10 left-0 right-0 flex flex-wrap justify-center gap-6 md:gap-12 text-white/90 font-bold text-[0.7rem] md:text-sm tracking-[0.2em] uppercase px-4 text-center">
        <a href="#about" className="hover:scale-110 hover:text-white transition-all no-underline">About</a>
        <a href="#projects" className="hover:scale-110 hover:text-white transition-all no-underline">Works</a>
        <a href="#skills" className="hover:scale-110 hover:text-white transition-all no-underline">Lab</a>
        <a href="#contact" className="hover:scale-110 hover:text-white transition-all no-underline">Contact</a>
      </div>
    </section>
  );
}
