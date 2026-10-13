"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MOCK_LEGAL_SOURCES } from "@/lib/mock-data";
import { Database } from "lucide-react";

export default function AdminLegalKnowledgePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Legal Knowledge Corpus Oversight</h1>
        <p className="text-xs text-slate-500 mt-1">Status of indexed acts, Kerala gazettes, and Supreme Court precedent graphs</p>
      </div>

      <div className="space-y-3">
        {MOCK_LEGAL_SOURCES.map((s) => (
          <Card key={s.id} className="p-4 bg-white flex items-center justify-between flex-wrap gap-2 text-xs">
            <div>
              <span className="font-mono font-bold text-slate-800">{s.citation}</span>
              <span className="text-slate-900 font-semibold ml-2">{s.title}</span>
              <span className="text-slate-400 block text-[11px]">{s.sourceType} • {s.courtOrBody}</span>
            </div>
            <Badge verificationStatus={s.verificationStatus} />
          </Card>
        ))}
      </div>
    </div>
  );
}
