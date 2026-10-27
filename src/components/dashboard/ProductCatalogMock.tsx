"use client";

import React, { useState } from "react";
import { Search, Plus, Filter, MoreHorizontal, Check, Tag } from "lucide-react";

export default function ProductCatalogMock() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: "PRD-101",
      name: "Aura Pro Wireless ANC Headphones",
      sku: "SKU-AURA-PRO-BLK",
      category: "Electronics",
      price: "₹4,999",
      variants: "4 colors • 2 editions",
      stock: 482,
      status: "Active",
      channels: "Shopify, Amazon, POS",
    },
    {
      id: "PRD-102",
      name: "Aerolight Carbon Performance Sneaker",
      sku: "SKU-AERO-CARB-42",
      category: "Footwear",
      price: "₹3,499",
      variants: "6 sizes • 3 colors",
      stock: 128,
      status: "Active",
      channels: "Shopify, Flipkart",
    },
    {
      id: "PRD-103",
      name: "Botanical Restorative Facial Oil 50ml",
      sku: "SKU-BOTA-OIL-50",
      category: "Beauty & Wellness",
      price: "₹1,299",
      variants: "Single SKU",
      stock: 18,
      status: "Low Stock",
      channels: "Shopify, Amazon, Nykaa",
    },
    {
      id: "PRD-104",
      name: "Minimalist Italian Leather Cardholder",
      sku: "SKU-LTHR-CRD-TAN",
      category: "Accessories",
      price: "₹899",
      variants: "3 color variants",
      stock: 310,
      status: "Active",
      channels: "Shopify, POS",
    },
  ];

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#141413] rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl text-slate-100">
      {/* Top Action Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              readOnly
              value="Search 24,580 SKUs across channels..."
              className="w-full bg-[#1c1c1a] border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-300 focus:outline-none"
            />
          </div>
          <button className="px-3 py-1.5 rounded-xl bg-[#1c1c1a] border border-white/10 text-xs font-medium text-slate-300 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Filters
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3.5 py-1.5 rounded-full bg-[#735ae5] hover:bg-[#5f45d4] text-xs font-semibold text-white flex items-center gap-1.5 shadow-md shadow-[#735ae5]/30">
            <Plus className="w-3.5 h-3.5" /> New Product
          </button>
          <span className="text-xs text-slate-400 border-l border-white/10 pl-2 hidden sm:inline">
            Bulk Actions (12 selected)
          </span>
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto mt-4 no-scrollbar">
        <table className="min-w-[560px] w-full text-left text-xs text-slate-300">
          <thead>
            <tr className="text-slate-400 border-b border-slate-800 font-medium">
              <th className="pb-3 pl-1">Product Details</th>
              <th className="pb-3">SKU &amp; Variants</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Stock Level</th>
              <th className="pb-3">Channels</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="py-3 pl-1">
                  <div className="font-semibold text-slate-100">{item.name}</div>
                  <div className="text-[11px] text-slate-400">{item.category}</div>
                </td>
                <td className="py-3 font-mono text-[11px]">
                  <div className="text-slate-300">{item.sku}</div>
                  <div className="text-slate-500 font-sans">{item.variants}</div>
                </td>
                <td className="py-3 font-bold text-white font-mono">{item.price}</td>
                <td className="py-3 font-mono">
                  <span
                    className={
                      item.stock < 50
                        ? "text-amber-400 font-semibold"
                        : "text-emerald-400 font-semibold"
                    }
                  >
                    {item.stock} units
                  </span>
                </td>
                <td className="py-3 text-[11px] text-slate-400">{item.channels}</td>
                <td className="py-3">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      item.status === "Low Stock"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                        : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sync Footer */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 text-xs text-slate-400">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Catalog auto-synced across 4 active channels
        </span>
        <span className="font-mono text-[10px] sm:text-[11px]">Last sync: 2 sec ago via SP-API &amp; Webhooks</span>
      </div>
    </div>
  );
}
