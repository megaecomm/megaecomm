import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "dark" | "flat";
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = "default",
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-white border border-slate-200/80",
    glass: "glass-panel",
    dark: "glass-panel-dark text-white border-slate-800",
    flat: "bg-slate-50 border border-slate-200/60",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 relative overflow-hidden",
        variantStyles[variant],
        hoverEffect && "glass-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
