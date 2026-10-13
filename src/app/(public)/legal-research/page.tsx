"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MOCK_LEGAL_SOURCES, MOCK_CITATIONS } from "@/lib/mock-data";
import { Search, Scale, BookOpen, ShieldCheck, ArrowRight, Filter } from "lucide-react";

export default function LegalResearchPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCourt, setSelectedCourt] = React.useState("ALL");

  const filteredSources = MOCK_LEGAL_SOURCES.filter((s) => {
    if (selectedCourt !== "ALL" && !s.courtOrBody.includes(selectedCourt)) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        s.title.toLowerCase().includes(q) ||
        s.citation.toLowerCase().includes(q) ||
        s.keyLegalTopics.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <BookOpen className="h-3.5 w-3.5 text-teal-700" />
          <span>Indian Legal Research Discovery</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Authoritative Indian Case Law & Statutory Corpus
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Search judgments from the Supreme Court of India and High Court of Kerala, cross-referenced with Central Acts (BNS, CPC, Arbitration Act) and state legislation.
        </p>
      </div>

      {/* Interactive Search Bar */}
      <div className="max-w-3xl mx-auto bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex gap-2">
          <Input
            isSearch
            placeholder="Search by topic, act, section, or party name (e.g. Telegraph Act, Perkins Eastman, Valsamma)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-11"
          />
          <Button variant="teal" className="h-11 px-5 font-semibold">
            Search
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-slate-500">Filter by Forum:</span>
          {["ALL", "Supreme Court", "High Court of Kerala", "Parliament"].map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCourt(c)}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                selectedCourt === c
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Results Feed */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredSources.length} sample legal records</span>
          <span className="text-slate-400 font-mono">Kerala & National Digest</span>
        </div>

        <div className="space-y-3">
          {filteredSources.map((source) => (
            <Card key={source.id} className="p-5 hover:border-slate-300 transition-all bg-white">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                    {source.citation}
                  </span>
                  <span className="text-xs text-slate-500">• {source.courtOrBody}</span>
                </div>
                <Badge verificationStatus={source.verificationStatus} />
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1.5">{source.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {source.headnotesSummary}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {source.keyLegalTopics.map((topic) => (
                    <span key={topic} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px]">
                      {topic}
                    </span>
                  ))}
                </div>
                <Link href="/advocate/research">
                  <Button variant="outline" size="sm" className="text-xs h-7 gap-1">
                    Examine Precedent in Workspace <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
