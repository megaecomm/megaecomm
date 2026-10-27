"use client";

import React from "react";
import { ShieldCheck, Lock, KeyRound, Database, FileCheck, Eye, RefreshCw, Cpu } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export default function SecuritySection() {
  const securityFeatures = [
    {
      title: "Granular Role-Based Access (RBAC)",
      desc: "Assign strict permissions across warehouse packers, inventory managers, accountants, and administrators.",
      icon: KeyRound,
    },
    {
      title: "End-to-End Transit & Rest Encryption",
      desc: "Industry standard TLS 1.3 encryption in transit with AES-256 encrypted database volumes and tokenized credentials.",
      icon: Lock,
    },
    {
      title: "Immutable Activity & Audit Logs",
      desc: "Every price change, order cancellation, and refund is cryptographically signed and logged for auditability.",
      icon: FileCheck,
    },
    {
      title: "Automated Continuous Backups",
      desc: "Point-in-time recovery with multi-region replicated snapshots ensure your data is always safe and recoverable.",
      icon: Database,
    },
    {
      title: "Scoped API Tokens & Rate Limiting",
      desc: "Issue granular API keys with read/write restrictions, IP allowlists, and real-time abuse detection throttles.",
      icon: Cpu,
    },
    {
      title: "Proactive 24/7 Threat Monitoring",
      desc: "Continuous vulnerability scanning, automated DDOS protection, and real-time anomaly alerts across all endpoints.",
      icon: Eye,
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-18 bg-[#141413] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(115,90,229,0.3),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-12">
          <Reveal direction="up">
            {/* Animated Shield Visualization */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-[#735ae5]/15 border border-[#735ae5]/30 text-[#7ecdf5] mb-5 relative group">
              <span className="absolute inset-0 rounded-3xl bg-[#735ae5]/20 blur-md group-hover:blur-lg transition-all" />
              <ShieldCheck className="w-8 h-8 relative z-10" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[42px] font-bold text-white tracking-tight">
              Built With Security at the Core.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed font-normal">
              Designed from the ground up with enterprise-grade data protection, strict isolation, and continuous auditing.
            </p>
          </Reveal>
        </div>

        {/* Security Feature Grid in 2-Column Mobile Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
          {securityFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 0.08} direction="up">
                <div className="h-full p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#1c1c1a] border border-white/10 hover:border-[#735ae5]/60 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#141413] border border-white/10 flex items-center justify-center text-[#7ecdf5] mb-2.5 sm:mb-4">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 leading-snug sm:leading-snug">{item.title}</h3>
                    <p className="text-[11px] sm:text-sm text-slate-400 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
