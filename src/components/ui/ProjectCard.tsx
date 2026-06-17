"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, Code } from "lucide-react";
import { useState, useRef } from "react";

interface ProjectProps {
  title: string;
  description: string;
  type: string;
  year: string;
  illustration: string;
  github?: string;
  demo?: string;
  videoUrl?: string;
  titleHref?: string;
  tech?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  type,
  year,
  illustration,
  github,
  demo,
  videoUrl,
  titleHref,
  tech,
  index,
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-washi-light border border-kitsune-pale relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col h-full overflow-hidden"
    >
      {/* Red vertical border line (like reference HTML) */}
      <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-akane z-10" />

      {/* Case Study / Figure Number */}
      <div
        className="absolute top-3 right-3 z-20 text-[0.6rem] text-akane tracking-wider"
        style={{ fontFamily: "var(--font-jetbrains)" }}
      >
        Fig. 3.{index + 1}
      </div>

      {/* Thumbnail Area */}
      <div className="relative h-[180px] flex items-center justify-center overflow-hidden bg-washi-dark border-b border-kitsune-pale">
        {/* Graph paper pattern in thumbnail */}
        <div className="absolute inset-0 graph-paper opacity-40" />

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
            {/* Emoji fallback */}
            <div className="absolute inset-0 flex items-center justify-center group-hover/video:opacity-0 transition-opacity duration-500">
              <span className="text-6xl select-none group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">
                {illustration}
              </span>
            </div>
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover/video:opacity-100 transition-opacity">
                <button
                  onClick={toggleVideo}
                  className="w-12 h-12 bg-washi/90 border-2 border-akane flex items-center justify-center text-akane shadow-lg transition-transform hover:scale-110 rounded-full"
                >
                  <Play size={20} fill="currentColor" className="ml-0.5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="relative z-10 text-6xl select-none group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">
            {illustration}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 pl-6 flex-1 flex flex-col relative">
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Title */}
          {titleHref ? (
            <a
              href={titleHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1.1rem] font-bold text-sumi-light mb-1.5 leading-tight block no-underline transition-colors hover:text-akane relative z-10"
              style={{ fontFamily: "var(--font-noto-serif-jp)" }}
            >
              {title}
            </a>
          ) : (
            <h3 className="text-[1.1rem] font-bold text-sumi-light mb-1.5 leading-tight" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
              {title}
            </h3>
          )}

          {/* Tech stack */}
          {tech && (
            <div className="text-[0.65rem] text-akane tracking-wider mb-2 font-medium">
              {tech}
            </div>
          )}

          {/* Description */}
          <ul className="list-none p-0 m-0 mb-4 flex-1">
            <li className="text-sumi-faded text-[0.82rem] leading-relaxed relative pl-4">
               <span className="absolute left-0 top-[2px] text-kitsune text-[0.6rem]">→</span>
               {description}
            </li>
          </ul>

          {/* Links and Year */}
          <div className="flex items-center justify-between pt-3 border-t border-kitsune/30 mt-auto">
            <div className="text-[0.65rem] font-bold text-mist tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains)" }}>
               {type.split("•")[0].trim()} · {year}
            </div>
            <div className="flex gap-3">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-akane hover:text-akane-deep transition-colors flex items-center gap-1.5 no-underline text-xs font-semibold">
                  <Code size={13} /> <span className="text-[0.65rem] tracking-wider uppercase">Source</span>
                </a>
              )}
              <a href={demo || "#"} target="_blank" rel="noopener noreferrer" className="text-akane hover:text-akane-deep transition-colors flex items-center gap-1.5 no-underline text-xs font-semibold">
                <span className="text-[0.65rem] tracking-wider uppercase">View</span> <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
