"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_LEGAL_SOURCES } from "@/lib/mock-data";
import { BookOpen, Plus, Search } from "lucide-react";

export default function KnowledgeAdminSourcesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Legal Sources Catalogue</h1>
          <p className="text-xs text-slate-500 mt-1">Manage official enactments, Kerala gazettes, and Supreme Court precedent digests</p>
        </div>
        <Button variant="teal" size="sm" className="text-xs gap-1.5">
          <Plus className="h-4 w-4" /> Add Statutory Source
        </Button>
      </div>

      <div className="space-y-3">
        {MOCK_LEGAL_SOURCES.map((s) => (
          <Card key={s.id} className="p-4 bg-white flex items-center justify-between flex-wrap gap-2 text-xs">
            <div>
              <span className="font-mono font-bold text-slate-900">{s.citation}</span>
              <span className="font-semibold text-slate-800 ml-2">{s.title}</span>
              <span className="text-slate-400 block text-[11px]">{s.sourceType} • {s.courtOrBody}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge verificationStatus={s.verificationStatus} />
              <Button variant="outline" size="sm" className="text-xs h-7">Edit Holdings</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
