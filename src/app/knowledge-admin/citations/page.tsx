"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_CITATIONS } from "@/lib/mock-data";
import { GitBranch, Link2, Plus } from "lucide-react";

export default function KnowledgeAdminCitationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Citation Graph Editor</h1>
          <p className="text-xs text-slate-500 mt-1">Cross-link citing cases, mark overruling relations, and tag discordant bench views</p>
        </div>
        <Button variant="teal" size="sm" className="text-xs gap-1.5">
          <Plus className="h-4 w-4" /> Link New Citation Edge
        </Button>
      </div>

      <div className="space-y-3">
        {MOCK_CITATIONS.map((c) => (
          <Card key={c.id} className="p-4 bg-white flex items-center justify-between flex-wrap gap-2 text-xs">
            <div>
              <span className="font-mono font-bold text-slate-900">{c.citationString}</span>
              <span className="text-slate-600 ml-2 font-semibold">{c.caseName}</span>
              <span className="text-slate-400 block text-[11px]">Treatment: {c.treatment} • Court: {c.court}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge verificationStatus={c.status} />
              <Button variant="outline" size="sm" className="text-xs h-7 gap-1">
                <Link2 className="h-3 w-3" /> Edit Graph Edges
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
