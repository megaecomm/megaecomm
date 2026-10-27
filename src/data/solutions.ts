import { SolutionItem } from "@/types";

export const SOLUTIONS_LIST: SolutionItem[] = [
  {
    id: "d2c",
    title: "D2C Brands",
    tagline: "Scale Your Direct-to-Consumer Brand Without Operational Friction",
    description:
      "Empower your high-velocity eCommerce brand with rapid order dispatch, native WhatsApp OTP checkout, 1-click Shopify migration, and wishlist demand insights.",
    audience: "Fast-growing consumer brands scaling on Shopify, custom web, and major marketplaces.",
    problems: [
      "Frequent stockouts and overselling across channels during marketing spikes",
      "High checkout drop-offs and RTO rates from unverified cash-on-delivery orders",
      "Manual Shopify data extraction and painful CSV reconciliation between tools",
    ],
    solutions: [
      "Sub-second multi-channel inventory locking with safety stock thresholds",
      "Native WhatsApp OTP checkout login and automated abandoned cart recovery sequences",
      "1-Click automated zero-downtime Shopify migration for catalog, orders, and content",
    ],
    keyFeatures: [
      "1-Click Shopify Migration (Zero Downtime)",
      "Native WhatsApp OTP & Cart Recovery",
      "Pre-Order Wishlist Demand Radar",
      "Automated Multi-Courier Routing & Instant AWB",
    ],
    stats: [
      { value: "-35%", label: "Average RTO Reduction" },
      { value: "4.2x", label: "Peak Order Scalability" },
    ],
  },
  {
    id: "retail",
    title: "Omnichannel Retailers",
    tagline: "Unify Physical Stores, Dark Stores, and Online Storefronts",
    description:
      "Turn retail outlets into high-speed local fulfillment hubs with multi-store switching, pincode delivery intelligence, and automated courier partner allocation.",
    audience: "Retail brands with brick-and-mortar stores, POS terminals, and expanding digital channels.",
    problems: [
      "Fragmented store inventory where physical stock cannot fulfill nearby online orders",
      "Lack of real-time pincode verification causing courier dispatch to unserviceable areas",
      "Managing multiple regional storefronts and brands in disconnected browser tabs",
    ],
    solutions: [
      "Live multi-store switching (x-store-id) with isolated catalogs and permissions",
      "Pincode intelligence service verifying serviceable areas, TAT, and COD eligibility",
      "Automated carrier partner allocation (Shiprocket, Delhivery, Blue Dart) with custom rates",
    ],
    keyFeatures: [
      "Multi-Store Tenant Switching Hub",
      "Real-time Pincode Verification Service",
      "Automated Carrier Allocation (Delhivery/Shiprocket)",
      "Universal Return & Store Exchange Handling",
    ],
    stats: [
      { value: "1.4 Days", label: "Average Domestic Delivery" },
      { value: "99.8%", label: "Inventory Accuracy Across Stores" },
    ],
  },
  {
    id: "wholesale",
    title: "Wholesale & Bulk",
    tagline: "Manage High-Volume Bulk Commerce, Supplier POs & Dealer Accounts",
    description:
      "Modernize your wholesale commerce with supplier purchase orders (POs), custom product metafields, and tiered order pricing.",
    audience: "Wholesalers, brand manufacturers, and distributors managing commercial buyer networks.",
    problems: [
      "Managing dealer accounts and negotiated terms in disconnected spreadsheets",
      "Tracking supplier purchase orders (POs) and warehouse receiving manually",
      "Missing custom product specifications, warranty badges, and HS code taxonomies",
    ],
    solutions: [
      "Dedicated wholesale trade accounts with customized pricing tiers and billing terms",
      "End-to-end Purchase Order (PO) lifecycle tracking from vendor issue to stock receiving",
      "Native Custom Data (Metafields) schema builder for complex technical product attributes",
    ],
    keyFeatures: [
      "Wholesale Accounts & Bulk Invoicing",
      "Supplier Purchase Order (PO) Engine",
      "Custom Data & Metafield Schema Builder",
      "Automated GST & E-Way Bill Generation",
    ],
    stats: [
      { value: "5x", label: "Faster Bulk Order Processing" },
      { value: "0%", label: "Pricing Calculation Errors" },
    ],
  },
  {
    id: "enterprise",
    title: "Global Enterprise",
    tagline: "Enterprise Commerce Operating System Built for Infinite Scale",
    description:
      "High-speed Headless Storefront APIs, granular role-based access control (RBAC), immutable audit logs, and 99.99% availability for enterprise leaders.",
    audience: "High-volume multi-brand conglomerates, enterprise retailers, and global commerce networks.",
    problems: [
      "Rigid legacy systems incapable of delivering sub-second headless app performance",
      "Lack of granular staff permissions and security audit trails across multi-store teams",
      "High operational risk during massive multi-crore flash drops and peak traffic surges",
    ],
    solutions: [
      "Dedicated Headless Storefront API tokens and scoped developer API keys",
      "Enterprise RBAC with granular resource permissions and immutable activity logs",
      "Financial-grade high-availability infrastructure with sub-300ms query latency",
    ],
    keyFeatures: [
      "Headless Storefront API Access Tokens",
      "Enterprise RBAC & Multi-Store Staff Delegation",
      "Immutable Security & Activity Audit Logs",
      "Geographical Location Analytics & Heatmaps",
    ],
    stats: [
      { value: "99.99%", label: "Uptime Availability SLA" },
      { value: "<300ms", label: "Core API Query Latency" },
    ],
  },
];
