"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { Mail, Link, Globe, Info } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: <Mail size={18} />, label: "Email", val: "ballaanilkumar369@gmail.com", href: "mailto:ballaanilkumar369@gmail.com" },
  { icon: <Link size={18} />, label: "LinkedIn", val: "linkedin.com/in/anil3423", href: "https://www.linkedin.com/in/anil3423/" },
  { icon: <Globe size={18} />, label: "GitHub", val: "github.com/Anil-CAI", href: "https://github.com/Anil-CAI" },
  { icon: <Info size={18} />, label: "YouTube", val: "@Anil_xr_robotics", href: "https://www.youtube.com/@Anil_xr_robotics" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Portfolio Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:ballaanilkumar369@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-washi py-24 md:py-32">
      <div className="section-container">
        <SectionHeader 
          label="05 / Contact" 
          title="Let's Build the Future" 
          kanji="信" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text & Links */}
          <div className="order-2 lg:order-1">
            <p className="text-indigo-light text-[0.95rem] leading-[1.9] font-light mb-10">
              Interested in collaboration or have a technical project in mind? 
              I am always open to discussing new opportunities in robotics, XR, and real-time simulation. 
              Let's connect and push the boundaries of what's possible.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, backgroundColor: "var(--color-sakura-pale)", borderColor: "var(--color-sakura-deep)" }}
                  className="flex items-center gap-4 p-4 bg-washi-dark border border-border rounded-sm no-underline group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-washi border border-border-strong flex items-center justify-center text-sumi group-hover:border-sakura-deep transition-colors shrink-0">
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[0.65rem] uppercase tracking-widest text-mist">{link.label}</div>
                    <div className="text-sumi text-[0.85rem] font-medium truncate">{link.val}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-washi-dark border border-border rounded-sm p-6 md:p-8 shadow-sm order-1 lg:order-2">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label className="text-[0.75rem] uppercase tracking-widest text-mist font-bold">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 bg-washi border border-border-strong rounded-sm focus:border-sakura-deep outline-none text-[0.9rem] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[0.75rem] uppercase tracking-widest text-mist font-bold">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className="w-full p-3 bg-washi border border-border-strong rounded-sm focus:border-sakura-deep outline-none text-[0.9rem] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[0.75rem] uppercase tracking-widest text-mist font-bold">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can we work together?"
                  className="w-full p-3 bg-washi border border-border-strong rounded-sm focus:border-sakura-deep outline-none text-[0.9rem] transition-colors resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-4 mt-2 font-bold tracking-[0.2em]">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 md:mt-32 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-mist text-[0.65rem] md:text-[0.75rem] uppercase tracking-widest text-center md:text-left">
          <div>© 2026 Anil Kumar. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#" className="hover:text-sumi transition-colors no-underline">Built with Next.js</a>
            <a href="#" className="hover:text-sumi transition-colors no-underline">Japanese Aesthetic</a>
          </div>
        </div>
      </div>
    </section>
  );
}
