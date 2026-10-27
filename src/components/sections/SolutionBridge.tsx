"use client";

import React from "react";
import { Package, Boxes, ShoppingCart, Users, BarChart3, Zap, ArrowDown } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export default function SolutionBridge() {
  const nodes = [
    { name: "Products", icon: Package, color: "text-blue-500", bg: "bg-blue-50 border-blue-200" },
    { name: "Inventory", icon: Boxes, color: "text-amber-500", bg: "bg-amber-50 border-amber-200" },
    { name: "Orders", icon: ShoppingCart, color: "text-emerald-500", bg: "bg-emerald-50 border-emerald-200" },
    { name: "Customers", icon: Users, color: "text-[#9069fc]", bg: "bg-[#735ae5]/10 border-[#735ae5]/20" },
    { name: "Analytics", icon: BarChart3, color: "text-[#735ae5]", bg: "bg-[#735ae5]/10 border-[#735ae5]/20" },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-18 bg-[#141413] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(115,90,229,0.35),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-12">
          <Reveal direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[42px] font-bold text-white tracking-tight">
              Bring Everything Together With Mega Ecomm.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              Eliminate point-solution silos. Route all commerce signals through one centralized real-time operating platform.
            </p>
          </Reveal>
        </div>

        {/* Animated Node Convergence Architecture */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row: Disconnected Systems in 2-Column Mobile Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
            {nodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <Reveal key={node.name} delay={i * 0.1} direction="down">
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#1c1c1a] border border-white/10 text-center flex flex-col items-center hover:border-[#735ae5]/70 transition-colors shadow-lg ${
                    i === 4 ? "col-span-2 sm:col-span-1 max-w-[200px] sm:max-w-none mx-auto w-full" : ""
                  }`}>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${node.bg} flex items-center justify-center mb-1.5 sm:mb-2 border shadow-xs`}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${node.color}`} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">{node.name}</span>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Real-time Stream</span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* SVG Animated Influx Lines */}
          <div className="hidden sm:block relative h-20 w-full overflow-hidden my-1">
            <svg className="w-full h-full" viewBox="0 0 800 80" fill="none">
              <path
                d="M 100 0 C 100 40, 400 20, 400 80"
                stroke="#735ae5"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-pulse"
                opacity="0.6"
              />
              <path
                d="M 250 0 C 250 40, 400 20, 400 80"
                stroke="#7ecdf5"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-pulse"
                opacity="0.6"
              />
              <path
                d="M 400 0 L 400 80"
                stroke="#9069fc"
                strokeWidth="2.5"
                opacity="0.9"
              />
              <path
                d="M 550 0 C 550 40, 400 20, 400 80"
                stroke="#7ecdf5"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-pulse"
                opacity="0.6"
              />
              <path
                d="M 700 0 C 700 40, 400 20, 400 80"
                stroke="#735ae5"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-pulse"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Centralized Mega Ecomm Core Engine Box */}
          <Reveal direction="up" delay={0.3}>
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1c1c1a] to-[#141413] border-2 border-[#735ae5]/60 shadow-2xl shadow-[#735ae5]/20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1.5 bg-gradient-to-r from-[#735ae5] via-[#7ecdf5] to-[#ebff39]" />
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#735ae5] text-white shadow-lg shadow-[#735ae5]/40 mb-4">
                <Zap className="w-7 h-7 fill-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-[24px] xl:text-3xl font-bold text-white">
                Mega Ecomm Unified Core
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mt-2 leading-relaxed font-normal">
                Centralized orchestration plane where catalog syncing, automated split routing, multi-channel locks, and gross margin analytics fire simultaneously in under 80 milliseconds.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-[#141413] border border-white/10">
                  <div className="text-[#7ecdf5] font-bold">100% ACID</div>
                  <div className="text-slate-400 text-[10px]">Zero Stock Drift</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#141413] border border-white/10">
                  <div className="text-[#7ecdf5] font-bold">&lt;80ms</div>
                  <div className="text-slate-400 text-[10px]">Sync Latency</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#141413] border border-white/10">
                  <div className="text-[#00d084] font-bold">99.99%</div>
                  <div className="text-slate-400 text-[10px]">Uptime SLA</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#141413] border border-white/10">
                  <div className="text-[#fcbc69] font-bold">50+ Connectors</div>
                  <div className="text-slate-400 text-[10px]">Pre-built APIs</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
