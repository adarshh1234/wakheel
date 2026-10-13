"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, FileText, Plus, Search } from "lucide-react";

export default function AdvocateKnowledgeBasePage() {
  const articles = [
    {
      title: "Chamber SOP: High Court Writ Filing Protocols (Ernakulam)",
      category: "Court Practice",
      updated: "15-Oct-2024",
      description: "Step-by-step checklist for registry indexing, caveat checks, emergency motion stamping, and service upon state counsel.",
    },
    {
      title: "Kerala Land Reforms Tenancy Title Playbook",
      category: "Property Law",
      updated: "10-Sep-2024",
      description: "Standard arguments regarding fixity of tenure under Section 72, Land Tribunal orders, and Kudikidappukars vesting rights.",
    },
    {
      title: "Commercial Arbitration Clause Standard Boilerplate",
      category: "Contracts",
      updated: "02-Aug-2024",
      description: "Curated 3-arbitrator and sole-arbitrator clauses compliant with 2019/2021 Arbitration amendments and Perkins Eastman ruling.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Chamber Knowledge Base & Playbooks</h1>
          <p className="text-xs text-slate-500 mt-1">Institutional legal knowledge, practice directions, and standard operating procedures</p>
        </div>
        <Button variant="teal" size="sm" className="text-xs gap-1.5">
          <Plus className="h-4 w-4" /> New Chamber Playbook
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {articles.map((art, idx) => (
          <Card key={idx} className="p-5 bg-white flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                {art.category}
              </span>
              <h3 className="text-sm font-bold text-slate-900">{art.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{art.description}</p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Updated: {art.updated}</span>
              <Button variant="outline" size="sm" className="text-xs h-7">
                Read Playbook
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
