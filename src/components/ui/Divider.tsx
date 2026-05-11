"use client";

export default function Divider({ text1, text2 }: { text1: string; text2: string }) {
  return (
    <div className="flex items-center gap-6 px-8 md:px-20 py-8 border-b border-border overflow-hidden bg-washi">
      <div className="font-serif-jp text-[0.7rem] tracking-[0.5em] text-mist whitespace-nowrap uppercase">
        {text1}
      </div>
      <div className="flex-1 h-[1px] bg-border"></div>
      <div className="font-serif-jp text-[0.7rem] tracking-[0.5em] text-mist whitespace-nowrap uppercase">
        {text2}
      </div>
    </div>
  );
}
