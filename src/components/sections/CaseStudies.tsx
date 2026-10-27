"use client";

import React from "react";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { CASE_STUDIES_LIST } from "@/data/case-studies";
import { Button } from "@/components/ui/Button";

export default function CaseStudies() {
  return (
    <section className="py-14 sm:py-18 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[42px] font-bold text-slate-900 tracking-tight">
              Real Transformations. Measurable ROI.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              How leading commerce brands transitioned from scattered spreadsheets to centralized precision.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {CASE_STUDIES_LIST.map((cs, idx) => (
            <Reveal key={cs.company} delay={idx * 0.1} direction="up">
              <div className="h-full p-6 sm:p-7 lg:p-5 xl:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#735ae5]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{cs.company}</h3>
                      <div className="text-xs text-slate-500">{cs.industry}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-mono font-bold text-[#735ae5]">{cs.statGain}</div>
                      <div className="text-[10px] text-slate-400 font-medium">{cs.statLabel}</div>
                    </div>
                  </div>

                  {/* Problem -> Solution -> Result Flow */}
                  <div className="space-y-3.5 mt-4 text-xs">
                    <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100">
                      <span className="font-bold text-rose-700 uppercase tracking-wide text-[10px] block mb-1">
                        Challenge
                      </span>
                      <p className="text-slate-700 leading-relaxed">{cs.problem}</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#735ae5]/10 border border-[#735ae5]/20">
                      <span className="font-bold text-[#735ae5] uppercase tracking-wide text-[10px] block mb-1">
                        Implementation
                      </span>
                      <p className="text-slate-700 leading-relaxed">{cs.solution}</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#00d084]/15 border border-[#00d084]/25">
                      <span className="font-bold text-[#00aa6c] uppercase tracking-wide text-[10px] block mb-1">
                        Business Impact
                      </span>
                      <p className="text-slate-800 font-medium leading-relaxed">{cs.result}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-right">
                  <span className="text-xs font-semibold text-[#735ae5] hover:text-[#5f45d4] inline-flex items-center gap-1 cursor-pointer">
                    Read Full Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
