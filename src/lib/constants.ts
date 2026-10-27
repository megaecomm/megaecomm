export const SITE_CONFIG = {
  name: "Mega Ecomm",
  tagline: "Run Your Entire eCommerce Business From One Powerful Platform.",
  description:
    "Manage products, orders, inventory, customers, analytics and operations from one centralized platform built to help modern commerce businesses scale.",
  url: "https://megaecomm.com",
  ogImage: "/og-image.png",
  links: {
    instagram: "https://www.instagram.com/_megascale_?igsh=c2NzYTV2eDQ3M3Uw",
    facebook: "https://www.facebook.com/megascale.surat.96",
    linkedin: "https://www.linkedin.com/company/megascale/",
    megascale: "https://www.megascale.in/",
  },
  cta: {
    appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.megaecomm.com",
    loginUrl: process.env.NEXT_PUBLIC_LOGIN_URL || "https://app.megaecomm.com/login",
    demoUrl: process.env.NEXT_PUBLIC_DEMO_URL || "/contact?intent=demo",
    signupUrl: process.env.NEXT_PUBLIC_APP_URL ? `${process.env.NEXT_PUBLIC_APP_URL}/signup` : "/contact?intent=trial",
  },
  contact: {
    email: "info@megascale.in",
    salesEmail: "info@megascale.in",
    supportEmail: "info@megascale.in",
    phone: "+91 88500 11652",
    office: "411, New Escon Plaza, Chhaprabhatha Road, Amroli, Surat, Gujarat - 394107",
  },
};

export const NAV_LINKS = [
  {
    label: "Platform",
    href: "/#platform",
    sublinks: [
      { label: "Product Management", href: "/features#products", desc: "Catalog, SKU matrix & multi-channel variants" },
      { label: "Order Management", href: "/features#orders", desc: "Full lifecycle tracking & automated routing" },
      { label: "Inventory Engine", href: "/features#inventory", desc: "Multi-warehouse real-time sync & alert triggers" },
      { label: "Customer 360", href: "/features#customers", desc: "Unified CRM, RFM segments & lifetime value" },
      { label: "Analytics & BI", href: "/features#analytics", desc: "Cohort retention, gross margins & sales velocity" },
      { label: "Workflow Automation", href: "/features#automation", desc: "No-code event-driven commerce pipelines" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    sublinks: [
      { label: "D2C Brands", href: "/solutions#d2c", desc: "Rapid scale for high-growth direct-to-consumer brands" },
      { label: "Omnichannel Retailers", href: "/solutions#retail", desc: "Bridging physical POS and online channels" },
      { label: "Wholesale & Bulk", href: "/solutions#wholesale", desc: "Bulk ordering, custom tier pricing & supplier management" },
      { label: "Global Enterprise", href: "/solutions#enterprise", desc: "High throughput, dedicated VPC & 99.99% SLA" },
    ],
  },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "/resources",
    sublinks: [
      { label: "Documentation", href: "/resources#docs", desc: "Platform guides & architectural whitepapers" },
      { label: "API Reference", href: "/resources#api", desc: "REST & GraphQL webhooks documentation" },
      { label: "Commerce Blog", href: "/resources#blog", desc: "Insights & benchmarks for modern merchants" },
      { label: "Case Studies", href: "/customers", desc: "Real merchant transformations and ROI data" },
    ],
  },
];
