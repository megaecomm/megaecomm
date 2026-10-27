export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
  change?: string;
  trend?: "up" | "down";
}

export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge?: string;
  bullets: string[];
  mockupType: "catalog" | "orders" | "inventory" | "customers" | "analytics" | "automation";
  stats?: { label: string; value: string }[];
}

export interface IntegrationItem {
  name: string;
  category: "Payments" | "Shipping" | "Commerce" | "Communication" | "Marketing" | "Analytics";
  description: string;
  logoUrl?: string;
  tag: string;
  featured?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  priceMonthly: number | string;
  priceYearly: number | string;
  billingPeriod: string;
  isPopular?: boolean;
  ctaText: string;
  ctaHref: string;
  features: string[];
  highlight?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  metricsResult: string;
  avatarUrl?: string;
}

export interface CaseStudyItem {
  company: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  statGain: string;
  statLabel: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  audience: string;
  problems: string[];
  solutions: string[];
  keyFeatures: string[];
  stats: { value: string; label: string }[];
}
