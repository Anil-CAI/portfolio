"use client";

export default function Divider({ text1, text2 }: { text1: string; text2: string }) {
  return (
    <div className="flex items-center gap-4 md:gap-6 px-6 md:px-20 py-8 border-b border-border overflow-hidden bg-washi">
      <div className="font-serif-jp text-[0.65rem] md:text-[0.7rem] tracking-[0.25em] md:tracking-[0.5em] text-mist whitespace-nowrap uppercase">
        {text1}
      </div>
      <div className="flex-1 h-[1px] bg-border min-w-[20px]"></div>
      <div className="font-serif-jp text-[0.65rem] md:text-[0.7rem] tracking-[0.25em] md:tracking-[0.5em] text-mist whitespace-nowrap uppercase">
        {text2}
      </div>
    </div>
  );
}
