"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "第1章 About", href: "#about" },
  { name: "第2章 Skills", href: "#skills" },
  { name: "第3章 Projects", href: "#projects" },
  { name: "第4章 Journey", href: "#journey" },
  { name: "第5章 Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 md:left-[28px] right-0 z-[90] transition-all duration-500 ${
        isScrolled
          ? "bg-washi/95 backdrop-blur-md border-b-2 border-kitsune shadow-sm translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      {/* Chapter tabs bar (like the reference HTML) */}
      <div className="flex items-center h-[48px]">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 px-5 h-full bg-akane text-kitsune-light no-underline shrink-0"
          style={{ fontFamily: "var(--font-noto-serif-jp)" }}
        >
          <span className="hanko-seal w-[30px] h-[30px] text-[7px]">A.K</span>
          <span className="text-sm font-bold tracking-wider hidden sm:inline">ANIL KUMAR</span>
        </a>

        {/* Desktop tabs */}
        <div className="hidden md:flex flex-1 bg-washi-dark border-b border-kitsune/30 h-full overflow-x-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 h-full flex items-center text-[0.72rem] font-medium text-mist border-r border-kitsune/20 no-underline whitespace-nowrap transition-all hover:bg-washi hover:text-akane"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Sakura deco */}
        <div className="hidden md:flex items-center px-4 h-full bg-washi-dark text-sakura-deep opacity-30 text-lg">🌸</div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto mr-4 text-sumi p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-washi border-b-2 border-kitsune p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sumi text-sm tracking-widest font-medium no-underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
