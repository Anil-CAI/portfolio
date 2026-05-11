"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { Mail, Link, Globe, Info } from "lucide-react";

const socialLinks = [
  { icon: <Mail size={18} />, label: "Email", val: "anil.k@example.com", href: "mailto:anil.k@example.com" },
  { icon: <Link size={18} />, label: "LinkedIn", val: "linkedin.com/in/anilkumar", href: "#" },
  { icon: <Globe size={18} />, label: "GitHub", val: "github.com/anilkumar", href: "#" },
  { icon: <Info size={18} />, label: "YouTube", val: "@AnilRobotics", href: "#" }
];

export default function Contact() {
  return (
    <section id="contact" className="bg-washi py-24 md:py-32">
      <div className="section-container">
        <SectionHeader 
          label="06 / Contact" 
          title="Let's Build the Future" 
          kanji="信" 
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text & Links */}
          <div>
            <p className="text-indigo-light text-[0.95rem] leading-[1.9] font-light mb-10">
              Interested in collaboration or have a technical project in mind? 
              I am always open to discussing new opportunities in robotics, AI, and real-time simulation. 
              Let's connect and push the boundaries of what's possible.
            </p>
            
            <div className="space-y-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  whileHover={{ x: 4, backgroundColor: "var(--color-sakura-pale)", borderColor: "var(--color-sakura-deep)" }}
                  className="flex items-center gap-4 p-4 bg-washi-dark border border-border rounded-sm no-underline group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-washi border border-border-strong flex items-center justify-center text-sumi group-hover:border-sakura-deep transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-widest text-mist">{link.label}</div>
                    <div className="text-sumi text-[0.85rem] font-medium">{link.val}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form (Visual) */}
          <div className="bg-washi-dark border border-border rounded-sm p-8 shadow-sm">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-[0.75rem] uppercase tracking-widest text-mist">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full p-3 bg-washi border border-border-strong rounded-sm focus:border-sakura-deep outline-none text-[0.9rem] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[0.75rem] uppercase tracking-widest text-mist">Email Address</label>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="w-full p-3 bg-washi border border-border-strong rounded-sm focus:border-sakura-deep outline-none text-[0.9rem] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[0.75rem] uppercase tracking-widest text-mist">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we work together?"
                  className="w-full p-3 bg-washi border border-border-strong rounded-sm focus:border-sakura-deep outline-none text-[0.9rem] transition-colors resize-none"
                ></textarea>
              </div>
              <button className="btn-primary w-full py-4 mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-mist text-[0.75rem] uppercase tracking-widest">
          <div>© 2026 Anil Kumar. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sumi transition-colors no-underline">Built with Next.js</a>
            <a href="#" className="hover:text-sumi transition-colors no-underline">Japanese Aesthetic</a>
          </div>
        </div>
      </div>
    </section>
  );
}
