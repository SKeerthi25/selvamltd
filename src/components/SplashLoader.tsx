"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";

export default function SplashLoader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check sessionStorage
    const hasSeenSplash = sessionStorage.getItem("pselvam_splash_seen_v2");

    if (hasSeenSplash || prefersReducedMotion) {
      setVisible(false);
      return;
    }

    setVisible(true);

    // Progress bar animation from 0% to 100% across 2000ms
    const interval = 20; // 20ms steps
    const step = 100 / (2000 / interval);
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    // Fade out at 2000ms
    const timer = setTimeout(() => {
      setFading(true);
      const hideTimer = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("pselvam_splash_seen_v2", "true");
      }, 500); // smooth 500ms fade transition
      return () => clearTimeout(hideTimer);
    }, 2000);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(timer);
    };
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A1128] text-white transition-opacity duration-500 ease-out select-none ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      <div className="flex flex-col items-center px-6 text-center max-w-sm">
        {/* Animated Grand Emblem Logo */}
        <div className="relative mb-6">
          <div className="absolute -inset-6 rounded-full bg-zoho-blue/25 blur-2xl animate-pulse" />
          <Logo size={105} animated={true} />
        </div>

        {/* Brand Name & Tagline */}
        <h1 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white mb-1.5">
          P SELVAM LTD
        </h1>
        <p className="text-xs font-bold tracking-[0.22em] uppercase text-blue-300 mb-8">
          Electrical &amp; CCTV Experts
        </p>

        {/* Thin Sleek Progress Bar */}
        <div className="w-60 h-1.5 bg-slate-800 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-zoho-blue via-zoho-yellow to-zoho-green transition-all duration-75 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* British Standards badge */}
        <span className="text-[11px] text-slate-400 mt-5 tracking-wider font-medium">
          BS 7671 &bull; 4K Security Systems &bull; Swindon
        </span>
      </div>
    </div>
  );
}
