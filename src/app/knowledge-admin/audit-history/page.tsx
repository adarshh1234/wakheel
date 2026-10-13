"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { History, Database } from "lucide-react";

export default function KnowledgeAdminAuditHistoryPage() {
  const logs = [
    { time: "28-Oct-2024 16:10 IST", curator: "Dr. Arundhati Menon", action: "Statute Ingestion Validated", detail: "Kerala Land Reforms Act 1963 Section 72 amendments" },
    { time: "26-Oct-2024 12:45 IST", curator: "Dr. Arundhati Menon", action: "Citation Graph Updated", detail: "Linked Perkins Eastman (2020 SC) to 14 High Court rulings" },
    { time: "24-Oct-2024 10:00 IST", curator: "System Ingestor", action: "Daily Supreme Court Cause List Sync", detail: "Processed 82 new judgment headnotes" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Knowledge Ingestion Audit History</h1>
        <p className="text-xs text-slate-500 mt-1">Audit trail of editorial changes, statute approvals, and vector index updates</p>
      </div>

      <Card className="p-5 bg-white">
        <div className="divide-y divide-slate-100 text-xs">
          {logs.map((l, i) => (
            <div key={i} className="py-3.5 space-y-1">
              <div className="flex items-center justify-between text-slate-500">
                <span className="font-semibold text-slate-900">{l.action}</span>
                <span className="font-mono text-[11px]">{l.time}</span>
              </div>
              <p className="text-slate-600 text-[11px]">Curator: <strong>{l.curator}</strong> • {l.detail}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
