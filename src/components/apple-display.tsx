import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const AppleDisplay = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center justify-end w-full max-w-[1200px] mx-auto perspective-1000", className)}>
      {/* Screen Enclosure */}
      <div className="relative group transition-all duration-700 hover:scale-[1.01] z-20 w-full aspect-[16/10] flex flex-col items-center justify-center">

        {/* Outer Aluminum Frame (Châssis) */}
        <div
          className="absolute inset-0 rounded-[2.5rem] p-[0.4%] shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #e5e7eb 0%, #9ca3af 20%, #d1d5db 50%, #9ca3af 80%, #e5e7eb 100%)",
            boxShadow: `
              0 25px 50px -12px rgba(0, 0, 0, 0.5),
              inset 0 1px 2px rgba(255, 255, 255, 0.8),
              inset 0 -1px 2px rgba(0, 0, 0, 0.3)
            `
          }}
        >
          {/* Inner Black Bezel (Bordure noire de l'écran) */}
          <div className="w-full h-full bg-[#050505] rounded-[2.2rem] p-[3.5%] relative overflow-hidden flex items-center justify-center border border-white/5 ring-1 ring-black/50">

            {/* Camera detail */}
            <div className="absolute top-[1.2%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-50">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1a1c1e] ring-1 ring-white/10 flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-[#2a3a4a] opacity-50 shadow-[0_0_2px_rgba(0,180,255,0.5)]" />
              </div>
            </div>

            {/* Active Display Area */}
            <div className="relative w-full h-full rounded-sm overflow-hidden bg-black shadow-inner">
              {/* Wallpaper Image */}
              <Image
                src="/apple-wallpaper.png"
                alt="Display Content"
                fill
                className="object-cover opacity-90 transition-opacity duration-1000 group-hover:opacity-100"
                priority
              />

              {/* Screen Reflection Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(110deg, rgba(255,255,255,0.08) 0%, transparent 25%, rgba(255,255,255,0.03) 50%, transparent 75%, rgba(255,255,255,0.05) 100%)"
                }}
              />

              {/* Subtle Scanlines effect */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Monitor Stand (Pied) */}
      <div className="relative z-10 -mt-10 flex flex-col items-center w-full max-w-[280px]">
        {/* Vertical Stem with Perspective */}
        <div
          className="w-[120px] h-[160px] relative pointer-events-none"
          style={{
            clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
            background: "linear-gradient(90deg, #9ca3af 0%, #e5e7eb 30%, #f3f4f6 50%, #e5e7eb 70%, #9ca3af 100%)",
            boxShadow: "inset 0 10px 20px rgba(0,0,0,0.2)"
          }}
        >
          {/* Stem highlights and shadows */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/10" />
          <div className="absolute inset-y-0 left-[20%] w-[1px] bg-white/20" />
          <div className="absolute inset-y-0 right-[20%] w-[1px] bg-black/5" />
        </div>

        {/* Base Plate */}
        <div
          className="w-full h-4 -mt-1 rounded-t-[20px] rounded-b-[40px] shadow-xl relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #f9fafb 0%, #d1d5db 40%, #9ca3af 100%)",
            boxShadow: `
              0 10px 30px -10px rgba(0,0,0,0.8),
              inset 0 1px 1px white
            `
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5" />
        </div>
      </div>

      {/* Ground Shadow / Ambient Occlusion */}
      <div className="w-[85%] h-12 bg-black/60 blur-[40px] -mt-6 rounded-[100%] pointer-events-none z-0 mix-blend-multiply opacity-80" />
    </div>
  );
};
