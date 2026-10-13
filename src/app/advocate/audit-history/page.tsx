"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { History, Shield, Clock } from "lucide-react";

export default function AdvocateAuditHistoryPage() {
  const logs = [
    { time: "28-Oct-2024 14:22 IST", action: "Writ Petition Revision Saved", details: "WP(C) 19482/2024 grounds updated by Adv. Meera Krishnan" },
    { time: "26-Oct-2024 11:05 IST", action: "Contract Intelligence Run", details: "Scanned MSA_Malabar_Coastal.pdf for unilateral arbitration clause" },
    { time: "24-Oct-2024 09:30 IST", action: "Client Consultation Completed", details: "Conducted video consultation with Gopakumar Nambiar" },
    { time: "20-Oct-2024 16:45 IST", action: "Precedent Saved to Matter", details: "Valsamma v. KSEB (2011 (2) KLT 234) linked to WP(C) 19482/2024" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Chamber Audit History & Activity Logs</h1>
        <p className="text-xs text-slate-500 mt-1">Immutable access trails, document revision timestamps, and compliance logs</p>
      </div>

      <Card className="p-5 bg-white">
        <div className="divide-y divide-slate-100 text-xs">
          {logs.map((l, i) => (
            <div key={i} className="py-3.5 space-y-1">
              <div className="flex items-center justify-between text-slate-500">
                <span className="font-semibold text-slate-900">{l.action}</span>
                <span className="font-mono text-[11px]">{l.time}</span>
              </div>
              <p className="text-slate-600 text-[11px]">{l.details}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
