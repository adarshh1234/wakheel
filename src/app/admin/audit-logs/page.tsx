"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { History, Shield } from "lucide-react";

export default function AdminAuditLogsPage() {
  const logs = [
    { time: "28-Oct-2024 15:30 IST", admin: "Rajesh Varma", action: "Advocate Bar Verification Approved", target: "Adv. Thomas Kurian (K/0892/2008)" },
    { time: "27-Oct-2024 10:15 IST", admin: "Rajesh Varma", action: "Kerala Land Reforms Statute Ingestion Approved", target: "Act 1 of 1964" },
    { time: "25-Oct-2024 09:00 IST", admin: "System", action: "Daily Cause List Sync", target: "High Court of Kerala (Ernakulam)" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Governance Audit Logs</h1>
        <p className="text-xs text-slate-500 mt-1">Immutable administrative audit log of all moderator and system actions</p>
      </div>

      <Card className="p-5 bg-white">
        <div className="divide-y divide-slate-100 text-xs">
          {logs.map((l, i) => (
            <div key={i} className="py-3 space-y-1">
              <div className="flex items-center justify-between text-slate-500">
                <span className="font-semibold text-slate-900">{l.action}</span>
                <span className="font-mono text-[11px]">{l.time}</span>
              </div>
              <p className="text-slate-600 text-[11px]">Admin: <strong>{l.admin}</strong> • Target: {l.target}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
