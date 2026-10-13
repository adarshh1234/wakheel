"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MOCK_LEGAL_SOURCES } from "@/lib/mock-data";
import { Search, BookOpen, Scale, ShieldCheck, ArrowRight, Save } from "lucide-react";

export default function AdvocateResearchPage() {
  const [query, setQuery] = React.useState("");
  const [activeForum, setActiveForum] = React.useState("ALL");

  const sources = MOCK_LEGAL_SOURCES.filter((s) => {
    if (activeForum !== "ALL" && !s.courtOrBody.toLowerCase().includes(activeForum.toLowerCase())) return false;
    if (query) {
      const q = query.toLowerCase();
      return (
        s.title.toLowerCase().includes(q) ||
        s.citation.toLowerCase().includes(q) ||
        s.headnotesSummary.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Indian Legal Research Engine</h1>
          <p className="text-xs text-slate-500 mt-1">Supreme Court & Kerala High Court precedent discovery with verified negative treatment</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex gap-2">
          <Input
            isSearch
            placeholder="Search keywords, Acts (e.g. Telegraph Act 1885, Arbitration Act 1996), judge, or citations..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="teal" className="text-xs px-5 font-semibold">Search Law</Button>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="text-slate-500 font-semibold self-center">Court / Source:</span>
          {["ALL", "Supreme Court", "High Court of Kerala", "Parliament"].map((f) => (
            <button
              key={f}
              onClick={() => setActiveForum(f)}
              className={`px-3 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                activeForum === f ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {sources.map((s) => (
          <Card key={s.id} className="p-5 bg-white hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                  {s.citation}
                </span>
                <span className="text-xs text-slate-500">• {s.courtOrBody} ({s.decisionOrEnactmentDate})</span>
              </div>
              <Badge verificationStatus={s.verificationStatus} />
            </div>

            <h3 className="text-base font-bold text-slate-900 mb-1.5">{s.title}</h3>
            {s.benchOrAuthority && (
              <p className="text-xs text-slate-500 mb-2 font-medium">Bench: {s.benchOrAuthority}</p>
            )}

            <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100 mb-3">
              <span className="font-semibold text-slate-900 block mb-0.5">Ratio Decidendi / Headnote:</span>
              {s.headnotesSummary}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
              <div className="flex flex-wrap gap-1">
                {s.keyLegalTopics.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" className="text-xs h-8 gap-1.5">
                <Save className="h-3.5 w-3.5 text-teal-700" /> Save to Active Matter
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
