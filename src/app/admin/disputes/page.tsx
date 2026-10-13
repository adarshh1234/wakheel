"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, CheckCircle2 } from "lucide-react";

export default function AdminDisputesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Disputes & Complaints Desk</h1>
        <p className="text-xs text-slate-500 mt-1">Platform user grievances and consultation refund arbitration</p>
      </div>

      <Card className="p-6 bg-white text-center py-10 space-y-2">
        <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
        <h3 className="text-base font-bold text-slate-900">No Active Complaints or Disputes</h3>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">
          All client consultations in Kerala and Indian jurisdictions have concluded with positive resolution.
        </p>
      </Card>
    </div>
  );
}
