"use client";

export default function TextbookSpine() {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-[28px] bg-akane z-50 hidden md:flex flex-col items-center justify-center gap-[6px]">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="w-[6px] h-[6px] rounded-full bg-kitsune-light opacity-70" />
      ))}
    </div>
  );
}
