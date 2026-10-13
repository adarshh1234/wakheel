"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MOCK_MATTERS } from "@/lib/mock-data";
import { Briefcase } from "lucide-react";

export default function AdminMattersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Platform Matters Overview</h1>
        <p className="text-xs text-slate-500 mt-1">Aggregated statistics and court distribution of legal matters across India</p>
      </div>

      <div className="space-y-3">
        {MOCK_MATTERS.map((m) => (
          <Card key={m.id} className="p-4 bg-white flex items-center justify-between flex-wrap gap-2 text-xs">
            <div>
              <span className="font-mono font-bold text-slate-900">{m.matterNumber}</span>
              <span className="text-slate-600 ml-2 font-semibold">{m.title}</span>
              <span className="text-slate-400 block text-[11px]">{m.court} • Advocate: {m.assignedAdvocateName}</span>
            </div>
            <Badge variant="teal" className="capitalize">{m.status.replace("_", " ")}</Badge>
          </Card>
        ))}
      </div>
    </div>
  );
}
