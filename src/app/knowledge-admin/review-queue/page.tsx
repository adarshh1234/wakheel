"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, CheckCircle2, XCircle } from "lucide-react";

export default function KnowledgeAdminReviewQueuePage() {
  const queue = [
    { title: "Kerala Land Reforms (Amendment) Rules, 2024", type: "State Rules", uploadedBy: "Curator Team", status: "Pending Review" },
    { title: "Valsamma v. KSEB Headnote Excerpt Update", type: "High Court Ratio", uploadedBy: "Editorial Cell", status: "Pending Review" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Curation Review Queue</h1>
        <p className="text-xs text-slate-500 mt-1">Editorial sign-off queue for statutory texts and judicial headnotes</p>
      </div>

      <div className="space-y-3">
        {queue.map((item, idx) => (
          <Card key={idx} className="p-4 bg-white flex items-center justify-between flex-wrap gap-2 text-xs">
            <div>
              <span className="font-bold text-slate-900">{item.title}</span>
              <span className="text-slate-500 ml-2">• {item.type} (Submitted by: {item.uploadedBy})</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-xs text-emerald-700 h-7">
                <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> Approve
              </Button>
              <Button variant="outline" size="sm" className="text-xs text-red-700 h-7">
                Reject
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
