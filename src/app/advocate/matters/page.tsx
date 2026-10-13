"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useMatterStore } from "@/stores/matter-store";
import { Briefcase, Plus, Search, Calendar, FileText, ArrowRight } from "lucide-react";

export default function AdvocateMattersPage() {
  const { matters, searchFilter, setSearchFilter } = useMatterStore();
  const [statusFilter, setStatusFilter] = React.useState("ALL");

  const filtered = matters.filter((m) => {
    if (statusFilter !== "ALL" && m.status !== statusFilter) return false;
    if (searchFilter) {
      const q = searchFilter.toLowerCase();
      return (
        m.matterNumber.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q) ||
        m.clientName.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            Matter Intelligence Workspace
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Active litigation files, court posting dates, and case intelligence across Kerala & Indian Courts
          </p>
        </div>
        <Link href="/advocate/drafting">
          <Button variant="teal" size="sm" className="gap-1.5 text-xs">
            <Plus className="h-4 w-4" /> New Matter Filing
          </Button>
        </Link>
      </div>

      {/* Search & Status Filters */}
      <div className="flex flex-col sm:flex-row gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
        <div className="flex-1">
          <Input
            isSearch
            placeholder="Search by matter number, title, or client name..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          {["ALL", "admitted", "pre_filing", "arguments"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors capitalize whitespace-nowrap cursor-pointer ${
                statusFilter === s
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {s.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Matters Table */}
      <div className="space-y-4">
        {filtered.map((matter) => (
          <Card key={matter.id} className="p-5 hover:border-slate-300 transition-all bg-white">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-slate-900 text-white">
                  {matter.matterNumber}
                </span>
                <span className="text-xs font-semibold text-slate-600">{matter.court}</span>
              </div>
              <Badge variant="teal" className="capitalize text-[11px]">
                {matter.status.replace("_", " ")}
              </Badge>
            </div>

            <h3 className="text-base font-bold text-slate-900 mb-2">{matter.title}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-500 mb-3">
              <div>
                <span className="text-slate-400">Client:</span> <strong className="text-slate-700">{matter.clientName}</strong>
              </div>
              <div>
                <span className="text-slate-400">Opposing:</span> <strong className="text-slate-700">{matter.opposingParty.name}</strong>
              </div>
              <div>
                <span className="text-slate-400">Assigned:</span> <strong className="text-slate-700">{matter.assignedAdvocateName}</strong>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-3 text-slate-500">
                <span><strong>{matter.facts.length}</strong> Facts</span>
                <span>•</span>
                <span><strong>{matter.issues.length}</strong> Issues</span>
                <span>•</span>
                <span><strong>{matter.hearings.length}</strong> Hearings</span>
                <span>•</span>
                <span><strong>{matter.documentCount}</strong> Documents</span>
              </div>
              <Link href={`/advocate/matters/${matter.id}`}>
                <Button variant="outline" size="sm" className="text-xs h-8 gap-1">
                  Open Workspace <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
