"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ShieldCheck, Zap, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

import HeroCursorFollower from "./HeroCursorFollower";

// Dynamically import 3D canvas with ssr: false for zero SSR hydration mismatch
const Hero3DCanvas = dynamic(() => import("./Hero3DCanvas"), { ssr: false });

export default function Hero() {
  const heroRef = React.useRef<HTMLElement | null>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-28 lg:pb-10 xl:pt-32 xl:pb-12 overflow-hidden bg-white bg-dot-pattern"
    >
      {/* Interactive Creative Hero Cursor Effect */}
      <HeroCursorFollower heroRef={heroRef} />

      {/* 3D Ambient WebGL Constellation Canvas with Protected Center Void */}
      <Hero3DCanvas />

      {/* Luminous Multi-layer Aurora Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-[#735ae5]/15 via-[#9069fc]/10 to-[#7ecdf5]/10 blur-[140px] pointer-events-none -z-10 rounded-full animate-pulse-subtle" />
      <div className="absolute top-1/2 left-1/6 w-[450px] h-[360px] bg-[#7ecdf5]/10 blur-[110px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/2 right-1/6 w-[450px] h-[360px] bg-[#735ae5]/10 blur-[110px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center my-auto">
        {/* Soft central contrast halo guaranteeing 100% text legibility */}
        <div className="absolute inset-0 -inset-x-12 -z-10 bg-radial from-white via-white/85 to-transparent blur-3xl pointer-events-none" />

        {/* Responsive Hero Headline - Perfectly scaled for mobile, tablet, laptop, and desktop */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[72px] 2xl:text-[80px] font-semibold tracking-tight text-[#141413] leading-[1.12] max-w-4xl xl:max-w-5xl">
          Run Your Entire E-Commerce{" "}
          <span className="block mt-1 sm:mt-1.5 sm:inline">
            Business{" "}
            <span className="bg-gradient-to-r from-[#735ae5] via-[#6343e8] to-[#4a28cc] bg-clip-text text-transparent">
              From One Platform
            </span>
          </span>
        </h1>

        {/* Sub-headline description */}
        <p className="text-sm sm:text-base lg:text-[17px] xl:text-lg text-slate-600 max-w-2xl xl:max-w-3xl mx-auto leading-relaxed font-normal mt-3.5 sm:mt-5">
          Manage products, orders, multi-warehouse inventory, customers,
          analytics and operations from one centralized platform built to help
          modern commerce businesses scale.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-5 sm:pt-7 w-full sm:w-auto">
          <Button
            href={SITE_CONFIG.cta.signupUrl}
            variant="primary"
            size="lg"
            withArrow
            className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-[0_6px_22px_rgba(115,90,229,0.38)]"
          >
            Get Started Free
          </Button>
          <Button
            href="/about"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-[#e3e5e6] bg-white/90 hover:bg-[#f5f3ff] text-[#141413] hover:text-[#735ae5] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            About Us
          </Button>
        </div>

        {/* Social Proof & Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-2.5 gap-x-4 sm:gap-x-6 pt-7 sm:pt-9 text-xs sm:text-sm font-medium text-slate-500">
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-slate-800 font-bold">4.9/5</span>
            <span>by 1,200+ merchants</span>
          </div>
          {/* <div className="hidden sm:inline text-slate-300">•</div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>SOC2 &amp; ISO 27001 Ready</span>
          </div>
          <div className="hidden sm:inline text-slate-300">•</div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#735ae5]" />
            <span>&lt;80ms Sub-Second Sync</span>
          </div>
          <div className="hidden sm:inline text-slate-300">•</div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>No Credit Card Required</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
