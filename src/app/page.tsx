"use client";

import * as React from "react";
import Link from "next/link";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { RoleSwitcherDemo } from "@/components/navigation/RoleSwitcherDemo";
import {
  Scale,
  Sparkles,
  Search,
  ShieldCheck,
  Briefcase,
  FileText,
  Bot,
  Users,
  Database,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Gavel,
  BookOpen,
} from "lucide-react";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [switcherOpen, setSwitcherOpen] = React.useState(false);
  const { switchUserRole } = useAuthStore();
  const router = useRouter();

  const handleRoleLaunch = (role: "client" | "advocate" | "admin" | "knowledge_admin", route: string) => {
    switchUserRole(role);
    router.push(route);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PublicHeader />

      <main className="flex-1">
        {/* Top Demo Bar */}
        <div className="border-b border-slate-200/80 bg-slate-100/90 py-2.5 px-4 text-center">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-600 animate-pulse" />
              <span className="font-semibold text-slate-900">
                Phase 1 Complete:
              </span>
              <span>
                Frontend Foundation, Design System, Mock Layer & Multi-Role Shells Established.
              </span>
            </div>
            <button
              onClick={() => setSwitcherOpen(true)}
              className="text-xs font-semibold text-teal-700 hover:text-teal-900 underline flex items-center gap-1 cursor-pointer"
            >
              Open Role Switcher Modal <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-100 bg-gradient-to-b from-slate-50/50 via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Vision & Positioning */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-medium text-teal-800">
                  <Scale className="h-3.5 w-3.5 text-teal-600" />
                  <span>India-First AI Legal Intelligence Platform</span>
                  <span className="text-teal-400">•</span>
                  <span className="font-semibold">Kerala Pilot Initial Market</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
                  The AI Operating System for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-slate-900">
                    Indian Legal Work
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Wakheel unifies Indian case-law discovery, High Court research, AI matter intelligence, citation verification, and secure document vaults into a single professional workspace designed specifically for advocates, law firms, and citizens.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button
                    size="lg"
                    variant="primary"
                    onClick={() => handleRoleLaunch("advocate", "/advocate/dashboard")}
                    className="gap-2 shadow-md bg-slate-950 hover:bg-slate-800 text-white font-semibold"
                  >
                    <Scale className="h-4 w-4 text-teal-400" />
                    Enter Advocate Workspace
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handleRoleLaunch("client", "/client/dashboard")}
                    className="gap-2 border-slate-300 font-semibold"
                  >
                    <Users className="h-4 w-4 text-slate-700" />
                    Client Portal Demo
                  </Button>

                  <Button
                    size="lg"
                    variant="ghost"
                    onClick={() => setSwitcherOpen(true)}
                    className="text-xs text-teal-800 hover:text-teal-900 font-medium"
                  >
                    View All 4 Personas →
                  </Button>
                </div>

                {/* Compliance & Trust Markers */}
                <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/70 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                    <span>Bar Council Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                    <span>Shepardized Citations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                    <span>Human Review Mandatory</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Interactive Workspace Preview Component */}
              <div className="lg:col-span-5">
                <Card className="border-slate-300 shadow-xl overflow-hidden bg-white">
                  <div className="bg-slate-900 p-4 text-white flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-mono text-slate-300 ml-2 font-medium">
                        Wakheel Intelligence Preview
                      </span>
                    </div>
                    <Badge variant="teal" className="text-[10px]">
                      LIVE COMPONENT
                    </Badge>
                  </div>

                  <CardContent className="p-5 space-y-4">
                    {/* Sample Citation Check Preview */}
                    <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-500">
                          AIR 2020 SC 59 • Supreme Court
                        </span>
                        <Badge verificationStatus="VALID" />
                      </div>
                      <p className="text-xs font-semibold text-slate-900">
                        Perkins Eastman Architects DPC v. HSCC (India) Ltd.
                      </p>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        Held that a party ineligible to act as arbitrator cannot nominate a sole arbitrator. Unilateral appointment clauses declared void ab initio.
                      </p>
                    </div>

                    {/* Sample Contract Risk Item */}
                    <div className="rounded-lg border border-slate-200 bg-white p-3.5 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-900">
                          Clause 14.2 — Dispute Resolution
                        </span>
                        <Badge riskLevel="RED" />
                      </div>
                      <p className="text-[11px] text-slate-600">
                        Identified unilateral arbitration clause requiring High Court Sec 11 petition before the Kerala High Court.
                      </p>
                    </div>

                    {/* Legal AI Disclaimer */}
                    <DisclaimerBanner
                      type="ai_disclaimer"
                      message="AI analysis for research assistance. Not a substitute for professional legal advice from an enrolled advocate."
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Unified Workspaces Showcase */}
        <section className="py-16 bg-slate-50/60 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Architectural Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
                Four Dedicated Application Workspaces
              </h2>
              <p className="text-sm text-slate-600">
                Completely decoupled navigation and journeys for every stakeholder in the Indian legal ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Common Man Client */}
              <Card className="hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center mb-2">
                    <Users className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">Common Man Client</CardTitle>
                  <CardDescription>
                    Plain-language legal help wizard, verified advocate discovery in Kerala/India, matter tracking, and timeline.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    className="w-full text-xs"
                    onClick={() => handleRoleLaunch("client", "/client/dashboard")}
                  >
                    Open Client Portal →
                  </Button>
                </CardContent>
              </Card>

              {/* Advocate Workspace */}
              <Card className="hover:border-slate-400 hover:shadow-md transition-all border-teal-500/50 bg-teal-50/20 flex flex-col justify-between">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-slate-900 text-teal-400 flex items-center justify-center mb-2">
                    <Scale className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">Advocate & Chambers</CardTitle>
                  <CardDescription>
                    Matter intelligence, High Court research, AI Copilot, drafting, contract intelligence, vault, and calendar.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="primary"
                    className="w-full text-xs"
                    onClick={() => handleRoleLaunch("advocate", "/advocate/dashboard")}
                  >
                    Open Advocate OS →
                  </Button>
                </CardContent>
              </Card>

              {/* Platform Governance */}
              <Card className="hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center mb-2">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">Platform Governance</CardTitle>
                  <CardDescription>
                    State Bar Council verification workflows, least-privilege moderation, dispute handling, and system health.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    className="w-full text-xs"
                    onClick={() => handleRoleLaunch("admin", "/admin/dashboard")}
                  >
                    Open Admin Portal →
                  </Button>
                </CardContent>
              </Card>

              {/* Knowledge Curation */}
              <Card className="hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center mb-2">
                    <Database className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">Knowledge Admin</CardTitle>
                  <CardDescription>
                    Statute catalogue, gazette ingestion pipeline, citation graph management, and vector index monitoring.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    className="w-full text-xs"
                    onClick={() => handleRoleLaunch("knowledge_admin", "/knowledge-admin/dashboard")}
                  >
                    Open Knowledge Admin →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />

      {/* Role Switcher Dialog */}
      <RoleSwitcherDemo open={switcherOpen} onOpenChange={setSwitcherOpen} />
    </div>
  );
}
