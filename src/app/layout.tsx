import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  weight: "400",
  preload: false,
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: "400",
  preload: false,
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Anil Kumar — Portfolio",
  description:
    "Portfolio of Anil Kumar, a Technical Creative Engineer specializing in Robotics, AI, and Game Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${notoSerifJP.variable} ${notoSansJP.variable} ${caveat.variable} ${jetbrainsMono.variable} font-sans bg-washi text-sumi antialiased md:cursor-none`}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
