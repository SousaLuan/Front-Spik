"use client";

export default function BackgroundWords() {
  const words = [
    "RESISTÊNCIA", "FOCO", "DETERMINAÇÃO", "CORAGEM", 
    "PERMITA-SE", "VONTADE", "CONCENTRE-SE", "SPIK"
  ];

  const ScrollingRow = ({ direction = "left" }: { direction?: "left" | "right" }) => (
    <div className="flex whitespace-nowrap overflow-hidden select-none pointer-events-none border-y border-gray-100/30 py-4 w-full">
      {/* ATENÇÃO: Mudamos para 'animate-spik-left' e 'animate-spik-right' que estão no seu globals.css */}
      <div className={`flex w-max gap-16 px-8 ${direction === "left" ? "animate-spik-left" : "animate-spik-right"}`}>
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span 
            key={i} 
            className="text-gray-200 font-anton text-8xl uppercase opacity-30 tracking-tighter italic"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="absolute inset-0 overflow-hidden bg-white z-0 flex flex-col justify-around py-8">
      <ScrollingRow direction="left" />
      <ScrollingRow direction="right" />
      <ScrollingRow direction="left" />
      <ScrollingRow direction="right" />
      <ScrollingRow direction="left" />
    </div>
  );
}