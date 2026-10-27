import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  withArrow?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  icon,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-[#735ae5] focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
    xl: "text-lg px-8 py-4 gap-3",
  };

  const variantStyles = {
    primary:
      "bg-[#735ae5] hover:bg-[#5f45d4] text-white border border-[#9069fc]/40",
    secondary:
      "bg-[#141413] hover:bg-[#252523] text-white border border-white/10",
    white:
      "bg-white hover:bg-[#f7f9fb] text-[#141413] border border-[#e3e5e6]",
    outline:
      "border border-[#e3e5e6] hover:border-[#735ae5] bg-white/90 hover:bg-[#f5f3ff] text-[#141413] hover:text-[#735ae5] backdrop-blur-md",
    ghost:
      "text-slate-700 hover:text-[#735ae5] hover:bg-[#f5f3ff]",
    glass:
      "bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 hover:border-white/30",
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
