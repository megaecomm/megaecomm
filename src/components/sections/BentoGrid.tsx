"use client";

import React from "react";
import {
  Package,
  Zap,
  Cpu,
  BarChart3,
  Truck,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  MessageCircle,
  Building2,
  MapPin,
} from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export default function BentoGrid() {
  return (
    <section className="py-10 sm:py-16 lg:py-18 bg-slate-50/50 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-12">
          <Reveal direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[42px] font-bold text-slate-900 tracking-tight">
              Powerful Features. Simple Experience.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed font-normal">
              Engineered with extreme precision to give modern operators instant superpowers across their stack.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-2.5 sm:gap-5 lg:gap-6">
          {/* Card 1: 7 cols - Master Catalog & Metafields */}
          <div className="col-span-2 lg:col-span-7 p-4 sm:p-7 lg:p-6 xl:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#735ae5]/40 hover:shadow-[0_16px_36px_-8px_rgba(115,90,229,0.1)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-2.5 sm:mb-3 gap-2">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-[#735ae5] bg-[#735ae5]/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-[#735ae5]/20">
                  CATALOG &amp; METAFIELDS
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-[#00aa6c] font-bold bg-[#00d084]/15 px-1.5 sm:px-2 py-0.5 rounded border border-[#00d084]/25 truncate">
                  Dynamic Metafields Active
                </span>
              </div>
              <h3 className="text-base sm:text-2xl lg:text-xl xl:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#735ae5] transition-colors leading-snug">
                Unified Master Catalog &amp; Custom Metafields
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 sm:mt-2.5 max-w-lg leading-relaxed">
                Define products once with custom specifications, warranty badges, HS codes, and media assets. Native Custom Data (Metafields) sync effortlessly to all sales channels in sub-second background streams.
              </p>
            </div>

            {/* Visual Mini Mockup */}
            <div className="mt-4 sm:mt-6 p-2.5 sm:p-3.5 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#735ae5]/15 flex items-center justify-center text-[#735ae5] font-bold text-[10px] sm:text-xs shrink-0">
                  SKU
                </div>
                <div className="truncate">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm truncate">Aura Pro Noise Cancelling Headset</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-mono truncate">Battery (40h) • HS: 8518.30</div>
                </div>
              </div>
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-100/80 text-emerald-800 font-mono font-bold text-[10px] sm:text-[11px] border border-emerald-200 shrink-0 ml-2">
                Synced to 4 Stores
              </span>
            </div>
          </div>

          {/* Card 2: 5 cols - 1-Click Shopify Migration */}
          <div className="col-span-2 lg:col-span-5 p-4 sm:p-7 lg:p-6 xl:p-8 rounded-2xl sm:rounded-3xl bg-[#141413] text-white border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] hover:border-[#735ae5]/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-2.5 sm:mb-3 gap-2">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-[#7ecdf5] bg-[#735ae5]/20 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-[#735ae5]/40">
                  NATIVE MIGRATION
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-[#00d084] font-bold flex items-center gap-1">
                  <RefreshCw className="w-3 h-3 animate-spin text-[#00d084]" /> Zero Downtime
                </span>
              </div>
              <h3 className="text-base sm:text-2xl lg:text-xl xl:text-2xl font-bold text-white tracking-tight group-hover:text-[#7ecdf5] transition-colors leading-snug">
                1-Click Shopify Zero-Loss Migration
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 sm:mt-2.5 leading-relaxed font-normal">
                Seamlessly import your complete Shopify store in minutes: products, variant matrices, historical orders, draft orders, abandoned checkouts, collections, and blogs with 100% data fidelity.
              </p>
            </div>

            <div className="mt-4 sm:mt-6 p-2.5 sm:p-4 bg-[#1c1c1a] rounded-xl sm:rounded-2xl border border-white/10 font-mono text-[11px] sm:text-xs flex justify-between items-center">
              <span className="text-slate-300">Shopify Import:</span>
              <span className="text-xs sm:text-sm font-bold text-[#00d084]">10,480 Records</span>
            </div>
          </div>

          {/* Card 3: 4 cols - WhatsApp Commerce & OTP */}
          <div className="col-span-1 lg:col-span-4 p-3.5 sm:p-6 lg:p-5 xl:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#00d084]/50 hover:shadow-[0_14px_30px_-8px_rgba(0,208,132,0.1)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 text-[#00aa6c] flex items-center justify-center mb-2 sm:mb-3 border border-emerald-100">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[9px] sm:text-xs font-mono font-bold text-[#00aa6c] bg-[#00d084]/15 px-2 py-0.5 sm:py-1 rounded-md border border-[#00d084]/25 truncate block w-fit">
                WHATSAPP
              </span>
              <h4 className="text-xs sm:text-lg lg:text-base xl:text-xl font-bold text-slate-900 mt-2 sm:mt-3 tracking-tight leading-snug">WhatsApp OTP</h4>
              <p className="text-[11px] sm:text-sm text-slate-600 mt-1 sm:mt-2 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                1-click phone checkout with WhatsApp OTP authentication and delivery status tracking.
              </p>
            </div>
            <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-slate-100 text-[10px] sm:text-xs font-bold text-[#00aa6c] flex items-center gap-1 truncate">
              +34% Cart Recovery &rarr;
            </div>
          </div>

          {/* Card 4: 4 cols - Supplier Purchase Orders (POs) */}
          <div className="col-span-1 lg:col-span-4 p-3.5 sm:p-6 lg:p-5 xl:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#735ae5]/40 hover:shadow-[0_14px_30px_-8px_rgba(115,90,229,0.08)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#735ae5]/10 text-[#735ae5] flex items-center justify-center mb-2 sm:mb-3 border border-[#735ae5]/20">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[9px] sm:text-xs font-mono font-bold text-[#735ae5] bg-[#735ae5]/10 px-2 py-0.5 sm:py-1 rounded-md border border-[#735ae5]/20 truncate block w-fit">
                PROCUREMENT
              </span>
              <h4 className="text-xs sm:text-lg lg:text-base xl:text-xl font-bold text-slate-900 mt-2 sm:mt-3 tracking-tight leading-snug">Supplier POs</h4>
              <p className="text-[11px] sm:text-sm text-slate-600 mt-1 sm:mt-2 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                Draft vendor POs with unit costs, expected dates, and 1-click inventory increment.
              </p>
            </div>
            <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-slate-100 text-[10px] sm:text-xs font-bold text-[#735ae5] flex items-center gap-1 truncate">
              Auto Restocking &rarr;
            </div>
          </div>

          {/* Card 5: 4 cols - Built-in Order Printer & Box Packaging Profiles */}
          <div className="col-span-2 lg:col-span-4 p-3.5 sm:p-6 lg:p-5 xl:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#fcbc69]/60 hover:shadow-[0_14px_30px_-8px_rgba(252,188,105,0.1)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-50 text-[#d97706] flex items-center justify-center mb-2 sm:mb-3 border border-amber-100">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[9px] sm:text-xs font-mono font-bold text-[#d97706] bg-[#fcbc69]/20 px-2 py-0.5 sm:py-1 rounded-md border border-[#fcbc69]/35 truncate block w-fit">
                INVOICES &amp; PACKAGING
              </span>
              <h4 className="text-xs sm:text-lg lg:text-base xl:text-xl font-bold text-slate-900 mt-2 sm:mt-3 tracking-tight leading-snug">Order Printer &amp; Box Profiles</h4>
              <p className="text-[11px] sm:text-sm text-slate-600 mt-1 sm:mt-2 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                1-click printing for GST Tax Invoices, Packing Slips, and Delivery Notes, backed by standard parcel box profiles.
              </p>
            </div>
            <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-slate-100 text-[10px] sm:text-xs font-bold text-[#d97706] flex items-center gap-1">
              Zero 3rd-Party Invoicing Cost &rarr;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
