"use client";

import React from "react";
import {
  Layers,
  Clock,
  AlertTriangle,
  TrendingDown,
  Shuffle,
  Flame,
} from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { PROBLEM_CARDS } from "@/data/features";

interface CardTheme {
  iconBg: string;
  iconColor: string;
  iconBorder: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  dotColor: string;
  hoverBorder: string;
  hoverGlow: string;
  hoverTitle: string;
  accentGradient: string;
}

const CARD_THEMES: Record<string, CardTheme> = {
  tools: {
    iconBg: "bg-[#735ae5]/10",
    iconColor: "text-[#735ae5]",
    iconBorder: "border-[#735ae5]/20",
    badgeBg: "bg-[#735ae5]/10",
    badgeText: "text-[#735ae5]",
    badgeBorder: "border-[#735ae5]/20",
    dotColor: "bg-[#735ae5]",
    hoverBorder: "hover:border-[#735ae5]/40",
    hoverGlow: "hover:shadow-[0_16px_36px_-8px_rgba(115,90,229,0.14)]",
    hoverTitle: "group-hover:text-[#735ae5]",
    accentGradient: "from-[#735ae5] via-[#9069fc] to-[#735ae5]",
  },
  manual: {
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    iconBorder: "border-amber-100",
    badgeBg: "bg-amber-50/90",
    badgeText: "text-amber-800",
    badgeBorder: "border-amber-200/80",
    dotColor: "bg-amber-500",
    hoverBorder: "hover:border-amber-300",
    hoverGlow: "hover:shadow-[0_16px_36px_-8px_rgba(245,158,11,0.12)]",
    hoverTitle: "group-hover:text-amber-700",
    accentGradient: "from-amber-500 via-amber-600 to-orange-500",
  },
  inventory: {
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    iconBorder: "border-rose-100",
    badgeBg: "bg-rose-50/90",
    badgeText: "text-rose-700",
    badgeBorder: "border-rose-200/80",
    dotColor: "bg-rose-500",
    hoverBorder: "hover:border-rose-300",
    hoverGlow: "hover:shadow-[0_16px_36px_-8px_rgba(244,63,94,0.12)]",
    hoverTitle: "group-hover:text-rose-600",
    accentGradient: "from-rose-500 via-rose-600 to-red-600",
  },
  insights: {
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    iconBorder: "border-sky-100",
    badgeBg: "bg-sky-50/90",
    badgeText: "text-sky-700",
    badgeBorder: "border-sky-200/80",
    dotColor: "bg-sky-500",
    hoverBorder: "hover:border-sky-300",
    hoverGlow: "hover:shadow-[0_16px_36px_-8px_rgba(14,165,233,0.12)]",
    hoverTitle: "group-hover:text-sky-600",
    accentGradient: "from-sky-500 via-blue-600 to-[#735ae5]",
  },
  orders: {
    iconBg: "bg-[#735ae5]/10",
    iconColor: "text-[#735ae5]",
    iconBorder: "border-[#735ae5]/20",
    badgeBg: "bg-[#735ae5]/10",
    badgeText: "text-[#735ae5]",
    badgeBorder: "border-[#735ae5]/20",
    dotColor: "bg-[#735ae5]",
    hoverBorder: "hover:border-[#735ae5]/40",
    hoverGlow: "hover:shadow-[0_16px_36px_-8px_rgba(115,90,229,0.12)]",
    hoverTitle: "group-hover:text-[#735ae5]",
    accentGradient: "from-[#735ae5] via-[#9069fc] to-[#7ecdf5]",
  },
  infrastructure: {
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    iconBorder: "border-orange-100",
    badgeBg: "bg-orange-50/90",
    badgeText: "text-orange-800",
    badgeBorder: "border-orange-200/80",
    dotColor: "bg-orange-500",
    hoverBorder: "hover:border-orange-300",
    hoverGlow: "hover:shadow-[0_16px_36px_-8px_rgba(249,115,22,0.12)]",
    hoverTitle: "group-hover:text-orange-600",
    accentGradient: "from-orange-500 via-amber-600 to-rose-600",
  },
};

export default function ProblemSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return Layers;
      case "Clock":
        return Clock;
      case "AlertTriangle":
        return AlertTriangle;
      case "TrendingDown":
        return TrendingDown;
      case "Shuffle":
        return Shuffle;
      case "Flame":
      default:
        return Flame;
    }
  };

  return (
    <section className="py-10 sm:py-16 lg:py-18 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-12">
          <Reveal direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[42px] font-bold text-slate-900 tracking-tight">
              eCommerce Gets Complicated Fast.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed font-normal">
              As your order volume grows, point solutions and siloed spreadsheets create operational chaos, lost revenue, and exhausted teams.
            </p>
          </Reveal>
        </div>

        {/* 6 Problem Cards in Balanced 2-Column Grid on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
          {PROBLEM_CARDS.map((card, idx) => {
            const IconComponent = getIcon(card.icon);
            const theme = CARD_THEMES[card.id] || CARD_THEMES.tools;

            return (
              <Reveal key={card.id} delay={idx * 0.05} direction="up">
                <div
                  className={`group relative h-full p-3.5 sm:p-6 xl:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden ${theme.hoverBorder} ${theme.hoverGlow}`}
                >
                  {/* Subtle Top Accent Hairline on Hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div>
                    {/* Top Row: Icon + Stat Pill */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2.5 sm:mb-4 gap-1.5 sm:gap-2">
                      <div
                        className={`w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl ${theme.iconBg} border ${theme.iconBorder} flex items-center justify-center ${theme.iconColor} shadow-2xs group-hover:scale-105 transition-transform duration-250`}
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      <span
                        className={`inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider ${theme.badgeBg} ${theme.badgeText} px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg border ${theme.badgeBorder} font-mono`}
                      >
                        <span
                          className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${theme.dotColor}`}
                        />
                        <span className="truncate">{card.stat}</span>
                      </span>
                    </div>

                    {/* Headline */}
                    <h3
                      className={`text-xs sm:text-lg lg:text-base xl:text-lg font-bold text-slate-900 tracking-tight mb-1 sm:mb-2.5 transition-colors leading-snug sm:leading-snug ${theme.hoverTitle}`}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                      {card.description}
                    </p>
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
