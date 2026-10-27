"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "demo",
    monthlyOrders: "2,500 - 10,000",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name.";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid business email address.";
    }
    if (!formData.company.trim())
      errs.company = "Please enter your company name.";
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Please enter a valid phone number.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate reliable submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-16">
      {/* Hero */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto">
          Talk to a Commerce Specialist.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
          Whether you want a tailored platform walkthrough, custom enterprise
          pricing, or technical migration assistance.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12">
          {/* Left Column: Direct Contact Details & SLA */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Direct Support Channels
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Our operations and engineering teams are distributed to provide
                around-the-clock enterprise assistance.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 hover:border-[#735ae5]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#735ae5]/10 flex items-center justify-center text-[#735ae5] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Email Address</div>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-slate-700 hover:text-[#735ae5] font-medium transition-colors mt-0.5 inline-block font-mono text-xs sm:text-sm"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                  {/* <div className="text-[11px] text-emerald-600 font-medium mt-1">Average response: &lt; 15 mins</div> */}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 hover:border-[#735ae5]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#735ae5]/10 flex items-center justify-center text-[#735ae5] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    Direct Phone Support
                  </div>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                    className="text-slate-700 hover:text-[#735ae5] font-medium transition-colors mt-0.5 inline-block font-mono text-xs sm:text-sm"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Mon-Sat: 9:00 AM – 8:00 PM IST
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 hover:border-[#735ae5]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#735ae5]/10 flex items-center justify-center text-[#735ae5] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    Registered Office Address
                  </div>
                  <div className="text-slate-700 mt-0.5 leading-relaxed text-xs sm:text-sm">
                    {SITE_CONFIG.contact.office}
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.contact.office)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#735ae5] hover:underline mt-1.5 inline-flex items-center gap-1"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="p-5 rounded-2xl bg-[#735ae5]/5 border border-[#735ae5]/20 space-y-2 text-xs text-slate-800">
              <div className="flex items-center gap-2 font-bold text-[#735ae5]">
                <ShieldCheck className="w-4 h-4 text-[#735ae5]" />
                <span>Zero Pressure Advisory</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We will conduct an objective audit of your order workflows and
                tell you candidly if Mega Ecomm is the right fit.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you,{" "}
                    <strong className="text-slate-900">{formData.name}</strong>.
                    A commerce solutions architect will reach out to{" "}
                    <strong className="text-slate-900">{formData.email}</strong>{" "}
                    within 15 minutes.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        inquiryType: "demo",
                        monthlyOrders: "2,500 - 10,000",
                        message: "",
                      });
                    }}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 text-xs sm:text-sm"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Schedule a Consultation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vikram Singhania"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full p-3 rounded-xl border ${
                          errors.name
                            ? "border-rose-500 bg-rose-50/20"
                            : "border-slate-300"
                        } focus:ring-2 focus:ring-[#735ae5] focus:outline-none`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-500 mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. vikram@brand.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full p-3 rounded-xl border ${
                          errors.email
                            ? "border-rose-500 bg-rose-50/20"
                            : "border-slate-300"
                        } focus:ring-2 focus:ring-[#735ae5] focus:outline-none`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-500 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vibe Audio D2C"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className={`w-full p-3 rounded-xl border ${
                          errors.company
                            ? "border-rose-500 bg-rose-50/20"
                            : "border-slate-300"
                        } focus:ring-2 focus:ring-[#735ae5] focus:outline-none`}
                      />
                      {errors.company && (
                        <span className="text-[11px] text-rose-500 mt-1 block">
                          {errors.company}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98200 12345"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full p-3 rounded-xl border ${
                          errors.phone
                            ? "border-rose-500 bg-rose-50/20"
                            : "border-slate-300"
                        } focus:ring-2 focus:ring-[#735ae5] focus:outline-none`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-rose-500 mt-1 block">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5">
                        Primary Interest
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            inquiryType: e.target.value,
                          })
                        }
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#735ae5] focus:outline-none"
                      >
                        <option value="demo">Live Product Demo</option>
                        <option value="enterprise">
                          Enterprise VPC &amp; Pricing
                        </option>
                        <option value="migration">
                          Migration from Legacy Software
                        </option>
                        <option value="integration">
                          Custom ERP Connector
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5">
                        Monthly Order Volume
                      </label>
                      <select
                        value={formData.monthlyOrders}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            monthlyOrders: e.target.value,
                          })
                        }
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#735ae5] focus:outline-none"
                      >
                        <option value="Under 2,500">Under 2,500 / month</option>
                        <option value="2,500 - 10,000">
                          2,500 - 10,000 / month
                        </option>
                        <option value="10,000 - 50,000">
                          10,000 - 50,000 / month
                        </option>
                        <option value="50,000+">
                          50,000+ / month (Enterprise)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      How can our team assist you? (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your current sales channels, warehouse nodes, or key operational challenges..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#735ae5] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={loading}
                      withArrow={!loading}
                    >
                      {loading ? "Processing..." : "Schedule Live Consultation"}
                    </Button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-2">
                    By submitting, you agree to our Privacy Policy and Terms of
                    Service. No spam ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
