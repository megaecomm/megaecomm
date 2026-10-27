import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | Mega Ecomm",
  description:
    "Learn how Mega Ecomm collects, protects, uses, and processes merchant and customer data across our unified commerce operating platform.",
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LEGAL &amp; DATA PRIVACY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mt-2 font-mono">
            Last Updated: {lastUpdated} • Effective Immediately
          </p>
        </div>

        {/* Introduction Overview Banner */}
        <div className="my-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Welcome to <strong>{SITE_CONFIG.name}</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), operated by Megascale. This Privacy Policy outlines our transparent commitment to safeguarding the personal and commercial data entrusted to us by merchants, storefront visitors, and enterprise partners when using our operating platform, APIs, and services.
          </p>
        </div>

        {/* Legal Sections */}
        <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section id="collection" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">1.</span> Information We Collect
            </h2>
            <p className="mb-3">
              We collect information to provide, secure, and optimize commerce workflows across sales channels:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>
                <strong>Merchant Account Details:</strong> Name, business email, billing address, phone number, GSTIN/tax identification, and password credentials upon account registration.
              </li>
              <li>
                <strong>Commerce &amp; Catalog Data:</strong> Product SKUs, variants, prices, inventory quantities, images, warehouse locations, and operational supplier purchase orders.
              </li>
              <li>
                <strong>Order &amp; Fulfillment Streams:</strong> Customer shipping addresses, contact numbers, order items, transaction IDs, courier tracking numbers, and delivery statuses synchronized via marketplace and storefront webhooks.
              </li>
              <li>
                <strong>Technical &amp; Telemetry Data:</strong> IP addresses, browser types, session timestamps, device identifiers, and system API latency logs used for diagnostics and platform reliability.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section id="usage" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">2.</span> How We Use Your Information
            </h2>
            <p className="mb-3">
              All data collected is utilized solely for operational commerce functionality:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Synchronizing real-time inventory levels across your storefront and connected marketplaces to eliminate stockouts.</li>
              <li>Automating order routing, courier manifest printing, and AWB generation.</li>
              <li>Executing predictive analytics, contribution margin calculations, and inventory velocity forecasting.</li>
              <li>Detecting fraudulent checkout attempts and high-risk Return-To-Origin (RTO) cash-on-delivery orders.</li>
              <li>Providing 24/7 technical customer support, service updates, and billing statements.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="security" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">3.</span> Data Security &amp; Encryption Standards
            </h2>
            <p className="mb-3">
              We enforce enterprise-grade security controls to protect merchant information against unauthorized access, loss, or alteration:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                  <Lock className="w-4 h-4 text-[#735ae5]" />
                  <span>AES-256 Encryption</span>
                </div>
                <p className="text-xs text-slate-600">
                  All databases and backups are encrypted at rest using industry-standard AES-256 encryption keys.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>TLS 1.3 in Transit</span>
                </div>
                <p className="text-xs text-slate-600">
                  Every API call, webhook stream, and merchant console session is protected by TLS 1.3 SSL protocols.
                </p>
              </div>
            </div>
            <p>
              We do not sell, rent, or monetize your store data or customer records to third-party advertisers or data brokers under any circumstances.
            </p>
          </section>

          {/* Section 4 */}
          <section id="third-party" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">4.</span> Third-Party Service Integrations
            </h2>
            <p className="mb-3">
              To deliver multi-channel fulfillment, our platform communicates with authorized third-party APIs based on your configuration:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Logistics Partners:</strong> Delhivery, Shiprocket, Blue Dart, DTDC (for AWB creation and delivery updates).</li>
              <li><strong>Payment Gateways:</strong> Razorpay, Stripe, Cashfree (for secure tokenized payment settlement verification).</li>
              <li><strong>Marketplaces &amp; Storefronts:</strong> Shopify, Amazon SP-API, WooCommerce (for 2-way catalog and order synchronization).</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="retention" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">5.</span> Data Retention &amp; Merchant Control
            </h2>
            <p className="mb-3">
              Merchants retain full ownership of their data. You may request catalog exports, complete historical order logs, or permanent deletion of your account and related records at any time by contacting our data protection team.
            </p>
          </section>

          {/* Section 6 */}
          <section id="contact" className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-[#735ae5]">6.</span> Contacting Our Privacy Officer
            </h2>
            <p className="mb-3">
              For inquiries, compliance verifications, or data privacy requests, please reach out to:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5 font-mono">
              <div className="font-bold text-slate-900">{SITE_CONFIG.name} — Data Privacy Desk</div>
              <div className="text-slate-600">Email: {SITE_CONFIG.contact.email}</div>
              <div className="text-slate-600">Phone: {SITE_CONFIG.contact.phone}</div>
              <div className="text-slate-600">{SITE_CONFIG.contact.office}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
