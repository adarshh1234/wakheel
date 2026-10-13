"use client";

import * as React from "react";
import { useAuthStore } from "@/stores/auth-store";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { MOCK_MATTERS, MOCK_VAULT_DOCUMENTS, MOCK_LEGAL_AGENTS } from "@/lib/mock-data";
import {
  Scale,
  Briefcase,
  Search,
  Sparkles,
  Bot,
  Calendar,
  Clock,
  FileText,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Plus,
} from "lucide-react";
import Link from "next/link";

export default function AdvocateDashboardPage() {
  const { currentUser } = useAuthStore();
  const advocate = currentUser as any;

  return (
    <div className="space-y-6">
      {/* Top Practice Overview Header */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              {advocate.name || "Advocate Practice"}
            </h1>
            <Badge variant="success" className="text-[10px]">
              {advocate.verificationStatus || "Verified"}
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 text-xs text-slate-500">
            <span>Bar Council: <strong className="text-slate-700">{advocate.barCouncilNumber || "K/1429/2012"}</strong></span>
            <span>•</span>
            <span>State: <strong className="text-slate-700">{advocate.stateBarCouncil || "Bar Council of Kerala"}</strong></span>
            <span>•</span>
            <span>Experience: <strong className="text-slate-700">{advocate.experienceYears || 13} Years Standing</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="/advocate/research">
            <Button variant="outline" size="sm" className="gap-1.5 text-xs">
              <Search className="h-3.5 w-3.5 text-slate-600" />
              Indian Law Research
            </Button>
          </Link>
          <Link href="/advocate/ai-assistant">
            <Button variant="primary" size="sm" className="gap-1.5 text-xs bg-slate-900 text-white">
              <Sparkles className="h-3.5 w-3.5 text-teal-400" />
              AI Legal Copilot
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
        <Card className="p-3.5 border-slate-200">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
            Active Matters
          </span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-slate-900">{MOCK_MATTERS.length}</span>
            <span className="text-[11px] text-teal-700 font-medium">Kerala High Court</span>
          </div>
        </Card>

        <Card className="p-3.5 border-slate-200">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
            Upcoming Hearings
          </span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-slate-900">2</span>
            <span className="text-[11px] text-amber-700 font-medium">Bench 4B Listed</span>
          </div>
        </Card>

        <Card className="p-3.5 border-slate-200">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
            Contract Risks Flagged
          </span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-red-600">1 RED</span>
            <span className="text-[11px] text-slate-500">Perkins Eastman</span>
          </div>
        </Card>

        <Card className="p-3.5 border-slate-200">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
            AI Drafts in Review
          </span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-slate-900">3</span>
            <span className="text-[11px] text-purple-700 font-medium">Pending Sign-off</span>
          </div>
        </Card>

        <Card className="p-3.5 border-slate-200 col-span-2 lg:col-span-1">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
            Verified Citations
          </span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-emerald-700">100%</span>
            <span className="text-[11px] text-emerald-600 font-medium">Checked</span>
          </div>
        </Card>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols): Matters Table & AI Copilot Workspace */}
        <div className="lg:col-span-8 space-y-6">
          {/* Active Matters Feed */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div>
                <CardTitle className="text-base">Matter Intelligence Workspace</CardTitle>
                <CardDescription>
                  Litigation files, court benches, opposing parties, and hearing timelines
                </CardDescription>
              </div>
              <Link href="/advocate/matters">
                <Button variant="ghost" size="sm" className="text-xs">
                  View All Matters →
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-3">
              {MOCK_MATTERS.map((matter) => (
                <div
                  key={matter.id}
                  className="rounded-xl border border-slate-200 p-4 hover:border-slate-300 transition-all bg-white"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                        {matter.matterNumber}
                      </span>
                      <span className="text-xs font-medium text-slate-600">
                        {matter.court}
                      </span>
                    </div>
                    <Badge variant="teal" className="capitalize text-[11px]">
                      {matter.status.replace("_", " ")}
                    </Badge>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {matter.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500 my-2">
                    <div>
                      <span className="text-slate-400">Client:</span> {matter.clientName}
                    </div>
                    <div>
                      <span className="text-slate-400">Opposing:</span> {matter.opposingParty.name}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span><strong>{matter.facts.length}</strong> Facts</span>
                      <span>•</span>
                      <span><strong>{matter.issues.length}</strong> Issues</span>
                      <span>•</span>
                      <span><strong>{matter.documentCount}</strong> Documents</span>
                    </div>
                    <Link href={`/advocate/matters`}>
                      <Button variant="outline" size="sm" className="text-xs h-7">
                        Open Matter Workspace
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick AI Legal Agents Preview */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-teal-700" />
                <div>
                  <CardTitle className="text-base">Configurable AI Legal Agents</CardTitle>
                  <CardDescription>
                    Automated Indian legal research, contract review, and citation checks
                  </CardDescription>
                </div>
              </div>
              <Link href="/advocate/agents">
                <Button variant="ghost" size="sm" className="text-xs">
                  All Agents →
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MOCK_LEGAL_AGENTS.slice(0, 4).map((agent) => (
                  <div
                    key={agent.id}
                    className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-semibold text-slate-900">{agent.name}</h4>
                      <span className="text-[10px] uppercase font-bold text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">
                        {agent.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {agent.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (4 cols): Hearing Deadlines & Compliance */}
        <div className="lg:col-span-4 space-y-6">
          {/* Upcoming Hearing Listings */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Court Listings & Hearings</CardTitle>
                <Calendar className="h-4 w-4 text-slate-500" />
              </div>
              <CardDescription>High Court of Kerala Cause List</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900">20-Nov-2024 • 11:15 AM</span>
                  <Badge variant="warning" className="text-[10px]">Bench 4B</Badge>
                </div>
                <p className="text-xs font-semibold text-slate-900">
                  WP(C) 19482/2024 — Final Arguments
                </p>
                <p className="text-[11px] text-slate-600">
                  Hon&apos;ble Justice K. Haripal • Reply affidavit to KSEB counter to be handed over.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-3 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Task Deadline</span>
                  <span className="font-mono text-red-600 font-semibold">12-Nov-2024</span>
                </div>
                <p className="text-xs font-medium text-slate-800">
                  File reply affidavit with registry
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Vault Documents with Risk */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Document Vault & Risks</CardTitle>
                <FileText className="h-4 w-4 text-slate-500" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              {MOCK_VAULT_DOCUMENTS.map((doc) => (
                <div key={doc.id} className="p-3 rounded-lg border border-slate-200 bg-white space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-900 truncate max-w-[180px]">
                      {doc.title}
                    </span>
                    <Badge riskLevel={doc.overallRisk} />
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {doc.fileSize} • {doc.category}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Advocate Human Review Sign-Off Reminder */}
          <DisclaimerBanner
            type="human_review_required"
            message="Advocate on Record review is mandatory. AI legal intelligence outputs must be verified against certified court texts."
          />
        </div>
      </div>
    </div>
  );
}
