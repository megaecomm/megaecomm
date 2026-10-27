"use client";

import React from "react";
import { CheckCircle2, TrendingUp, UserPlus, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  type: "delivered" | "inventory" | "customer" | "sale";
  className?: string;
  delay?: string;
}

export default function FloatingBadge({ type, className }: FloatingBadgeProps) {
  const configs = {
    delivered: {
      icon: CheckCircle2,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      title: "Order Delivered",
      subtitle: "#ORD-9428 • Just now",
      amount: "₹3,450",
      animation: "animate-float-slow",
    },
    inventory: {
      icon: RefreshCw,
      iconBg: "bg-[#f5f3ff] text-[#735ae5] border-[#ddd5ff]",
      title: "Inventory Updated",
      subtitle: "SKU-BLK-AIR (+45 units)",
      amount: "Real-time sync",
      animation: "animate-float-reverse",
    },
    customer: {
      icon: UserPlus,
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      title: "New Customer",
      subtitle: "Aarav Sharma • Mumbai",
      amount: "VIP Tier",
      animation: "animate-float-slow",
    },
    sale: {
      icon: TrendingUp,
      iconBg: "bg-[#f5f3ff] text-[#9069fc] border-[#ddd5ff]",
      title: "₹12,500 Sale",
      subtitle: "Express Checkout • 2m ago",
      amount: "+28% vs AOV",
      animation: "animate-float-reverse",
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "bg-white/85 backdrop-blur-2xl rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_32px_-6px_rgba(20,20,19,0.12),0_4px_12px_-2px_rgba(20,20,19,0.06)] border border-[#e3e5e6] ring-1 ring-black/[0.03] flex items-center gap-3 select-none z-20 transition-transform duration-300",
        config.animation,
        className
      )}
    >
      <div className={cn("w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border shrink-0", config.iconBg)}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col pr-1">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-semibold text-slate-900">{config.title}</span>
        </div>
        <span className="text-[11px] text-slate-500 font-medium">{config.subtitle}</span>
      </div>
      <div className="ml-auto pl-2 border-l border-slate-200/80">
        <span className="text-xs font-bold text-[#735ae5] tracking-wide">{config.amount}</span>
      </div>
    </div>
  );
}
