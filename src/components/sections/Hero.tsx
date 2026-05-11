"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement for eyes
  const springConfig = { stiffness: 150, damping: 20 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const eyeX = useTransform(smoothMouseX, [0, 1920], [-10, 10]);
  const eyeY = useTransform(smoothMouseY, [0, 1080], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen bg-[#ff4d8d] flex items-center justify-center overflow-hidden cursor-default">
      {/* Dynamic Background Shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 20, 0],
          x: [-20, 20, -20]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-[#4ade80] rounded-[45%_55%_65%_35%_/_45%_45%_55%_55%] opacity-90"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -30, 0],
          y: [20, -20, 20]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[5%] right-[-10%] w-[35vw] h-[35vw] bg-[#a855f7] rounded-full opacity-70 blur-[2px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 15, 0],
          x: [30, -30, 30]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-15%] right-[5%] w-[50vw] h-[50vw] bg-[#eab308] rounded-[55%_45%_35%_65%_/_50%_60%_40%_50%] opacity-90"
      />

      {/* Main ANIL Characters Container */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-2 md:gap-10 px-4 w-full max-w-[1400px]">
        
        {/* A - The Green Peak Monster */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="relative w-[20vw] max-w-[280px]"
        >
          <svg viewBox="0 0 200 240" className="w-full drop-shadow-2xl">
            {/* Body */}
            <motion.path 
              animate={{ d: ["M100 20 L20 220 L180 220 Z", "M100 25 L30 215 L170 215 Z", "M100 20 L20 220 L180 220 Z"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              d="M100 20 L20 220 L180 220 Z" fill="#2fd16b" 
            />
            {/* The "Bridge" inside A */}
            <rect x="75" y="140" width="50" height="15" rx="5" fill="#ff4d8d" />
            {/* Eye */}
            <circle cx="100" cy="80" r="22" fill="white" />
            <motion.circle style={{ x: eyeX, y: eyeY }} cx="100" cy="80" r="10" fill="#1a1a2e" />
            <circle cx="104" cy="76" r="4" fill="white" />
            {/* Teeth below eye */}
            <path d="M90 115 L95 110 L100 115 L105 110 L110 115" stroke="white" strokeWidth="3" fill="none" />
          </svg>
        </motion.div>

        {/* N - The Blue Bend Monster */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative w-[20vw] max-w-[280px] -mt-10"
        >
          <svg viewBox="0 0 200 240" className="w-full drop-shadow-2xl">
            <motion.path 
              animate={{ strokeWidth: [35, 40, 35] }}
              transition={{ duration: 3, repeat: Infinity }}
              d="M40 220 V40 L160 220 V40" stroke="#38bdf8" strokeWidth="38" fill="none" strokeLinecap="round" strokeLinejoin="round" 
            />
            {/* Multiple Eyes */}
            <circle cx="65" cy="80" r="15" fill="white" />
            <motion.circle style={{ x: eyeX, y: eyeY }} cx="65" cy="80" r="7" fill="#1a1a2e" />
            
            <circle cx="135" cy="180" r="12" fill="white" />
            <motion.circle style={{ x: eyeX, y: eyeY }} cx="135" cy="180" r="5" fill="#ff4d8d" />
            
            {/* Long Tongue */}
            <motion.path 
              animate={{ 
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
          className="relative w-[15vw] max-w-[200px] mt-10"
        >
          <svg viewBox="0 0 140 240" className="w-full drop-shadow-2xl">
            <motion.rect 
              animate={{ height: [180, 200, 180] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              x="35" y="20" width="70" height="190" rx="35" fill="#facc15" 
            />
            {/* Big Expressive Eye */}
            <circle cx="70" cy="70" r="25" fill="white" />
            <motion.circle style={{ x: eyeX, y: eyeY }} cx="70" cy="70" r="12" fill="#38bdf8" />
            <circle cx="75" cy="65" r="5" fill="white" />
            {/* Squiggly mouth */}
            <motion.path 
              animate={{ d: ["M50 140 Q60 130 70 140 T90 140", "M50 145 Q60 155 70 145 T90 145", "M50 140 Q60 130 70 140 T90 140"] }}
              transition={{ duration: 3, repeat: Infinity }}
              d="M50 140 Q60 130 70 140 T90 140" stroke="#1a1a2e" strokeWidth="4" fill="none" strokeLinecap="round" 
            />
          </svg>
        </motion.div>

        {/* L - The Orange Corner Monster */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          className="relative w-[20vw] max-w-[280px]"
        >
          <svg viewBox="0 0 200 240" className="w-full drop-shadow-2xl">
            <path d="M50 40 V200 H170" stroke="#f59e0b" strokeWidth="40" fill="none" strokeLinecap="round" />
            {/* Main Eye */}
            <circle cx="50" cy="75" r="18" fill="white" />
            <motion.circle style={{ x: eyeX, y: eyeY }} cx="50" cy="75" r="8" fill="#38bdf8" />
            
            {/* Little tiny eye on the end */}
            <circle cx="150" cy="200" r="8" fill="white" />
            <circle cx="150" cy="200" r="4" fill="#1a1a2e" />

            {/* Sharp Teeth */}
            <path d="M80 200 L90 215 L100 200 L110 215 L120 200" stroke="white" strokeWidth="4" fill="none" />
            
            {/* Waving Arm */}
            <motion.path 
              animate={{ rotate: [-20, 20, -20] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ originX: "50px", originY: "120px" }}
              d="M50 120 Q20 110 10 130" stroke="#f59e0b" strokeWidth="10" strokeLinecap="round" fill="none" 
            />
          </svg>
        </motion.div>

        {/* Branding .TECH */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
          className="absolute bottom-10 right-10 md:right-20 text-sumi font-black text-6xl md:text-8xl italic tracking-tighter mix-blend-overlay opacity-80"
        >
          .tech
        </motion.div>
      </div>

      {/* Navigation Overlay */}
      <div className="absolute top-10 left-0 right-0 flex justify-center gap-12 text-white/90 font-bold text-sm tracking-[0.2em] uppercase">
        <a href="#about" className="hover:scale-110 hover:text-white transition-all">About</a>
        <a href="#projects" className="hover:scale-110 hover:text-white transition-all">Works</a>
        <a href="#skills" className="hover:scale-110 hover:text-white transition-all">Lab</a>
        <a href="#contact" className="hover:scale-110 hover:text-white transition-all">Contact</a>
      </div>

      {/* Social Footer */}
      <div className="absolute bottom-10 left-10 md:left-auto md:right-10 flex gap-6">
        <SocialIcon path="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        <SocialIcon path="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        <SocialIcon path="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.196 4.354 2.617 6.78 6.979 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.196 6.78-2.617 6.98-6.979.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </div>
    </section>
  );
}

function SocialIcon({ path }: { path: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer"
    >
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </motion.div>
  );
}
