import React from "react";
import type { Metadata } from "next";
import { CASE_STUDIES_LIST } from "@/data/case-studies";
import { TESTIMONIALS_LIST } from "@/data/testimonials";
import { Star, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Customer Stories & Proof",
  description:
    "See how brands use Mega Ecomm to accelerate order fulfillment, prevent inventory overselling, and scale revenue.",
};

export default function CustomersPage() {
  return (
    <div className="pt-24 sm:pt-32">
      {/* Hero */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto">
          Trusted by Operators Who Refuse to Settle.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
          From high-velocity flash drops to nationwide retail store networks, discover how merchants eliminate chaos and drive profitability.
        </p>
      </section>

      {/* Highlights Metrics Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-[#141413] text-white border border-white/10">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#7ecdf5] font-mono">-91%</div>
            <div className="text-xs text-slate-400 mt-1">Average Stockout Cancellations</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-emerald-400 font-mono">1.8 Days</div>
            <div className="text-xs text-slate-400 mt-1">Average Domestic Last-Mile Delivery</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#735ae5] font-mono">3.4x</div>
            <div className="text-xs text-slate-400 mt-1">Warehouse Packing Speed</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-white font-mono">99.98%</div>
            <div className="text-xs text-slate-400 mt-1">Real-time Order Routing Accuracy</div>
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
          Detailed Merchant Case Studies
        </h2>

        <div className="space-y-12">
          {CASE_STUDIES_LIST.map((cs) => (
            <div
              key={cs.company}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{cs.company}</h3>
                  <div className="text-xs text-[#735ae5] font-medium mt-0.5">{cs.industry}</div>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <div>
                    <span className="text-xl font-bold font-mono text-slate-900">{cs.statGain}</span>
                    <span className="text-xs text-slate-500 ml-1.5">{cs.statLabel}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2">
                    The Problem
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cs.problem}</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#735ae5] block mb-2">
                    The Solution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-2">
                    The Business Result
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Wall */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
          What Operations Leaders Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_LIST.map((item) => (
            <div
              key={item.author}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900">{item.author}</div>
                  <div className="text-xs text-slate-500">
                    {item.role}, <span className="text-[#735ae5] font-medium">{item.company}</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  {item.metricsResult}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
