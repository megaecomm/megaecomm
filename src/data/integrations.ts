import { IntegrationItem } from "@/types";

export const INTEGRATIONS_LIST: IntegrationItem[] = [
  // Payments
  {
    name: "Razorpay",
    category: "Payments",
    description:
      "Accept UPI, credit/debit cards, net banking, and wallets with instant settlement reconciliation.",
    tag: "Payment Gateway",
    featured: true,
  },
  {
    name: "Stripe",
    category: "Payments",
    description:
      "Global commerce payment processing across 135+ currencies with built-in fraud prevention.",
    tag: "Global Payments",
    featured: true,
  },
  // {
  //   name: "PayU",
  //   category: "Payments",
  //   description:
  //     "Robust local payment processing supporting recurring subscriptions and one-click checkouts.",
  //   tag: "Payment Gateway",
  //   featured: false,
  // },

  // Shipping & Logistics
  {
    name: "Shiprocket",
    category: "Shipping",
    description:
      "Automated multi-carrier logistics aggregation with automated pickup requests and RTO reduction.",
    tag: "Carrier Aggregator",
    featured: true,
  },
  {
    name: "Delhivery",
    category: "Shipping",
    description:
      "Express surface and air delivery covering 18,500+ pin codes with automated address verification.",
    tag: "Express Logistics",
    featured: true,
  },
  {
    name: "Blue Dart",
    category: "Shipping",
    description:
      "Premium express air freight and domestic delivery with guaranteed next-day transit times.",
    tag: "Express Courier",
    featured: false,
  },

  // Commerce & Marketplaces
  {
    name: "Shopify 1-Click Migration",
    category: "Commerce",
    description:
      "Automated zero-downtime migration engine for Products, Collections, Order History, Drafts, and Blogs with full SEO preservation.",
    tag: "Native Migration",
    featured: true,
  },
  {
    name: "Shopify Storefront Sync",
    category: "Commerce",
    description:
      "Bidirectional real-time synchronization of catalog, inventory, and incoming orders with live Shopify stores.",
    tag: "Storefront",
    featured: true,
  },
  // Communication & Messaging
  {
    name: "WhatsApp OTP & Megachat",
    category: "Communication",
    description:
      "High-converting WhatsApp OTP login, automated order status notifications, and abandoned cart recovery sequences.",
    tag: "WhatsApp Commerce",
    featured: true,
  },
  // {
  //   name: "Pincode Intelligence Service",
  //   category: "Shipping",
  //   description:
  //     "Instant pincode lookup, delivery TAT estimation, automated COD verification, and courier routing rules.",
  //   tag: "Logistics Service",
  //   featured: true,
  // },
  // {
  //   name: "Transactional Email (SendGrid / Postmark)",
  //   category: "Communication",
  //   description:
  //     "High-deliverability branded invoice PDF dispatch and account notifications.",
  //   tag: "Email Service",
  //   featured: false,
  // },
  // {
  //   name: "SMS Gateway (Gupshup / Kaleyra)",
  //   category: "Communication",
  //   description:
  //     "Instant OTP authentication, delivery notification SMS, and courier arrival triggers.",
  //   tag: "SMS Gateway",
  //   featured: false,
  // },

  // Marketing & Analytics
  // {
  //   name: "Meta Ads & CAPI",
  //   category: "Marketing",
  //   description:
  //     "Server-side Conversions API integration to accurately track purchase events and optimize ad ROAS.",
  //   tag: "Ad Tracking",
  //   featured: true,
  // },
  // {
  //   name: "Google Analytics 4",
  //   category: "Analytics",
  //   description:
  //     "Enhanced eCommerce event tracking with revenue, tax, and multi-channel attribution.",
  //   tag: "Analytics",
  //   featured: false,
  // },
  // {
  //   name: "Klaviyo",
  //   category: "Marketing",
  //   description:
  //     "Sync customer segments, purchase recency, and catalog feeds for personalized email automation.",
  //   tag: "Email Automation",
  //   featured: true,
  // },
];

export const INTEGRATION_CATEGORIES = [
  "All",
  "Payments",
  "Shipping",
  "Commerce",
  "Communication",
] as const;
