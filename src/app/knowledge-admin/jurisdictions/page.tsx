"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { INDIAN_JURISDICTIONS } from "@/lib/mock-data";
import { Globe2 } from "lucide-react";

export default function KnowledgeAdminJurisdictionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Jurisdictions & Official Gazettes</h1>
        <p className="text-xs text-slate-500 mt-1">Configure automated legislative scrapers and gazette ingestion targets</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {INDIAN_JURISDICTIONS.map((j) => (
          <Card key={j.id} className="p-5 bg-white space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-slate-800">{j.code}</span>
              <Badge variant="teal">{j.activeStatus}</Badge>
            </div>
            <h3 className="text-sm font-bold text-slate-900">{j.name}</h3>
            <p className="text-xs text-slate-600">{j.primaryCourtName}</p>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
              Corpus: <strong className="text-slate-800">Acts & High Court Law Reports</strong>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
