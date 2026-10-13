"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_ADVOCATES } from "@/lib/mock-data";
import { ShieldCheck, CheckCircle2, XCircle, FileText } from "lucide-react";

export default function AdminVerificationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Advocate Bar Council Verification</h1>
        <p className="text-xs text-slate-500 mt-1">Cross-check Bar Council of Kerala certificates and court enrollment records</p>
      </div>

      <div className="space-y-3">
        {MOCK_ADVOCATES.map((adv) => (
          <Card key={adv.id} className="p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-900">{adv.name}</span>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                  {adv.barCouncilNumber}
                </span>
                <Badge variant="teal">{adv.stateBarCouncil}</Badge>
              </div>
              <p className="text-xs text-slate-600">
                Primary Courts: {adv.primaryCourts.join(", ")} • Experience: {adv.experienceYears} Years Standing
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Button variant="outline" size="sm" className="text-xs text-emerald-700 hover:bg-emerald-50 h-8">
                <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> Verified
              </Button>
              <Button variant="outline" size="sm" className="text-xs text-slate-600 h-8">
                View Certificate
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
