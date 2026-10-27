"use client";

import React, { useState } from "react";
import { TrendingUp, BarChart2, PieChart, ArrowUpRight } from "lucide-react";

export default function AnalyticsChartMock() {
  const [metricView, setMetricView] = useState<"revenue" | "orders" | "conversion">("revenue");

  return (
    <div className="bg-[#141413] rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl text-slate-100">
      {/* Top Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
        <div>
          <div className="text-base font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#7ecdf5]" />
            Executive Commerce Intelligence
          </div>
          <div className="text-xs text-slate-400">Net Profit Margin &amp; Revenue Attribution (Last 30 Days)</div>
        </div>

        {/* Metric Selector */}
        <div className="flex items-center gap-1.5 bg-[#1c1c1a] p-1 rounded-xl border border-white/10 text-xs">
          <button
            onClick={() => setMetricView("revenue")}
            className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
              metricView === "revenue"
                ? "bg-[#735ae5] text-white shadow-xs"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            GMV &amp; Net
          </button>
          <button
            onClick={() => setMetricView("orders")}
            className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
              metricView === "orders"
                ? "bg-[#735ae5] text-white shadow-xs"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Order Velocity
          </button>
          <button
            onClick={() => setMetricView("conversion")}
            className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
              metricView === "conversion"
                ? "bg-[#735ae5] text-white shadow-xs"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Conversion Funnel
          </button>
        </div>
      </div>

      {/* KPI Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
        <div className="p-3 bg-[#1c1c1a] rounded-xl border border-white/10">
          <div className="text-[11px] text-slate-400">Total GMV Processed</div>
          <div className="text-base font-bold text-white font-mono mt-0.5">₹24,85,420</div>
          <div className="text-[10px] text-emerald-400 font-medium flex items-center">
            <ArrowUpRight className="w-3 h-3 mr-0.5" /> +28.4% MoM
          </div>
        </div>
        <div className="p-3 bg-[#1c1c1a] rounded-xl border border-white/10">
          <div className="text-[11px] text-slate-400">Net Gross Margin</div>
          <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">68.4%</div>
          <div className="text-[10px] text-slate-400">Post COGS &amp; Shipping</div>
        </div>
        <div className="p-3 bg-[#1c1c1a] rounded-xl border border-white/10">
          <div className="text-[11px] text-slate-400">Blended Conversion</div>
          <div className="text-base font-bold text-[#7ecdf5] font-mono mt-0.5">3.82%</div>
          <div className="text-[10px] text-emerald-400 font-medium flex items-center">
            <ArrowUpRight className="w-3 h-3 mr-0.5" /> +0.64% WoW
          </div>
        </div>
        <div className="p-3 bg-[#1c1c1a] rounded-xl border border-white/10">
          <div className="text-[11px] text-slate-400">Return Rate (RTO)</div>
          <div className="text-base font-bold text-amber-400 font-mono mt-0.5">4.2%</div>
          <div className="text-[10px] text-emerald-400 font-medium">-38% below industry avg</div>
        </div>
      </div>

      {/* SVG Chart & Channel Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-[#1c1c1a] p-4 rounded-xl border border-white/10">
          <div className="flex justify-between items-center text-xs text-slate-300 mb-2">
            <span className="font-semibold">30-Day Trajectory Curve</span>
            <span className="text-[#7ecdf5] font-mono">Daily Peak: ₹1,12,000</span>
          </div>

          <div className="h-44 w-full">
            <svg className="w-full h-full" viewBox="0 0 450 140" preserveAspectRatio="none">
              <defs>
                <linearGradient id="analyticsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#735ae5" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#735ae5" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="35" x2="450" y2="35" stroke="#334155" strokeDasharray="3 3" opacity="0.3" />
              <line x1="0" y1="80" x2="450" y2="80" stroke="#334155" strokeDasharray="3 3" opacity="0.3" />
              <line x1="0" y1="120" x2="450" y2="120" stroke="#334155" strokeDasharray="3 3" opacity="0.3" />

              <path
                d="M 0,115 Q 60,95 110,65 T 220,70 T 330,30 T 450,15 L 450,140 L 0,140 Z"
                fill="url(#analyticsGrad)"
              />
              <path
                d="M 0,115 Q 60,95 110,65 T 220,70 T 330,30 T 450,15"
                fill="none"
                stroke="#735ae5"
                strokeWidth="2.5"
              />

              <circle cx="330" cy="30" r="4.5" fill="#735ae5" stroke="#ffffff" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Channel Revenue Split */}
        <div className="bg-[#1c1c1a] p-4 rounded-xl border border-white/10 flex flex-col justify-between">
          <div className="text-xs font-semibold text-slate-200 mb-2">Channel Revenue Split</div>
          <div className="space-y-2.5 text-xs">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Shopify D2C Store</span>
                <span className="font-mono font-bold text-white">58%</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#735ae5] h-1.5 rounded-full" style={{ width: "58%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Amazon India FBM/FBA</span>
                <span className="font-mono font-bold text-white">24%</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-violet-400 h-1.5 rounded-full" style={{ width: "24%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Flipkart &amp; Marketplaces</span>
                <span className="font-mono font-bold text-white">12%</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: "12%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Physical Retail POS</span>
                <span className="font-mono font-bold text-white">6%</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: "6%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
