"use client";

import * as React from "react";
import { Suspense } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_MATTERS } from "@/lib/mock-data";
import { ArrowLeft, Briefcase, Calendar, FileText, CheckCircle2 } from "lucide-react";

function ClientMatterDetailContent() {
  const params = useParams();
  const matterId = params?.id as string;
  const matter = MOCK_MATTERS.find((m) => m.id === matterId) || MOCK_MATTERS[0];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Link href="/client/matters">
        <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to My Matters
        </Button>
      </Link>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-slate-900 text-white">
            {matter.matterNumber}
          </span>
          <Badge variant="teal" className="capitalize text-[11px]">{matter.status.replace("_", " ")}</Badge>
        </div>

        <h1 className="text-xl font-bold text-slate-900">{matter.title}</h1>
        <p className="text-xs text-slate-500">Court: {matter.court}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
          <div><span className="text-slate-400 block">Assigned Advocate:</span><strong>{matter.assignedAdvocateName}</strong></div>
          <div><span className="text-slate-400 block">Next Court Date:</span><strong className="text-amber-800">20-Nov-2024 (Bench 4B)</strong></div>
          <div><span className="text-slate-400 block">Stage:</span><strong>Final Arguments</strong></div>
        </div>
      </div>

      <Card className="p-5 bg-white space-y-3">
        <h3 className="text-sm font-bold text-slate-900">Recent Updates from Advocate</h3>
        <div className="space-y-2 text-xs">
          <div className="p-3 bg-emerald-50 rounded-lg text-emerald-950 space-y-1">
            <span className="font-bold flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" /> Interim Stay Granted</span>
            <p>Interim protection granted against tree-felling by High Court of Kerala until further hearing on 20-Nov.</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg text-slate-700">
            <strong>Pending Task:</strong> Certified copy of PWD alternate route sketch received and being incorporated into reply affidavit.
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function ClientMatterDetailPage() {
  return (
    <Suspense fallback={<div className="p-8 text-xs text-slate-500">Loading matter details...</div>}>
      <ClientMatterDetailContent />
    </Suspense>
  );
}
