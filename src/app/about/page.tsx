import React from "react";
import type { Metadata } from "next";
import { Zap, Target, Eye, ShieldCheck, Heart, Users, Globe2, Award } from "lucide-react";
import SecuritySection from "@/components/sections/SecuritySection";

export const metadata: Metadata = {
  title: "About Mega Ecomm",
  description:
    "Learn about our mission to build the definitive operating system for global eCommerce businesses.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Zero Operational Drift",
      desc: "In commerce, milliseconds matter. We treat stock drift and inventory desynchronization as unacceptable system flaws.",
      icon: Zap,
    },
    {
      title: "Radical Simplicity",
      desc: "Complexity kills execution. We build sophisticated distributed engineering disguised behind an intuitive, human-centered cockpit.",
      icon: Eye,
    },
    {
      title: "Merchant First, Always",
      desc: "We charge zero percentage cut on your GMV. Your business margin belongs to you, not your software vendor.",
      icon: Heart,
    },
    {
      title: "Enterprise Grade by Default",
      desc: "Whether you process 100 orders or 100,000 orders an hour, reliability, encryption, and audit logs come standard.",
      icon: ShieldCheck,
    },
  ];

  const milestones = [
    { year: "2023", title: "Inception & Distributed Engine", desc: "Founded to solve the persistent inventory overselling problem across emerging D2C brands." },
    { year: "2024", title: "Omnichannel Rollout", desc: "Launched bidirectional Amazon SP-API and automated multi-carrier logistics routing." },
    { year: "2025", title: "Enterprise Core 2.0", desc: "Surpassed 50 million synchronized products and introduced sub-80ms real-time ACID locking." },
    { year: "2026", title: "The Commerce OS", desc: "Serving thousands of global merchants with unified catalog, warehouse radar, and AI workflows." },
  ];

  return (
    <div className="pt-24 sm:pt-32">
      {/* Hero */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto">
          Building the Operating System for Modern Commerce.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
          We believe eCommerce teams shouldn't spend their days copy-pasting tracking numbers or wrestling with disconnected spreadsheets.
        </p>
      </section>

      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 leading-relaxed text-slate-700 space-y-6 text-base sm:text-lg">
          <p className="font-semibold text-slate-900 text-xl">
            Modern commerce is brilliant on the front-end, but fragmented and fragile behind the scenes.
          </p>
          <p>
            When a brand launches, managing products and printing shipping labels in a single storefront feels easy. But as soon as you expand to marketplaces, launch a retail outlet, or host a viral flash sale, the system fractures.
          </p>
          <p>
            Inventory gets desynchronized. Customers buy items that are physically out of stock. Operations teams waste 20+ hours a week manually fixing courier manifests and reconciling spreadsheets.
          </p>
          <p>
            Mega Ecomm was born to replace that chaotic patchwork with a singular, resilient operating platform. We connect your entire commerce universe—catalog, inventory, orders, logistics, and customers—into one synchronized reality.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What Drives Us Every Day</h2>
          <p className="text-sm text-slate-600 mt-2">The four foundational engineering and business principles guiding our product decisions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:border-[#735ae5]/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-[#735ae5]/10 border border-[#735ae5]/20 flex items-center justify-center text-[#735ae5] mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Milestone Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">The Journey So Far</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m) => (
            <div key={m.year} className="p-6 rounded-2xl bg-[#141413] text-white border border-white/10">
              <span className="text-2xl font-bold font-mono text-[#7ecdf5]">{m.year}</span>
              <h4 className="text-base font-semibold text-white mt-2">{m.title}</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Security Architecture */}
      <div id="security" className="scroll-mt-28 mb-14">
        <SecuritySection />
      </div>
    </div>
  );
}
