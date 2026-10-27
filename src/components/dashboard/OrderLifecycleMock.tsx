"use client";

import React, { useState } from "react";
import { CheckCircle2, Clock, Truck, PackageCheck, Send, Check } from "lucide-react";

export default function OrderLifecycleMock() {
  const steps = [
    { name: "Order Placed", time: "10:14 AM", done: true },
    { name: "Confirmed", time: "10:15 AM", done: true },
    { name: "Processing", time: "10:28 AM", done: true },
    { name: "Packed", time: "11:05 AM", done: true },
    { name: "Shipped", time: "01:20 PM", done: true },
    { name: "Delivered", time: "Tomorrow 2 PM", done: false },
  ];

  return (
    <div className="bg-[#141413] rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl text-slate-100">
      {/* Top Lifecycle Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold text-[#7ecdf5]">#ORD-2026-8819</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#735ae5]/20 text-[#7ecdf5] border border-[#735ae5]/30">
              In Transit • Delhivery Air
            </span>
          </div>
          <div className="text-xs text-slate-400 mt-0.5">
            Customer: Rohan Malhotra (Indiranagar, Bangalore) • Destination Warehouse: South Hub
          </div>
        </div>

        <div className="text-left sm:text-right mt-1.5 sm:mt-0">
          <div className="text-sm font-bold text-white font-mono">₹6,850.00</div>
          <div className="text-[11px] text-emerald-400 font-medium">Prepaid via UPI (Razorpay)</div>
        </div>
      </div>

      {/* 6-Stage Visual Lifecycle Stepper */}
      <div className="py-6 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[550px] relative">
          {/* Connector line */}
          <div className="absolute top-4 left-4 right-4 h-0.5 bg-slate-700 -z-0" />
          <div className="absolute top-4 left-4 w-4/5 h-0.5 bg-[#735ae5] -z-0 transition-all duration-500" />

          {steps.map((step, idx) => (
            <div key={step.name} className="flex flex-col items-center relative z-10">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-md ${
                  step.done
                    ? "bg-[#735ae5] text-white ring-4 ring-[#141413]"
                    : "bg-slate-800 text-slate-400 border border-slate-700 ring-4 ring-[#141413]"
                }`}
              >
                {step.done ? <Check className="w-4 h-4 stroke-[3]" /> : idx + 1}
              </div>
              <span className="text-xs font-semibold text-slate-200 mt-2">{step.name}</span>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5">{step.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Order Items & Fulfillment Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
        <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
          <div className="text-slate-400 mb-1 font-medium">Package Contents (2 items)</div>
          <div className="space-y-1">
            <div className="flex justify-between text-slate-200">
              <span>1x Aura Pro Wireless (Midnight)</span>
              <span className="font-mono text-slate-400">₹4,999</span>
            </div>
            <div className="flex justify-between text-slate-200">
              <span>1x Fast Charge Dock 65W</span>
              <span className="font-mono text-slate-400">₹1,851</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
          <div className="text-slate-400 mb-1 font-medium">Automated Routing Decision</div>
          <div className="text-slate-300">
            Assigned to <span className="text-[#7ecdf5] font-semibold">Hosur Regional Hub</span> (Distance: 32 km).
            Cheapest carrier with SLA guarantee: <span className="text-emerald-300 font-mono">Delhivery Express (AWB: DEL-882194)</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
