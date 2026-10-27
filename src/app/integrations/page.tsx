"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { INTEGRATIONS_LIST, INTEGRATION_CATEGORIES } from "@/data/integrations";

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = INTEGRATIONS_LIST.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-32">
      {/* Integrations Hero */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto">
          Connect Your Entire Commerce Stack.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
          Pre-built, certified native connectors with bidirectional event synchronization, zero maintenance overhead, and instant setup.
        </p>

        {/* Search & Filter Bar */}
        <div className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search integrations (e.g., Razorpay, Shiprocket, Shopify)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#735ae5] focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center overflow-x-auto gap-2 pt-6 no-scrollbar">
          {INTEGRATION_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#735ae5] text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Directory Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
            <p className="text-slate-600 font-medium">No integrations found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-semibold text-[#735ae5] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
            {filtered.map((item) => (
              <div
                key={item.name}
                className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#735ae5]/40 hover:bg-[#faf9ff]/50 transition-all duration-200 flex flex-col group"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-4 gap-1">
                  <span className="text-[9px] sm:text-xs font-mono font-semibold text-[#735ae5] bg-[#735ae5]/10 px-2 sm:px-2.5 py-0.5 rounded border border-[#735ae5]/20 truncate max-w-[85px] sm:max-w-none">
                    {item.tag}
                  </span>
                  <span className="text-[9px] sm:text-xs text-slate-400 truncate max-w-[65px] sm:max-w-none">{item.category}</span>
                </div>

                <h3 className="text-xs sm:text-lg font-bold text-slate-900 group-hover:text-[#735ae5] transition-colors leading-snug truncate sm:whitespace-normal">
                  {item.name}
                </h3>
                <p className="text-[10px] sm:text-sm text-slate-600 mt-1.5 sm:mt-2 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
