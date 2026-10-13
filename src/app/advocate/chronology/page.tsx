"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMatterStore } from "@/stores/matter-store";
import { History, Plus, FileText, CheckCircle2 } from "lucide-react";

export default function AdvocateChronologyPage() {
  const { getSelectedMatter } = useMatterStore();
  const matter = getSelectedMatter() || { facts: [] };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Chronology & Material Facts</h1>
          <p className="text-xs text-slate-500 mt-1">Timeline of events, documentary proof, and disputed fact flags</p>
        </div>
        <Button variant="teal" size="sm" className="text-xs gap-1.5">
          <Plus className="h-4 w-4" /> Add Chronological Event
        </Button>
      </div>

      <div className="space-y-3">
        {matter.facts.map((f, i) => (
          <Card key={f.id} className="p-4 bg-white hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-mono font-bold text-slate-900 px-2 py-0.5 rounded bg-slate-100">
                {f.date}
              </span>
              <div className="flex items-center gap-2">
                {f.isDisputed ? (
                  <Badge variant="warning" className="text-[10px]">Fact Disputed</Badge>
                ) : (
                  <Badge variant="success" className="text-[10px]">Undisputed</Badge>
                )}
                {f.verifiedByAdvocate && (
                  <span className="text-emerald-700 font-medium text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Advocate Verified
                  </span>
                )}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{f.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
