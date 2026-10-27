import { FeatureItem } from "@/types";

export const PLATFORM_TABS: FeatureItem[] = [
  {
    id: "products",
    title: "Product Management",
    tagline: "Master Catalog, Multi-Attribute Variants & Metafields",
    description:
      "Create, organize, and manage your complete product catalog with multi-dimensional variants, dynamic condition-based smart collections, and custom metafield schemas.",
    iconName: "Package",
    badge: "Master Catalog & Metafields",
    bullets: [
      "Multi-level variant matrices (sizes, colors, materials, SKUs) with individual barcodes and weights",
      "Custom Data (Metafields) schema builder for product specifications (fabric, care guides, badges)",
      "Automated smart collections that dynamically group items by price, tags, or vendor rules",
      "Cost-per-item tracking, compare-at promotional prices, and dynamic SEO previews",
      "Full image gallery with color-swatch linking for dynamic storefront switching",
    ],
    mockupType: "catalog",
    stats: [
      { label: "SKUs Managed", value: "250,000+" },
      { label: "Sync Latency", value: "< 1.2s" },
    ],
  },
  {
    id: "orders",
    title: "Order Management",
    tagline: "Order Pipeline, Draft Desk, Recovery & Document Printer",
    description:
      "Track, pack, and fulfill orders from payment to doorstep delivery with complete timeline history, phone order creation, abandoned cart recovery, and built-in invoice printing.",
    iconName: "ShoppingCart",
    badge: "Fulfillment & Document Printer",
    bullets: [
      "End-to-end fulfillment pipeline with tracking numbers, staff timeline notes, and returns",
      "Draft Orders & Phone Sales Desk to create custom quotations with direct payment links",
      "Abandoned Checkout Recovery Desk to recapture 10%–25% of unfinished shopping carts",
      "Built-in Order Printer for instant Tax Invoices, Packing Slips, and Shipping Manifests",
      "Multi-courier partner routing (Shiprocket, Delhivery, Blue Dart) with instant AWB codes",
    ],
    mockupType: "orders",
    stats: [
      { label: "Fulfillment Speed", value: "3.4x faster" },
      { label: "Cart Recovery", value: "10%–25%" },
    ],
  },
  {
    id: "inventory",
    title: "Inventory & Purchase Orders",
    tagline: "Live Stock Tracking & Supplier Purchase Orders (POs)",
    description:
      "Eliminate overselling with real-time stock adjustments across all variants, automated low-stock warnings, and supplier Purchase Orders with direct warehouse receiving.",
    iconName: "Boxes",
    badge: "Inventory & Supplier POs",
    bullets: [
      "Sub-second real-time stock synchronization across all storefront channels and locations",
      "Supplier Purchase Order (PO) workflow with unit cost tracking and agreed delivery dates",
      "Automated warehouse receiving that increments inventory immediately upon shipment arrival",
      "Safety stock thresholds (10 units default) with urgent low-stock dashboard alert flags",
      "Inline stock editor allowing instant quantity updates without leaving the catalog page",
    ],
    mockupType: "inventory",
    stats: [
      { label: "Stockout Reduction", value: "-91%" },
      { label: "PO Automation", value: "Instant Receiving" },
    ],
  },
  {
    id: "customers",
    title: "WhatsApp & Customer CRM",
    tagline: "Passwordless WhatsApp OTP, Order Alerts & 360° CRM",
    description:
      "Consolidate shopper interactions into unified 360° customer profiles. Deliver high-converting passwordless WhatsApp OTP logins, automated order tracking, and an inquiry inbox.",
    iconName: "Users",
    badge: "WhatsApp Commerce & CRM",
    bullets: [
      "Passwordless mobile login powered by instant 6-digit WhatsApp OTP verification",
      "Automated transactional WhatsApp messages for Order Placed, Dispatched, Delivered, and Refunded",
      "Unified 360° customer profiles with lifetime spend, order history, address books, and VIP tags",
      "Centralized Website Inquiry Inbox to track, assign, and resolve customer contact messages",
      "Customer Product Reviews with 1–5 star ratings, detailed feedback, and verified buyer badges",
    ],
    mockupType: "customers",
    stats: [
      { label: "OTP Open Rate", value: "98.4%" },
      { label: "Support Tickets", value: "-45%" },
    ],
  },
  {
    id: "analytics",
    title: "Executive Analytics & 3D Globe",
    tagline: "Real-Time Sales KPIs, Wishlist Radar & 3D Location Globe",
    description:
      "Transform live transactional data into clear business intelligence. Monitor 7-day revenue trends, order status mixes, storewide wishlist demand, and live active shoppers on a 3D globe.",
    iconName: "BarChart3",
    badge: "Executive BI & 3D Globe",
    bullets: [
      "Interactive 3D Location Globe displaying real-time active customer sessions mapped to cities",
      "Executive KPI summary cards for Total Revenue, Order Volume, Total Customers, and AOV",
      "7-Day Revenue Trend area chart and live Order Status Mix (Paid, Pending, Refunded)",
      "Wishlist Intelligence radar ranking top-favorited products to forecast inventory demand",
      "Unalterable staff audit activity logs tracking sensitive modifications with timestamps and IPs",
    ],
    mockupType: "analytics",
    stats: [
      { label: "Visitor Globe", value: "3D Real-Time" },
      { label: "Query Speed", value: "< 300ms" },
    ],
  },
  {
    id: "automation",
    title: "Shopify Migration & Platform Engine",
    tagline: "1-Click Shopify Importer, Box Packaging & Headless APIs",
    description:
      "Migrate seamlessly from Shopify with zero data loss. Configure standard box packaging profiles, regional GST/VAT tax rules, 8-module RBAC permissions, and Headless REST APIs.",
    iconName: "Cpu",
    badge: "Shopify Import & Headless APIs",
    bullets: [
      "1-Click Shopify Data Migration Suite for products, variants, collections, orders, and blogs",
      "Zero-downtime transfer preserving existing customer accounts and Google SEO ranking links",
      "Standard Box Packaging Library with dimensions (L x W x H) and tare weights for logistics",
      "Regional Tax Engine configuring GST / VAT rates by country and state with override rules",
      "Headless Storefront REST API (/api/shop/*) for high-speed custom web, mobile, and POS apps",
    ],
    mockupType: "automation",
    stats: [
      { label: "Migration Speed", value: "10K Items / 4m" },
      { label: "Data Fidelity", value: "100% Zero-Loss" },
    ],
  },
];

export const PROBLEM_CARDS = [
  {
    id: "tools",
    title: "Too Many Disconnected Tools",
    description:
      "Data is trapped across 7+ disparate apps — legacy storefronts, separate invoicing software, spreadsheets, and courier portals — causing confusion.",
    icon: "Layers",
    stat: "7+ fragmented apps",
  },
  {
    id: "manual",
    title: "Repetitive Manual Operations",
    description:
      "Operations teams spend dozens of hours manually typing invoices, calculating tax rates, drafting supplier POs, and copy-pasting tracking numbers.",
    icon: "Clock",
    stat: "18+ hrs wasted weekly",
  },
  {
    id: "inventory",
    title: "Inventory Blindspots & Overselling",
    description:
      "Selling across multiple channels without sub-second inventory synchronization leads to embarrassing stockouts and customer cancellations.",
    icon: "AlertTriangle",
    stat: "14% cancel rate due to stockout",
  },
  {
    id: "insights",
    title: "Delayed Business Insights",
    description:
      "Decisions are made on stale weekly spreadsheets rather than live profit margins, resulting in missed demand spikes and lost margin.",
    icon: "TrendingDown",
    stat: "5-day reporting lag",
  },
  {
    id: "orders",
    title: "Abandoned Checkout Leakage",
    description:
      "Shoppers leave unfinalized carts without automated recovery mechanisms, resulting in thousands of dollars in lost monthly revenue.",
    icon: "Shuffle",
    stat: "70%+ carts abandoned",
  },
  {
    id: "scaling",
    title: "Security & Delegation Risk",
    description:
      "Giving all staff master administrative access risks unauthorized changes and data leaks without granular role permissions or audit logs.",
    icon: "Flame",
    stat: "Zero audit trail on legacy",
  },
];

export const WORKFLOW_STAGES = [
  { step: 1, code: "CATALOG", title: "Master Catalog", desc: "Multi-level variants & custom metafields" },
  { step: 2, code: "PROCUREMENT", title: "Supplier POs", desc: "Automated warehouse inventory receiving" },
  { step: 3, code: "INVENTORY", title: "Real-Time Sync", desc: "Live stock allocation with safety buffers" },
  { step: 4, code: "CHECKOUT", title: "WhatsApp OTP", desc: "Passwordless customer login & checkout" },
  { step: 5, code: "ORDER", title: "Order Pipeline", desc: "Centralized capture with draft phone desk" },
  { step: 6, code: "DOCUMENTS", title: "Order Printer", desc: "1-click Tax Invoices & Packing Slips" },
  { step: 7, code: "ROUTING", title: "Carrier Allocation", desc: "Smart courier routing & instant AWB codes" },
  { step: 8, code: "UPDATES", title: "WhatsApp Alerts", desc: "Automated dispatch & delivery updates" },
  { step: 9, code: "ANALYTICS", title: "3D Globe & BI", desc: "Executive KPI dashboard & live visitor map" },
];

export const BENTO_FEATURES = [
  {
    title: "Unified Master Catalog & Metafields",
    category: "CATALOG",
    description: "Manage products with multi-level variants (size, color, material), compare-at pricing, and custom metafields that sync in real time.",
    colSpan: "col-span-12 lg:col-span-7",
    badge: "Multi-Variant",
    highlight: "250K+ SKUs",
  },
  {
    title: "Built-in Order Printer & GST Invoices",
    category: "OPERATIONS",
    description: "Generate and print professional Tax Invoices, Packing Slips, Delivery Notes, and Manifests in 1 click.",
    colSpan: "col-span-12 lg:col-span-5",
    badge: "1-Click PDF",
    highlight: "Zero 3rd-Party Cost",
  },
  {
    title: "Supplier Purchase Orders (POs)",
    category: "PROCUREMENT",
    description: "Draft vendor POs with unit costs, track expected dates, and receive stock directly into warehouse inventory.",
    colSpan: "col-span-12 lg:col-span-4",
    badge: "PO Restocking",
    highlight: "Auto-Receiving",
  },
  {
    title: "Abandoned Checkout Recovery Desk",
    category: "REVENUE RECOVERY",
    description: "Review unfinished carts and dispatch friendly 1-click payment reminders to recapture 10%–25% of lost sales.",
    colSpan: "col-span-12 lg:col-span-4",
    badge: "10%–25% Recovered",
    highlight: "1-Click Links",
  },
  {
    title: "WhatsApp OTP & Order Alerts",
    category: "COMMUNICATION",
    description: "Passwordless 6-digit WhatsApp mobile login plus automated order confirmation, dispatch, and delivery updates.",
    colSpan: "col-span-12 lg:col-span-4",
    badge: "98% Open Rate",
    highlight: "Passwordless OTP",
  },
];

