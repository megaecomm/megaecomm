"use client";

import React, { useState } from "react";
import Reveal from "@/components/animations/Reveal";
import { INTEGRATIONS_LIST, INTEGRATION_CATEGORIES } from "@/data/integrations";
import { Button } from "@/components/ui/Button";

export default function IntegrationGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? INTEGRATIONS_LIST.slice(0, 12)
      : INTEGRATIONS_LIST.filter((item) => item.category === activeCategory);

  return (
    <section className="py-10 sm:py-16 lg:py-18 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-12">
          <Reveal direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[42px] font-bold text-slate-900 tracking-tight">
              Connect the Tools You Already Use.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Integrate with leading payment gateways, domestic and international shipping couriers, sales channels, and messaging providers with zero custom code.
            </p>
          </Reveal>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pb-4 sm:pb-6">
          {INTEGRATION_CATEGORIES.slice(0, 5).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#735ae5] text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of integrations in 2-Column Mobile Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
          {filtered.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 0.04} direction="up">
              <div className="h-full p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 hover:border-[#735ae5]/40 hover:bg-[#faf9ff]/50 transition-all duration-200 flex flex-col group">
                <div className="flex items-center justify-between mb-2.5 sm:mb-3 gap-1">
                  <span className="text-[9px] sm:text-xs font-mono font-semibold text-[#735ae5] bg-[#735ae5]/10 px-2 py-0.5 rounded border border-[#735ae5]/20 truncate max-w-[85px] sm:max-w-none">
                    {item.tag}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium truncate max-w-[65px] sm:max-w-none">{item.category}</span>
                </div>

                <h3 className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-[#735ae5] transition-colors leading-snug truncate sm:whitespace-normal">
                  {item.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Explorer Action */}
        <div className="text-center mt-12">
          <Button href="/integrations" variant="outline" size="md" withArrow>
            Explore All 50+ Certified Integrations &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
