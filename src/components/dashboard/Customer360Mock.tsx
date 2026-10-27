"use client";

import React from "react";
import { Users, Heart, ShoppingBag, ShieldCheck, Mail, Phone, Calendar, ArrowUpRight } from "lucide-react";

export default function Customer360Mock() {
  return (
    <div className="bg-[#141413] rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl text-slate-100">
      {/* Customer Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#735ae5] to-[#9069fc] flex items-center justify-center text-white font-bold text-lg shadow-md">
            AK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white">Ananya Kulkarni</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                VIP Platinum (Top 1%)
              </span>
            </div>
            <div className="text-xs text-slate-400">ananya.k@gmail.com • Mumbai, MH • Customer for 14 mos</div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="text-right">
            <span className="text-slate-400 block text-[10px]">LIFETIME VALUE (CLV)</span>
            <span className="text-base font-bold text-emerald-400">₹48,250</span>
          </div>
          <div className="text-right border-l border-slate-800 pl-4">
            <span className="text-slate-400 block text-[10px]">ORDERS COMPLETED</span>
            <span className="text-base font-bold text-[#7ecdf5]">14 Orders</span>
          </div>
        </div>
      </div>

      {/* 360 RFM Intelligence Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
        <div className="bg-[#1c1c1a] p-3 rounded-xl border border-white/10">
          <div className="text-[11px] text-slate-400">Avg Order Value (AOV)</div>
          <div className="text-sm font-bold text-white font-mono mt-0.5">₹3,446</div>
          <div className="text-[10px] text-emerald-400 mt-0.5">+42% above brand average</div>
        </div>
        <div className="bg-[#1c1c1a] p-3 rounded-xl border border-white/10">
          <div className="text-[11px] text-slate-400">Purchase Cadence</div>
          <div className="text-sm font-bold text-white font-mono mt-0.5">Every 28 Days</div>
          <div className="text-[10px] text-[#7ecdf5] mt-0.5">High retention probability</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/40">
          <div className="text-[11px] text-slate-400">Return Rate (RTO)</div>
          <div className="text-sm font-bold text-white font-mono mt-0.5">0.0%</div>
          <div className="text-[10px] text-emerald-400 mt-0.5">100% Prepaid checkout</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/40">
          <div className="text-[11px] text-slate-400">Primary Channel</div>
          <div className="text-sm font-bold text-white mt-0.5">Shopify D2C</div>
          <div className="text-[10px] text-slate-400 mt-0.5">WhatsApp VIP subscriber</div>
        </div>
      </div>

      {/* Customer Journey Timeline */}
      <div className="bg-slate-800/40 rounded-xl p-3.5 border border-slate-700/50">
        <div className="text-xs font-semibold text-slate-300 mb-2.5">Omnichannel Journey Timeline</div>
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-700/40">
            <span className="text-slate-300 font-medium">Placed Order #ORD-9382 • Aura Pro Wireless Headset</span>
            <span className="text-slate-500 font-mono text-[10px]">Yesterday 4:12 PM</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-700/40">
            <span className="text-slate-300 font-medium">Clicked WhatsApp Dispatch Link &amp; Rated 5-Stars</span>
            <span className="text-slate-500 font-mono text-[10px]">3 days ago</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-700/40">
            <span className="text-slate-300 font-medium">In-Store Footwear Purchase at Bandra POS Terminal</span>
            <span className="text-slate-500 font-mono text-[10px]">2 weeks ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
