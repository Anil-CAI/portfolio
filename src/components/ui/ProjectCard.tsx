"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, Code } from "lucide-react";
import { useState, useRef } from "react";

interface ProjectProps {
  title: string;
  description: string;
  type: string;
  year: string;
  bgColor: string; // e.g., '#e8f5e9'
  pattern: "grid" | "dots" | "lines" | "mesh";
  illustration: string; // Emoji or large icon text
  github?: string;
  demo?: string;
  videoUrl?: string;
  titleHref?: string; // New prop for title redirection
}

export default function ProjectCard({ 
  title, 
  description, 
  type, 
  year, 
  bgColor, 
  pattern, 
  illustration, 
  github, 
  demo, 
  videoUrl,
  titleHref
}: ProjectProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getPatternClass = (p: string) => {
    switch (p) {
      case "grid": return "bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px]";
      case "dots": return "bg-[radial-gradient(#00000015_2px,transparent_2px)] [background-size:15px_15px]";
      case "lines": return "bg-[repeating-linear-gradient(45deg,#00000005_0px,#00000005_1px,transparent_1px,transparent_10px)]";
      case "mesh": return "bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] [background-size:10px_10px]";
      default: return "";
    }
  };

  const TitleWrapper = titleHref ? "a" : "h3";
  const titleProps = titleHref ? { href: titleHref, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-border rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2"
    >
      {/* Thumbnail Area */}
      <div 
        className="relative h-[220px] flex items-center justify-center overflow-hidden transition-colors duration-500"
        style={{ backgroundColor: bgColor }}
      >
        {/* Pattern overlay */}
        <div className={`absolute inset-0 opacity-100 ${getPatternClass(pattern)}`}></div>
        
        {videoUrl ? (
          <div className="absolute inset-0 w-full h-full group/video">
            <video 
              ref={videoRef}
              src={videoUrl} 
              className="w-full h-full object-cover opacity-0 group-hover/video:opacity-100 transition-opacity duration-500"
              loop
              muted
              playsInline
            />
            
            {/* Visual fallback when not playing/hovering */}
            <div className="absolute inset-0 flex items-center justify-center group-hover/video:opacity-0 transition-opacity duration-500">
               <span className="text-7xl drop-shadow-sm select-none transform group-hover:scale-110 transition-transform duration-500">
                {illustration}
              </span>
            </div>

            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover/video:opacity-100 transition-opacity">
                 <button 
                  onClick={toggleVideo}
                  className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-sumi shadow-xl transition-transform hover:scale-110"
                >
                  <Play size={24} fill="currentColor" className="ml-1" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="relative z-10 text-8xl drop-shadow-sm select-none transform group-hover:scale-110 transition-transform duration-500">
            {illustration}
          </div>
        )}

        {/* Floating Tag */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/5 text-[0.65rem] font-bold tracking-widest uppercase text-indigo-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {type}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-7">
        <div className="text-[0.7rem] tracking-[0.2em] uppercase font-bold text-mist/60 mb-2">
          {type.split('•')[0]} — {year}
        </div>
        
        <TitleWrapper 
          {...titleProps}
          className={`font-mincho text-[1.25rem] font-bold text-sumi mb-3 leading-tight block no-underline transition-colors hover:text-sakura-deep ${titleHref ? 'hover:underline' : ''}`}
        >
          {title}
        </TitleWrapper>

        <p className="text-mist text-[0.85rem] leading-relaxed mb-6 h-[4.5em] overflow-hidden line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-5 border-t border-gray-50">
          <div className="text-[0.75rem] font-bold text-mist tracking-widest">{year}</div>
          <div className="flex gap-5">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-indigo-light hover:text-sakura-deep transition-colors flex items-center gap-1.5 no-underline font-bold">
                <Code size={14} /> <span className="text-[0.7rem] tracking-widest uppercase">Source</span>
              </a>
            )}
            <a href={demo || "#"} target="_blank" rel="noopener noreferrer" className="text-indigo-light hover:text-sakura-deep transition-colors flex items-center gap-1.5 no-underline font-bold">
              <span className="text-[0.7rem] tracking-widest uppercase">View</span> <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
