"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  ArrowUpRight,
  Package,
  ShoppingCart,
  Users,
  Truck,
  Search,
  Filter,
  Activity,
  Warehouse,
  CheckCircle2,
} from "lucide-react";
import { HERO_STATS } from "@/data/metrics";
import FloatingBadge from "./FloatingBadge";
import { cn } from "@/lib/utils";

export default function HeroDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "inventory">("overview");
  const [hoveredChartPoint, setHoveredChartPoint] = useState<number | null>(null);

  const chartDataPoints = [
    { x: 0, y: 110, val: "₹1,20,000", time: "10:00 AM" },
    { x: 80, y: 95, val: "₹1,45,000", time: "12:00 PM" },
    { x: 170, y: 75, val: "₹1,82,400", time: "02:00 PM" },
    { x: 260, y: 40, val: "₹2,15,000", time: "04:00 PM" },
    { x: 370, y: 28, val: "₹2,48,500", time: "06:00 PM" },
    { x: 500, y: 15, val: "₹2,85,420", time: "08:00 PM" },
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4">
      {/* Floating Live Event Badges on Desktop with Soft Drop Shadows */}
      <div className="hidden xl:block absolute -top-7 -left-8 z-30">
        <FloatingBadge type="delivered" />
      </div>
      <div className="hidden xl:block absolute top-1/4 -right-10 z-30">
        <FloatingBadge type="sale" />
      </div>
      <div className="hidden xl:block absolute -bottom-8 -left-6 z-30">
        <FloatingBadge type="inventory" />
      </div>
      <div className="hidden xl:block absolute -bottom-6 -right-8 z-30">
        <FloatingBadge type="customer" />
      </div>

      {/* Sleek Glowing Gradient Bezel Wrapper */}
      <div className="p-[1px] rounded-3xl bg-gradient-to-b from-[#735ae5]/60 via-slate-700/40 to-[#141413] shadow-[0_30px_90px_-20px_rgba(115,90,229,0.32)] ring-1 ring-white/10">
        {/* Main Dashboard Cockpit Body */}
        <div className="rounded-[23px] bg-[#141413]/98 text-slate-100 p-3.5 sm:p-6 backdrop-blur-2xl overflow-hidden relative">
          {/* Ambient Top Glow Mesh */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] h-32 bg-[#735ae5]/20 blur-3xl pointer-events-none rounded-full" />

          {/* Console Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 px-1">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
              </div>
              <div className="flex items-center gap-2 bg-[#1c1c1a] px-3 py-1 rounded-lg border border-white/10 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#00d084] animate-pulse" />
                <span>megaecomm.internal/live</span>
                <span className="text-slate-500 hidden sm:inline">• 32ms</span>
              </div>
            </div>

            {/* Segmented Switcher Controls */}
            <div className="flex items-center gap-1 bg-[#1c1c1a] p-1 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab("overview")}
                className={cn(
                  "px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer",
                  activeTab === "overview"
                    ? "bg-[#735ae5] text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                )}
              >
                Real-time Overview
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={cn(
                  "px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer",
                  activeTab === "orders"
                    ? "bg-[#735ae5] text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                )}
              >
                Order Stream
              </button>
              <button
                onClick={() => setActiveTab("inventory")}
                className={cn(
                  "px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer",
                  activeTab === "inventory"
                    ? "bg-[#735ae5] text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                )}
              >
                Warehouse Radar
              </button>
            </div>
          </div>

          {/* 4 Core Metric KPI Cards (Responsive 2x2 on mobile, 4 cols on desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
            {/* Revenue */}
            <div className="bg-slate-900/80 hover:bg-slate-850 rounded-2xl p-3.5 sm:p-4 border border-slate-800/90 hover:border-[#735ae5]/50 transition-all duration-250 group">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                <span className="font-medium">Gross Revenue (30D)</span>
                <span className="text-emerald-400 flex items-center font-bold text-[11px]">
                  <ArrowUpRight className="w-3 h-3 mr-0.5" /> +24.8%
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
                {HERO_STATS.revenue}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">₹1,82,400 today</div>
            </div>

            {/* Orders */}
            <div className="bg-slate-900/80 hover:bg-slate-850 rounded-2xl p-3.5 sm:p-4 border border-slate-800/90 hover:border-[#735ae5]/50 transition-all duration-250 group">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                <span className="font-medium">Orders Processed</span>
                <span className="text-emerald-400 flex items-center font-bold text-[11px]">
                  <ArrowUpRight className="w-3 h-3 mr-0.5" /> +18.2%
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
                {HERO_STATS.orders}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">99.8% on-time dispatch</div>
            </div>

            {/* Customers */}
            <div className="bg-slate-900/80 hover:bg-slate-850 rounded-2xl p-3.5 sm:p-4 border border-slate-800/90 hover:border-[#735ae5]/50 transition-all duration-250 group">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                <span className="font-medium">Active Customers</span>
                <span className="text-emerald-400 flex items-center font-bold text-[11px]">
                  <ArrowUpRight className="w-3 h-3 mr-0.5" /> +14.5%
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
                {HERO_STATS.customers}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">34% repeat purchasers</div>
            </div>

            {/* Average Order Value */}
            <div className="bg-slate-900/80 hover:bg-slate-850 rounded-2xl p-3.5 sm:p-4 border border-slate-800/90 hover:border-[#735ae5]/50 transition-all duration-250 group">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                <span className="font-medium">Avg Order Value</span>
                <span className="text-emerald-400 flex items-center font-bold text-[11px]">
                  <ArrowUpRight className="w-3 h-3 mr-0.5" /> +6.3%
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
                {HERO_STATS.aov}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">+₹118 vs baseline</div>
            </div>
          </div>

          {/* Interactive Tab Body */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left Chart: Revenue Velocity Trend */}
              <div className="lg:col-span-8 bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#7ecdf5]" />
                    <span className="text-sm font-bold text-slate-200">
                      Hourly Revenue Velocity
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs">
                    <span className="inline-flex items-center gap-1.5 text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-[#735ae5]" /> D2C Store
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-purple-400" /> Amazon SP-API
                    </span>
                  </div>
                </div>

                {/* Interactive SVG Smooth Area Chart */}
                <div className="h-44 sm:h-52 w-full pt-1 relative">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="heroAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#735ae5" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#735ae5" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="subAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#7ecdf5" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#7ecdf5" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Subtle Horizontal Reference Grid Lines */}
                    <line x1="0" y1="35" x2="500" y2="35" stroke="#334155" strokeDasharray="3 3" opacity="0.3" />
                    <line x1="0" y1="80" x2="500" y2="80" stroke="#334155" strokeDasharray="3 3" opacity="0.3" />
                    <line x1="0" y1="125" x2="500" y2="125" stroke="#334155" strokeDasharray="3 3" opacity="0.3" />

                    {/* Primary Curve Fill & Stroke */}
                    <path
                      d="M 0,110 C 60,95 110,125 170,75 C 230,25 300,65 370,28 C 430,10 470,20 500,15 L 500,150 L 0,150 Z"
                      fill="url(#heroAreaGradient)"
                    />
                    <path
                      d="M 0,110 C 60,95 110,125 170,75 C 230,25 300,65 370,28 C 430,10 470,20 500,15"
                      fill="none"
                      stroke="#735ae5"
                      strokeWidth="2.5"
                    />

                    {/* Secondary Channel Stroke */}
                    <path
                      d="M 0,130 C 70,120 130,110 200,90 C 270,70 330,85 400,60 C 450,45 480,55 500,40 L 500,150 L 0,150 Z"
                      fill="url(#subAreaGradient)"
                    />
                    <path
                      d="M 0,130 C 70,120 130,110 200,90 C 270,70 330,85 400,60 C 450,45 480,55 500,40"
                      fill="none"
                      stroke="#7ecdf5"
                      strokeWidth="1.8"
                      strokeDasharray="4 2"
                    />

                    {/* Interactive Interactive Data Points */}
                    {chartDataPoints.map((pt, idx) => (
                      <circle
                        key={idx}
                        cx={pt.x}
                        cy={pt.y}
                        r={hoveredChartPoint === idx ? 6 : 4}
                        className="cursor-pointer transition-all duration-150"
                        fill={hoveredChartPoint === idx ? "#ffffff" : "#7ecdf5"}
                        stroke="#735ae5"
                        strokeWidth="2"
                        onMouseEnter={() => setHoveredChartPoint(idx)}
                        onMouseLeave={() => setHoveredChartPoint(null)}
                      />
                    ))}
                  </svg>

                  {/* Dynamic Tooltip on Hover */}
                  {hoveredChartPoint !== null && (
                    <div
                      className="absolute -top-3 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-lg border border-[#735ae5]/80 shadow-lg pointer-events-none transform -translate-x-1/2"
                      style={{
                        left: `${(chartDataPoints[hoveredChartPoint].x / 500) * 100}%`,
                      }}
                    >
                      <div className="font-bold text-[#7ecdf5] font-mono">
                        {chartDataPoints[hoveredChartPoint].val}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {chartDataPoints[hoveredChartPoint].time}
                      </div>
                    </div>
                  )}
                </div>

                {/* Live Insight Pill */}
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2.5 border-t border-slate-800/80">
                  <span className="font-medium">Peak rate: 42 orders/min</span>
                  <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Zero stockout events detected
                  </span>
                </div>
              </div>

              {/* Right Mini Panels: Top SKUs & Automated Dispatch */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                {/* High Velocity SKUs */}
                <div className="bg-slate-900/60 rounded-2xl p-3.5 border border-slate-800/80">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2.5">
                    <span className="flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-[#7ecdf5]" /> High Velocity SKUs
                    </span>
                    <span className="text-slate-400 font-normal">Stock Level</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/70 border border-slate-800/80">
                      <div>
                        <div className="font-semibold text-slate-200">Aura Pro Noise Cancelling</div>
                        <div className="text-[10px] text-slate-400 font-mono">SKU-AURA-BLK • ₹4,999</div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-[11px] font-bold border border-emerald-500/20">
                        842 units
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/70 border border-slate-800/80">
                      <div>
                        <div className="font-semibold text-slate-200">Aerolight Carbon Sneaker 42</div>
                        <div className="text-[10px] text-slate-400 font-mono">SKU-AERO-42 • ₹3,299</div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-[11px] font-bold border border-emerald-500/20">
                        194 units
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/70 border border-slate-800/80">
                      <div>
                        <div className="font-semibold text-slate-200">Organic Botanical Serum 50ml</div>
                        <div className="text-[10px] text-slate-400 font-mono">SKU-SERUM-ORG • ₹1,450</div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 font-mono text-[11px] font-bold border border-amber-500/20">
                        14 units (Low)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Real-Time Logistics Routing Alert */}
                <div className="bg-slate-900/60 rounded-2xl p-3 border border-slate-800/80 flex items-start gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#735ae5]/20 text-[#7ecdf5] shrink-0 mt-0.5 border border-[#735ae5]/30">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-200">Auto-Carrier Optimization</div>
                    <div className="text-slate-400 text-[11px] leading-relaxed mt-0.5">
                      124 packages routed to Delhivery Express &amp; Blue Dart. Average shipping spend cut by 18.4%.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Stream Tab */}
          {activeTab === "orders" && (
            <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-slate-800/80">
                <span className="font-bold">Live Multi-Channel Order Ingestion</span>
                <span className="font-mono text-[#7ecdf5]">Stream frequency: 1s</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-800 font-semibold">
                      <th className="pb-2.5">Order ID</th>
                      <th className="pb-2.5">Customer &amp; City</th>
                      <th className="pb-2.5">Channel</th>
                      <th className="pb-2.5">Items</th>
                      <th className="pb-2.5">Amount</th>
                      <th className="pb-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono text-xs">
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3 text-[#7ecdf5] font-bold">#ORD-9429</td>
                      <td className="py-3 text-slate-200 font-sans">Kavita Reddy (Hyderabad)</td>
                      <td className="py-3 font-sans">Shopify D2C</td>
                      <td className="py-3">2 items</td>
                      <td className="py-3 font-bold text-white">₹4,290</td>
                      <td className="py-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                          Payment Verified
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3 text-[#7ecdf5] font-bold">#ORD-9428</td>
                      <td className="py-3 text-slate-200 font-sans">Devendra Paul (Delhi)</td>
                      <td className="py-3 font-sans">Amazon India</td>
                      <td className="py-3">1 item</td>
                      <td className="py-3 font-bold text-white">₹1,999</td>
                      <td className="py-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#735ae5]/20 text-[#7ecdf5] text-[10px] font-semibold border border-[#735ae5]/30">
                          AWB Dispatched
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3 text-[#7ecdf5] font-bold">#ORD-9427</td>
                      <td className="py-3 text-slate-200 font-sans">Meera Nair (Bangalore)</td>
                      <td className="py-3 font-sans">Physical POS Store</td>
                      <td className="py-3">3 items</td>
                      <td className="py-3 font-bold text-white">₹7,850</td>
                      <td className="py-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                          Fulfilled In-Store
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Warehouse Nodes Tab */}
          {activeTab === "inventory" && (
            <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-slate-800/80">
                <span className="font-bold">Multi-Node Real-time Inventory Radar</span>
                <span className="text-emerald-400 font-mono font-semibold">Total Stock: 48,210 units</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold text-slate-200">North Hub (Bhiwandi)</span>
                    <span className="text-emerald-400 font-mono font-bold">92%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 mb-2 overflow-hidden">
                    <div className="bg-emerald-500 h-2 rounded-full transition-all duration-500" style={{ width: "92%" }} />
                  </div>
                  <div className="text-[11px] text-slate-400">18,420 units • 4 orders in queue</div>
                </div>

                <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold text-slate-200">South Hub (Hosur)</span>
                    <span className="text-[#7ecdf5] font-mono font-bold">76%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 mb-2 overflow-hidden">
                    <div className="bg-[#735ae5] h-2 rounded-full transition-all duration-500" style={{ width: "76%" }} />
                  </div>
                  <div className="text-[11px] text-slate-400">21,050 units • 2 orders in queue</div>
                </div>

                <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold text-slate-200">West Dark Store (Pune)</span>
                    <span className="text-amber-400 font-mono font-bold">48%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 mb-2 overflow-hidden">
                    <div className="bg-amber-500 h-2 rounded-full transition-all duration-500" style={{ width: "48%" }} />
                  </div>
                  <div className="text-[11px] text-slate-400">8,740 units • Reorder triggered</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
