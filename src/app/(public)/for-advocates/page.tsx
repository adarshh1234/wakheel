"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Briefcase, Calendar, PenTool, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ForAdvocatesPage() {
  const highlights = [
    {
      title: "Kerala High Court Cause List Integration",
      description: "Automated court calendar syncing with Bench postings, item numbers, and daily cause list updates for Ernakulam and subordinate courts.",
    },
    {
      title: "Matter Intelligence & Fact-Issue Trees",
      description: "Organize litigation files with chronological fact timelines, disputed issue matrices, and linked supporting authorities.",
    },
    {
      title: "Automated Pleading & Notice Drafting",
      description: "Generate compliant drafts for writ petitions, Section 21 arbitration notices, and reply affidavits with standard chamber clauses.",
    },
    {
      title: "Strict Bar Council Regulatory Compliance",
      description: "Built strictly in adherence to Bar Council of India rules. Factual professional discovery without prohibited advertisements or ranking claims.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <Scale className="h-3.5 w-3.5 text-teal-700" />
          <span>Advocate Practice Operating System</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Supercharge Your Chamber Practice with Matter Intelligence
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Designed specifically for Advocates on Record, law chambers, and litigation counsel practicing before the High Court of Kerala and Indian Courts.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Link href="/auth?role=advocate">
            <Button variant="primary" size="lg" className="font-semibold gap-2 bg-slate-950">
              Enter Advocate Workspace <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="lg">
              View Chamber Plans
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {highlights.map((item) => (
          <Card key={item.title} className="p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
