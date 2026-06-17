"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { Mail, Link, Globe, Info } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: <Mail size={16} />, label: "EMAIL", val: "ballaanilkumar369@gmail.com", href: "mailto:ballaanilkumar369@gmail.com" },
  { icon: <Link size={16} />, label: "LINKEDIN", val: "linkedin.com/in/anil3423", href: "https://www.linkedin.com/in/anil3423/" },
  { icon: <Globe size={16} />, label: "GITHUB", val: "github.com/Anil-CAI", href: "https://github.com/Anil-CAI" },
  { icon: <Info size={16} />, label: "YOUTUBE", val: "@Anil_xr_robotics", href: "https://www.youtube.com/@Anil_xr_robotics" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ballaanilkumar369@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');

    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="textbook-page relative overflow-hidden bg-washi">
      {/* Chapter tab */}
      <div className="bg-washi-dark border-b-2 border-kitsune/30 px-6 md:px-8 py-2 flex items-center gap-3">
        <div className="chapter-stamp text-sm w-[32px] h-[32px]">5</div>
        <span className="text-[0.7rem] tracking-[0.3em] text-akane uppercase font-bold" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
          第五章 · Contact — 連絡先
        </span>
        <span className="flex-1" />
        <span className="text-[0.65rem] text-mist tracking-wider hidden md:inline" style={{ fontFamily: "var(--font-jetbrains)" }}>pg. 5</span>
      </div>

      <div className="ruled-lines margin-line-left book-spine-shadow px-6 md:px-10 lg:px-14 py-8 md:py-10">
        <SectionHeader label="第五章 · Chapter 5" title="Contact — 連絡先" kanji="話" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-5xl">
          {/* Left: Text & Reference Links */}
          <div className="order-2 lg:order-1">
            <p className="text-sumi-faded text-[0.9rem] leading-[1.8] mb-8">
              Interested in collaboration or have a technical project in mind?
              I am always open to discussing new opportunities in robotics, XR, and real-time simulation.
              Let&apos;s connect and push the boundaries of what&apos;s possible.
            </p>

            {/* Links Row (like reference HTML links-row) */}
            <div className="text-[0.6rem] tracking-[0.3em] text-akane uppercase font-bold mb-3">
              References & Links
            </div>

            <div className="flex flex-col gap-3">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="bg-washi-light border border-kitsune-pale p-3 flex items-center gap-4 no-underline group hover:border-akane/50 hover:bg-washi transition-all"
                >
                  <div className="w-8 h-8 rounded bg-akane text-washi flex items-center justify-center shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[0.6rem] text-mist tracking-widest font-mono mb-0.5" style={{ fontFamily: "var(--font-jetbrains)" }}>
                      [{idx + 1}] {link.label}
                    </div>
                    <div className="text-sumi-light text-[0.8rem] font-medium">{link.val}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-washi-light border border-kitsune-pale p-6 relative order-1 lg:order-2 shadow-sm">
            {/* Paper clip */}
            <div className="absolute -top-3 right-5 text-xl" style={{ transform: "rotate(20deg)" }}>📎</div>

            <div className="text-[0.6rem] tracking-[0.3em] text-akane uppercase font-bold mb-4 border-b border-kitsune-pale pb-2">
              Inquiry Form
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-[0.65rem] uppercase tracking-widest text-mist font-bold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full p-2.5 bg-washi border border-kitsune-pale focus:border-akane outline-none text-[0.85rem] transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[0.65rem] uppercase tracking-widest text-mist font-bold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className="w-full p-2.5 bg-washi border border-kitsune-pale focus:border-akane outline-none text-[0.85rem] transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[0.65rem] uppercase tracking-widest text-mist font-bold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can we work together?"
                  className="w-full p-2.5 bg-washi border border-kitsune-pale focus:border-akane outline-none text-[0.85rem] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full py-3 mt-2 text-[0.75rem] font-bold tracking-[0.2em] flex items-center justify-center gap-2 transition-all border-2 
                  ${status === "success" 
                    ? "bg-matcha border-matcha text-washi" 
                    : "bg-akane border-akane text-washi hover:bg-akane-deep hover:border-akane-deep"}`}
              >
                {status === "idle" && <><Mail size={14} /> SEND MESSAGE</>}
                {status === "sending" && "PREPARING MAIL..."}
                {status === "success" && "✓ OPENED IN GMAIL"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Global Book Footer */}
      <div className="bg-washi-dark border-t-[3px] border-kitsune px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <div className="flex items-center gap-4">
          <div className="hanko-seal w-[40px] h-[40px] text-[8px]">ア<br />ニル</div>
          <div className="text-left">
            <div className="text-sumi-light font-bold tracking-widest text-[0.75rem]" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
              B. Anil Kumar
            </div>
            <div className="text-mist text-[0.6rem] tracking-[0.2em] mt-0.5 uppercase">
              Portfolio 2026
            </div>
          </div>
        </div>

        <div className="flex gap-4 text-[0.6rem] text-mist tracking-widest font-medium uppercase">
          <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-akane"></span> Built with Next.js</span>
          <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-akane"></span> Japanese Textbook</span>
        </div>
      </div>
    </section>
  );
}
