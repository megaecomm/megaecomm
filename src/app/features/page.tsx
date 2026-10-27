import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PLATFORM_TABS } from "@/data/features";
import ProductCatalogMock from "@/components/dashboard/ProductCatalogMock";
import OrderLifecycleMock from "@/components/dashboard/OrderLifecycleMock";
import InventoryRadarMock from "@/components/dashboard/InventoryRadarMock";
import Customer360Mock from "@/components/dashboard/Customer360Mock";
import AnalyticsChartMock from "@/components/dashboard/AnalyticsChartMock";
import AutomationWorkflowMock from "@/components/dashboard/AutomationWorkflowMock";
import FeatureCatalogExplorer from "@/components/sections/FeatureCatalogExplorer";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Platform Features — Complete E-Commerce Management Directory",
  description:
    "Explore the complete suite of eCommerce management tools: Product Catalog, Multi-Attribute Variants, Purchase Orders, WhatsApp OTP, Order Printer, and 3D Location Analytics.",
};

export default function FeaturesPage() {
  const getMockup = (type: string) => {
    switch (type) {
      case "catalog":
        return <ProductCatalogMock />;
      case "orders":
        return <OrderLifecycleMock />;
      case "inventory":
        return <InventoryRadarMock />;
      case "customers":
        return <Customer360Mock />;
      case "analytics":
        return <AnalyticsChartMock />;
      case "automation":
      default:
        return <AutomationWorkflowMock />;
    }
  };

  return (
    <div className="pt-24 sm:pt-32">
      {/* Features Page Hero */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto">
          Everything You Need to Run Modern Commerce.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
          Explore granular operational capabilities designed to replace disparate legacy software and streamline multi-channel fulfillment.
        </p>
      </section>

      {/* Deep Dive Modules List */}
      <div className="space-y-16 sm:space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {PLATFORM_TABS.map((feat, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <section
              key={feat.id}
              id={feat.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center scroll-mt-28 ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-5 space-y-5 ${isReversed ? "lg:order-2" : ""}`}>
                <span className="text-xs font-mono font-bold uppercase text-[#735ae5] bg-[#735ae5]/10 px-2.5 py-1 rounded-md border border-[#735ae5]/20">
                  MODULE 0{idx + 1} • {feat.badge}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[24px] xl:text-3xl font-bold text-slate-900">
                  {feat.tagline}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {feat.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  {feat.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {feat.stats && (
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200">
                    {feat.stats.map((s, i) => (
                      <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="text-xs text-slate-500">{s.label}</div>
                        <div className="text-lg font-bold text-slate-900 font-mono mt-0.5">{s.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={`lg:col-span-7 ${isReversed ? "lg:order-1" : ""}`}>
                {getMockup(feat.mockupType)}
              </div>
            </section>
          );
        })}
      </div>

      {/* Complete 24-Point Feature Directory from Official Documentation */}
      <FeatureCatalogExplorer />
    </div>
  );
}
