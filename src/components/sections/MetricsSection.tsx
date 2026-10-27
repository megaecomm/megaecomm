"use client";

import React from "react";
import Reveal from "@/components/animations/Reveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { TRUST_METRICS } from "@/data/metrics";

export default function MetricsSection() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TRUST_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col p-5 sm:p-6 lg:p-5 xl:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#735ae5]/40 hover:shadow-[0_14px_30px_-6px_rgba(115,90,229,0.12)] transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-[34px] xl:text-[44px] font-bold text-slate-900 tracking-tight font-mono group-hover:text-[#735ae5] transition-colors">
                    <AnimatedCounter value={metric.value} />
                  </span>
                  {metric.change && (
                    <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#735ae5]/10 text-[#735ae5] border border-[#735ae5]/20 font-mono">
                      {metric.change}
                    </span>
                  )}
                </div>
                <div className="text-sm sm:text-base font-semibold text-slate-800 tracking-tight mt-1">
                  {metric.label}
                </div>
                {metric.sublabel && (
                  <div className="text-xs text-slate-500 mt-1 font-normal">
                    {metric.sublabel}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
