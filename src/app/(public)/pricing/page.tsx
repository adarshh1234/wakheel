"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Scale, Shield, Sparkles } from "lucide-react";

export default function PricingPage() {
  const tiers = [
    {
      name: "Common Man / Citizen",
      price: "₹0",
      period: "free tier",
      description: "For individuals seeking legal advice, filing assistance, and verified advocate discovery.",
      features: [
        "Plain-language legal help wizard",
        "Directory of verified Kerala advocates",
        "Encrypted document vault (up to 25 MB)",
        "Direct consultation booking with advocates",
        "Matter timeline and court posting alerts",
      ],
      buttonText: "Create Citizen Account",
      buttonVariant: "outline" as const,
      highlight: false,
    },
    {
      name: "Advocate Professional",
      price: "₹2,499",
      period: "per month (billed annually)",
      description: "For individual advocates practicing before Kerala High Court and District Courts.",
      features: [
        "Full Indian Legal Research Engine access",
        "Shepardized citation verification matrix",
        "Matter Intelligence workspace (unlimited matters)",
        "AI Legal Copilot (Research, Review, Draft)",
        "Kerala High Court cause list integration",
        "Contract intelligence & clause risk analysis",
      ],
      buttonText: "Start 14-Day Chamber Trial",
      buttonVariant: "teal" as const,
      highlight: true,
      badge: "MOST POPULAR",
    },
    {
      name: "Law Chamber & Firm",
      price: "₹7,999",
      period: "per month (up to 5 counsel)",
      description: "For multi-advocate law chambers, corporate legal departments, and senior counsel offices.",
      features: [
        "Everything in Advocate Professional",
        "Shared institutional knowledge base & playbooks",
        "Multi-lawyer matter delegation & tasks",
        "Autonomous Legal Agents & Deep Research Memos",
        "Client billing, invoices, and GST accounting",
        "Chamber priority onboarding & support",
      ],
      buttonText: "Request Chamber Demo",
      buttonVariant: "primary" as const,
      highlight: false,
    },
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <Scale className="h-3.5 w-3.5 text-teal-700" />
          <span>Transparent Indian Rupee Pricing</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Simple Plans for Citizens, Advocates & Chambers
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Select the right plan to empower your practice with verified case law, automated drafts, and matter intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`p-6 flex flex-col justify-between ${
              tier.highlight ? "border-teal-600 ring-2 ring-teal-600/20 shadow-lg bg-teal-50/10" : ""
            }`}
          >
            <div>
              {tier.badge && (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-700 text-white uppercase tracking-wider mb-3">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">{tier.description}</p>

              <div className="flex items-baseline gap-1 my-4">
                <span className="text-3xl font-extrabold text-slate-950">{tier.price}</span>
                <span className="text-xs text-slate-500">{tier.period}</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link href="/auth">
                <Button variant={tier.buttonVariant} className="w-full text-xs font-semibold py-2.5">
                  {tier.buttonText}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center max-w-2xl mx-auto text-xs text-slate-500">
        Demo Notice: Subscription tiers and fees are illustrative demonstration interfaces. No payment gateway charges are initiated during this frontend preview.
      </div>
    </div>
  );
}
