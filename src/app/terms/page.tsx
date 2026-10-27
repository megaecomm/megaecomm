import React from "react";
import Link from "next/link";
import { FileText, CheckCircle2, Shield, AlertCircle, ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Terms & Conditions | Mega Ecomm",
  description:
    "Review the terms, merchant service agreements, acceptable use policies, and SLA commitments governing the use of Mega Ecomm.",
};

export default function TermsPage() {
  const lastUpdated = "September 18, 2026";

  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#735ae5] hover:text-[#5f45d4] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="pb-8 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#735ae5]/10 text-[#735ae5] border border-[#735ae5]/20 mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-slate-500 mt-2 font-mono">
            Last Updated: {lastUpdated} • Version 2.4
          </p>
        </div>

        {/* Agreement Intro */}
        <div className="my-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Please read these Terms &amp; Conditions (&ldquo;Agreement&rdquo;) carefully before accessing or utilizing the software, APIs, multi-warehouse synchronization tools, or related commerce services provided by <strong>{SITE_CONFIG.name}</strong> (&ldquo;Mega Ecomm,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), operated by Megascale. By registering an account or deploying our software, you agree to be bound by these terms.
          </p>
        </div>

        {/* Clauses */}
        <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* 1. Account Eligibility */}
          <section id="accounts" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">1.</span> Account Registration &amp; Security
            </h2>
            <p className="mb-3">
              To utilize Mega Ecomm, you must create a registered business account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Provide accurate, verified legal entity details, business address, and operational contact information.</li>
              <li>Maintain the confidentiality of API secret keys, merchant login tokens, and staff access permissions.</li>
              <li>Promptly notify our security team of any unauthorized access, compromised API tokens, or credential leaks.</li>
            </ul>
          </section>

          {/* 2. Platform Usage & License */}
          <section id="license" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">2.</span> Software License &amp; Permitted Use
            </h2>
            <p className="mb-3">
              Mega Ecomm grants you a non-exclusive, non-transferable, revocable license to access our commerce operating console and APIs in accordance with your active subscription tier.
            </p>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Prohibited Uses:</strong> You may not reverse engineer, decompile, or probe the infrastructure of our synchronization engine, resell API access without written authorization, or transmit fraudulent orders designed to disrupt carrier partner networks.
              </div>
            </div>
          </section>

          {/* 3. Subscription, Billing & Taxes */}
          <section id="billing" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">3.</span> Subscription Fees &amp; Billing
            </h2>
            <p className="mb-3">
              Subscription fees for Starter, Growth, and Enterprise plans are billed in advance on a recurring monthly or annual basis. 
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Billing Cycle:</strong> Subscriptions renew automatically unless cancelled prior to the end of the billing period.</li>
              <li><strong>Taxes:</strong> All listed fees are exclusive of applicable GST or statutory taxes, which will be itemized on official tax invoices.</li>
              <li><strong>Fair Usage:</strong> High-volume webhook traffic and API requests exceeding agreed plan thresholds may require rate allocation adjustments.</li>
            </ul>
          </section>

          {/* 4. SLA Commitments & Uptime */}
          <section id="sla" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">4.</span> Service Level Agreement (99.99% Uptime)
            </h2>
            <p className="mb-3">
              We engineer our distributed inventory engine for mission-critical reliability. Enterprise tiers include a 99.99% system availability SLA covering order ingestion and webhook processing, backed by automated multi-cloud failovers.
            </p>
          </section>

          {/* 5. Intellectual Property & Merchant Ownership */}
          <section id="ownership" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">5.</span> Data Ownership &amp; Intellectual Property
            </h2>
            <p className="mb-3">
              You retain 100% intellectual property ownership of your catalog images, SKU metadata, merchant brand assets, customer databases, and sales reports. Mega Ecomm claims no proprietary rights over data synchronized through our platform.
            </p>
          </section>

          {/* 6. Limitation of Liability */}
          <section id="liability" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">6.</span> Limitation of Liability
            </h2>
            <p className="mb-3">
              While we partner with tier-1 cloud providers and verified courier aggregators, Mega Ecomm shall not be liable for indirect, incidental, or consequential damages resulting from third-party courier delivery delays, downstream marketplace API outages, or merchant hardware failures.
            </p>
          </section>

          {/* 7. Termination & Account Closure */}
          <section id="termination" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">7.</span> Termination
            </h2>
            <p className="mb-3">
              You may terminate your subscription at any time from your billing settings. Upon cancellation, you have a 30-day grace window to export all catalog records, customer orders, and financial manifests before data archiving.
            </p>
          </section>

          {/* 8. Governing Law & Contact */}
          <section id="governing-law" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">8.</span> Governing Law &amp; Legal Notices
            </h2>
            <p className="mb-3">
              These terms are governed by and construed in accordance with the laws of India. Any legal disputes shall be subject to the jurisdiction of the competent courts in Surat, Gujarat.
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5 font-mono mt-4">
              <div className="font-bold text-slate-900">{SITE_CONFIG.name} Legal Compliance</div>
              <div className="text-slate-600">Email: {SITE_CONFIG.contact.email}</div>
              <div className="text-slate-600">{SITE_CONFIG.contact.office}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
