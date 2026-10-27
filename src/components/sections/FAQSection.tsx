"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import { FAQ_LIST } from "@/data/faq";

export default function FAQSection() {
  // Default first FAQ open for an inviting look, others collapsed
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-10 sm:py-14 lg:py-16 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#735ae5] bg-[#735ae5]/10 px-3 py-1 rounded-full border border-[#735ae5]/20 mb-3.5">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Everything You Need to Know
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Clear, straightforward answers about our platform, migration, and integrations.
            </p>
          </Reveal>
        </div>

        {/* Clean 6-Item Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <Reveal key={faq.id} delay={idx * 0.04} direction="up">
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                    isOpen
                      ? "border-[#735ae5]/40 shadow-sm ring-1 ring-[#735ae5]/20 bg-slate-50/20"
                      : "border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-4 sm:p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#735ae5]"
                  >
                    <h3
                      className={`text-sm sm:text-base md:text-[17px] font-semibold tracking-tight transition-colors leading-snug ${
                        isOpen ? "text-[#735ae5]" : "text-slate-900 hover:text-[#735ae5]"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 bg-[#735ae5] text-white"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-5 pt-0 sm:px-5 sm:pb-6 md:px-6 md:pb-6 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Clean Minimal Support Footer */}
        <div className="mt-10 sm:mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600">
          <span>Still have questions? We are here to help.</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-semibold text-[#735ae5] hover:text-[#6247df] transition-colors"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
