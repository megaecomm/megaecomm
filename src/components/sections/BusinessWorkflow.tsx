"use client";

import React, { useState, useEffect } from "react";
import {
  Package,
  Boxes,
  Store,
  ShoppingCart,
  CreditCard,
  Warehouse,
  Truck,
  Users,
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Zap,
  ShieldCheck,
  Clock,
  Layers,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import { WORKFLOW_STAGES } from "@/data/features";

// Rich metadata & simulated live payloads for each of the 9 stages
const STAGE_DETAILS = [
  {
    step: 1,
    code: "PRODUCT",
    icon: Package,
    badge: "CATALOG ORCHESTRATION",
    title: "Master Product Catalog & Metafields",
    description: "Centralized product information management. Define custom attributes, dynamic variants, multi-pack bundles, and SEO metafields once and push everywhere.",
    bullets: [
      "Dynamic matrix for unlimited colors, sizes, and technical specifications",
      "Native custom metafield schemas synced across sales channels",
      "Automated high-res image optimization and CDN caching",
    ],
    stats: [
      { label: "SKUs Managed", val: "250,000+" },
      { label: "Sync Latency", val: "<1.2s" },
      { label: "Field Drift", val: "0%" },
    ],
    preview: {
      type: "product",
      title: "Aura Pro Wireless ANC Headphones",
      sku: "SKU-AURA-PRO-BLK",
      price: "₹4,999",
      tags: ["Electronics", "ANC Active", "2-Yr Warranty", "HSN: 851830"],
      channels: ["Shopify Live", "Amazon Sync", "Myntra Active"],
    },
  },
  {
    step: 2,
    code: "INVENTORY",
    icon: Boxes,
    badge: "STOCK SYNCHRONIZATION",
    title: "Multi-Node Inventory Allocation",
    description: "Distributed inventory radar across central warehouses, regional 3PLs, and retail backrooms with sub-second stock locking and zero overselling.",
    bullets: [
      "ACID-compliant distributed distributed locks prevent duplicate checkouts",
      "Configurable safety stock thresholds and buffer zones",
      "Automated reorder triggers based on 14-day velocity forecasting",
    ],
    stats: [
      { label: "Sync Engine", val: "<80ms" },
      { label: "Oversell Rate", val: "0.00%" },
      { label: "Fulfillment Nodes", val: "14 Hubs" },
    ],
    preview: {
      type: "inventory",
      warehouses: [
        { name: "Delhi Central Hub (North)", stock: "1,240 units", health: "94%" },
        { name: "Mumbai Gateway Hub (West)", stock: "860 units", health: "82%" },
        { name: "Bengaluru Tech Hub (South)", stock: "620 units", health: "76%" },
      ],
    },
  },
  {
    step: 3,
    code: "STORE",
    icon: Store,
    badge: "OMNICHANNEL PUBLISH",
    title: "Instant Multi-Channel Broadcasting",
    description: "Simultaneously broadcast product updates, flash-sale pricing, and inventory allotments to your custom storefront, mobile apps, and 12+ marketplaces.",
    bullets: [
      "Deep 2-way native sync with Shopify, Amazon SP-API, and Flipkart",
      "Channel-specific pricing rules, discount tiers, and localized taxes",
      "Automated catalog feed generation for Google Shopping & Meta Ads",
    ],
    stats: [
      { label: "Active Channels", val: "12+" },
      { label: "Batch Publish", val: "1,500/min" },
      { label: "API Uptime", val: "99.99%" },
    ],
    preview: {
      type: "store",
      channelStreams: [
        { name: "Shopify Flagship", status: "Published", time: "2s ago", ping: "28ms" },
        { name: "Amazon India SP-API", status: "Synchronized", time: "5s ago", ping: "44ms" },
        { name: "Blinkit Quick Commerce", status: "Live Stock", time: "1s ago", ping: "18ms" },
        { name: "Retail POS Terminal", status: "Active Lock", time: "Just now", ping: "12ms" },
      ],
    },
  },
  {
    step: 4,
    code: "ORDER",
    icon: ShoppingCart,
    badge: "STREAM INGESTION",
    title: "Centralized Order Stream Ingestion",
    description: "High-throughput stream processing engine captures, normalizes, and validates webhooks from all sales channels in under 40 milliseconds.",
    bullets: [
      "Automatic duplicate webhook deduplication and payload validation",
      "Real-time address parsing and pin-code verification against courier databases",
      "Customer lifetime value lookup and VIP priority order tagging",
    ],
    stats: [
      { label: "Peak Velocity", val: "42 orders/min" },
      { label: "Ingest Speed", val: "32ms" },
      { label: "Loss SLA", val: "0 Loss" },
    ],
    preview: {
      type: "order",
      orderId: "ORD-984210",
      customer: "Aarav Sharma • Mumbai",
      items: "2 Items (Aura Pro ANC + Leather Case)",
      total: "₹5,898",
      channel: "Shopify Direct",
      time: "12 seconds ago",
    },
  },
  {
    step: 5,
    code: "PAYMENT",
    icon: CreditCard,
    badge: "FRAUD & RISK ENGINE",
    title: "Payment Routing & Anti-Fraud Scoring",
    description: "Intelligent gateway routing with automated COD verification, machine-learning RTO risk scoring, and instant prepaid settlement verification.",
    bullets: [
      "AI-driven RTO predictive score flags risky high-return orders before dispatch",
      "Smart routing across Razorpay, Stripe, and Cashfree for highest success rates",
      "Automated WhatsApp confirmation triggers for high-value COD orders",
    ],
    stats: [
      { label: "Gateway Success", val: "99.4%" },
      { label: "Risk Score", val: "0.1% (Low)" },
      { label: "RTO Prevention", val: "-38%" },
    ],
    preview: {
      type: "payment",
      gateway: "Razorpay Smart Routing",
      status: "3DS Verified & Settled",
      riskScore: "LOW RISK (Score: 0.04/1.0)",
      rtoProbability: "1.2% (Safeguarded)",
    },
  },
  {
    step: 6,
    code: "FULFILLMENT",
    icon: Warehouse,
    badge: "SMART ROUTING",
    title: "Proximity Warehouse Allocation",
    description: "Algorithmic split-fulfillment engine routes each item to the geographically closest warehouse with available stock, minimizing transit days and freight cost.",
    bullets: [
      "Pin-code distance calculation assigns the fastest shipping zone",
      "Intelligent split-order logic for multi-item baskets from separate facilities",
      "Dynamic batch picklists with automated warehouse team barcode assignments",
    ],
    stats: [
      { label: "Transit Time", val: "-34%" },
      { label: "Freight Saved", val: "22%" },
      { label: "Auto Routing", val: "100%" },
    ],
    preview: {
      type: "fulfillment",
      customerLoc: "Destination: Mumbai (Pin: 400001)",
      assignedHub: "Mumbai West Hub (Proximity: 14 km)",
      estimatedTransit: "Same-Day / Next-Morning (Zone A)",
      routingLogic: "Nearest Node with 100% SKU Availability",
    },
  },
  {
    step: 7,
    code: "SHIPPING",
    icon: Truck,
    badge: "CARRIER DISPATCH",
    title: "Automated Carrier Rate Shopping & AWB",
    description: "Live SLA rate shopping compares 50+ domestic and international couriers to generate shipping manifests, AWBs, and thermal barcode labels in single clicks.",
    bullets: [
      "Automatic courier assignment comparing Blue Dart, Delhivery, and DTDC",
      "Instant thermal shipping label printing with standardized carrier barcodes",
      "Digital manifest handover with delivery executive signature logging",
    ],
    stats: [
      { label: "AWB Latency", val: "0.4s" },
      { label: "Carrier Network", val: "50+ Partners" },
      { label: "Delivery Reach", val: "29,000+ Pins" },
    ],
    preview: {
      type: "shipping",
      courier: "Blue Dart Express Air",
      awbNumber: "AWB #BLU-88492048",
      manifestStatus: "Packed & Sealed",
      expectedDelivery: "Tomorrow by 02:00 PM",
    },
  },
  {
    step: 8,
    code: "CUSTOMER",
    icon: Users,
    badge: "POST-PURCHASE CRM",
    title: "Proactive Tracking & Retention Updates",
    description: "Keep customers engaged post-checkout with branded real-time tracking pages, automated WhatsApp delivery milestones, and instant NDR bot resolution.",
    bullets: [
      "Branded tracking portal with recommended cross-sell product widgets",
      "Automated WhatsApp notifications for Out for Delivery and Delivered events",
      "One-click address update & delivery reschedule bot reduces failed deliveries",
    ],
    stats: [
      { label: "Message Open Rate", val: "94%" },
      { label: "CSAT Score", val: "4.9/5" },
      { label: "NDR Resolved", val: "68%" },
    ],
    preview: {
      type: "customer",
      whatsappMsg: "Hi Aarav! Your order #ORD-984210 is Out for Delivery with Blue Dart.",
      etaPill: "Arriving Today by 01:30 PM",
      ratingPreview: "★★★★★ Verified Customer",
    },
  },
  {
    step: 9,
    code: "ANALYTICS",
    icon: BarChart3,
    badge: "INTELLIGENCE LOOP",
    title: "Real-Time Gross Margin & Restock BI",
    description: "Close the commerce feedback loop with real-time contribution margin P&L, customer cohort LTV analysis, and automated vendor purchase orders.",
    bullets: [
      "True SKU profitability calculated after deducting COGS, packaging, and freight",
      "Regional demand heatmaps and return rate trends by product category",
      "Predictive restock recommendations with automated supplier PO generation",
    ],
    stats: [
      { label: "Net Margin", val: "+38.4%" },
      { label: "Accuracy", val: "100% Real-time" },
      { label: "PO Automation", val: "Auto Restock" },
    ],
    preview: {
      type: "analytics",
      revenue: "₹5,898 Gross Sale",
      cogs: "-₹2,420 Product Cost",
      freight: "-₹180 Logistics Cost",
      netProfit: "+₹3,298 Net Margin (55.9%)",
    },
  },
];

export default function BusinessWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-cycle through the 9 stages smoothly unless paused
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < 9 ? prev + 1 : 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const current = STAGE_DETAILS.find((s) => s.step === activeStep) || STAGE_DETAILS[0];
  const CurrentIcon = current.icon;

  return (
    <section className="py-10 sm:py-20 lg:py-24 bg-[#141413] text-white relative overflow-hidden">
      {/* Dynamic Aurora Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#735ae5]/20 via-[#9069fc]/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[#7ecdf5]/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <Reveal direction="up">
            <h2 className="text-2xl sm:text-4xl lg:text-[38px] xl:text-[44px] font-bold text-white tracking-tight leading-tight">
              One Unified Architecture. 9 Operational Stages.
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-slate-400 mt-2 sm:mt-3 leading-relaxed font-normal">
              Watch how order, inventory, catalog, and customer signals flow in a continuous automated loop.
            </p>
          </Reveal>
        </div>

        {/* 9-Stage Pipeline Tracker - Mobile View (All 9 Stages in a Clean 3x3 Grid, Zero Cut-off) */}
        <div className="sm:hidden mb-5 bg-[#1c1c1a] p-2.5 rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl">
          <div className="flex items-center justify-between px-1 pb-2 mb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#735ae5] animate-pulse" />
              <span className="text-[10px] font-mono tracking-wider text-slate-300 font-semibold uppercase">
                All 9 Stages
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#7ecdf5] bg-[#7ecdf5]/10 px-2 py-0.5 rounded-full border border-[#7ecdf5]/20">
              Active: 0{activeStep} / 09
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {STAGE_DETAILS.map((stage) => {
              const IconComponent = stage.icon;
              const isActive = activeStep === stage.step;
              const isPast = activeStep > stage.step;

              return (
                <button
                  key={stage.code}
                  onClick={() => {
                    setActiveStep(stage.step);
                    setIsAutoPlaying(false);
                  }}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-200 cursor-pointer text-center ${
                    isActive
                      ? "bg-gradient-to-b from-[#735ae5] to-[#5f45d4] text-white shadow-md shadow-[#735ae5]/40 ring-1.5 ring-[#735ae5]"
                      : isPast
                      ? "text-[#7ecdf5] bg-[#141413] border border-white/10 hover:border-white/20"
                      : "text-slate-400 bg-white/[0.03] hover:text-slate-200 border border-white/5"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <IconComponent className={`w-3 h-3 ${isActive ? "text-white" : isPast ? "text-[#7ecdf5]" : "text-slate-400"}`} />
                    <span className="text-[9px] font-mono font-bold">0{stage.step}</span>
                  </div>
                  <span className="text-[9px] font-bold tracking-tight leading-none block truncate max-w-full">
                    {stage.code === "FULFILLMENT" ? "FULFILL" : stage.code}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 9-Stage Connected Visual Pipeline Tracker Bar - Desktop & Laptop View (hidden on mobile) */}
        <div className="hidden sm:block mb-10">
          <div className="overflow-x-auto pb-4 no-scrollbar">
            <div className="flex items-center justify-between min-w-[820px] bg-[#1c1c1a] p-2.5 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl relative">
              
              {/* Connected Glow Line Behind Nodes */}
              <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-white/10 pointer-events-none -z-0" />
              <div
                className="absolute left-8 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#735ae5] via-[#9069fc] to-[#7ecdf5] transition-all duration-500 pointer-events-none -z-0"
                style={{ width: `${((activeStep - 1) / 8) * 88}%` }}
              />

              {STAGE_DETAILS.map((stage) => {
                const IconComponent = stage.icon;
                const isActive = activeStep === stage.step;
                const isPast = activeStep > stage.step;

                return (
                  <button
                    key={stage.code}
                    onClick={() => {
                      setActiveStep(stage.step);
                      setIsAutoPlaying(false);
                    }}
                    className={`relative z-10 flex flex-col items-center py-2.5 px-4 rounded-2xl transition-all duration-250 cursor-pointer group shrink-0 ${
                      isActive
                        ? "bg-gradient-to-b from-[#735ae5] to-[#5f45d4] text-white shadow-lg shadow-[#735ae5]/40 ring-2 ring-[#735ae5]/50 scale-105"
                        : isPast
                        ? "text-[#7ecdf5] hover:text-white bg-[#141413]/70"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                        isActive ? "bg-white/20 text-white" : isPast ? "text-[#7ecdf5]" : "text-slate-400"
                      }`}>
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold opacity-80">
                        0{stage.step}
                      </span>
                    </div>
                    <span className="text-xs font-bold tracking-tight">
                      {stage.code}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Stage Rich Spotlight Console (2-Column Creative Cockpit) */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="p-3.5 sm:p-8 lg:p-8 xl:p-11 rounded-2xl sm:rounded-[40px] bg-gradient-to-b from-[#1c1c1a] via-[#1c1c1a] to-[#141413] border border-white/10 shadow-[0_25px_70px_-20px_rgba(115,90,229,0.25)] backdrop-blur-2xl relative overflow-hidden"
            >
              {/* Subtle top accent gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#735ae5] via-[#7ecdf5] to-[#ebff39]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 xl:gap-12 items-start lg:items-center">
                
                {/* Left Column: Operational Stage Brief, Metrics & Controls */}
                <div className="lg:col-span-6 space-y-3.5 sm:space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-[#735ae5]/20 text-[#7ecdf5] border border-[#735ae5]/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7ecdf5] animate-ping" />
                      <span>STAGE {current.step} OF 9 • {current.badge}</span>
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl lg:text-[26px] xl:text-[32px] font-bold text-white tracking-tight leading-snug sm:leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
                    {current.description}
                  </p>

                  {/* Bullet Highlights with Green Checks */}
                  <div className="space-y-1.5 sm:space-y-2.5 pt-0.5 sm:pt-1">
                    {current.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00d084] shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Operational Metrics Chips in 3 Columns */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 pt-2.5 sm:pt-3 border-t border-white/10">
                    {current.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="p-2 sm:p-3 bg-[#141413] rounded-xl sm:rounded-2xl border border-white/10 text-center">
                        <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium truncate">{stat.label}</div>
                        <div className="text-xs sm:text-base font-bold text-[#7ecdf5] font-mono mt-0.5 truncate">
                          {stat.val}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation & Autoplay Controls */}
                  <div className="flex items-center justify-between gap-2 pt-2 sm:pt-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button
                        onClick={() => {
                          setActiveStep((prev) => (prev > 1 ? prev - 1 : 9));
                          setIsAutoPlaying(false);
                        }}
                        className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#141413] hover:bg-[#252523] text-xs font-semibold text-slate-200 transition-colors cursor-pointer flex items-center gap-1 border border-white/10"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" /> Prev
                      </button>
                      <button
                        onClick={() => {
                          setActiveStep((prev) => (prev < 9 ? prev + 1 : 1));
                          setIsAutoPlaying(false);
                        }}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#735ae5] hover:bg-[#5f45d4] text-xs font-bold text-white transition-colors cursor-pointer flex items-center gap-1 sm:gap-1.5 shadow-md shadow-[#735ae5]/30"
                      >
                        Next <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Auto-Play Toggle */}
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-slate-400 hover:text-[#7ecdf5] px-2 sm:px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer shrink-0"
                    >
                      {isAutoPlaying ? (
                        <>
                          <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#735ae5]" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00d084]" />
                          <span>Loop</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Right Column: Creative Interactive Live Stage Simulator */}
                <div className="lg:col-span-6 mt-3 lg:mt-0">
                  <div className="rounded-xl sm:rounded-3xl bg-[#141413] border border-white/10 shadow-2xl p-3.5 sm:p-7 relative overflow-hidden backdrop-blur-xl">
                    {/* Simulated Console Top Header Bar */}
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 sm:pb-4 sm:mb-4 border-b border-slate-800 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="text-slate-400 ml-2">SIMULATOR://stage-0{current.step}</span>
                      </div>
                      <span className="text-emerald-400 flex items-center gap-1 font-bold text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE STREAM
                      </span>
                    </div>

                    {/* Dynamic Stage Visual Payload Rendering */}
                    {current.preview.type === "product" && (
                      <div className="space-y-4 text-xs">
                        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                          <div className="text-[#7ecdf5] font-mono text-[11px] mb-1">MASTER_SKU_RECORD</div>
                          <div className="text-base font-bold text-white">{current.preview.title}</div>
                          <div className="text-slate-400 font-mono mt-0.5">{current.preview.sku} • {current.preview.price}</div>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {current.preview.tags?.map((t, idx) => (
                              <span key={idx} className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded text-[10px] font-mono">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-[#735ae5]/15 border border-[#735ae5]/30 text-[#7ecdf5]">
                          <span>Channel Sync Status:</span>
                          <span className="font-mono font-bold text-emerald-400">All 3 Channels Active (0 Drift)</span>
                        </div>
                      </div>
                    )}

                    {current.preview.type === "inventory" && (
                      <div className="space-y-3 text-xs font-mono">
                        <div className="text-slate-400 text-[11px] pb-1">REGIONAL NODE RADAR ALLOCATIONS:</div>
                        {current.preview.warehouses?.map((wh, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                            <div>
                              <div className="text-white font-bold text-xs">{wh.name}</div>
                              <div className="text-slate-400 text-[11px]">{wh.stock} Available</div>
                            </div>
                            <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                              {wh.health} SLA
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {current.preview.type === "store" && (
                      <div className="space-y-2.5 text-xs font-mono">
                        <div className="text-slate-400 text-[11px] pb-1">REAL-TIME BROADCAST MATRIX:</div>
                        {current.preview.channelStreams?.map((ch, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                            <span className="text-white font-semibold">{ch.name}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-slate-400 text-[10px]">{ch.ping}</span>
                              <span className="px-2 py-0.5 rounded bg-[#735ae5]/20 text-[#7ecdf5] text-[10px] font-bold border border-[#735ae5]/30">
                                {ch.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {current.preview.type === "order" && (
                      <div className="space-y-3.5 text-xs">
                        <div className="p-4 rounded-2xl bg-[#735ae5]/15 border border-[#735ae5]/30">
                          <div className="flex items-center justify-between text-[#7ecdf5] font-mono text-[11px] mb-2">
                            <span>{current.preview.orderId}</span>
                            <span className="text-emerald-400">{current.preview.time}</span>
                          </div>
                          <div className="text-base font-bold text-white">{current.preview.customer}</div>
                          <div className="text-slate-300 mt-1">{current.preview.items}</div>
                          <div className="text-lg font-mono font-bold text-white mt-2">{current.preview.total}</div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300">
                          <span>Ingestion Channel:</span>
                          <span className="font-mono text-white font-bold">{current.preview.channel}</span>
                        </div>
                      </div>
                    )}

                    {current.preview.type === "payment" && (
                      <div className="space-y-3 text-xs">
                        <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-emerald-400 font-mono font-bold">GATEWAY_VERIFIED</span>
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          </div>
                          <div className="text-lg font-bold text-white font-mono">{current.preview.status}</div>
                          <div className="text-slate-300 mt-1 font-mono text-xs">{current.preview.gateway}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                            <div className="text-slate-400">Risk Assessment</div>
                            <div className="text-emerald-400 font-bold mt-0.5">{current.preview.riskScore}</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                            <div className="text-slate-400">RTO Risk</div>
                            <div className="text-[#7ecdf5] font-bold mt-0.5">{current.preview.rtoProbability}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {current.preview.type === "fulfillment" && (
                      <div className="space-y-3 text-xs">
                        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                          <div className="text-slate-400 font-mono text-[11px]">GEOGRAPHIC PINCODE MATCH</div>
                          <div className="text-sm font-bold text-white mt-0.5">{current.preview.customerLoc}</div>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-[#735ae5]/15 border border-[#735ae5]/30">
                          <div className="text-[#7ecdf5] font-mono text-[11px]">OPTIMAL ALLOCATION</div>
                          <div className="text-sm font-bold text-white mt-0.5">{current.preview.assignedHub}</div>
                          <div className="text-emerald-400 font-mono text-[11px] mt-1">{current.preview.estimatedTransit}</div>
                        </div>
                      </div>
                    )}

                    {current.preview.type === "shipping" && (
                      <div className="space-y-3 text-xs">
                        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                          <div className="text-[#7ecdf5] font-mono text-xs font-bold">{current.preview.courier}</div>
                          <div className="text-lg font-mono font-bold text-white mt-1">{current.preview.awbNumber}</div>
                          {/* Simulated Barcode */}
                          <div className="my-3 mx-auto w-48 h-8 flex items-center justify-between px-2 bg-white rounded">
                            {[4, 2, 6, 3, 8, 2, 5, 2, 4, 7, 2, 6, 3, 8, 3, 2, 5, 2].map((h, i) => (
                              <div key={i} className="bg-black w-1 rounded-xs" style={{ height: `${h * 3}px` }} />
                            ))}
                          </div>
                          <div className="text-emerald-400 font-mono text-[11px]">{current.preview.expectedDelivery}</div>
                        </div>
                      </div>
                    )}

                    {current.preview.type === "customer" && (
                      <div className="space-y-3 text-xs">
                        {/* Simulated WhatsApp Notification Bubble */}
                        <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-800/60 text-emerald-200">
                          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] mb-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" /> WhatsApp Commerce Dispatch
                          </div>
                          <p className="text-white text-xs leading-relaxed">
                            {current.preview.whatsappMsg}
                          </p>
                          <div className="mt-2 inline-block px-2.5 py-0.5 rounded-full bg-emerald-900/80 text-emerald-300 font-mono text-[10px]">
                            {current.preview.etaPill}
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center text-slate-300 font-mono text-xs">
                          {current.preview.ratingPreview}
                        </div>
                      </div>
                    )}

                    {current.preview.type === "analytics" && (
                      <div className="space-y-2.5 text-xs font-mono">
                        <div className="text-slate-400 text-[11px] pb-1">REAL-TIME ORDER PROFITABILITY BREAKDOWN:</div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between text-white">
                          <span>Gross Sale Revenue</span>
                          <span className="font-bold text-emerald-400">{current.preview.revenue}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between text-slate-400">
                          <span>Product COGS (BOM)</span>
                          <span className="text-rose-400">{current.preview.cogs}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between text-slate-400">
                          <span>Courier Freight SLA</span>
                          <span className="text-rose-400">{current.preview.freight}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-[#735ae5]/15 border border-[#735ae5]/30 flex justify-between text-[#7ecdf5] font-bold">
                          <span>Net Contribution Margin</span>
                          <span className="text-emerald-400">{current.preview.netProfit}</span>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
