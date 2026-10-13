"use client";

import * as React from "react";
import { Suspense } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useMatterStore } from "@/stores/matter-store";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  FileText,
  Scale,
  Sparkles,
  Clock,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

function MatterDetailContent() {
  const params = useParams();
  const router = useRouter();
  const { matters } = useMatterStore();

  const matterId = params?.id as string;
  const matter = matters.find((m) => m.id === matterId) || matters[0];

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb & Header */}
      <div className="flex items-center gap-3">
        <Link href="/advocate/matters">
          <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Matters
          </Button>
        </Link>
        <span className="text-xs text-slate-400">/</span>
        <span className="text-xs font-mono font-bold text-slate-700">{matter.matterNumber}</span>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-slate-900 text-white">
              {matter.matterNumber}
            </span>
            <span className="text-xs font-semibold text-slate-700">{matter.court}</span>
          </div>
          <Badge variant="teal" className="capitalize">
            {matter.status.replace("_", " ")}
          </Badge>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-slate-950">{matter.title}</h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
          <div>
            <span className="text-slate-400 block">Client:</span>
            <strong>{matter.clientName}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">Opposing Party:</span>
            <strong>{matter.opposingParty.name}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">Filing Date:</span>
            <strong>{matter.filingDate}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">Review Status:</span>
            <strong className="text-teal-700 capitalize">{matter.reviewStatus.replace("_", " ")}</strong>
          </div>
        </div>
      </div>

      {/* Tabs: Facts, Issues, Hearings, Documents, AI Insights */}
      <Tabs defaultValue="facts">
        <TabsList className="bg-white border border-slate-200 p-1">
          <TabsTrigger value="facts">Material Facts ({matter.facts.length})</TabsTrigger>
          <TabsTrigger value="issues">Legal Issues ({matter.issues.length})</TabsTrigger>
          <TabsTrigger value="hearings">Court Hearings ({matter.hearings.length})</TabsTrigger>
          <TabsTrigger value="tasks">Chamber Tasks ({matter.tasks.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="facts" className="space-y-3 pt-2">
          {matter.facts.map((fact) => (
            <Card key={fact.id} className="p-4 bg-white">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-mono font-semibold text-slate-700">{fact.date}</span>
                {fact.verifiedByAdvocate && (
                  <Badge variant="success" className="text-[10px]">
                    Advocate Verified
                  </Badge>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{fact.description}</p>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="issues" className="space-y-3 pt-2">
          {matter.issues.map((iss) => (
            <Card key={iss.id} className="p-4 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Applicable Law: {iss.applicableLaw}</span>
                <Badge variant="warning" className="capitalize text-[10px]">{iss.status.replace("_", " ")}</Badge>
              </div>
              <h4 className="text-sm font-bold text-slate-900">{iss.issueStatement}</h4>
              <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1">
                <div><span className="font-semibold text-slate-700">Petitioner Stance:</span> {iss.petitionerStance}</div>
                <div><span className="font-semibold text-slate-700">Respondent Stance:</span> {iss.respondentStance}</div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="hearings" className="space-y-3 pt-2">
          {matter.hearings.map((h) => (
            <Card key={h.id} className="p-4 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 font-mono">{h.date} • {h.time}</span>
                <Badge variant="outline">{h.status}</Badge>
              </div>
              <p className="text-xs font-semibold text-slate-800">{h.courtRoom} • {h.judgeBench}</p>
              <p className="text-xs text-slate-600">Purpose: {h.purpose}</p>
              {h.outcome && (
                <div className="p-2.5 rounded bg-emerald-50 text-emerald-900 text-xs font-medium">
                  Outcome: {h.outcome}
                </div>
              )}
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="tasks" className="space-y-3 pt-2">
          {matter.tasks.map((t) => (
            <Card key={t.id} className="p-4 bg-white flex items-center justify-between">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-900">{t.title}</h4>
                <p className="text-[11px] text-slate-500">Assigned: {t.assignedTo} • Due: {t.dueDate}</p>
              </div>
              <Badge variant="secondary" className="capitalize text-[10px]">{t.status.replace("_", " ")}</Badge>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      <DisclaimerBanner
        type="human_review_required"
        message="Matter records and issue formulation must be verified by the designated Advocate on Record."
      />
    </div>
  );
}

export default function MatterDetailPage() {
  return (
    <Suspense fallback={<div className="p-8 text-xs text-slate-500">Loading matter workspace...</div>}>
      <MatterDetailContent />
    </Suspense>
  );
}
