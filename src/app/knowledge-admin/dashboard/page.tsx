"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { MOCK_LEGAL_SOURCES } from "@/lib/mock-data";
import {
  Database,
  BookOpen,
  GitBranch,
  Layers,
  UploadCloud,
  CheckCircle2,
  RefreshCw,
  FileCheck,
} from "lucide-react";

export default function KnowledgeAdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Curation Overview Header */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              Legal Knowledge Curation & Ingestion
            </h1>
            <Badge variant="teal">Knowledge Curator</Badge>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Indian Statutory Corpus • Kerala High Court & Supreme Court Gazette Pipeline
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5 text-xs">
            <RefreshCw className="h-3.5 w-3.5" /> Re-sync Vector Index
          </Button>
          <Button variant="primary" size="sm" className="gap-1.5 text-xs bg-slate-900 text-white">
            <UploadCloud className="h-3.5 w-3.5 text-teal-400" /> Ingest New Statute
          </Button>
        </div>
      </div>

      {/* Pipeline Status Counters */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 border-slate-200">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            Indexed Judgments
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-slate-900">142,800</span>
            <span className="text-xs text-teal-700 font-medium">SC & Kerala HC</span>
          </div>
        </Card>

        <Card className="p-4 border-slate-200">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            Central & State Acts
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-slate-900">1,894</span>
            <span className="text-xs text-slate-500">BNS/BNSS Updated</span>
          </div>
        </Card>

        <Card className="p-4 border-slate-200">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            Citation Graph Nodes
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-slate-900">480,210</span>
            <span className="text-xs text-emerald-600 font-medium">Cross-Linked</span>
          </div>
        </Card>

        <Card className="p-4 border-slate-200">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            Pending Curation Review
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-amber-700">6</span>
            <span className="text-xs text-amber-600 font-medium">KLT Bench Notes</span>
          </div>
        </Card>
      </div>

      {/* Legal Source Catalogue Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base">Active Legal Source Catalogue</CardTitle>
            <CardDescription>
              Verified statutory enactments, Kerala gazettes, and Supreme Court precedent holdings
            </CardDescription>
          </div>
          <Badge variant="outline" className="text-xs">
            Demonstration Corpus
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-slate-100">
            {MOCK_LEGAL_SOURCES.map((source) => (
              <div key={source.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">{source.title}</span>
                    <Badge variant="secondary" className="text-[10px]">
                      {source.sourceType.replace("_", " ")}
                    </Badge>
                    <Badge verificationStatus={source.verificationStatus} className="text-[10px]" />
                  </div>
                  <p className="text-xs text-slate-600">
                    Citation: <strong className="text-slate-800">{source.citation}</strong> • Court/Body: {source.courtOrBody}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {source.headnotesSummary}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Button variant="outline" size="sm" className="text-xs h-8">
                    View Holdings
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs h-8 text-teal-700">
                    Graph Links
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ingestion Pipeline Notice */}
      <DisclaimerBanner
        type="demo_notice"
        message="Simulated Legal Knowledge Ingestion Pipeline: All statutes, gazettes, and judgment headnotes shown are illustrative demonstration records."
      />
    </div>
  );
}
