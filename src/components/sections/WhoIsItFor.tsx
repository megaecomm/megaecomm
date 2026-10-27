"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, Store, Building2, Globe2, ArrowRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export default function WhoIsItFor() {
  const personas = [
    {
      id: "d2c",
      title: "D2C Brands",
      headline: "Manage Your Growing Online Business",
      desc: "Synchronize Shopify, marketplaces, and WhatsApp checkouts while eliminating RTOs and overselling during flash drops.",
      icon: ShoppingBag,
      tag: "Direct to Consumer",
      metric: "4.2x Faster Fulfillment",
    },
    {
      id: "retail",
      title: "Omnichannel Retailers",
      headline: "Bring Operations & Inventory Together",
      desc: "Pool inventory across retail outlets and dark stores for ship-from-store, BOPIS, and unified loyalty rewards.",
      icon: Store,
      tag: "Store & Web",
      metric: "99.8% Inventory Accuracy",
    },
    {
      id: "wholesale",
      title: "Wholesale & Bulk",
      headline: "Manage Larger Volumes & Dealer Accounts",
      desc: "Tiered buyer price lists, custom credit terms, automated GST invoicing, and multi-pallet freight carrier bookings.",
      icon: Building2,
      tag: "Wholesale & Distribution",
      metric: "5x Faster Bulk Order Entry",
    },
    {
      id: "enterprise",
      title: "Global Enterprise",
      headline: "Build Scalable Commerce Operations",
      desc: "Dedicated cloud VPC instances, custom SAP/Oracle ERP integrations, and financial-grade 99.99% availability SLAs.",
      icon: Globe2,
      tag: "Enterprise Scale",
      metric: "<45ms API Latency",
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-18 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-12">
          <Reveal direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[42px] font-bold text-slate-900 tracking-tight">
              Built for Businesses That Want to Scale.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed font-normal">
              Whether you are an emerging direct-to-consumer label or a multi-brand retail conglomerate, Mega Ecomm fits your operational stage.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2.5 sm:gap-5 lg:gap-6">
          {personas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={idx * 0.08} direction="up">
                <Link
                  href={`/solutions#${item.id}`}
                  className="h-full p-3.5 sm:p-6 xl:p-6 2xl:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 hover:border-[#735ae5]/40 hover:shadow-[0_16px_36px_-8px_rgba(115,90,229,0.12)] shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#735ae5]/10 border border-[#735ae5]/20 flex items-center justify-center text-[#735ae5] group-hover:scale-105 transition-transform duration-250">
                        <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-500 bg-slate-50 px-1.5 py-0.5 sm:px-2 rounded border border-slate-200 truncate max-w-[80px] sm:max-w-none">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-lg lg:text-base xl:text-lg font-bold text-slate-900 group-hover:text-[#735ae5] transition-colors tracking-tight leading-snug sm:leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-[11px] sm:text-xs font-semibold text-[#735ae5] mt-0.5 sm:mt-1 line-clamp-1">
                      {item.headline}
                    </div>
                    <p className="text-[11px] sm:text-sm text-slate-600 mt-1 sm:mt-2.5 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-900 truncate">
                      {item.metric}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-[#735ae5] flex items-center gap-0.5 sm:gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Explore</span> <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
