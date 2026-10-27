"use client";

import React from "react";
import { Check, ShoppingCart, CreditCard, Boxes, FileText, Truck, Bell, ArrowRight } from "lucide-react";

export default function AutomationWorkflowMock() {
  const workflowNodes = [
    {
      title: "Order Placed / Migrated",
      detail: "Shopify 1-click sync or storefront checkout trigger",
      icon: ShoppingCart,
      color: "text-blue-400 bg-blue-500/20 border-blue-500/30",
    },
    {
      title: "Pincode Intelligence",
      detail: "Pincode API checks delivery TAT & COD eligibility",
      icon: CreditCard,
      color: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
    },
    {
      title: "Inventory Reserved",
      detail: "Sub-second stock locked across warehouses",
      icon: Boxes,
      color: "text-amber-400 bg-amber-500/20 border-amber-500/30",
    },
    {
      title: "GST Invoice Created",
      detail: "Automated GST compliant PDF with HSN codes",
      icon: FileText,
      color: "text-[#7ecdf5] bg-[#735ae5]/20 border-[#735ae5]/30",
    },
    {
      title: "Courier AWB Assigned",
      detail: "Allocated via Delhivery / Shiprocket / Blue Dart",
      icon: Truck,
      color: "text-[#9069fc] bg-[#9069fc]/20 border-[#9069fc]/30",
    },
    {
      title: "WhatsApp Dispatched",
      detail: "Live tracking link & OTP sent via WhatsApp",
      icon: Bell,
      color: "text-teal-400 bg-teal-500/20 border-teal-500/30",
    },
  ];

  return (
    <div className="bg-[#141413] rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl text-slate-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
        <div>
          <div className="text-base font-bold text-white">Event-Driven Automation Flow Engine</div>
          <div className="text-xs text-slate-400">Trigger Recipe: "D2C Express Auto-Fulfill &amp; Notify"</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Execution: 64ms Avg
          </span>
        </div>
      </div>

      {/* Sequential Pipeline Visualizer */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3.5 my-4 sm:my-6">
        {workflowNodes.map((node, idx) => {
          const Icon = node.icon;
          return (
            <div
              key={node.title}
              className="p-2.5 sm:p-3.5 rounded-xl bg-[#1c1c1a] border border-white/10 hover:border-[#735ae5]/60 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-start justify-between mb-1.5 sm:mb-2">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center border ${node.color}`}>
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 bg-[#141413] px-1.5 sm:px-2 py-0.5 rounded border border-white/10">
                  0{idx + 1}
                </span>
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-200 group-hover:text-[#7ecdf5] transition-colors leading-snug">
                  {node.title}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">{node.detail}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Automation Metrics */}
      <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
        <span>No code required. Visual branch logic with 100+ conditional triggers.</span>
        <span className="text-[#735ae5] font-semibold cursor-pointer hover:underline">
          Explore all 50+ pre-built recipe templates &rarr;
        </span>
      </div>
    </div>
  );
}
