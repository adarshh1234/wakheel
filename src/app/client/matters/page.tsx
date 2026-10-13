"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_MATTERS } from "@/lib/mock-data";
import { Briefcase, ArrowRight, Calendar, UserCheck } from "lucide-react";

export default function ClientMattersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">My Legal Matters</h1>
        <p className="text-xs text-slate-500 mt-1">Track court status, hearing postings, and assigned advocate updates</p>
      </div>

      <div className="space-y-4">
        {MOCK_MATTERS.map((matter) => (
          <Card key={matter.id} className="p-5 bg-white hover:border-slate-300 transition-all space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                {matter.matterNumber}
              </span>
              <Badge variant="teal" className="capitalize text-[11px]">{matter.status.replace("_", " ")}</Badge>
            </div>

            <h3 className="text-base font-bold text-slate-900">{matter.title}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-600">
              <div>Court: <strong>{matter.court}</strong></div>
              <div>Assigned Advocate: <strong>{matter.assignedAdvocateName}</strong></div>
              <div>Next Hearing: <strong className="text-amber-800">20-Nov-2024 (Bench 4B)</strong></div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Filing Date: {matter.filingDate}
              </span>
              <Link href={`/client/matters/${matter.id}`}>
                <Button variant="outline" size="sm" className="text-xs h-8 gap-1">
                  View Matter Details <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
