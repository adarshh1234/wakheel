"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Workflow, Play, CheckCircle2, FileText, ArrowRight } from "lucide-react";

export default function AdvocateWorkflowsPage() {
  const workflows = [
    {
      id: "wf_01",
      title: "16-Step Deep Research Memo Workflow",
      description: "Extract facts, identify statutory provisions, cross-reference Supreme Court & Kerala High Court rulings, build authority matrix, and draft memo.",
      steps: 16,
      category: "Research",
    },
    {
      id: "wf_02",
      title: "High Court Writ Petition Admission Pipeline",
      description: "Review impugned order, extract jurisdictional defects under Art 226, draft grounds, and prepare interim stay affidavit.",
      steps: 8,
      category: "Litigation",
    },
    {
      id: "wf_03",
      title: "Arbitration Agreement Perkins Eastman Redline",
      description: "Detect unilateral arbitrator nominations, generate Section 11(6) objections, and propose standard SIAC/domestic arbitration clause.",
      steps: 5,
      category: "Contracts",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Workflows & Chamber Skills</h1>
        <p className="text-xs text-slate-500 mt-1">Multi-step legal automation pipelines with human approval checkpoints</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {workflows.map((wf) => (
          <Card key={wf.id} className="p-5 bg-white flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                  {wf.category}
                </span>
                <span className="text-xs font-mono text-teal-700 font-semibold">{wf.steps} Steps</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">{wf.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{wf.description}</p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <Button variant="outline" size="sm" className="w-full text-xs font-semibold gap-1.5">
                <Play className="h-3 w-3 text-teal-700" /> Execute Pipeline
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
