import { CaseStudyItem } from "@/types";

export const CASE_STUDIES_LIST: CaseStudyItem[] = [
  {
    company: "Zest Footwear Co.",
    industry: "Athletic & Lifestyle Footwear",
    problem:
      "Operating 14 retail stores, a Shopify Plus website, and Amazon India accounts led to severe inventory desynchronization and a 12% return-to-origin (RTO) rate due to fulfillment delays.",
    solution:
      "Implemented Mega Ecomm's unified inventory radar and automated carrier allocation rules with automated WhatsApp address confirmation triggers.",
    result:
      "Reduced inventory stockout cancellations by 91%, lowered transit delivery time by 1.6 days, and cut overall shipping logistics expenditure by 22%.",
    statGain: "-91%",
    statLabel: "Stockout Cancellations",
  },
  {
    company: "PureSkin Botanicals",
    industry: "Organic Skincare & Beauty",
    problem:
      "Managing over 850 product SKUs and dynamic bundled gift sets caused frequent manual packing mistakes in the warehouse and delayed festive shipment dispatches.",
    solution:
      "Deployed Mega Ecomm's multi-variant matrix and visual barcode scanning packing verification workflow.",
    result:
      "Fulfillment accuracy soared to 99.98%, warehouse dispatch throughput doubled from 400 to 920 packages per shift, and peak order handling scaled seamlessly.",
    statGain: "2.3x",
    statLabel: "Fulfillment Velocity",
  },
  {
    company: "Nomad Gear India",
    industry: "Outdoor Apparel & Travel",
    problem:
      "Lack of true gross margin clarity due to hidden return costs, courier weight discrepancies, and fluctuating marketplace commission fees.",
    solution:
      "Integrated Mega Ecomm Analytics & BI module to track real-time contribution margin down to individual SKUs and marketing ad campaigns.",
    result:
      "Eliminated underperforming loss-making variants, boosting company-wide EBITDA by 14.5% within 120 days of rollout.",
    statGain: "+14.5%",
    statLabel: "EBITDA Margin Improvement",
  },
];
