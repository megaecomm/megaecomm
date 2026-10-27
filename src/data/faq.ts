import { FAQItem } from "@/types";

export const FAQ_LIST: FAQItem[] = [
  {
    id: "what-is-mega-ecomm",
    question: "What is Mega Ecomm?",
    answer:
      "Mega Ecomm is a unified eCommerce operating system designed to run your entire commerce business from a single platform. It coordinates real-time product catalogs, custom metafields, multi-warehouse inventory, supplier purchase orders, shipping couriers, WhatsApp automations, and headless APIs across all your sales channels.",
    category: "General",
  },
  {
    id: "shopify-migration",
    question: "How does the 1-click Shopify migration work?",
    answer:
      "Our native migration engine allows complete, zero-downtime automated transfer directly from your existing Shopify store. It imports products, variants, collections, customer records, historical orders, and images while preserving your SEO URLs without manual CSV work.",
    category: "Platform",
  },
  {
    id: "whatsapp-automation",
    question: "Can I run WhatsApp OTP and abandoned cart recovery?",
    answer:
      "Yes. Mega Ecomm features built-in WhatsApp Commerce capabilities. You can enable 1-click WhatsApp OTP login at checkout, dispatch live delivery updates with tracking links, and trigger automated abandoned cart recovery sequences directly on WhatsApp.",
    category: "Features",
  },
  {
    id: "inventory-purchase-orders",
    question: "How do multi-warehouse inventory and Purchase Orders work?",
    answer:
      "Stock levels update in real-time across all connected sales channels. When inventory dips below your custom safety thresholds, the system automatically creates supplier Purchase Orders (POs) with automated receiving and warehouse allocation.",
    category: "Features",
  },
  {
    id: "integrations-couriers-payments",
    question: "Which payment gateways and courier partners are supported?",
    answer:
      "Mega Ecomm connects natively with leading payment gateways (Razorpay, Stripe, PayU, Cashfree), express courier partners (Shiprocket, Delhivery, Blue Dart), and communication channels (WhatsApp Business, SMS, SendGrid). Headless REST APIs and webhooks are also fully supported.",
    category: "Platform",
  },
  {
    id: "onboarding-and-trial",
    question: "How do I get started with guided onboarding?",
    answer:
      "We offer a full-featured 14-day free trial on our Starter and Growth plans with zero credit card required. Our technical specialists provide guided onboarding to assist with data migration, courier mapping, and channel setup for a smooth launch.",
    category: "Pricing",
  },
];
