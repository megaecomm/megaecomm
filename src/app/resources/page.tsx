import React from "react";
import type { Metadata } from "next";
import { BookOpen, Code2, HelpCircle, FileText, ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import OperationsReferenceTable from "@/components/sections/OperationsReferenceTable";

export const metadata: Metadata = {
  title: "Resources, Guides & Documentation",
  description:
    "Explore developer APIs, commerce operational playbooks, product documentation, and eCommerce industry benchmarks.",
};

export default function ResourcesPage() {
  const categories = [
    {
      id: "docs",
      title: "Product Documentation",
      desc: "Step-by-step operational setup guides, catalog import specs, and warehouse routing tutorials.",
      icon: BookOpen,
      badge: "User Guides",
      links: [
        "Getting Started with Master Catalog",
        "Multi-Warehouse Inventory Configuration",
        "Automated Courier Routing Rules",
        "Configuring WhatsApp Dispatch Notifications",
      ],
    },
    {
      id: "api",
      title: "Developer & API Reference",
      desc: "Comprehensive REST and GraphQL API specs, event webhooks, and SDK documentation.",
      icon: Code2,
      badge: "Developer Hub",
      links: [
        "Authentication & Scoped API Keys",
        "Real-Time Webhook Event Payloads",
        "Custom Order Management Endpoints",
        "Rate Limits & Latency Benchmarks (<80ms)",
      ],
    },
    {
      id: "blog",
      title: "eCommerce Playbooks & Blog",
      desc: "Deep-dives into gross margin optimization, festive flash drops, and omnichannel retention.",
      icon: FileText,
      badge: "Industry Insights",
      links: [
        "How to Reduce RTOs by 35% in Cash-on-Delivery Markets",
        "Preventing Inventory Overselling During Black Friday Drops",
        "True Contribution Margin vs Vanity Top-Line Revenue",
        "Ship-From-Store Strategy for Modern Retailers",
      ],
    },
    {
      id: "support",
      title: "Help Center & Support",
      desc: "24/7 troubleshooting, status alerts, onboarding assistance, and FAQs.",
      icon: HelpCircle,
      badge: "Merchant Support",
      links: [
        "Channel Disconnection Troubleshooting",
        "GST E-Invoice Reconciliation FAQs",
        "Role-Based Permission Matrix Setup",
        "Contacting 24/7 Priority Emergency Support",
      ],
    },
  ];

  return (
    <div className="pt-24 sm:pt-32">
      {/* Hero */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto">
          Everything to Help You Build &amp; Scale.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
          Comprehensive guides, real-world commerce playbooks, and developer API references to supercharge your team.
        </p>
      </section>

      {/* Developer API Quick Interactive Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#141413] text-slate-100 border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
            <div className="flex items-center gap-2 font-mono text-xs text-[#7ecdf5]">
              <Terminal className="w-4 h-4" />
              <span>POST /v2/orders/dispatch_routing</span>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
              Response: 200 OK • 42ms
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 font-mono text-xs">
            <div className="bg-[#1c1c1a] p-4 rounded-xl border border-white/10 text-slate-300 overflow-x-auto">
              <div className="text-slate-500 mb-2">// Webhook Request Payload</div>
              <pre>{`{
  "order_id": "ORD-2026-9281",
  "customer": {
    "name": "Priya Sharma",
    "pin_code": "560038"
  },
  "items": [
    { "sku": "SKU-AURA-PRO-BLK", "quantity": 1 }
  ],
  "auto_route": true
}`}</pre>
            </div>

            <div className="bg-[#1c1c1a] p-4 rounded-xl border border-white/10 text-emerald-400 overflow-x-auto">
              <div className="text-slate-500 mb-2">// Instant Automated Response</div>
              <pre>{`{
  "status": "routed",
  "assigned_warehouse": "South Regional Hub (Hosur)",
  "courier_selected": "Delhivery Express Air",
  "awb_code": "DEL-88219491",
  "estimated_delivery": "2026-09-12T14:00:00Z",
  "stock_decremented": true
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Category Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                id={cat.id}
                className="scroll-mt-28 p-6 sm:p-7 lg:p-6 xl:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-[#735ae5]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#735ae5] shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{cat.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{cat.desc}</p>

                  <div className="mt-6 space-y-2.5">
                    {cat.links.map((link, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-[#735ae5]/30 transition-colors flex items-center justify-between text-xs font-medium text-slate-800 cursor-pointer group"
                      >
                        <span>{link}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#735ae5] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold text-[#735ae5] hover:text-[#5f45d4] cursor-pointer flex items-center gap-1">
                    Explore All in {cat.title} &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Official Client & Vendor Administrative Reference Table */}
      <OperationsReferenceTable />
    </div>
  );
}
