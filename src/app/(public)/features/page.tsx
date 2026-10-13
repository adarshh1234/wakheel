"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scale,
  Sparkles,
  Search,
  ShieldCheck,
  Briefcase,
  FileText,
  Bot,
  Workflow,
  PenTool,
  FileCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: Search,
      title: "Indian Legal Research Engine",
      description: "Search Supreme Court judgments, High Court of Kerala precedents, central enactments (BNS, CPC, CrPC), and state gazettes with automated citation cross-referencing.",
      badge: "High Courts & SC",
    },
    {
      icon: Sparkles,
      title: "Wakheel AI Legal Copilot",
      description: "Ask complex legal questions, generate multi-statutory analyses, review pleading drafts, and spot contrary authorities with explicit human-review guardrails.",
      badge: "Guardrailed AI",
    },
    {
      icon: Briefcase,
      title: "Matter Intelligence Workspace",
      description: "Unify litigation facts, disputed issues, case law authorities, hearing schedules, and opposing party strategies into a single operational workspace.",
      badge: "Litigation OS",
    },
    {
      icon: FileCheck,
      title: "Contract Intelligence & Redlining",
      description: "Analyze contracts under Indian Contract Act principles, detect high-risk clauses (RED/YELLOW/GREEN), and flag non-compliant arbitrator nominations under Perkins Eastman.",
      badge: "Risk Heatmap",
    },
    {
      icon: ShieldCheck,
      title: "Shepardized Citation Verification",
      description: "Instantly verify whether citations are VALID, PARTIALLY_VALID, CONFLICTING, or UNVERIFIED with overruling detection and negative judicial treatment graphs.",
      badge: "Zero Hallucination",
    },
    {
      icon: FileText,
      title: "Encrypted Document Vault",
      description: "Secure digital depository for petitions, counter-affidavits, and client KYC with automated OCR, version control trees, and security scanning.",
      badge: "Kerala Vault",
    },
    {
      icon: PenTool,
      title: "Legal Drafting & Notice Generator",
      description: "Draft statutory legal notices, Kerala High Court writ petition templates, Section 21 arbitration notices, and reply affidavits with clause suggestions.",
      badge: "Pleadings",
    },
    {
      icon: Bot,
      title: "Specialized AI Legal Agents",
      description: "Configurable autonomous agents for fact chronology building, evidence review, case preparation, and 16-step Deep Research legal memos.",
      badge: "Autonomous Agents",
    },
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <Scale className="h-3.5 w-3.5" />
          <span>Product Capabilities</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Comprehensive AI Intelligence for Indian Legal Work
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Wakheel unites legal research, matter management, document intelligence, and compliance tools into an integrated platform built for Indian legal realities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feat) => {
          const Icon = feat.icon;
          return (
            <Card key={feat.title} className="hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="h-10 w-10 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Badge variant="teal" className="text-[10px]">
                    {feat.badge}
                  </Badge>
                </div>
                <CardTitle className="text-base font-bold text-slate-900">{feat.title}</CardTitle>
                <CardDescription className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {feat.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold">Experience the Wakheel Workspace Demo</h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Explore our advocate practice OS or client legal portal with preloaded Kerala and Indian legal data.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <Link href="/auth">
            <Button variant="teal" size="lg" className="font-semibold gap-2">
              Launch Demo Workspace <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
