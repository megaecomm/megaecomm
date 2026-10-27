import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "dark" | "light" | "mark-only";
  className?: string;
  imageClassName?: string;
  href?: string;
  priority?: boolean;
}

export const LogoMark: React.FC<{
  size?: number;
  className?: string;
  priority?: boolean;
}> = ({ size = 38, className, priority = false }) => {
  return (
    <Image
      src="/images/logo-mark.png"
      alt="Mega Ecomm Mark"
      width={size * 2}
      height={size * 2}
      priority={priority}
      className={cn("shrink-0 select-none object-contain", className)}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
};

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  variant = "dark",
  className,
  imageClassName,
  href = "/",
  priority = true,
}) => {
  // Dimension mapping for responsive display
  const sizeConfig = {
    sm: {
      markSize: 32,
      containerClass: "h-7 sm:h-8",
      imageClass: "h-7 sm:h-8 w-auto max-w-[145px] sm:max-w-[165px]",
      width: 165,
      height: 32,
    },
    md: {
      markSize: 40,
      containerClass: "h-8 sm:h-9 lg:h-10",
      imageClass: "h-8 sm:h-9 lg:h-10 w-auto max-w-[165px] sm:max-w-[190px] lg:max-w-[210px]",
      width: 210,
      height: 41,
    },
    lg: {
      markSize: 48,
      containerClass: "h-10 sm:h-11 lg:h-12",
      imageClass: "h-10 sm:h-11 lg:h-12 w-auto max-w-[205px] sm:max-w-[230px] lg:max-w-[250px]",
      width: 250,
      height: 49,
    },
    xl: {
      markSize: 56,
      containerClass: "h-12 sm:h-14 lg:h-16",
      imageClass: "h-12 sm:h-14 lg:h-16 w-auto max-w-[250px] sm:max-w-[290px] lg:max-w-[330px]",
      width: 330,
      height: 65,
    },
  };

  const current = sizeConfig[size] || sizeConfig.md;

  if (variant === "mark-only") {
    const markContent = (
      <div
        className={cn(
          "inline-flex items-center justify-center shrink-0 select-none",
          className
        )}
      >
        <Image
          src="/images/logo-mark.png"
          alt="Mega Ecomm"
          width={current.markSize * 2}
          height={current.markSize * 2}
          priority={priority}
          className={cn(
            "object-contain select-none shrink-0",
            imageClassName
          )}
          style={{ width: `${current.markSize}px`, height: `${current.markSize}px` }}
        />
      </div>
    );

    if (href) {
      return (
        <Link
          href={href}
          className="inline-flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#735ae5] rounded-lg"
          aria-label="Mega Ecomm Home"
        >
          {markContent}
        </Link>
      );
    }
    return markContent;
  }

  // Full Logo:
  // variant "dark" -> /images/logo.png (original full color for light backgrounds)
  // variant "light" -> /images/logo-light.png (white text for dark backgrounds like footer)
  const logoSrc = variant === "light" ? "/images/logo-light.png" : "/images/logo.png";

  const content = (
    <div
      className={cn(
        "inline-flex items-center shrink-0 select-none",
        current.containerClass,
        className
      )}
    >
      <Image
        src={logoSrc}
        alt="Mega Ecomm — Complete eCommerce Management Platform"
        width={1365}
        height={269}
        priority={priority}
        className={cn(
          "h-full w-auto object-contain select-none transition-transform duration-200 group-hover:scale-[1.02]",
          current.imageClass,
          imageClassName
        )}
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#735ae5] rounded-lg"
        aria-label="Mega Ecomm Home"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;
