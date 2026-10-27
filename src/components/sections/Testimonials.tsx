"use client";

import React from "react";
import { Star } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { TESTIMONIALS_LIST } from "@/data/testimonials";
import { TestimonialItem } from "@/types";

export default function Testimonials() {
  // Split for desktop/laptop 2-row layout
  const row1 = TESTIMONIALS_LIST.slice(0, 5);
  const row2 = TESTIMONIALS_LIST.slice(5, 10);

  const renderCard = (item: TestimonialItem, keyPrefix: string, idx: number) => {
    const initials = item.author
      .split(" ")
      .map((n) => n[0])
      .join("");

    return (
      <div
        key={`${keyPrefix}-${idx}`}
        className="w-[280px] sm:w-[340px] md:w-[360px] lg:w-[380px] shrink-0 p-4.5 sm:p-5.5 rounded-2xl bg-white border border-slate-200 hover:border-[#735ae5]/50 hover:shadow-[0_10px_25px_-5px_rgba(115,90,229,0.08)] transition-all flex flex-col justify-between shadow-2xs group"
      >
        <div>
          {/* Top Row: Stars + Result Tag */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#00d084]/15 text-[#00aa6c] border border-[#00d084]/30">
              {item.metricsResult}
            </span>
          </div>

          {/* Concise Quote */}
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-normal">
            "{item.quote}"
          </p>
        </div>

        {/* Author Footer */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#735ae5] to-[#9069fc] flex items-center justify-center text-white font-bold text-xs shadow-2xs shrink-0">
            {initials}
          </div>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
              {item.author}
            </div>
            <div className="text-[11px] text-slate-500 truncate">
              {item.role}, <span className="text-[#735ae5] font-semibold">{item.company}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-10 lg:pb-12 bg-white relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
        <Reveal direction="up">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#735ae5] bg-[#735ae5]/10 px-3 py-1 rounded-full border border-[#735ae5]/20 mb-3">
            Merchant Proof & Results
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold text-slate-900 tracking-tight">
            Built for Teams That Move Fast.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 mt-2.5 leading-relaxed max-w-2xl mx-auto">
            Read how fast-growing brands replaced fragmented operations with Mega Ecomm.
          </p>
        </Reveal>
      </div>

      {/* Infinite Marquee Slider Container (No washed-out fade overlays) */}
      <div className="relative w-full overflow-hidden pause-on-hover">
        {/* Mobile & Tablet: Single Line Slider (< lg) */}
        <div className="lg:hidden">
          <div className="flex gap-3.5 sm:gap-4 animate-marquee-left">
            {[...TESTIMONIALS_LIST, ...TESTIMONIALS_LIST].map((item, idx) =>
              renderCard(item, "mob", idx)
            )}
          </div>
        </div>

        {/* Desktop & Laptop: Dual Lines (lg and above) */}
        <div className="hidden lg:block space-y-5">
          {/* Row 1: Leftward Infinite Marquee */}
          <div className="flex gap-5 animate-marquee-left">
            {[...row1, ...row1].map((item, idx) =>
              renderCard(item, "desk-r1", idx)
            )}
          </div>

          {/* Row 2: Rightward Infinite Marquee */}
          <div className="flex gap-5 animate-marquee-right">
            {[...row2, ...row2].map((item, idx) =>
              renderCard(item, "desk-r2", idx)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
