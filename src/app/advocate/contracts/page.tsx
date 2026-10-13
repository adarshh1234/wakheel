"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { MOCK_VAULT_DOCUMENTS } from "@/lib/mock-data";
import { FileCheck, AlertTriangle, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";

export default function AdvocateContractsPage() {
  const contract = MOCK_VAULT_DOCUMENTS.find((d) => d.id === "doc_04") || MOCK_VAULT_DOCUMENTS[0];
  const clauses = contract.clauses || [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Contract Intelligence & Risk Review</h1>
          <p className="text-xs text-slate-500 mt-1">Side-by-side commercial clause analysis under Indian contract jurisprudence</p>
        </div>
        <Badge riskLevel={contract.overallRisk} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (5 cols): Contract Metadata & Summary */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="p-5 bg-white space-y-3">
            <h3 className="text-sm font-bold text-slate-900">{contract.title}</h3>
            <p className="text-xs text-slate-500 font-mono">{contract.fileName}</p>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
              <div><strong>Category:</strong> {contract.category}</div>
              <div><strong>Pages:</strong> {contract.pageCount} Pages analyzed</div>
              <div><strong>Uploader:</strong> {contract.ownerName}</div>
              <div><strong>Review Status:</strong> <Badge variant="warning">{contract.advocateReviewStatus}</Badge></div>
            </div>

            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs space-y-1">
              <span className="font-bold text-red-900 flex items-center gap-1">
                <AlertTriangle className="h-3.5 w-3.5 text-red-600" /> Supreme Court Compliance Flag
              </span>
              <p className="text-red-800 leading-snug">
                Unilateral sole arbitrator clause violates Perkins Eastman Architects v. HSCC (2020) and Section 12(5) of Arbitration Act.
              </p>
            </div>
          </Card>
        </div>

        {/* Right Column (7 cols): Extracted Clauses & Suggested Revisions */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-sm font-bold text-slate-900">Extracted Clauses & Heatmap ({clauses.length})</h3>

          {clauses.map((cl) => (
            <Card key={cl.id} className="p-5 bg-white space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900">{cl.clauseTitle}</h4>
                <Badge riskLevel={cl.riskLevel} />
              </div>

              <div className="p-3 bg-slate-50 rounded-lg text-xs font-mono text-slate-800 border border-slate-200">
                &ldquo;{cl.clauseText}&rdquo;
              </div>

              <div className="text-xs text-slate-600 space-y-1">
                <div><strong className="text-slate-800">Risk Assessment:</strong> {cl.riskExplanation}</div>
                {cl.suggestedRevision && (
                  <div className="p-2.5 rounded bg-emerald-50 text-emerald-950 font-sans border border-emerald-200">
                    <strong>Suggested Advocate Revision:</strong> {cl.suggestedRevision}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <DisclaimerBanner
        type="human_review_required"
        message="Every AI-generated clause revision is a suggestion until formally approved and redlined by an authorized advocate."
      />
    </div>
  );
}
