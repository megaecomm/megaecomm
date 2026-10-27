"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Package,
  ShoppingCart,
  Boxes,
  Users,
  BarChart3,
  Cpu,
  CheckCircle2,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import ProductCatalogMock from "@/components/dashboard/ProductCatalogMock";
import OrderLifecycleMock from "@/components/dashboard/OrderLifecycleMock";
import InventoryRadarMock from "@/components/dashboard/InventoryRadarMock";
import Customer360Mock from "@/components/dashboard/Customer360Mock";
import AnalyticsChartMock from "@/components/dashboard/AnalyticsChartMock";
import AutomationWorkflowMock from "@/components/dashboard/AutomationWorkflowMock";
import { PLATFORM_TABS } from "@/data/features";
import { Button } from "@/components/ui/Button";

// Curated Shiprocket & high-contrast vibrant palette themes
const CARD_THEMES = [
  {
    gradient: "from-[#f5f3ff] via-[#faf8ff] to-white",
    border: "border-[#735ae5]/30",
    pillBg: "bg-[#735ae5] text-white",
    iconColor: "text-[#735ae5]",
    badgeBg: "bg-[#735ae5]/10 text-[#735ae5] border-[#735ae5]/20",
    shadow: "shadow-[0_24px_50px_-15px_rgba(115,90,229,0.18)]",
    glow: "rgba(115,90,229,0.15)",
    accentDot: "bg-[#735ae5]",
  },
  {
    gradient: "from-[#e0f7fe] via-[#f0fbfd] to-white",
    border: "border-[#7ecdf5]/70",
    pillBg: "bg-[#0ea5e9] text-white",
    iconColor: "text-[#0284c7]",
    badgeBg: "bg-sky-100 text-sky-800 border-sky-200",
    shadow: "shadow-[0_24px_50px_-15px_rgba(14,165,233,0.18)]",
    glow: "rgba(14,165,233,0.15)",
    accentDot: "bg-[#7ecdf5]",
  },
  {
    gradient: "from-[#e6fffa] via-[#f0fdf4] to-white",
    border: "border-[#00d084]/40",
    pillBg: "bg-[#00d084] text-[#141413]",
    iconColor: "text-[#00aa6c]",
    badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
    shadow: "shadow-[0_24px_50px_-15px_rgba(0,208,132,0.18)]",
    glow: "rgba(0,208,132,0.15)",
    accentDot: "bg-[#00d084]",
  },
  {
    gradient: "from-[#fff7ed] via-[#fffbeb] to-white",
    border: "border-[#fcbc69]/60",
    pillBg: "bg-[#f59e0b] text-white",
    iconColor: "text-[#d97706]",
    badgeBg: "bg-amber-100 text-amber-800 border-amber-200",
    shadow: "shadow-[0_24px_50px_-15px_rgba(245,158,11,0.18)]",
    glow: "rgba(245,158,11,0.15)",
    accentDot: "bg-[#fcbc69]",
  },
  {
    gradient: "from-[#ede9fe] via-[#f5f3ff] to-white",
    border: "border-[#9069fc]/40",
    pillBg: "bg-[#9069fc] text-white",
    iconColor: "text-[#735ae5]",
    badgeBg: "bg-purple-100 text-purple-800 border-purple-200",
    shadow: "shadow-[0_24px_50px_-15px_rgba(144,105,252,0.18)]",
    glow: "rgba(144,105,252,0.15)",
    accentDot: "bg-[#9069fc]",
  },
  {
    gradient: "from-[#fdf2f8] via-[#fff1f2] to-white",
    border: "border-rose-300/80",
    pillBg: "bg-rose-500 text-white",
    iconColor: "text-rose-600",
    badgeBg: "bg-rose-100 text-rose-800 border-rose-200",
    shadow: "shadow-[0_24px_50px_-15px_rgba(244,63,94,0.18)]",
    glow: "rgba(244,63,94,0.15)",
    accentDot: "bg-rose-500",
  },
];

export default function PlatformTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PLATFORM_TABS[0].id);

  // Performance-optimized IntersectionObserver replacing synchronous layout-thrashing scroll listener
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-tab-id");
            if (cardId) {
              setActiveTabId((prev) => (prev === cardId ? prev : cardId));
            }
          }
        });
      },
      {
        // Active focus line: 80px down from top (below navbar) to 55% of screen
        rootMargin: "-80px 0px -55% 0px",
        threshold: 0.05,
      }
    );

    PLATFORM_TABS.forEach((tab) => {
      const el = document.getElementById(`platform-card-${tab.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getTabIcon = (iconName: string) => {
    switch (iconName) {
      case "Package":
        return Package;
      case "ShoppingCart":
        return ShoppingCart;
      case "Boxes":
        return Boxes;
      case "Users":
        return Users;
      case "BarChart3":
        return BarChart3;
      case "Cpu":
      default:
        return Cpu;
    }
  };

  const renderDashboardMock = (id: string) => {
    switch (id) {
      case "products":
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

  const scrollToCard = (id: string) => {
    const el = document.getElementById(`platform-card-${id}`);
    if (el) {
      const targetOffset = 80;
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -targetOffset, duration: 0.9 });
      } else {
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - targetOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section id="platform" className="py-10 sm:py-14 lg:py-16 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.14]">
            Everything Your Commerce Business Needs. In One Platform.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3.5 leading-relaxed">
            Scroll down to watch each operational module stack into view seamlessly like a deck of smart capability cards.
          </p>

          {/* Quick Jump Navigation Pills with Active State - 2-col on mobile, flex on sm+ */}
          <div className="mt-5 sm:mt-7 grid grid-cols-2 xs:grid-cols-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-1.5 sm:gap-2 px-1">
            {PLATFORM_TABS.map((tab, idx) => {
              const Icon = getTabIcon(tab.iconName);
              const theme = CARD_THEMES[idx % CARD_THEMES.length];
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToCard(tab.id)}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3.5 py-2 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all cursor-pointer text-center ${
                    isActive
                      ? "bg-[#735ae5] text-white shadow-md shadow-[#735ae5]/30 border border-[#735ae5]"
                      : "bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:shadow-xs"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 ${isActive ? "bg-white" : theme.accentDot}`} />
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-slate-500"}`} />
                  <span className="truncate">{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stacked Sticky Cards Container (Smooth Shiprocket Deck Style) */}
        <div className="space-y-6 sm:space-y-8 relative">
          {PLATFORM_TABS.map((tab, idx) => {
            const Icon = getTabIcon(tab.iconName);
            const theme = CARD_THEMES[idx % CARD_THEMES.length];
            
            // Staggered top offset for laptop vs desktop to guarantee clean stacked layered header peeking
            // Stacks cleanly at 80px + 12px per card
            const topOffsetDesktop = 80 + idx * 12;

            return (
              <div
                key={tab.id}
                id={`platform-card-${tab.id}`}
                data-tab-id={tab.id}
                style={{
                  top: `${topOffsetDesktop}px`,
                  zIndex: idx + 10,
                }}
                className={`lg:sticky rounded-2xl sm:rounded-[32px] lg:rounded-[36px] xl:rounded-[40px] p-3.5 sm:p-7 md:p-8 lg:p-8 xl:p-10 border ${theme.border} bg-gradient-to-br ${theme.gradient} shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.06),0_18px_45px_-12px_rgba(0,0,0,0.1)] transform-gpu`}
              >
                {/* Card Top Header: Step Indicator Pill + Icon Squircle + Module Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-black/5">
                  <div className="flex items-start sm:items-center gap-2.5 sm:gap-4 min-w-0 flex-1">
                    
                    {/* Index Counter Pill (e.g. 1/6) */}
                    <span className={`text-[11px] sm:text-sm font-mono font-bold px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full ${theme.pillBg} shadow-xs flex items-center gap-1.5 shrink-0 mt-0.5 sm:mt-0`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>{idx + 1}/{PLATFORM_TABS.length}</span>
                    </span>

                    {/* White Rounded Square Icon Box */}
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-md flex items-center justify-center border border-black/5 shrink-0 mt-0.5 sm:mt-0 group-hover:scale-105 transition-transform">
                      <Icon className={`w-4 h-4 sm:w-6 sm:h-6 ${theme.iconColor}`} />
                    </div>

                    {/* Title & Mobile Badge */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-xl lg:text-[22px] xl:text-2xl 2xl:text-3xl font-bold text-slate-900 tracking-tight leading-snug break-words">
                        {tab.tagline}
                      </h3>
                      <span className={`inline-block sm:hidden text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-1 ${theme.badgeBg}`}>
                        {tab.badge}
                      </span>
                    </div>
                  </div>

                  {/* Desktop Category Badge */}
                  <div className="hidden sm:block shrink-0">
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${theme.badgeBg}`}>
                      {tab.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body: Preserving 100% of the original content & mockup */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 xl:gap-10 items-center">
                  
                  {/* Left Column: Descriptions, Features & Stats */}
                  <div className="lg:col-span-5 space-y-3.5 sm:space-y-5">
                    <p className="text-xs sm:text-base text-slate-700 leading-relaxed font-normal">
                      {tab.description}
                    </p>

                    {/* Feature Bullets */}
                    <div className="space-y-2 sm:space-y-2.5 pt-1">
                      {tab.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tab Metrics */}
                    {tab.stats && (
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2 sm:pt-3 border-t border-black/5">
                        {tab.stats.map((stat, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-2.5 sm:p-3.5 bg-white/95 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs backdrop-blur-xs"
                          >
                            <div className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">{stat.label}</div>
                            <div className="text-sm sm:text-lg font-bold text-slate-900 font-mono mt-0.5">
                              {stat.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-1 sm:pt-2">
                      <Button
                        href={`/features#${tab.id}`}
                        variant="outline"
                        size="sm"
                        withArrow
                        className="bg-white hover:bg-slate-50 border-slate-300 shadow-2xs text-xs sm:text-sm"
                      >
                        Deep Dive Into {tab.title}
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Original Live Mockup Component in a Clean Cockpit Frame */}
                  <div className="lg:col-span-7 mt-3 lg:mt-0">
                    <div className="rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#141413]">
                      {/* Browser Cockpit Chrome Bar */}
                      <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#1c1c1a] border-b border-white/10 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose-500/80" />
                          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#fcbc69]/80" />
                          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#00d084]/80" />
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 bg-[#141413] px-2 sm:px-2.5 py-0.5 rounded-full border border-white/10 truncate max-w-[170px] sm:max-w-none">
                          megaecomm.internal/{tab.id}
                        </div>
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00d084] animate-pulse shrink-0" />
                      </div>

                      {/* Mockup Content */}
                      <div className="overflow-x-auto no-scrollbar w-full">
                        {renderDashboardMock(tab.id)}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
