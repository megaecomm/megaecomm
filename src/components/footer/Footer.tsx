"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { SITE_CONFIG } from "@/lib/constants";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  isShield?: boolean;
}

interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: "platform",
    title: "Platform",
    links: [
      { label: "Product Catalog", href: "/features#products" },
      { label: "Order Management", href: "/features#orders" },
      { label: "Inventory Radar", href: "/features#inventory" },
      { label: "Customer 360", href: "/features#customers" },
      { label: "Analytics & BI", href: "/features#analytics" },
      { label: "Automation Workflows", href: "/features#automation" },
    ],
  },
  {
    id: "solutions",
    title: "Solutions",
    links: [
      { label: "D2C Brands", href: "/solutions#d2c" },
      { label: "Omnichannel Retail", href: "/solutions#retail" },
      { label: "Wholesale & Bulk", href: "/solutions#wholesale" },
      { label: "Global Enterprise", href: "/solutions#enterprise" },
      { label: "Pricing Plans", href: "/pricing" },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      { label: "Documentation", href: "/resources#docs" },
      { label: "API Reference", href: "/resources#api" },
      { label: "Case Studies", href: "/customers" },
      { label: "Integrations Hub", href: "/integrations" },
      { label: "Help & FAQs", href: "/#faq" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Trust & Security", href: "/about#security" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  const currentYear = 2026;
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <footer className="bg-[#141413] text-slate-300 rounded-t-[32px] sm:rounded-t-[44px] lg:rounded-t-[56px] pt-12 sm:pt-16 pb-12 relative overflow-hidden">
      {/* Top subtle ambient highlight line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#735ae5]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section */}
        <div className="pb-10 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10">
            {/* Brand Info & Status */}
            <div className="md:col-span-4 lg:col-span-4 space-y-4 pr-0 lg:pr-6">
              <Logo variant="light" size="md" />
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                The unified commerce operating platform. Manage catalog, orders,
                multi-warehouse inventory, and workflows from one powerful
                control plane.
              </p>

              {/* Direct Contact Information */}
              <div className="pt-2 space-y-2.5 text-xs text-slate-300">
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#735ae5] group-hover:text-white group-hover:bg-[#735ae5] transition-all shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-300 group-hover:text-white">
                    {SITE_CONFIG.contact.email}
                  </span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#735ae5] group-hover:text-white group-hover:bg-[#735ae5] transition-all shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-300 group-hover:text-white">
                    {SITE_CONFIG.contact.phone}
                  </span>
                </a>
                <div className="flex items-start gap-2.5 text-slate-300 leading-relaxed">
                  <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#735ae5] shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="max-w-xs text-[11px] sm:text-xs text-slate-400">
                    {SITE_CONFIG.contact.office}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Link Columns (hidden on mobile, visible on md+) */}
            <div className="hidden md:contents">
              {FOOTER_SECTIONS.map((section) => (
                <div key={section.id} className="md:col-span-1 lg:col-span-2">
                  <h4 className="text-[11px] font-bold text-white tracking-wider uppercase mb-3.5">
                    {section.title}
                  </h4>
                  <ul className="space-y-2 text-[13px] text-slate-400">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={
                            link.external ? "noopener noreferrer" : undefined
                          }
                          className="text-slate-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5"
                        >
                          {link.isShield && (
                            <ShieldCheck className="w-3.5 h-3.5 text-[#7ecdf5]" />
                          )}
                          <span>{link.label}</span>
                          {link.external && (
                            <ArrowUpRight className="w-3 h-3 text-slate-500" />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Accordion Dropdown Link Sections (visible only on mobile < md) */}
          <div className="md:hidden mt-6 divide-y divide-white/10 border-t border-white/10">
            {FOOTER_SECTIONS.map((section) => {
              const isOpen = !!openSections[section.id];
              return (
                <div key={section.id} className="py-2.5">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between py-2 text-xs font-bold text-white tracking-wider uppercase cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{section.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#7ecdf5]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="pt-2 pb-3 space-y-2 text-xs text-slate-400 pl-1">
                          {section.links.map((link, idx) => (
                            <li key={idx}>
                              <Link
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={
                                  link.external
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="text-slate-400 hover:text-white transition-colors py-1 block flex items-center gap-1.5"
                              >
                                {link.isShield && (
                                  <ShieldCheck className="w-3.5 h-3.5 text-[#7ecdf5]" />
                                )}
                                <span>{link.label}</span>
                                {link.external && (
                                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-slate-400 text-center sm:text-left">
            <span className="text-[11px] sm:text-xs">
              &copy; {currentYear} {SITE_CONFIG.name}, Inc. All rights reserved.
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1 text-[11px] sm:text-xs">
              Powered by{" "}
              <a
                href={SITE_CONFIG.links.megascale}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-[#735ae5] transition-colors underline-offset-4 hover:underline inline-flex items-center gap-0.5"
              >
                Megascale
                <ArrowUpRight className="w-3 h-3 text-[#735ae5]" />
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href={SITE_CONFIG.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#735ae5]/50 hover:bg-[#735ae5]/15 transition-all"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href={SITE_CONFIG.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#735ae5]/50 hover:bg-[#735ae5]/15 transition-all"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#735ae5]/50 hover:bg-[#735ae5]/15 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
