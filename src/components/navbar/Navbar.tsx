"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Package,
  ShoppingCart,
  Warehouse,
  Users,
  BarChart3,
  Zap,
  ShoppingBag,
  Store,
  Building2,
  Globe,
  BookOpen,
  Code2,
  Newspaper,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Helper function to return customized icon badges for each dropdown sublink
const getDropdownIcon = (label: string) => {
  switch (label) {
    case "Product Management":
      return {
        icon: Package,
        badge: "bg-[#735ae5]/10 text-[#735ae5] border-[#735ae5]/20",
        hoverBadge: "group-hover/sub:bg-[#735ae5] group-hover/sub:text-white group-hover/sub:border-[#735ae5]",
      };
    case "Order Management":
      return {
        icon: ShoppingCart,
        badge: "bg-[#7ecdf5]/15 text-[#0284c7] border-[#7ecdf5]/30",
        hoverBadge: "group-hover/sub:bg-[#0284c7] group-hover/sub:text-white group-hover/sub:border-[#0284c7]",
      };
    case "Inventory Engine":
      return {
        icon: Warehouse,
        badge: "bg-[#00d084]/15 text-[#059669] border-[#00d084]/30",
        hoverBadge: "group-hover/sub:bg-[#00d084] group-hover/sub:text-white group-hover/sub:border-[#00d084]",
      };
    case "Customer 360":
      return {
        icon: Users,
        badge: "bg-[#fcbc69]/20 text-[#d97706] border-[#fcbc69]/30",
        hoverBadge: "group-hover/sub:bg-[#d97706] group-hover/sub:text-white group-hover/sub:border-[#d97706]",
      };
    case "Analytics & BI":
      return {
        icon: BarChart3,
        badge: "bg-[#9069fc]/15 text-[#7c3aed] border-[#9069fc]/30",
        hoverBadge: "group-hover/sub:bg-[#7c3aed] group-hover/sub:text-white group-hover/sub:border-[#7c3aed]",
      };
    case "Workflow Automation":
      return {
        icon: Zap,
        badge: "bg-[#735ae5]/10 text-[#735ae5] border-[#735ae5]/20",
        hoverBadge: "group-hover/sub:bg-[#735ae5] group-hover/sub:text-white group-hover/sub:border-[#735ae5]",
      };
    // Solutions
    case "D2C Brands":
      return {
        icon: ShoppingBag,
        badge: "bg-[#735ae5]/10 text-[#735ae5] border-[#735ae5]/20",
        hoverBadge: "group-hover/sub:bg-[#735ae5] group-hover/sub:text-white group-hover/sub:border-[#735ae5]",
      };
    case "Omnichannel Retailers":
      return {
        icon: Store,
        badge: "bg-[#7ecdf5]/15 text-[#0284c7] border-[#7ecdf5]/30",
        hoverBadge: "group-hover/sub:bg-[#0284c7] group-hover/sub:text-white group-hover/sub:border-[#0284c7]",
      };
    case "Wholesale & Bulk":
      return {
        icon: Building2,
        badge: "bg-[#00d084]/15 text-[#059669] border-[#00d084]/30",
        hoverBadge: "group-hover/sub:bg-[#00d084] group-hover/sub:text-white group-hover/sub:border-[#00d084]",
      };
    case "Global Enterprise":
      return {
        icon: Globe,
        badge: "bg-[#fcbc69]/20 text-[#d97706] border-[#fcbc69]/30",
        hoverBadge: "group-hover/sub:bg-[#d97706] group-hover/sub:text-white group-hover/sub:border-[#d97706]",
      };
    // Resources
    case "Documentation":
      return {
        icon: BookOpen,
        badge: "bg-[#735ae5]/10 text-[#735ae5] border-[#735ae5]/20",
        hoverBadge: "group-hover/sub:bg-[#735ae5] group-hover/sub:text-white group-hover/sub:border-[#735ae5]",
      };
    case "API Reference":
      return {
        icon: Code2,
        badge: "bg-[#7ecdf5]/15 text-[#0284c7] border-[#7ecdf5]/30",
        hoverBadge: "group-hover/sub:bg-[#0284c7] group-hover/sub:text-white group-hover/sub:border-[#0284c7]",
      };
    case "Commerce Blog":
      return {
        icon: Newspaper,
        badge: "bg-[#fcbc69]/20 text-[#d97706] border-[#fcbc69]/30",
        hoverBadge: "group-hover/sub:bg-[#d97706] group-hover/sub:text-white group-hover/sub:border-[#d97706]",
      };
    case "Case Studies":
      return {
        icon: Award,
        badge: "bg-[#00d084]/15 text-[#059669] border-[#00d084]/30",
        hoverBadge: "group-hover/sub:bg-[#00d084] group-hover/sub:text-white group-hover/sub:border-[#00d084]",
      };
    default:
      return {
        icon: Package,
        badge: "bg-[#735ae5]/10 text-[#735ae5] border-[#735ae5]/20",
        hoverBadge: "group-hover/sub:bg-[#735ae5] group-hover/sub:text-white group-hover/sub:border-[#735ae5]",
      };
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileSection = (label: string) => {
    setMobileExpandedSection((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(scrollPos > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Also sync with Lenis scroll engine if active
    let unsubscribeLenis: (() => void) | null = null;
    const lenisTimer = setTimeout(() => {
      const lenis = (window as any).lenis;
      if (lenis) {
        const onLenisScroll = (e: { scroll: number }) => {
          setScrolled(e.scroll > 15);
        };
        lenis.on("scroll", onLenisScroll);
        unsubscribeLenis = () => lenis.off("scroll", onLenisScroll);
      }
    }, 100);

    return () => {
      clearTimeout(lenisTimer);
      if (unsubscribeLenis) unsubscribeLenis();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedSection(null);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          scrolled || mobileMenuOpen
            ? "bg-white/98 backdrop-blur-2xl border-b border-slate-200/80 py-2.5"
            : "bg-white/90 backdrop-blur-sm py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="dark" size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const hasSublinks = item.sublinks && item.sublinks.length > 0;

              if (!hasSublinks) {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap",
                      isActive
                        ? "text-[#735ae5] font-semibold bg-[#735ae5]/10"
                        : "text-slate-700 hover:text-[#735ae5] hover:bg-[#735ae5]/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-medium text-slate-700 hover:text-[#735ae5] hover:bg-[#735ae5]/5 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    aria-expanded={activeDropdown === item.label}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 xl:w-4 xl:h-4 text-slate-400 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180 text-[#735ae5]"
                      )}
                    />
                  </button>

                  {/* Dropdown Mega Menu with Creative Icons */}
                  {activeDropdown === item.label && (
                    <div
                      className={cn(
                        "absolute top-full pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150",
                        item.label === "Platform"
                          ? "left-0 w-[500px] xl:w-[550px]"
                          : "left-1/2 -translate-x-1/2 w-[440px] xl:w-[480px]"
                      )}
                    >
                      <div className="bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-2xl p-3 xl:p-3.5 grid grid-cols-2 gap-2">
                        {item.sublinks.map((sub) => {
                          const theme = getDropdownIcon(sub.label);
                          const Icon = theme.icon;
                          return (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="p-2 xl:p-2.5 rounded-xl hover:bg-[#f5f3ff]/80 border border-transparent hover:border-[#735ae5]/25 transition-all duration-200 group/sub flex items-start gap-2.5 xl:gap-3 cursor-pointer"
                            >
                              <div
                                className={cn(
                                  "w-8 h-8 xl:w-9 xl:h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200 mt-0.5",
                                  theme.badge,
                                  theme.hoverBadge
                                )}
                              >
                                <Icon className="w-4 h-4 transition-transform duration-200 group-hover/sub:scale-110" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs xl:text-sm font-bold text-slate-900 group-hover/sub:text-[#735ae5] transition-colors leading-tight">
                                    {sub.label}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#735ae5] shrink-0 ml-1" />
                                </div>
                                <p className="text-[10px] xl:text-[11px] text-slate-500 line-clamp-2 mt-0.5 xl:mt-1 leading-relaxed font-normal">
                                  {sub.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}

                        {/* Creative Bottom Footer Bar */}
                        <div className="col-span-2 mt-1 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] xl:text-xs text-slate-500 px-2 bg-slate-50/80 -mx-1.5 -mb-1.5 p-2 xl:p-2.5 rounded-b-xl">
                          <span>Need custom deployment?</span>
                          <Link
                            href="/contact?intent=demo"
                            onClick={() => setActiveDropdown(null)}
                            className="font-semibold text-[#735ae5] hover:text-[#5f45d4] flex items-center gap-1 transition-colors"
                          >
                            Solutions Architect &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right CTA Actions */}
          <div className="hidden lg:flex items-center shrink-0">
            <Button
              href={SITE_CONFIG.cta.demoUrl}
              variant="primary"
              size="sm"
              withArrow
              className="text-xs px-3.5 py-1.5 xl:text-sm xl:px-4 xl:py-2 whitespace-nowrap shadow-md shadow-[#735ae5]/20"
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer — rendered outside <header> so fixed positioning works correctly */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[57px] bottom-0 bg-white z-40 overflow-y-auto flex flex-col border-t border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex-1 p-4 sm:p-5 space-y-1 divide-y divide-slate-100">
            {NAV_LINKS.map((item) => {
              const hasSublinks = item.sublinks && item.sublinks.length > 0;
              const isExpanded = mobileExpandedSection === item.label;

              if (hasSublinks) {
                return (
                  <div key={item.label} className="pt-2 first:pt-0">
                    <button
                      onClick={() => toggleMobileSection(item.label)}
                      className="w-full flex items-center justify-between py-2.5 px-2 text-sm font-bold text-slate-900 uppercase tracking-wide hover:text-[#735ae5] transition-colors cursor-pointer rounded-xl hover:bg-slate-50"
                      aria-expanded={isExpanded}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-slate-400 transition-transform duration-200",
                          isExpanded && "rotate-180 text-[#735ae5]"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-1 pr-1 pb-2 space-y-1">
                            {item.sublinks!.map((sub) => {
                              const theme = getDropdownIcon(sub.label);
                              const Icon = theme.icon;
                              return (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#f5f3ff] transition-colors group"
                                >
                                  <div
                                    className={cn(
                                      "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border",
                                      theme.badge
                                    )}
                                  >
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs font-semibold text-slate-900 group-hover:text-[#735ae5] leading-snug">
                                      {sub.label}
                                    </div>
                                    <div className="text-[10px] text-slate-500 truncate mt-0.5">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div key={item.label} className="pt-2 first:pt-0">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-2 text-sm font-bold text-slate-900 uppercase tracking-wide hover:text-[#735ae5] transition-colors rounded-xl hover:bg-slate-50"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="p-5 border-t border-slate-200 bg-slate-50/80">
            <Button href={SITE_CONFIG.cta.demoUrl} variant="primary" className="w-full" withArrow>
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
