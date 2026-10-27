"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Zap } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { PRICING_TIERS } from "@/data/pricing";
import { Button } from "@/components/ui/Button";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-10 sm:py-16 lg:py-18 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-12">
          <Reveal direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[42px] font-bold text-slate-900 tracking-tight">
              Predictable Pricing Built for Scale.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Zero percentage cuts on your sales GMV. Switch or cancel anytime with full data ownership.
            </p>
          </Reveal>

          {/* Billing Toggle: Monthly vs Yearly (20% Off) */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm font-semibold ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-slate-800 p-1 relative transition-colors cursor-pointer focus:outline-none ring-2 ring-[#735ae5]/20"
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
        </div>

        {/* 4 Pricing Cards Grid (2x2 on small laptops for spacious readability, 4 cols on wide screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {PRICING_TIERS.map((tier, idx) => {
            const rawPrice = isAnnual ? tier.priceYearly : tier.priceMonthly;
            const displayPrice =
              typeof rawPrice === "number"
                ? `₹${new Intl.NumberFormat("en-IN").format(rawPrice)}`
                : rawPrice;

            return (
              <Reveal key={tier.id} delay={idx * 0.08} direction="up">
                <div
                  className={`h-full p-6 sm:p-7 lg:p-6 xl:p-6 2xl:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between relative ${
                    tier.isPopular
                      ? "bg-[#141413] text-white border-2 border-[#735ae5] shadow-2xl shadow-[#735ae5]/25 ring-1 ring-[#735ae5]"
                      : "bg-white text-slate-900 border border-slate-200/90 shadow-2xs hover:border-[#735ae5]/40 hover:shadow-lg"
                  }`}
                >
                  {tier.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#735ae5] to-[#9069fc] text-white text-[11px] font-bold tracking-wide uppercase shadow-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d084] animate-pulse" /> Most Popular
                    </div>
                  )}

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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
