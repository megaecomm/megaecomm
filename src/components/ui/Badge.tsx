import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "outline" | "dark";
  className?: string;
  dot?: boolean;
}

export function Badge({ children, variant = "primary", className, dot = false }: BadgeProps) {
  const variants = {
    primary: "bg-[#735ae5]/10 text-[#735ae5] border-[#735ae5]/25",
    secondary: "bg-[#f4f4f6] text-[#141413] border-[#e3e5e6]",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    warning: "bg-amber-50 text-amber-800 border-amber-200/80",
    outline: "bg-transparent text-slate-700 border-slate-300",
    dark: "bg-[#141413] text-[#ddd5ff] border-white/10",
  };

  const dotColors = {
    primary: "bg-[#735ae5]",
    secondary: "bg-slate-500",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    outline: "bg-slate-400",
    dark: "bg-[#9069fc]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border tracking-wide",
        variants[variant],
        className
      )}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotColors[variant])} />}
      {children}
    </span>
  );
}
