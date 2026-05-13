import type { Metadata } from "next";
import { Noto_Serif_JP, Shippori_Mincho, DM_Sans } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Anil Kumar — Portfolio",
  description: "Portfolio of Anil Kumar, a Technical Creative Engineer specializing in Robotics, AI, and Game Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${notoSerifJP.variable} ${shipporiMincho.variable} ${dmSans.variable} font-sans bg-[#f9f5ef] text-[#1a1a2e] antialiased md:cursor-none`}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
