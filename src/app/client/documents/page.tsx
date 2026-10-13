"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_VAULT_DOCUMENTS } from "@/lib/mock-data";
import { FileText, UploadCloud, Download, CheckCircle2 } from "lucide-react";

export default function ClientDocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">My Case Documents</h1>
          <p className="text-xs text-slate-500 mt-1">Uploaded petitions, certified copies, and requested identity records</p>
        </div>
        <Button variant="teal" size="sm" className="text-xs gap-1.5">
          <UploadCloud className="h-4 w-4" /> Upload Document
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MOCK_VAULT_DOCUMENTS.map((doc) => (
          <Card key={doc.id} className="p-5 bg-white space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-teal-700" />
                <span className="text-xs font-mono font-bold text-slate-700">{doc.category}</span>
              </div>
              <Badge variant="outline" className="text-[10px]">{doc.fileSize}</Badge>
            </div>
            <h3 className="text-sm font-bold text-slate-900">{doc.title}</h3>
            <p className="text-xs text-slate-500 font-mono">{doc.fileName}</p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Uploaded {doc.uploadedAt.split("T")[0]}</span>
              <Button variant="outline" size="sm" className="text-xs h-7 gap-1">
                <Download className="h-3 w-3" /> Download
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
