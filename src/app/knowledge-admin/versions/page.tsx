"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History, GitCommit } from "lucide-react";

export default function KnowledgeAdminVersionsPage() {
  const versions = [
    { title: "Bharatiya Nyaya Sanhita, 2023", version: "v2.0 (Enacted)", date: "01-Jul-2024", note: "Official commencement replacing IPC 1860" },
    { title: "Arbitration and Conciliation Act, 1996", version: "v3.1 (Post-2021 Amendment)", date: "10-Mar-2021", note: "Section 36 & 43L modifications indexed" },
    { title: "Kerala Land Reforms Act, 1963", version: "v4.0 (Consolidated)", date: "15-Aug-2023", note: "Kudikidappukars vesting amendments integrated" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Statutory Version Control</h1>
        <p className="text-xs text-slate-500 mt-1">Track legislative amendments, repealed sections, and prospective effective dates</p>
      </div>

      <div className="space-y-3">
        {versions.map((v, i) => (
          <Card key={i} className="p-4 bg-white flex items-center justify-between flex-wrap gap-2 text-xs">
            <div>
              <span className="font-bold text-slate-900">{v.title}</span>
              <span className="text-teal-700 ml-2 font-mono font-semibold">{v.version}</span>
              <p className="text-slate-500 text-[11px] mt-0.5">{v.note}</p>
            </div>
            <span className="text-slate-400 font-mono text-[11px]">{v.date}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
