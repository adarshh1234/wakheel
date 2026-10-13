"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { MOCK_ADVOCATES } from "@/lib/mock-data";
import {
  ShieldCheck,
  Users,
  Scale,
  Briefcase,
  AlertTriangle,
  Server,
  Activity,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Governance Banner */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              Platform Trust & Governance
            </h1>
            <Badge variant="teal">Super Admin</Badge>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Least-Privilege Administrative Oversight • State Bar Council Verification & Compliance
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="success" className="text-xs py-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
            System Healthy: All Services Operational
          </Badge>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 border-slate-200">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            Registered Advocates
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-slate-900">1,248</span>
            <span className="text-xs text-teal-700 font-medium">Kerala & National</span>
          </div>
        </Card>

        <Card className="p-4 border-slate-200">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            Pending Bar Verification
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-amber-700">14</span>
            <span className="text-xs text-amber-600 font-medium">Requires Scrutiny</span>
          </div>
        </Card>

        <Card className="p-4 border-slate-200">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            Active Client Matters
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-slate-900">4,812</span>
            <span className="text-xs text-slate-500">Across 14 Districts</span>
          </div>
        </Card>

        <Card className="p-4 border-slate-200">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            AI Research Queries
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-slate-900">28,940</span>
            <span className="text-xs text-emerald-600 font-medium">100% Guardrailed</span>
          </div>
        </Card>
      </div>

      {/* Advocate Verification Queue */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base">Advocate Enrollment Verification Queue</CardTitle>
            <CardDescription>
              Verify advocate Bar Council certificates and court standing prior to badge issuance
            </CardDescription>
          </div>
          <Badge variant="outline" className="text-xs">
            Bar Council of Kerala API Pilot
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-slate-100">
            {MOCK_ADVOCATES.map((adv) => (
              <div key={adv.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">{adv.name}</span>
                    <Badge variant="secondary" className="text-[10px]">
                      {adv.barCouncilNumber}
                    </Badge>
                    <span className="text-xs text-slate-500">• {adv.stateBarCouncil}</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Courts: {adv.primaryCourts.join(", ")} • Standing: {adv.experienceYears} Years
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Button variant="outline" size="sm" className="text-xs h-8 text-emerald-700 hover:bg-emerald-50">
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> Approve
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs h-8 text-red-700 hover:bg-red-50">
                    <XCircle className="h-3.5 w-3.5 mr-1" /> Scrutinize
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Privacy and Least Privilege Notice */}
      <DisclaimerBanner
        type="demo_notice"
        message="Strict Least-Privilege Access: Administrator interfaces do not provide unvetted access to private client-advocate legal communications or confidential work-product."
      />
    </div>
  );
}
