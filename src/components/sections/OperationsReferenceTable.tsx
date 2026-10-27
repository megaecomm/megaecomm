"use client";

import React, { useState, useMemo } from "react";
import {
  FileText,
  Search,
  CheckCircle2,
  Layers,
  Shield,
  ArrowUpRight,
  Server,
} from "lucide-react";
import { ADMIN_OPERATIONS_SUMMARY, AdminOperation } from "@/data/platform-catalog";

export default function OperationsReferenceTable() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Store & Catalog", "Orders", "Inventory", "Logistics", "Customer CRM", "WhatsApp", "Security", "Analytics"];

  const filteredRows = useMemo(() => {
    return ADMIN_OPERATIONS_SUMMARY.filter((row) => {
      const matchesCategory =
        selectedCategory === "All" || row.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        row.module.toLowerCase().includes(q) ||
        row.actions.toLowerCase().includes(q) ||
        row.primaryOutput.toLowerCase().includes(q) ||
        row.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="docs" className="py-16 sm:py-20 bg-white border-t border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight">
            Administrative Operations Summary
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Quick-reference mapping of administrative actions and their real-time system outputs across all back-office operational desks.
          </p>
        </div>

        {/* Architecture & Scope Banner */}
        <div className="mb-10 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-50 via-purple-50/20 to-white border border-slate-200 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="text-xs font-mono font-bold text-[#735ae5] uppercase tracking-wider mb-1">
                Target Audience
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                D2C brands, multi-category retailers, growing omnichannel businesses, and merchants migrating from Shopify.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="text-xs font-mono font-bold text-[#00aa6c] uppercase tracking-wider mb-1">
                Core Purpose
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Unify cataloging, order fulfillment, stock sync, WhatsApp messaging, shipping rates, and executive BI.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="text-xs font-mono font-bold text-[#d97706] uppercase tracking-wider mb-1">
                Architecture Scope
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Modern Headless E-Commerce Architecture with dedicated high-speed REST Storefront API (/api/shop/*).
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#735ae5] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search module..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#735ae5]"
            />
          </div>
        </div>

        {/* Mobile View: Clean Responsive Cards (Zero Cut-off, Zero Overlap) */}
        <div className="sm:hidden space-y-3">
          {filteredRows.map((row, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5"
            >
              {/* Header: Module Name & Category */}
              <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm leading-snug">
                  {row.module}
                </h4>
                <span className="text-[10px] font-mono font-bold text-[#735ae5] bg-[#735ae5]/10 px-2 py-0.5 rounded shrink-0 border border-[#735ae5]/15">
                  {row.category}
                </span>
              </div>

              {/* Administrative Actions */}
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Key Administrative Actions
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {row.actions}
                </p>
              </div>

              {/* Primary Operational Output */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Primary Operational Output
                </span>
                <div className="flex items-start gap-1.5 text-xs text-slate-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{row.primaryOutput}</span>
                </div>
              </div>
            </div>
          ))}
          {filteredRows.length === 0 && (
            <div className="text-center py-8 text-xs text-slate-400 bg-white rounded-2xl border border-slate-200">
              No modules found matching your search.
            </div>
          )}
        </div>

        {/* Desktop & Tablet Table View */}
        <div className="hidden sm:block rounded-2xl border border-slate-200 overflow-hidden shadow-xs bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                  <th className="py-3 px-4 font-mono uppercase text-[11px] tracking-wider w-1/4">
                    Operational Module
                  </th>
                  <th className="py-3 px-4 font-mono uppercase text-[11px] tracking-wider w-5/12">
                    Key Administrative Actions
                  </th>
                  <th className="py-3 px-4 font-mono uppercase text-[11px] tracking-wider w-1/3">
                    Primary Operational Output
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-normal">
                {filteredRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-900">{row.module}</div>
                      <span className="text-[10px] font-mono font-bold text-[#735ae5] bg-[#735ae5]/10 px-2 py-0.5 rounded mt-1 inline-block border border-[#735ae5]/15">
                        {row.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 leading-relaxed">
                      {row.actions}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-start gap-1.5 text-slate-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{row.primaryOutput}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
