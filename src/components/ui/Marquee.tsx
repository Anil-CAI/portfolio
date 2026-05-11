"use client";

import { motion } from "framer-motion";

const tags = [
  "AI SYSTEMS", "ROBOTICS", "UE5", "FULL STACK", "ROS2", "ML", "REAL-TIME SYSTEMS",
  "AI SYSTEMS", "ROBOTICS", "UE5", "FULL STACK", "ROS2", "ML", "REAL-TIME SYSTEMS"
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-accent/5 border-y border-white/5 py-3 mt-12">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex whitespace-nowrap gap-12"
      >
        {tags.map((tag, i) => (
          <span 
            key={i} 
            className="text-text-muted text-xs font-display font-bold tracking-[0.2em] uppercase flex items-center gap-4"
          >
            {tag} <span className="w-1.5 h-1.5 bg-accent/30 rounded-full"></span>
          </span>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10"></div>
    </div>
  );
}
