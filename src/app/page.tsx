import React from "react";
import Hero from "@/components/hero/Hero";
import SolutionBridge from "@/components/sections/SolutionBridge";
import PlatformTabs from "@/components/sections/PlatformTabs";
import MultiChannelGrid from "@/components/sections/MultiChannelGrid";
import IntegrationGrid from "@/components/sections/IntegrationGrid";
import SecuritySection from "@/components/sections/SecuritySection";
import WhoIsItFor from "@/components/sections/WhoIsItFor";
import BusinessWorkflow from "@/components/sections/BusinessWorkflow";
import BentoGrid from "@/components/sections/BentoGrid";
import PricingSection from "@/components/sections/PricingSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with 3D Ambient Visualizer & Scroll-Driven Tilt */}
      <Hero />

      {/* 2. Solution Transformation: Convergence into Mega Ecomm */}
      <SolutionBridge />

      {/* 5. Interactive Platform Modules (Products, Orders, Inventory, Customers, Analytics, Automation) */}
      <PlatformTabs />

      {/* 6. Multi-Store / Multi-Channel Architecture */}
      <MultiChannelGrid />

      {/* 7. Native Integrations Ecosystem */}
      <IntegrationGrid />

      {/* 8. Dark Security Vault & Compliance */}
      <SecuritySection />

      {/* 9. Target Audiences (D2C, Retail, Wholesale, Enterprise) */}
      <WhoIsItFor />

      {/* 10. 9-Stage Operational Commerce Journey */}
      <BusinessWorkflow />

      {/* 11. Bento Grid: High-Velocity Capabilities */}
      <BentoGrid />

      {/* 12. Transparent SaaS Pricing & Annual Discount Switch */}
      <PricingSection />

      {/* 13. Customer Testimonials */}
      <Testimonials />

      {/* 15. 12-Item Interactive FAQ Accordion */}
      <FAQSection />
    </>
  );
}
