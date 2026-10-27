"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Package,
  Layers,
  Sliders,
  BookOpen,
  ShoppingCart,
  PhoneCall,
  ShoppingBag,
  Printer,
  RotateCcw,
  Boxes,
  FileSpreadsheet,
  Truck,
  Receipt,
  Tag,
  MessageSquare,
  Users,
  Star,
  Heart,
  BellRing,
  RefreshCw,
  Globe,
  ShieldCheck,
  BarChart3,
  Code2,
  Compass,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  Filter,
} from "lucide-react";
import {
  PLATFORM_CATALOG,
  CATALOG_DOMAINS,
  CatalogItem,
} from "@/data/platform-catalog";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Package":
      return Package;
    case "Layers":
      return Layers;
    case "Sliders":
      return Sliders;
    case "BookOpen":
      return BookOpen;
    case "ShoppingCart":
      return ShoppingCart;
    case "PhoneCall":
      return PhoneCall;
    case "ShoppingBag":
      return ShoppingBag;
    case "Printer":
      return Printer;
    case "RotateCcw":
      return RotateCcw;
    case "Boxes":
      return Boxes;
    case "FileSpreadsheet":
      return FileSpreadsheet;
    case "Truck":
      return Truck;
    case "Receipt":
      return Receipt;
    case "Tag":
      return Tag;
    case "MessageSquare":
      return MessageSquare;
    case "Users":
      return Users;
    case "Star":
      return Star;
    case "Heart":
      return Heart;
    case "BellRing":
      return BellRing;
    case "RefreshCw":
      return RefreshCw;
    case "Globe":
      return Globe;
    case "ShieldCheck":
      return ShieldCheck;
    case "BarChart3":
      return BarChart3;
    case "Code2":
      return Code2;
    case "Compass":
      return Compass;
    case "Building2":
      return Building2;
    default:
      return Layers;
  }
};

export default function FeatureCatalogExplorer() {
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = useMemo(() => {
    return PLATFORM_CATALOG.filter((item) => {
      const matchesDomain =
        selectedDomain === "all" || item.domainSlug === selectedDomain;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.shortDesc.toLowerCase().includes(query) ||
        item.domain.toLowerCase().includes(query) ||
        item.whatYouCanDo.some((c) => c.toLowerCase().includes(query)) ||
        item.businessBenefit.toLowerCase().includes(query);
      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  return (
    <section id="full-catalog" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-slate-900 tracking-tight">
            All 24 Operational Platform Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Transparent, human-readable specifications straight from our verified project documentation. Zero jargon, 100% operational clarity.
          </p>
        </div>

        {/* Filter Controls: Domain Pills & Instant Search */}
        <div className="space-y-4 mb-10 max-w-5xl mx-auto">
          {/* Domain Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATALOG_DOMAINS.map((domain) => {
              const isSelected = selectedDomain === domain.id;
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#735ae5] text-white shadow-md shadow-[#735ae5]/25 border border-[#735ae5]"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {domain.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search features (e.g., invoices, whatsapp, POs, metafields)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#735ae5]/20 focus:border-[#735ae5] transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-center text-xs text-slate-500 font-mono">
            Showing <span className="font-bold text-slate-900">{filteredItems.length}</span> capabilities
          </div>
        </div>

        {/* Feature Cards Grid in 2-Column Mobile Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
          {filteredItems.map((item) => {
            const Icon = getIcon(item.iconName);
            const isAvailable = item.status === "Available";

            return (
              <div
                key={item.id}
                className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#735ae5]/40 hover:shadow-md hover:shadow-[#735ae5]/5 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon + Domain + Status Badge */}
                  <div className="flex items-center justify-between gap-1 sm:gap-2 mb-2.5 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3 truncate">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#735ae5]/10 text-[#735ae5] flex items-center justify-center border border-[#735ae5]/20 group-hover:scale-105 transition-transform shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="truncate">
                        <span className="text-[9px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 truncate block">
                          {item.domain}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full border flex items-center gap-1 shrink-0 ${
                        isAvailable
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-amber-50 text-amber-700 border-amber-200"
                      }`}
                    >
                      <span
                        className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${
                          isAvailable ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                        }`}
                      />
                      <span className="hidden sm:inline">{item.status}</span>
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#735ae5] transition-colors">
                    {item.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[10px] sm:text-xs text-slate-600 mt-1 sm:mt-2 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                    {item.shortDesc}
                  </p>

                  {/* What you can do bullets (desktop/tablet for deep detail, compact on mobile) */}
                  <div className="hidden sm:block mt-4 pt-3 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Core Operations:
                    </div>
                    {item.whatYouCanDo.map((action, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer: Business Benefit Callout */}
                <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-slate-100">
                  <div className="text-[10px] sm:text-[11px] text-slate-600 bg-slate-50 p-1.5 sm:p-2.5 rounded-xl border border-slate-200/70 leading-snug line-clamp-2 sm:line-clamp-none">
                    <span className="font-semibold text-slate-900">Value: </span>
                    {item.businessBenefit}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto p-8">
            <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">No capabilities found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with another keyword like &quot;orders&quot;, &quot;inventory&quot;, &quot;whatsapp&quot;, or &quot;shopify&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDomain("all");
              }}
              className="mt-4 px-4 py-1.5 rounded-full bg-[#735ae5] text-white text-xs font-semibold hover:bg-[#5f45d4]"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
