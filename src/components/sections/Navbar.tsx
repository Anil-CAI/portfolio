"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 h-[68px] flex items-center justify-between px-8 md:px-12 ${
        isScrolled 
          ? `bg-washi${isMobile ? "" : "/85 backdrop-blur-md"} border-b border-border shadow-sm translate-y-0 opacity-100` 
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <a href="#" className="font-mincho text-xl text-sumi tracking-widest flex items-center gap-2.5 no-underline">
          <span className="text-sakura-deep text-2xl opacity-90 font-serif-jp">創</span>
          ANIL KUMAR
        </a>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-mist hover:text-sumi text-[0.85rem] tracking-[0.12em] uppercase no-underline transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-sakura-deep scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-sumi p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[68px] left-0 right-0 bg-washi border-b border-border shadow-lg p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sumi text-[0.9rem] tracking-widest uppercase font-medium"
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
