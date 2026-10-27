"use client";

import React, { useState } from "react";
import { Check, X, HelpCircle } from "lucide-react";
import { PRICING_TIERS, PRICING_FAQ } from "@/data/pricing";
import { Button } from "@/components/ui/Button";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const comparisonRows = [
    { feature: "Monthly Order Volume", starter: "Up to 2,500", growth: "Up to 15,000", business: "Up to 60,000", enterprise: "Unlimited" },
    { feature: "Active SKU Limit", starter: "5,000", growth: "50,000", business: "Unlimited", enterprise: "Unlimited" },
    { feature: "Connected Sales Channels", starter: "2 Channels", growth: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
    { feature: "Multi-Warehouse Locations", starter: "1 Location", growth: "Up to 5", business: "Unlimited", enterprise: "Unlimited" },
    { feature: "Automated Carrier Routing", starter: false, growth: true, business: true, enterprise: true },
    { feature: "Workflow Automation Recipes", starter: "5 Active", growth: "20 Active", business: "Unlimited", enterprise: "Custom Engine" },
    { feature: "WhatsApp Tracking Updates", starter: false, growth: true, business: true, enterprise: true },
    { feature: "Real-time Gross Margin BI", starter: false, growth: false, business: true, enterprise: true },
    { feature: "Dedicated Database & VPC", starter: false, growth: false, business: false, enterprise: true },
    { feature: "Guaranteed SLA", starter: "99.5%", growth: "99.9%", business: "99.95%", enterprise: "99.99%" },
    { feature: "Support SLA", starter: "Email (24h)", growth: "Priority Chat", business: "Phone & Dedicated AM", enterprise: "24/7 Dedicated SRE" },
  ];

  return (
    <div className="pt-24 sm:pt-32">
      {/* Hero */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto">
          Simple, Transparent Plans. Zero GMV Commissions.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
          Scale your orders without watching your SaaS bill eat into your gross profit margins.
        </p>

        {/* Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-sm font-semibold ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 rounded-full bg-slate-800 p-1 relative transition-colors cursor-pointer"
            aria-label="Toggle Annual Billing"
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                isAnnual ? "translate-x-7 bg-[#735ae5]" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm font-semibold flex items-center gap-1.5 ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
            Annual Billing
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#00d084]/15 text-[#00aa6c] border border-[#00d084]/30">
              SAVE 20%
            </span>
          </span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {PRICING_TIERS.map((tier) => {
            const rawPrice = isAnnual ? tier.priceYearly : tier.priceMonthly;
            const displayPrice =
              typeof rawPrice === "number"
                ? `₹${new Intl.NumberFormat("en-IN").format(rawPrice)}`
                : rawPrice;

            return (
              <div
                key={tier.id}
                className={`p-6 sm:p-7 lg:p-6 xl:p-6 2xl:p-7 rounded-3xl transition-all duration-200 flex flex-col justify-between ${
                  tier.isPopular
                    ? "bg-[#141413] text-white border-2 border-[#735ae5] shadow-2xl shadow-[#735ae5]/20"
                    : "bg-white text-slate-900 border border-slate-200 shadow-2xs hover:border-[#735ae5]/40"
                }`}
              >
                <div>
                  <div className="text-xs font-mono font-bold tracking-wider uppercase opacity-75">
                    {tier.name}
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight font-mono">
                      {displayPrice}
                    </span>
                    {tier.billingPeriod && (
                      <span className={`text-xs ${tier.isPopular ? "text-slate-400" : "text-slate-500"}`}>
                        {tier.billingPeriod}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-3 leading-relaxed ${tier.isPopular ? "text-slate-300" : "text-slate-600"}`}>
                    {tier.description}
                  </p>

                  <div className={`mt-6 pt-6 border-t ${tier.isPopular ? "border-white/10" : "border-slate-100"} space-y-2.5`}>
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${tier.isPopular ? "text-[#7ecdf5]" : "text-[#735ae5]"}`} />
                        <span className={tier.isPopular ? "text-slate-200" : "text-slate-700"}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Button
                    href={tier.ctaHref}
                    variant={tier.isPopular ? "primary" : "outline"}
                    className="w-full text-xs py-3"
                  >
                    {tier.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Compare Plan Capabilities
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Detailed breakdown of what is included in each operational tier.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-900 border-b border-slate-200 font-bold">
                <th className="p-4">Platform Feature</th>
                <th className="p-4 text-center">Starter</th>
                <th className="p-4 text-center bg-[#735ae5]/10 text-[#735ae5]">Growth</th>
                <th className="p-4 text-center">Business</th>
                <th className="p-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 font-medium text-slate-900">{row.feature}</td>

                  {/* Starter */}
                  <td className="p-4 text-center text-slate-600 font-mono text-xs">
                    {typeof row.starter === "boolean" ? (
                      row.starter ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 mx-auto" />
                      )
                    ) : (
                      row.starter
                    )}
                  </td>

                  {/* Growth */}
                  <td className="p-4 text-center bg-[#735ae5]/5 text-slate-900 font-mono text-xs font-semibold">
                    {typeof row.growth === "boolean" ? (
                      row.growth ? (
                        <Check className="w-4 h-4 text-[#735ae5] mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 mx-auto" />
                      )
                    ) : (
                      row.growth
                    )}
                  </td>

                  {/* Business */}
                  <td className="p-4 text-center text-slate-600 font-mono text-xs">
                    {typeof row.business === "boolean" ? (
                      row.business ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 mx-auto" />
                      )
                    ) : (
                      row.business
                    )}
                  </td>

                  {/* Enterprise */}
                  <td className="p-4 text-center text-slate-900 font-mono text-xs font-bold">
                    {typeof row.enterprise === "boolean" ? (
                      row.enterprise ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 mx-auto" />
                      )
                    ) : (
                      row.enterprise
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing Specific FAQs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Billing &amp; Subscription Questions
          </h2>
          <div className="space-y-4">
            {PRICING_FAQ.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-semibold text-slate-900">{faq.q}</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
