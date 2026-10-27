"use client";

import React from "react";
import { Globe, Store, Smartphone, ShoppingBag, Radio, ArrowRight, Zap, Check } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export default function MultiChannelGrid() {
  const channels = [
    {
      name: "Online Store (D2C)",
      desc: "Shopify, WooCommerce, Custom Next.js Storefronts",
      icon: Globe,
      color: "text-[#735ae5] bg-[#735ae5]/10 border-[#735ae5]/20",
      status: "Bidirectional Webhooks (<60ms)",
    },
    {
      name: "Marketplaces",
      desc: "Amazon India, Flipkart, Myntra, Nykaa",
      icon: ShoppingBag,
      color: "text-[#d97706] bg-amber-50 border-amber-200",
      status: "Automated SP-API Catalog & FBM Sync",
    },
    {
      name: "Physical Retail POS",
      desc: "In-store cash registers, barcode scanners & kiosks",
      icon: Store,
      color: "text-[#00aa6c] bg-emerald-50 border-emerald-200",
      status: "Instant Offline Inventory Decrement",
    },
    {
      name: "Mobile Commerce Apps",
      desc: "Native iOS, Android & Flutter shopping apps",
      icon: Smartphone,
      color: "text-[#0284c7] bg-sky-50 border-sky-200",
      status: "Push Notification & In-App Checkout API",
    },
    {
      name: "Social & Conversational",
      desc: "WhatsApp Commerce, Instagram Shop & Meta CAPI",
      icon: Radio,
      color: "text-rose-600 bg-rose-50 border-rose-200",
      status: "Direct Catalog Checkout Links",
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-18 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-12">
          <Reveal direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[42px] font-bold text-slate-900 tracking-tight">
              One Platform. Multiple Commerce Channels.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Sell across web, marketplaces, retail POS, and messaging apps without maintaining separate stock pools or risking cancellations.
            </p>
          </Reveal>
        </div>

        {/* Central Core with Radial Channel Cards in 2-Column Mobile Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <Reveal key={channel.name} delay={i * 0.08} direction="up">
                <div className="h-full p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-[#735ae5]/40 hover:bg-white hover:shadow-[0_16px_36px_-8px_rgba(115,90,229,0.1)] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2.5 sm:mb-4 gap-1.5 sm:gap-2">
                      <div className={`w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center border ${channel.color}`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-full border border-emerald-200 flex items-center gap-1">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Live Sync
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-lg font-bold text-slate-900 group-hover:text-[#735ae5] transition-colors leading-snug sm:leading-snug">
                      {channel.name}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-slate-600 mt-1 sm:mt-1.5 leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {channel.desc}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-slate-200 text-[10px] sm:text-[11px] font-mono text-slate-500 truncate">
                    {channel.status}
                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* Central Orchestrator Card - Clean Light Styling Matching Other Cards */}
          <Reveal delay={0.4} direction="up">
            <div className="h-full p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-[#735ae5]/40 hover:bg-white hover:shadow-[0_16px_36px_-8px_rgba(115,90,229,0.1)] transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2.5 sm:mb-4 gap-1.5 sm:gap-2">
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center border bg-[#735ae5]/10 text-[#735ae5] border-[#735ae5]/20">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#735ae5]" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#735ae5] bg-[#735ae5]/10 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-full border border-[#735ae5]/20 flex items-center gap-1">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Core Engine
                  </span>
                </div>

                <h3 className="text-xs sm:text-lg font-bold text-slate-900 group-hover:text-[#735ae5] transition-colors leading-snug sm:leading-snug">
                  Unified State Orchestration
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-600 mt-1 sm:mt-1.5 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  When a unit sells on Amazon, stock decreases on Shopify and POS simultaneously. Zero drift. Zero overselling.
                </p>
              </div>

              <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-slate-200 text-[10px] sm:text-[11px] font-mono text-slate-500 truncate">
                Single Source of Truth
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
