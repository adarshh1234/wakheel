"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { MOCK_CITATIONS } from "@/lib/mock-data";
import { Scale, ShieldCheck, AlertTriangle, CheckCircle2, Search } from "lucide-react";

export default function AdvocateAuthoritiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Authorities & Citation Verification</h1>
        <p className="text-xs text-slate-500 mt-1">Real-time shepardization, overruled precedents check, and bench treatment statuses</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Card className="p-3 bg-white">
          <span className="text-[11px] font-semibold text-slate-500 uppercase block">Total Authorities</span>
          <span className="text-2xl font-bold text-slate-900 mt-1 block">{MOCK_CITATIONS.length}</span>
        </Card>
        <Card className="p-3 bg-white">
          <span className="text-[11px] font-semibold text-slate-500 uppercase block">Valid Precedents</span>
          <span className="text-2xl font-bold text-emerald-700 mt-1 block">2</span>
        </Card>
        <Card className="p-3 bg-white">
          <span className="text-[11px] font-semibold text-slate-500 uppercase block">Conflicting Opinions</span>
          <span className="text-2xl font-bold text-purple-700 mt-1 block">1</span>
        </Card>
        <Card className="p-3 bg-white">
          <span className="text-[11px] font-semibold text-slate-500 uppercase block">Unverified Citations</span>
          <span className="text-2xl font-bold text-amber-700 mt-1 block">1</span>
        </Card>
      </div>

      <div className="space-y-3">
        {MOCK_CITATIONS.map((cit) => (
          <Card key={cit.id} className="p-5 bg-white space-y-2.5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                  {cit.citationString}
                </span>
                <span className="text-xs text-slate-600 font-semibold">{cit.court} ({cit.year})</span>
              </div>
              <Badge verificationStatus={cit.status} />
            </div>

            <h3 className="text-sm font-bold text-slate-900">{cit.caseName}</h3>

            <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1 text-slate-700">
              <div><strong className="text-slate-900">Bench / Portion:</strong> {cit.bench || "General Bench"} • {cit.relevantSectionOrPara}</div>
              <div><strong className="text-slate-900">Treatment Status:</strong> <span className="font-semibold text-teal-800">{cit.treatment}</span> (Citing cases: {cit.citingCasesCount || "N/A"})</div>
              <div><strong className="text-slate-900">Analysis:</strong> {cit.statusExplanation}</div>
            </div>
          </Card>
        ))}
      </div>

      <DisclaimerBanner
        type="demo_notice"
        message="Simulated Citation Verification: In this frontend preview, citation records are verified against local illustrative datasets."
      />
    </div>
  );
}
