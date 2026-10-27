import React from "react";
import type { Metadata } from "next";
import { SOLUTIONS_LIST } from "@/data/solutions";
import { Check, AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industry Solutions",
  description:
    "Tailored commerce operations architectures for D2C brands, omnichannel retailers, wholesale suppliers, and global enterprises.",
};

export default function SolutionsPage() {
  return (
    <div className="pt-24 sm:pt-32">
      {/* Solutions Page Hero */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto">
          Engineered for Your Business Model.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
          From fast-paced direct-to-consumer drops to high-volume multi-warehouse wholesale distributions.
        </p>
      </section>

      {/* Solutions Detailed Stack */}
      <div className="space-y-12 sm:space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {SOLUTIONS_LIST.map((sol, idx) => (
          <section
            key={sol.id}
            id={sol.id}
            className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm scroll-mt-28"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="max-w-3xl">
                <span className="text-xs font-mono font-bold uppercase text-[#735ae5] bg-[#735ae5]/10 px-2.5 py-1 rounded-md border border-[#735ae5]/20">
                  SOLUTIONS ARCHITECTURE • {sol.title}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[24px] xl:text-3xl font-bold text-slate-900 mt-2">
                  {sol.tagline}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed font-normal">
                  {sol.description}
                </p>
              </div>

              {/* Stat Chips in 2-Column Mobile Grid */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3 shrink-0 w-full lg:w-auto">
                {sol.stats.map((st, i) => (
                  <div key={i} className={`p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-slate-200 text-center shadow-2xs ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-[#735ae5]">{st.value}</div>
                    <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem vs Solution Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-8">
              {/* Friction Challenges */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mb-4">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Legacy Friction</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  {sol.problems.map((prob, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{prob}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mega Ecomm Solution */}
              <div className="bg-white p-6 rounded-2xl border border-[#735ae5]/30 shadow-2xs">
                <div className="flex items-center gap-2 text-[#735ae5] font-bold text-sm mb-4">
                  <ShieldCheck className="w-4 h-4 text-[#735ae5]" />
                  <span>The Mega Ecomm Solution</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                  {sol.solutions.map((sl, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{sl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {sol.keyFeatures.map((kf, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-[#735ae5]/10 text-[#735ae5] border border-[#735ae5]/20"
                  >
                    {kf}
                  </span>
                ))}
              </div>

              <Button href={`/contact?intent=demo&solution=${sol.id}`} variant="primary" size="sm" withArrow>
                Schedule {sol.title} Demo
              </Button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
