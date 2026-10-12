import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  inverted?: boolean;
  animated?: boolean;
  variant?: "horizontal" | "vertical" | "icon";
}

export default function Logo({
  className = "",
  size = 46,
  showText = false,
  inverted = false,
  animated = false,
  variant = "horizontal",
}: LogoProps) {
  return (
    <div
      className={`inline-flex ${
        variant === "vertical"
          ? "flex-col items-center text-center gap-3"
          : "items-center gap-3.5"
      } ${className}`}
    >
      {/* Grand Geometric Emblem: Cyber-Shield + 4K CCTV Optics + Dynamic Lightning Bolt */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 transition-transform duration-300 ${
          animated ? "animate-pulse-subtle hover:scale-105" : "hover:scale-105"
        }`}
        aria-label="P SELVAM LTD - Grand Electrical & CCTV Crest"
      >
        <defs>
          {/* Electric Blue Royal Gradient */}
          <linearGradient id="shieldGrad" x1="10" y1="10" x2="110" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2F80ED" />
            <stop offset="45%" stopColor="#1F6FEB" />
            <stop offset="100%" stopColor="#0B3C96" />
          </linearGradient>

          {/* Platinum / Metallic Bevel */}
          <linearGradient id="platinumBevel" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.9" />
          </linearGradient>

          {/* Golden Surge Lightning Gradient */}
          <linearGradient id="boltGrad" x1="45" y1="24" x2="75" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF3B0" />
            <stop offset="25%" stopColor="#FFD166" />
            <stop offset="65%" stopColor="#F5A623" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>

          {/* CCTV Aperture Glass Reflex */}
          <linearGradient id="lensReflex" x1="35" y1="35" x2="85" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Golden Ring Accent */}
          <linearGradient id="goldRing" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#F5A623" />
            <stop offset="100%" stopColor="#FF8F00" />
          </linearGradient>

          {/* Subtle Glow Filter */}
          <filter id="grandGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Soft Shadow Filter for Depth */}
          <filter id="emblemShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Outer Hexagonal Security Shield (BS 7671 & Defense Emblem) */}
        <path
          d="M60 8 L104 26 V62 C104 88 84 107 60 114 C36 107 16 88 16 62 V26 L60 8 Z"
          fill="url(#shieldGrad)"
          stroke="url(#platinumBevel)"
          strokeWidth="3"
          filter="url(#emblemShadow)"
        />

        {/* Inner Shield Inset Ridge */}
        <path
          d="M60 16 L96 31 V59 C96 81 79 97 60 103 C41 97 24 81 24 59 V31 L60 16 Z"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />

        {/* Precision CCTV 360° Optical Turret Ring */}
        <circle cx="60" cy="58" r="32" fill="url(#lensReflex)" stroke="url(#goldRing)" strokeWidth="2.5" />

        {/* Aperture Segments / Radar Crosshairs */}
        <circle cx="60" cy="58" r="23" fill="#030712" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

        {/* Optical Sensor Pupil with Azure Reflection */}
        <circle cx="60" cy="58" r="14" fill="#0A1128" />
        <ellipse cx="54" cy="52" rx="4" ry="2.5" transform="rotate(-30 54 52)" fill="#38BDF8" fillOpacity="0.5" />

        {/* High-Voltage Dynamic Lightning Bolt (Precision Geometric Path) */}
        <path
          d="M63 32 L46 56 H59 L52 84 L76 53 H62 L69 32 H63 Z"
          fill="url(#boltGrad)"
          stroke="#FFFBEB"
          strokeWidth="1.2"
          strokeLinejoin="round"
          filter="url(#grandGlow)"
        />

        {/* CCTV Status Indicator Node: Zoho Emerald Green (Active 24/7 Monitoring) */}
        <circle cx="85" cy="38" r="3.5" fill="#00A86B" />
        <circle cx="85" cy="38" r="1.5" fill="#FFFFFF" />
        <circle cx="85" cy="38" r="5" stroke="#00A86B" strokeWidth="0.8" strokeOpacity="0.6" className="animate-ping" />

        {/* Dual Circuit Trace Micro-Accents */}
        <path d="M28 58 H34" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M86 58 H92" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Typography Signature */}
      {showText && (
        <div className={`flex flex-col ${variant === "vertical" ? "items-center" : "items-start"}`}>
          <div className="flex items-center gap-1.5">
            <span
              className={`font-heading font-black tracking-[-0.03em] text-xl sm:text-2xl leading-none ${
                inverted ? "text-white" : "text-slate-900 dark:text-white"
              }`}
            >
              P SELVAM
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-zoho-blue dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              LTD
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-zoho-yellow" />
            <span
              className={`text-[10.5px] font-bold tracking-[0.18em] uppercase ${
                inverted ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
              }`}
            >
              Electrical &amp; CCTV Experts
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
