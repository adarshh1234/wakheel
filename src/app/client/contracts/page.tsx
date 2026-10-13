"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { FileCheck, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ClientContractsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Contract & Agreement Reviews</h1>
        <p className="text-xs text-slate-500 mt-1">Plain-language risk breakdown of leases, commercial agreements, and vendor terms</p>
      </div>

      <Card className="p-5 bg-white space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">Master Software Services Agreement</h3>
          <Badge riskLevel="RED" />
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Analyzed for compliance with Indian arbitration and contract law. Red-flag clause detected.
        </p>

        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs space-y-1 text-red-950">
          <span className="font-bold flex items-center gap-1">
            <AlertTriangle className="h-3.5 w-3.5 text-red-600" /> High Risk Clause: Unilateral Arbitrator
          </span>
          <p>
            The other party reserved the sole right to choose the arbitrator. Your advocate Adv. Meera Krishnan has advised rejecting this clause and proposing independent appointment by the High Court of Kerala.
          </p>
        </div>
      </Card>

      <DisclaimerBanner
        type="human_review_required"
        message="AI-assisted contract analysis highlights risks for guidance. Always have critical agreements verified by your advocate before signing."
      />
    </div>
  );
}
