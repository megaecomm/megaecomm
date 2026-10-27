"use client";

import React from "react";
import { AlertTriangle, Boxes, Warehouse, RefreshCw, ArrowUpRight } from "lucide-react";

export default function InventoryRadarMock() {
  const stockItems = [
    {
      name: "Product A • Aura Pro ANC Headphones",
      sku: "SKU-AURA-BLK",
      stock: 245,
      reserved: 28,
      status: "Optimal",
      barColor: "bg-emerald-500",
      pct: 78,
    },
    {
      name: "Product B • Aerolight Carbon Sneaker 42",
      sku: "SKU-AERO-42",
      stock: 28,
      reserved: 12,
      status: "Moderate",
      barColor: "bg-[#735ae5]",
      pct: 35,
    },
    {
      name: "Product C • Botanical Organic Facial Oil",
      sku: "SKU-BOTA-OIL",
      stock: 4,
      reserved: 4,
      status: "Low Stock Alert",
      barColor: "bg-amber-500",
      pct: 12,
    },
    {
      name: "Product D • Italian Leather Slim Sleeve",
      sku: "SKU-LTHR-TAN",
      stock: 0,
      reserved: 0,
      status: "Out of Stock (PO Sent)",
      barColor: "bg-rose-500",
      pct: 0,
    },
  ];

  return (
    <div className="bg-[#141413] rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl text-slate-100">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#735ae5]/20 text-[#7ecdf5] flex items-center justify-center">
            <Boxes className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">Live Inventory Multi-Node Radar</div>
            <div className="text-xs text-slate-400">Synchronized across 4 Regional Hubs &amp; 14 Dark Stores</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            99.98% Sync Reliability
          </span>
        </div>
      </div>

      {/* Stock Items Progress Table */}
      <div className="space-y-3.5 my-5">
        {stockItems.map((item) => (
          <div key={item.sku} className="p-3 bg-[#1c1c1a] rounded-xl border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-200">{item.name}</span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">
                  {item.sku}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs mt-1 sm:mt-0">
                <span className="font-mono text-white font-bold">{item.stock} Available</span>
                <span className="text-slate-400 font-mono">({item.reserved} Reserved)</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    item.stock === 0
                      ? "bg-rose-500/20 text-rose-300"
                      : item.stock < 10
                      ? "bg-amber-500/20 text-amber-300"
                      : "bg-emerald-500/20 text-emerald-300"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>

            {/* Progress Track */}
            <div className="w-full bg-slate-700/80 rounded-full h-2 overflow-hidden">
              <div
                className={`h-2 rounded-full transition-all duration-700 ${item.barColor}`}
                style={{ width: `${Math.max(item.pct, 2)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Warehouse Summary Footnote */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Warehouse className="w-4 h-4 text-[#7ecdf5]" />
          <span>Bhiwandi Hub: 14,280 units</span>
        </div>
        <div className="flex items-center gap-2">
          <Warehouse className="w-4 h-4 text-[#7ecdf5]" />
          <span>Hosur Hub: 22,940 units</span>
        </div>
        <div className="flex items-center gap-2">
          <Warehouse className="w-4 h-4 text-[#7ecdf5]" />
          <span>Delhi Dark Store: 8,490 units</span>
        </div>
      </div>
    </div>
  );
}
